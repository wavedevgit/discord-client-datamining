/** chunk id: 597864 params = (module,exports,require) **/
"use strict";
n.d(t, {
    B: () => s
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(793361);

function s(e) {
    let {
        choiceId: t,
        choice: n,
        isSelected: s,
        onSelectionChange: a,
        inputType: o,
        textInputValue: c,
        onTextInputChange: u
    } = e, d = "true" === n.TextEntry, _ = `choice-label-${t}`;
    return (0, i.jsxs)("div", {
        className: l.NV,
        children: [(0, i.jsxs)(r.DUT, {
            className: l.d,
            onClick: () => {
                a(t)
            },
            role: o,
            "aria-checked": s,
            "aria-labelledby": _,
            children: [(0, i.jsx)("div", {
                className: l.jl,
                children: "radio" === o ? (0, i.jsx)(r.TN6, {
                    disabled: !1,
                    checked: s
                }) : (0, i.jsx)(r.P7L, {
                    disabled: !1,
                    checked: s
                })
            }), (0, i.jsx)(r.Text, {
                id: _,
                variant: "text-md/normal",
                color: "text-subtle",
                children: (0, i.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: n.Display
                    }
                })
            })]
        }), d && (0, i.jsx)("div", {
            className: l.Vi,
            children: (0, i.jsx)(r.ksK, {
                value: c ?? "",
                onChange: e => {
                    s || a(t), u?.(t, e)
                },
                disabled: !s
            })
        })]
    })
}