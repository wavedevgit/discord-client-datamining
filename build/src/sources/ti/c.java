package ti;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f50687a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f50688b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f50689c;

    /* renamed from: d  reason: collision with root package name */
    private final int f50690d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50691e;

    /* renamed from: f  reason: collision with root package name */
    private final g f50692f;

    /* renamed from: g  reason: collision with root package name */
    private final Set f50693g;

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
        return m(cls).e(new g() { // from class: ti.a
            @Override // ti.g
            public final Object a(d dVar) {
                return c.b(obj, dVar);
            }
        }).d();
    }

    public static b m(Class cls) {
        return c(cls).f();
    }

    public static c q(final Object obj, Class cls, Class... clsArr) {
        return d(cls, clsArr).e(new g() { // from class: ti.b
            @Override // ti.g
            public final Object a(d dVar) {
                return c.a(obj, dVar);
            }
        }).d();
    }

    public Set g() {
        return this.f50689c;
    }

    public g h() {
        return this.f50692f;
    }

    public String i() {
        return this.f50687a;
    }

    public Set j() {
        return this.f50688b;
    }

    public Set k() {
        return this.f50693g;
    }

    public boolean n() {
        if (this.f50690d == 1) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f50690d == 2) {
            return true;
        }
        return false;
    }

    public boolean p() {
        if (this.f50691e == 0) {
            return true;
        }
        return false;
    }

    public c r(g gVar) {
        return new c(this.f50687a, this.f50688b, this.f50689c, this.f50690d, this.f50691e, gVar, this.f50693g);
    }

    public String toString() {
        return "Component<" + Arrays.toString(this.f50688b.toArray()) + ">{" + this.f50690d + ", type=" + this.f50691e + ", deps=" + Arrays.toString(this.f50689c.toArray()) + "}";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private String f50694a;

        /* renamed from: b  reason: collision with root package name */
        private final Set f50695b;

        /* renamed from: c  reason: collision with root package name */
        private final Set f50696c;

        /* renamed from: d  reason: collision with root package name */
        private int f50697d;

        /* renamed from: e  reason: collision with root package name */
        private int f50698e;

        /* renamed from: f  reason: collision with root package name */
        private g f50699f;

        /* renamed from: g  reason: collision with root package name */
        private final Set f50700g;

        /* JADX INFO: Access modifiers changed from: private */
        public b f() {
            this.f50698e = 1;
            return this;
        }

        private b h(int i10) {
            boolean z10;
            if (this.f50697d == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Instantiation type has already been set.");
            this.f50697d = i10;
            return this;
        }

        private void i(d0 d0Var) {
            c0.a(!this.f50695b.contains(d0Var), "Components are not allowed to depend on interfaces they themselves provide.");
        }

        public b b(q qVar) {
            c0.c(qVar, "Null dependency");
            i(qVar.b());
            this.f50696c.add(qVar);
            return this;
        }

        public b c() {
            return h(1);
        }

        public c d() {
            boolean z10;
            if (this.f50699f != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Missing required property: factory.");
            return new c(this.f50694a, new HashSet(this.f50695b), new HashSet(this.f50696c), this.f50697d, this.f50698e, this.f50699f, this.f50700g);
        }

        public b e(g gVar) {
            this.f50699f = (g) c0.c(gVar, "Null factory");
            return this;
        }

        public b g(String str) {
            this.f50694a = str;
            return this;
        }

        private b(Class cls, Class... clsArr) {
            this.f50694a = null;
            HashSet hashSet = new HashSet();
            this.f50695b = hashSet;
            this.f50696c = new HashSet();
            this.f50697d = 0;
            this.f50698e = 0;
            this.f50700g = new HashSet();
            c0.c(cls, "Null interface");
            hashSet.add(d0.b(cls));
            for (Class cls2 : clsArr) {
                c0.c(cls2, "Null interface");
                this.f50695b.add(d0.b(cls2));
            }
        }

        private b(d0 d0Var, d0... d0VarArr) {
            this.f50694a = null;
            HashSet hashSet = new HashSet();
            this.f50695b = hashSet;
            this.f50696c = new HashSet();
            this.f50697d = 0;
            this.f50698e = 0;
            this.f50700g = new HashSet();
            c0.c(d0Var, "Null interface");
            hashSet.add(d0Var);
            for (d0 d0Var2 : d0VarArr) {
                c0.c(d0Var2, "Null interface");
            }
            Collections.addAll(this.f50695b, d0VarArr);
        }
    }

    private c(String str, Set set, Set set2, int i10, int i11, g gVar, Set set3) {
        this.f50687a = str;
        this.f50688b = Collections.unmodifiableSet(set);
        this.f50689c = Collections.unmodifiableSet(set2);
        this.f50690d = i10;
        this.f50691e = i11;
        this.f50692f = gVar;
        this.f50693g = Collections.unmodifiableSet(set3);
    }
}
