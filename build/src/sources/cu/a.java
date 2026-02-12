package cu;

import bu.f0;
import java.util.Collections;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements bu.d {

    /* renamed from: b  reason: collision with root package name */
    public static final bu.c f21110b = q.a("CALENDAR_TYPE", String.class);

    /* renamed from: c  reason: collision with root package name */
    public static final bu.c f21111c = q.a("LANGUAGE", Locale.class);

    /* renamed from: d  reason: collision with root package name */
    public static final bu.c f21112d = q.a("TIMEZONE_ID", net.time4j.tz.k.class);

    /* renamed from: e  reason: collision with root package name */
    public static final bu.c f21113e = q.a("TRANSITION_STRATEGY", net.time4j.tz.o.class);

    /* renamed from: f  reason: collision with root package name */
    public static final bu.c f21114f = q.a("LENIENCY", g.class);

    /* renamed from: g  reason: collision with root package name */
    public static final bu.c f21115g = q.a("TEXT_WIDTH", v.class);

    /* renamed from: h  reason: collision with root package name */
    public static final bu.c f21116h = q.a("OUTPUT_CONTEXT", m.class);

    /* renamed from: i  reason: collision with root package name */
    public static final bu.c f21117i = q.a("PARSE_CASE_INSENSITIVE", Boolean.class);

    /* renamed from: j  reason: collision with root package name */
    public static final bu.c f21118j = q.a("PARSE_PARTIAL_COMPARE", Boolean.class);

    /* renamed from: k  reason: collision with root package name */
    public static final bu.c f21119k = q.a("PARSE_MULTIPLE_CONTEXT", Boolean.class);

    /* renamed from: l  reason: collision with root package name */
    public static final bu.c f21120l = q.a("NUMBER_SYSTEM", j.class);

    /* renamed from: m  reason: collision with root package name */
    public static final bu.c f21121m = q.a("ZERO_DIGIT", Character.class);

    /* renamed from: n  reason: collision with root package name */
    public static final bu.c f21122n = q.a("NO_GMT_PREFIX", Boolean.class);

    /* renamed from: o  reason: collision with root package name */
    public static final bu.c f21123o = q.a("DECIMAL_SEPARATOR", Character.class);

    /* renamed from: p  reason: collision with root package name */
    public static final bu.c f21124p = q.a("PAD_CHAR", Character.class);

    /* renamed from: q  reason: collision with root package name */
    public static final bu.c f21125q = q.a("PIVOT_YEAR", Integer.class);

    /* renamed from: r  reason: collision with root package name */
    public static final bu.c f21126r = q.a("TRAILING_CHARACTERS", Boolean.class);

    /* renamed from: s  reason: collision with root package name */
    public static final bu.c f21127s = q.a("PROTECTED_CHARACTERS", Integer.class);

    /* renamed from: t  reason: collision with root package name */
    public static final bu.c f21128t = q.a("CALENDAR_VARIANT", String.class);

    /* renamed from: u  reason: collision with root package name */
    public static final bu.c f21129u = q.a("START_OF_DAY", f0.class);

    /* renamed from: v  reason: collision with root package name */
    public static final bu.c f21130v = q.a("FOUR_DIGIT_YEAR", Boolean.class);

    /* renamed from: w  reason: collision with root package name */
    public static final bu.c f21131w = q.a("TIME_SCALE", iu.f.class);

    /* renamed from: x  reason: collision with root package name */
    public static final bu.c f21132x = q.a("FORMAT_PATTERN", String.class);

    /* renamed from: y  reason: collision with root package name */
    private static final a f21133y = new a();

    /* renamed from: a  reason: collision with root package name */
    private final Map f21134a;

    /* renamed from: cu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class C0281a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f21135a;

        static {
            int[] iArr = new int[g.values().length];
            f21135a = iArr;
            try {
                iArr[g.STRICT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f21135a[g.SMART.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f21135a[g.LAX.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* synthetic */ a(Map map, C0281a c0281a) {
        this(map);
    }

    public static bu.c e(String str, Class cls) {
        return q.a(str, cls);
    }

    public static a f() {
        return f21133y;
    }

    @Override // bu.d
    public boolean a(bu.c cVar) {
        return this.f21134a.containsKey(cVar.name());
    }

    @Override // bu.d
    public Object b(bu.c cVar, Object obj) {
        Object obj2 = this.f21134a.get(cVar.name());
        if (obj2 == null) {
            return obj;
        }
        return cVar.type().cast(obj2);
    }

    @Override // bu.d
    public Object c(bu.c cVar) {
        Object obj = this.f21134a.get(cVar.name());
        if (obj != null) {
            return cVar.type().cast(obj);
        }
        throw new NoSuchElementException(cVar.name());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            return this.f21134a.equals(((a) obj).f21134a);
        }
        return false;
    }

    public int hashCode() {
        return this.f21134a.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(this.f21134a.size() * 32);
        sb2.append(a.class.getName());
        sb2.append('[');
        sb2.append(this.f21134a);
        sb2.append(']');
        return sb2.toString();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f21136a = new HashMap();

        public b() {
        }

        private void g(bu.c cVar, Object obj) {
            if (obj != null) {
                this.f21136a.put(cVar.name(), obj);
                return;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public a a() {
            return new a(this.f21136a, null);
        }

        public b b(bu.c cVar, char c10) {
            this.f21136a.put(cVar.name(), Character.valueOf(c10));
            return this;
        }

        public b c(bu.c cVar, int i10) {
            if (cVar == a.f21125q && i10 < 100) {
                throw new IllegalArgumentException("Pivot year in far past not supported: " + i10);
            }
            this.f21136a.put(cVar.name(), Integer.valueOf(i10));
            return this;
        }

        public b d(bu.c cVar, Enum r52) {
            if (r52 != null) {
                this.f21136a.put(cVar.name(), r52);
                if (cVar == a.f21114f) {
                    int i10 = C0281a.f21135a[((g) g.class.cast(r52)).ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                e(a.f21117i, true);
                                e(a.f21118j, true);
                                e(a.f21126r, true);
                                e(a.f21119k, true);
                                return this;
                            }
                            throw new UnsupportedOperationException(r52.name());
                        }
                        e(a.f21117i, true);
                        e(a.f21118j, false);
                        e(a.f21126r, false);
                        e(a.f21119k, true);
                        return this;
                    }
                    e(a.f21117i, false);
                    e(a.f21118j, false);
                    e(a.f21126r, false);
                    e(a.f21119k, false);
                    return this;
                }
                if (cVar == a.f21120l) {
                    j jVar = (j) j.class.cast(r52);
                    if (jVar.o()) {
                        b(a.f21121m, jVar.m().charAt(0));
                    }
                }
                return this;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public b e(bu.c cVar, boolean z10) {
            this.f21136a.put(cVar.name(), Boolean.valueOf(z10));
            return this;
        }

        public b f(a aVar) {
            this.f21136a.putAll(aVar.f21134a);
            return this;
        }

        public b h(Locale locale) {
            g(a.f21111c, locale);
            return this;
        }

        public b i(net.time4j.tz.k kVar) {
            g(a.f21112d, kVar);
            return this;
        }

        public b(bu.x xVar) {
            g(a.f21110b, cu.b.a(xVar));
        }
    }

    private a() {
        this.f21134a = Collections.EMPTY_MAP;
    }

    private a(Map map) {
        this.f21134a = Collections.unmodifiableMap(new HashMap(map));
    }
}
