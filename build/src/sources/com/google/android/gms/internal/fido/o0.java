package com.google.android.gms.internal.fido;

import java.io.Serializable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 implements Serializable, n0 {

    /* renamed from: d  reason: collision with root package name */
    private final transient t0 f14031d = new t0();

    /* renamed from: e  reason: collision with root package name */
    final n0 f14032e;

    /* renamed from: i  reason: collision with root package name */
    volatile transient boolean f14033i;

    /* renamed from: o  reason: collision with root package name */
    transient Object f14034o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(n0 n0Var) {
        this.f14032e = n0Var;
    }

    public final String toString() {
        Object obj;
        if (this.f14033i) {
            obj = "<supplier that returned " + String.valueOf(this.f14034o) + ">";
        } else {
            obj = this.f14032e;
        }
        return "Suppliers.memoize(" + obj.toString() + ")";
    }

    @Override // com.google.android.gms.internal.fido.n0
    public final Object zza() {
        if (!this.f14033i) {
            synchronized (this.f14031d) {
                try {
                    if (!this.f14033i) {
                        Object zza = this.f14032e.zza();
                        this.f14034o = zza;
                        this.f14033i = true;
                        return zza;
                    }
                } finally {
                }
            }
        }
        return this.f14034o;
    }
}
