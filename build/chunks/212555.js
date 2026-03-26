/** chunk id: 212555 params = (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(321073);
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(597864),
    r = n(880652),
    s = n(118468);

function o(e) {
    let {
        question: t,
        questionId: n,
        value: r,
        onValueChange: o
    } = e, {
        selectedChoice: c,
        textInputs: d
    } = (e => {
        if (null == e || "" === e) return {
            selectedChoice: null,
            textInputs: {}
        };
        let t = e.split(":TEXT:", 2),
            n = t[0],
            i = {};
        return t.length > 1 && (i[n] = t[1]), {
            selectedChoice: n,
            textInputs: i
        }
    })(r), u = e => {
        let i = d[e];
        null == i || "" === i ? o(n, e) : null != t.Choices && t.Choices[e]?.TextEntry === "true" ? o(n, `${e}:TEXT:${i}`) : o(n, e)
    }, _ = (e, t) => {
        o(n, null != t && "" !== t ? `${e}:TEXT:${t}` : e)
    };
    return null == t.Choices ? (0, i.jsx)("div", {
        className: s.kL,
        children: (0, i.jsx)(a.Text, {
            variant: "text-sm/medium",
            className: s.WN,
            children: "No choices available for this question"
        })
    }) : (0, i.jsx)("div", {
        className: s.kL,
        children: (0, i.jsx)("div", {
            className: s.Me,
            children: Object.entries(t.Choices).map(e => {
                let [t, n] = e;
                return (0, i.jsx)(l.B, {
                    choiceId: t,
                    choice: n,
                    isSelected: c === t,
                    onSelectionChange: u,
                    inputType: "radio",
                    textInputValue: d[t],
                    onTextInputChange: _
                }, t)
            })
        })
    })
}

function c(e) {
    let {
        question: t,
        questionId: n,
        value: r,
        onValueChange: o
    } = e, {
        selectedChoices: c,
        textInputs: d
    } = (e => {
        if (null == e || "" === e) return {
            selectedChoices: [],
            textInputs: {}
        };
        let t = e.split(","),
            n = [],
            i = {};
        return t.forEach(e => {
            let t = e.split(":TEXT:", 2),
                a = t[0];
            n.push(a), t.length > 1 && (i[a] = t[1])
        }), {
            selectedChoices: n,
            textInputs: i
        }
    })(r), u = (e, t) => e.map(e => {
        let n = t[e];
        return null != n && "" !== n ? `${e}:TEXT:${n}` : e
    }).join(","), _ = e => {
        let t = c.includes(e) ? c.filter(t => t !== e) : [...c, e],
            i = {
                ...d
            };
        t.includes(e) || delete i[e], o(n, u(t, i))
    }, m = (e, t) => {
        o(n, u(c, {
            ...d,
            [e]: t
        }))
    };
    return null == t.Choices || 0 === Object.keys(t.Choices).length ? (0, i.jsx)("div", {
        className: s.kL,
        children: (0, i.jsx)(a.Text, {
            variant: "text-sm/medium",
            className: s.WN,
            children: "No choices available for this question"
        })
    }) : (0, i.jsx)("div", {
        className: s.kL,
        children: (0, i.jsx)("div", {
            className: s.Me,
            children: Object.entries(t.Choices).map(e => {
                let [t, n] = e;
                return (0, i.jsx)(l.B, {
                    choiceId: t,
                    choice: n,
                    isSelected: c.includes(t),
                    onSelectionChange: _,
                    inputType: "checkbox",
                    textInputValue: d[t],
                    onTextInputChange: m
                }, t)
            })
        })
    })
}

function d(e) {
    let {
        question: t,
        questionId: n,
        value: a,
        onValueChange: l
    } = e;
    return t.Selector === r.BO.SINGLE_ANSWER ? (0, i.jsx)(o, {
        question: t,
        questionId: n,
        value: a,
        onValueChange: l
    }) : (0, i.jsx)(c, {
        question: t,
        questionId: n,
        value: a,
        onValueChange: l
    })
}