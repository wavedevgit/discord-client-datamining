/** chunk id: 547983 params = (module,exports,require) **/
n.d(t, {
    c: () => $,
    default: () => Z
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
    p = n(115184),
    m = n(777933),
    f = n(826308),
    y = n(51512),
    h = n(773699),
    E = n(954571),
    S = n(363398),
    _ = n(880457),
    T = n(840088),
    I = n(276887),
    v = n(345254),
    b = n(734495),
    D = n(483768),
    x = n(522333),
    M = n(692457),
    j = n(253925),
    O = n(513560),
    C = n(360977),
    N = n(20883),
    G = n(979766),
    R = n(982308),
    L = n(959239),
    P = n(420975),
    U = n(207115),
    w = n(614323),
    F = n(292103),
    k = n(878956),
    X = n(389889),
    V = n(729883),
    B = n(474445),
    K = n(304795),
    H = n(25287),
    J = n(220167),
    W = n(772331),
    q = n(649455),
    z = n(652215),
    Y = n(985018);

function Z(e) {
    let t, n, l, r, {
            channel: o,
            message: u,
            target: g,
            mediaItem: A,
            shouldHideMediaOptions: p,
            onSelect: m,
            onHeightUpdate: f
        } = e,
        {
            analyticsLocations: y
        } = (0, c.Ay)([d.A.MESSAGE_CONTEXT_MENU]),
        h = g,
        E = g.getAttribute("data-type"),
        S = g.getAttribute("data-id"),
        _ = g.getAttribute("data-name");
    if (null != A) n = t = l = A.url;
    else
        for (;
            (0, a.vq)(h);)(0, a.vq)(h, HTMLImageElement) && null != h.src && (n = h.src), (0, a.vq)(h, HTMLAnchorElement) && null != h.href && (t = h.href, r = h.textContent, null == n && "img" === h.getAttribute("data-role") && (n = t, h.hasAttribute("data-safe-src") && "" !== h.getAttribute("data-safe-src") && (l = h.getAttribute("data-safe-src")))), h = h.parentNode;
    let T = document.getSelection()?.toString() ?? "";
    return (0, i.jsx)(c.f5, {
        value: y,
        children: $({
            message: u,
            channel: o,
            mediaItem: A,
            textSelection: T,
            favoriteableType: E,
            favoriteableId: S,
            favoriteableName: _,
            itemHref: t,
            itemSrc: n,
            itemSafeSrc: l,
            itemTextContent: r,
            canReport: !0,
            onHeightUpdate: f,
            onSelect: m,
            onClose: s.Z_,
            navId: "message",
            ariaLabel: Y.intl.string(Y.t.ChPNkN),
            shouldHideMediaOptions: p
        })
    })
}

function $(e) {
    let {
        message: t,
        channel: n,
        mediaItem: a,
        textSelection: s,
        favoriteableType: d,
        favoriteableId: c,
        favoriteableName: Z,
        itemHref: $,
        itemSrc: Q,
        itemSafeSrc: ee,
        itemTextContent: et,
        canReport: en,
        onHeightUpdate: ei,
        onSelect: el,
        onClose: ea,
        navId: er,
        ariaLabel: es,
        shouldHideMediaOptions: eo = !1
    } = e, ed = l.useRef(null);
    l.useEffect(() => {
        ed.current = Date.now()
    }, []), l.useEffect(() => () => {
        if (null != ed.current) {
            let e = Date.now() - ed.current;
            E.default.track(z.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                time_to_close_ms: e,
                channel_id: n.id,
                guild_id: n.getGuildId() ?? void 0,
                message_id: t.id
            })
        }
    }, [n, t]);
    let ec = l.useCallback(() => {
            if (null != ed.current) {
                let e = Date.now() - ed.current;
                E.default.track(z.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: n.id,
                    guild_id: n.getGuildId() ?? void 0,
                    message_id: t.id
                })
            }
            el?.()
        }, [el, n, t]),
        {
            tidaWebformEnabled: eu
        } = g.A.useExperiment({
            location: "MessageContextMenu"
        }, {
            autoTrackExposure: !1
        }),
        eg = (0, R.A)(t, n),
        eA = (0, A.A)(s),
        ep = (0, f.A)(s),
        em = (0, T.A)(t, n),
        ef = (0, M.A)(t, n),
        ey = (0, w.A)(t, n),
        eh = (0, O.A)(t, n),
        eE = (0, V.A)(t, n),
        eS = (0, b.A)(t),
        e_ = (0, B.A)(t, n),
        eT = (0, G.A)(t, n),
        eI = (0, C.A)(t, n),
        ev = (0, _.A)(t),
        eb = (0, h.A)({
            commandType: o.kc.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: ei,
            showIcon: !0
        }),
        eD = (0, k.A)(t, n),
        ex = (0, N.A)(t, n),
        eM = (0, I.A)(t, n),
        ej = (0, v.A)(t, n),
        eO = (0, K.A)(t, n),
        eC = (0, X.A)(t, n),
        eN = (0, L.A)(t),
        eG = (0, y.A)(t),
        eR = (0, H.A)(t),
        eL = (0, U.A)(t, n),
        eP = (0, P.A)(t, n),
        eU = (0, D.A)(t, n),
        ew = (0, F.Ay)(t),
        eF = (0, F.S_)(t),
        ek = (0, F.zo)(t),
        eX = (0, j.A)({
            type: d,
            id: c,
            name: Z
        }),
        eV = (0, S.A)(s, n.getGuildId()),
        eB = (0, p.A)(ee, t, {
            shouldHideMediaOptions: eo,
            contentType: a?.contentType,
            originalContentType: a?.originalContentType
        }),
        eK = (0, J.A)(t, a),
        eH = (0, W.A)(t),
        eJ = (0, q.A)(a, {
            shouldHideMediaOptions: eo
        }),
        eW = (0, m.A)($ ?? Q, et, t, {
            shouldHideMediaOptions: eo
        }),
        eq = (0, u.A)({
            id: t.id,
            label: Y.intl.string(Y.t.zBoHlf),
            shiftId: `${t.channel_id}-${t.id}`
        }),
        ez = (0, x.A)({
            messageId: t.id,
            itemId: c,
            type: d,
            imageSrc: Q
        }),
        eY = (0, i.jsx)(r.rXV, {
            children: ez ?? eq
        }),
        eZ = (0, i.jsxs)(r.rXV, {
            children: [eX, eV, eB, eK, eH, eJ]
        });
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: er,
        onClose: ea,
        "aria-label": es,
        onSelect: ec,
        children: [(0, i.jsx)(r.rXV, {
            children: eA
        }), (0, i.jsx)(r.rXV, {
            children: ep
        }), (0, i.jsxs)(r.rXV, {
            children: ["" === s ? eg : null, em, eN]
        }), (0, i.jsxs)(r.rXV, {
            children: [ef, ey, eh, eE]
        }), (0, i.jsxs)(r.rXV, {
            children: [eS, e_, eT, eI, ev, eb, eD, ex, eM, ej, eO, eC, eG, eR]
        }), (0, i.jsxs)(r.rXV, {
            children: [eL, eP, eU, en && ew, en && eF, ek]
        }), eu ? (0, i.jsxs)(i.Fragment, {
            children: [eY, eZ, null == ez && (0, i.jsx)(r.rXV, {
                children: eW
            })]
        }) : (0, i.jsxs)(i.Fragment, {
            children: [eZ, (0, i.jsx)(r.rXV, {
                children: eW
            }), eY]
        })]
    })
}