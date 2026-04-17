/** chunk id: 306417 params = (module,exports,require) **/
n.d(t, {
    Dt: () => M,
    Fb: () => P,
    Fh: () => j,
    Vx: () => D,
    e5: () => O,
    k$: () => k
}), n(801541);
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(889137),
    o = n(827734),
    d = n(421380),
    c = n(397927),
    u = n(565645),
    _ = n(619517),
    m = n(253932),
    h = n(44234),
    p = n(282054),
    g = n(218394),
    A = n(180662),
    x = n(969632),
    f = n(438437),
    C = n(290794),
    E = n(789646),
    I = n(985018),
    v = n(150834);

function b(e) {
    let {
        className: t,
        children: n
    } = e;
    return (0, i.jsx)("ul", {
        "aria-label": I.intl.string(I.t.sJpqBS),
        className: t,
        children: n
    })
}

function T(e) {
    let {
        className: t,
        children: n
    } = e;
    return (0, i.jsx)("div", {
        "aria-label": I.intl.string(I.t.sJpqBS),
        role: "group",
        className: t,
        children: n
    })
}

function y(e) {
    let {
        className: t,
        children: n
    } = e, {
        ref: a,
        ...l
    } = (0, d._u)({
        orientation: "vertical"
    });
    return (0, i.jsx)("div", {
        "aria-label": I.intl.string(I.t.sJpqBS),
        ref: a,
        ...l,
        className: t,
        children: n
    })
}

function S(e) {
    let {
        className: t,
        onClick: n,
        isSelected: a,
        isFirstAnswer: l,
        children: s
    } = e, {
        pollAnswerRef: o
    } = (0, E.Mg)();
    return (0, i.jsx)(c.DUT, {
        role: "checkbox",
        className: r()(t, v.Sn),
        onClick: n,
        "aria-checked": a,
        ref: l ? o : void 0,
        children: s
    })
}

function N(e) {
    let {
        className: t,
        children: n,
        onClick: a,
        isSelected: l,
        hasSelectedAnyAnswer: s,
        isFirstAnswer: o
    } = e, {
        pollAnswerRef: d
    } = (0, E.Mg)();
    return (0, i.jsx)(c.DUT, {
        role: "radio",
        className: r()(t, v.Sn),
        onClick: a,
        "aria-checked": l,
        tabIndex: s ? l ? 0 : -1 : o ? 0 : -1,
        ref: o ? d : void 0,
        children: n
    })
}

function j(e) {
    let {
        answers: t,
        answersInteraction: n,
        answerTapAccessibilityLabel: a,
        canTapAnswers: l,
        hasSelectedAnyAnswer: r,
        className: o,
        answerClassName: d,
        renderAnswerContent: c
    } = e, {
        ContainerComponent: u,
        answerElementType: _
    } = (0, s.YW)({
        canTapAnswers: l,
        answersInteraction: n
    }).with({
        answersInteraction: f.CQ.RADIO_BUTTONS
    }, () => ({
        ContainerComponent: y,
        answerElementType: 1
    })).with({
        answersInteraction: f.CQ.CHECKBOXES
    }, () => ({
        ContainerComponent: T,
        answerElementType: 2
    })).with({
        canTapAnswers: !0,
        answersInteraction: f.CQ.LIST
    }, () => ({
        ContainerComponent: b,
        answerElementType: 3
    })).otherwise(() => ({
        ContainerComponent: b,
        answerElementType: 0
    }));
    return (0, i.jsx)(u, {
        className: o,
        children: t.map((e, t) => (0, i.jsx)(L, {
            className: d,
            answer: e,
            isFirstAnswer: 0 === t,
            elementType: _,
            answerTapAccessibilityLabel: a,
            hasSelectedAnyAnswer: r,
            children: c(e)
        }, e.answerId))
    })
}

