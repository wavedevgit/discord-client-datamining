package androidx.datastore.preferences.protobuf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class k1 {
    abstract void a(Object obj, int i10, int i11);

    abstract void b(Object obj, int i10, long j10);

    abstract void c(Object obj, int i10, Object obj2);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void d(Object obj, int i10, g gVar);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void e(Object obj, int i10, long j10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object f(Object obj);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object g(Object obj);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int h(Object obj);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int i(Object obj);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void j(Object obj);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object k(Object obj, Object obj2);

    final void l(Object obj, c1 c1Var) {
        while (c1Var.z() != Integer.MAX_VALUE && m(obj, c1Var)) {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean m(Object obj, c1 c1Var) {
        int tag = c1Var.getTag();
        int a10 = q1.a(tag);
        int b10 = q1.b(tag);
        if (b10 != 0) {
            if (b10 != 1) {
                if (b10 != 2) {
                    if (b10 != 3) {
                        if (b10 != 4) {
                            if (b10 == 5) {
                                a(obj, a10, c1Var.t());
                                return true;
                            }
                            throw z.d();
                        }
                        return false;
                    }
                    Object n10 = n();
                    int c10 = q1.c(a10, 4);
                    l(n10, c1Var);
                    if (c10 == c1Var.getTag()) {
                        c(obj, a10, r(n10));
                        return true;
                    }
                    throw z.a();
                }
                d(obj, a10, c1Var.n());
                return true;
            }
            b(obj, a10, c1Var.a());
            return true;
        }
        e(obj, a10, c1Var.G());
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object n();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void o(Object obj, Object obj2);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void p(Object obj, Object obj2);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract boolean q(c1 c1Var);

    abstract Object r(Object obj);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void s(Object obj, r1 r1Var);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void t(Object obj, r1 r1Var);
}
