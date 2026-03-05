/** chunk id: 306417, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Dt: () => w,
    Fb: () => P,
    Fh: () => j,
    Vx: () => D,
    e5: () => k,
    k$: () => O
}), n(801541);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
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
    b = n(330751);

function T(e) {
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

function v(e) {
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

function S(e) {
    let {
        className: t,
        children: n
    } = e, {
        ref: l,
        ...r
    } = (0, d._u)({
        orientation: "vertical"
    });
    return (0, i.jsx)("div", {
        "aria-label": I.intl.string(I.t.sJpqBS),
        ref: l,
        ...r,
        className: t,
        children: n
    })
}

function y(e) {
    let {
        className: t,
        onClick: n,
        isSelected: l,
        isFirstAnswer: r,
        children: s
    } = e, {
        pollAnswerRef: o
    } = (0, E.Mg)();
    return (0, i.jsx)(c.DUT, {
        role: "checkbox",
        className: a()(t, b.Sn),
        onClick: n,
        "aria-checked": l,
        ref: r ? o : void 0,
        children: s
    })
}

function N(e) {
    let {
        className: t,
        children: n,
        onClick: l,
        isSelected: r,
        hasSelectedAnyAnswer: s,
        isFirstAnswer: o
    } = e, {
        pollAnswerRef: d
    } = (0, E.Mg)();
    return (0, i.jsx)(c.DUT, {
        role: "radio",
        className: a()(t, b.Sn),
        onClick: l,
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
        answerTapAccessibilityLabel: l,
        canTapAnswers: r,
        hasSelectedAnyAnswer: a,
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
        ContainerComponent: v,
        answerElementType: 2
    })).with({
        canTapAnswers: !0,
        answersInteraction: f.CQ.LIST
    }, () => ({
        ContainerComponent: T,
        answerElementType: 3
    })).otherwise(() => ({
        ContainerComponent: T,
        answerElementType: 0
    }));
    return (0, i.jsx)(u, {
        className: o,
        children: t.map((e, t) => (0, i.jsx)(L, {
            className: d,
            answer: e,
            isFirstAnswer: 0 === t,
            elementType: _,
            answerTapAccessibilityLabel: l,
            hasSelectedAnyAnswer: a,
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
    } = (0, C.Tu)(), _ = (0, C.hd)(n.style), m = !0 === n.isSelected, h = l.useCallback(() => {
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
                children: r
            });
        case 1:
            return (0, i.jsx)(N, {
                className: a()(t, _),
                onClick: h,
                isSelected: m,
                hasSelectedAnyAnswer: s,
                isFirstAnswer: o,
                children: r
            });
        case 2:
            return (0, i.jsx)(y, {
                className: a()(t, _),
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
    } = e, l = (0, g.j)(), r = m.kt.useSetting();
    return (0, i.jsx)(_.Ay, {
        className: n,
        imageClassName: b.Bw,
        src: null != t.proxy_url && "" !== t.proxy_url ? t.proxy_url : t.url,
        alt: t.description ?? (0, x.Kj)(t.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: r,
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

function M(e, t) {
    return null != e ? (0, i.jsx)("div", {
        className: e,
        children: t
    }) : t
}

function w(e) {
    let {
        media: t,
        containerClassName: n,
        attachmentClassName: l,
        emojiClassName: r,
        fallback: a
    } = e, {
        message: s
    } = (0, C.y0)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = s.attachments.find(e => e.id === t.attachmentIds?.[0]);
        if (null != e) return M(n, (0, i.jsx)(R, {
            className: l,
            attachment: e
        }))
    }
    return null != t.emoji ? M(n, (0, i.jsx)(P, {
        className: r,
        emoji: t.emoji
    })) : void 0 !== a ? a : null
}

function D(e) {
    let {
        isVictor: t,
        isExpired: n,
        size: l,
        className: r
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
        width: l,
        height: l,
        className: r,
        color: a,
        secondaryColor: d,
        "aria-hidden": !0
    })
}

function O(e) {
    let {
        isSelected: t,
        size: n,
        className: l
    } = e, r = {
        width: n,
        height: n,
        background: b.So,
        "aria-hidden": !0
    };
    return t ? (0, i.jsx)(p.A, {
        ...r,
        foreground: b.dY,
        className: l
    }) : (0, i.jsx)(h.A, {
        ...r,
        className: l
    })
}

function k(e) {
    let {
        isSelected: t,
        size: n,
        className: l
    } = e, r = .85 * n;
    return (0, i.jsx)("div", {
        className: a()(b.kv, {
            [b.H7]: t
        }, l),
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