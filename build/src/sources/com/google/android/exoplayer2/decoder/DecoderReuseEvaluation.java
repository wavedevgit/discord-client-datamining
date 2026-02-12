package com.google.android.exoplayer2.decoder;

import com.google.android.exoplayer2.Format;
import oe.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderReuseEvaluation {

    /* renamed from: a  reason: collision with root package name */
    public final String f13096a;

    /* renamed from: b  reason: collision with root package name */
    public final Format f13097b;

    /* renamed from: c  reason: collision with root package name */
    public final Format f13098c;

    /* renamed from: d  reason: collision with root package name */
    public final int f13099d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13100e;

    public DecoderReuseEvaluation(String str, Format format, Format format2, int i10, int i11) {
        boolean z10;
        if (i10 != 0 && i11 != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        a.a(z10);
        this.f13096a = a.d(str);
        this.f13097b = (Format) a.e(format);
        this.f13098c = (Format) a.e(format2);
        this.f13099d = i10;
        this.f13100e = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && DecoderReuseEvaluation.class == obj.getClass()) {
            DecoderReuseEvaluation decoderReuseEvaluation = (DecoderReuseEvaluation) obj;
            if (this.f13099d == decoderReuseEvaluation.f13099d && this.f13100e == decoderReuseEvaluation.f13100e && this.f13096a.equals(decoderReuseEvaluation.f13096a) && this.f13097b.equals(decoderReuseEvaluation.f13097b) && this.f13098c.equals(decoderReuseEvaluation.f13098c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f13099d) * 31) + this.f13100e) * 31) + this.f13096a.hashCode()) * 31) + this.f13097b.hashCode()) * 31) + this.f13098c.hashCode();
    }
}
