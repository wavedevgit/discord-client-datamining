package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u0 extends u1 {

    /* renamed from: p  reason: collision with root package name */
    private static final String f13822p = oe.w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    private static final String f13823q = oe.w0.B0(2);

    /* renamed from: r  reason: collision with root package name */
    public static final g.a f13824r = new g.a() { // from class: mc.y
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            com.google.android.exoplayer2.u0 d10;
            d10 = com.google.android.exoplayer2.u0.d(bundle);
            return d10;
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private final boolean f13825i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f13826o;

    public u0() {
        this.f13825i = false;
        this.f13826o = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static u0 d(Bundle bundle) {
        boolean z10;
        if (bundle.getInt(u1.f13827d, -1) == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        if (bundle.getBoolean(f13822p, false)) {
            return new u0(bundle.getBoolean(f13823q, false));
        }
        return new u0();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof u0)) {
            return false;
        }
        u0 u0Var = (u0) obj;
        if (this.f13826o != u0Var.f13826o || this.f13825i != u0Var.f13825i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return pi.j.b(Boolean.valueOf(this.f13825i), Boolean.valueOf(this.f13826o));
    }

    public u0(boolean z10) {
        this.f13825i = true;
        this.f13826o = z10;
    }
}
