package com.google.android.gms.internal.fido;

import java.io.Serializable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 implements Serializable, n0 {

    /* renamed from: d  reason: collision with root package name */
    private final transient t0 f14068d = new t0();

    /* renamed from: e  reason: collision with root package name */
    final n0 f14069e;

    /* renamed from: i  reason: collision with root package name */
    volatile transient boolean f14070i;

    /* renamed from: o  reason: collision with root package name */
    transient Object f14071o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(n0 n0Var) {
        this.f14069e = n0Var;
    }

    public final String toString() {
        Object obj;
        if (this.f14070i) {
            obj = "<supplier that returned " + String.valueOf(this.f14071o) + ">";
        } else {
            obj = this.f14069e;
        }
        return "Suppliers.memoize(" + obj.toString() + ")";
    }

    @Override // com.google.android.gms.internal.fido.n0
    public final Object zza() {
        if (!this.f14070i) {
            synchronized (this.f14068d) {
                try {
                    if (!this.f14070i) {
                        Object zza = this.f14069e.zza();
                        this.f14071o = zza;
                        this.f14070i = true;
                        return zza;
                    }
                } finally {
                }
            }
        }
        return this.f14071o;
    }
}
