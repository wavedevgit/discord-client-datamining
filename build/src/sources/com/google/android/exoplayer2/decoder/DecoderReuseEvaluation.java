package com.google.android.exoplayer2.decoder;

import com.google.android.exoplayer2.Format;
import oe.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderReuseEvaluation {

    /* renamed from: a  reason: collision with root package name */
    public final String f13095a;

    /* renamed from: b  reason: collision with root package name */
    public final Format f13096b;

    /* renamed from: c  reason: collision with root package name */
    public final Format f13097c;

    /* renamed from: d  reason: collision with root package name */
    public final int f13098d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13099e;

    public DecoderReuseEvaluation(String str, Format format, Format format2, int i10, int i11) {
        boolean z10;
        if (i10 != 0 && i11 != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        a.a(z10);
        this.f13095a = a.d(str);
        this.f13096b = (Format) a.e(format);
        this.f13097c = (Format) a.e(format2);
        this.f13098d = i10;
        this.f13099e = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && DecoderReuseEvaluation.class == obj.getClass()) {
            DecoderReuseEvaluation decoderReuseEvaluation = (DecoderReuseEvaluation) obj;
            if (this.f13098d == decoderReuseEvaluation.f13098d && this.f13099e == decoderReuseEvaluation.f13099e && this.f13095a.equals(decoderReuseEvaluation.f13095a) && this.f13096b.equals(decoderReuseEvaluation.f13096b) && this.f13097c.equals(decoderReuseEvaluation.f13097c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f13098d) * 31) + this.f13099e) * 31) + this.f13095a.hashCode()) * 31) + this.f13096b.hashCode()) * 31) + this.f13097c.hashCode();
    }
}
