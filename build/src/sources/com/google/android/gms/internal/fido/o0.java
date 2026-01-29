package com.google.android.gms.internal.fido;

import java.io.Serializable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 implements Serializable, n0 {

    /* renamed from: d  reason: collision with root package name */
    private final transient t0 f15077d = new t0();

    /* renamed from: e  reason: collision with root package name */
    final n0 f15078e;

    /* renamed from: i  reason: collision with root package name */
    volatile transient boolean f15079i;

    /* renamed from: o  reason: collision with root package name */
    transient Object f15080o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(n0 n0Var) {
        this.f15078e = n0Var;
    }

    public final String toString() {
        Object obj;
        if (this.f15079i) {
            obj = "<supplier that returned " + String.valueOf(this.f15080o) + ">";
        } else {
            obj = this.f15078e;
        }
        return "Suppliers.memoize(" + obj.toString() + ")";
    }

    @Override // com.google.android.gms.internal.fido.n0
    public final Object zza() {
        if (!this.f15079i) {
            synchronized (this.f15077d) {
                try {
                    if (!this.f15079i) {
                        Object zza = this.f15078e.zza();
                        this.f15080o = zza;
                        this.f15079i = true;
                        return zza;
                    }
                } finally {
                }
            }
        }
        return this.f15080o;
    }
}
