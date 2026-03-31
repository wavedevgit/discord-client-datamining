/** chunk id: 547983 params = (module,exports,require) **/
n.d(t, {
    c: () => Z,
    default: () => z
});
var i = n(627968),
    l = n(64700),
    a = n(621466),
    r = n(397927),
    s = n(442433),
    o = n(155718),
    d = n(793574),
    c = n(688810),
    u = n(50268),
    g = n(486503),
    A = n(373963),
    m = n(115184),
    p = n(777933),
    f = n(826308),
    h = n(51512),
    y = n(773699),
    E = n(954571),
    _ = n(363398),
    S = n(880457),
    b = n(840088),
    v = n(276887),
    T = n(345254),
    I = n(734495),
    x = n(483768),
    j = n(522333),
    D = n(692457),
    M = n(253925),
    C = n(513560),
    O = n(20883),
    N = n(979766),
    R = n(982308),
    G = n(959239),
    L = n(420975),
    w = n(207115),
    P = n(614323),
    U = n(292103),
    F = n(878956),
    k = n(389889),
    X = n(729883),
    V = n(474445),
    B = n(304795),
    K = n(25287),
    H = n(220167),
    J = n(772331),
    q = n(649455),
    W = n(652215),
    Y = n(985018);

function z(e) {
    let t, n, l, r, {
            channel: o,
            message: u,
            target: g,
            mediaItem: A,
            shouldHideMediaOptions: m,
            onSelect: p,
            onHeightUpdate: f
        } = e,
        {
            analyticsLocations: h
        } = (0, c.Ay)([d.A.MESSAGE_CONTEXT_MENU]),
        y = g,
        E = g.getAttribute("data-type"),
        _ = g.getAttribute("data-id"),
        S = g.getAttribute("data-name");
    if (null != A) n = t = l = A.url;
    else
        for (;
            (0, a.vq)(y);)(0, a.vq)(y, HTMLImageElement) && null != y.src && (n = y.src), (0, a.vq)(y, HTMLAnchorElement) && null != y.href && (t = y.href, r = y.textContent, null == n && "img" === y.getAttribute("data-role") && (n = t, y.hasAttribute("data-safe-src") && "" !== y.getAttribute("data-safe-src") && (l = y.getAttribute("data-safe-src")))), y = y.parentNode;
    let b = document.getSelection()?.toString() ?? "";
    return (0, i.jsx)(c.f5, {
        value: h,
        children: Z({
            message: u,
            channel: o,
            mediaItem: A,
            textSelection: b,
            favoriteableType: E,
            favoriteableId: _,
            favoriteableName: S,
            itemHref: t,
            itemSrc: n,
            itemSafeSrc: l,
            itemTextContent: r,
            canReport: !0,
            onHeightUpdate: f,
            onSelect: p,
            onClose: s.Z_,
            navId: "message",
            ariaLabel: Y.intl.string(Y.t.ChPNkN),
            shouldHideMediaOptions: m
        })
    })
}

