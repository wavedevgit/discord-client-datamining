/** chunk id: 166649, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(562465),
    i = n(73153),
    a = n(652215);
let o = {
    show(e, t) {
        i.h.wait(() => i.h.dispatch({
            type: "TUTORIAL_INDICATOR_SHOW",
            tutorialId: e,
            renderData: t
        }))
    },
    hide(e) {
        i.h.wait(() => i.h.dispatch({
            type: "TUTORIAL_INDICATOR_HIDE",
            tutorialId: e
        }))
    },
    dismiss(e) {
        i.h.wait(() => i.h.dispatch({
            type: "TUTORIAL_INDICATOR_DISMISS",
            tutorialId: e
        })), r.Bo.put({
            url: a.Rsh.TUTORIAL_INDICATOR(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
    },
    suppressAll() {
        i.h.dispatch({
            type: "TUTORIAL_INDICATOR_SUPPRESS_ALL"
        }), r.Bo.post({
            url: a.Rsh.TUTORIAL_INDICATORS_SUPPRESS,
            oldFormErrors: !0,
            rejectWithError: !0
        })
    }
}