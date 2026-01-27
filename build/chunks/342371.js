/** Chunk was on web.js **/
/** chunk id: 342371, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    o: () => c
}), n(734808), n(896048), n(65821);
var r = n(852015),
    i = n(144367),
    a = n(428420),
    o = n(324281),
    s = n(414525);
class l extends o.G {
    create(e) {
        let t = {
            boxAnimationUrl: "",
            trinketAnimationUrl: "",
            trinketGlowAnimationUrl: ""
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
                    a.boxAnimationUrl = e.string();
                    break;
                case 2:
                    a.trinketAnimationUrl = e.string();
                    break;
                case 3:
                    a.trinketGlowAnimationUrl = e.string();
                    break;
                case 4:
                    a.gradient = s.H.internalBinaryRead(e, e.uint32(), n, a.gradient);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let l = e.skip(i);
                    !1 !== o && (!0 === o ? r.f$.onRead : o)(this.typeName, a, t, i, l)
            }
        }
        return a
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.boxAnimationUrl && t.tag(1, r.O0.LengthDelimited).string(e.boxAnimationUrl), "" !== e.trinketAnimationUrl && t.tag(2, r.O0.LengthDelimited).string(e.trinketAnimationUrl), "" !== e.trinketGlowAnimationUrl && t.tag(3, r.O0.LengthDelimited).string(e.trinketGlowAnimationUrl), e.gradient && s.H.internalBinaryWrite(e.gradient, t.tag(4, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t
    }
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftIcon", [{
            no: 1,
            name: "box_animation_url",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "trinket_animation_url",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "trinket_glow_animation_url",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "gradient",
            kind: "message",
            T: () => s.H
        }])
    }
}
let c = new l