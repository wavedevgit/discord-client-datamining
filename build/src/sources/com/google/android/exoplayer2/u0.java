package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u0 extends u1 {

    /* renamed from: p  reason: collision with root package name */
    private static final String f14162p = ne.w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    private static final String f14163q = ne.w0.B0(2);

    /* renamed from: r  reason: collision with root package name */
    public static final g.a f14164r = new g.a() { // from class: lc.y
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            com.google.android.exoplayer2.u0 d10;
            d10 = com.google.android.exoplayer2.u0.d(bundle);
            return d10;
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private final boolean f14165i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f14166o;

    public u0() {
        this.f14165i = false;
        this.f14166o = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static u0 d(Bundle bundle) {
        boolean z10;
        if (bundle.getInt(u1.f14167d, -1) == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        if (bundle.getBoolean(f14162p, false)) {
            return new u0(bundle.getBoolean(f14163q, false));
        }
        return new u0();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof u0)) {
            return false;
        }
        u0 u0Var = (u0) obj;
        if (this.f14166o != u0Var.f14166o || this.f14165i != u0Var.f14165i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return ii.j.b(Boolean.valueOf(this.f14165i), Boolean.valueOf(this.f14166o));
    }

    public u0(boolean z10) {
        this.f14165i = true;
        this.f14166o = z10;
    }
}
