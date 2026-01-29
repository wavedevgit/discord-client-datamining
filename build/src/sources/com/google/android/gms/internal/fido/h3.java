package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h3 extends c3 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ h3(p3 p3Var) {
        super(null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final g3 a(l3 l3Var, g3 g3Var) {
        g3 g3Var2;
        synchronized (l3Var) {
            try {
                g3Var2 = l3Var.f15063e;
                if (g3Var2 != g3Var) {
                    l3Var.f15063e = g3Var;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return g3Var2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final k3 b(l3 l3Var, k3 k3Var) {
        k3 k3Var2;
        synchronized (l3Var) {
            try {
                k3Var2 = l3Var.f15064i;
                if (k3Var2 != k3Var) {
                    l3Var.f15064i = k3Var;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return k3Var2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final void c(k3 k3Var, k3 k3Var2) {
        k3Var.f15047b = k3Var2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final void d(k3 k3Var, Thread thread) {
        k3Var.f15046a = thread;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final boolean e(l3 l3Var, Object obj, Object obj2) {
        Object obj3;
        synchronized (l3Var) {
            try {
                obj3 = l3Var.f15062d;
                if (obj3 == obj) {
                    l3Var.f15062d = obj2;
                    return true;
                }
                return false;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final boolean f(l3 l3Var, k3 k3Var, k3 k3Var2) {
        k3 k3Var3;
        synchronized (l3Var) {
            try {
                k3Var3 = l3Var.f15064i;
                if (k3Var3 == k3Var) {
                    l3Var.f15064i = k3Var2;
                    return true;
                }
                return false;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
