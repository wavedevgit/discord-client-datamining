/** chunk id: 789646 params = (module,exports,require) **/
n.d(t, {
    Mg: () => r,
    RZ: () => d
});
var i = n(627968),
    a = n(64700),
    l = n(403362);
let s = a.createContext(void 0);

function r() {
    let e = a.useContext(s);
    if (null == e) throw Error("No PollFocusContextProvider found");
    return e
}

function o(e) {
    let {
        children: t,
        actionButtonRef: n,
        pollAnswerRef: l,
        manageFocusOnAction: r
    } = e, o = a.useMemo(() => ({
        actionButtonRef: n,
        pollAnswerRef: l,
        manageFocusOnAction: r
    }), [n, l, r]);
    return (0, i.jsx)(s.Provider, {
        value: o,
        children: t
    })
}

function d(e) {
    let {
        children: t
    } = e, [n, s] = a.useState(), r = a.useRef(null), d = a.useRef(null);
    return a.useEffect(() => {
        "POLL_ANSWERS" === n && null != d.current && d.current?.ref?.focus(), "ACTION_BUTTON" === n && null != r.current && r.current?.focus()
    }, [n]), (0, i.jsx)(o, {
        pollAnswerRef: d,
        actionButtonRef: r,
        manageFocusOnAction: e => {
            switch (e) {
                case "submit":
                case "cancel":
                    s("ACTION_BUTTON");
                    break;
                case "remove":
                case "showVotes":
                    s("POLL_ANSWERS");
                    break;
                case "showVoterDetails":
                    break;
                default:
                    (0, l.xb)(e)
            }
        },
        children: t
    })
}