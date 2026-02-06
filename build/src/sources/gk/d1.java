package gk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class d1 {
    abstract void a(Object obj, int i10, int i11);

    abstract void b(Object obj, int i10, long j10);

    abstract void c(Object obj, int i10, Object obj2);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void d(Object obj, int i10, f fVar);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void e(Object obj, int i10, long j10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object f(Object obj);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object g(Object obj);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void h(Object obj);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object i(Object obj, Object obj2);

    final void j(Object obj, w0 w0Var) {
        while (w0Var.z() != Integer.MAX_VALUE && k(obj, w0Var)) {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean k(Object obj, w0 w0Var) {
        int tag = w0Var.getTag();
        int a10 = j1.a(tag);
        int b10 = j1.b(tag);
        if (b10 != 0) {
            if (b10 != 1) {
                if (b10 != 2) {
                    if (b10 != 3) {
                        if (b10 != 4) {
                            if (b10 == 5) {
                                a(obj, a10, w0Var.t());
                                return true;
                            }
                            throw v.e();
                        }
                        return false;
                    }
                    Object l10 = l();
                    int c10 = j1.c(a10, 4);
                    j(l10, w0Var);
                    if (c10 == w0Var.getTag()) {
                        c(obj, a10, p(l10));
                        return true;
                    }
                    throw v.b();
                }
                d(obj, a10, w0Var.n());
                return true;
            }
            b(obj, a10, w0Var.a());
            return true;
        }
        e(obj, a10, w0Var.G());
        return true;
    }

    abstract Object l();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void m(Object obj, Object obj2);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void n(Object obj, Object obj2);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract boolean o(w0 w0Var);

    abstract Object p(Object obj);
}
