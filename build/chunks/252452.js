/** chunk id: 252452 params = (module,exports,require) **/
t.d(n, {
    A: () => i
});
var a = t(73153);
let i = {
    close() {
        a.h.dispatch({
            type: "USER_SETTINGS_MODAL_CLOSE"
        })
    },
    setSection(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        a.h.dispatch({
            type: "USER_SETTINGS_MODAL_SET_SECTION",
            section: e,
            subsection: n,
            ...t
        })
    },
    clearSubsection(e) {
        a.h.dispatch({
            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
            forSection: e
        })
    },
    clearLocation() {
        a.h.dispatch({
            type: "USER_SETTINGS_MODAL_CLEAR_LOCATION"
        })
    }
}