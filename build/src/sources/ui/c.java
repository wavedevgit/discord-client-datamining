package ui;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f51543a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f51544b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f51545c;

    /* renamed from: d  reason: collision with root package name */
    private final int f51546d;

    /* renamed from: e  reason: collision with root package name */
    private final int f51547e;

    /* renamed from: f  reason: collision with root package name */
    private final g f51548f;

    /* renamed from: g  reason: collision with root package name */
    private final Set f51549g;

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
        return m(cls).e(new g() { // from class: ui.a
            @Override // ui.g
            public final Object a(d dVar) {
                return c.b(obj, dVar);
            }
        }).d();
    }

    public static b m(Class cls) {
        return c(cls).f();
    }

    public static c q(final Object obj, Class cls, Class... clsArr) {
        return d(cls, clsArr).e(new g() { // from class: ui.b
            @Override // ui.g
            public final Object a(d dVar) {
                return c.a(obj, dVar);
            }
        }).d();
    }

    public Set g() {
        return this.f51545c;
    }

    public g h() {
        return this.f51548f;
    }

    public String i() {
        return this.f51543a;
    }

    public Set j() {
        return this.f51544b;
    }

    public Set k() {
        return this.f51549g;
    }

    public boolean n() {
        if (this.f51546d == 1) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f51546d == 2) {
            return true;
        }
        return false;
    }

    public boolean p() {
        if (this.f51547e == 0) {
            return true;
        }
        return false;
    }

    public c r(g gVar) {
        return new c(this.f51543a, this.f51544b, this.f51545c, this.f51546d, this.f51547e, gVar, this.f51549g);
    }

    public String toString() {
        return "Component<" + Arrays.toString(this.f51544b.toArray()) + ">{" + this.f51546d + ", type=" + this.f51547e + ", deps=" + Arrays.toString(this.f51545c.toArray()) + "}";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private String f51550a;

        /* renamed from: b  reason: collision with root package name */
        private final Set f51551b;

        /* renamed from: c  reason: collision with root package name */
        private final Set f51552c;

        /* renamed from: d  reason: collision with root package name */
        private int f51553d;

        /* renamed from: e  reason: collision with root package name */
        private int f51554e;

        /* renamed from: f  reason: collision with root package name */
        private g f51555f;

        /* renamed from: g  reason: collision with root package name */
        private final Set f51556g;

        /* JADX INFO: Access modifiers changed from: private */
        public b f() {
            this.f51554e = 1;
            return this;
        }

        private b h(int i10) {
            boolean z10;
            if (this.f51553d == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Instantiation type has already been set.");
            this.f51553d = i10;
            return this;
        }

        private void i(d0 d0Var) {
            c0.a(!this.f51551b.contains(d0Var), "Components are not allowed to depend on interfaces they themselves provide.");
        }

        public b b(q qVar) {
            c0.c(qVar, "Null dependency");
            i(qVar.b());
            this.f51552c.add(qVar);
            return this;
        }

        public b c() {
            return h(1);
        }

        public c d() {
            boolean z10;
            if (this.f51555f != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Missing required property: factory.");
            return new c(this.f51550a, new HashSet(this.f51551b), new HashSet(this.f51552c), this.f51553d, this.f51554e, this.f51555f, this.f51556g);
        }

        public b e(g gVar) {
            this.f51555f = (g) c0.c(gVar, "Null factory");
            return this;
        }

        public b g(String str) {
            this.f51550a = str;
            return this;
        }

        private b(Class cls, Class... clsArr) {
            this.f51550a = null;
            HashSet hashSet = new HashSet();
            this.f51551b = hashSet;
            this.f51552c = new HashSet();
            this.f51553d = 0;
            this.f51554e = 0;
            this.f51556g = new HashSet();
            c0.c(cls, "Null interface");
            hashSet.add(d0.b(cls));
            for (Class cls2 : clsArr) {
                c0.c(cls2, "Null interface");
                this.f51551b.add(d0.b(cls2));
            }
        }

        private b(d0 d0Var, d0... d0VarArr) {
            this.f51550a = null;
            HashSet hashSet = new HashSet();
            this.f51551b = hashSet;
            this.f51552c = new HashSet();
            this.f51553d = 0;
            this.f51554e = 0;
            this.f51556g = new HashSet();
            c0.c(d0Var, "Null interface");
            hashSet.add(d0Var);
            for (d0 d0Var2 : d0VarArr) {
                c0.c(d0Var2, "Null interface");
            }
            Collections.addAll(this.f51551b, d0VarArr);
        }
    }

    private c(String str, Set set, Set set2, int i10, int i11, g gVar, Set set3) {
        this.f51543a = str;
        this.f51544b = Collections.unmodifiableSet(set);
        this.f51545c = Collections.unmodifiableSet(set2);
        this.f51546d = i10;
        this.f51547e = i11;
        this.f51548f = gVar;
        this.f51549g = Collections.unmodifiableSet(set3);
    }
}
