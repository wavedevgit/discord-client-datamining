package a0;

import a0.r0;
import android.util.Range;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class p0 {

    /* renamed from: i  reason: collision with root package name */
    public static final r0.a f209i = r0.a.a("camerax.core.captureConfig.rotation", Integer.TYPE);

    /* renamed from: j  reason: collision with root package name */
    public static final r0.a f210j = r0.a.a("camerax.core.captureConfig.jpegQuality", Integer.class);

    /* renamed from: k  reason: collision with root package name */
    private static final r0.a f211k = r0.a.a("camerax.core.captureConfig.resolvedFrameRate", Range.class);

    /* renamed from: a  reason: collision with root package name */
    final List f212a;

    /* renamed from: b  reason: collision with root package name */
    final r0 f213b;

    /* renamed from: c  reason: collision with root package name */
    final int f214c;

    /* renamed from: d  reason: collision with root package name */
    final boolean f215d;

    /* renamed from: e  reason: collision with root package name */
    final List f216e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f217f;

    /* renamed from: g  reason: collision with root package name */
    private final q2 f218g;

    /* renamed from: h  reason: collision with root package name */
    private final u f219h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        void a(x2 x2Var, a aVar);
    }

    p0(List list, r0 r0Var, int i10, boolean z10, List list2, boolean z11, q2 q2Var, u uVar) {
        this.f212a = list;
        this.f213b = r0Var;
        this.f214c = i10;
        this.f216e = Collections.unmodifiableList(list2);
        this.f217f = z11;
        this.f218g = q2Var;
        this.f219h = uVar;
        this.f215d = z10;
    }

    public static p0 b() {
        return new a().h();
    }

    public List c() {
        return this.f216e;
    }

    public u d() {
        return this.f219h;
    }

    public Range e() {
        Range range = (Range) this.f213b.e(f211k, m2.f165a);
        Objects.requireNonNull(range);
        return range;
    }

    public int f() {
        Object d10 = this.f218g.d("CAPTURE_CONFIG_ID_KEY");
        if (d10 == null) {
            return -1;
        }
        return ((Integer) d10).intValue();
    }

    public r0 g() {
        return this.f213b;
    }

    public int h() {
        Integer num = (Integer) this.f213b.e(x2.C, 0);
        Objects.requireNonNull(num);
        return num.intValue();
    }

    public List i() {
        return Collections.unmodifiableList(this.f212a);
    }

    public q2 j() {
        return this.f218g;
    }

    public int k() {
        return this.f214c;
    }

    public int l() {
        Integer num = (Integer) this.f213b.e(x2.D, 0);
        Objects.requireNonNull(num);
        return num.intValue();
    }

    public boolean m() {
        return this.f217f;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Set f220a;

        /* renamed from: b  reason: collision with root package name */
        private q1 f221b;

        /* renamed from: c  reason: collision with root package name */
        private int f222c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f223d;

        /* renamed from: e  reason: collision with root package name */
        private List f224e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f225f;

        /* renamed from: g  reason: collision with root package name */
        private t1 f226g;

        /* renamed from: h  reason: collision with root package name */
        private u f227h;

        public a() {
            this.f220a = new HashSet();
            this.f221b = r1.Z();
            this.f222c = -1;
            this.f223d = false;
            this.f224e = new ArrayList();
            this.f225f = false;
            this.f226g = t1.g();
        }

        public static a i(x2 x2Var) {
            b s10 = x2Var.s(null);
            if (s10 != null) {
                a aVar = new a();
                s10.a(x2Var, aVar);
                return aVar;
            }
            throw new IllegalStateException("Implementation is missing option unpacker for " + x2Var.q(x2Var.toString()));
        }

        public static a j(p0 p0Var) {
            return new a(p0Var);
        }

        public void a(Collection collection) {
            Iterator it = collection.iterator();
            while (it.hasNext()) {
                c((k) it.next());
            }
        }

        public void b(q2 q2Var) {
            this.f226g.f(q2Var);
        }

        public void c(k kVar) {
            if (this.f224e.contains(kVar)) {
                return;
            }
            this.f224e.add(kVar);
        }

        public void d(r0.a aVar, Object obj) {
            this.f221b.V(aVar, obj);
        }

        public void e(r0 r0Var) {
            for (r0.a aVar : r0Var.b()) {
                this.f221b.e(aVar, null);
                this.f221b.K(aVar, r0Var.f(aVar), r0Var.a(aVar));
            }
        }

        public void f(w0 w0Var) {
            this.f220a.add(w0Var);
        }

        public void g(String str, Object obj) {
            this.f226g.i(str, obj);
        }

        public p0 h() {
            return new p0(new ArrayList(this.f220a), w1.Y(this.f221b), this.f222c, this.f223d, new ArrayList(this.f224e), this.f225f, q2.c(this.f226g), this.f227h);
        }

        public Range k() {
            return (Range) this.f221b.e(p0.f211k, m2.f165a);
        }

        public Set l() {
            return this.f220a;
        }

        public int m() {
            return this.f222c;
        }

        public void n(u uVar) {
            this.f227h = uVar;
        }

        public void o(Range range) {
            d(p0.f211k, range);
        }

        public void p(int i10) {
            this.f226g.i("CAPTURE_CONFIG_ID_KEY", Integer.valueOf(i10));
        }

        public void q(r0 r0Var) {
            this.f221b = r1.a0(r0Var);
        }

        public void r(boolean z10) {
            this.f223d = z10;
        }

        public void s(int i10) {
            if (i10 != 0) {
                d(x2.C, Integer.valueOf(i10));
            }
        }

        public void t(int i10) {
            this.f222c = i10;
        }

        public void u(boolean z10) {
            this.f225f = z10;
        }

        public void v(int i10) {
            if (i10 != 0) {
                d(x2.D, Integer.valueOf(i10));
            }
        }

        private a(p0 p0Var) {
            HashSet hashSet = new HashSet();
            this.f220a = hashSet;
            this.f221b = r1.Z();
            this.f222c = -1;
            this.f223d = false;
            this.f224e = new ArrayList();
            this.f225f = false;
            this.f226g = t1.g();
            hashSet.addAll(p0Var.f212a);
            this.f221b = r1.a0(p0Var.f213b);
            this.f222c = p0Var.f214c;
            this.f224e.addAll(p0Var.c());
            this.f225f = p0Var.m();
            this.f226g = t1.h(p0Var.j());
            this.f223d = p0Var.f215d;
        }
    }
}
