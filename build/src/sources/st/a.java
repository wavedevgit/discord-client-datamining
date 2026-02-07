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
    public static final rt.c f50159b = q.a("CALENDAR_TYPE", String.class);

    /* renamed from: c  reason: collision with root package name */
    public static final rt.c f50160c = q.a("LANGUAGE", Locale.class);

    /* renamed from: d  reason: collision with root package name */
    public static final rt.c f50161d = q.a("TIMEZONE_ID", net.time4j.tz.k.class);

    /* renamed from: e  reason: collision with root package name */
    public static final rt.c f50162e = q.a("TRANSITION_STRATEGY", net.time4j.tz.o.class);

    /* renamed from: f  reason: collision with root package name */
    public static final rt.c f50163f = q.a("LENIENCY", g.class);

    /* renamed from: g  reason: collision with root package name */
    public static final rt.c f50164g = q.a("TEXT_WIDTH", v.class);

    /* renamed from: h  reason: collision with root package name */
    public static final rt.c f50165h = q.a("OUTPUT_CONTEXT", m.class);

    /* renamed from: i  reason: collision with root package name */
    public static final rt.c f50166i = q.a("PARSE_CASE_INSENSITIVE", Boolean.class);

    /* renamed from: j  reason: collision with root package name */
    public static final rt.c f50167j = q.a("PARSE_PARTIAL_COMPARE", Boolean.class);

    /* renamed from: k  reason: collision with root package name */
    public static final rt.c f50168k = q.a("PARSE_MULTIPLE_CONTEXT", Boolean.class);

    /* renamed from: l  reason: collision with root package name */
    public static final rt.c f50169l = q.a("NUMBER_SYSTEM", j.class);

    /* renamed from: m  reason: collision with root package name */
    public static final rt.c f50170m = q.a("ZERO_DIGIT", Character.class);

    /* renamed from: n  reason: collision with root package name */
    public static final rt.c f50171n = q.a("NO_GMT_PREFIX", Boolean.class);

    /* renamed from: o  reason: collision with root package name */
    public static final rt.c f50172o = q.a("DECIMAL_SEPARATOR", Character.class);

    /* renamed from: p  reason: collision with root package name */
    public static final rt.c f50173p = q.a("PAD_CHAR", Character.class);

    /* renamed from: q  reason: collision with root package name */
    public static final rt.c f50174q = q.a("PIVOT_YEAR", Integer.class);

    /* renamed from: r  reason: collision with root package name */
    public static final rt.c f50175r = q.a("TRAILING_CHARACTERS", Boolean.class);

    /* renamed from: s  reason: collision with root package name */
    public static final rt.c f50176s = q.a("PROTECTED_CHARACTERS", Integer.class);

    /* renamed from: t  reason: collision with root package name */
    public static final rt.c f50177t = q.a("CALENDAR_VARIANT", String.class);

    /* renamed from: u  reason: collision with root package name */
    public static final rt.c f50178u = q.a("START_OF_DAY", f0.class);

    /* renamed from: v  reason: collision with root package name */
    public static final rt.c f50179v = q.a("FOUR_DIGIT_YEAR", Boolean.class);

    /* renamed from: w  reason: collision with root package name */
    public static final rt.c f50180w = q.a("TIME_SCALE", yt.f.class);

    /* renamed from: x  reason: collision with root package name */
    public static final rt.c f50181x = q.a("FORMAT_PATTERN", String.class);

    /* renamed from: y  reason: collision with root package name */
    private static final a f50182y = new a();

    /* renamed from: a  reason: collision with root package name */
    private final Map f50183a;

    /* renamed from: st.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class C0657a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50184a;

        static {
            int[] iArr = new int[g.values().length];
            f50184a = iArr;
            try {
                iArr[g.STRICT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50184a[g.SMART.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f50184a[g.LAX.ordinal()] = 3;
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
        return f50182y;
    }

    @Override // rt.d
    public Object a(rt.c cVar) {
        Object obj = this.f50183a.get(cVar.name());
        if (obj != null) {
            return cVar.type().cast(obj);
        }
        throw new NoSuchElementException(cVar.name());
    }

    @Override // rt.d
    public Object b(rt.c cVar, Object obj) {
        Object obj2 = this.f50183a.get(cVar.name());
        if (obj2 == null) {
            return obj;
        }
        return cVar.type().cast(obj2);
    }

    @Override // rt.d
    public boolean c(rt.c cVar) {
        return this.f50183a.containsKey(cVar.name());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            return this.f50183a.equals(((a) obj).f50183a);
        }
        return false;
    }

    public int hashCode() {
        return this.f50183a.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(this.f50183a.size() * 32);
        sb2.append(a.class.getName());
        sb2.append('[');
        sb2.append(this.f50183a);
        sb2.append(']');
        return sb2.toString();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f50185a = new HashMap();

        public b() {
        }

        private void g(rt.c cVar, Object obj) {
            if (obj != null) {
                this.f50185a.put(cVar.name(), obj);
                return;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public a a() {
            return new a(this.f50185a, null);
        }

        public b b(rt.c cVar, char c10) {
            this.f50185a.put(cVar.name(), Character.valueOf(c10));
            return this;
        }

        public b c(rt.c cVar, int i10) {
            if (cVar == a.f50174q && i10 < 100) {
                throw new IllegalArgumentException("Pivot year in far past not supported: " + i10);
            }
            this.f50185a.put(cVar.name(), Integer.valueOf(i10));
            return this;
        }

        public b d(rt.c cVar, Enum r52) {
            if (r52 != null) {
                this.f50185a.put(cVar.name(), r52);
                if (cVar == a.f50163f) {
                    int i10 = C0657a.f50184a[((g) g.class.cast(r52)).ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                e(a.f50166i, true);
                                e(a.f50167j, true);
                                e(a.f50175r, true);
                                e(a.f50168k, true);
                                return this;
                            }
                            throw new UnsupportedOperationException(r52.name());
                        }
                        e(a.f50166i, true);
                        e(a.f50167j, false);
                        e(a.f50175r, false);
                        e(a.f50168k, true);
                        return this;
                    }
                    e(a.f50166i, false);
                    e(a.f50167j, false);
                    e(a.f50175r, false);
                    e(a.f50168k, false);
                    return this;
                }
                if (cVar == a.f50169l) {
                    j jVar = (j) j.class.cast(r52);
                    if (jVar.o()) {
                        b(a.f50170m, jVar.m().charAt(0));
                    }
                }
                return this;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public b e(rt.c cVar, boolean z10) {
            this.f50185a.put(cVar.name(), Boolean.valueOf(z10));
            return this;
        }

        public b f(a aVar) {
            this.f50185a.putAll(aVar.f50183a);
            return this;
        }

        public b h(Locale locale) {
            g(a.f50160c, locale);
            return this;
        }

        public b i(net.time4j.tz.k kVar) {
            g(a.f50161d, kVar);
            return this;
        }

        public b(rt.x xVar) {
            g(a.f50159b, st.b.a(xVar));
        }
    }

    private a() {
        this.f50183a = Collections.EMPTY_MAP;
    }

    private a(Map map) {
        this.f50183a = Collections.unmodifiableMap(new HashMap(map));
    }
}
