package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.x1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x1 extends u1 {

    /* renamed from: p  reason: collision with root package name */
    private static final String f13532p = ne.w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    private static final String f13533q = ne.w0.B0(2);

    /* renamed from: r  reason: collision with root package name */
    public static final g.a f13534r = new g.a() { // from class: lc.u0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            x1 d10;
            d10 = x1.d(bundle);
            return d10;
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private final int f13535i;

    /* renamed from: o  reason: collision with root package name */
    private final float f13536o;

    public x1(int i10) {
        ne.a.b(i10 > 0, "maxStars must be a positive integer");
        this.f13535i = i10;
        this.f13536o = -1.0f;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static x1 d(Bundle bundle) {
        boolean z10;
        if (bundle.getInt(u1.f13149d, -1) == 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        int i10 = bundle.getInt(f13532p, 5);
        float f10 = bundle.getFloat(f13533q, -1.0f);
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
        if (this.f13535i != x1Var.f13535i || this.f13536o != x1Var.f13536o) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return li.j.b(Integer.valueOf(this.f13535i), Float.valueOf(this.f13536o));
    }

    public x1(int i10, float f10) {
        boolean z10 = false;
        ne.a.b(i10 > 0, "maxStars must be a positive integer");
        if (f10 >= 0.0f && f10 <= i10) {
            z10 = true;
        }
        ne.a.b(z10, "starRating is out of range [0, maxStars]");
        this.f13535i = i10;
        this.f13536o = f10;
    }
}
