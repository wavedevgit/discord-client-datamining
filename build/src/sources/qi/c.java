package qi;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f47823a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f47824b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f47825c;

    /* renamed from: d  reason: collision with root package name */
    private final int f47826d;

    /* renamed from: e  reason: collision with root package name */
    private final int f47827e;

    /* renamed from: f  reason: collision with root package name */
    private final g f47828f;

    /* renamed from: g  reason: collision with root package name */
    private final Set f47829g;

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
        return this.f47825c;
    }

    public g h() {
        return this.f47828f;
    }

    public String i() {
        return this.f47823a;
    }

    public Set j() {
        return this.f47824b;
    }

    public Set k() {
        return this.f47829g;
    }

    public boolean n() {
        if (this.f47826d == 1) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f47826d == 2) {
            return true;
        }
        return false;
    }

    public boolean p() {
        if (this.f47827e == 0) {
            return true;
        }
        return false;
    }

    public c r(g gVar) {
        return new c(this.f47823a, this.f47824b, this.f47825c, this.f47826d, this.f47827e, gVar, this.f47829g);
    }

    public String toString() {
        return "Component<" + Arrays.toString(this.f47824b.toArray()) + ">{" + this.f47826d + ", type=" + this.f47827e + ", deps=" + Arrays.toString(this.f47825c.toArray()) + "}";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private String f47830a;

        /* renamed from: b  reason: collision with root package name */
        private final Set f47831b;

        /* renamed from: c  reason: collision with root package name */
        private final Set f47832c;

        /* renamed from: d  reason: collision with root package name */
        private int f47833d;

        /* renamed from: e  reason: collision with root package name */
        private int f47834e;

        /* renamed from: f  reason: collision with root package name */
        private g f47835f;

        /* renamed from: g  reason: collision with root package name */
        private final Set f47836g;

        /* JADX INFO: Access modifiers changed from: private */
        public b f() {
            this.f47834e = 1;
            return this;
        }

        private b h(int i10) {
            boolean z10;
            if (this.f47833d == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Instantiation type has already been set.");
            this.f47833d = i10;
            return this;
        }

        private void i(d0 d0Var) {
            c0.a(!this.f47831b.contains(d0Var), "Components are not allowed to depend on interfaces they themselves provide.");
        }

        public b b(q qVar) {
            c0.c(qVar, "Null dependency");
            i(qVar.b());
            this.f47832c.add(qVar);
            return this;
        }

        public b c() {
            return h(1);
        }

        public c d() {
            boolean z10;
            if (this.f47835f != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Missing required property: factory.");
            return new c(this.f47830a, new HashSet(this.f47831b), new HashSet(this.f47832c), this.f47833d, this.f47834e, this.f47835f, this.f47836g);
        }

        public b e(g gVar) {
            this.f47835f = (g) c0.c(gVar, "Null factory");
            return this;
        }

        public b g(String str) {
            this.f47830a = str;
            return this;
        }

        private b(Class cls, Class... clsArr) {
            this.f47830a = null;
            HashSet hashSet = new HashSet();
            this.f47831b = hashSet;
            this.f47832c = new HashSet();
            this.f47833d = 0;
            this.f47834e = 0;
            this.f47836g = new HashSet();
            c0.c(cls, "Null interface");
            hashSet.add(d0.b(cls));
            for (Class cls2 : clsArr) {
                c0.c(cls2, "Null interface");
                this.f47831b.add(d0.b(cls2));
            }
        }

        private b(d0 d0Var, d0... d0VarArr) {
            this.f47830a = null;
            HashSet hashSet = new HashSet();
            this.f47831b = hashSet;
            this.f47832c = new HashSet();
            this.f47833d = 0;
            this.f47834e = 0;
            this.f47836g = new HashSet();
            c0.c(d0Var, "Null interface");
            hashSet.add(d0Var);
            for (d0 d0Var2 : d0VarArr) {
                c0.c(d0Var2, "Null interface");
            }
            Collections.addAll(this.f47831b, d0VarArr);
        }
    }

    private c(String str, Set set, Set set2, int i10, int i11, g gVar, Set set3) {
        this.f47823a = str;
        this.f47824b = Collections.unmodifiableSet(set);
        this.f47825c = Collections.unmodifiableSet(set2);
        this.f47826d = i10;
        this.f47827e = i11;
        this.f47828f = gVar;
        this.f47829g = Collections.unmodifiableSet(set3);
    }
}
