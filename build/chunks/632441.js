/** chunk id: 632441 params = (module,exports,require) **/
r.r(t), r.d(t, {
    default: () => h
});
var n = r(627968),
    l = r(64700),
    s = r(158954),
    u = r(311907),
    i = r(397927),
    a = r(734057),
    c = r(287809),
    o = r(562153),
    d = r(798286),
    E = r(814278),
    f = r(636153),
    A = r(204459),
    _ = r(665691),
    S = r(998759),
    T = r(50299),
    g = r(82821),
    R = r(75811),
    C = r(930840);
r(603266);
var m = r(652215),
    y = r(985018),
    N = r(751005);

function I(e) {
    let {
        badgeText: t,
        badgeColor: r
    } = e, s = l.useRef(t), u = l.useRef(r);
    return (0, n.jsx)(i.LpS, {
        text: s.current,
        color: u.current
    })
}

function h(e) {
    let {
        transitionState: t,
        userId: r,
        channelId: h,
        onClose: x
    } = e, U = (0, u.bG)([c.default], () => c.default.getUser(r)), F = (0, u.bG)([a.A], () => a.A.getChannel(h)?.getGuildId()), p = o.Ay.useName(F, null, U), {
        fingerprint: b,
        userKey: k
    } = (0, T.R)({
        userId: r
    }), w = (0, S.z)({
        fingerprintBase64: b,
        chunkSize: 5,
        desiredLength: 45
    }), v = l.useCallback(() => {
        (0, d.Hb)({
            userId: r,
            channelId: h
        })
    }, [h, r]), M = (0, _.UF)({
        userId: r,
        channelId: h
    });
    (0, A.w)({
        channelId: h,
        userId: r,
        nickname: p,
        onAlertOpen: x
    });
    let {
        isCurrentUserKeyPersistent: D,
        isOtherUserKeyPersistent: O,
        loading: V
    } = (0, f.q)({
        userId: r
    }), j = l.useCallback(() => {
        null != k && ((0, E.bk)(r, k, O, h, m.ThZ.E2EE_USER_VERIFY_MODAL), x())
    }, [k, r, O, h, x]), K = l.useCallback(() => {
        null != k && ((0, E.Dh)(r, k, O), x())
    }, [k, r, O, x]), [L, G] = l.useMemo(() => M ? [y.intl.string(y.t.UNUuem), i.LU0.colors.BACKGROUND_BRAND.css] : [y.intl.string(y.t.y2b7CA), i.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css], [M]), Y = l.useMemo(() => (0, E.Z1)({
        isCurrentUserKeyPersistent: D,
        isOtherUserKeyPersistent: O,
        otherUserNickname: p
    }), [D, O, p]), P = (0, g.H)({
        userId: r,
        keyToOmit: k
    });
    l.useEffect(() => {
        (0, d.HJ)({
            userId: r,
            channelId: h
        })
    }, [h, r]);
    let z = {
            transitionState: t,
            title: y.intl.string(y.t["/WPGnF"]),
            subtitle: y.intl.format(y.t.oc2kce, {
                username: p
            })
        },
        B = (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)("div", {
                className: N.Ot,
                children: [P > 0 && (0, n.jsx)(i.po8, {
                    messageType: i.YCn.INFO,
                    className: N.Ht,
                    children: y.intl.format(y.t.uZDkz0, {
                        count: P
                    })
                }), (0, n.jsxs)("div", {
                    className: N.wx,
                    children: [(0, n.jsx)(i.Heading, {
                        variant: "text-sm/bold",
                        color: "text-strong",
                        children: y.intl.string(y.t["/WPGnF"])
                    }), null != w && (0, n.jsx)(C.c, {
                        className: N.nJ,
                        chunks: w,
                        color: i.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                        onCopy: v
                    }), (0, n.jsx)("div", {
                        className: N.ub,
                        children: null == w ? (0, n.jsx)(i.y$y, {
                            className: N.u1,
                            type: i.tVU.SPINNING_CIRCLE
                        }) : (0, n.jsx)(I, {
                            badgeText: L,
                            badgeColor: G
                        })
                    })]
                }), (0, n.jsx)(R.j, {
                    className: N.aY,
                    chunks: w,
                    columns: 3
                })]
            }), (0, n.jsx)(i.Text, {
                className: N.qr,
                variant: "text-sm/normal",
                color: "text-muted",
                children: Y
            })]
        }),
        H = {
            text: M ? y.intl.string(y.t["Osb+/n"]) : y.intl.string(y.t["0tvNAn"]),
            disabled: null == w || V,
            onClick: M ? K : j
        },
        q = {
            text: y.intl.string(y.t["ETE/oC"]),
            onClick: x,
            variant: "secondary"
        };
    return (0, n.jsx)(s.Modal, {
        onClose: x,
        ...z,
        actions: [q, H],
        children: B
    })
}