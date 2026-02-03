package com.google.android.gms.internal.fido;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q0 implements n0 {

    /* renamed from: o  reason: collision with root package name */
    private static final n0 f13691o = new n0() { // from class: com.google.android.gms.internal.fido.p0
        @Override // com.google.android.gms.internal.fido.n0
        public final Object zza() {
            throw new IllegalStateException();
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final t0 f13692d = new t0();

    /* renamed from: e  reason: collision with root package name */
    private volatile n0 f13693e;

    /* renamed from: i  reason: collision with root package name */
    private Object f13694i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q0(n0 n0Var) {
        this.f13693e = n0Var;
    }

    public final String toString() {
        Object obj = this.f13693e;
        if (obj == f13691o) {
            obj = "<supplier that returned " + String.valueOf(this.f13694i) + ">";
        }
        return "Suppliers.memoize(" + String.valueOf(obj) + ")";
    }

    @Override // com.google.android.gms.internal.fido.n0
    public final Object zza() {
        n0 n0Var = this.f13693e;
        n0 n0Var2 = f13691o;
        if (n0Var != n0Var2) {
            synchronized (this.f13692d) {
                try {
                    if (this.f13693e != n0Var2) {
                        Object zza = this.f13693e.zza();
                        this.f13694i = zza;
                        this.f13693e = n0Var2;
                        return zza;
                    }
                } finally {
                }
            }
        }
        return this.f13694i;
    }
}
