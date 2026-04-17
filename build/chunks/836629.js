/** chunk id: 836629 params = (module,exports,require) **/
n.d(t, {
    $: () => h,
    o: () => m
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(397927),
    o = n(713517),
    d = n(538451),
    c = n(562153),
    u = n(581448),
    _ = n(824078);

function m() {
    let e = a.useRef(null),
        {
            isHoveringOrFocusing: t
        } = (0, o.A)(e),
        [n, i] = a.useState(!1),
        l = t || n,
        [r, s] = a.useState(!1),
        d = a.useRef(null);
    return a.useEffect(() => (l || (d.current = setTimeout(() => s(!1), 150)), () => clearTimeout(d.current)), [l]), l && !r && s(!0), {
        triggerRef: e,
        shouldShow: l || r,
        onPopoutHoverOrFocus: i
    }
}

function h(e) {
    let {
        guildId: t,
        channelId: n,
        users: l,
        onHoverOrFocus: r,
        ...o
    } = e, d = a.useCallback(e => (0, i.jsx)(p, {
        users: e,
        guildId: t,
        channelId: n,
        onHoverOrFocus: r
    }), [t, n, r]);
    return (0, i.jsx)(s.YNO, {
        renderPopout: () => d(l),
        ...o
    })
}

function p(e) {
    let {
        users: t,
        guildId: n,
        channelId: l,
        onHoverOrFocus: m
    } = e, h = a.useRef(null), {
        isHoveringOrFocusing: p
    } = (0, o.A)(h);
    return a.useEffect(() => {
        m?.(p)
    }, [m, p]), (0, i.jsx)(s.HOs, {
        ref: h,
        className: r()(_.popover, u.o),
        style: {
            "--custom-popover-width": "200px"
        },
        children: (0, i.jsx)("div", {
            children: t.map(e => (0, i.jsx)(d.A, {
                user: e,
                guildId: n ?? void 0,
                channelId: l,
                nick: c.Ay.getNickname(n, l, e)
            }, e.id))
        })
    })
}