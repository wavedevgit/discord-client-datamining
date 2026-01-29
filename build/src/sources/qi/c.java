package qi;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f47402a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f47403b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f47404c;

    /* renamed from: d  reason: collision with root package name */
    private final int f47405d;

    /* renamed from: e  reason: collision with root package name */
    private final int f47406e;

    /* renamed from: f  reason: collision with root package name */
    private final g f47407f;

    /* renamed from: g  reason: collision with root package name */
    private final Set f47408g;

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
        return m(cls).e(new g() { // from class: qi.a
            @Override // qi.g
            public final Object a(d dVar) {
                return c.b(obj, dVar);
            }
        }).d();
    }

    public static b m(Class cls) {
        return c(cls).f();
    }

    public static c q(final Object obj, Class cls, Class... clsArr) {
        return d(cls, clsArr).e(new g() { // from class: qi.b
            @Override // qi.g
            public final Object a(d dVar) {
                return c.a(obj, dVar);
            }
        }).d();
    }

    public Set g() {
        return this.f47404c;
    }

    public g h() {
        return this.f47407f;
    }

    public String i() {
        return this.f47402a;
    }

    public Set j() {
        return this.f47403b;
    }

    public Set k() {
        return this.f47408g;
    }

    public boolean n() {
        if (this.f47405d == 1) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f47405d == 2) {
            return true;
        }
        return false;
    }

    public boolean p() {
        if (this.f47406e == 0) {
            return true;
        }
        return false;
    }

    public c r(g gVar) {
        return new c(this.f47402a, this.f47403b, this.f47404c, this.f47405d, this.f47406e, gVar, this.f47408g);
    }

    public String toString() {
        return "Component<" + Arrays.toString(this.f47403b.toArray()) + ">{" + this.f47405d + ", type=" + this.f47406e + ", deps=" + Arrays.toString(this.f47404c.toArray()) + "}";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private String f47409a;

        /* renamed from: b  reason: collision with root package name */
        private final Set f47410b;

        /* renamed from: c  reason: collision with root package name */
        private final Set f47411c;

        /* renamed from: d  reason: collision with root package name */
        private int f47412d;

        /* renamed from: e  reason: collision with root package name */
        private int f47413e;

        /* renamed from: f  reason: collision with root package name */
        private g f47414f;

        /* renamed from: g  reason: collision with root package name */
        private final Set f47415g;

        /* JADX INFO: Access modifiers changed from: private */
        public b f() {
            this.f47413e = 1;
            return this;
        }

        private b h(int i10) {
            boolean z10;
            if (this.f47412d == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Instantiation type has already been set.");
            this.f47412d = i10;
            return this;
        }

        private void i(d0 d0Var) {
            c0.a(!this.f47410b.contains(d0Var), "Components are not allowed to depend on interfaces they themselves provide.");
        }

        public b b(q qVar) {
            c0.c(qVar, "Null dependency");
            i(qVar.b());
            this.f47411c.add(qVar);
            return this;
        }

        public b c() {
            return h(1);
        }

        public c d() {
            boolean z10;
            if (this.f47414f != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Missing required property: factory.");
            return new c(this.f47409a, new HashSet(this.f47410b), new HashSet(this.f47411c), this.f47412d, this.f47413e, this.f47414f, this.f47415g);
        }

        public b e(g gVar) {
            this.f47414f = (g) c0.c(gVar, "Null factory");
            return this;
        }

        public b g(String str) {
            this.f47409a = str;
            return this;
        }

        private b(Class cls, Class... clsArr) {
            this.f47409a = null;
            HashSet hashSet = new HashSet();
            this.f47410b = hashSet;
            this.f47411c = new HashSet();
            this.f47412d = 0;
            this.f47413e = 0;
            this.f47415g = new HashSet();
            c0.c(cls, "Null interface");
            hashSet.add(d0.b(cls));
            for (Class cls2 : clsArr) {
                c0.c(cls2, "Null interface");
                this.f47410b.add(d0.b(cls2));
            }
        }

        private b(d0 d0Var, d0... d0VarArr) {
            this.f47409a = null;
            HashSet hashSet = new HashSet();
            this.f47410b = hashSet;
            this.f47411c = new HashSet();
            this.f47412d = 0;
            this.f47413e = 0;
            this.f47415g = new HashSet();
            c0.c(d0Var, "Null interface");
            hashSet.add(d0Var);
            for (d0 d0Var2 : d0VarArr) {
                c0.c(d0Var2, "Null interface");
            }
            Collections.addAll(this.f47410b, d0VarArr);
        }
    }

    private c(String str, Set set, Set set2, int i10, int i11, g gVar, Set set3) {
        this.f47402a = str;
        this.f47403b = Collections.unmodifiableSet(set);
        this.f47404c = Collections.unmodifiableSet(set2);
        this.f47405d = i10;
        this.f47406e = i11;
        this.f47407f = gVar;
        this.f47408g = Collections.unmodifiableSet(set3);
    }
}
