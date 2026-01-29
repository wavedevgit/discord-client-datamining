package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.a2;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a2 extends u1 {

    /* renamed from: p  reason: collision with root package name */
    private static final String f13038p = ne.w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    private static final String f13039q = ne.w0.B0(2);

    /* renamed from: r  reason: collision with root package name */
    public static final g.a f13040r = new g.a() { // from class: lc.v0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            a2 d10;
            d10 = a2.d(bundle);
            return d10;
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private final boolean f13041i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f13042o;

    public a2() {
        this.f13041i = false;
        this.f13042o = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static a2 d(Bundle bundle) {
        boolean z10;
        if (bundle.getInt(u1.f14167d, -1) == 3) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        if (bundle.getBoolean(f13038p, false)) {
            return new a2(bundle.getBoolean(f13039q, false));
        }
        return new a2();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a2)) {
            return false;
        }
        a2 a2Var = (a2) obj;
        if (this.f13042o != a2Var.f13042o || this.f13041i != a2Var.f13041i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return ii.j.b(Boolean.valueOf(this.f13041i), Boolean.valueOf(this.f13042o));
    }

    public a2(boolean z10) {
        this.f13041i = true;
        this.f13042o = z10;
    }
}
