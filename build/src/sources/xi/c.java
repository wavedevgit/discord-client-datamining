package xi;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f54800a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f54801b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f54802c;

    /* renamed from: d  reason: collision with root package name */
    private final int f54803d;

    /* renamed from: e  reason: collision with root package name */
    private final int f54804e;

    /* renamed from: f  reason: collision with root package name */
    private final g f54805f;

    /* renamed from: g  reason: collision with root package name */
    private final Set f54806g;

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
        return this.f54802c;
    }

    public g h() {
        return this.f54805f;
    }

    public String i() {
        return this.f54800a;
    }

    public Set j() {
        return this.f54801b;
    }

    public Set k() {
        return this.f54806g;
    }

    public boolean n() {
        if (this.f54803d == 1) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f54803d == 2) {
            return true;
        }
        return false;
    }

    public boolean p() {
        if (this.f54804e == 0) {
            return true;
        }
        return false;
    }

    public c r(g gVar) {
        return new c(this.f54800a, this.f54801b, this.f54802c, this.f54803d, this.f54804e, gVar, this.f54806g);
    }

    public String toString() {
        return "Component<" + Arrays.toString(this.f54801b.toArray()) + ">{" + this.f54803d + ", type=" + this.f54804e + ", deps=" + Arrays.toString(this.f54802c.toArray()) + "}";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private String f54807a;

        /* renamed from: b  reason: collision with root package name */
        private final Set f54808b;

        /* renamed from: c  reason: collision with root package name */
        private final Set f54809c;

        /* renamed from: d  reason: collision with root package name */
        private int f54810d;

        /* renamed from: e  reason: collision with root package name */
        private int f54811e;

        /* renamed from: f  reason: collision with root package name */
        private g f54812f;

        /* renamed from: g  reason: collision with root package name */
        private final Set f54813g;

        /* JADX INFO: Access modifiers changed from: private */
        public b f() {
            this.f54811e = 1;
            return this;
        }

        private b h(int i10) {
            boolean z10;
            if (this.f54810d == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Instantiation type has already been set.");
            this.f54810d = i10;
            return this;
        }

        private void i(d0 d0Var) {
            c0.a(!this.f54808b.contains(d0Var), "Components are not allowed to depend on interfaces they themselves provide.");
        }

        public b b(q qVar) {
            c0.c(qVar, "Null dependency");
            i(qVar.b());
            this.f54809c.add(qVar);
            return this;
        }

        public b c() {
            return h(1);
        }

        public c d() {
            boolean z10;
            if (this.f54812f != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Missing required property: factory.");
            return new c(this.f54807a, new HashSet(this.f54808b), new HashSet(this.f54809c), this.f54810d, this.f54811e, this.f54812f, this.f54813g);
        }

        public b e(g gVar) {
            this.f54812f = (g) c0.c(gVar, "Null factory");
            return this;
        }

        public b g(String str) {
            this.f54807a = str;
            return this;
        }

        private b(Class cls, Class... clsArr) {
            this.f54807a = null;
            HashSet hashSet = new HashSet();
            this.f54808b = hashSet;
            this.f54809c = new HashSet();
            this.f54810d = 0;
            this.f54811e = 0;
            this.f54813g = new HashSet();
            c0.c(cls, "Null interface");
            hashSet.add(d0.b(cls));
            for (Class cls2 : clsArr) {
                c0.c(cls2, "Null interface");
                this.f54808b.add(d0.b(cls2));
            }
        }

        private b(d0 d0Var, d0... d0VarArr) {
            this.f54807a = null;
            HashSet hashSet = new HashSet();
            this.f54808b = hashSet;
            this.f54809c = new HashSet();
            this.f54810d = 0;
            this.f54811e = 0;
            this.f54813g = new HashSet();
            c0.c(d0Var, "Null interface");
            hashSet.add(d0Var);
            for (d0 d0Var2 : d0VarArr) {
                c0.c(d0Var2, "Null interface");
            }
            Collections.addAll(this.f54808b, d0VarArr);
        }
    }

    private c(String str, Set set, Set set2, int i10, int i11, g gVar, Set set3) {
        this.f54800a = str;
        this.f54801b = Collections.unmodifiableSet(set);
        this.f54802c = Collections.unmodifiableSet(set2);
        this.f54803d = i10;
        this.f54804e = i11;
        this.f54805f = gVar;
        this.f54806g = Collections.unmodifiableSet(set3);
    }
}
