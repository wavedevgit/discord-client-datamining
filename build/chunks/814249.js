/** chunk id: 814249 params = (module,exports,require) **/
n.d(t, {
    K: () => I,
    default: () => N
});
var i = n(627968),
    l = n(64700),
    r = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(236698),
    c = n(668131),
    u = n(797632),
    d = n(468035),
    _ = n(304937),
    E = n(985018),
    A = n(158677);

function T(e) {
    let {
        surveyId: t,
        survey: n,
        onClose: s,
        transitionState: u
    } = e, {
        getSurveyResponses: T,
        setResponse: I,
        trackDisplayedQuestions: N
    } = (0, c.i)(), p = T(t), h = (0, d.i)(n), [m, S] = l.useState(h.blockId), [C, R] = l.useState(h.pageIndex), [g, O] = l.useState(!1), y = (e, n) => {
        I(t, e, n)
    }, x = l.useCallback(() => (g ? s() : (0, a.qfG)(e => (0, i.jsx)(r.Modal, {
        title: E.intl.string(E.t.T9Sx3z),
        actions: [{
            variant: "secondary",
            text: E.intl.string(E.t.oEAioF),
            onClick: e.onClose
        }, {
            variant: "critical-primary",
            text: E.intl.string(E.t.p89ACt),
            onClick: () => {
                e.onClose(), s()
            }
        }],
        ...e,
        children: (0, i.jsx)(a.Text, {
            variant: "text-md/normal",
            children: E.intl.string(E.t.iCK6G0)
        })
    })), Promise.resolve()), [s, g]), P = l.useMemo(() => null == m ? [] : (0, d.uy)(n, {
        blockId: m,
        pageIndex: C,
        responses: p
    }), [n, m, C, p]), f = l.useCallback(() => {
        if (null == n || null == m) return;
        let e = (0, d.vt)(n, {
            blockId: m,
            pageIndex: C,
            responses: p
        });
        N(t, P), e.isComplete && o.Ay.submitSurveyResponse(t, p), S(e.blockId), R(e.pageIndex), O(e.isComplete)
    }, [n, m, C, p, t, P, N]);
    l.useEffect(() => {
        0 === P.length && f()
    }, [P, f]);
    let D = l.useMemo(() => {
        if (g) return !1;
        for (let e of P) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
                let t = p[e];
                if (null == t || "" === t.trim()) return !1
            }
        }
        return !0
    }, [g, P, n, p]);
    return g ? (0, i.jsxs)(r.Modal, {
        transitionState: u,
        onClose: s,
        size: "md",
        title: E.intl.string(E.t.OSqLUF),
        actions: [{
            variant: "primary",
            text: E.intl.string(E.t.i4jeWR),
            onClick: s
        }],
        children: [(0, i.jsx)(a.Text, {
            variant: "text-md/normal",
            children: E.intl.string(E.t["2scvdw"])
        }), (0, i.jsx)(a.Text, {
            variant: "text-md/normal",
            children: E.intl.string(E.t.chZxOD)
        })]
    }) : (0, i.jsx)(r.Modal, {
        transitionState: u,
        onClose: x,
        title: E.intl.string(E.t.OSqLUF),
        size: "md",
        actions: [{
            variant: "primary",
            text: E.intl.string(E.t.PDTjLN),
            onClick: f,
            disabled: !D
        }],
        children: (0, i.jsx)("div", {
            style: {
                width: "100%"
            },
            children: 0 === P.length ? null : (0, i.jsx)("div", {
                className: A.Qs,
                children: P.map(e => {
                    let t = n.Questions[e];
                    return null == t ? null : (0, i.jsx)(_.A, {
                        question: t,
                        questionId: e,
                        responses: p,
                        onResponseChange: y
                    }, e)
                })
            })
        })
    })
}
async function I(e) {
    null != await o.Ay.fetchSurveyDetails(e) && (c.i.getState().clearSurveyResponses(e), (0, a.mMO)(async () => {
        let {
            default: t
        } = await Promise.resolve().then(n.bind(n, 814249));
        return n => (0, i.jsx)(t, {
            ...n,
            surveyId: e
        })
    }, {
        onCloseRequest: () => {}
    }))
}

function N(e) {
    let {
        surveyId: t,
        onClose: n,
        transitionState: l
    } = e, r = (0, s.bG)([u.A], () => u.A.getSurvey(t));
    return null == r ? (0, i.jsx)(a.Text, {
        variant: "text-md/medium",
        className: A.Lq,
        children: E.intl.string(E.t.MKDeyL)
    }) : (0, i.jsx)(T, {
        surveyId: t,
        survey: r,
        onClose: n,
        transitionState: l
    })
}