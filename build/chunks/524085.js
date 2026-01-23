/** Chunk was on 94390 **/
/** chunk id: 524085, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => p
}), n(896048);
var l = n(627968),
    a = n(64700),
    i = n(158954),
    o = n(311907),
    r = n(421380),
    u = n(397927),
    s = n(262577),
    c = n(964486),
    _ = n(688810),
    d = n(504049),
    A = n(226698),
    E = n(734057),
    m = n(287809),
    T = n(954571),
    D = n(562153),
    g = n(200700),
    O = n(652215),
    C = n(985018),
    b = n(641131),
    h = n(471053);

function S(t) {
    return {
        value: t,
        get label() {
            return (0, g.getFriendlyDurationString)(t)
        }
    }
}
let f = [S(g.DisableCommunicationDuration.DURATION_60_SEC), S(g.DisableCommunicationDuration.DURATION_5_MIN), S(g.DisableCommunicationDuration.DURATION_10_MIN), S(g.DisableCommunicationDuration.DURATION_1_HOUR), S(g.DisableCommunicationDuration.DURATION_1_DAY), S(g.DisableCommunicationDuration.DURATION_1_WEEK)];

function p(t) {
    var e, n;
    let {
        guildId: S,
        userId: p,
        anaylticsLocations: I,
        transitionState: M,
        onClose: R,
        modReportId: y
    } = t, {
        analyticsLocations: N
    } = (0, _.Ay)(), v = null != (e = null != (n = null == I ? void 0 : I[0]) ? n : null == N ? void 0 : N[0]) ? e : null, U = (0, o.bG)([m.default], () => m.default.getUser(p), [p]), [k, j] = a.useState(g.DisableCommunicationDuration.DURATION_60_SEC), [x, w] = a.useState(""), [H, B] = a.useState(!1), [L, P] = a.useState(!1), F = (0, o.bG)([E.A], () => {
        var t;
        return null == (t = E.A.getChannel(y)) ? void 0 : t.isArchivedThread()
    }), G = (0, d.$9)(S, {
        location: v,
        targetUserId: p
    }), K = a.useCallback(async () => {
        if (null != U) {
            B(!0);
            try {
                await s.A.setCommunicationDisabledDuration(S, p, k, x, v, y), L && null != y && A.A.resolveFlag(y), G(d.Nj.TIMEOUT), (0, u.showToast)((0, u.createToast)(C.intl.formatToPlainString(C.t.O9C3Nt, {
                    user: D.Ay.getName(S, null, U)
                }), u.ToastType.SUCCESS)), R()
            } catch (t) {
                (0, u.showToast)((0, u.createToast)(C.intl.string(C.t.epyCuh), u.ToastType.FAILURE))
            } finally {
                B(!1)
            }
        }
    }, [S, U, p, R, k, x, v, G, y, L]);
    return ((0, c.Ay)(() => {
        null != U && T.default.track(O.HAw.OPEN_MODAL, {
            type: g.aZ,
            guild_id: S,
            other_user_id: U.id
        })
    }), a.useEffect(() => {
        (null == U || null == S) && R()
    }, [S, U, R]), null == U || null == S) ? null : (0, l.jsx)(i.Modal, {
        transitionState: M,
        title: C.intl.formatToPlainString(C.t.OhsOy0, {
            user: D.Ay.getName(S, null, U)
        }),
        subtitle: C.intl.format(C.t.Ns83GT, {
            helpdeskArticle: g.MO
        }),
        actions: [{
            text: C.intl.string(C.t["ETE/oC"]),
            onClick: R,
            variant: "secondary"
        }, {
            text: C.intl.string(C.t.MlPTIi),
            onClick: K,
            loading: H
        }],
        actionBarInput: null == y || F ? void 0 : (0, l.jsx)(u.Checkbox, {
            checked: L,
            onChange: t => P(t),
            labelType: "secondary",
            label: C.intl.string(b.default["8yIKem"])
        }),
        onClose: R,
        children: (0, l.jsxs)(u.BJc, {
            gap: 16,
            children: [(0, l.jsxs)(u.BJc, {
                gap: 8,
                children: [(0, l.jsx)(u.Heading, {
                    variant: "heading-sm/semibold",
                    children: C.intl.string(C.t["9XsExm"])
                }), (0, l.jsx)(r.e2, {
                    buttons: f.map(t => (function(t, e, n) {
                        let {
                            value: a,
                            label: i
                        } = t;
                        return {
                            content: (0, l.jsx)(u.Text, {
                                variant: "text-sm/semibold",
                                className: e ? h.u$ : h.nM,
                                children: i
                            }),
                            className: e ? h.XZ : h.aK,
                            onClick: () => n(a)
                        }
                    })(t, t.value === k, j))
                })]
            }), (0, l.jsxs)(u.BJc, {
                gap: 8,
                children: [(0, l.jsx)(u.Heading, {
                    variant: "heading-sm/semibold",
                    children: C.intl.string(C.t.ewHW15)
                }), (0, l.jsx)(u.fs1, {
                    value: x,
                    onChange: t => w(t),
                    placeholder: C.intl.string(C.t.GakiH1),
                    rows: 4,
                    maxLength: g.hl
                })]
            })]
        })
    })
}