/** chunk id: 306417 params = (module,exports,require) **/
n.d(t, {
    Dt: () => D,
    Fb: () => P,
    Fh: () => j,
    Vx: () => w,
    e5: () => k,
    k$: () => O
}), n(801541);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
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
    v = n(846537);

function b(e) {
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
        ref: r,
        ...l
    } = (0, d._u)({
        orientation: "vertical"
    });
    return (0, i.jsx)("div", {
        "aria-label": E.intl.string(E.t.sJpqBS),
        ref: r,
        ...l,
        className: t,
        children: n
    })
}

function y(e) {
    let {
        className: t,
        onClick: n,
        isSelected: r,
        isFirstAnswer: l,
        children: s
    } = e, {
        pollAnswerRef: o
    } = (0, I.Mg)();
    return (0, i.jsx)(c.DUT, {
        role: "checkbox",
        className: a()(t, v.Sn),
        onClick: n,
        "aria-checked": r,
        ref: l ? o : void 0,
        children: s
    })
}

function N(e) {
    let {
        className: t,
        children: n,
        onClick: r,
        isSelected: l,
        hasSelectedAnyAnswer: s,
        isFirstAnswer: o
    } = e, {
        pollAnswerRef: d
    } = (0, I.Mg)();
    return (0, i.jsx)(c.DUT, {
        role: "radio",
        className: a()(t, v.Sn),
        onClick: r,
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
        answerTapAccessibilityLabel: r,
        canTapAnswers: l,
        hasSelectedAnyAnswer: a,
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
            answerTapAccessibilityLabel: r,
            hasSelectedAnyAnswer: a,
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
    } = (0, C.Tu)(), _ = (0, C.hd)(n.style), m = !0 === n.isSelected, h = r.useCallback(() => {
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
                className: a()(t, _),
                children: l
            });
        case 1:
            return (0, i.jsx)(N, {
                className: a()(t, _),
                onClick: h,
                isSelected: m,
                hasSelectedAnyAnswer: s,
                isFirstAnswer: o,
                children: l
            });
        case 2:
            return (0, i.jsx)(y, {
                className: a()(t, _),
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
    } = e, r = (0, g.j)(), l = m.kt.useSetting();
    return (0, i.jsx)(_.Ay, {
        className: n,
        imageClassName: v.Bw,
        src: null != t.proxy_url && "" !== t.proxy_url ? t.proxy_url : t.url,
        alt: t.description ?? (0, x.Kj)(t.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: l,
        shouldAnimate: r,
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

function M(e, t) {
    return null != e ? (0, i.jsx)("div", {
        className: e,
        children: t
    }) : t
}

function D(e) {
    let {
        media: t,
        containerClassName: n,
        attachmentClassName: r,
        emojiClassName: l,
        fallback: a
    } = e, {
        message: s
    } = (0, C.y0)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = s.attachments.find(e => e.id === t.attachmentIds?.[0]);
        if (null != e) return M(n, (0, i.jsx)(R, {
            className: r,
            attachment: e
        }))
    }
    return null != t.emoji ? M(n, (0, i.jsx)(P, {
        className: l,
        emoji: t.emoji
    })) : void 0 !== a ? a : null
}

function w(e) {
    let {
        isVictor: t,
        isExpired: n,
        size: r,
        className: l
    } = e, {
        color: a,
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
        width: r,
        height: r,
        className: l,
        color: a,
        secondaryColor: d,
        "aria-hidden": !0
    })
}

function O(e) {
    let {
        isSelected: t,
        size: n,
        className: r
    } = e, l = {
        width: n,
        height: n,
        background: v.So,
        "aria-hidden": !0
    };
    return t ? (0, i.jsx)(p.A, {
        ...l,
        foreground: v.dY,
        className: r
    }) : (0, i.jsx)(h.A, {
        ...l,
        className: r
    })
}

function k(e) {
    let {
        isSelected: t,
        size: n,
        className: r
    } = e, l = .85 * n;
    return (0, i.jsx)("div", {
        className: a()(v.kv, {
            [v.H7]: t
        }, r),
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