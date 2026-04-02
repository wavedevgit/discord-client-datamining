/** chunk id: 306417 params = (module,exports,require) **/
n.d(t, {
    Dt: () => D,
    Fb: () => P,
    Fh: () => j,
    Vx: () => M,
    e5: () => O,
    k$: () => k
}), n(801541);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
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
    I = n(789646),
    E = n(985018),
    b = n(102159);

function v(e) {
    let {
        className: t,
        children: n
    } = e;
    return (0, i.jsx)("ul", {
        "aria-label": E.intl.string(E.t.sJpqBS),
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
        "aria-label": E.intl.string(E.t.sJpqBS),
        role: "group",
        className: t,
        children: n
    })
}

function S(e) {
    let {
        className: t,
        children: n
    } = e, {
        ref: a,
        ...r
    } = (0, d._u)({
        orientation: "vertical"
    });
    return (0, i.jsx)("div", {
        "aria-label": E.intl.string(E.t.sJpqBS),
        ref: a,
        ...r,
        className: t,
        children: n
    })
}

function y(e) {
    let {
        className: t,
        onClick: n,
        isSelected: a,
        isFirstAnswer: r,
        children: s
    } = e, {
        pollAnswerRef: o
    } = (0, I.Mg)();
    return (0, i.jsx)(c.DUT, {
        role: "checkbox",
        className: l()(t, b.Sn),
        onClick: n,
        "aria-checked": a,
        ref: r ? o : void 0,
        children: s
    })
}

function N(e) {
    let {
        className: t,
        children: n,
        onClick: a,
        isSelected: r,
        hasSelectedAnyAnswer: s,
        isFirstAnswer: o
    } = e, {
        pollAnswerRef: d
    } = (0, I.Mg)();
    return (0, i.jsx)(c.DUT, {
        role: "radio",
        className: l()(t, b.Sn),
        onClick: a,
        "aria-checked": r,
        tabIndex: s ? r ? 0 : -1 : o ? 0 : -1,
        ref: o ? d : void 0,
        children: n
    })
}

function j(e) {
    let {
        answers: t,
        answersInteraction: n,
        answerTapAccessibilityLabel: a,
        canTapAnswers: r,
        hasSelectedAnyAnswer: l,
        className: o,
        answerClassName: d,
        renderAnswerContent: c
    } = e, {
        ContainerComponent: u,
        answerElementType: _
    } = (0, s.YW)({
        canTapAnswers: r,
        answersInteraction: n
    }).with({
        answersInteraction: f.CQ.RADIO_BUTTONS
    }, () => ({
        ContainerComponent: S,
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
        ContainerComponent: v,
        answerElementType: 3
    })).otherwise(() => ({
        ContainerComponent: v,
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
            hasSelectedAnyAnswer: l,
            children: c(e)
        }, e.answerId))
    })
}

function L(e) {
    let {
        className: t,
        answer: n,
        children: r,
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
                className: l()(t, _),
                children: r
            });
        case 1:
            return (0, i.jsx)(N, {
                className: l()(t, _),
                onClick: h,
                isSelected: m,
                hasSelectedAnyAnswer: s,
                isFirstAnswer: o,
                children: r
            });
        case 2:
            return (0, i.jsx)(y, {
                className: l()(t, _),
                onClick: h,
                isSelected: m,
                isFirstAnswer: o,
                children: r
            })
    }
}

function R(e) {
    let {
        attachment: t,
        className: n
    } = e, a = (0, g.j)(), r = m.kt.useSetting();
    return (0, i.jsx)(_.Ay, {
        className: n,
        imageClassName: b.Bw,
        src: null != t.proxy_url && "" !== t.proxy_url ? t.proxy_url : t.url,
        alt: t.description ?? (0, x.Kj)(t.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: r,
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

function D(e) {
    let {
        media: t,
        containerClassName: n,
        attachmentClassName: a,
        emojiClassName: r,
        fallback: l
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
        className: r,
        emoji: t.emoji
    })) : void 0 !== l ? l : null
}

function M(e) {
    let {
        isVictor: t,
        isExpired: n,
        size: a,
        className: r
    } = e, {
        color: l,
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
        className: r,
        color: l,
        secondaryColor: d,
        "aria-hidden": !0
    })
}

function k(e) {
    let {
        isSelected: t,
        size: n,
        className: a
    } = e, r = {
        width: n,
        height: n,
        background: b.So,
        "aria-hidden": !0
    };
    return t ? (0, i.jsx)(p.A, {
        ...r,
        foreground: b.dY,
        className: a
    }) : (0, i.jsx)(h.A, {
        ...r,
        className: a
    })
}

function O(e) {
    let {
        isSelected: t,
        size: n,
        className: a
    } = e, r = .85 * n;
    return (0, i.jsx)("div", {
        className: l()(b.kv, {
            [b.H7]: t
        }, a),
        style: {
            width: n,
            height: n
        },
        "aria-hidden": !0,
        children: t && (0, i.jsx)(c.A9s, {
            size: "custom",
            width: r,
            height: r,
            color: o.A.unsafe_rawColors.WHITE.css
        })
    })
}