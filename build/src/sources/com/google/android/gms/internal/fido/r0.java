package com.google.android.gms.internal.fido;

import java.io.Serializable;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r0 implements Serializable, n0 {

    /* renamed from: d  reason: collision with root package name */
    final Object f14102d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(Object obj) {
        this.f14102d = obj;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof r0) {
            return i0.a(this.f14102d, ((r0) obj).f14102d);
        }
        return false;
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{this.f14102d});
    }

    public final String toString() {
        String obj = this.f14102d.toString();
        return "Suppliers.ofInstance(" + obj + ")";
    }

    @Override // com.google.android.gms.internal.fido.n0
    public final Object zza() {
        return this.f14102d;
    }
}
