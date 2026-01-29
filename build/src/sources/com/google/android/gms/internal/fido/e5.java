package com.google.android.gms.internal.fido;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e5 extends l5 {

    /* renamed from: d  reason: collision with root package name */
    private final v4 f15003d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e5(v4 v4Var) {
        this.f15003d = v4Var;
    }

    @Override // java.lang.Comparable
    public final /* bridge */ /* synthetic */ int compareTo(Object obj) {
        l5 l5Var = (l5) obj;
        if (l5.e((byte) 64) != l5Var.zza()) {
            return l5.e((byte) 64) - l5Var.zza();
        }
        e5 e5Var = (e5) l5Var;
        v4 v4Var = this.f15003d;
        int d10 = v4Var.d();
        v4 v4Var2 = e5Var.f15003d;
        if (d10 != v4Var2.d()) {
            return v4Var.d() - v4Var2.d();
        }
        return b3.a().compare(v4Var.n(), e5Var.f15003d.n());
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || e5.class != obj.getClass()) {
            return false;
        }
        return this.f15003d.equals(((e5) obj).f15003d);
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(l5.e((byte) 64)), this.f15003d});
    }

    public final v4 o() {
        return this.f15003d;
    }

    public final String toString() {
        u2 c10 = u2.d().c();
        byte[] n10 = this.f15003d.n();
        String e10 = c10.e(n10, 0, n10.length);
        return "h'" + e10 + "'";
    }

    @Override // com.google.android.gms.internal.fido.l5
    protected final int zza() {
        return l5.e((byte) 64);
    }
}
