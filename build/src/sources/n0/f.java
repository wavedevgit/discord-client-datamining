package n0;

import a0.e0;
import a0.h1;
import a0.i1;
import a0.i2;
import a0.m2;
import a0.q1;
import a0.r0;
import a0.r1;
import a0.w1;
import a0.x2;
import a0.y2;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Log;
import android.util.Size;
import com.google.common.util.concurrent.ListenableFuture;
import j0.l0;
import j0.t;
import j0.t0;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import k0.o;
import k0.r;
import x.d0;
import x.x0;
import x.x1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f extends x1 {
    i2.b A;
    i2.b B;
    private i2.c C;

    /* renamed from: p  reason: collision with root package name */
    private final h f38991p;

    /* renamed from: q  reason: collision with root package name */
    private final j f38992q;

    /* renamed from: r  reason: collision with root package name */
    private final x0 f38993r;

    /* renamed from: s  reason: collision with root package name */
    private final x0 f38994s;

    /* renamed from: t  reason: collision with root package name */
    private t0 f38995t;

    /* renamed from: u  reason: collision with root package name */
    private t0 f38996u;

    /* renamed from: v  reason: collision with root package name */
    private r f38997v;

    /* renamed from: w  reason: collision with root package name */
    private l0 f38998w;

    /* renamed from: x  reason: collision with root package name */
    private l0 f38999x;

    /* renamed from: y  reason: collision with root package name */
    private l0 f39000y;

    /* renamed from: z  reason: collision with root package name */
    private l0 f39001z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        ListenableFuture a(int i10, int i11);
    }

    public f(e0 e0Var, e0 e0Var2, x0 x0Var, x0 x0Var2, Set set, y2 y2Var) {
        super(k0(set));
        this.f38991p = k0(set);
        this.f38993r = x0Var;
        this.f38994s = x0Var2;
        this.f38992q = new j(e0Var, e0Var2, set, y2Var, new a() { // from class: n0.d
            @Override // n0.f.a
            public final ListenableFuture a(int i10, int i11) {
                return f.Z(f.this, i10, i11);
            }
        });
    }

    public static /* synthetic */ void Y(f fVar, String str, String str2, x2 x2Var, m2 m2Var, m2 m2Var2, i2 i2Var, i2.g gVar) {
        if (fVar.g() == null) {
            return;
        }
        fVar.b0();
        fVar.V(fVar.c0(str, str2, x2Var, m2Var, m2Var2));
        fVar.G();
        fVar.f38992q.J();
    }

    public static /* synthetic */ ListenableFuture Z(f fVar, int i10, int i11) {
        t0 t0Var = fVar.f38996u;
        if (t0Var != null) {
            return t0Var.e().c(i10, i11);
        }
        return d0.n.n(new Exception("Failed to take picture: pipeline is not ready."));
    }

    private void a0(i2.b bVar, final String str, final String str2, final x2 x2Var, final m2 m2Var, final m2 m2Var2) {
        i2.c cVar = this.C;
        if (cVar != null) {
            cVar.b();
        }
        i2.c cVar2 = new i2.c(new i2.d() { // from class: n0.e
            @Override // a0.i2.d
            public final void a(i2 i2Var, i2.g gVar) {
                f.Y(f.this, str, str2, x2Var, m2Var, m2Var2, i2Var, gVar);
            }
        });
        this.C = cVar2;
        bVar.r(cVar2);
    }

    private void b0() {
        i2.c cVar = this.C;
        if (cVar != null) {
            cVar.b();
            this.C = null;
        }
        l0 l0Var = this.f38998w;
        if (l0Var != null) {
            l0Var.i();
            this.f38998w = null;
        }
        l0 l0Var2 = this.f38999x;
        if (l0Var2 != null) {
            l0Var2.i();
            this.f38999x = null;
        }
        l0 l0Var3 = this.f39000y;
        if (l0Var3 != null) {
            l0Var3.i();
            this.f39000y = null;
        }
        l0 l0Var4 = this.f39001z;
        if (l0Var4 != null) {
            l0Var4.i();
            this.f39001z = null;
        }
        t0 t0Var = this.f38996u;
        if (t0Var != null) {
            t0Var.f();
            this.f38996u = null;
        }
        r rVar = this.f38997v;
        if (rVar != null) {
            rVar.d();
            this.f38997v = null;
        }
        t0 t0Var2 = this.f38995t;
        if (t0Var2 != null) {
            t0Var2.f();
            this.f38995t = null;
        }
    }

    private List c0(String str, String str2, x2 x2Var, m2 m2Var, m2 m2Var2) {
        List a10;
        List a11;
        b0.p.a();
        boolean z10 = false;
        if (m2Var2 == null) {
            d0(str, str2, x2Var, m2Var, null);
            e0 g10 = g();
            Objects.requireNonNull(g10);
            this.f38996u = n0(g10, m2Var);
            if (A() != null) {
                z10 = true;
            }
            Map A = this.f38992q.A(this.f39000y, y(), z10);
            t0.c j10 = this.f38996u.j(t0.b.c(this.f39000y, new ArrayList(A.values())));
            HashMap hashMap = new HashMap();
            for (Map.Entry entry : A.entrySet()) {
                hashMap.put((x1) entry.getKey(), (l0) j10.get(entry.getValue()));
            }
            this.f38992q.L(hashMap);
            a11 = d0.a(new Object[]{this.A.o()});
            return a11;
        }
        d0(str, str2, x2Var, m2Var, m2Var2);
        e0(str, str2, x2Var, m2Var, m2Var2);
        this.f38997v = l0(g(), s(), m2Var, this.f38993r, this.f38994s);
        if (A() != null) {
            z10 = true;
        }
        Map B = this.f38992q.B(this.f39000y, this.f39001z, y(), z10);
        r.c g11 = this.f38997v.g(r.b.d(this.f39000y, this.f39001z, new ArrayList(B.values())));
        HashMap hashMap2 = new HashMap();
        for (Map.Entry entry2 : B.entrySet()) {
            hashMap2.put((x1) entry2.getKey(), (l0) g11.get(entry2.getValue()));
        }
        this.f38992q.L(hashMap2);
        a10 = d0.a(new Object[]{this.A.o(), this.B.o()});
        return a10;
    }

    private void d0(String str, String str2, x2 x2Var, m2 m2Var, m2 m2Var2) {
        Matrix v10 = v();
        e0 g10 = g();
        Objects.requireNonNull(g10);
        boolean p10 = g10.p();
        Rect j02 = j0(m2Var.e());
        Objects.requireNonNull(j02);
        e0 g11 = g();
        Objects.requireNonNull(g11);
        int q10 = q(g11);
        e0 g12 = g();
        Objects.requireNonNull(g12);
        l0 l0Var = new l0(3, 34, m2Var, v10, p10, j02, q10, -1, C(g12));
        this.f38998w = l0Var;
        e0 g13 = g();
        Objects.requireNonNull(g13);
        this.f39000y = m0(l0Var, g13);
        i2.b f02 = f0(this.f38998w, x2Var, m2Var);
        this.A = f02;
        a0(f02, str, str2, x2Var, m2Var, m2Var2);
    }

    private void e0(String str, String str2, x2 x2Var, m2 m2Var, m2 m2Var2) {
        Matrix v10 = v();
        e0 s10 = s();
        Objects.requireNonNull(s10);
        boolean p10 = s10.p();
        Rect j02 = j0(m2Var2.e());
        Objects.requireNonNull(j02);
        e0 s11 = s();
        Objects.requireNonNull(s11);
        int q10 = q(s11);
        e0 s12 = s();
        Objects.requireNonNull(s12);
        l0 l0Var = new l0(3, 34, m2Var2, v10, p10, j02, q10, -1, C(s12));
        this.f38999x = l0Var;
        e0 s13 = s();
        Objects.requireNonNull(s13);
        this.f39001z = m0(l0Var, s13);
        i2.b f02 = f0(this.f38999x, x2Var, m2Var2);
        this.B = f02;
        a0(f02, str, str2, x2Var, m2Var, m2Var2);
    }

    private i2.b f0(l0 l0Var, x2 x2Var, m2 m2Var) {
        i2.b p10 = i2.b.p(x2Var, m2Var.e());
        q0(p10);
        p0(m2Var.e(), p10);
        p10.m(l0Var.o(), m2Var.b(), null, -1);
        p10.j(this.f38992q.D());
        if (m2Var.d() != null) {
            p10.g(m2Var.d());
        }
        return p10;
    }

    public static List g0(x1 x1Var) {
        ArrayList arrayList = new ArrayList();
        if (o0(x1Var)) {
            for (x1 x1Var2 : ((f) x1Var).i0()) {
                arrayList.add(x1Var2.j().L());
            }
            return arrayList;
        }
        arrayList.add(x1Var.j().L());
        return arrayList;
    }

    private static int h0(x1 x1Var) {
        return x1Var.j().G().o();
    }

    private Rect j0(Size size) {
        if (A() != null) {
            return A();
        }
        return new Rect(0, 0, size.getWidth(), size.getHeight());
    }

    private static h k0(Set set) {
        q1 a10 = new g().a();
        a10.V(h1.f76h, 34);
        ArrayList arrayList = new ArrayList();
        Iterator it = set.iterator();
        while (it.hasNext()) {
            x1 x1Var = (x1) it.next();
            if (x1Var.j().h(x2.B)) {
                arrayList.add(x1Var.j().L());
            } else {
                Log.e("StreamSharing", "A child does not have capture type.");
            }
        }
        a10.V(h.J, arrayList);
        a10.V(i1.f87m, 2);
        return new h(w1.Y(a10));
    }

    private r l0(e0 e0Var, e0 e0Var2, m2 m2Var, x0 x0Var, x0 x0Var2) {
        return new r(e0Var, e0Var2, o.a.a(m2Var.b(), x0Var, x0Var2));
    }

    private l0 m0(l0 l0Var, e0 e0Var) {
        l();
        return l0Var;
    }

    private t0 n0(e0 e0Var, m2 m2Var) {
        l();
        return new t0(e0Var, t.a.a(m2Var.b()));
    }

    public static boolean o0(x1 x1Var) {
        return x1Var instanceof f;
    }

    private void p0(Size size, i2.b bVar) {
        for (x1 x1Var : i0()) {
            i2 o10 = i2.b.p(x1Var.j(), size).o();
            bVar.c(o10.i());
            bVar.a(o10.m());
            bVar.d(o10.k());
            bVar.b(o10.c());
            bVar.g(o10.f());
        }
    }

    private void q0(i2.b bVar) {
        int i10 = -1;
        for (x1 x1Var : i0()) {
            i10 = i2.e(i10, h0(x1Var));
        }
        if (i10 != -1) {
            bVar.x(i10);
        }
    }

    @Override // x.x1
    public void I() {
        super.I();
        this.f38992q.r();
    }

    @Override // x.x1
    protected x2 K(a0.d0 d0Var, x2.a aVar) {
        this.f38992q.G(aVar.a());
        return aVar.b();
    }

    @Override // x.x1
    public void L() {
        super.L();
        this.f38992q.H();
    }

    @Override // x.x1
    public void M() {
        super.M();
        this.f38992q.I();
    }

    @Override // x.x1
    protected m2 N(r0 r0Var) {
        List a10;
        this.A.g(r0Var);
        a10 = d0.a(new Object[]{this.A.o()});
        V(a10);
        return e().g().d(r0Var).a();
    }

    @Override // x.x1
    protected m2 O(m2 m2Var, m2 m2Var2) {
        V(c0(i(), t(), j(), m2Var, m2Var2));
        E();
        return m2Var;
    }

    @Override // x.x1
    public void P() {
        super.P();
        b0();
        this.f38992q.N();
    }

    public Set i0() {
        return this.f38992q.z();
    }

    @Override // x.x1
    public x2 k(boolean z10, y2 y2Var) {
        r0 a10 = y2Var.a(this.f38991p.L(), 1);
        if (z10) {
            a10 = r0.E(a10, this.f38991p.getConfig());
        }
        if (a10 == null) {
            return null;
        }
        return z(a10).b();
    }

    @Override // x.x1
    public Set x() {
        HashSet hashSet = new HashSet();
        hashSet.add(3);
        return hashSet;
    }

    @Override // x.x1
    public x2.a z(r0 r0Var) {
        return new g(r1.a0(r0Var));
    }
}
