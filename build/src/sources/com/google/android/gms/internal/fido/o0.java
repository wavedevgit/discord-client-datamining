package com.google.android.gms.internal.fido;

import java.io.Serializable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 implements Serializable, n0 {

    /* renamed from: d  reason: collision with root package name */
    private final transient t0 f14171d = new t0();

    /* renamed from: e  reason: collision with root package name */
    final n0 f14172e;

    /* renamed from: i  reason: collision with root package name */
    volatile transient boolean f14173i;

    /* renamed from: o  reason: collision with root package name */
    transient Object f14174o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(n0 n0Var) {
        this.f14172e = n0Var;
    }

    public final String toString() {
        Object obj;
        if (this.f14173i) {
            obj = "<supplier that returned " + String.valueOf(this.f14174o) + ">";
        } else {
            obj = this.f14172e;
        }
        return "Suppliers.memoize(" + obj.toString() + ")";
    }

    @Override // com.google.android.gms.internal.fido.n0
    public final Object zza() {
        if (!this.f14173i) {
            synchronized (this.f14171d) {
                try {
                    if (!this.f14173i) {
                        Object zza = this.f14172e.zza();
                        this.f14174o = zza;
                        this.f14173i = true;
                        return zza;
                    }
                } finally {
                }
            }
        }
        return this.f14174o;
    }
}
