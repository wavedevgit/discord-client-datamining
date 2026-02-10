package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.x1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x1 extends u1 {

    /* renamed from: p  reason: collision with root package name */
    private static final String f14210p = oe.w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    private static final String f14211q = oe.w0.B0(2);

    /* renamed from: r  reason: collision with root package name */
    public static final g.a f14212r = new g.a() { // from class: mc.u0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            x1 d10;
            d10 = x1.d(bundle);
            return d10;
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private final int f14213i;

    /* renamed from: o  reason: collision with root package name */
    private final float f14214o;

    public x1(int i10) {
        oe.a.b(i10 > 0, "maxStars must be a positive integer");
        this.f14213i = i10;
        this.f14214o = -1.0f;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static x1 d(Bundle bundle) {
        boolean z10;
        if (bundle.getInt(u1.f13827d, -1) == 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        int i10 = bundle.getInt(f14210p, 5);
        float f10 = bundle.getFloat(f14211q, -1.0f);
        if (f10 == -1.0f) {
            return new x1(i10);
        }
        return new x1(i10, f10);
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof x1)) {
            return false;
        }
        x1 x1Var = (x1) obj;
        if (this.f14213i != x1Var.f14213i || this.f14214o != x1Var.f14214o) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return pi.j.b(Integer.valueOf(this.f14213i), Float.valueOf(this.f14214o));
    }

    public x1(int i10, float f10) {
        boolean z10 = false;
        oe.a.b(i10 > 0, "maxStars must be a positive integer");
        if (f10 >= 0.0f && f10 <= i10) {
            z10 = true;
        }
        oe.a.b(z10, "starRating is out of range [0, maxStars]");
        this.f14213i = i10;
        this.f14214o = f10;
    }
}
