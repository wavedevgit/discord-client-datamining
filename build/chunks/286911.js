/** Chunk was on 46875 **/
/** chunk id: 286911, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(114821), n(339614), n(896048), n(321073), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956), n(228524);
var r = n(64700),
    l = n(417597),
    i = n(355622),
    a = n(522602),
    s = n(304162),
    o = n(835134);

function c(e, t) {
    var n, c;
    let {
        mediaAttachments: d,
        hasThumbnail: u
    } = function(e) {
        let [t, n] = r.useState(null), o = (0, l.yK)([a.A], () => {
            let t = a.A.getUploads(e.id, i.oU.CREATE_FORUM_POST.drafts.type),
                n = t.find(e => e.isThumbnail);
            return null != n ? [n] : t.filter(e => e.isVideo || e.isImage)
        }), c = r.useMemo(() => o.some(e => e.isThumbnail), [o]);
        return r.useEffect(() => {
            let e = [];
            return n(o.slice(0, s.A8).flatMap(t => {
                var n;
                let r = null == t || null == (n = t.item) ? void 0 : n.file;
                if (null == r) return [];
                let l = URL.createObjectURL(r);
                return e.push(l), {
                    id: t.id,
                    src: l,
                    spoiler: t.spoiler,
                    alt: t.description,
                    isThumbnail: t.isThumbnail,
                    upload: !0 === t.isThumbnail ? t : void 0,
                    isVideo: t.isVideo
                }
            })), () => {
                n(null), e.forEach(e => URL.revokeObjectURL(e))
            }
        }, [o]), {
            mediaAttachments: t,
            hasThumbnail: c
        }
    }(e), m = Math.max(s.A8 - (null != (n = null == d ? void 0 : d.length) ? n : 0), 0), {
        embeds: h
    } = (0, o.w)(u, m, t), g = r.useMemo(() => null == h ? void 0 : h.flatMap(e => {
        let t = (0, s.m3)(e);
        return null == t ? [] : {
            id: t,
            src: t,
            spoiler: !1,
            alt: e.title
        }
    }), [h]), f = [...null != d ? d : []];
    return !u && m > 0 && f.push(...null != (c = null == g ? void 0 : g.slice(0, m)) ? c : []), f
}