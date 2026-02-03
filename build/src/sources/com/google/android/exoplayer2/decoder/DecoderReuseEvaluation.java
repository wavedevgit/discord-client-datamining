package com.google.android.exoplayer2.decoder;

import com.google.android.exoplayer2.Format;
import ne.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderReuseEvaluation {

    /* renamed from: a  reason: collision with root package name */
    public final String f12094a;

    /* renamed from: b  reason: collision with root package name */
    public final Format f12095b;

    /* renamed from: c  reason: collision with root package name */
    public final Format f12096c;

    /* renamed from: d  reason: collision with root package name */
    public final int f12097d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12098e;

    public DecoderReuseEvaluation(String str, Format format, Format format2, int i10, int i11) {
        boolean z10;
        if (i10 != 0 && i11 != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        a.a(z10);
        this.f12094a = a.d(str);
        this.f12095b = (Format) a.e(format);
        this.f12096c = (Format) a.e(format2);
        this.f12097d = i10;
        this.f12098e = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && DecoderReuseEvaluation.class == obj.getClass()) {
            DecoderReuseEvaluation decoderReuseEvaluation = (DecoderReuseEvaluation) obj;
            if (this.f12097d == decoderReuseEvaluation.f12097d && this.f12098e == decoderReuseEvaluation.f12098e && this.f12094a.equals(decoderReuseEvaluation.f12094a) && this.f12095b.equals(decoderReuseEvaluation.f12095b) && this.f12096c.equals(decoderReuseEvaluation.f12096c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f12097d) * 31) + this.f12098e) * 31) + this.f12094a.hashCode()) * 31) + this.f12095b.hashCode()) * 31) + this.f12096c.hashCode();
    }
}
