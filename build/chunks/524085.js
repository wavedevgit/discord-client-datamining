/** chunk id: 524085 params = (module,exports,require) **/
n.d(e, {
    default: () => E
});
var a = n(627968),
    i = n(64700),
    l = n(158954),
    o = n(311907),
    s = n(421380),
    r = n(397927),
    u = n(262577),
    c = n(964486),
    d = n(688810),
    m = n(504049),
    h = n(226698),
    _ = n(734057),
    g = n(287809),
    D = n(954571),
    T = n(562153),
    C = n(200700),
    b = n(652215),
    p = n(985018),
    A = n(733045),
    O = n(340235);

function x(t) {
    return {
        value: t,
        get label() {
            return (0, C.getFriendlyDurationString)(t)
        }
    }
}
let y = [x(C.DisableCommunicationDuration.DURATION_60_SEC), x(C.DisableCommunicationDuration.DURATION_5_MIN), x(C.DisableCommunicationDuration.DURATION_10_MIN), x(C.DisableCommunicationDuration.DURATION_1_HOUR), x(C.DisableCommunicationDuration.DURATION_1_DAY), x(C.DisableCommunicationDuration.DURATION_1_WEEK)];

function E(t) {
    let {
        guildId: e,
        userId: n,
        anaylticsLocations: x,
        transitionState: E,
        onClose: R,
        modReportId: N
    } = t, {
        analyticsLocations: S
    } = (0, d.Ay)(), I = x?.[0] ?? S?.[0] ?? null, f = (0, o.bG)([g.default], () => g.default.getUser(n), [n]), [U, j] = i.useState(C.DisableCommunicationDuration.DURATION_60_SEC), [k, v] = i.useState(""), [M, w] = i.useState(!1), [B, P] = i.useState(!1), H = (0, o.bG)([_.A], () => _.A.getChannel(N)?.isArchivedThread()), L = (0, m.$9)(e, {
        location: I,
        targetUserId: n
    }), F = i.useCallback(async () => {
        if (null != f) {
            w(!0);
            try {
                await u.A.setCommunicationDisabledDuration(e, n, U, k, I, N), B && null != N && h.A.resolveFlag(N), L(m.Nj.TIMEOUT), (0, r.showToast)((0, r.createToast)(p.intl.formatToPlainString(p.t.O9C3Nt, {
                    user: T.Ay.getName(e, null, f)
                }), r.ToastType.SUCCESS)), R()
            } catch (t) {
                (0, r.showToast)((0, r.createToast)(p.intl.string(p.t.epyCuh), r.ToastType.FAILURE))
            } finally {
                w(!1)
            }
        }
    }, [e, f, n, R, U, k, I, L, N, B]);
    return ((0, c.Ay)(() => {
        null != f && D.default.track(b.HAw.OPEN_MODAL, {
            type: C.aZ,
            guild_id: e,
            other_user_id: f.id
        })
    }), i.useEffect(() => {
        (null == f || null == e) && R()
    }, [e, f, R]), null == f || null == e) ? null : (0, a.jsx)(l.Modal, {
        transitionState: E,
        title: p.intl.formatToPlainString(p.t.OhsOy0, {
            user: T.Ay.getName(e, null, f)
        }),
        subtitle: p.intl.format(p.t.Ns83GT, {
            helpdeskArticle: C.MO
        }),
        actions: [{
            text: p.intl.string(p.t["ETE/oC"]),
            onClick: R,
            variant: "secondary"
        }, {
            text: p.intl.string(p.t.MlPTIi),
            onClick: F,
            loading: M
        }],
        actionBarInput: null == N || H ? void 0 : (0, a.jsx)(r.Checkbox, {
            checked: B,
            onChange: t => P(t),
            labelType: "secondary",
            label: p.intl.string(A.default["8yIKem"])
        }),
        onClose: R,
        children: (0, a.jsxs)(r.BJc, {
            gap: 16,
            children: [(0, a.jsxs)(r.BJc, {
                gap: 8,
                children: [(0, a.jsx)(r.Heading, {
                    variant: "heading-sm/semibold",
                    children: p.intl.string(p.t["9XsExm"])
                }), (0, a.jsx)(s.e2, {
                    buttons: y.map(t => (function(t, e, n) {
                        let {
                            value: i,
                            label: l
                        } = t;
                        return {
                            content: (0, a.jsx)(r.Text, {
                                variant: "text-sm/semibold",
                                className: e ? O.u$ : O.nM,
                                children: l
                            }),
                            className: e ? O.XZ : O.aK,
                            onClick: () => n(i)
                        }
                    })(t, t.value === U, j))
                })]
            }), (0, a.jsxs)(r.BJc, {
                gap: 8,
                children: [(0, a.jsx)(r.Heading, {
                    variant: "heading-sm/semibold",
                    children: p.intl.string(p.t.ewHW15)
                }), (0, a.jsx)(r.fs1, {
                    value: k,
                    onChange: t => v(t),
                    placeholder: p.intl.string(p.t.GakiH1),
                    rows: 4,
                    maxLength: C.hl
                })]
            })]
        })
    })
}