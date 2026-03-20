/** chunk id: 252452 params = (module,exports,require) **/
n.d(t, {
    A: () => i
});
var a = n(73153);
let i = {
    close() {
        a.h.dispatch({
            type: "USER_SETTINGS_MODAL_CLOSE"
        })
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        a.h.dispatch({
            type: "USER_SETTINGS_MODAL_SET_SECTION",
            section: e,
            subsection: t,
            ...n
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