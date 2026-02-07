package n0;

import a0.e0;
import a0.h1;
import a0.i1;
import a0.i2;
import a0.q1;
import a0.u;
import a0.w0;
import a0.x2;
import a0.y2;
import android.graphics.Rect;
import android.util.Pair;
import android.util.Size;
import b0.q;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import j0.l0;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import n0.f;
import x.g1;
import x.n0;
import x.x1;
import x.z;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j implements x1.b {

    /* renamed from: d  reason: collision with root package name */
    final Set f38410d;

    /* renamed from: p  reason: collision with root package name */
    private final y2 f38414p;

    /* renamed from: q  reason: collision with root package name */
    private final e0 f38415q;

    /* renamed from: r  reason: collision with root package name */
    private final e0 f38416r;

    /* renamed from: t  reason: collision with root package name */
    private final Set f38418t;

    /* renamed from: u  reason: collision with root package name */
    private final Map f38419u;

    /* renamed from: v  reason: collision with root package name */
    private final b f38420v;

    /* renamed from: w  reason: collision with root package name */
    private b f38421w;

    /* renamed from: e  reason: collision with root package name */
    final Map f38411e = new HashMap();

    /* renamed from: i  reason: collision with root package name */
    private final Map f38412i = new HashMap();

    /* renamed from: o  reason: collision with root package name */
    final Map f38413o = new HashMap();

    /* renamed from: s  reason: collision with root package name */
    private final a0.k f38417s = t();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends a0.k {
        a() {
        }

        @Override // a0.k
        public void b(int i10, u uVar) {
            super.b(i10, uVar);
            for (x1 x1Var : j.this.f38410d) {
                j.K(uVar, x1Var.w(), i10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(e0 e0Var, e0 e0Var2, Set set, y2 y2Var, f.a aVar) {
        this.f38415q = e0Var;
        this.f38416r = e0Var2;
        this.f38414p = y2Var;
        this.f38410d = set;
        Map M = M(e0Var, set, y2Var);
        this.f38419u = M;
        HashSet hashSet = new HashSet(M.values());
        this.f38418t = hashSet;
        this.f38420v = new b(e0Var, hashSet);
        if (e0Var2 != null) {
            this.f38421w = new b(e0Var2, hashSet);
        }
        Iterator it = set.iterator();
        while (it.hasNext()) {
            x1 x1Var = (x1) it.next();
            this.f38413o.put(x1Var, Boolean.FALSE);
            this.f38412i.put(x1Var, new i(e0Var, this, aVar));
        }
    }

    private static int C(Set set) {
        Iterator it = set.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            i10 = Math.max(i10, ((x2) it.next()).w(0));
        }
        return i10;
    }

    private l0 E(x1 x1Var) {
        l0 l0Var = (l0) this.f38411e.get(x1Var);
        Objects.requireNonNull(l0Var);
        return l0Var;
    }

    private boolean F(x1 x1Var) {
        Boolean bool = (Boolean) this.f38413o.get(x1Var);
        Objects.requireNonNull(bool);
        return bool.booleanValue();
    }

    static void K(u uVar, i2 i2Var, int i10) {
        for (a0.k kVar : i2Var.i()) {
            kVar.b(i10, new k(i2Var.j().j(), uVar));
        }
    }

    private static Map M(e0 e0Var, Set set, y2 y2Var) {
        HashMap hashMap = new HashMap();
        Iterator it = set.iterator();
        while (it.hasNext()) {
            x1 x1Var = (x1) it.next();
            hashMap.put(x1Var, x1Var.D(e0Var.m(), null, x1Var.k(true, y2Var)));
        }
        return hashMap;
    }

    private l0.f s(x1 x1Var, b bVar, e0 e0Var, l0 l0Var, int i10, boolean z10) {
        int j10 = e0Var.b().j(i10);
        boolean l10 = q.l(l0Var.q());
        x2 x2Var = (x2) this.f38419u.get(x1Var);
        Objects.requireNonNull(x2Var);
        Pair s10 = bVar.s(x2Var, l0Var.n(), q.g(l0Var.q()), z10);
        Rect rect = (Rect) s10.first;
        int w10 = w(x1Var, this.f38415q);
        i iVar = (i) this.f38412i.get(x1Var);
        Objects.requireNonNull(iVar);
        iVar.n(w10);
        int u10 = q.u((l0Var.p() + w10) - j10);
        return l0.f.h(y(x1Var), v(x1Var), rect, q.o((Size) s10.second, u10), u10, x1Var.C(e0Var) ^ l10);
    }

    private static void u(l0 l0Var, w0 w0Var, i2 i2Var) {
        l0Var.u();
        try {
            l0Var.x(w0Var);
        } catch (w0.a unused) {
            if (i2Var.d() != null) {
                i2Var.d().a(i2Var, i2.g.SESSION_ERROR_SURFACE_NEEDS_RESET);
            }
        }
    }

    private static int v(x1 x1Var) {
        if (x1Var instanceof n0) {
            return IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
        }
        return 34;
    }

    private int w(x1 x1Var, e0 e0Var) {
        return e0Var.b().j(((i1) x1Var.j()).z(0));
    }

    static w0 x(x1 x1Var) {
        List i10;
        boolean z10;
        if (x1Var instanceof n0) {
            i10 = x1Var.w().n();
        } else {
            i10 = x1Var.w().j().i();
        }
        if (i10.size() <= 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.i(z10);
        if (i10.size() == 1) {
            return (w0) i10.get(0);
        }
        return null;
    }

    private static int y(x1 x1Var) {
        if (x1Var instanceof g1) {
            return 1;
        }
        if (x1Var instanceof n0) {
            return 4;
        }
        return 2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Map A(l0 l0Var, int i10, boolean z10) {
        HashMap hashMap = new HashMap();
        for (x1 x1Var : this.f38410d) {
            l0 l0Var2 = l0Var;
            hashMap.put(x1Var, s(x1Var, this.f38420v, this.f38415q, l0Var2, i10, z10));
            l0Var = l0Var2;
        }
        return hashMap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Map B(l0 l0Var, l0 l0Var2, int i10, boolean z10) {
        HashMap hashMap = new HashMap();
        for (x1 x1Var : this.f38410d) {
            l0 l0Var3 = l0Var;
            int i11 = i10;
            boolean z11 = z10;
            l0.f s10 = s(x1Var, this.f38420v, this.f38415q, l0Var3, i11, z11);
            b bVar = this.f38421w;
            e0 e0Var = this.f38416r;
            Objects.requireNonNull(e0Var);
            l0 l0Var4 = l0Var2;
            hashMap.put(x1Var, k0.d.c(s10, s(x1Var, bVar, e0Var, l0Var4, i11, z11)));
            l0Var = l0Var3;
            l0Var2 = l0Var4;
            i10 = i11;
            z10 = z11;
        }
        return hashMap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0.k D() {
        return this.f38417s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(q1 q1Var) {
        q1Var.V(i1.f93s, this.f38420v.o(q1Var));
        q1Var.V(x2.f321x, Integer.valueOf(C(this.f38418t)));
        z d10 = n0.a.d(this.f38418t);
        if (d10 != null) {
            q1Var.V(h1.f77i, d10);
            for (x1 x1Var : this.f38410d) {
                if (x1Var.j().t() != 0) {
                    q1Var.V(x2.D, Integer.valueOf(x1Var.j().t()));
                }
                if (x1Var.j().y() != 0) {
                    q1Var.V(x2.C, Integer.valueOf(x1Var.j().y()));
                }
            }
            return;
        }
        throw new IllegalArgumentException("Failed to merge child dynamic ranges, can not find a dynamic range that satisfies all children.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H() {
        for (x1 x1Var : this.f38410d) {
            x1Var.L();
            x1Var.J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I() {
        for (x1 x1Var : this.f38410d) {
            x1Var.M();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J() {
        b0.p.a();
        for (x1 x1Var : this.f38410d) {
            k(x1Var);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(Map map) {
        this.f38411e.clear();
        this.f38411e.putAll(map);
        for (Map.Entry entry : this.f38411e.entrySet()) {
            x1 x1Var = (x1) entry.getKey();
            l0 l0Var = (l0) entry.getValue();
            x1Var.T(l0Var.n());
            x1Var.S(l0Var.q());
            x1Var.W(l0Var.r(), null);
            x1Var.H();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N() {
        for (x1 x1Var : this.f38410d) {
            i iVar = (i) this.f38412i.get(x1Var);
            Objects.requireNonNull(iVar);
            x1Var.U(iVar);
        }
    }

    @Override // x.x1.b
    public void d(x1 x1Var) {
        b0.p.a();
        if (!F(x1Var)) {
            return;
        }
        l0 E = E(x1Var);
        w0 x10 = x(x1Var);
        if (x10 != null) {
            u(E, x10, x1Var.w());
        } else {
            E.m();
        }
    }

    @Override // x.x1.b
    public void e(x1 x1Var) {
        b0.p.a();
        if (!F(x1Var)) {
            this.f38413o.put(x1Var, Boolean.TRUE);
            w0 x10 = x(x1Var);
            if (x10 != null) {
                u(E(x1Var), x10, x1Var.w());
            }
        }
    }

    @Override // x.x1.b
    public void j(x1 x1Var) {
        b0.p.a();
        if (!F(x1Var)) {
            return;
        }
        this.f38413o.put(x1Var, Boolean.FALSE);
        E(x1Var).m();
    }

    @Override // x.x1.b
    public void k(x1 x1Var) {
        w0 x10;
        b0.p.a();
        l0 E = E(x1Var);
        if (F(x1Var) && (x10 = x(x1Var)) != null) {
            u(E, x10, x1Var.w());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n() {
        for (x1 x1Var : this.f38410d) {
            i iVar = (i) this.f38412i.get(x1Var);
            Objects.requireNonNull(iVar);
            x1Var.b(iVar, null, null, x1Var.k(true, this.f38414p));
        }
    }

    a0.k t() {
        return new a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set z() {
        return this.f38410d;
    }
}
