package qt;

import java.util.Collections;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.NoSuchElementException;
import pt.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements pt.d {

    /* renamed from: b  reason: collision with root package name */
    public static final pt.c f48087b = q.a("CALENDAR_TYPE", String.class);

    /* renamed from: c  reason: collision with root package name */
    public static final pt.c f48088c = q.a("LANGUAGE", Locale.class);

    /* renamed from: d  reason: collision with root package name */
    public static final pt.c f48089d = q.a("TIMEZONE_ID", net.time4j.tz.k.class);

    /* renamed from: e  reason: collision with root package name */
    public static final pt.c f48090e = q.a("TRANSITION_STRATEGY", net.time4j.tz.o.class);

    /* renamed from: f  reason: collision with root package name */
    public static final pt.c f48091f = q.a("LENIENCY", g.class);

    /* renamed from: g  reason: collision with root package name */
    public static final pt.c f48092g = q.a("TEXT_WIDTH", v.class);

    /* renamed from: h  reason: collision with root package name */
    public static final pt.c f48093h = q.a("OUTPUT_CONTEXT", m.class);

    /* renamed from: i  reason: collision with root package name */
    public static final pt.c f48094i = q.a("PARSE_CASE_INSENSITIVE", Boolean.class);

    /* renamed from: j  reason: collision with root package name */
    public static final pt.c f48095j = q.a("PARSE_PARTIAL_COMPARE", Boolean.class);

    /* renamed from: k  reason: collision with root package name */
    public static final pt.c f48096k = q.a("PARSE_MULTIPLE_CONTEXT", Boolean.class);

    /* renamed from: l  reason: collision with root package name */
    public static final pt.c f48097l = q.a("NUMBER_SYSTEM", j.class);

    /* renamed from: m  reason: collision with root package name */
    public static final pt.c f48098m = q.a("ZERO_DIGIT", Character.class);

    /* renamed from: n  reason: collision with root package name */
    public static final pt.c f48099n = q.a("NO_GMT_PREFIX", Boolean.class);

    /* renamed from: o  reason: collision with root package name */
    public static final pt.c f48100o = q.a("DECIMAL_SEPARATOR", Character.class);

    /* renamed from: p  reason: collision with root package name */
    public static final pt.c f48101p = q.a("PAD_CHAR", Character.class);

    /* renamed from: q  reason: collision with root package name */
    public static final pt.c f48102q = q.a("PIVOT_YEAR", Integer.class);

    /* renamed from: r  reason: collision with root package name */
    public static final pt.c f48103r = q.a("TRAILING_CHARACTERS", Boolean.class);

    /* renamed from: s  reason: collision with root package name */
    public static final pt.c f48104s = q.a("PROTECTED_CHARACTERS", Integer.class);

    /* renamed from: t  reason: collision with root package name */
    public static final pt.c f48105t = q.a("CALENDAR_VARIANT", String.class);

    /* renamed from: u  reason: collision with root package name */
    public static final pt.c f48106u = q.a("START_OF_DAY", f0.class);

    /* renamed from: v  reason: collision with root package name */
    public static final pt.c f48107v = q.a("FOUR_DIGIT_YEAR", Boolean.class);

    /* renamed from: w  reason: collision with root package name */
    public static final pt.c f48108w = q.a("TIME_SCALE", wt.f.class);

    /* renamed from: x  reason: collision with root package name */
    public static final pt.c f48109x = q.a("FORMAT_PATTERN", String.class);

    /* renamed from: y  reason: collision with root package name */
    private static final a f48110y = new a();

    /* renamed from: a  reason: collision with root package name */
    private final Map f48111a;

    /* renamed from: qt.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class C0608a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f48112a;

        static {
            int[] iArr = new int[g.values().length];
            f48112a = iArr;
            try {
                iArr[g.STRICT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f48112a[g.SMART.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f48112a[g.LAX.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* synthetic */ a(Map map, C0608a c0608a) {
        this(map);
    }

    public static pt.c e(String str, Class cls) {
        return q.a(str, cls);
    }

    public static a f() {
        return f48110y;
    }

    @Override // pt.d
    public Object a(pt.c cVar, Object obj) {
        Object obj2 = this.f48111a.get(cVar.name());
        if (obj2 == null) {
            return obj;
        }
        return cVar.type().cast(obj2);
    }

    @Override // pt.d
    public boolean b(pt.c cVar) {
        return this.f48111a.containsKey(cVar.name());
    }

    @Override // pt.d
    public Object c(pt.c cVar) {
        Object obj = this.f48111a.get(cVar.name());
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
            return this.f48111a.equals(((a) obj).f48111a);
        }
        return false;
    }

    public int hashCode() {
        return this.f48111a.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(this.f48111a.size() * 32);
        sb2.append(a.class.getName());
        sb2.append('[');
        sb2.append(this.f48111a);
        sb2.append(']');
        return sb2.toString();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f48113a = new HashMap();

        public b() {
        }

        private void g(pt.c cVar, Object obj) {
            if (obj != null) {
                this.f48113a.put(cVar.name(), obj);
                return;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public a a() {
            return new a(this.f48113a, null);
        }

        public b b(pt.c cVar, char c10) {
            this.f48113a.put(cVar.name(), Character.valueOf(c10));
            return this;
        }

        public b c(pt.c cVar, int i10) {
            if (cVar == a.f48102q && i10 < 100) {
                throw new IllegalArgumentException("Pivot year in far past not supported: " + i10);
            }
            this.f48113a.put(cVar.name(), Integer.valueOf(i10));
            return this;
        }

        public b d(pt.c cVar, Enum r52) {
            if (r52 != null) {
                this.f48113a.put(cVar.name(), r52);
                if (cVar == a.f48091f) {
                    int i10 = C0608a.f48112a[((g) g.class.cast(r52)).ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                e(a.f48094i, true);
                                e(a.f48095j, true);
                                e(a.f48103r, true);
                                e(a.f48096k, true);
                                return this;
                            }
                            throw new UnsupportedOperationException(r52.name());
                        }
                        e(a.f48094i, true);
                        e(a.f48095j, false);
                        e(a.f48103r, false);
                        e(a.f48096k, true);
                        return this;
                    }
                    e(a.f48094i, false);
                    e(a.f48095j, false);
                    e(a.f48103r, false);
                    e(a.f48096k, false);
                    return this;
                }
                if (cVar == a.f48097l) {
                    j jVar = (j) j.class.cast(r52);
                    if (jVar.p()) {
                        b(a.f48098m, jVar.m().charAt(0));
                    }
                }
                return this;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public b e(pt.c cVar, boolean z10) {
            this.f48113a.put(cVar.name(), Boolean.valueOf(z10));
            return this;
        }

        public b f(a aVar) {
            this.f48113a.putAll(aVar.f48111a);
            return this;
        }

        public b h(Locale locale) {
            g(a.f48088c, locale);
            return this;
        }

        public b i(net.time4j.tz.k kVar) {
            g(a.f48089d, kVar);
            return this;
        }

        public b(pt.x xVar) {
            g(a.f48087b, qt.b.a(xVar));
        }
    }

    private a() {
        this.f48111a = Collections.EMPTY_MAP;
    }

    private a(Map map) {
        this.f48111a = Collections.unmodifiableMap(new HashMap(map));
    }
}
