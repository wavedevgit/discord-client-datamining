package qi;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f47418a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f47419b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f47420c;

    /* renamed from: d  reason: collision with root package name */
    private final int f47421d;

    /* renamed from: e  reason: collision with root package name */
    private final int f47422e;

    /* renamed from: f  reason: collision with root package name */
    private final g f47423f;

    /* renamed from: g  reason: collision with root package name */
    private final Set f47424g;

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
        return this.f47420c;
    }

    public g h() {
        return this.f47423f;
    }

    public String i() {
        return this.f47418a;
    }

    public Set j() {
        return this.f47419b;
    }

    public Set k() {
        return this.f47424g;
    }

    public boolean n() {
        if (this.f47421d == 1) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f47421d == 2) {
            return true;
        }
        return false;
    }

    public boolean p() {
        if (this.f47422e == 0) {
            return true;
        }
        return false;
    }

    public c r(g gVar) {
        return new c(this.f47418a, this.f47419b, this.f47420c, this.f47421d, this.f47422e, gVar, this.f47424g);
    }

    public String toString() {
        return "Component<" + Arrays.toString(this.f47419b.toArray()) + ">{" + this.f47421d + ", type=" + this.f47422e + ", deps=" + Arrays.toString(this.f47420c.toArray()) + "}";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private String f47425a;

        /* renamed from: b  reason: collision with root package name */
        private final Set f47426b;

        /* renamed from: c  reason: collision with root package name */
        private final Set f47427c;

        /* renamed from: d  reason: collision with root package name */
        private int f47428d;

        /* renamed from: e  reason: collision with root package name */
        private int f47429e;

        /* renamed from: f  reason: collision with root package name */
        private g f47430f;

        /* renamed from: g  reason: collision with root package name */
        private final Set f47431g;

        /* JADX INFO: Access modifiers changed from: private */
        public b f() {
            this.f47429e = 1;
            return this;
        }

        private b h(int i10) {
            boolean z10;
            if (this.f47428d == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Instantiation type has already been set.");
            this.f47428d = i10;
            return this;
        }

        private void i(d0 d0Var) {
            c0.a(!this.f47426b.contains(d0Var), "Components are not allowed to depend on interfaces they themselves provide.");
        }

        public b b(q qVar) {
            c0.c(qVar, "Null dependency");
            i(qVar.b());
            this.f47427c.add(qVar);
            return this;
        }

        public b c() {
            return h(1);
        }

        public c d() {
            boolean z10;
            if (this.f47430f != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Missing required property: factory.");
            return new c(this.f47425a, new HashSet(this.f47426b), new HashSet(this.f47427c), this.f47428d, this.f47429e, this.f47430f, this.f47431g);
        }

        public b e(g gVar) {
            this.f47430f = (g) c0.c(gVar, "Null factory");
            return this;
        }

        public b g(String str) {
            this.f47425a = str;
            return this;
        }

        private b(Class cls, Class... clsArr) {
            this.f47425a = null;
            HashSet hashSet = new HashSet();
            this.f47426b = hashSet;
            this.f47427c = new HashSet();
            this.f47428d = 0;
            this.f47429e = 0;
            this.f47431g = new HashSet();
            c0.c(cls, "Null interface");
            hashSet.add(d0.b(cls));
            for (Class cls2 : clsArr) {
                c0.c(cls2, "Null interface");
                this.f47426b.add(d0.b(cls2));
            }
        }

        private b(d0 d0Var, d0... d0VarArr) {
            this.f47425a = null;
            HashSet hashSet = new HashSet();
            this.f47426b = hashSet;
            this.f47427c = new HashSet();
            this.f47428d = 0;
            this.f47429e = 0;
            this.f47431g = new HashSet();
            c0.c(d0Var, "Null interface");
            hashSet.add(d0Var);
            for (d0 d0Var2 : d0VarArr) {
                c0.c(d0Var2, "Null interface");
            }
            Collections.addAll(this.f47426b, d0VarArr);
        }
    }

    private c(String str, Set set, Set set2, int i10, int i11, g gVar, Set set3) {
        this.f47418a = str;
        this.f47419b = Collections.unmodifiableSet(set);
        this.f47420c = Collections.unmodifiableSet(set2);
        this.f47421d = i10;
        this.f47422e = i11;
        this.f47423f = gVar;
        this.f47424g = Collections.unmodifiableSet(set3);
    }
}
