/** Chunk was on 1143 **/
/** chunk id: 284778, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => E
}), n(896048);
var r = n(627968),
    l = n(64700),
    o = n(110259),
    a = n(158954),
    i = n(311907),
    u = n(894778),
    c = n(287809),
    s = n(954571),
    p = n(975571),
    f = n(955437),
    d = n(201505),
    _ = n(204925),
    A = n(652215),
    m = n(315290),
    y = n(985018);

function E(e) {
    let {
        transitionState: t,
        onClose: n
    } = e, [E, b] = l.useState(null), [g, O] = l.useState(null), [T, w] = l.useState(!1), S = l.useRef(null), h = (0, i.bG)([c.default], () => c.default.getCurrentUser()), N = l.useRef(null);
    l.useEffect(() => {
        u.A.flowStep(m.do.ANY, m.Ot.AGE_GATE), s.default.track(A.HAw.OPEN_MODAL, {
            type: "Claim Age Gate"
        })
    }, []), l.useEffect(() => {
        (null == h ? void 0 : h.nsfwAllowed) != null && n()
    }, [h, n]);
    let v = async e => {
        if (e.preventDefault(), null != E) {
            w(!0);
            try {
                await f.n7(E, A.JJy.CLAIM_ACCOUNT_MODAL)
            } catch (e) {
                if (null != e.body && null != e.body.date_of_birth) u.A.flowStep(m.do.ANY, m.Ot.AGE_GATE_UNDERAGE), f.Xv(_.w_.CLAIM_ACCOUNT), f.$2(_.w_.CLAIM_ACCOUNT), n();
                else {
                    var t;
                    (null == e || null == (t = e.body) ? void 0 : t.username) != null ? O(y.intl.string(y.t["TGg/2k"])) : O(null == e ? void 0 : e.body.message)
                }
            }
            w(!1)
        }
    }, G = l.useCallback(() => {
        var e;
        null == (e = N.current) || e.focus()
    }, [N]);
    return (0, r.jsx)("form", {
        onSubmit: v,
        children: (0, r.jsx)(a.Modal, {
            transitionState: t,
            onClose: n,
            title: y.intl.string(y.t.QpSKow),
            subtitle: y.intl.format(y.t.EcJBEI, {
                helpURL: p.A.getArticleURL(A.MVz.AGE_GATE)
            }),
            actions: [{
                text: y.intl.string(y.t.i4jeWR),
                type: "submit",
                loading: T,
                disabled: null == E
            }],
            trackingProps: {
                impression: {
                    impressionName: o.ImpressionNames.USER_AGE_GATE,
                    impressionProperties: {
                        existing_user: !1
                    }
                }
            },
            children: (0, r.jsx)(d.A, {
                required: !0,
                autoFocus: !0,
                label: y.intl.string(y.t.rhBeKe),
                name: "birthday",
                onChange: e => b(e),
                onPopulated: G,
                error: g,
                value: E,
                ref: S
            })
        })
    })
}