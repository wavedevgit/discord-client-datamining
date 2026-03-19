/** chunk id: 695206 params = (module,exports,require) **/
n.d(t, {
    A: () => C
}), n(801541);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
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
        handleClick: r,
        isInteractive: a,
        className: s
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(p.ez, s),
        children: [a ? (0, i.jsx)(d.QWc, {
            text: t,
            onClick: r,
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
        messageId: a,
        isInteractive: l,
        className: s
    } = e, {
        actionButtonRef: o,
        manageFocusOnAction: u
    } = (0, m.Mg)(), _ = r.useCallback(async () => {
        t?.type != null && (await c.A.handlePollActionTapped({
            channelId: n,
            messageId: a,
            type: t.type
        }), u(t.type))
    }, [t?.type, n, a, u]);
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
        isInteractive: l,
        className: s
    })
}

function f(e) {
    let t, {
            message: n,
            poll: r,
            className: a
        } = e,
        c = (0, _.hd)(r.containerStyle),
        m = (t = {
            answers: r.answers,
            answersInteraction: r.answersInteraction,
            answerTapAccessibilityLabel: r.answerTapAccessibilityLabel,
            isExpired: r.isExpired,
            canTapAnswers: r.canTapAnswers,
            hasSelectedAnyAnswer: r.hasSelectedAnswer,
            myAvatarUrl: r.myAvatarUrl,
            canShowVoteCounts: r.canShowVoteCounts
        }, (0, s.YW)(r.layoutType).with(o.Z.DEFAULT, () => (0, i.jsx)(h.j, {
            ...t
        })).with(o.Z.IMAGE_ONLY_ANSWERS, () => (0, i.jsx)(u.A, {
            ...t
        })).otherwise(() => null));
    return null == m ? null : (0, i.jsx)("div", {
        className: l()(p.kL, c, a),
        children: (0, i.jsxs)(d.Fmo, {
            children: [(0, i.jsxs)("div", {
                className: p.wx,
                children: [(0, i.jsx)(g, {
                    media: r.question
                }), null != r.promptLabel && (0, i.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: p.J1,
                    scaleFontToUserSetting: !0,
                    children: r.promptLabel
                })]
            }), m, (0, i.jsxs)("div", {
                className: p.pR,
                children: [(0, i.jsx)(x, {
                    channelId: n.getChannelId(),
                    messageId: n.id,
                    action: r.secondaryAction,
                    className: p.Dc,
                    isInteractive: r.isInteractive
                }), (0, i.jsx)(x, {
                    channelId: n.getChannelId(),
                    messageId: n.id,
                    action: r.tertiaryAction,
                    className: p.vD
                }), (0, i.jsx)(x, {
                    channelId: n.getChannelId(),
                    messageId: n.id,
                    action: r.primaryAction
                })]
            })]
        })
    })
}

function C(e) {
    let {
        message: t,
        poll: n,
        className: r
    } = e;
    return (0, i.jsx)(_.y5, {
        message: t,
        poll: n,
        children: (0, i.jsx)(m.RZ, {
            children: (0, i.jsx)(f, {
                message: t,
                poll: n,
                className: r
            })
        })
    })
}