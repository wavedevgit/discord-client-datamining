/** chunk id: 60317 params = (module,exports,require) **/
i.d(t, {
    YY: () => c,
    eT: () => u,
    fz: () => d
});
var n = i(735438),
    a = i(835245),
    l = i(776231),
    o = i(667050),
    r = i(998304),
    s = i(297494);
let c = 7.5,
    d = (0, n.memoize)((e, t, i, n) => new Promise(e => {
        let a = new Image;
        a.src = t, a.crossOrigin = "Anonymous", a.onload = () => {
            let t = 32 * (0, l.mZ)(),
                o = JSON.stringify(i);
            if (null != n && (o = (0, s.vc)(o, (0, r.E2)(n))), a.width === t && a.height === t || 0 === a.width && 0 === a.height) e(JSON.parse(o));
            else {
                let t = 128 / a.width * a.height;
                e(JSON.parse(o = (o = o.replace(/"w":128,"h":128/, `"w":128,"h":${t}`)).replace(/"a":{"a":0,"k":\[64,64/, `"a":{"a":0,"k":[64,${t/2}`)))
            }
        }
    }));

function u(e, t, i, n) {
    let {
        emojiSize: l,
        key: r,
        messageId: s
    } = n ?? {}, c = (0, o.Br)(e, null != l ? 2 * l : void 0);
    return {
        channelId: i,
        messageId: s,
        emoji: e,
        animationId: (0, a.A)(),
        url: c,
        key: r,
        color: t
    }
}