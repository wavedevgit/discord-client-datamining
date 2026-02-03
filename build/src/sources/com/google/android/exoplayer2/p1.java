package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.p1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p1 extends u1 {

    /* renamed from: o  reason: collision with root package name */
    private static final String f12308o = ne.w0.B0(1);

    /* renamed from: p  reason: collision with root package name */
    public static final g.a f12309p = new g.a() { // from class: lc.m0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            p1 d10;
            d10 = p1.d(bundle);
            return d10;
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private final float f12310i;

    public p1() {
        this.f12310i = -1.0f;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static p1 d(Bundle bundle) {
        boolean z10 = true;
        if (bundle.getInt(u1.f12764d, -1) != 1) {
            z10 = false;
        }
        ne.a.a(z10);
        float f10 = bundle.getFloat(f12308o, -1.0f);
        if (f10 == -1.0f) {
            return new p1();
        }
        return new p1(f10);
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof p1) || this.f12310i != ((p1) obj).f12310i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return ii.j.b(Float.valueOf(this.f12310i));
    }

    public p1(float f10) {
        ne.a.b(f10 >= 0.0f && f10 <= 100.0f, "percent must be in the range of [0, 100]");
        this.f12310i = f10;
    }
}
