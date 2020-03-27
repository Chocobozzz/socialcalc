if('undefined' === typeof document || typeof document.getElementById !== 'function') {
    // We don't really need a DOM-based presentation layer on the server
    SocialCalc.GetEditorCellElement = function () {};
    SocialCalc.ReplaceCell = function () {};
    SocialCalc.EditorRenderSheet = function () {};
    SocialCalc.SpreadsheetControlSortSave = function () { return ""; };
    SocialCalc.SpreadsheetControlStatuslineCallback = function () {};
    SocialCalc.DoPositionCalculations = function (editor) {
        SocialCalc.EditorSheetStatusCallback(
            null, "doneposcalc", null, editor
        );
    };
}

// Compatibility with webworker-threads
if (typeof self !== 'undefined' && self.onmessage) {
    window = {}
    window.setTimeout = function (cb, ms) {
        if (ms <= 1) { self.nextTick(cb); }
    };
    window.clearTimeout = function () {};
}

    // Just return a value to define the module export.
    return SocialCalc;
}));
