package com.google.android.gms.internal.fido;

import java.io.Serializable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 implements Serializable, n0 {

    /* renamed from: d  reason: collision with root package name */
    private final transient t0 f14706d = new t0();

    /* renamed from: e  reason: collision with root package name */
    final n0 f14707e;

    /* renamed from: i  reason: collision with root package name */
    volatile transient boolean f14708i;

    /* renamed from: o  reason: collision with root package name */
    transient Object f14709o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(n0 n0Var) {
        this.f14707e = n0Var;
    }

    public final String toString() {
        Object obj;
        if (this.f14708i) {
            obj = "<supplier that returned " + String.valueOf(this.f14709o) + ">";
        } else {
            obj = this.f14707e;
        }
        return "Suppliers.memoize(" + obj.toString() + ")";
    }

    @Override // com.google.android.gms.internal.fido.n0
    public final Object zza() {
        if (!this.f14708i) {
            synchronized (this.f14706d) {
                try {
                    if (!this.f14708i) {
                        Object zza = this.f14707e.zza();
                        this.f14709o = zza;
                        this.f14708i = true;
                        return zza;
                    }
                } finally {
                }
            }
        }
        return this.f14709o;
    }
}
