/** chunk id: 482786, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
});
var r = {
    start: "end",
    end: "start"
};

function i(e) {
    return e.replace(/start|end/g, function(e) {
        return r[e]
    })
}