/** Chunk was on 16674 **/
/** chunk id: 632441, original params: e,t,r (module,exports,require) **/
r.r(t), r.d(t, {
    default: () => j
}), r(896048);
var n = r(627968),
    l = r(64700),
    u = r(158954),
    i = r(311907),
    a = r(397927),
    s = r(734057),
    c = r(287809),
    o = r(562153),
    f = r(798286),
    d = r(814278),
    E = r(636153),
    b = r(204459),
    y = r(665691),
    A = r(998759),
    p = r(50299),
    g = r(82821),
    O = r(75811),
    m = r(930840);
r(603266);
var _ = r(652215),
    S = r(985018),
    C = r(42768);

function T(e) {
    let {
        badgeText: t,
        badgeColor: r
    } = e, u = l.useRef(t), i = l.useRef(r);
    return (0, n.jsx)(a.LpS, {
        text: u.current,
        color: i.current
    })
}

function j(e) {
    var t, r;
    let {
        transitionState: j,
        userId: h,
        channelId: N,
        onClose: v
    } = e, R = (0, i.bG)([c.default], () => c.default.getUser(h)), w = (0, i.bG)([s.A], () => {
        var e;
        return null == (e = s.A.getChannel(N)) ? void 0 : e.getGuildId()
    }), I = o.Ay.useName(w, null, R), {
        fingerprint: x,
        userKey: U
    } = (0, p.R)({
        userId: h
    }), F = (0, A.z)({
        fingerprintBase64: x,
        chunkSize: 5,
        desiredLength: 45
    }), P = l.useCallback(() => {
        (0, f.Hb)({
            userId: h,
            channelId: N
        })
    }, [N, h]), k = (0, y.UF)({
        userId: h,
        channelId: N
    });
    (0, b.w)({
        channelId: N,
        userId: h,
        nickname: I,
        onAlertOpen: v
    });
    let {
        isCurrentUserKeyPersistent: D,
        isOtherUserKeyPersistent: M,
        loading: V
    } = (0, E.q)({
        userId: h
    }), G = l.useCallback(() => {
        null != U && ((0, d.bk)(h, U, M, N, _.ThZ.E2EE_USER_VERIFY_MODAL), v())
    }, [U, h, M, N, v]), L = l.useCallback(() => {
        null != U && ((0, d.Dh)(h, U, M), v())
    }, [U, h, M, v]), [K, Y] = l.useMemo(() => k ? [S.intl.string(S.t.UNUuem), a.LU0.colors.BACKGROUND_BRAND.css] : [S.intl.string(S.t.y2b7CA), a.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css], [k]), B = l.useMemo(() => (0, d.Z1)({
        isCurrentUserKeyPersistent: D,
        isOtherUserKeyPersistent: M,
        otherUserNickname: I
    }), [D, M, I]), z = (0, g.H)({
        userId: h,
        keyToOmit: U
    });
    l.useEffect(() => {
        (0, f.HJ)({
            userId: h,
            channelId: N
        })
    }, [N, h]);
    let H = {
            transitionState: j,
            title: S.intl.string(S.t["/WPGnF"]),
            subtitle: S.intl.format(S.t.oc2kce, {
                username: I
            })
        },
        q = (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)("div", {
                className: C.Ot,
                children: [z > 0 && (0, n.jsx)(a.po8, {
                    messageType: a.YCn.INFO,
                    className: C.Ht,
                    children: S.intl.format(S.t.uZDkz0, {
                        count: z
                    })
                }), (0, n.jsxs)("div", {
                    className: C.wx,
                    children: [(0, n.jsx)(a.Heading, {
                        variant: "text-sm/bold",
                        color: "text-strong",
                        children: S.intl.string(S.t["/WPGnF"])
                    }), null != F && (0, n.jsx)(m.c, {
                        className: C.nJ,
                        chunks: F,
                        color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                        onCopy: P
                    }), (0, n.jsx)("div", {
                        className: C.ub,
                        children: null == F ? (0, n.jsx)(a.y$y, {
                            className: C.u1,
                            type: a.tVU.SPINNING_CIRCLE
                        }) : (0, n.jsx)(T, {
                            badgeText: K,
                            badgeColor: Y
                        })
                    })]
                }), (0, n.jsx)(O.j, {
                    className: C.aY,
                    chunks: F,
                    columns: 3
                })]
            }), (0, n.jsx)(a.Text, {
                className: C.qr,
                variant: "text-sm/normal",
                color: "text-muted",
                children: B
            })]
        }),
        Z = {
            text: k ? S.intl.string(S.t["Osb+/n"]) : S.intl.string(S.t["0tvNAn"]),
            disabled: null == F || V,
            onClick: k ? L : G
        },
        J = {
            text: S.intl.string(S.t["ETE/oC"]),
            onClick: v,
            variant: "secondary"
        };
    return (0, n.jsx)(u.Modal, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            })
        }
        return e
    }({
        onClose: v
    }, H), r = r = {
        actions: [J, Z],
        children: q
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
}