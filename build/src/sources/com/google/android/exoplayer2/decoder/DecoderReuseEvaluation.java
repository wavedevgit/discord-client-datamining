package com.google.android.exoplayer2.decoder;

import com.google.android.exoplayer2.Format;
import oe.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderReuseEvaluation {

    /* renamed from: a  reason: collision with root package name */
    public final String f12518a;

    /* renamed from: b  reason: collision with root package name */
    public final Format f12519b;

    /* renamed from: c  reason: collision with root package name */
    public final Format f12520c;

    /* renamed from: d  reason: collision with root package name */
    public final int f12521d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12522e;

    public DecoderReuseEvaluation(String str, Format format, Format format2, int i10, int i11) {
        boolean z10;
        if (i10 != 0 && i11 != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        a.a(z10);
        this.f12518a = a.d(str);
        this.f12519b = (Format) a.e(format);
        this.f12520c = (Format) a.e(format2);
        this.f12521d = i10;
        this.f12522e = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && DecoderReuseEvaluation.class == obj.getClass()) {
            DecoderReuseEvaluation decoderReuseEvaluation = (DecoderReuseEvaluation) obj;
            if (this.f12521d == decoderReuseEvaluation.f12521d && this.f12522e == decoderReuseEvaluation.f12522e && this.f12518a.equals(decoderReuseEvaluation.f12518a) && this.f12519b.equals(decoderReuseEvaluation.f12519b) && this.f12520c.equals(decoderReuseEvaluation.f12520c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f12521d) * 31) + this.f12522e) * 31) + this.f12518a.hashCode()) * 31) + this.f12519b.hashCode()) * 31) + this.f12520c.hashCode();
    }
}