function L(e) {
    let {
        className: t,
        answer: n,
        children: l,
        hasSelectedAnyAnswer: s,
        isFirstAnswer: o,
        elementType: d
    } = e, {
        channelId: c,
        messageId: u
    } = (0, C.Tu)(), _ = (0, C.hd)(n.style), m = !0 === n.isSelected, h = a.useCallback(() => {
        A.A.handlePollAnswerTapped({
            channelId: c,
            messageId: u,
            answerId: n.answerId
        })
    }, [c, u, n.answerId]);
    switch (d) {
        case 0:
        case 3:
            return (0, i.jsx)("li", {
                className: r()(t, _),
                children: l
            });
        case 1:
            return (0, i.jsx)(N, {
                className: r()(t, _),
                onClick: h,
                isSelected: m,
                hasSelectedAnyAnswer: s,
                isFirstAnswer: o,
                children: l
            });
        case 2:
            return (0, i.jsx)(S, {
                className: r()(t, _),
                onClick: h,
                isSelected: m,
                isFirstAnswer: o,
                children: l
            })
    }
}

function R(e) {
    let {
        attachment: t,
        className: n
    } = e, a = (0, g.j)(), l = m.kt.useSetting();
    return (0, i.jsx)(_.Ay, {
        className: n,
        imageClassName: v.Bw,
        src: null != t.proxy_url && "" !== t.proxy_url ? t.proxy_url : t.url,
        alt: t.description ?? (0, x.Kj)(t.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: l,
        shouldAnimate: a,
        shouldRenderAccessory: !1
    })
}

function P(e) {
    let {
        className: t,
        emoji: n
    } = e;
    return (0, i.jsx)(u.A, {
        className: t,
        emojiId: n.id,
        emojiName: n.name,
        animated: n.animated
    })
}

function w(e, t) {
    return null != e ? (0, i.jsx)("div", {
        className: e,
        children: t
    }) : t
}

function M(e) {
    let {
        media: t,
        containerClassName: n,
        attachmentClassName: a,
        emojiClassName: l,
        fallback: r
    } = e, {
        message: s
    } = (0, C.y0)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = s.attachments.find(e => e.id === t.attachmentIds?.[0]);
        if (null != e) return w(n, (0, i.jsx)(R, {
            className: a,
            attachment: e
        }))
    }
    return null != t.emoji ? w(n, (0, i.jsx)(P, {
        className: l,
        emoji: t.emoji
    })) : void 0 !== r ? r : null
}

function D(e) {
    let {
        isVictor: t,
        isExpired: n,
        size: a,
        className: l
    } = e, {
        color: r,
        backgroundColor: d
    } = (0, s.YW)({
        isVictor: t,
        isExpired: n
    }).with({
        isExpired: !0,
        isVictor: !0
    }, () => ({
        color: o.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT.css,
        backgroundColor: o.A.unsafe_rawColors.WHITE.css
    })).with({
        isExpired: !0,
        isVictor: !1
    }, () => ({
        color: o.A.colors.ICON_STRONG.css,
        backgroundColor: o.A.colors.BACKGROUND_MOD_MUTED.css
    })).otherwise(() => ({
        color: o.A.unsafe_rawColors.BRAND_500.css,
        backgroundColor: o.A.unsafe_rawColors.WHITE.css
    }));
    return (0, i.jsx)(c.yr3, {
        size: "custom",
        width: a,
        height: a,
        className: l,
        color: r,
        secondaryColor: d,
        "aria-hidden": !0
    })
}

function k(e) {
    let {
        isSelected: t,
        size: n,
        className: a
    } = e, l = {
        width: n,
        height: n,
        background: v.So,
        "aria-hidden": !0
    };
    return t ? (0, i.jsx)(p.A, {
        ...l,
        foreground: v.dY,
        className: a
    }) : (0, i.jsx)(h.A, {
        ...l,
        className: a
    })
}

function O(e) {
    let {
        isSelected: t,
        size: n,
        className: a
    } = e, l = .85 * n;
    return (0, i.jsx)("div", {
        className: r()(v.kv, {
            [v.H7]: t
        }, a),
        style: {
            width: n,
            height: n
        },
        "aria-hidden": !0,
        children: t && (0, i.jsx)(c.A9s, {
            size: "custom",
            width: l,
            height: l,
            color: o.A.unsafe_rawColors.WHITE.css
        })
    })
}