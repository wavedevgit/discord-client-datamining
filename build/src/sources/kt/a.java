package kt;

import java.util.Collections;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.NoSuchElementException;
import jt.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements jt.d {

    /* renamed from: b  reason: collision with root package name */
    public static final jt.c f36529b = q.a("CALENDAR_TYPE", String.class);

    /* renamed from: c  reason: collision with root package name */
    public static final jt.c f36530c = q.a("LANGUAGE", Locale.class);

    /* renamed from: d  reason: collision with root package name */
    public static final jt.c f36531d = q.a("TIMEZONE_ID", net.time4j.tz.k.class);

    /* renamed from: e  reason: collision with root package name */
    public static final jt.c f36532e = q.a("TRANSITION_STRATEGY", net.time4j.tz.o.class);

    /* renamed from: f  reason: collision with root package name */
    public static final jt.c f36533f = q.a("LENIENCY", g.class);

    /* renamed from: g  reason: collision with root package name */
    public static final jt.c f36534g = q.a("TEXT_WIDTH", v.class);

    /* renamed from: h  reason: collision with root package name */
    public static final jt.c f36535h = q.a("OUTPUT_CONTEXT", m.class);

    /* renamed from: i  reason: collision with root package name */
    public static final jt.c f36536i = q.a("PARSE_CASE_INSENSITIVE", Boolean.class);

    /* renamed from: j  reason: collision with root package name */
    public static final jt.c f36537j = q.a("PARSE_PARTIAL_COMPARE", Boolean.class);

    /* renamed from: k  reason: collision with root package name */
    public static final jt.c f36538k = q.a("PARSE_MULTIPLE_CONTEXT", Boolean.class);

    /* renamed from: l  reason: collision with root package name */
    public static final jt.c f36539l = q.a("NUMBER_SYSTEM", j.class);

    /* renamed from: m  reason: collision with root package name */
    public static final jt.c f36540m = q.a("ZERO_DIGIT", Character.class);

    /* renamed from: n  reason: collision with root package name */
    public static final jt.c f36541n = q.a("NO_GMT_PREFIX", Boolean.class);

    /* renamed from: o  reason: collision with root package name */
    public static final jt.c f36542o = q.a("DECIMAL_SEPARATOR", Character.class);

    /* renamed from: p  reason: collision with root package name */
    public static final jt.c f36543p = q.a("PAD_CHAR", Character.class);

    /* renamed from: q  reason: collision with root package name */
    public static final jt.c f36544q = q.a("PIVOT_YEAR", Integer.class);

    /* renamed from: r  reason: collision with root package name */
    public static final jt.c f36545r = q.a("TRAILING_CHARACTERS", Boolean.class);

    /* renamed from: s  reason: collision with root package name */
    public static final jt.c f36546s = q.a("PROTECTED_CHARACTERS", Integer.class);

    /* renamed from: t  reason: collision with root package name */
    public static final jt.c f36547t = q.a("CALENDAR_VARIANT", String.class);

    /* renamed from: u  reason: collision with root package name */
    public static final jt.c f36548u = q.a("START_OF_DAY", f0.class);

    /* renamed from: v  reason: collision with root package name */
    public static final jt.c f36549v = q.a("FOUR_DIGIT_YEAR", Boolean.class);

    /* renamed from: w  reason: collision with root package name */
    public static final jt.c f36550w = q.a("TIME_SCALE", qt.f.class);

    /* renamed from: x  reason: collision with root package name */
    public static final jt.c f36551x = q.a("FORMAT_PATTERN", String.class);

    /* renamed from: y  reason: collision with root package name */
    private static final a f36552y = new a();

    /* renamed from: a  reason: collision with root package name */
    private final Map f36553a;

    /* renamed from: kt.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class C0469a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36554a;

        static {
            int[] iArr = new int[g.values().length];
            f36554a = iArr;
            try {
                iArr[g.STRICT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36554a[g.SMART.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36554a[g.LAX.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* synthetic */ a(Map map, C0469a c0469a) {
        this(map);
    }

    public static jt.c e(String str, Class cls) {
        return q.a(str, cls);
    }

    public static a f() {
        return f36552y;
    }

    @Override // jt.d
    public boolean a(jt.c cVar) {
        return this.f36553a.containsKey(cVar.name());
    }

    @Override // jt.d
    public Object b(jt.c cVar, Object obj) {
        Object obj2 = this.f36553a.get(cVar.name());
        if (obj2 == null) {
            return obj;
        }
        return cVar.type().cast(obj2);
    }

    @Override // jt.d
    public Object c(jt.c cVar) {
        Object obj = this.f36553a.get(cVar.name());
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
            return this.f36553a.equals(((a) obj).f36553a);
        }
        return false;
    }

    public int hashCode() {
        return this.f36553a.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(this.f36553a.size() * 32);
        sb2.append(a.class.getName());
        sb2.append('[');
        sb2.append(this.f36553a);
        sb2.append(']');
        return sb2.toString();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f36555a = new HashMap();

        public b() {
        }

        private void g(jt.c cVar, Object obj) {
            if (obj != null) {
                this.f36555a.put(cVar.name(), obj);
                return;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public a a() {
            return new a(this.f36555a, null);
        }

        public b b(jt.c cVar, char c10) {
            this.f36555a.put(cVar.name(), Character.valueOf(c10));
            return this;
        }

        public b c(jt.c cVar, int i10) {
            if (cVar == a.f36544q && i10 < 100) {
                throw new IllegalArgumentException("Pivot year in far past not supported: " + i10);
            }
            this.f36555a.put(cVar.name(), Integer.valueOf(i10));
            return this;
        }

        public b d(jt.c cVar, Enum r52) {
            if (r52 != null) {
                this.f36555a.put(cVar.name(), r52);
                if (cVar == a.f36533f) {
                    int i10 = C0469a.f36554a[((g) g.class.cast(r52)).ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                e(a.f36536i, true);
                                e(a.f36537j, true);
                                e(a.f36545r, true);
                                e(a.f36538k, true);
                                return this;
                            }
                            throw new UnsupportedOperationException(r52.name());
                        }
                        e(a.f36536i, true);
                        e(a.f36537j, false);
                        e(a.f36545r, false);
                        e(a.f36538k, true);
                        return this;
                    }
                    e(a.f36536i, false);
                    e(a.f36537j, false);
                    e(a.f36545r, false);
                    e(a.f36538k, false);
                    return this;
                }
                if (cVar == a.f36539l) {
                    j jVar = (j) j.class.cast(r52);
                    if (jVar.p()) {
                        b(a.f36540m, jVar.l().charAt(0));
                    }
                }
                return this;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public b e(jt.c cVar, boolean z10) {
            this.f36555a.put(cVar.name(), Boolean.valueOf(z10));
            return this;
        }

        public b f(a aVar) {
            this.f36555a.putAll(aVar.f36553a);
            return this;
        }

        public b h(Locale locale) {
            g(a.f36530c, locale);
            return this;
        }

        public b i(net.time4j.tz.k kVar) {
            g(a.f36531d, kVar);
            return this;
        }

        public b(jt.x xVar) {
            g(a.f36529b, kt.b.a(xVar));
        }
    }

    private a() {
        this.f36553a = Collections.EMPTY_MAP;
    }

    private a(Map map) {
        this.f36553a = Collections.unmodifiableMap(new HashMap(map));
    }
}
