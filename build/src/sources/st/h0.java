package st;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import st.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h0 extends x implements i0 {
    private final p A;
    private final i0 B;

    /* renamed from: s  reason: collision with root package name */
    private final Class f50384s;

    /* renamed from: t  reason: collision with root package name */
    private final Map f50385t;

    /* renamed from: u  reason: collision with root package name */
    private final Map f50386u;

    /* renamed from: v  reason: collision with root package name */
    private final Map f50387v;

    /* renamed from: w  reason: collision with root package name */
    private final Map f50388w;

    /* renamed from: x  reason: collision with root package name */
    private final k0 f50389x;

    /* renamed from: y  reason: collision with root package name */
    private final k0 f50390y;

    /* renamed from: z  reason: collision with root package name */
    private final k f50391z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements Comparator {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Map f50392d;

        a(Map map) {
            this.f50392d = map;
        }

        @Override // java.util.Comparator
        public int compare(Object obj, Object obj2) {
            return Double.compare(h0.O(this.f50392d, obj), h0.O(this.f50392d, obj2));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends x.a {

        /* renamed from: f  reason: collision with root package name */
        private final Class f50394f;

        /* renamed from: g  reason: collision with root package name */
        private final Map f50395g;

        /* renamed from: h  reason: collision with root package name */
        private final Map f50396h;

        /* renamed from: i  reason: collision with root package name */
        private final Map f50397i;

        /* renamed from: j  reason: collision with root package name */
        private final Map f50398j;

        /* renamed from: k  reason: collision with root package name */
        private final k0 f50399k;

        /* renamed from: l  reason: collision with root package name */
        private final k0 f50400l;

        /* renamed from: m  reason: collision with root package name */
        private final k f50401m;

        /* renamed from: n  reason: collision with root package name */
        private i0 f50402n;

        private b(Class cls, Class cls2, u uVar, k0 k0Var, k0 k0Var2, k kVar, i0 i0Var) {
            super(cls2, uVar);
            this.f50402n = null;
            if (cls != null) {
                if (k0Var != null) {
                    if (k0Var2 != null) {
                        if (m.class.isAssignableFrom(cls2) && kVar == null) {
                            throw new NullPointerException("Missing calendar system.");
                        }
                        this.f50394f = cls;
                        this.f50395g = new HashMap();
                        this.f50396h = new HashMap();
                        this.f50397i = new HashMap();
                        this.f50398j = new HashMap();
                        this.f50399k = k0Var;
                        this.f50400l = k0Var2;
                        this.f50401m = kVar;
                        this.f50402n = i0Var;
                        return;
                    }
                    throw new NullPointerException("Missing maximum of range.");
                }
                throw new NullPointerException("Missing minimum of range.");
            }
            throw new NullPointerException("Missing unit type.");
        }

        private void i(Object obj) {
            if (!this.f50416b) {
                for (Object obj2 : this.f50395g.keySet()) {
                    if (obj2.equals(obj)) {
                        throw new IllegalArgumentException("Unit duplicate found: " + obj.toString());
                    }
                }
                if (obj instanceof Enum) {
                    String name = ((Enum) Enum.class.cast(obj)).name();
                    for (Object obj3 : this.f50395g.keySet()) {
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
                bVar.d(a0Var, a0Var.g(kVar));
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
                this.f50398j.put(pVar, obj);
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
                            this.f50395g.put(obj, m0Var);
                            this.f50396h.put(obj, Double.valueOf(d10));
                            HashSet hashSet = new HashSet(set);
                            hashSet.remove(obj);
                            this.f50397i.put(obj, hashSet);
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
            if (!this.f50395g.isEmpty()) {
                h0 h0Var = new h0(this.f50415a, this.f50394f, this.f50417c, this.f50418d, this.f50395g, this.f50396h, this.f50397i, this.f50419e, this.f50398j, this.f50399k, this.f50400l, this.f50401m, this.f50402n, null);
                x.I(h0Var);
                return h0Var;
            }
            throw new IllegalStateException("No time unit was registered.");
        }

        public b l(i0 i0Var) {
            if (i0Var != null) {
                this.f50402n = i0Var;
                return this;
            }
            throw new NullPointerException("Missing time line.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements i0 {

        /* renamed from: d  reason: collision with root package name */
        private final Object f50403d;

        /* renamed from: e  reason: collision with root package name */
        private final k0 f50404e;

        /* renamed from: i  reason: collision with root package name */
        private final k0 f50405i;

        c(Object obj, k0 k0Var, k0 k0Var2) {
            this.f50403d = obj;
            this.f50404e = k0Var;
            this.f50405i = k0Var2;
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

        @Override // st.p
        public boolean A() {
            return false;
        }

        @Override // st.p
        public boolean D() {
            return false;
        }

        @Override // st.e
        protected boolean E() {
            return true;
        }

        @Override // st.z
        /* renamed from: F */
        public p a(k0 k0Var) {
            throw new UnsupportedOperationException();
        }

        @Override // st.z
        /* renamed from: G */
        public p g(k0 k0Var) {
            throw new UnsupportedOperationException();
        }

        @Override // st.p
        /* renamed from: H */
        public k0 e() {
            return this.max;
        }

        @Override // st.p
        /* renamed from: I */
        public k0 B() {
            return this.min;
        }

        @Override // st.z
        /* renamed from: J */
        public k0 h(k0 k0Var) {
            return e();
        }

        @Override // st.z
        /* renamed from: K */
        public k0 m(k0 k0Var) {
            return B();
        }

        @Override // st.z
        /* renamed from: M */
        public boolean k(k0 k0Var, k0 k0Var2) {
            if (k0Var2 != null) {
                return true;
            }
            return false;
        }

        @Override // st.z
        /* renamed from: N */
        public k0 s(k0 k0Var, k0 k0Var2, boolean z10) {
            if (k0Var2 != null) {
                return k0Var2;
            }
            throw new IllegalArgumentException("Missing value.");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // st.e
        public z c(x xVar) {
            if (xVar.n().equals(this.type)) {
                return this;
            }
            return null;
        }

        @Override // st.p
        public Class getType() {
            return this.type;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // st.e
        public String z(x xVar) {
            return null;
        }

        private d(Class cls, k0 k0Var, k0 k0Var2) {
            super(cls.getName() + "-AXIS");
            this.type = cls;
            this.min = k0Var;
            this.max = k0Var2;
        }

        @Override // st.z
        /* renamed from: L */
        public k0 y(k0 k0Var) {
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

    @Override // st.x, st.u
    /* renamed from: L */
    public k0 i(q qVar, st.d dVar, boolean z10, boolean z11) {
        if (qVar.s(this.A)) {
            return (k0) qVar.t(this.A);
        }
        return (k0) super.i(qVar, dVar, z10, z11);
    }

    public p M() {
        return this.A;
    }

    public Object N(p pVar) {
        if (pVar != null) {
            Object obj = this.f50388w.get(pVar);
            if (obj == null && (pVar instanceof e)) {
                obj = this.f50388w.get(((e) pVar).p());
            }
            if (obj != null) {
                return obj;
            }
            throw new r("Base unit not found for: " + pVar.name());
        }
        throw new NullPointerException("Missing element.");
    }

    public k0 P() {
        return this.f50390y;
    }

    public k0 Q() {
        return this.f50389x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0 R(Object obj) {
        m0 b10;
        if (obj != null) {
            if (S(obj)) {
                return (m0) this.f50385t.get(obj);
            }
            if ((obj instanceof f) && (b10 = ((f) f.class.cast(obj)).b(this)) != null) {
                return b10;
            }
            throw new e0(this, obj);
        }
        throw new NullPointerException("Missing chronological unit.");
    }

    public boolean S(Object obj) {
        return this.f50385t.containsKey(obj);
    }

    @Override // st.x
    public k m() {
        k kVar = this.f50391z;
        if (kVar == null) {
            return super.m();
        }
        return kVar;
    }

    private h0(Class cls, Class cls2, u uVar, Map map, Map map2, Map map3, Map map4, List list, Map map5, k0 k0Var, k0 k0Var2, k kVar, i0 i0Var) {
        super(cls, uVar, map, list);
        this.f50384s = cls2;
        this.f50385t = Collections.unmodifiableMap(map2);
        this.f50386u = Collections.unmodifiableMap(map3);
        this.f50387v = Collections.unmodifiableMap(map4);
        this.f50388w = Collections.unmodifiableMap(map5);
        this.f50389x = k0Var;
        this.f50390y = k0Var2;
        this.f50391z = kVar;
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