function Z(e) {
    let {
        message: t,
        channel: n,
        mediaItem: a,
        textSelection: s,
        favoriteableType: d,
        favoriteableId: c,
        favoriteableName: z,
        itemHref: Z,
        itemSrc: $,
        itemSafeSrc: Q,
        itemTextContent: ee,
        canReport: et,
        onHeightUpdate: en,
        onSelect: ei,
        onClose: el,
        navId: ea,
        ariaLabel: er,
        shouldHideMediaOptions: es = !1
    } = e, eo = l.useRef(null);
    l.useEffect(() => {
        eo.current = Date.now()
    }, []), l.useEffect(() => () => {
        if (null != eo.current) {
            let e = Date.now() - eo.current;
            E.default.track(W.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                time_to_close_ms: e,
                channel_id: n.id,
                guild_id: n.getGuildId() ?? void 0,
                message_id: t.id
            })
        }
    }, [n, t]);
    let ed = l.useCallback(() => {
            if (null != eo.current) {
                let e = Date.now() - eo.current;
                E.default.track(W.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: n.id,
                    guild_id: n.getGuildId() ?? void 0,
                    message_id: t.id
                })
            }
            ei?.()
        }, [ei, n, t]),
        {
            tidaWebformEnabled: ec
        } = g.A.useExperiment({
            location: "MessageContextMenu"
        }, {
            autoTrackExposure: !1
        }),
        eu = (0, R.A)(t, n),
        eg = (0, A.A)(s),
        eA = (0, f.A)(s),
        em = (0, b.A)(t, n),
        ep = (0, D.A)(t, n),
        ef = (0, P.A)(t, n),
        eh = (0, C.A)(t, n),
        ey = (0, X.A)(t, n),
        eE = (0, I.A)(t),
        e_ = (0, V.A)(t, n),
        eS = (0, N.A)(t, n),
        eb = (0, S.A)(t),
        ev = (0, y.A)({
            commandType: o.kc.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: en,
            showIcon: !0
        }),
        eT = (0, F.A)(t, n),
        eI = (0, O.A)(t, n),
        ex = (0, v.A)(t, n),
        ej = (0, T.A)(t, n),
        eD = (0, B.A)(t, n),
        eM = (0, k.A)(t, n),
        eC = (0, G.A)(t),
        eO = (0, h.A)(t),
        eN = (0, K.A)(t),
        eR = (0, w.A)(t, n),
        eG = (0, L.A)(t, n),
        eL = (0, x.A)(t, n),
        ew = (0, U.Ay)(t),
        eP = (0, U.S_)(t),
        eU = (0, U.zo)(t),
        eF = (0, M.A)({
            type: d,
            id: c,
            name: z
        }),
        ek = (0, _.A)(s, n.getGuildId()),
        eX = (0, m.A)(Q, t, {
            shouldHideMediaOptions: es,
            contentType: a?.contentType,
            originalContentType: a?.originalContentType
        }),
        eV = (0, H.A)(t, a),
        eB = (0, J.A)(t),
        eK = (0, q.A)(a, {
            shouldHideMediaOptions: es
        }),
        eH = (0, p.A)(Z ?? $, ee, t, {
            shouldHideMediaOptions: es
        }),
        eJ = (0, u.A)({
            id: t.id,
            label: Y.intl.string(Y.t.zBoHlf),
            shiftId: `${t.channel_id}-${t.id}`
        }),
        eq = (0, j.A)({
            messageId: t.id,
            itemId: c,
            type: d,
            imageSrc: $
        }),
        eW = (0, i.jsx)(r.rXV, {
            children: eq ?? eJ
        }),
        eY = (0, i.jsxs)(r.rXV, {
            children: [eF, ek, eX, eV, eB, eK]
        });
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: ea,
        onClose: el,
        "aria-label": er,
        onSelect: ed,
        children: [(0, i.jsx)(r.rXV, {
            children: eg
        }), (0, i.jsx)(r.rXV, {
            children: eA
        }), (0, i.jsxs)(r.rXV, {
            children: ["" === s ? eu : null, em, eC]
        }), (0, i.jsxs)(r.rXV, {
            children: [ep, ef, eh, ey]
        }), (0, i.jsxs)(r.rXV, {
            children: [eE, e_, eS, eb, ev, eT, eI, ex, ej, eD, eM, eO, eN]
        }), (0, i.jsxs)(r.rXV, {
            children: [eR, eG, eL, et && ew, et && eP, eU]
        }), ec ? (0, i.jsxs)(i.Fragment, {
            children: [eW, eY, null == eq && (0, i.jsx)(r.rXV, {
                children: eH
            })]
        }) : (0, i.jsxs)(i.Fragment, {
            children: [eY, (0, i.jsx)(r.rXV, {
                children: eH
            }), eW]
        })]
    })
}