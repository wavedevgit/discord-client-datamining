/** chunk id: 182912 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(294426),
    o = n(435371),
    d = n(397927),
    c = n(713517),
    u = n(696451),
    m = n(486020),
    _ = n(562153),
    h = n(836629),
    p = n(754521);
let g = {
    mass: 1,
    tension: 170,
    friction: 26
};

function A(e) {
    let {
        className: t,
        guildId: n,
        channelId: s,
        members: c,
        ref: h,
        motion: A
    } = e, f = c.length > 4, C = f ? c.slice(0, 3) : c, E = f ? c.length - 4 + 1 : 0, I = Math.min(f ? C.length + 1 : C.length, 4), v = (A?.percentX ?? 0) * 6, b = (A?.percentY ?? 0) * 6, T = 1 + (A?.proximity ?? 0) / 2 * .08, [y, N] = (0, d.zhh)(() => ({
        x: 0,
        y: 0,
        scale: 1,
        config: g
    }));
    return l.useEffect(() => {
        N({
            x: v,
            y: b,
            scale: T
        })
    }, [v, b, T, N]), (0, i.jsxs)(a.animated.div, {
        ref: h,
        className: r()(p.gg, t),
        "data-count": I,
        "aria-hidden": !0,
        style: {
            transform: (0, a.to)([y.x, y.y, y.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`)
        },
        children: [C.map((e, t) => (0, i.jsx)("div", {
            className: p.my,
            children: (0, i.jsx)(o.m_, {
                text: _.Ay.getName(n, s, e),
                children: (0, i.jsx)(d.euF, {
                    src: function(e, t, n) {
                        let i = u.Ay.getMember(t, e.id);
                        if (null != i) {
                            let e = (0, m.xT)(i);
                            if (null != e) return e
                        }
                        return e.getAvatarURL(t, n)
                    }(e, n, 0 === t ? 80 : 60),
                    size: 1 === I ? d._3J.SIZE_80 : 2 === I && 0 === t ? d._3J.DEPRECATED_SIZE_60 : 2 === I && 1 === t ? d._3J.SIZE_40 : I > 2 && 0 === t ? d._3J.DEPRECATED_SIZE_60 : I > 2 && 1 === t ? d._3J.SIZE_48 : I > 2 ? d._3J.SIZE_40 : d._3J.SIZE_48,
                    "aria-hidden": !0
                })
            })
        }, e.id)), f && (0, i.jsx)(x, {
            guildId: n,
            channelId: s,
            members: c,
            count: E
        }, "overflow")]
    })
}

function x(e) {
    let {
        guildId: t,
        channelId: n,
        members: s,
        count: a
    } = e, o = l.useRef(null), {
        isHoveringOrFocusing: u
    } = (0, c.A)(o);
    return (0, i.jsx)(h.$, {
        targetElementRef: o,
        guildId: t,
        channelId: n,
        users: s,
        shouldShow: u,
        children: e => (0, i.jsx)("div", {
            className: r()(p.my, p.k2),
            ref: o,
            ...e,
            children: (0, i.jsx)(d.Text, {
                variant: "text-sm/semibold",
                color: "text-default",
                children: a > 99 ? ">99" : `+${a}`
            })
        })
    })
}