package com.google.android.gms.internal.fido;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e5 extends l5 {

    /* renamed from: d  reason: collision with root package name */
    private final v4 f14674d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e5(v4 v4Var) {
        this.f14674d = v4Var;
    }

    @Override // java.lang.Comparable
    public final /* bridge */ /* synthetic */ int compareTo(Object obj) {
        l5 l5Var = (l5) obj;
        if (l5.e((byte) 64) != l5Var.zza()) {
            return l5.e((byte) 64) - l5Var.zza();
        }
        e5 e5Var = (e5) l5Var;
        v4 v4Var = this.f14674d;
        int d10 = v4Var.d();
        v4 v4Var2 = e5Var.f14674d;
        if (d10 != v4Var2.d()) {
            return v4Var.d() - v4Var2.d();
        }
        return b3.a().compare(v4Var.p(), e5Var.f14674d.p());
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || e5.class != obj.getClass()) {
            return false;
        }
        return this.f14674d.equals(((e5) obj).f14674d);
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(l5.e((byte) 64)), this.f14674d});
    }

    public final v4 n() {
        return this.f14674d;
    }

    public final String toString() {
        u2 c10 = u2.d().c();
        byte[] p10 = this.f14674d.p();
        String e10 = c10.e(p10, 0, p10.length);
        return "h'" + e10 + "'";
    }

    @Override // com.google.android.gms.internal.fido.l5
    protected final int zza() {
        return l5.e((byte) 64);
    }
}
