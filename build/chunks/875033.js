/** chunk id: 875033 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(397927),
    a = n(207963),
    o = n(953756),
    d = n(520586),
    c = n(564107),
    u = n(985018),
    _ = n(810644),
    m = n(725325);

function h(e) {
    let {
        components: t,
        message: n,
        gifAutoPlay: l,
        getGifFavButton: h,
        getOnMediaItemContextMenu: p,
        shouldHideMediaOptions: g,
        enabledContentHarmTypeFlags: A,
        onSuppressEmbed: x,
        hiddenSpoiler: f = !1
    } = e, [C, E] = (0, o.zn)();
    return 0 === t.length ? null : (0, i.jsx)(c.N, {
        gifAutoPlay: l,
        getGifFavButton: h,
        getOnMediaItemContextMenu: p,
        shouldHideMediaOptions: g,
        enabledContentHarmTypeFlags: A,
        children: (0, i.jsx)(a.f5, {
            message: n,
            shouldDisableInteractiveComponents: !0,
            children: (0, i.jsx)(o.O7.Root, {
                containerInnerWidth: E,
                children: (0, i.jsx)("div", {
                    style: {
                        width: "100%"
                    },
                    ref: C,
                    children: (0, i.jsx)(o.O7.AutoMeasuredNestedContainer, {
                        children: e => (0, i.jsxs)("div", {
                            ref: e,
                            "aria-hidden": f,
                            className: s()(_.O0, m.k, m.z, {
                                [_.dK]: f
                            }),
                            children: [null != x && (0, i.jsx)(r.DUT, {
                                focusProps: {
                                    offset: {
                                        bottom: 4
                                    }
                                },
                                className: _.PP,
                                onClick: x,
                                "aria-label": u.intl.string(u.t.GT3fNz),
                                children: (0, i.jsx)(r.PGe, {
                                    size: "xs",
                                    color: "currentColor"
                                })
                            }), (0, d.fD)(t)]
                        })
                    })
                })
            })
        })
    })
}