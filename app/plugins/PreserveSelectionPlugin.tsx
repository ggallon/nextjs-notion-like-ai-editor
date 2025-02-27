import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  $setSelection,
  COMMAND_PRIORITY_LOW,
  type LexicalCommand,
  type RangeSelection,
  createCommand,
} from "lexical";
import { useEffect, useRef } from "react";

export const SAVE_SELECTION_COMMAND: LexicalCommand<null> = createCommand();
export const RESTORE_SELECTION_COMMAND: LexicalCommand<null> = createCommand();

// Saves a selection and allows you reload it later
export function PreserveSelectionPlugin() {
  const [editor] = useLexicalComposerContext();
  const savedSelection = useRef<RangeSelection | null>(null);

  useEffect(() => {
    const saveSelection = () => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        savedSelection.current = selection;
      }
      return true;
    };

    const restoreSelection = () => {
      if (savedSelection.current) {
        $setSelection(savedSelection.current);
      }
      return true;
    };

    const unregisterSaveCommand = editor.registerCommand(
      SAVE_SELECTION_COMMAND,
      saveSelection,
      COMMAND_PRIORITY_LOW,
    );

    const unregisterRestoreCommand = editor.registerCommand(
      RESTORE_SELECTION_COMMAND,
      restoreSelection,
      COMMAND_PRIORITY_LOW,
    );

    return () => {
      unregisterSaveCommand();
      unregisterRestoreCommand();
    };
  }, [editor, savedSelection]);

  return null;
}
