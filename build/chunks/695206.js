/** chunk id: 695206, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
}), n(801541);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(889137),
    o = n(966974),
    d = n(397927),
    c = n(180662),
    u = n(570766),
    _ = n(290794),
    m = n(789646),
    h = n(431174),
    p = n(578006);

function g(e) {
    let {
        media: t
    } = e;
    return (0, i.jsx)(d.Heading, {
        variant: "text-md/medium",
        className: p.b1,
        scaleFontToUserSetting: !0,
        children: t.text
    })
}

function A(e) {
    let {
        buttonLabel: t,
        secondaryLabel: n,
        handleClick: l,
        isInteractive: r,
        className: s
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(p.ez, s),
        children: [r ? (0, i.jsx)(d.QWc, {
            text: t,
            onClick: l,
            variant: "secondary",
            textVariant: "text-sm/medium"
        }) : (0, i.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            scaleFontToUserSetting: !0,
            children: t
        }), null != n && (0, i.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            scaleFontToUserSetting: !0,
            children: n
        })]
    })
}

function x(e) {
    let {
        action: t,
        channelId: n,
        messageId: r,
        isInteractive: a,
        className: s
    } = e, {
        actionButtonRef: o,
        manageFocusOnAction: u
    } = (0, m.Mg)(), _ = l.useCallback(async () => {
        t?.type != null && (await c.A.handlePollActionTapped({
            channelId: n,
            messageId: r,
            type: t.type
        }), u(t.type))
    }, [t?.type, n, r, u]);
    return null == t ? null : "button" === t.presentation || "secondaryButton" === t.presentation ? (0, i.jsx)(d.Button, {
        buttonRef: o,
        onClick: _,
        disabled: !t.enabled,
        variant: "secondaryButton" === t.presentation ? "secondary" : "primary",
        size: "sm",
        text: t.label
    }, t.presentation) : "textButton" === t.presentation ? (0, i.jsx)(d.QWc, {
        buttonRef: o,
        onClick: _,
        text: t.label,
        variant: "secondary",
        textVariant: "text-sm/medium"
    }) : (0, i.jsx)(A, {
        buttonLabel: t.label,
        secondaryLabel: t.secondaryLabel,
        handleClick: _,
        isInteractive: a,
        className: s
    })
}

function f(e) {
    let t, {
            message: n,
            poll: l,
            className: r
        } = e,
        c = (0, _.hd)(l.containerStyle),
        m = (t = {
            answers: l.answers,
            answersInteraction: l.answersInteraction,
            answerTapAccessibilityLabel: l.answerTapAccessibilityLabel,
            isExpired: l.isExpired,
            canTapAnswers: l.canTapAnswers,
            hasSelectedAnyAnswer: l.hasSelectedAnswer,
            myAvatarUrl: l.myAvatarUrl,
            canShowVoteCounts: l.canShowVoteCounts
        }, (0, s.YW)(l.layoutType).with(o.Z.DEFAULT, () => (0, i.jsx)(h.j, {
            ...t
        })).with(o.Z.IMAGE_ONLY_ANSWERS, () => (0, i.jsx)(u.A, {
            ...t
        })).otherwise(() => null));
    return null == m ? null : (0, i.jsx)("div", {
        className: a()(p.kL, c, r),
        children: (0, i.jsxs)(d.Fmo, {
            children: [(0, i.jsxs)("div", {
                className: p.wx,
                children: [(0, i.jsx)(g, {
                    media: l.question
                }), null != l.promptLabel && (0, i.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: p.J1,
                    scaleFontToUserSetting: !0,
                    children: l.promptLabel
                })]
            }), m, (0, i.jsxs)("div", {
                className: p.pR,
                children: [(0, i.jsx)(x, {
                    channelId: n.getChannelId(),
                    messageId: n.id,
                    action: l.secondaryAction,
                    className: p.Dc,
                    isInteractive: l.isInteractive
                }), (0, i.jsx)(x, {
                    channelId: n.getChannelId(),
                    messageId: n.id,
                    action: l.tertiaryAction,
                    className: p.vD
                }), (0, i.jsx)(x, {
                    channelId: n.getChannelId(),
                    messageId: n.id,
                    action: l.primaryAction
                })]
            })]
        })
    })
}

function C(e) {
    let {
        message: t,
        poll: n,
        className: l
    } = e;
    return (0, i.jsx)(_.y5, {
        message: t,
        poll: n,
        children: (0, i.jsx)(m.RZ, {
            children: (0, i.jsx)(f, {
                message: t,
                poll: n,
                className: l
            })
        })
    })
}