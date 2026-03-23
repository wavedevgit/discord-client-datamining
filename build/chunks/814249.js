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
    T = n(158677);

function A(e) {
    let {
        surveyId: t,
        survey: n,
        onClose: s,
        transitionState: u
    } = e, {
        getSurveyResponses: A,
        setResponse: I,
        trackDisplayedQuestions: N
    } = (0, c.i)(), p = A(t), m = (0, d.i)(n), [R, h] = l.useState(m.blockId), [S, g] = l.useState(m.pageIndex), [C, O] = l.useState(!1), y = (e, n) => {
        I(t, e, n)
    }, x = l.useCallback(() => (C ? s() : (0, a.qfG)(e => (0, i.jsx)(r.Modal, {
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
    })), Promise.resolve()), [s, C]), f = l.useMemo(() => null == R ? [] : (0, d.uy)(n, {
        blockId: R,
        pageIndex: S,
        responses: p
    }), [n, R, S, p]), P = l.useCallback(() => {
        if (null == n || null == R) return;
        let e = (0, d.vt)(n, {
            blockId: R,
            pageIndex: S,
            responses: p
        });
        N(t, f), e.isComplete && o.Ay.submitSurveyResponse(t, p), h(e.blockId), g(e.pageIndex), O(e.isComplete)
    }, [n, R, S, p, t, f, N]);
    l.useEffect(() => {
        0 === f.length && P()
    }, [f, P]);
    let D = l.useMemo(() => {
        if (C) return !1;
        for (let e of f) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
                let t = p[e];
                if (null == t || "" === t.trim()) return !1
            }
        }
        return !0
    }, [C, f, n, p]);
    return C ? (0, i.jsxs)(r.Modal, {
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
            onClick: P,
            disabled: !D
        }],
        children: (0, i.jsx)("div", {
            style: {
                width: "100%"
            },
            children: 0 === f.length ? null : (0, i.jsx)("div", {
                className: T.Qs,
                children: f.map(e => {
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
        className: T.Lq,
        children: E.intl.string(E.t.MKDeyL)
    }) : (0, i.jsx)(A, {
        surveyId: t,
        survey: r,
        onClose: n,
        transitionState: l
    })
}