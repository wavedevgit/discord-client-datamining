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
    public static final jt.c f36545b = q.a("CALENDAR_TYPE", String.class);

    /* renamed from: c  reason: collision with root package name */
    public static final jt.c f36546c = q.a("LANGUAGE", Locale.class);

    /* renamed from: d  reason: collision with root package name */
    public static final jt.c f36547d = q.a("TIMEZONE_ID", net.time4j.tz.k.class);

    /* renamed from: e  reason: collision with root package name */
    public static final jt.c f36548e = q.a("TRANSITION_STRATEGY", net.time4j.tz.o.class);

    /* renamed from: f  reason: collision with root package name */
    public static final jt.c f36549f = q.a("LENIENCY", g.class);

    /* renamed from: g  reason: collision with root package name */
    public static final jt.c f36550g = q.a("TEXT_WIDTH", v.class);

    /* renamed from: h  reason: collision with root package name */
    public static final jt.c f36551h = q.a("OUTPUT_CONTEXT", m.class);

    /* renamed from: i  reason: collision with root package name */
    public static final jt.c f36552i = q.a("PARSE_CASE_INSENSITIVE", Boolean.class);

    /* renamed from: j  reason: collision with root package name */
    public static final jt.c f36553j = q.a("PARSE_PARTIAL_COMPARE", Boolean.class);

    /* renamed from: k  reason: collision with root package name */
    public static final jt.c f36554k = q.a("PARSE_MULTIPLE_CONTEXT", Boolean.class);

    /* renamed from: l  reason: collision with root package name */
    public static final jt.c f36555l = q.a("NUMBER_SYSTEM", j.class);

    /* renamed from: m  reason: collision with root package name */
    public static final jt.c f36556m = q.a("ZERO_DIGIT", Character.class);

    /* renamed from: n  reason: collision with root package name */
    public static final jt.c f36557n = q.a("NO_GMT_PREFIX", Boolean.class);

    /* renamed from: o  reason: collision with root package name */
    public static final jt.c f36558o = q.a("DECIMAL_SEPARATOR", Character.class);

    /* renamed from: p  reason: collision with root package name */
    public static final jt.c f36559p = q.a("PAD_CHAR", Character.class);

    /* renamed from: q  reason: collision with root package name */
    public static final jt.c f36560q = q.a("PIVOT_YEAR", Integer.class);

    /* renamed from: r  reason: collision with root package name */
    public static final jt.c f36561r = q.a("TRAILING_CHARACTERS", Boolean.class);

    /* renamed from: s  reason: collision with root package name */
    public static final jt.c f36562s = q.a("PROTECTED_CHARACTERS", Integer.class);

    /* renamed from: t  reason: collision with root package name */
    public static final jt.c f36563t = q.a("CALENDAR_VARIANT", String.class);

    /* renamed from: u  reason: collision with root package name */
    public static final jt.c f36564u = q.a("START_OF_DAY", f0.class);

    /* renamed from: v  reason: collision with root package name */
    public static final jt.c f36565v = q.a("FOUR_DIGIT_YEAR", Boolean.class);

    /* renamed from: w  reason: collision with root package name */
    public static final jt.c f36566w = q.a("TIME_SCALE", qt.f.class);

    /* renamed from: x  reason: collision with root package name */
    public static final jt.c f36567x = q.a("FORMAT_PATTERN", String.class);

    /* renamed from: y  reason: collision with root package name */
    private static final a f36568y = new a();

    /* renamed from: a  reason: collision with root package name */
    private final Map f36569a;

    /* renamed from: kt.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class C0469a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36570a;

        static {
            int[] iArr = new int[g.values().length];
            f36570a = iArr;
            try {
                iArr[g.STRICT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36570a[g.SMART.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36570a[g.LAX.ordinal()] = 3;
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
        return f36568y;
    }

    @Override // jt.d
    public boolean a(jt.c cVar) {
        return this.f36569a.containsKey(cVar.name());
    }

    @Override // jt.d
    public Object b(jt.c cVar, Object obj) {
        Object obj2 = this.f36569a.get(cVar.name());
        if (obj2 == null) {
            return obj;
        }
        return cVar.type().cast(obj2);
    }

    @Override // jt.d
    public Object c(jt.c cVar) {
        Object obj = this.f36569a.get(cVar.name());
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
            return this.f36569a.equals(((a) obj).f36569a);
        }
        return false;
    }

    public int hashCode() {
        return this.f36569a.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(this.f36569a.size() * 32);
        sb2.append(a.class.getName());
        sb2.append('[');
        sb2.append(this.f36569a);
        sb2.append(']');
        return sb2.toString();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f36571a = new HashMap();

        public b() {
        }

        private void g(jt.c cVar, Object obj) {
            if (obj != null) {
                this.f36571a.put(cVar.name(), obj);
                return;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public a a() {
            return new a(this.f36571a, null);
        }

        public b b(jt.c cVar, char c10) {
            this.f36571a.put(cVar.name(), Character.valueOf(c10));
            return this;
        }

        public b c(jt.c cVar, int i10) {
            if (cVar == a.f36560q && i10 < 100) {
                throw new IllegalArgumentException("Pivot year in far past not supported: " + i10);
            }
            this.f36571a.put(cVar.name(), Integer.valueOf(i10));
            return this;
        }

        public b d(jt.c cVar, Enum r52) {
            if (r52 != null) {
                this.f36571a.put(cVar.name(), r52);
                if (cVar == a.f36549f) {
                    int i10 = C0469a.f36570a[((g) g.class.cast(r52)).ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                e(a.f36552i, true);
                                e(a.f36553j, true);
                                e(a.f36561r, true);
                                e(a.f36554k, true);
                                return this;
                            }
                            throw new UnsupportedOperationException(r52.name());
                        }
                        e(a.f36552i, true);
                        e(a.f36553j, false);
                        e(a.f36561r, false);
                        e(a.f36554k, true);
                        return this;
                    }
                    e(a.f36552i, false);
                    e(a.f36553j, false);
                    e(a.f36561r, false);
                    e(a.f36554k, false);
                    return this;
                }
                if (cVar == a.f36555l) {
                    j jVar = (j) j.class.cast(r52);
                    if (jVar.p()) {
                        b(a.f36556m, jVar.l().charAt(0));
                    }
                }
                return this;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public b e(jt.c cVar, boolean z10) {
            this.f36571a.put(cVar.name(), Boolean.valueOf(z10));
            return this;
        }

        public b f(a aVar) {
            this.f36571a.putAll(aVar.f36569a);
            return this;
        }

        public b h(Locale locale) {
            g(a.f36546c, locale);
            return this;
        }

        public b i(net.time4j.tz.k kVar) {
            g(a.f36547d, kVar);
            return this;
        }

        public b(jt.x xVar) {
            g(a.f36545b, kt.b.a(xVar));
        }
    }

    private a() {
        this.f36569a = Collections.EMPTY_MAP;
    }

    private a(Map map) {
        this.f36569a = Collections.unmodifiableMap(new HashMap(map));
    }
}
