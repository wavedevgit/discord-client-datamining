/** chunk id: 935206, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(896048);
var r = n(131346),
    i = n(522437);

function l(e, t, n, l) {
    let [{
        isDragging: s
    }, a, o] = (0, r.i)({
        type: t,
        item: () => ({
            index: n
        }),
        collect: e => ({
            isDragging: e.isDragging()
        })
    }), [, c] = (0, i.H)({
        accept: t,
        hover(t, r) {
            if (null == e.current) return;
            let i = t.index;
            if (i === n) return;
            let s = e.current.getBoundingClientRect(),
                a = (s.bottom - s.top) / 2,
                o = r.getClientOffset().y - s.top;
            i < n && o < a || i > n && o > a || (l(i, n), t.index = n)
        }
    });
    return {
        drag: a,
        dragPreview: o,
        drop: c,
        isDragging: s
    }
}