package vi;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f52403a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f52404b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f52405c;

    /* renamed from: d  reason: collision with root package name */
    private final int f52406d;

    /* renamed from: e  reason: collision with root package name */
    private final int f52407e;

    /* renamed from: f  reason: collision with root package name */
    private final g f52408f;

    /* renamed from: g  reason: collision with root package name */
    private final Set f52409g;

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
        return m(cls).e(new g() { // from class: vi.a
            @Override // vi.g
            public final Object a(d dVar) {
                return c.b(obj, dVar);
            }
        }).d();
    }

    public static b m(Class cls) {
        return c(cls).f();
    }

    public static c q(final Object obj, Class cls, Class... clsArr) {
        return d(cls, clsArr).e(new g() { // from class: vi.b
            @Override // vi.g
            public final Object a(d dVar) {
                return c.a(obj, dVar);
            }
        }).d();
    }

    public Set g() {
        return this.f52405c;
    }

    public g h() {
        return this.f52408f;
    }

    public String i() {
        return this.f52403a;
    }

    public Set j() {
        return this.f52404b;
    }

    public Set k() {
        return this.f52409g;
    }

    public boolean n() {
        if (this.f52406d == 1) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f52406d == 2) {
            return true;
        }
        return false;
    }

    public boolean p() {
        if (this.f52407e == 0) {
            return true;
        }
        return false;
    }

    public c r(g gVar) {
        return new c(this.f52403a, this.f52404b, this.f52405c, this.f52406d, this.f52407e, gVar, this.f52409g);
    }

    public String toString() {
        return "Component<" + Arrays.toString(this.f52404b.toArray()) + ">{" + this.f52406d + ", type=" + this.f52407e + ", deps=" + Arrays.toString(this.f52405c.toArray()) + "}";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private String f52410a;

        /* renamed from: b  reason: collision with root package name */
        private final Set f52411b;

        /* renamed from: c  reason: collision with root package name */
        private final Set f52412c;

        /* renamed from: d  reason: collision with root package name */
        private int f52413d;

        /* renamed from: e  reason: collision with root package name */
        private int f52414e;

        /* renamed from: f  reason: collision with root package name */
        private g f52415f;

        /* renamed from: g  reason: collision with root package name */
        private final Set f52416g;

        /* JADX INFO: Access modifiers changed from: private */
        public b f() {
            this.f52414e = 1;
            return this;
        }

        private b h(int i10) {
            boolean z10;
            if (this.f52413d == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Instantiation type has already been set.");
            this.f52413d = i10;
            return this;
        }

        private void i(d0 d0Var) {
            c0.a(!this.f52411b.contains(d0Var), "Components are not allowed to depend on interfaces they themselves provide.");
        }

        public b b(q qVar) {
            c0.c(qVar, "Null dependency");
            i(qVar.b());
            this.f52412c.add(qVar);
            return this;
        }

        public b c() {
            return h(1);
        }

        public c d() {
            boolean z10;
            if (this.f52415f != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Missing required property: factory.");
            return new c(this.f52410a, new HashSet(this.f52411b), new HashSet(this.f52412c), this.f52413d, this.f52414e, this.f52415f, this.f52416g);
        }

        public b e(g gVar) {
            this.f52415f = (g) c0.c(gVar, "Null factory");
            return this;
        }

        public b g(String str) {
            this.f52410a = str;
            return this;
        }

        private b(Class cls, Class... clsArr) {
            this.f52410a = null;
            HashSet hashSet = new HashSet();
            this.f52411b = hashSet;
            this.f52412c = new HashSet();
            this.f52413d = 0;
            this.f52414e = 0;
            this.f52416g = new HashSet();
            c0.c(cls, "Null interface");
            hashSet.add(d0.b(cls));
            for (Class cls2 : clsArr) {
                c0.c(cls2, "Null interface");
                this.f52411b.add(d0.b(cls2));
            }
        }

        private b(d0 d0Var, d0... d0VarArr) {
            this.f52410a = null;
            HashSet hashSet = new HashSet();
            this.f52411b = hashSet;
            this.f52412c = new HashSet();
            this.f52413d = 0;
            this.f52414e = 0;
            this.f52416g = new HashSet();
            c0.c(d0Var, "Null interface");
            hashSet.add(d0Var);
            for (d0 d0Var2 : d0VarArr) {
                c0.c(d0Var2, "Null interface");
            }
            Collections.addAll(this.f52411b, d0VarArr);
        }
    }

    private c(String str, Set set, Set set2, int i10, int i11, g gVar, Set set3) {
        this.f52403a = str;
        this.f52404b = Collections.unmodifiableSet(set);
        this.f52405c = Collections.unmodifiableSet(set2);
        this.f52406d = i10;
        this.f52407e = i11;
        this.f52408f = gVar;
        this.f52409g = Collections.unmodifiableSet(set3);
    }
}
