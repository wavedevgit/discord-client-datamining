/** chunk id: 570766 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(126031),
    a = n(397927),
    o = n(438437),
    d = n(306417),
    c = n(985018),
    u = n(841870);

function _(e) {
    let {
        didSelfVote: t,
        label: n,
        percentage: l
    } = e;
    return (0, i.jsxs)("div", {
        className: u.AA,
        children: [t && (0, i.jsx)(r.s, {
            children: c.intl.string(c.t["8DAM+5"])
        }), (0, i.jsxs)(a.Text, {
            variant: "text-md/semibold",
            color: "none",
            children: [l, "%"]
        }), (0, i.jsx)(a.Text, {
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
        myAvatarUrl: l,
        canShowVoteCounts: r
    } = e, a = !0 === t.isSelected, o = !0 === t.didSelfVote, c = !0 === t.isVictor;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.Dt, {
            attachmentClassName: s()(u.oh, {
                [u.Wx]: r
            }),
            emojiClassName: u.Zg,
            media: t.pollMedia,
            fallback: (0, i.jsx)("div", {
                className: s()(u.oh, u.nb)
            })
        }), a && (0, i.jsx)(d.Vx, {
            size: 40,
            isVictor: c,
            isExpired: n,
            className: u.Dt
        }), r && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(_, {
                didSelfVote: o,
                percentage: t.votesPercentage,
                label: t.votes,
                myAvatarUrl: o ? l : void 0
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
        answersInteraction: l,
        canShowVoteCounts: r,
        ...a
    } = e;
    return (0, i.jsx)(d.Fh, {
        className: u.ry,
        answerClassName: s()(u.ZF, {
            [u.EK]: l !== o.CQ.LIST
        }),
        myAvatarUrl: n,
        answersInteraction: l,
        renderAnswerContent: e => (0, i.jsx)(m, {
            answer: e,
            isExpired: t,
            myAvatarUrl: n,
            answersInteraction: l,
            canShowVoteCounts: r
        }),
        ...a
    })
}