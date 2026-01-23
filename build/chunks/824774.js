/** Chunk was on 48587 **/
/** chunk id: 824774, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => S
}), n(896048);
var r = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(311907),
    i = n(397927),
    u = n(843472),
    o = n(342384),
    c = n(429913),
    d = n(451909),
    f = n(223863),
    b = n(151054),
    p = n(734057),
    m = n(287809),
    g = n(957565),
    h = n(403362),
    y = n(550880),
    x = n(997877),
    j = n(381941),
    A = n(985018),
    v = n(667052),
    O = n(119390);

function S(e) {
    let {
        applicationId: t,
        customId: n,
        linkId: S,
        message: _,
        onClose: P,
        onCopyLink: T,
        onShare: w,
        transitionState: E
    } = e, [C] = (0, c.A)([t]), L = (0, a.bG)([m.default], () => m.default.getCurrentUser()), [N, k] = l.useState(!1), [D, R] = l.useState(""), [I, M] = l.useState("");
    l.useEffect(() => {
        M((0, o.W)({
            applicationId: t,
            referrerId: null == L ? void 0 : L.id,
            customId: n,
            linkId: S
        }))
    }, [t, L, n, S, M]);
    let G = l.useRef(0),
        [U, H] = l.useState([]),
        V = U.length,
        q = V >= 5;
    l.useEffect(() => {
        if ("" === D) {
            var e;
            null == (e = B.current) || e.focus()
        }
    }, [D]);
    let z = l.useCallback(() => {
            R("")
        }, [R]),
        B = l.useRef(null),
        {
            results: F,
            updateSearchText: J
        } = (0, b.R)({
            selectedDestinations: U,
            includeMissingDMs: !0
        }),
        Q = l.useCallback(e => {
            R(e), J(e)
        }, [R, J]),
        W = l.useCallback(e => {
            H(t => {
                let n = t.findIndex(t => {
                    let {
                        type: n,
                        id: r
                    } = t;
                    return n === e.type && r === e.id
                });
                if (-1 === n) return q ? t : (R(""), G.current += 1, [e, ...t]);
                let r = [...t];
                return r.splice(n, 1), G.current += 1, r
            })
        }, [q]),
        Z = l.useCallback(async e => {
            if (null == C) return;
            let t = (0, y.r)(_, C, I);
            k(!0), (await Promise.all(e.map(f.pk))).filter(h.Vq).forEach(async e => {
                let n = p.A.getChannel(e);
                null != n && await u.A.sendMessage(e, d.Ay.parse(n, t), !1, {
                    location: j.Hx.ACTIVITY_SHARE
                })
            }), (0, i.showToast)((0, i.createToast)(A.intl.formatToPlainString(A.t.jQULqL, {
                applicationName: C.name
            }), i.ToastType.SUCCESS)), w(!0), P()
        }, [_, I, P, w, C]),
        K = l.useCallback(() => {
            (0, g.C)(I, () => {
                T(), (0, i.showToast)((0, i.createToast)(A.intl.string(A.t.t5VZ88), i.ToastType.SUCCESS))
            })
        }, [I, T]),
        X = F.length > 0 ? (0, r.jsx)(x.x, {
            paddingBottom: 8,
            paddingTop: 8,
            rowData: F,
            handleToggleDestination: W,
            selectedDestinations: U,
            disableSelection: q
        }) : (0, r.jsxs)("div", {
            className: v.wV,
            children: [(0, r.jsx)("img", {
                className: v.BJ,
                src: O,
                alt: ""
            }), (0, r.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: A.intl.string(A.t.V6nAfF)
            })]
        });
    return (0, r.jsx)(s.Modal, {
        transitionState: E,
        onClose: P,
        title: A.intl.string(A.t.r9qKow),
        subtitle: _,
        size: "md",
        input: (0, r.jsx)(i.IWV, {
            ref: B,
            query: D,
            onChange: Q,
            onClear: z,
            placeholder: A.intl.string(A.t["5h0QOP"]),
            "aria-label": A.intl.string(A.t["5h0QOP"]),
            autoFocus: !0
        }),
        actions: [{
            text: A.intl.string(A.t.WqhZss),
            variant: "secondary",
            onClick: K
        }, {
            text: A.intl.string(A.t.TXNS7S),
            variant: "primary",
            onClick: () => Z(U),
            loading: N,
            disabled: !(V > 0)
        }],
        children: X
    })
}