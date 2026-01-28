/** Chunk was on 5606 **/
/** chunk id: 912615, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048), n(747238);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(73153),
    c = n(271866),
    d = n(956518),
    u = n(235986),
    p = n(147964),
    _ = n(985018),
    m = n(361151),
    g = n(473169);
let f = /^\d+$|^$/;

function b(e) {
    let {
        onClose: t,
        transitionState: n
    } = e, {
        authorizedApplicationId: b,
        authorizationError: h,
        authorizing: A
    } = (0, s.cf)([p.A], () => ({
        authorizedApplicationId: p.A.testModeApplicationId,
        authorizationError: p.A.error,
        authorizing: p.A.isFetchingAuthorization
    })), [E, x] = i.useState(null != b ? b : ""), [O, C] = i.useState("8080"), [y, j] = i.useState("localhost"), T = f.test(E);
    async function v() {
        c.SH();
        let e = function(e, t, n) {
            if (null == e) return null;
            switch (e) {
                case "localhost":
                    return "https://localhost:".concat(t);
                case "proxy":
                    return (0, d.Ay)(n)
            }
        }(y, O, E);
        null != await c.q1(E, e) && t()
    }
    i.useEffect(() => () => o.h.wait(() => c.SH()), []);
    let S = null != b && b === E,
        I = S ? function() {
            c.cL(), x(""), j(null)
        } : v,
        N = i.useMemo(() => [{
            loading: A,
            disabled: !T || 0 === E.length || "localhost" === y && 0 === O.length,
            variant: S ? "critical-primary" : "active",
            text: S ? _.intl.string(_.t.d6TR3I) : _.intl.string(_.t.qwuK5I),
            onClick: I
        }], [E.length, A, S, T, O.length, I, y]);
    return (0, r.jsxs)(l.Modal, {
        title: _.intl.string(_.t.f8fzky),
        subtitle: _.intl.string(_.t.a6Vill),
        actions: N,
        onClose: t,
        transitionState: n,
        children: [null == h ? null : (0, r.jsx)("div", {
            className: g.SX,
            children: (0, r.jsx)(a.wx6, {
                type: "critical",
                children: h
            })
        }), (0, r.jsxs)(u.A, {
            direction: u.A.Direction.VERTICAL,
            align: u.A.Align.START,
            children: [(0, r.jsx)("div", {
                className: m.I,
                children: (0, r.jsx)(a.ksK, {
                    label: _.intl.string(_.t.P6TzgI),
                    required: !0,
                    value: E,
                    maxLength: 19,
                    error: T ? null : _.intl.string(_.t.gPNgKO),
                    onChange: function(e) {
                        x(e)
                    },
                    disabled: A
                })
            }), (0, r.jsx)("div", {
                className: m.I,
                children: (0, r.jsx)(a.l6P, {
                    selectionMode: "single",
                    label: _.intl.string(_.t["/GTqXG"]),
                    disabled: !T || "" === E,
                    value: y,
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
                        j(e)
                    },
                    placeholder: "URL Origin Type"
                })
            }), "localhost" !== y ? null : (0, r.jsx)("div", {
                className: m.I,
                children: (0, r.jsx)(a.ksK, {
                    required: !0,
                    label: _.intl.string(_.t.fF4zxq),
                    value: O,
                    maxLength: 5,
                    onChange: e => C(e),
                    disabled: A
                })
            })]
        })]
    })
}