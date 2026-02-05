package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.a2;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a2 extends u1 {

    /* renamed from: p  reason: collision with root package name */
    private static final String f12020p = ne.w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    private static final String f12021q = ne.w0.B0(2);

    /* renamed from: r  reason: collision with root package name */
    public static final g.a f12022r = new g.a() { // from class: lc.v0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            a2 d10;
            d10 = a2.d(bundle);
            return d10;
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private final boolean f12023i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f12024o;

    public a2() {
        this.f12023i = false;
        this.f12024o = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static a2 d(Bundle bundle) {
        boolean z10;
        if (bundle.getInt(u1.f13149d, -1) == 3) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        if (bundle.getBoolean(f12020p, false)) {
            return new a2(bundle.getBoolean(f12021q, false));
        }
        return new a2();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a2)) {
            return false;
        }
        a2 a2Var = (a2) obj;
        if (this.f12024o != a2Var.f12024o || this.f12023i != a2Var.f12023i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return li.j.b(Boolean.valueOf(this.f12023i), Boolean.valueOf(this.f12024o));
    }

    public a2(boolean z10) {
        this.f12023i = true;
        this.f12024o = z10;
    }
}
