package com.google.android.exoplayer2.decoder;

import com.google.android.exoplayer2.Format;
import ne.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderReuseEvaluation {

    /* renamed from: a  reason: collision with root package name */
    public final String f13497a;

    /* renamed from: b  reason: collision with root package name */
    public final Format f13498b;

    /* renamed from: c  reason: collision with root package name */
    public final Format f13499c;

    /* renamed from: d  reason: collision with root package name */
    public final int f13500d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13501e;

    public DecoderReuseEvaluation(String str, Format format, Format format2, int i10, int i11) {
        boolean z10;
        if (i10 != 0 && i11 != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        a.a(z10);
        this.f13497a = a.d(str);
        this.f13498b = (Format) a.e(format);
        this.f13499c = (Format) a.e(format2);
        this.f13500d = i10;
        this.f13501e = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && DecoderReuseEvaluation.class == obj.getClass()) {
            DecoderReuseEvaluation decoderReuseEvaluation = (DecoderReuseEvaluation) obj;
            if (this.f13500d == decoderReuseEvaluation.f13500d && this.f13501e == decoderReuseEvaluation.f13501e && this.f13497a.equals(decoderReuseEvaluation.f13497a) && this.f13498b.equals(decoderReuseEvaluation.f13498b) && this.f13499c.equals(decoderReuseEvaluation.f13499c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f13500d) * 31) + this.f13501e) * 31) + this.f13497a.hashCode()) * 31) + this.f13498b.hashCode()) * 31) + this.f13499c.hashCode();
    }
}
