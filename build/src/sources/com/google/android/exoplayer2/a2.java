package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.a2;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a2 extends u1 {

    /* renamed from: p  reason: collision with root package name */
    private static final String f11919p = ne.w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    private static final String f11920q = ne.w0.B0(2);

    /* renamed from: r  reason: collision with root package name */
    public static final g.a f11921r = new g.a() { // from class: lc.v0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            a2 d10;
            d10 = a2.d(bundle);
            return d10;
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private final boolean f11922i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f11923o;

    public a2() {
        this.f11922i = false;
        this.f11923o = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static a2 d(Bundle bundle) {
        boolean z10;
        if (bundle.getInt(u1.f13110d, -1) == 3) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        if (bundle.getBoolean(f11919p, false)) {
            return new a2(bundle.getBoolean(f11920q, false));
        }
        return new a2();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a2)) {
            return false;
        }
        a2 a2Var = (a2) obj;
        if (this.f11923o != a2Var.f11923o || this.f11922i != a2Var.f11922i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return mi.j.b(Boolean.valueOf(this.f11922i), Boolean.valueOf(this.f11923o));
    }

    public a2(boolean z10) {
        this.f11922i = true;
        this.f11923o = z10;
    }
}
