/** chunk id: 789646 params = (module,exports,require) **/
n.d(t, {
    Mg: () => r,
    RZ: () => d
});
var i = n(627968),
    l = n(64700),
    s = n(403362);
let a = l.createContext(void 0);

function r() {
    let e = l.useContext(a);
    if (null == e) throw Error("No PollFocusContextProvider found");
    return e
}

function o(e) {
    let {
        children: t,
        actionButtonRef: n,
        pollAnswerRef: s,
        manageFocusOnAction: r
    } = e, o = l.useMemo(() => ({
        actionButtonRef: n,
        pollAnswerRef: s,
        manageFocusOnAction: r
    }), [n, s, r]);
    return (0, i.jsx)(a.Provider, {
        value: o,
        children: t
    })
}

function d(e) {
    let {
        children: t
    } = e, [n, a] = l.useState(), r = l.useRef(null), d = l.useRef(null);
    return l.useEffect(() => {
        "POLL_ANSWERS" === n && null != d.current && d.current?.ref?.focus(), "ACTION_BUTTON" === n && null != r.current && r.current?.focus()
    }, [n]), (0, i.jsx)(o, {
        pollAnswerRef: d,
        actionButtonRef: r,
        manageFocusOnAction: e => {
            switch (e) {
                case "submit":
                case "cancel":
                    a("ACTION_BUTTON");
                    break;
                case "remove":
                case "showVotes":
                    a("POLL_ANSWERS");
                    break;
                case "showVoterDetails":
                    break;
                default:
                    (0, s.xb)(e)
            }
        },
        children: t
    })
}