/** chunk id: 965601 params = (module,exports,require) **/
"use strict";
n.d(t, {
    C: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(562465),
    a = n(990078),
    r = n(397927),
    o = n(147087),
    c = n(320501),
    d = n(652215),
    u = n(985018);
async function h(e) {
    try {
        let t = await l.Bo.post({
            url: d.Rsh.AI_TITLE,
            body: {
                content: e
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return t.ok ? t.body?.title ?? null : null
    } catch (e) {
        return null
    }
}

function A(e) {
    let {
        parentChannel: t,
        parentMessageId: n,
        updateThreadSettings: l,
        threadSettings: d,
        textAreaState: A
    } = e, [m, p] = s.useState(!1), [_, g] = s.useState(!1), f = (0, o.b)(), x = s.useCallback(async () => {
        if (f) {
            p(!0);
            try {
                let e = null;
                if (null != n) {
                    let i = c.A.getMessage(t.id, n);
                    e = i?.content ?? null
                } else A.textValue.trim().length >= 10 && (e = A.textValue);
                if (null != e) {
                    let t = await h(e);
                    null != t && "" !== t.trim() && l({
                        name: t
                    })
                }
            } finally {
                p(!1)
            }
        }
    }, [t.id, n, l, f, A.textValue]);
    s.useEffect(() => {
        g(!1), p(!1), t.id === d.parentChannelId && n !== d.parentMessageId && l({
            name: ""
        })
    }, [n, l, t.id, d.parentChannelId, d.parentMessageId]), s.useEffect(() => {
        null != d.name && "" !== d.name.trim() || _ || f && null != n && (g(!0), x())
    }, [t.id, n, l, d.name, _, f, x]);
    let C = s.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (f) return {
                icon: r.Dud,
                onClick: x,
                "aria-label": u.intl.string(u.t.ZF2oBs),
                disabled: e || m || null == n && A.textValue.trim().length < 10,
                tooltip: u.intl.string(u.t.ZF2oBs),
                loading: m
            }
        }, [f, x, m, n, A.textValue]),
        E = s.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return f ? (0, i.jsx)(a.m, {
                text: u.intl.string(u.t.ZF2oBs),
                children: (0, i.jsx)(r.K0, {
                    icon: r.Dud,
                    variant: "secondary",
                    size: "sm",
                    "aria-label": u.intl.string(u.t.ZF2oBs),
                    onClick: x,
                    disabled: e || m || null == n && A.textValue.trim().length < 10,
                    loading: m,
                    type: "button"
                })
            }) : null
        }, [f, m, n, A.textValue, x]);
    return {
        isGeneratingAI: m,
        generateAIName: x,
        enableAIFeatures: f,
        renderAiGenerateButton: E,
        getThreadNameInputAccessory: C
    }
}