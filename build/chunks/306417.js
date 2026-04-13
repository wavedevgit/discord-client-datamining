/** chunk id: 306417 params = (module,exports,require) **/
n.d(t, {
    Dt: () => M,
    Fb: () => P,
    Fh: () => j,
    Vx: () => w,
    e5: () => k,
    k$: () => O
}), n(801541);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(889137),
    o = n(827734),
    d = n(421380),
    c = n(397927),
    u = n(565645),
    m = n(619517),
    _ = n(253932),
    h = n(44234),
    p = n(282054),
    g = n(218394),
    A = n(180662),
    x = n(969632),
    f = n(438437),
    C = n(290794),
    E = n(789646),
    I = n(985018),
    v = n(707906);

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
        ref: l,
        ...s
    } = (0, d._u)({
        orientation: "vertical"
    });
    return (0, i.jsx)("div", {
        "aria-label": I.intl.string(I.t.sJpqBS),
        ref: l,
        ...s,
        className: t,
        children: n
    })
}

function N(e) {
    let {
        className: t,
        onClick: n,
        isSelected: l,
        isFirstAnswer: s,
        children: a
    } = e, {
        pollAnswerRef: o
    } = (0, E.Mg)();
    return (0, i.jsx)(c.DUT, {
        role: "checkbox",
        className: r()(t, v.Sn),
        onClick: n,
        "aria-checked": l,
        ref: s ? o : void 0,
        children: a
    })
}

function S(e) {
    let {
        className: t,
        children: n,
        onClick: l,
        isSelected: s,
        hasSelectedAnyAnswer: a,
        isFirstAnswer: o
    } = e, {
        pollAnswerRef: d
    } = (0, E.Mg)();
    return (0, i.jsx)(c.DUT, {
        role: "radio",
        className: r()(t, v.Sn),
        onClick: l,
        "aria-checked": s,
        tabIndex: a ? s ? 0 : -1 : o ? 0 : -1,
        ref: o ? d : void 0,
        children: n
    })
}

function j(e) {
    let {
        answers: t,
        answersInteraction: n,
        answerTapAccessibilityLabel: l,
        canTapAnswers: s,
        hasSelectedAnyAnswer: r,
        className: o,
        answerClassName: d,
        renderAnswerContent: c
    } = e, {
        ContainerComponent: u,
        answerElementType: m
    } = (0, a.YW)({
        canTapAnswers: s,
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
            elementType: m,
            answerTapAccessibilityLabel: l,
            hasSelectedAnyAnswer: r,
            children: c(e)
        }, e.answerId))
    })
}

function L(e) {
    let {
        className: t,
        answer: n,
        children: s,
        hasSelectedAnyAnswer: a,
        isFirstAnswer: o,
        elementType: d
    } = e, {
        channelId: c,
        messageId: u
    } = (0, C.Tu)(), m = (0, C.hd)(n.style), _ = !0 === n.isSelected, h = l.useCallback(() => {
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
                className: r()(t, m),
                children: s
            });
        case 1:
            return (0, i.jsx)(S, {
                className: r()(t, m),
                onClick: h,
                isSelected: _,
                hasSelectedAnyAnswer: a,
                isFirstAnswer: o,
                children: s
            });
        case 2:
            return (0, i.jsx)(N, {
                className: r()(t, m),
                onClick: h,
                isSelected: _,
                isFirstAnswer: o,
                children: s
            })
    }
}

function R(e) {
    let {
        attachment: t,
        className: n
    } = e, l = (0, g.j)(), s = _.kt.useSetting();
    return (0, i.jsx)(m.Ay, {
        className: n,
        imageClassName: v.Bw,
        src: null != t.proxy_url && "" !== t.proxy_url ? t.proxy_url : t.url,
        alt: t.description ?? (0, x.Kj)(t.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: s,
        shouldAnimate: l,
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

function D(e, t) {
    return null != e ? (0, i.jsx)("div", {
        className: e,
        children: t
    }) : t
}

function M(e) {
    let {
        media: t,
        containerClassName: n,
        attachmentClassName: l,
        emojiClassName: s,
        fallback: r
    } = e, {
        message: a
    } = (0, C.y0)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = a.attachments.find(e => e.id === t.attachmentIds?.[0]);
        if (null != e) return D(n, (0, i.jsx)(R, {
            className: l,
            attachment: e
        }))
    }
    return null != t.emoji ? D(n, (0, i.jsx)(P, {
        className: s,
        emoji: t.emoji
    })) : void 0 !== r ? r : null
}

function w(e) {
    let {
        isVictor: t,
        isExpired: n,
        size: l,
        className: s
    } = e, {
        color: r,
        backgroundColor: d
    } = (0, a.YW)({
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
        width: l,
        height: l,
        className: s,
        color: r,
        secondaryColor: d,
        "aria-hidden": !0
    })
}

function O(e) {
    let {
        isSelected: t,
        size: n,
        className: l
    } = e, s = {
        width: n,
        height: n,
        background: v.So,
        "aria-hidden": !0
    };
    return t ? (0, i.jsx)(p.A, {
        ...s,
        foreground: v.dY,
        className: l
    }) : (0, i.jsx)(h.A, {
        ...s,
        className: l
    })
}

function k(e) {
    let {
        isSelected: t,
        size: n,
        className: l
    } = e, s = .85 * n;
    return (0, i.jsx)("div", {
        className: r()(v.kv, {
            [v.H7]: t
        }, l),
        style: {
            width: n,
            height: n
        },
        "aria-hidden": !0,
        children: t && (0, i.jsx)(c.A9s, {
            size: "custom",
            width: s,
            height: s,
            color: o.A.unsafe_rawColors.WHITE.css
        })
    })
}