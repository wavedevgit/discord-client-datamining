/** chunk id: 814249 params = (module,exports,require) **/
"use strict";
n.d(e, {
    K: () => I,
    default: () => N
});
var i = n(627968),
    r = n(64700),
    s = n(158954),
    l = n(311907),
    a = n(397927),
    o = n(236698),
    c = n(668131),
    u = n(797632),
    d = n(468035),
    E = n(304937),
    _ = n(985018),
    T = n(158677);

function A(t) {
    let {
        surveyId: e,
        survey: n,
        onClose: l,
        transitionState: u
    } = t, {
        getSurveyResponses: A,
        setResponse: I,
        trackDisplayedQuestions: N
    } = (0, c.i)(), p = A(e), R = (0, d.i)(n), [g, h] = r.useState(R.blockId), [m, O] = r.useState(R.pageIndex), [C, S] = r.useState(!1), y = (t, n) => {
        I(e, t, n)
    }, x = r.useCallback(() => (C ? l() : (0, a.qfG)(t => (0, i.jsx)(s.Modal, {
        title: _.intl.string(_.t.T9Sx3z),
        actions: [{
            variant: "secondary",
            text: _.intl.string(_.t.oEAioF),
            onClick: t.onClose
        }, {
            variant: "critical-primary",
            text: _.intl.string(_.t.p89ACt),
            onClick: () => {
                t.onClose(), l()
            }
        }],
        ...t,
        children: (0, i.jsx)(a.Text, {
            variant: "text-md/normal",
            children: _.intl.string(_.t.iCK6G0)
        })
    })), Promise.resolve()), [l, C]), P = r.useMemo(() => null == g ? [] : (0, d.uy)(n, {
        blockId: g,
        pageIndex: m,
        responses: p
    }), [n, g, m, p]), U = r.useCallback(() => {
        if (null == n || null == g) return;
        let t = (0, d.vt)(n, {
            blockId: g,
            pageIndex: m,
            responses: p
        });
        N(e, P), t.isComplete && o.Ay.submitSurveyResponse(e, p), h(t.blockId), O(t.pageIndex), S(t.isComplete)
    }, [n, g, m, p, e, P, N]);
    r.useEffect(() => {
        0 === P.length && U()
    }, [P, U]);
    let M = r.useMemo(() => {
        if (C) return !1;
        for (let t of P) {
            let e = n.Questions[t];
            if (e?.Validation?.Settings?.ForceResponse === "ON") {
                let e = p[t];
                if (null == e || "" === e.trim()) return !1
            }
        }
        return !0
    }, [C, P, n, p]);
    return C ? (0, i.jsxs)(s.Modal, {
        transitionState: u,
        onClose: l,
        size: "md",
        title: _.intl.string(_.t.OSqLUF),
        actions: [{
            variant: "primary",
            text: _.intl.string(_.t.i4jeWR),
            onClick: l
        }],
        children: [(0, i.jsx)(a.Text, {
            variant: "text-md/normal",
            children: _.intl.string(_.t["2scvdw"])
        }), (0, i.jsx)(a.Text, {
            variant: "text-md/normal",
            children: _.intl.string(_.t.chZxOD)
        })]
    }) : (0, i.jsx)(s.Modal, {
        transitionState: u,
        onClose: x,
        title: _.intl.string(_.t.OSqLUF),
        size: "md",
        actions: [{
            variant: "primary",
            text: _.intl.string(_.t.PDTjLN),
            onClick: U,
            disabled: !M
        }],
        children: (0, i.jsx)("div", {
            style: {
                width: "100%"
            },
            children: 0 === P.length ? null : (0, i.jsx)("div", {
                className: T.Qs,
                children: P.map(t => {
                    let e = n.Questions[t];
                    return null == e ? null : (0, i.jsx)(E.A, {
                        question: e,
                        questionId: t,
                        responses: p,
                        onResponseChange: y
                    }, t)
                })
            })
        })
    })
}
async function I(t) {
    null != await o.Ay.fetchSurveyDetails(t) && (c.i.getState().clearSurveyResponses(t), (0, a.mMO)(async () => {
        let {
            default: e
        } = await Promise.resolve().then(n.bind(n, 814249));
        return n => (0, i.jsx)(e, {
            ...n,
            surveyId: t
        })
    }, {
        onCloseRequest: () => {}
    }))
}

function N(t) {
    let {
        surveyId: e,
        onClose: n,
        transitionState: r
    } = t, s = (0, l.bG)([u.A], () => u.A.getSurvey(e));
    return null == s ? (0, i.jsx)(a.Text, {
        variant: "text-md/medium",
        className: T.Lq,
        children: _.intl.string(_.t.MKDeyL)
    }) : (0, i.jsx)(A, {
        surveyId: e,
        survey: s,
        onClose: n,
        transitionState: r
    })
}