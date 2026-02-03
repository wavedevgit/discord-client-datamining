package com.google.android.exoplayer2.decoder;

import com.google.android.exoplayer2.Format;
import ne.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderReuseEvaluation {

    /* renamed from: a  reason: collision with root package name */
    public final String f13126a;

    /* renamed from: b  reason: collision with root package name */
    public final Format f13127b;

    /* renamed from: c  reason: collision with root package name */
    public final Format f13128c;

    /* renamed from: d  reason: collision with root package name */
    public final int f13129d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13130e;

    public DecoderReuseEvaluation(String str, Format format, Format format2, int i10, int i11) {
        boolean z10;
        if (i10 != 0 && i11 != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        a.a(z10);
        this.f13126a = a.d(str);
        this.f13127b = (Format) a.e(format);
        this.f13128c = (Format) a.e(format2);
        this.f13129d = i10;
        this.f13130e = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && DecoderReuseEvaluation.class == obj.getClass()) {
            DecoderReuseEvaluation decoderReuseEvaluation = (DecoderReuseEvaluation) obj;
            if (this.f13129d == decoderReuseEvaluation.f13129d && this.f13130e == decoderReuseEvaluation.f13130e && this.f13126a.equals(decoderReuseEvaluation.f13126a) && this.f13127b.equals(decoderReuseEvaluation.f13127b) && this.f13128c.equals(decoderReuseEvaluation.f13128c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f13129d) * 31) + this.f13130e) * 31) + this.f13126a.hashCode()) * 31) + this.f13127b.hashCode()) * 31) + this.f13128c.hashCode();
    }
}
