package com.google.android.exoplayer2.decoder;

import com.google.android.exoplayer2.Format;
import ne.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderReuseEvaluation {

    /* renamed from: a  reason: collision with root package name */
    public final String f12378a;

    /* renamed from: b  reason: collision with root package name */
    public final Format f12379b;

    /* renamed from: c  reason: collision with root package name */
    public final Format f12380c;

    /* renamed from: d  reason: collision with root package name */
    public final int f12381d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12382e;

    public DecoderReuseEvaluation(String str, Format format, Format format2, int i10, int i11) {
        boolean z10;
        if (i10 != 0 && i11 != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        a.a(z10);
        this.f12378a = a.d(str);
        this.f12379b = (Format) a.e(format);
        this.f12380c = (Format) a.e(format2);
        this.f12381d = i10;
        this.f12382e = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && DecoderReuseEvaluation.class == obj.getClass()) {
            DecoderReuseEvaluation decoderReuseEvaluation = (DecoderReuseEvaluation) obj;
            if (this.f12381d == decoderReuseEvaluation.f12381d && this.f12382e == decoderReuseEvaluation.f12382e && this.f12378a.equals(decoderReuseEvaluation.f12378a) && this.f12379b.equals(decoderReuseEvaluation.f12379b) && this.f12380c.equals(decoderReuseEvaluation.f12380c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f12381d) * 31) + this.f12382e) * 31) + this.f12378a.hashCode()) * 31) + this.f12379b.hashCode()) * 31) + this.f12380c.hashCode();
    }
}
