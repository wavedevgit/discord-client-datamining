/** chunk id: 570766 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(126031),
    s = n(397927),
    o = n(438437),
    d = n(306417),
    c = n(985018),
    u = n(603112);

function _(e) {
    let {
        didSelfVote: t,
        label: n,
        percentage: a
    } = e;
    return (0, i.jsxs)("div", {
        className: u.AA,
        children: [t && (0, i.jsx)(l.s, {
            children: c.intl.string(c.t["8DAM+5"])
        }), (0, i.jsxs)(s.Text, {
            variant: "text-md/semibold",
            color: "none",
            children: [a, "%"]
        }), (0, i.jsx)(s.Text, {
            variant: "text-xs/semibold",
            color: "none",
            children: n
        })]
    })
}

function m(e) {
    let {
        answer: t,
        isExpired: n,
        myAvatarUrl: a,
        canShowVoteCounts: l
    } = e, s = !0 === t.isSelected, o = !0 === t.didSelfVote, c = !0 === t.isVictor;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.Dt, {
            attachmentClassName: r()(u.oh, {
                [u.Wx]: l
            }),
            emojiClassName: u.Zg,
            media: t.pollMedia,
            fallback: (0, i.jsx)("div", {
                className: r()(u.oh, u.nb)
            })
        }), s && (0, i.jsx)(d.Vx, {
            size: 40,
            isVictor: c,
            isExpired: n,
            className: u.Dt
        }), l && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(_, {
                didSelfVote: o,
                percentage: t.votesPercentage,
                label: t.votes,
                myAvatarUrl: o ? a : void 0
            }), (!n && o || c) && (0, i.jsx)(d.Vx, {
                size: 18,
                isVictor: c,
                isExpired: n,
                className: u.Po
            })]
        })]
    })
}

function h(e) {
    let {
        isExpired: t,
        myAvatarUrl: n,
        answersInteraction: a,
        canShowVoteCounts: l,
        ...s
    } = e;
    return (0, i.jsx)(d.Fh, {
        className: u.ry,
        answerClassName: r()(u.ZF, {
            [u.EK]: a !== o.CQ.LIST
        }),
        myAvatarUrl: n,
        answersInteraction: a,
        renderAnswerContent: e => (0, i.jsx)(m, {
            answer: e,
            isExpired: t,
            myAvatarUrl: n,
            answersInteraction: a,
            canShowVoteCounts: l
        }),
        ...s
    })
}