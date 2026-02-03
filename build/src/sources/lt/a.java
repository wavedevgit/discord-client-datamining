package lt;

import java.util.Collections;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.NoSuchElementException;
import kt.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements kt.d {

    /* renamed from: b  reason: collision with root package name */
    public static final kt.c f37627b = q.a("CALENDAR_TYPE", String.class);

    /* renamed from: c  reason: collision with root package name */
    public static final kt.c f37628c = q.a("LANGUAGE", Locale.class);

    /* renamed from: d  reason: collision with root package name */
    public static final kt.c f37629d = q.a("TIMEZONE_ID", net.time4j.tz.k.class);

    /* renamed from: e  reason: collision with root package name */
    public static final kt.c f37630e = q.a("TRANSITION_STRATEGY", net.time4j.tz.o.class);

    /* renamed from: f  reason: collision with root package name */
    public static final kt.c f37631f = q.a("LENIENCY", g.class);

    /* renamed from: g  reason: collision with root package name */
    public static final kt.c f37632g = q.a("TEXT_WIDTH", v.class);

    /* renamed from: h  reason: collision with root package name */
    public static final kt.c f37633h = q.a("OUTPUT_CONTEXT", m.class);

    /* renamed from: i  reason: collision with root package name */
    public static final kt.c f37634i = q.a("PARSE_CASE_INSENSITIVE", Boolean.class);

    /* renamed from: j  reason: collision with root package name */
    public static final kt.c f37635j = q.a("PARSE_PARTIAL_COMPARE", Boolean.class);

    /* renamed from: k  reason: collision with root package name */
    public static final kt.c f37636k = q.a("PARSE_MULTIPLE_CONTEXT", Boolean.class);

    /* renamed from: l  reason: collision with root package name */
    public static final kt.c f37637l = q.a("NUMBER_SYSTEM", j.class);

    /* renamed from: m  reason: collision with root package name */
    public static final kt.c f37638m = q.a("ZERO_DIGIT", Character.class);

    /* renamed from: n  reason: collision with root package name */
    public static final kt.c f37639n = q.a("NO_GMT_PREFIX", Boolean.class);

    /* renamed from: o  reason: collision with root package name */
    public static final kt.c f37640o = q.a("DECIMAL_SEPARATOR", Character.class);

    /* renamed from: p  reason: collision with root package name */
    public static final kt.c f37641p = q.a("PAD_CHAR", Character.class);

    /* renamed from: q  reason: collision with root package name */
    public static final kt.c f37642q = q.a("PIVOT_YEAR", Integer.class);

    /* renamed from: r  reason: collision with root package name */
    public static final kt.c f37643r = q.a("TRAILING_CHARACTERS", Boolean.class);

    /* renamed from: s  reason: collision with root package name */
    public static final kt.c f37644s = q.a("PROTECTED_CHARACTERS", Integer.class);

    /* renamed from: t  reason: collision with root package name */
    public static final kt.c f37645t = q.a("CALENDAR_VARIANT", String.class);

    /* renamed from: u  reason: collision with root package name */
    public static final kt.c f37646u = q.a("START_OF_DAY", f0.class);

    /* renamed from: v  reason: collision with root package name */
    public static final kt.c f37647v = q.a("FOUR_DIGIT_YEAR", Boolean.class);

    /* renamed from: w  reason: collision with root package name */
    public static final kt.c f37648w = q.a("TIME_SCALE", rt.f.class);

    /* renamed from: x  reason: collision with root package name */
    public static final kt.c f37649x = q.a("FORMAT_PATTERN", String.class);

    /* renamed from: y  reason: collision with root package name */
    private static final a f37650y = new a();

    /* renamed from: a  reason: collision with root package name */
    private final Map f37651a;

    /* renamed from: lt.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class C0494a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f37652a;

        static {
            int[] iArr = new int[g.values().length];
            f37652a = iArr;
            try {
                iArr[g.STRICT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f37652a[g.SMART.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f37652a[g.LAX.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* synthetic */ a(Map map, C0494a c0494a) {
        this(map);
    }

    public static kt.c e(String str, Class cls) {
        return q.a(str, cls);
    }

    public static a f() {
        return f37650y;
    }

    @Override // kt.d
    public Object a(kt.c cVar, Object obj) {
        Object obj2 = this.f37651a.get(cVar.name());
        if (obj2 == null) {
            return obj;
        }
        return cVar.type().cast(obj2);
    }

    @Override // kt.d
    public Object b(kt.c cVar) {
        Object obj = this.f37651a.get(cVar.name());
        if (obj != null) {
            return cVar.type().cast(obj);
        }
        throw new NoSuchElementException(cVar.name());
    }

    @Override // kt.d
    public boolean c(kt.c cVar) {
        return this.f37651a.containsKey(cVar.name());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            return this.f37651a.equals(((a) obj).f37651a);
        }
        return false;
    }

    public int hashCode() {
        return this.f37651a.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(this.f37651a.size() * 32);
        sb2.append(a.class.getName());
        sb2.append('[');
        sb2.append(this.f37651a);
        sb2.append(']');
        return sb2.toString();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f37653a = new HashMap();

        public b() {
        }

        private void g(kt.c cVar, Object obj) {
            if (obj != null) {
                this.f37653a.put(cVar.name(), obj);
                return;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public a a() {
            return new a(this.f37653a, null);
        }

        public b b(kt.c cVar, char c10) {
            this.f37653a.put(cVar.name(), Character.valueOf(c10));
            return this;
        }

        public b c(kt.c cVar, int i10) {
            if (cVar == a.f37642q && i10 < 100) {
                throw new IllegalArgumentException("Pivot year in far past not supported: " + i10);
            }
            this.f37653a.put(cVar.name(), Integer.valueOf(i10));
            return this;
        }

        public b d(kt.c cVar, Enum r52) {
            if (r52 != null) {
                this.f37653a.put(cVar.name(), r52);
                if (cVar == a.f37631f) {
                    int i10 = C0494a.f37652a[((g) g.class.cast(r52)).ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                e(a.f37634i, true);
                                e(a.f37635j, true);
                                e(a.f37643r, true);
                                e(a.f37636k, true);
                                return this;
                            }
                            throw new UnsupportedOperationException(r52.name());
                        }
                        e(a.f37634i, true);
                        e(a.f37635j, false);
                        e(a.f37643r, false);
                        e(a.f37636k, true);
                        return this;
                    }
                    e(a.f37634i, false);
                    e(a.f37635j, false);
                    e(a.f37643r, false);
                    e(a.f37636k, false);
                    return this;
                }
                if (cVar == a.f37637l) {
                    j jVar = (j) j.class.cast(r52);
                    if (jVar.p()) {
                        b(a.f37638m, jVar.m().charAt(0));
                    }
                }
                return this;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public b e(kt.c cVar, boolean z10) {
            this.f37653a.put(cVar.name(), Boolean.valueOf(z10));
            return this;
        }

        public b f(a aVar) {
            this.f37653a.putAll(aVar.f37651a);
            return this;
        }

        public b h(Locale locale) {
            g(a.f37628c, locale);
            return this;
        }

        public b i(net.time4j.tz.k kVar) {
            g(a.f37629d, kVar);
            return this;
        }

        public b(kt.x xVar) {
            g(a.f37627b, lt.b.a(xVar));
        }
    }

    private a() {
        this.f37651a = Collections.EMPTY_MAP;
    }

    private a(Map map) {
        this.f37651a = Collections.unmodifiableMap(new HashMap(map));
    }
}
