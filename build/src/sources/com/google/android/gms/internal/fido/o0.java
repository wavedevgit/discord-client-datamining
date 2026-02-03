package com.google.android.gms.internal.fido;

import java.io.Serializable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 implements Serializable, n0 {

    /* renamed from: d  reason: collision with root package name */
    private final transient t0 f13674d = new t0();

    /* renamed from: e  reason: collision with root package name */
    final n0 f13675e;

    /* renamed from: i  reason: collision with root package name */
    volatile transient boolean f13676i;

    /* renamed from: o  reason: collision with root package name */
    transient Object f13677o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(n0 n0Var) {
        this.f13675e = n0Var;
    }

    public final String toString() {
        Object obj;
        if (this.f13676i) {
            obj = "<supplier that returned " + String.valueOf(this.f13677o) + ">";
        } else {
            obj = this.f13675e;
        }
        return "Suppliers.memoize(" + obj.toString() + ")";
    }

    @Override // com.google.android.gms.internal.fido.n0
    public final Object zza() {
        if (!this.f13676i) {
            synchronized (this.f13674d) {
                try {
                    if (!this.f13676i) {
                        Object zza = this.f13675e.zza();
                        this.f13677o = zza;
                        this.f13676i = true;
                        return zza;
                    }
                } finally {
                }
            }
        }
        return this.f13677o;
    }
}
