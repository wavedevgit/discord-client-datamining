package st;

import java.util.Collections;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.NoSuchElementException;
import rt.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements rt.d {

    /* renamed from: b  reason: collision with root package name */
    public static final rt.c f50111b = q.a("CALENDAR_TYPE", String.class);

    /* renamed from: c  reason: collision with root package name */
    public static final rt.c f50112c = q.a("LANGUAGE", Locale.class);

    /* renamed from: d  reason: collision with root package name */
    public static final rt.c f50113d = q.a("TIMEZONE_ID", net.time4j.tz.k.class);

    /* renamed from: e  reason: collision with root package name */
    public static final rt.c f50114e = q.a("TRANSITION_STRATEGY", net.time4j.tz.o.class);

    /* renamed from: f  reason: collision with root package name */
    public static final rt.c f50115f = q.a("LENIENCY", g.class);

    /* renamed from: g  reason: collision with root package name */
    public static final rt.c f50116g = q.a("TEXT_WIDTH", v.class);

    /* renamed from: h  reason: collision with root package name */
    public static final rt.c f50117h = q.a("OUTPUT_CONTEXT", m.class);

    /* renamed from: i  reason: collision with root package name */
    public static final rt.c f50118i = q.a("PARSE_CASE_INSENSITIVE", Boolean.class);

    /* renamed from: j  reason: collision with root package name */
    public static final rt.c f50119j = q.a("PARSE_PARTIAL_COMPARE", Boolean.class);

    /* renamed from: k  reason: collision with root package name */
    public static final rt.c f50120k = q.a("PARSE_MULTIPLE_CONTEXT", Boolean.class);

    /* renamed from: l  reason: collision with root package name */
    public static final rt.c f50121l = q.a("NUMBER_SYSTEM", j.class);

    /* renamed from: m  reason: collision with root package name */
    public static final rt.c f50122m = q.a("ZERO_DIGIT", Character.class);

    /* renamed from: n  reason: collision with root package name */
    public static final rt.c f50123n = q.a("NO_GMT_PREFIX", Boolean.class);

    /* renamed from: o  reason: collision with root package name */
    public static final rt.c f50124o = q.a("DECIMAL_SEPARATOR", Character.class);

    /* renamed from: p  reason: collision with root package name */
    public static final rt.c f50125p = q.a("PAD_CHAR", Character.class);

    /* renamed from: q  reason: collision with root package name */
    public static final rt.c f50126q = q.a("PIVOT_YEAR", Integer.class);

    /* renamed from: r  reason: collision with root package name */
    public static final rt.c f50127r = q.a("TRAILING_CHARACTERS", Boolean.class);

    /* renamed from: s  reason: collision with root package name */
    public static final rt.c f50128s = q.a("PROTECTED_CHARACTERS", Integer.class);

    /* renamed from: t  reason: collision with root package name */
    public static final rt.c f50129t = q.a("CALENDAR_VARIANT", String.class);

    /* renamed from: u  reason: collision with root package name */
    public static final rt.c f50130u = q.a("START_OF_DAY", f0.class);

    /* renamed from: v  reason: collision with root package name */
    public static final rt.c f50131v = q.a("FOUR_DIGIT_YEAR", Boolean.class);

    /* renamed from: w  reason: collision with root package name */
    public static final rt.c f50132w = q.a("TIME_SCALE", yt.f.class);

    /* renamed from: x  reason: collision with root package name */
    public static final rt.c f50133x = q.a("FORMAT_PATTERN", String.class);

    /* renamed from: y  reason: collision with root package name */
    private static final a f50134y = new a();

    /* renamed from: a  reason: collision with root package name */
    private final Map f50135a;

    /* renamed from: st.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class C0657a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50136a;

        static {
            int[] iArr = new int[g.values().length];
            f50136a = iArr;
            try {
                iArr[g.STRICT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50136a[g.SMART.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f50136a[g.LAX.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* synthetic */ a(Map map, C0657a c0657a) {
        this(map);
    }

    public static rt.c e(String str, Class cls) {
        return q.a(str, cls);
    }

    public static a f() {
        return f50134y;
    }

    @Override // rt.d
    public Object a(rt.c cVar) {
        Object obj = this.f50135a.get(cVar.name());
        if (obj != null) {
            return cVar.type().cast(obj);
        }
        throw new NoSuchElementException(cVar.name());
    }

    @Override // rt.d
    public Object b(rt.c cVar, Object obj) {
        Object obj2 = this.f50135a.get(cVar.name());
        if (obj2 == null) {
            return obj;
        }
        return cVar.type().cast(obj2);
    }

    @Override // rt.d
    public boolean c(rt.c cVar) {
        return this.f50135a.containsKey(cVar.name());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            return this.f50135a.equals(((a) obj).f50135a);
        }
        return false;
    }

    public int hashCode() {
        return this.f50135a.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(this.f50135a.size() * 32);
        sb2.append(a.class.getName());
        sb2.append('[');
        sb2.append(this.f50135a);
        sb2.append(']');
        return sb2.toString();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f50137a = new HashMap();

        public b() {
        }

        private void g(rt.c cVar, Object obj) {
            if (obj != null) {
                this.f50137a.put(cVar.name(), obj);
                return;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public a a() {
            return new a(this.f50137a, null);
        }

        public b b(rt.c cVar, char c10) {
            this.f50137a.put(cVar.name(), Character.valueOf(c10));
            return this;
        }

        public b c(rt.c cVar, int i10) {
            if (cVar == a.f50126q && i10 < 100) {
                throw new IllegalArgumentException("Pivot year in far past not supported: " + i10);
            }
            this.f50137a.put(cVar.name(), Integer.valueOf(i10));
            return this;
        }

        public b d(rt.c cVar, Enum r52) {
            if (r52 != null) {
                this.f50137a.put(cVar.name(), r52);
                if (cVar == a.f50115f) {
                    int i10 = C0657a.f50136a[((g) g.class.cast(r52)).ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                e(a.f50118i, true);
                                e(a.f50119j, true);
                                e(a.f50127r, true);
                                e(a.f50120k, true);
                                return this;
                            }
                            throw new UnsupportedOperationException(r52.name());
                        }
                        e(a.f50118i, true);
                        e(a.f50119j, false);
                        e(a.f50127r, false);
                        e(a.f50120k, true);
                        return this;
                    }
                    e(a.f50118i, false);
                    e(a.f50119j, false);
                    e(a.f50127r, false);
                    e(a.f50120k, false);
                    return this;
                }
                if (cVar == a.f50121l) {
                    j jVar = (j) j.class.cast(r52);
                    if (jVar.o()) {
                        b(a.f50122m, jVar.m().charAt(0));
                    }
                }
                return this;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public b e(rt.c cVar, boolean z10) {
            this.f50137a.put(cVar.name(), Boolean.valueOf(z10));
            return this;
        }

        public b f(a aVar) {
            this.f50137a.putAll(aVar.f50135a);
            return this;
        }

        public b h(Locale locale) {
            g(a.f50112c, locale);
            return this;
        }

        public b i(net.time4j.tz.k kVar) {
            g(a.f50113d, kVar);
            return this;
        }

        public b(rt.x xVar) {
            g(a.f50111b, st.b.a(xVar));
        }
    }

    private a() {
        this.f50135a = Collections.EMPTY_MAP;
    }

    private a(Map map) {
        this.f50135a = Collections.unmodifiableMap(new HashMap(map));
    }
}
