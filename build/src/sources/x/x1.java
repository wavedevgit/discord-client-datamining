package x;

import a0.i2;
import a0.m2;
import a0.r0;
import a0.x2;
import a0.y2;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class x1 {

    /* renamed from: d  reason: collision with root package name */
    private x2 f53014d;

    /* renamed from: e  reason: collision with root package name */
    private x2 f53015e;

    /* renamed from: f  reason: collision with root package name */
    private x2 f53016f;

    /* renamed from: g  reason: collision with root package name */
    private m2 f53017g;

    /* renamed from: h  reason: collision with root package name */
    private x2 f53018h;

    /* renamed from: i  reason: collision with root package name */
    private Rect f53019i;

    /* renamed from: k  reason: collision with root package name */
    private a0.e0 f53021k;

    /* renamed from: l  reason: collision with root package name */
    private a0.e0 f53022l;

    /* renamed from: m  reason: collision with root package name */
    private String f53023m;

    /* renamed from: a  reason: collision with root package name */
    private final Set f53011a = new HashSet();

    /* renamed from: b  reason: collision with root package name */
    private final Object f53012b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private a f53013c = a.INACTIVE;

    /* renamed from: j  reason: collision with root package name */
    private Matrix f53020j = new Matrix();

    /* renamed from: n  reason: collision with root package name */
    private i2 f53024n = i2.b();

    /* renamed from: o  reason: collision with root package name */
    private i2 f53025o = i2.b();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        ACTIVE,
        INACTIVE
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        void d(x1 x1Var);

        void e(x1 x1Var);

        void g(x1 x1Var);

        void h(x1 x1Var);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public x1(x2 x2Var) {
        this.f53015e = x2Var;
        this.f53016f = x2Var;
    }

    private void Q(b bVar) {
        this.f53011a.remove(bVar);
    }

    private void a(b bVar) {
        this.f53011a.add(bVar);
    }

    public Rect A() {
        return this.f53019i;
    }

    public boolean B(int i10) {
        for (Integer num : x()) {
            if (j0.u0.b(i10, num.intValue())) {
                return true;
            }
        }
        return false;
    }

    public boolean C(a0.e0 e0Var) {
        int n10 = n();
        if (n10 != -1 && n10 != 0) {
            if (n10 == 1) {
                return true;
            }
            if (n10 == 2) {
                return e0Var.o();
            }
            throw new AssertionError("Unknown mirrorMode: " + n10);
        }
        return false;
    }

    public x2 D(a0.d0 d0Var, x2 x2Var, x2 x2Var2) {
        a0.r1 Z;
        if (x2Var2 != null) {
            Z = a0.r1.a0(x2Var2);
            Z.b0(e0.m.F);
        } else {
            Z = a0.r1.Z();
        }
        if (this.f53015e.h(a0.i1.f84j) || this.f53015e.h(a0.i1.f88n)) {
            r0.a aVar = a0.i1.f92r;
            if (Z.h(aVar)) {
                Z.b0(aVar);
            }
        }
        x2 x2Var3 = this.f53015e;
        r0.a aVar2 = a0.i1.f92r;
        if (x2Var3.h(aVar2)) {
            r0.a aVar3 = a0.i1.f90p;
            if (Z.h(aVar3) && ((m0.c) this.f53015e.a(aVar2)).d() != null) {
                Z.b0(aVar3);
            }
        }
        for (r0.a aVar4 : this.f53015e.b()) {
            a0.r0.Q(Z, Z, this.f53015e, aVar4);
        }
        if (x2Var != null) {
            for (r0.a aVar5 : x2Var.b()) {
                if (!aVar5.c().equals(e0.m.F.c())) {
                    a0.r0.Q(Z, Z, x2Var, aVar5);
                }
            }
        }
        if (Z.h(a0.i1.f88n)) {
            r0.a aVar6 = a0.i1.f84j;
            if (Z.h(aVar6)) {
                Z.b0(aVar6);
            }
        }
        r0.a aVar7 = a0.i1.f92r;
        if (Z.h(aVar7) && ((m0.c) Z.a(aVar7)).a() != 0) {
            Z.V(x2.f323z, Boolean.TRUE);
        }
        return K(d0Var, z(Z));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void E() {
        this.f53013c = a.ACTIVE;
        H();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void F() {
        this.f53013c = a.INACTIVE;
        H();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void G() {
        for (b bVar : this.f53011a) {
            bVar.h(this);
        }
    }

    public final void H() {
        int ordinal = this.f53013c.ordinal();
        if (ordinal != 0) {
            if (ordinal == 1) {
                for (b bVar : this.f53011a) {
                    bVar.g(this);
                }
                return;
            }
            return;
        }
        for (b bVar2 : this.f53011a) {
            bVar2.e(this);
        }
    }

    protected abstract x2 K(a0.d0 d0Var, x2.a aVar);

    protected abstract m2 N(a0.r0 r0Var);

    protected abstract m2 O(m2 m2Var, m2 m2Var2);

    public void R(k kVar) {
        b2.e.a(true);
    }

    public void S(Matrix matrix) {
        this.f53020j = new Matrix(matrix);
    }

    public void T(Rect rect) {
        this.f53019i = rect;
    }

    public final void U(a0.e0 e0Var) {
        P();
        synchronized (this.f53012b) {
            try {
                a0.e0 e0Var2 = this.f53021k;
                if (e0Var == e0Var2) {
                    Q(e0Var2);
                    this.f53021k = null;
                }
                a0.e0 e0Var3 = this.f53022l;
                if (e0Var == e0Var3) {
                    Q(e0Var3);
                    this.f53022l = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        this.f53017g = null;
        this.f53019i = null;
        this.f53016f = this.f53015e;
        this.f53014d = null;
        this.f53018h = null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void V(List list) {
        if (!list.isEmpty()) {
            this.f53024n = (i2) list.get(0);
            if (list.size() > 1) {
                this.f53025o = (i2) list.get(1);
            }
            Iterator it = list.iterator();
            while (it.hasNext()) {
                for (a0.w0 w0Var : ((i2) it.next()).n()) {
                    if (w0Var.g() == null) {
                        w0Var.p(getClass());
                    }
                }
            }
        }
    }

    public void W(m2 m2Var, m2 m2Var2) {
        this.f53017g = O(m2Var, m2Var2);
    }

    public void X(a0.r0 r0Var) {
        this.f53017g = N(r0Var);
    }

    public final void b(a0.e0 e0Var, a0.e0 e0Var2, x2 x2Var, x2 x2Var2) {
        synchronized (this.f53012b) {
            try {
                this.f53021k = e0Var;
                this.f53022l = e0Var2;
                a(e0Var);
                if (e0Var2 != null) {
                    a(e0Var2);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        this.f53014d = x2Var;
        this.f53018h = x2Var2;
        this.f53016f = D(e0Var.m(), this.f53014d, this.f53018h);
        I();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public x2 c() {
        return this.f53015e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int d() {
        return ((a0.i1) this.f53016f).p(-1);
    }

    public m2 e() {
        return this.f53017g;
    }

    public Size f() {
        m2 m2Var = this.f53017g;
        if (m2Var != null) {
            return m2Var.e();
        }
        return null;
    }

    public a0.e0 g() {
        a0.e0 e0Var;
        synchronized (this.f53012b) {
            e0Var = this.f53021k;
        }
        return e0Var;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a0.a0 h() {
        synchronized (this.f53012b) {
            try {
                a0.e0 e0Var = this.f53021k;
                if (e0Var == null) {
                    return a0.a0.f5a;
                }
                return e0Var.f();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public String i() {
        a0.e0 g10 = g();
        return ((a0.e0) b2.e.h(g10, "No camera attached to use case: " + this)).m().b();
    }

    public x2 j() {
        return this.f53016f;
    }

    public abstract x2 k(boolean z10, y2 y2Var);

    public k l() {
        return null;
    }

    public int m() {
        return this.f53016f.getInputFormat();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int n() {
        return ((a0.i1) this.f53016f).U(-1);
    }

    public String o() {
        x2 x2Var = this.f53016f;
        String q10 = x2Var.q("<UnknownUseCase-" + hashCode() + ">");
        Objects.requireNonNull(q10);
        return q10;
    }

    public String p() {
        return this.f53023m;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int q(a0.e0 e0Var) {
        return r(e0Var, false);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int r(a0.e0 e0Var, boolean z10) {
        int j10 = e0Var.m().j(y());
        if (!e0Var.q() && z10) {
            return b0.q.u(-j10);
        }
        return j10;
    }

    public a0.e0 s() {
        a0.e0 e0Var;
        synchronized (this.f53012b) {
            e0Var = this.f53022l;
        }
        return e0Var;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public String t() {
        if (s() == null) {
            return null;
        }
        return s().m().b();
    }

    public i2 u() {
        return this.f53025o;
    }

    public Matrix v() {
        return this.f53020j;
    }

    public i2 w() {
        return this.f53024n;
    }

    protected Set x() {
        return Collections.EMPTY_SET;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int y() {
        return ((a0.i1) this.f53016f).z(0);
    }

    public abstract x2.a z(a0.r0 r0Var);

    public void I() {
    }

    public void J() {
    }

    public void L() {
    }

    public void M() {
    }

    public void P() {
    }
}
