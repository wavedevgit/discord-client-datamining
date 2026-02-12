package com.google.android.gms.internal.fido;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g5 extends l5 {

    /* renamed from: d  reason: collision with root package name */
    private final long f14690d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g5(long j10) {
        this.f14690d = j10;
    }

    @Override // java.lang.Comparable
    public final /* bridge */ /* synthetic */ int compareTo(Object obj) {
        l5 l5Var = (l5) obj;
        if (zza() != l5Var.zza()) {
            return zza() - l5Var.zza();
        }
        return Long.compare(Math.abs(this.f14690d), Math.abs(((g5) l5Var).f14690d));
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g5.class == obj.getClass() && this.f14690d == ((g5) obj).f14690d) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(zza()), Long.valueOf(this.f14690d)});
    }

    public final long n() {
        return this.f14690d;
    }

    public final String toString() {
        return Long.toString(this.f14690d);
    }

    @Override // com.google.android.gms.internal.fido.l5
    protected final int zza() {
        return l5.e(this.f14690d >= 0 ? (byte) 0 : (byte) 32);
    }
}
