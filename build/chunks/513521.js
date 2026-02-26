/** chunk id: 513521, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(650583),
    a = n(985018);
let o = e => {
    let {
        tags: t,
        tagsLabel: n,
        value: o,
        onRemoveTag: d,
        onAddTag: c,
        onAddTagError: u,
        maxTaxLength: m,
        maxTags: g,
        disabled: x,
        placeholder: h,
        ..._
    } = e, [p, A] = s.useState(o ?? ""), f = s.useCallback(() => {
        let e = p.trim();
        if (0 !== e.length) {
            if (null != g && t.length >= g) return void u?.(a.intl.string(a.t.Xx7XeB));
            c(e), A("")
        }
    }, [p, g, c, u, t.length]), j = s.useCallback(e => {
        switch (e.key) {
            case r.dh.BACKSPACE:
                0 === p.length && t.length > 0 && (e.preventDefault(), e.stopPropagation(), d?.(new Set([t[t.length - 1].id])));
                break;
            case r.dh.ENTER:
            case r.dh.TAB:
            case r.dh.COMMA:
                e.preventDefault(), e.stopPropagation(), f()
        }
    }, [f, p.length, d, t]);
    return (0, i.jsx)(l.ksK, {
        leading: {
            type: "tags",
            label: n,
            items: t,
            onRemove: d
        },
        ..._,
        value: p,
        onKeyDown: j,
        onChange: A,
        maxLength: m,
        disabled: x,
        onBlur: f,
        placeholder: h
    })
}