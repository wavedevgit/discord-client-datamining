/** chunk id: 789646 params = (module,exports,require) **/
n.d(t, {
    Mg: () => s,
    RZ: () => d
});
var i = n(627968),
    a = n(64700),
    r = n(403362);
let l = a.createContext(void 0);

function s() {
    let e = a.useContext(l);
    if (null == e) throw Error("No PollFocusContextProvider found");
    return e
}

function o(e) {
    let {
        children: t,
        actionButtonRef: n,
        pollAnswerRef: r,
        manageFocusOnAction: s
    } = e, o = a.useMemo(() => ({
        actionButtonRef: n,
        pollAnswerRef: r,
        manageFocusOnAction: s
    }), [n, r, s]);
    return (0, i.jsx)(l.Provider, {
        value: o,
        children: t
    })
}

function d(e) {
    let {
        children: t
    } = e, [n, l] = a.useState(), s = a.useRef(null), d = a.useRef(null);
    return a.useEffect(() => {
        "POLL_ANSWERS" === n && null != d.current && d.current?.ref?.focus(), "ACTION_BUTTON" === n && null != s.current && s.current?.focus()
    }, [n]), (0, i.jsx)(o, {
        pollAnswerRef: d,
        actionButtonRef: s,
        manageFocusOnAction: e => {
            switch (e) {
                case "submit":
                case "cancel":
                    l("ACTION_BUTTON");
                    break;
                case "remove":
                case "showVotes":
                    l("POLL_ANSWERS");
                    break;
                case "showVoterDetails":
                    break;
                default:
                    (0, r.xb)(e)
            }
        },
        children: t
    })
}