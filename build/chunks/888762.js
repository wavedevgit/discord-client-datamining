/** chunk id: 888762, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => h
}), n(747238);
var i = n(627968),
    a = n(64700),
    r = n(158954),
    s = n(397927),
    c = n(450510),
    o = n(350535),
    l = n(927421),
    d = n(985018),
    u = n(290844);

function h(t) {
    let {
        guildId: e,
        channel: h,
        keybind: b,
        transitionState: p,
        onClose: y
    } = t, k = a.useCallback(async () => {
        (0, c.sF)(c._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL), await y()
    }, [y]), f = a.useCallback(async () => {
        await k(), (0, s.mMO)(async () => {
            let {
                default: t
            } = await n.e("90237").then(n.bind(n, 29681));
            return e => (0, i.jsx)(t, function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), i.forEach(function(e) {
                        var i;
                        i = n[e], e in t ? Object.defineProperty(t, e, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = i
                    })
                }
                return t
            }({}, e))
        })
    }, [k]), j = a.useMemo(() => [{
        variant: "secondary",
        text: d.intl.string(d.t.TJ0N99),
        onClick: f
    }, {
        text: d.intl.string(d.t.ZwRzIH),
        onClick: k,
        variant: "primary"
    }], [f, k]);
    return (0, i.jsxs)(r.Modal, {
        onClose: k,
        actions: j,
        transitionState: p,
        title: d.intl.string(d.t.yJeV51),
        children: [(0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            children: d.intl.format(d.t.fq3Swz, {
                keybind: (0, o.dI)(b.shortcut, !0).split(" + "),
                keybindHook: (t, e) => (0, i.jsx)("span", {
                    className: u.EY,
                    children: (0, i.jsx)(s.e7I, {
                        className: u.d4,
                        shortcut: (0, o.dI)(b.shortcut, !1)
                    })
                }, e),
                openSettingsHook: (t, e) => (0, i.jsx)(s.MzZ, {
                    onClick: f,
                    children: t
                }, e)
            })
        }), (0, i.jsx)("div", {
            className: u.Rj,
            children: (0, i.jsx)(l.A, {
                width: 372,
                height: 316,
                guildId: e,
                channel: h,
                interactive: !1,
                keepOpen: !0,
                onClose: () => {},
                analyticsSource: "education modal"
            })
        })]
    })
}