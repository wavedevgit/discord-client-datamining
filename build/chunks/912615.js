/** chunk id: 912615 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(73153),
    d = n(271866),
    c = n(956518),
    u = n(235986),
    m = n(147964),
    _ = n(985018),
    g = n(361151),
    x = n(473169);
let A = /^\d+$|^$/;

function h(e) {
    let {
        onClose: t,
        transitionState: n
    } = e, {
        authorizedApplicationId: h,
        authorizationError: p,
        authorizing: f
    } = (0, a.cf)([m.A], () => ({
        authorizedApplicationId: m.A.testModeApplicationId,
        authorizationError: m.A.error,
        authorizing: m.A.isFetchingAuthorization
    })), [T, S] = s.useState(h ?? ""), [E, b] = s.useState("8080"), [C, v] = s.useState("localhost"), N = A.test(T);
    async function I() {
        d.SH();
        let e = function(e, t, n) {
            if (null == e) return null;
            switch (e) {
                case "localhost":
                    return `https://localhost:${t}`;
                case "proxy":
                    return (0, c.Ay)(n)
            }
        }(C, E, T);
        null != await d.q1(T, e) && t()
    }
    s.useEffect(() => () => o.h.wait(() => d.SH()), []);
    let j = null != h && h === T,
        y = j ? function() {
            d.cL(), S(""), v(null)
        } : I,
        O = s.useMemo(() => [{
            loading: f,
            disabled: !N || 0 === T.length || "localhost" === C && 0 === E.length,
            variant: j ? "critical-primary" : "active",
            text: j ? _.intl.string(_.t.d6TR3I) : _.intl.string(_.t.qwuK5I),
            onClick: y
        }], [T.length, f, j, N, E.length, y, C]);
    return (0, i.jsxs)(l.Modal, {
        title: _.intl.string(_.t.f8fzky),
        subtitle: _.intl.string(_.t.a6Vill),
        actions: O,
        onClose: t,
        transitionState: n,
        children: [null == p ? null : (0, i.jsx)("div", {
            className: x.SX,
            children: (0, i.jsx)(r.wx6, {
                type: "critical",
                children: p
            })
        }), (0, i.jsxs)(u.A, {
            direction: u.A.Direction.VERTICAL,
            align: u.A.Align.START,
            children: [(0, i.jsx)("div", {
                className: g.I,
                children: (0, i.jsx)(r.ksK, {
                    label: _.intl.string(_.t.P6TzgI),
                    required: !0,
                    value: T,
                    maxLength: 19,
                    error: N ? null : _.intl.string(_.t.gPNgKO),
                    onChange: function(e) {
                        S(e)
                    },
                    disabled: f
                })
            }), (0, i.jsx)("div", {
                className: g.I,
                children: (0, i.jsx)(r.l6P, {
                    selectionMode: "single",
                    label: _.intl.string(_.t["/GTqXG"]),
                    disabled: !N || "" === T,
                    value: C,
                    options: [{
                        value: "localhost",
                        label: _.intl.string(_.t["+Y9Y6r"]),
                        id: "localhost"
                    }, {
                        value: "proxy",
                        label: _.intl.string(_.t.uaksyW),
                        id: "proxy"
                    }],
                    onSelectionChange: function(e) {
                        v(e)
                    },
                    placeholder: "URL Origin Type"
                })
            }), "localhost" !== C ? null : (0, i.jsx)("div", {
                className: g.I,
                children: (0, i.jsx)(r.ksK, {
                    required: !0,
                    label: _.intl.string(_.t.fF4zxq),
                    value: E,
                    maxLength: 5,
                    onChange: e => b(e),
                    disabled: f
                })
            })]
        })]
    })
}