/** Chunk was on 41727 **/
/** chunk id: 782093, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(554146),
    a = n(831741),
    o = n(826673),
    c = n(379848),
    u = n(320501),
    d = n(49999);

function p(e) {
    let {
        children: t,
        enabled: n,
        animationContainerClassName: p,
        glowClassName: h,
        trinketsClassName: f
    } = e, g = (0, i.bG)([u.A], () => u.A.hasCurrentUserSentMessageSinceAppStart()), m = l.useMemo(() => {
        let e = [];
        return g && n && e.push(s.M.ACTIVITIES_CHAT_BUTTON_NUX_V2), e
    }, [g, n]), b = () => {
        setTimeout(() => (0, o.Dr)(s.M.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
            dismissAction: d.i.AUTO_DISMISS
        }), 1e4)
    };
    return (0, r.jsx)(c.Ay, {
        contentTypes: m,
        children: e => {
            let {
                visibleContent: n
            } = e;
            return n === s.M.ACTIVITIES_CHAT_BUTTON_NUX_V2 ? (0, r.jsx)(a.R, {
                animationContainerClassName: p,
                glowClassName: h,
                trinketsClassName: f,
                onMount: b,
                children: t
            }) : t
        }
    })
}