/** chunk id: 252452 params = (module,exports,require) **/
E.d(t, {
    A: () => i
});
var e = E(73153);
let i = {
    close() {
        e.h.dispatch({
            type: "USER_SETTINGS_MODAL_CLOSE"
        })
    },
    setSection(_) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        e.h.dispatch({
            type: "USER_SETTINGS_MODAL_SET_SECTION",
            section: _,
            subsection: t,
            ...E
        })
    },
    clearSubsection(_) {
        e.h.dispatch({
            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
            forSection: _
        })
    },
    clearLocation() {
        e.h.dispatch({
            type: "USER_SETTINGS_MODAL_CLEAR_LOCATION"
        })
    }
}