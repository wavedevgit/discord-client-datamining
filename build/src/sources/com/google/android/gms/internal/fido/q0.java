package com.google.android.gms.internal.fido;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q0 implements n0 {

    /* renamed from: o  reason: collision with root package name */
    private static final n0 f15094o = new n0() { // from class: com.google.android.gms.internal.fido.p0
        @Override // com.google.android.gms.internal.fido.n0
        public final Object zza() {
            throw new IllegalStateException();
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final t0 f15095d = new t0();

    /* renamed from: e  reason: collision with root package name */
    private volatile n0 f15096e;

    /* renamed from: i  reason: collision with root package name */
    private Object f15097i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q0(n0 n0Var) {
        this.f15096e = n0Var;
    }

    public final String toString() {
        Object obj = this.f15096e;
        if (obj == f15094o) {
            obj = "<supplier that returned " + String.valueOf(this.f15097i) + ">";
        }
        return "Suppliers.memoize(" + String.valueOf(obj) + ")";
    }

    @Override // com.google.android.gms.internal.fido.n0
    public final Object zza() {
        n0 n0Var = this.f15096e;
        n0 n0Var2 = f15094o;
        if (n0Var != n0Var2) {
            synchronized (this.f15095d) {
                try {
                    if (this.f15096e != n0Var2) {
                        Object zza = this.f15096e.zza();
                        this.f15097i = zza;
                        this.f15096e = n0Var2;
                        return zza;
                    }
                } finally {
                }
            }
        }
        return this.f15097i;
    }
}
