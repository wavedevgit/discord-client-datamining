package gk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m0 implements x0 {

    /* renamed from: a  reason: collision with root package name */
    private final i0 f25382a;

    /* renamed from: b  reason: collision with root package name */
    private final d1 f25383b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f25384c;

    /* renamed from: d  reason: collision with root package name */
    private final m f25385d;

    private m0(d1 d1Var, m mVar, i0 i0Var) {
        this.f25383b = d1Var;
        this.f25384c = mVar.d(i0Var);
        this.f25385d = mVar;
        this.f25382a = i0Var;
    }

    private void h(d1 d1Var, m mVar, Object obj, w0 w0Var, l lVar) {
        d1 d1Var2;
        Object f10 = d1Var.f(obj);
        p c10 = mVar.c(obj);
        while (w0Var.z() != Integer.MAX_VALUE) {
            try {
                d1Var2 = d1Var;
                m mVar2 = mVar;
                w0 w0Var2 = w0Var;
                l lVar2 = lVar;
                try {
                    if (j(w0Var2, lVar2, mVar2, c10, d1Var2, f10)) {
                        w0Var = w0Var2;
                        lVar = lVar2;
                        mVar = mVar2;
                        d1Var = d1Var2;
                    } else {
                        d1Var2.m(obj, f10);
                        return;
                    }
                } catch (Throwable th2) {
                    th = th2;
                    Throwable th3 = th;
                    d1Var2.m(obj, f10);
                    throw th3;
                }
            } catch (Throwable th4) {
                th = th4;
                d1Var2 = d1Var;
            }
        }
        d1Var.m(obj, f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m0 i(d1 d1Var, m mVar, i0 i0Var) {
        return new m0(d1Var, mVar, i0Var);
    }

    private boolean j(w0 w0Var, l lVar, m mVar, p pVar, d1 d1Var, Object obj) {
        int tag = w0Var.getTag();
        if (tag != j1.f25325a) {
            if (j1.b(tag) == 2) {
                Object a10 = mVar.a(lVar, this.f25382a, j1.a(tag));
                if (a10 != null) {
                    mVar.g(w0Var, a10, lVar, pVar);
                    return true;
                }
                return d1Var.k(obj, w0Var);
            }
            return w0Var.C();
        }
        Object obj2 = null;
        int i10 = 0;
        f fVar = null;
        while (w0Var.z() != Integer.MAX_VALUE) {
            int tag2 = w0Var.getTag();
            if (tag2 == j1.f25327c) {
                i10 = w0Var.g();
                obj2 = mVar.a(lVar, this.f25382a, i10);
            } else if (tag2 == j1.f25328d) {
                if (obj2 != null) {
                    mVar.g(w0Var, obj2, lVar, pVar);
                } else {
                    fVar = w0Var.n();
                }
            } else if (!w0Var.C()) {
                break;
            }
        }
        if (w0Var.getTag() == j1.f25326b) {
            if (fVar != null) {
                if (obj2 != null) {
                    mVar.h(fVar, obj2, lVar, pVar);
                } else {
                    d1Var.d(obj, i10, fVar);
                }
            }
            return true;
        }
        throw v.b();
    }

    @Override // gk.x0
    public void a(Object obj, Object obj2) {
        z0.g(this.f25383b, obj, obj2);
        if (this.f25384c) {
            z0.e(this.f25385d, obj, obj2);
        }
    }

    @Override // gk.x0
    public void b(Object obj) {
        this.f25383b.h(obj);
        this.f25385d.e(obj);
    }

    @Override // gk.x0
    public final boolean c(Object obj) {
        return this.f25385d.b(obj).b();
    }

    @Override // gk.x0
    public Object d() {
        i0 i0Var = this.f25382a;
        if (i0Var instanceof s) {
            return ((s) i0Var).y();
        }
        return i0Var.newBuilderForType().s();
    }

    @Override // gk.x0
    public int e(Object obj) {
        int hashCode = this.f25383b.g(obj).hashCode();
        if (this.f25384c) {
            return (hashCode * 53) + this.f25385d.b(obj).hashCode();
        }
        return hashCode;
    }

    @Override // gk.x0
    public boolean f(Object obj, Object obj2) {
        if (!this.f25383b.g(obj).equals(this.f25383b.g(obj2))) {
            return false;
        }
        if (this.f25384c) {
            return this.f25385d.b(obj).equals(this.f25385d.b(obj2));
        }
        return true;
    }

    @Override // gk.x0
    public void g(Object obj, w0 w0Var, l lVar) {
        h(this.f25383b, this.f25385d, obj, w0Var, lVar);
    }
}
