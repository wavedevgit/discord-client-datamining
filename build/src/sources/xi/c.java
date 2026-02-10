package xi;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f54799a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f54800b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f54801c;

    /* renamed from: d  reason: collision with root package name */
    private final int f54802d;

    /* renamed from: e  reason: collision with root package name */
    private final int f54803e;

    /* renamed from: f  reason: collision with root package name */
    private final g f54804f;

    /* renamed from: g  reason: collision with root package name */
    private final Set f54805g;

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
        return this.f54801c;
    }

    public g h() {
        return this.f54804f;
    }

    public String i() {
        return this.f54799a;
    }

    public Set j() {
        return this.f54800b;
    }

    public Set k() {
        return this.f54805g;
    }

    public boolean n() {
        if (this.f54802d == 1) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f54802d == 2) {
            return true;
        }
        return false;
    }

    public boolean p() {
        if (this.f54803e == 0) {
            return true;
        }
        return false;
    }

    public c r(g gVar) {
        return new c(this.f54799a, this.f54800b, this.f54801c, this.f54802d, this.f54803e, gVar, this.f54805g);
    }

    public String toString() {
        return "Component<" + Arrays.toString(this.f54800b.toArray()) + ">{" + this.f54802d + ", type=" + this.f54803e + ", deps=" + Arrays.toString(this.f54801c.toArray()) + "}";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private String f54806a;

        /* renamed from: b  reason: collision with root package name */
        private final Set f54807b;

        /* renamed from: c  reason: collision with root package name */
        private final Set f54808c;

        /* renamed from: d  reason: collision with root package name */
        private int f54809d;

        /* renamed from: e  reason: collision with root package name */
        private int f54810e;

        /* renamed from: f  reason: collision with root package name */
        private g f54811f;

        /* renamed from: g  reason: collision with root package name */
        private final Set f54812g;

        /* JADX INFO: Access modifiers changed from: private */
        public b f() {
            this.f54810e = 1;
            return this;
        }

        private b h(int i10) {
            boolean z10;
            if (this.f54809d == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Instantiation type has already been set.");
            this.f54809d = i10;
            return this;
        }

        private void i(d0 d0Var) {
            c0.a(!this.f54807b.contains(d0Var), "Components are not allowed to depend on interfaces they themselves provide.");
        }

        public b b(q qVar) {
            c0.c(qVar, "Null dependency");
            i(qVar.b());
            this.f54808c.add(qVar);
            return this;
        }

        public b c() {
            return h(1);
        }

        public c d() {
            boolean z10;
            if (this.f54811f != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Missing required property: factory.");
            return new c(this.f54806a, new HashSet(this.f54807b), new HashSet(this.f54808c), this.f54809d, this.f54810e, this.f54811f, this.f54812g);
        }

        public b e(g gVar) {
            this.f54811f = (g) c0.c(gVar, "Null factory");
            return this;
        }

        public b g(String str) {
            this.f54806a = str;
            return this;
        }

        private b(Class cls, Class... clsArr) {
            this.f54806a = null;
            HashSet hashSet = new HashSet();
            this.f54807b = hashSet;
            this.f54808c = new HashSet();
            this.f54809d = 0;
            this.f54810e = 0;
            this.f54812g = new HashSet();
            c0.c(cls, "Null interface");
            hashSet.add(d0.b(cls));
            for (Class cls2 : clsArr) {
                c0.c(cls2, "Null interface");
                this.f54807b.add(d0.b(cls2));
            }
        }

        private b(d0 d0Var, d0... d0VarArr) {
            this.f54806a = null;
            HashSet hashSet = new HashSet();
            this.f54807b = hashSet;
            this.f54808c = new HashSet();
            this.f54809d = 0;
            this.f54810e = 0;
            this.f54812g = new HashSet();
            c0.c(d0Var, "Null interface");
            hashSet.add(d0Var);
            for (d0 d0Var2 : d0VarArr) {
                c0.c(d0Var2, "Null interface");
            }
            Collections.addAll(this.f54807b, d0VarArr);
        }
    }

    private c(String str, Set set, Set set2, int i10, int i11, g gVar, Set set3) {
        this.f54799a = str;
        this.f54800b = Collections.unmodifiableSet(set);
        this.f54801c = Collections.unmodifiableSet(set2);
        this.f54802d = i10;
        this.f54803e = i11;
        this.f54804f = gVar;
        this.f54805g = Collections.unmodifiableSet(set3);
    }
}
