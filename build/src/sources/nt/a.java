package nt;

import java.util.Collections;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.NoSuchElementException;
import mt.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements mt.d {

    /* renamed from: b  reason: collision with root package name */
    public static final mt.c f42027b = q.a("CALENDAR_TYPE", String.class);

    /* renamed from: c  reason: collision with root package name */
    public static final mt.c f42028c = q.a("LANGUAGE", Locale.class);

    /* renamed from: d  reason: collision with root package name */
    public static final mt.c f42029d = q.a("TIMEZONE_ID", net.time4j.tz.k.class);

    /* renamed from: e  reason: collision with root package name */
    public static final mt.c f42030e = q.a("TRANSITION_STRATEGY", net.time4j.tz.o.class);

    /* renamed from: f  reason: collision with root package name */
    public static final mt.c f42031f = q.a("LENIENCY", g.class);

    /* renamed from: g  reason: collision with root package name */
    public static final mt.c f42032g = q.a("TEXT_WIDTH", v.class);

    /* renamed from: h  reason: collision with root package name */
    public static final mt.c f42033h = q.a("OUTPUT_CONTEXT", m.class);

    /* renamed from: i  reason: collision with root package name */
    public static final mt.c f42034i = q.a("PARSE_CASE_INSENSITIVE", Boolean.class);

    /* renamed from: j  reason: collision with root package name */
    public static final mt.c f42035j = q.a("PARSE_PARTIAL_COMPARE", Boolean.class);

    /* renamed from: k  reason: collision with root package name */
    public static final mt.c f42036k = q.a("PARSE_MULTIPLE_CONTEXT", Boolean.class);

    /* renamed from: l  reason: collision with root package name */
    public static final mt.c f42037l = q.a("NUMBER_SYSTEM", j.class);

    /* renamed from: m  reason: collision with root package name */
    public static final mt.c f42038m = q.a("ZERO_DIGIT", Character.class);

    /* renamed from: n  reason: collision with root package name */
    public static final mt.c f42039n = q.a("NO_GMT_PREFIX", Boolean.class);

    /* renamed from: o  reason: collision with root package name */
    public static final mt.c f42040o = q.a("DECIMAL_SEPARATOR", Character.class);

    /* renamed from: p  reason: collision with root package name */
    public static final mt.c f42041p = q.a("PAD_CHAR", Character.class);

    /* renamed from: q  reason: collision with root package name */
    public static final mt.c f42042q = q.a("PIVOT_YEAR", Integer.class);

    /* renamed from: r  reason: collision with root package name */
    public static final mt.c f42043r = q.a("TRAILING_CHARACTERS", Boolean.class);

    /* renamed from: s  reason: collision with root package name */
    public static final mt.c f42044s = q.a("PROTECTED_CHARACTERS", Integer.class);

    /* renamed from: t  reason: collision with root package name */
    public static final mt.c f42045t = q.a("CALENDAR_VARIANT", String.class);

    /* renamed from: u  reason: collision with root package name */
    public static final mt.c f42046u = q.a("START_OF_DAY", f0.class);

    /* renamed from: v  reason: collision with root package name */
    public static final mt.c f42047v = q.a("FOUR_DIGIT_YEAR", Boolean.class);

    /* renamed from: w  reason: collision with root package name */
    public static final mt.c f42048w = q.a("TIME_SCALE", tt.f.class);

    /* renamed from: x  reason: collision with root package name */
    public static final mt.c f42049x = q.a("FORMAT_PATTERN", String.class);

    /* renamed from: y  reason: collision with root package name */
    private static final a f42050y = new a();

    /* renamed from: a  reason: collision with root package name */
    private final Map f42051a;

    /* renamed from: nt.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class C0533a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f42052a;

        static {
            int[] iArr = new int[g.values().length];
            f42052a = iArr;
            try {
                iArr[g.STRICT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f42052a[g.SMART.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f42052a[g.LAX.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* synthetic */ a(Map map, C0533a c0533a) {
        this(map);
    }

    public static mt.c e(String str, Class cls) {
        return q.a(str, cls);
    }

    public static a f() {
        return f42050y;
    }

    @Override // mt.d
    public boolean a(mt.c cVar) {
        return this.f42051a.containsKey(cVar.name());
    }

    @Override // mt.d
    public Object b(mt.c cVar, Object obj) {
        Object obj2 = this.f42051a.get(cVar.name());
        if (obj2 == null) {
            return obj;
        }
        return cVar.type().cast(obj2);
    }

    @Override // mt.d
    public Object c(mt.c cVar) {
        Object obj = this.f42051a.get(cVar.name());
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
            return this.f42051a.equals(((a) obj).f42051a);
        }
        return false;
    }

    public int hashCode() {
        return this.f42051a.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(this.f42051a.size() * 32);
        sb2.append(a.class.getName());
        sb2.append('[');
        sb2.append(this.f42051a);
        sb2.append(']');
        return sb2.toString();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f42053a = new HashMap();

        public b() {
        }

        private void g(mt.c cVar, Object obj) {
            if (obj != null) {
                this.f42053a.put(cVar.name(), obj);
                return;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public a a() {
            return new a(this.f42053a, null);
        }

        public b b(mt.c cVar, char c10) {
            this.f42053a.put(cVar.name(), Character.valueOf(c10));
            return this;
        }

        public b c(mt.c cVar, int i10) {
            if (cVar == a.f42042q && i10 < 100) {
                throw new IllegalArgumentException("Pivot year in far past not supported: " + i10);
            }
            this.f42053a.put(cVar.name(), Integer.valueOf(i10));
            return this;
        }

        public b d(mt.c cVar, Enum r52) {
            if (r52 != null) {
                this.f42053a.put(cVar.name(), r52);
                if (cVar == a.f42031f) {
                    int i10 = C0533a.f42052a[((g) g.class.cast(r52)).ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                e(a.f42034i, true);
                                e(a.f42035j, true);
                                e(a.f42043r, true);
                                e(a.f42036k, true);
                                return this;
                            }
                            throw new UnsupportedOperationException(r52.name());
                        }
                        e(a.f42034i, true);
                        e(a.f42035j, false);
                        e(a.f42043r, false);
                        e(a.f42036k, true);
                        return this;
                    }
                    e(a.f42034i, false);
                    e(a.f42035j, false);
                    e(a.f42043r, false);
                    e(a.f42036k, false);
                    return this;
                }
                if (cVar == a.f42037l) {
                    j jVar = (j) j.class.cast(r52);
                    if (jVar.p()) {
                        b(a.f42038m, jVar.l().charAt(0));
                    }
                }
                return this;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public b e(mt.c cVar, boolean z10) {
            this.f42053a.put(cVar.name(), Boolean.valueOf(z10));
            return this;
        }

        public b f(a aVar) {
            this.f42053a.putAll(aVar.f42051a);
            return this;
        }

        public b h(Locale locale) {
            g(a.f42028c, locale);
            return this;
        }

        public b i(net.time4j.tz.k kVar) {
            g(a.f42029d, kVar);
            return this;
        }

        public b(mt.x xVar) {
            g(a.f42027b, nt.b.a(xVar));
        }
    }

    private a() {
        this.f42051a = Collections.EMPTY_MAP;
    }

    private a(Map map) {
        this.f42051a = Collections.unmodifiableMap(new HashMap(map));
    }
}
