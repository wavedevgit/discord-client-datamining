package xi;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f55368a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f55369b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f55370c;

    /* renamed from: d  reason: collision with root package name */
    private final int f55371d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55372e;

    /* renamed from: f  reason: collision with root package name */
    private final g f55373f;

    /* renamed from: g  reason: collision with root package name */
    private final Set f55374g;

    public static /* synthetic */ Object a(Object obj, d dVar) {
        return obj;
    }

    public static /* synthetic */ Object b(Object obj, d dVar) {
        return obj;
    }

    public static b c(Class cls) {
        return new b(cls, new Class[0]);
    }

    public static b d(Class cls, Class... clsArr) {
        return new b(cls, clsArr);
    }

    public static b e(d0 d0Var) {
        return new b(d0Var, new d0[0]);
    }

    public static b f(d0 d0Var, d0... d0VarArr) {
        return new b(d0Var, d0VarArr);
    }

    public static c l(final Object obj, Class cls) {
        return m(cls).e(new g() { // from class: xi.a
            @Override // xi.g
            public final Object a(d dVar) {
                return c.b(obj, dVar);
            }
        }).d();
    }

    public static b m(Class cls) {
        return c(cls).f();
    }

    public static c q(final Object obj, Class cls, Class... clsArr) {
        return d(cls, clsArr).e(new g() { // from class: xi.b
            @Override // xi.g
            public final Object a(d dVar) {
                return c.a(obj, dVar);
            }
        }).d();
    }

    public Set g() {
        return this.f55370c;
    }

    public g h() {
        return this.f55373f;
    }

    public String i() {
        return this.f55368a;
    }

    public Set j() {
        return this.f55369b;
    }

    public Set k() {
        return this.f55374g;
    }

    public boolean n() {
        if (this.f55371d == 1) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f55371d == 2) {
            return true;
        }
        return false;
    }

    public boolean p() {
        if (this.f55372e == 0) {
            return true;
        }
        return false;
    }

    public c r(g gVar) {
        return new c(this.f55368a, this.f55369b, this.f55370c, this.f55371d, this.f55372e, gVar, this.f55374g);
    }

    public String toString() {
        return "Component<" + Arrays.toString(this.f55369b.toArray()) + ">{" + this.f55371d + ", type=" + this.f55372e + ", deps=" + Arrays.toString(this.f55370c.toArray()) + "}";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private String f55375a;

        /* renamed from: b  reason: collision with root package name */
        private final Set f55376b;

        /* renamed from: c  reason: collision with root package name */
        private final Set f55377c;

        /* renamed from: d  reason: collision with root package name */
        private int f55378d;

        /* renamed from: e  reason: collision with root package name */
        private int f55379e;

        /* renamed from: f  reason: collision with root package name */
        private g f55380f;

        /* renamed from: g  reason: collision with root package name */
        private final Set f55381g;

        /* JADX INFO: Access modifiers changed from: private */
        public b f() {
            this.f55379e = 1;
            return this;
        }

        private b h(int i10) {
            boolean z10;
            if (this.f55378d == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Instantiation type has already been set.");
            this.f55378d = i10;
            return this;
        }

        private void i(d0 d0Var) {
            c0.a(!this.f55376b.contains(d0Var), "Components are not allowed to depend on interfaces they themselves provide.");
        }

        public b b(q qVar) {
            c0.c(qVar, "Null dependency");
            i(qVar.b());
            this.f55377c.add(qVar);
            return this;
        }

        public b c() {
            return h(1);
        }

        public c d() {
            boolean z10;
            if (this.f55380f != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Missing required property: factory.");
            return new c(this.f55375a, new HashSet(this.f55376b), new HashSet(this.f55377c), this.f55378d, this.f55379e, this.f55380f, this.f55381g);
        }

        public b e(g gVar) {
            this.f55380f = (g) c0.c(gVar, "Null factory");
            return this;
        }

        public b g(String str) {
            this.f55375a = str;
            return this;
        }

        private b(Class cls, Class... clsArr) {
            this.f55375a = null;
            HashSet hashSet = new HashSet();
            this.f55376b = hashSet;
            this.f55377c = new HashSet();
            this.f55378d = 0;
            this.f55379e = 0;
            this.f55381g = new HashSet();
            c0.c(cls, "Null interface");
            hashSet.add(d0.b(cls));
            for (Class cls2 : clsArr) {
                c0.c(cls2, "Null interface");
                this.f55376b.add(d0.b(cls2));
            }
        }

        private b(d0 d0Var, d0... d0VarArr) {
            this.f55375a = null;
            HashSet hashSet = new HashSet();
            this.f55376b = hashSet;
            this.f55377c = new HashSet();
            this.f55378d = 0;
            this.f55379e = 0;
            this.f55381g = new HashSet();
            c0.c(d0Var, "Null interface");
            hashSet.add(d0Var);
            for (d0 d0Var2 : d0VarArr) {
                c0.c(d0Var2, "Null interface");
            }
            Collections.addAll(this.f55376b, d0VarArr);
        }
    }

    private c(String str, Set set, Set set2, int i10, int i11, g gVar, Set set3) {
        this.f55368a = str;
        this.f55369b = Collections.unmodifiableSet(set);
        this.f55370c = Collections.unmodifiableSet(set2);
        this.f55371d = i10;
        this.f55372e = i11;
        this.f55373f = gVar;
        this.f55374g = Collections.unmodifiableSet(set3);
    }
}
