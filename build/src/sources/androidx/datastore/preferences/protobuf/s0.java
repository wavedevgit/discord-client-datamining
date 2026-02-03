package androidx.datastore.preferences.protobuf;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class s0 implements d1 {

    /* renamed from: a  reason: collision with root package name */
    private final o0 f3795a;

    /* renamed from: b  reason: collision with root package name */
    private final k1 f3796b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f3797c;

    /* renamed from: d  reason: collision with root package name */
    private final p f3798d;

    private s0(k1 k1Var, p pVar, o0 o0Var) {
        this.f3796b = k1Var;
        this.f3797c = pVar.e(o0Var);
        this.f3798d = pVar;
        this.f3795a = o0Var;
    }

    private int j(k1 k1Var, Object obj) {
        return k1Var.i(k1Var.g(obj));
    }

    private void k(k1 k1Var, p pVar, Object obj, c1 c1Var, o oVar) {
        k1 k1Var2;
        Object f10 = k1Var.f(obj);
        s d10 = pVar.d(obj);
        while (c1Var.D() != Integer.MAX_VALUE) {
            try {
                k1Var2 = k1Var;
                p pVar2 = pVar;
                c1 c1Var2 = c1Var;
                o oVar2 = oVar;
                try {
                    if (m(c1Var2, oVar2, pVar2, d10, k1Var2, f10)) {
                        c1Var = c1Var2;
                        oVar = oVar2;
                        pVar = pVar2;
                        k1Var = k1Var2;
                    } else {
                        k1Var2.o(obj, f10);
                        return;
                    }
                } catch (Throwable th2) {
                    th = th2;
                    Throwable th3 = th;
                    k1Var2.o(obj, f10);
                    throw th3;
                }
            } catch (Throwable th4) {
                th = th4;
                k1Var2 = k1Var;
            }
        }
        k1Var.o(obj, f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s0 l(k1 k1Var, p pVar, o0 o0Var) {
        return new s0(k1Var, pVar, o0Var);
    }

    private boolean m(c1 c1Var, o oVar, p pVar, s sVar, k1 k1Var, Object obj) {
        int tag = c1Var.getTag();
        if (tag != q1.f3735a) {
            if (q1.b(tag) == 2) {
                Object b10 = pVar.b(oVar, this.f3795a, q1.a(tag));
                if (b10 != null) {
                    pVar.h(c1Var, b10, oVar, sVar);
                    return true;
                }
                return k1Var.m(obj, c1Var);
            }
            return c1Var.H();
        }
        Object obj2 = null;
        int i10 = 0;
        g gVar = null;
        while (c1Var.D() != Integer.MAX_VALUE) {
            int tag2 = c1Var.getTag();
            if (tag2 == q1.f3737c) {
                i10 = c1Var.h();
                obj2 = pVar.b(oVar, this.f3795a, i10);
            } else if (tag2 == q1.f3738d) {
                if (obj2 != null) {
                    pVar.h(c1Var, obj2, oVar, sVar);
                } else {
                    gVar = c1Var.o();
                }
            } else if (!c1Var.H()) {
                break;
            }
        }
        if (c1Var.getTag() == q1.f3736b) {
            if (gVar != null) {
                if (obj2 != null) {
                    pVar.i(gVar, obj2, oVar, sVar);
                } else {
                    k1Var.d(obj, i10, gVar);
                }
            }
            return true;
        }
        throw z.a();
    }

    private void n(k1 k1Var, Object obj, r1 r1Var) {
        k1Var.s(k1Var.g(obj), r1Var);
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public void a(Object obj, Object obj2) {
        f1.F(this.f3796b, obj, obj2);
        if (this.f3797c) {
            f1.D(this.f3798d, obj, obj2);
        }
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public void b(Object obj, c1 c1Var, o oVar) {
        k(this.f3796b, this.f3798d, obj, c1Var, oVar);
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public void c(Object obj) {
        this.f3796b.j(obj);
        this.f3798d.f(obj);
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public final boolean d(Object obj) {
        return this.f3798d.c(obj).k();
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public int e(Object obj) {
        int j10 = j(this.f3796b, obj);
        if (this.f3797c) {
            return j10 + this.f3798d.c(obj).f();
        }
        return j10;
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public Object f() {
        return this.f3795a.newBuilderForType().A0();
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public int g(Object obj) {
        int hashCode = this.f3796b.g(obj).hashCode();
        if (this.f3797c) {
            return (hashCode * 53) + this.f3798d.c(obj).hashCode();
        }
        return hashCode;
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public void h(Object obj, r1 r1Var) {
        Iterator n10 = this.f3798d.c(obj).n();
        if (!n10.hasNext()) {
            n(this.f3796b, obj, r1Var);
        } else {
            android.support.v4.media.session.b.a(((Map.Entry) n10.next()).getKey());
            throw null;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public boolean i(Object obj, Object obj2) {
        if (!this.f3796b.g(obj).equals(this.f3796b.g(obj2))) {
            return false;
        }
        if (this.f3797c) {
            return this.f3798d.c(obj).equals(this.f3798d.c(obj2));
        }
        return true;
    }
}
