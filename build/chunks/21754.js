/** Chunk was on 31815 **/
/** chunk id: 21754, original params: t,n,e (module,exports,require) **/
e.d(n, {
    default: () => g
}), e(896048);
var l = e(627968),
    a = e(64700),
    i = e(158954),
    s = e(311907),
    r = e(397927),
    o = e(262577),
    u = e(964486),
    d = e(688810),
    c = e(576470),
    h = e(287809),
    p = e(954571),
    f = e(870136),
    m = e(200700),
    v = e(652215),
    y = e(985018),
    b = e(330432);

function g(t) {
    var n, e;
    let {
        guildId: g,
        userId: w,
        anaylticsLocations: C,
        transitionState: x,
        onClose: A
    } = t, {
        analyticsLocations: k
    } = (0, d.Ay)(), D = null != (n = null != (e = null == C ? void 0 : C[0]) ? e : null == k ? void 0 : k[0]) ? n : null, _ = (0, s.bG)([h.default], () => h.default.getUser(w), [w]), [T, S] = (0, f.Ay)(w, g), [U, E] = a.useState(!1), O = a.useCallback(async () => {
        if (null != _) {
            E(!0);
            try {
                await o.A.setCommunicationDisabledDuration(g, w, null, null, D), (0, r.showToast)((0, r.createToast)(y.intl.string(y.t["/Mmbfv"]), r.ToastType.SUCCESS)), A()
            } catch (t) {
                (0, r.showToast)((0, r.createToast)(y.intl.string(y.t.epyCuh), r.ToastType.FAILURE))
            } finally {
                E(!1)
            }
        }
    }, [g, _, w, A, D]), j = a.useCallback(() => {
        S || A()
    }, [S, A]);
    return ((0, u.Ay)(() => {
        null != _ && p.default.track(v.HAw.OPEN_MODAL, {
            type: m.Rv,
            guild_id: g,
            other_user_id: _.id
        })
    }), a.useEffect(() => {
        (null == _ || null == g) && A()
    }), null == _ || null == g) ? null : (0, l.jsx)(i.Modal, {
        transitionState: x,
        onClose: A,
        title: y.intl.string(y.t["+ZD3ou"]),
        subtitle: y.intl.format(y.t["t+abNU"], {
            username: _.username,
            countdown: t => null == T ? null : (0, l.jsx)(c.A, {
                className: b.q,
                deadline: new Date(T),
                onInterval: j,
                showUnits: !0,
                stopAtOneSec: !0
            })
        }),
        actions: [{
            text: y.intl.string(y.t["ETE/oC"]),
            onClick: A,
            variant: "secondary"
        }, {
            text: y.intl.string(y.t.qXtNtS),
            onClick: O,
            loading: U,
            variant: "critical-primary"
        }],
        children: (0, l.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "interactive-text-default",
            children: y.intl.format(y.t.KtENkK, {
                link: m.MO
            })
        })
    })
}