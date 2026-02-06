package ui;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f51495a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f51496b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f51497c;

    /* renamed from: d  reason: collision with root package name */
    private final int f51498d;

    /* renamed from: e  reason: collision with root package name */
    private final int f51499e;

    /* renamed from: f  reason: collision with root package name */
    private final g f51500f;

    /* renamed from: g  reason: collision with root package name */
    private final Set f51501g;

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
        return this.f51497c;
    }

    public g h() {
        return this.f51500f;
    }

    public String i() {
        return this.f51495a;
    }

    public Set j() {
        return this.f51496b;
    }

    public Set k() {
        return this.f51501g;
    }

    public boolean n() {
        if (this.f51498d == 1) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f51498d == 2) {
            return true;
        }
        return false;
    }

    public boolean p() {
        if (this.f51499e == 0) {
            return true;
        }
        return false;
    }

    public c r(g gVar) {
        return new c(this.f51495a, this.f51496b, this.f51497c, this.f51498d, this.f51499e, gVar, this.f51501g);
    }

    public String toString() {
        return "Component<" + Arrays.toString(this.f51496b.toArray()) + ">{" + this.f51498d + ", type=" + this.f51499e + ", deps=" + Arrays.toString(this.f51497c.toArray()) + "}";
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private String f51502a;

        /* renamed from: b  reason: collision with root package name */
        private final Set f51503b;

        /* renamed from: c  reason: collision with root package name */
        private final Set f51504c;

        /* renamed from: d  reason: collision with root package name */
        private int f51505d;

        /* renamed from: e  reason: collision with root package name */
        private int f51506e;

        /* renamed from: f  reason: collision with root package name */
        private g f51507f;

        /* renamed from: g  reason: collision with root package name */
        private final Set f51508g;

        /* JADX INFO: Access modifiers changed from: private */
        public b f() {
            this.f51506e = 1;
            return this;
        }

        private b h(int i10) {
            boolean z10;
            if (this.f51505d == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Instantiation type has already been set.");
            this.f51505d = i10;
            return this;
        }

        private void i(d0 d0Var) {
            c0.a(!this.f51503b.contains(d0Var), "Components are not allowed to depend on interfaces they themselves provide.");
        }

        public b b(q qVar) {
            c0.c(qVar, "Null dependency");
            i(qVar.b());
            this.f51504c.add(qVar);
            return this;
        }

        public b c() {
            return h(1);
        }

        public c d() {
            boolean z10;
            if (this.f51507f != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0.d(z10, "Missing required property: factory.");
            return new c(this.f51502a, new HashSet(this.f51503b), new HashSet(this.f51504c), this.f51505d, this.f51506e, this.f51507f, this.f51508g);
        }

        public b e(g gVar) {
            this.f51507f = (g) c0.c(gVar, "Null factory");
            return this;
        }

        public b g(String str) {
            this.f51502a = str;
            return this;
        }

        private b(Class cls, Class... clsArr) {
            this.f51502a = null;
            HashSet hashSet = new HashSet();
            this.f51503b = hashSet;
            this.f51504c = new HashSet();
            this.f51505d = 0;
            this.f51506e = 0;
            this.f51508g = new HashSet();
            c0.c(cls, "Null interface");
            hashSet.add(d0.b(cls));
            for (Class cls2 : clsArr) {
                c0.c(cls2, "Null interface");
                this.f51503b.add(d0.b(cls2));
            }
        }

        private b(d0 d0Var, d0... d0VarArr) {
            this.f51502a = null;
            HashSet hashSet = new HashSet();
            this.f51503b = hashSet;
            this.f51504c = new HashSet();
            this.f51505d = 0;
            this.f51506e = 0;
            this.f51508g = new HashSet();
            c0.c(d0Var, "Null interface");
            hashSet.add(d0Var);
            for (d0 d0Var2 : d0VarArr) {
                c0.c(d0Var2, "Null interface");
            }
            Collections.addAll(this.f51503b, d0VarArr);
        }
    }

    private c(String str, Set set, Set set2, int i10, int i11, g gVar, Set set3) {
        this.f51495a = str;
        this.f51496b = Collections.unmodifiableSet(set);
        this.f51497c = Collections.unmodifiableSet(set2);
        this.f51498d = i10;
        this.f51499e = i11;
        this.f51500f = gVar;
        this.f51501g = Collections.unmodifiableSet(set3);
    }
}
