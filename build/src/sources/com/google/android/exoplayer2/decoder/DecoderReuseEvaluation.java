package com.google.android.exoplayer2.decoder;

import com.google.android.exoplayer2.Format;
import ne.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderReuseEvaluation {

    /* renamed from: a  reason: collision with root package name */
    public final String f12479a;

    /* renamed from: b  reason: collision with root package name */
    public final Format f12480b;

    /* renamed from: c  reason: collision with root package name */
    public final Format f12481c;

    /* renamed from: d  reason: collision with root package name */
    public final int f12482d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12483e;

    public DecoderReuseEvaluation(String str, Format format, Format format2, int i10, int i11) {
        boolean z10;
        if (i10 != 0 && i11 != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        a.a(z10);
        this.f12479a = a.d(str);
        this.f12480b = (Format) a.e(format);
        this.f12481c = (Format) a.e(format2);
        this.f12482d = i10;
        this.f12483e = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && DecoderReuseEvaluation.class == obj.getClass()) {
            DecoderReuseEvaluation decoderReuseEvaluation = (DecoderReuseEvaluation) obj;
            if (this.f12482d == decoderReuseEvaluation.f12482d && this.f12483e == decoderReuseEvaluation.f12483e && this.f12479a.equals(decoderReuseEvaluation.f12479a) && this.f12480b.equals(decoderReuseEvaluation.f12480b) && this.f12481c.equals(decoderReuseEvaluation.f12481c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f12482d) * 31) + this.f12483e) * 31) + this.f12479a.hashCode()) * 31) + this.f12480b.hashCode()) * 31) + this.f12481c.hashCode();
    }
}
