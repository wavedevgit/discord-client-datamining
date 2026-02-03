package com.google.android.gms.internal.fido;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d5 extends l5 {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f14620d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d5(boolean z10) {
        this.f14620d = z10;
    }

    @Override // java.lang.Comparable
    public final /* bridge */ /* synthetic */ int compareTo(Object obj) {
        int i10;
        l5 l5Var = (l5) obj;
        if (l5.e((byte) -32) != l5Var.zza()) {
            return l5.e((byte) -32) - l5Var.zza();
        }
        d5 d5Var = (d5) l5Var;
        int i11 = 21;
        if (true != this.f14620d) {
            i10 = 20;
        } else {
            i10 = 21;
        }
        if (true != d5Var.f14620d) {
            i11 = 20;
        }
        return i10 - i11;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && d5.class == obj.getClass() && this.f14620d == ((d5) obj).f14620d) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(l5.e((byte) -32)), Boolean.valueOf(this.f14620d)});
    }

    public final String toString() {
        return Boolean.toString(this.f14620d);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.gms.internal.fido.l5
    public final int zza() {
        return l5.e((byte) -32);
    }
}
