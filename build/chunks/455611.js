/** Chunk was on 60667 **/
/** chunk id: 455611, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(98207),
    a = n(235986),
    o = n(670492),
    c = n(957565),
    d = n(985018),
    u = n(139674),
    _ = n(473169);

function p(e) {
    let {
        code: {
            code: t,
            consumed: n
        }
    } = e, s = "".concat(t.substr(0, 4), "-").concat(t.substr(4)), a = i.useRef(null), o = i.useCallback(e => {
        if ("c" === e.key && e.metaKey && c.p5) {
            var t;
            e.preventDefault(), e.stopPropagation(), (0, c.C)(s), null == a || null == (t = a.current) || t.focus()
        }
    }, [s]);
    return (0, r.jsx)("li", {
        className: _.SX,
        children: (0, r.jsxs)(l.DUT, {
            innerRef: a,
            className: u.Uc,
            onKeyDown: o,
            children: [(0, r.jsx)(l.P7L, {
                checked: n
            }), (0, r.jsx)("span", {
                className: u.aY,
                children: s
            })]
        })
    })
}

function m(e) {
    let {
        backupCodes: t
    } = e, n = i.useCallback(e => e.map(e => (0, r.jsx)(p, {
        code: e
    }, e.code)), []), c = i.useCallback(async () => {
        let e = o.A.getVerificationKey();
        await s.A.confirmViewBackupCodes(e, !0)
    }, []);
    return (0, r.jsxs)(l.D0$, {
        label: d.intl.string(d.t.GfqHPn),
        description: d.intl.format(d.t.OhmvYt, {}),
        children: [(0, r.jsxs)(a.A, {
            children: [(0, r.jsx)(a.A.Child, {
                children: (0, r.jsx)("ul", {
                    className: u.Pm,
                    children: n(t.slice(0, t.length / 2))
                })
            }), (0, r.jsx)(a.A.Child, {
                children: (0, r.jsx)("ul", {
                    className: u.Pm,
                    children: n(t.slice(t.length / 2))
                })
            })]
        }), (0, r.jsx)(l.QWc, {
            textVariant: "text-sm/medium",
            onClick: c,
            text: d.intl.string(d.t.RIThUu)
        })]
    })
}