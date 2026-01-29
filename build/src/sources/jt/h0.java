package jt;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import jt.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h0 extends x implements i0 {
    private final p A;
    private final i0 B;

    /* renamed from: s  reason: collision with root package name */
    private final Class f32751s;

    /* renamed from: t  reason: collision with root package name */
    private final Map f32752t;

    /* renamed from: u  reason: collision with root package name */
    private final Map f32753u;

    /* renamed from: v  reason: collision with root package name */
    private final Map f32754v;

    /* renamed from: w  reason: collision with root package name */
    private final Map f32755w;

    /* renamed from: x  reason: collision with root package name */
    private final k0 f32756x;

    /* renamed from: y  reason: collision with root package name */
    private final k0 f32757y;

    /* renamed from: z  reason: collision with root package name */
    private final k f32758z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements Comparator {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Map f32759d;

        a(Map map) {
            this.f32759d = map;
        }

        @Override // java.util.Comparator
        public int compare(Object obj, Object obj2) {
            return Double.compare(h0.O(this.f32759d, obj), h0.O(this.f32759d, obj2));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends x.a {

        /* renamed from: f  reason: collision with root package name */
        private final Class f32761f;

        /* renamed from: g  reason: collision with root package name */
        private final Map f32762g;

        /* renamed from: h  reason: collision with root package name */
        private final Map f32763h;

        /* renamed from: i  reason: collision with root package name */
        private final Map f32764i;

        /* renamed from: j  reason: collision with root package name */
        private final Map f32765j;

        /* renamed from: k  reason: collision with root package name */
        private final k0 f32766k;

        /* renamed from: l  reason: collision with root package name */
        private final k0 f32767l;

        /* renamed from: m  reason: collision with root package name */
        private final k f32768m;

        /* renamed from: n  reason: collision with root package name */
        private i0 f32769n;

        private b(Class cls, Class cls2, u uVar, k0 k0Var, k0 k0Var2, k kVar, i0 i0Var) {
            super(cls2, uVar);
            this.f32769n = null;
            if (cls != null) {
                if (k0Var != null) {
                    if (k0Var2 != null) {
                        if (m.class.isAssignableFrom(cls2) && kVar == null) {
                            throw new NullPointerException("Missing calendar system.");
                        }
                        this.f32761f = cls;
                        this.f32762g = new HashMap();
                        this.f32763h = new HashMap();
                        this.f32764i = new HashMap();
                        this.f32765j = new HashMap();
                        this.f32766k = k0Var;
                        this.f32767l = k0Var2;
                        this.f32768m = kVar;
                        this.f32769n = i0Var;
                        return;
                    }
                    throw new NullPointerException("Missing maximum of range.");
                }
                throw new NullPointerException("Missing minimum of range.");
            }
            throw new NullPointerException("Missing unit type.");
        }

        private void i(Object obj) {
            if (!this.f32783b) {
                for (Object obj2 : this.f32762g.keySet()) {
                    if (obj2.equals(obj)) {
                        throw new IllegalArgumentException("Unit duplicate found: " + obj.toString());
                    }
                }
                if (obj instanceof Enum) {
                    String name = ((Enum) Enum.class.cast(obj)).name();
                    for (Object obj3 : this.f32762g.keySet()) {
                        if ((obj3 instanceof Enum) && ((Enum) Enum.class.cast(obj3)).name().equals(name)) {
                            throw new IllegalArgumentException("Unit duplicate found: " + name);
                        }
                    }
                }
            }
        }

        public static b j(Class cls, Class cls2, u uVar, k kVar) {
            a0[] values;
            b bVar = new b(cls, cls2, uVar, (k0) kVar.b(kVar.d()), (k0) kVar.b(kVar.a()), kVar, null);
            for (a0 a0Var : a0.values()) {
                bVar.d(a0Var, a0Var.h(kVar));
            }
            return bVar;
        }

        public static b k(Class cls, Class cls2, u uVar, k0 k0Var, k0 k0Var2) {
            return new b(cls, cls2, uVar, k0Var, k0Var2, null, null);
        }

        public b d(p pVar, z zVar) {
            super.a(pVar, zVar);
            return this;
        }

        public b e(p pVar, z zVar, Object obj) {
            if (obj != null) {
                super.a(pVar, zVar);
                this.f32765j.put(pVar, obj);
                return this;
            }
            throw new NullPointerException("Missing base unit.");
        }

        public b f(s sVar) {
            super.b(sVar);
            return this;
        }

        public b g(Object obj, m0 m0Var, double d10, Set set) {
            if (obj != null) {
                if (m0Var != null) {
                    i(obj);
                    for (Object obj2 : set) {
                        if (obj2 == null) {
                            throw new NullPointerException("Found convertible unit which is null.");
                        }
                    }
                    if (!Double.isNaN(d10)) {
                        if (!Double.isInfinite(d10)) {
                            this.f32762g.put(obj, m0Var);
                            this.f32763h.put(obj, Double.valueOf(d10));
                            HashSet hashSet = new HashSet(set);
                            hashSet.remove(obj);
                            this.f32764i.put(obj, hashSet);
                            return this;
                        }
                        throw new IllegalArgumentException("Infinite: " + d10);
                    }
                    throw new IllegalArgumentException("Not a number: " + d10);
                }
                throw new NullPointerException("Missing unit rule.");
            }
            throw new NullPointerException("Missing time unit.");
        }

        public h0 h() {
            if (!this.f32762g.isEmpty()) {
                h0 h0Var = new h0(this.f32782a, this.f32761f, this.f32784c, this.f32785d, this.f32762g, this.f32763h, this.f32764i, this.f32786e, this.f32765j, this.f32766k, this.f32767l, this.f32768m, this.f32769n, null);
                x.I(h0Var);
                return h0Var;
            }
            throw new IllegalStateException("No time unit was registered.");
        }

        public b l(i0 i0Var) {
            if (i0Var != null) {
                this.f32769n = i0Var;
                return this;
            }
            throw new NullPointerException("Missing time line.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements i0 {

        /* renamed from: d  reason: collision with root package name */
        private final Object f32770d;

        /* renamed from: e  reason: collision with root package name */
        private final k0 f32771e;

        /* renamed from: i  reason: collision with root package name */
        private final k0 f32772i;

        c(Object obj, k0 k0Var, k0 k0Var2) {
            this.f32770d = obj;
            this.f32771e = k0Var;
            this.f32772i = k0Var2;
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(k0 k0Var, k0 k0Var2) {
            return k0Var.G(k0Var2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d extends e implements z {
        private static final long serialVersionUID = 4777240530511579802L;
        private final k0 max;
        private final k0 min;
        private final Class<k0> type;

        /* synthetic */ d(Class cls, k0 k0Var, k0 k0Var2, a aVar) {
            this(cls, k0Var, k0Var2);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // jt.e
        public String B(x xVar) {
            return null;
        }

        @Override // jt.p
        public boolean C() {
            return false;
        }

        @Override // jt.e
        protected boolean E() {
            return true;
        }

        @Override // jt.z
        /* renamed from: F */
        public p a(k0 k0Var) {
            throw new UnsupportedOperationException();
        }

        @Override // jt.z
        /* renamed from: G */
        public p h(k0 k0Var) {
            throw new UnsupportedOperationException();
        }

        @Override // jt.p
        /* renamed from: H */
        public k0 e() {
            return this.max;
        }

        @Override // jt.p
        /* renamed from: I */
        public k0 A() {
            return this.min;
        }

        @Override // jt.z
        /* renamed from: J */
        public k0 j(k0 k0Var) {
            return e();
        }

        @Override // jt.z
        /* renamed from: K */
        public k0 p(k0 k0Var) {
            return A();
        }

        @Override // jt.z
        /* renamed from: M */
        public boolean l(k0 k0Var, k0 k0Var2) {
            if (k0Var2 != null) {
                return true;
            }
            return false;
        }

        @Override // jt.z
        /* renamed from: N */
        public k0 w(k0 k0Var, k0 k0Var2, boolean z10) {
            if (k0Var2 != null) {
                return k0Var2;
            }
            throw new IllegalArgumentException("Missing value.");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // jt.e
        public z c(x xVar) {
            if (xVar.p().equals(this.type)) {
                return this;
            }
            return null;
        }

        @Override // jt.p
        public Class getType() {
            return this.type;
        }

        @Override // jt.p
        public boolean y() {
            return false;
        }

        private d(Class cls, k0 k0Var, k0 k0Var2) {
            super(cls.getName() + "-AXIS");
            this.type = cls;
            this.min = k0Var;
            this.max = k0Var2;
        }

        @Override // jt.z
        /* renamed from: L */
        public k0 x(k0 k0Var) {
            return k0Var;
        }
    }

    /* synthetic */ h0(Class cls, Class cls2, u uVar, Map map, Map map2, Map map3, Map map4, List list, Map map5, k0 k0Var, k0 k0Var2, k kVar, i0 i0Var, a aVar) {
        this(cls, cls2, uVar, map, map2, map3, map4, list, map5, k0Var, k0Var2, kVar, i0Var);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static double O(Map map, Object obj) {
        Double d10 = (Double) map.get(obj);
        if (d10 == null) {
            if (obj instanceof w) {
                return ((w) w.class.cast(obj)).getLength();
            }
            return Double.NaN;
        }
        return d10.doubleValue();
    }

    @Override // java.util.Comparator
    /* renamed from: K */
    public int compare(k0 k0Var, k0 k0Var2) {
        return k0Var.G(k0Var2);
    }

    @Override // jt.x, jt.u
    /* renamed from: L */
    public k0 j(q qVar, jt.d dVar, boolean z10, boolean z11) {
        if (qVar.o(this.A)) {
            return (k0) qVar.p(this.A);
        }
        return (k0) super.j(qVar, dVar, z10, z11);
    }

    public p M() {
        return this.A;
    }

    public Object N(p pVar) {
        if (pVar != null) {
            Object obj = this.f32755w.get(pVar);
            if (obj == null && (pVar instanceof e)) {
                obj = this.f32755w.get(((e) pVar).n());
            }
            if (obj != null) {
                return obj;
            }
            throw new r("Base unit not found for: " + pVar.name());
        }
        throw new NullPointerException("Missing element.");
    }

    public k0 P() {
        return this.f32757y;
    }

    public k0 Q() {
        return this.f32756x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0 R(Object obj) {
        m0 b10;
        if (obj != null) {
            if (S(obj)) {
                return (m0) this.f32752t.get(obj);
            }
            if ((obj instanceof f) && (b10 = ((f) f.class.cast(obj)).b(this)) != null) {
                return b10;
            }
            throw new e0(this, obj);
        }
        throw new NullPointerException("Missing chronological unit.");
    }

    public boolean S(Object obj) {
        return this.f32752t.containsKey(obj);
    }

    @Override // jt.x
    public k n() {
        k kVar = this.f32758z;
        if (kVar == null) {
            return super.n();
        }
        return kVar;
    }

    private h0(Class cls, Class cls2, u uVar, Map map, Map map2, Map map3, Map map4, List list, Map map5, k0 k0Var, k0 k0Var2, k kVar, i0 i0Var) {
        super(cls, uVar, map, list);
        this.f32751s = cls2;
        this.f32752t = Collections.unmodifiableMap(map2);
        this.f32753u = Collections.unmodifiableMap(map3);
        this.f32754v = Collections.unmodifiableMap(map4);
        this.f32755w = Collections.unmodifiableMap(map5);
        this.f32756x = k0Var;
        this.f32757y = k0Var2;
        this.f32758z = kVar;
        this.A = new d(cls, k0Var, k0Var2, null);
        if (i0Var == null) {
            ArrayList arrayList = new ArrayList(map2.keySet());
            Collections.sort(arrayList, new a(map3));
            this.B = new c(arrayList.get(0), k0Var, k0Var2);
            return;
        }
        this.B = i0Var;
    }
}
