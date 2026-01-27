/** Chunk was on web.js **/
/** chunk id: 108094, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    x: () => l
}), n(734808), n(896048), n(65821);
var r = n(852015),
    i = n(144367),
    a = n(428420),
    o = n(324281);
class s extends o.G {
    create(e) {
        let t = {
            badgeLabel: "",
            acknowledgedBadgeLabel: ""
        };
        return globalThis.Object.defineProperty(t, a.$, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, i.x)(this, t, e), t
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.badgeLabel = e.string();
                    break;
                case 2:
                    a.acknowledgedBadgeLabel = e.string();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.f$.onRead : o)(this.typeName, a, t, i, s)
            }
        }
        return a
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.badgeLabel && t.tag(1, r.O0.LengthDelimited).string(e.badgeLabel), "" !== e.acknowledgedBadgeLabel && t.tag(2, r.O0.LengthDelimited).string(e.acknowledgedBadgeLabel);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t
    }
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTab", [{
            no: 1,
            name: "badge_label",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "acknowledged_badge_label",
            kind: "scalar",
            T: 9
        }])
    }
}
let l = new s