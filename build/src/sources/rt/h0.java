package rt;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import rt.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h0 extends x implements i0 {
    private final p A;
    private final i0 B;

    /* renamed from: s  reason: collision with root package name */
    private final Class f49511s;

    /* renamed from: t  reason: collision with root package name */
    private final Map f49512t;

    /* renamed from: u  reason: collision with root package name */
    private final Map f49513u;

    /* renamed from: v  reason: collision with root package name */
    private final Map f49514v;

    /* renamed from: w  reason: collision with root package name */
    private final Map f49515w;

    /* renamed from: x  reason: collision with root package name */
    private final k0 f49516x;

    /* renamed from: y  reason: collision with root package name */
    private final k0 f49517y;

    /* renamed from: z  reason: collision with root package name */
    private final k f49518z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements Comparator {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Map f49519d;

        a(Map map) {
            this.f49519d = map;
        }

        @Override // java.util.Comparator
        public int compare(Object obj, Object obj2) {
            return Double.compare(h0.O(this.f49519d, obj), h0.O(this.f49519d, obj2));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends x.a {

        /* renamed from: f  reason: collision with root package name */
        private final Class f49521f;

        /* renamed from: g  reason: collision with root package name */
        private final Map f49522g;

        /* renamed from: h  reason: collision with root package name */
        private final Map f49523h;

        /* renamed from: i  reason: collision with root package name */
        private final Map f49524i;

        /* renamed from: j  reason: collision with root package name */
        private final Map f49525j;

        /* renamed from: k  reason: collision with root package name */
        private final k0 f49526k;

        /* renamed from: l  reason: collision with root package name */
        private final k0 f49527l;

        /* renamed from: m  reason: collision with root package name */
        private final k f49528m;

        /* renamed from: n  reason: collision with root package name */
        private i0 f49529n;

        private b(Class cls, Class cls2, u uVar, k0 k0Var, k0 k0Var2, k kVar, i0 i0Var) {
            super(cls2, uVar);
            this.f49529n = null;
            if (cls != null) {
                if (k0Var != null) {
                    if (k0Var2 != null) {
                        if (m.class.isAssignableFrom(cls2) && kVar == null) {
                            throw new NullPointerException("Missing calendar system.");
                        }
                        this.f49521f = cls;
                        this.f49522g = new HashMap();
                        this.f49523h = new HashMap();
                        this.f49524i = new HashMap();
                        this.f49525j = new HashMap();
                        this.f49526k = k0Var;
                        this.f49527l = k0Var2;
                        this.f49528m = kVar;
                        this.f49529n = i0Var;
                        return;
                    }
                    throw new NullPointerException("Missing maximum of range.");
                }
                throw new NullPointerException("Missing minimum of range.");
            }
            throw new NullPointerException("Missing unit type.");
        }

        private void i(Object obj) {
            if (!this.f49543b) {
                for (Object obj2 : this.f49522g.keySet()) {
                    if (obj2.equals(obj)) {
                        throw new IllegalArgumentException("Unit duplicate found: " + obj.toString());
                    }
                }
                if (obj instanceof Enum) {
                    String name = ((Enum) Enum.class.cast(obj)).name();
                    for (Object obj3 : this.f49522g.keySet()) {
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
                this.f49525j.put(pVar, obj);
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
                            this.f49522g.put(obj, m0Var);
                            this.f49523h.put(obj, Double.valueOf(d10));
                            HashSet hashSet = new HashSet(set);
                            hashSet.remove(obj);
                            this.f49524i.put(obj, hashSet);
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
            if (!this.f49522g.isEmpty()) {
                h0 h0Var = new h0(this.f49542a, this.f49521f, this.f49544c, this.f49545d, this.f49522g, this.f49523h, this.f49524i, this.f49546e, this.f49525j, this.f49526k, this.f49527l, this.f49528m, this.f49529n, null);
                x.I(h0Var);
                return h0Var;
            }
            throw new IllegalStateException("No time unit was registered.");
        }

        public b l(i0 i0Var) {
            if (i0Var != null) {
                this.f49529n = i0Var;
                return this;
            }
            throw new NullPointerException("Missing time line.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements i0 {

        /* renamed from: d  reason: collision with root package name */
        private final Object f49530d;

        /* renamed from: e  reason: collision with root package name */
        private final k0 f49531e;

        /* renamed from: i  reason: collision with root package name */
        private final k0 f49532i;

        c(Object obj, k0 k0Var, k0 k0Var2) {
            this.f49530d = obj;
            this.f49531e = k0Var;
            this.f49532i = k0Var2;
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

        @Override // rt.p
        public boolean A() {
            return false;
        }

        @Override // rt.p
        public boolean D() {
            return false;
        }

        @Override // rt.e
        protected boolean E() {
            return true;
        }

        @Override // rt.z
        /* renamed from: F */
        public p a(k0 k0Var) {
            throw new UnsupportedOperationException();
        }

        @Override // rt.z
        /* renamed from: G */
        public p g(k0 k0Var) {
            throw new UnsupportedOperationException();
        }

        @Override // rt.p
        /* renamed from: H */
        public k0 e() {
            return this.max;
        }

        @Override // rt.p
        /* renamed from: I */
        public k0 B() {
            return this.min;
        }

        @Override // rt.z
        /* renamed from: J */
        public k0 k(k0 k0Var) {
            return e();
        }

        @Override // rt.z
        /* renamed from: K */
        public k0 o(k0 k0Var) {
            return B();
        }

        @Override // rt.z
        /* renamed from: M */
        public boolean n(k0 k0Var, k0 k0Var2) {
            if (k0Var2 != null) {
                return true;
            }
            return false;
        }

        @Override // rt.z
        /* renamed from: N */
        public k0 u(k0 k0Var, k0 k0Var2, boolean z10) {
            if (k0Var2 != null) {
                return k0Var2;
            }
            throw new IllegalArgumentException("Missing value.");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // rt.e
        public z c(x xVar) {
            if (xVar.p().equals(this.type)) {
                return this;
            }
            return null;
        }

        @Override // rt.p
        public Class getType() {
            return this.type;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // rt.e
        public String z(x xVar) {
            return null;
        }

        private d(Class cls, k0 k0Var, k0 k0Var2) {
            super(cls.getName() + "-AXIS");
            this.type = cls;
            this.min = k0Var;
            this.max = k0Var2;
        }

        @Override // rt.z
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

    @Override // rt.x, rt.u
    /* renamed from: L */
    public k0 l(q qVar, rt.d dVar, boolean z10, boolean z11) {
        if (qVar.n(this.A)) {
            return (k0) qVar.s(this.A);
        }
        return (k0) super.l(qVar, dVar, z10, z11);
    }

    public p M() {
        return this.A;
    }

    public Object N(p pVar) {
        if (pVar != null) {
            Object obj = this.f49515w.get(pVar);
            if (obj == null && (pVar instanceof e)) {
                obj = this.f49515w.get(((e) pVar).p());
            }
            if (obj != null) {
                return obj;
            }
            throw new r("Base unit not found for: " + pVar.name());
        }
        throw new NullPointerException("Missing element.");
    }

    public k0 P() {
        return this.f49517y;
    }

    public k0 Q() {
        return this.f49516x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0 R(Object obj) {
        m0 b10;
        if (obj != null) {
            if (S(obj)) {
                return (m0) this.f49512t.get(obj);
            }
            if ((obj instanceof f) && (b10 = ((f) f.class.cast(obj)).b(this)) != null) {
                return b10;
            }
            throw new e0(this, obj);
        }
        throw new NullPointerException("Missing chronological unit.");
    }

    public boolean S(Object obj) {
        return this.f49512t.containsKey(obj);
    }

    @Override // rt.x
    public k o() {
        k kVar = this.f49518z;
        if (kVar == null) {
            return super.o();
        }
        return kVar;
    }

    private h0(Class cls, Class cls2, u uVar, Map map, Map map2, Map map3, Map map4, List list, Map map5, k0 k0Var, k0 k0Var2, k kVar, i0 i0Var) {
        super(cls, uVar, map, list);
        this.f49511s = cls2;
        this.f49512t = Collections.unmodifiableMap(map2);
        this.f49513u = Collections.unmodifiableMap(map3);
        this.f49514v = Collections.unmodifiableMap(map4);
        this.f49515w = Collections.unmodifiableMap(map5);
        this.f49516x = k0Var;
        this.f49517y = k0Var2;
        this.f49518z = kVar;
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
