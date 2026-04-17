/** chunk id: 789646 params = (module,exports,require) **/
n.d(t, {
    Mg: () => s,
    RZ: () => d
});
var i = n(627968),
    a = n(64700),
    l = n(403362);
let r = a.createContext(void 0);

function s() {
    let e = a.useContext(r);
    if (null == e) throw Error("No PollFocusContextProvider found");
    return e
}

function o(e) {
    let {
        children: t,
        actionButtonRef: n,
        pollAnswerRef: l,
        manageFocusOnAction: s
    } = e, o = a.useMemo(() => ({
        actionButtonRef: n,
        pollAnswerRef: l,
        manageFocusOnAction: s
    }), [n, l, s]);
    return (0, i.jsx)(r.Provider, {
        value: o,
        children: t
    })
}

function d(e) {
    let {
        children: t
    } = e, [n, r] = a.useState(), s = a.useRef(null), d = a.useRef(null);
    return a.useEffect(() => {
        "POLL_ANSWERS" === n && null != d.current && d.current?.ref?.focus(), "ACTION_BUTTON" === n && null != s.current && s.current?.focus()
    }, [n]), (0, i.jsx)(o, {
        pollAnswerRef: d,
        actionButtonRef: s,
        manageFocusOnAction: e => {
            switch (e) {
                case "submit":
                case "cancel":
                    r("ACTION_BUTTON");
                    break;
                case "remove":
                case "showVotes":
                    r("POLL_ANSWERS");
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