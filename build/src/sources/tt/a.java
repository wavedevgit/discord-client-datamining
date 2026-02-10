package tt;

import java.util.Collections;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.NoSuchElementException;
import st.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements st.d {

    /* renamed from: b  reason: collision with root package name */
    public static final st.c f51003b = q.a("CALENDAR_TYPE", String.class);

    /* renamed from: c  reason: collision with root package name */
    public static final st.c f51004c = q.a("LANGUAGE", Locale.class);

    /* renamed from: d  reason: collision with root package name */
    public static final st.c f51005d = q.a("TIMEZONE_ID", net.time4j.tz.k.class);

    /* renamed from: e  reason: collision with root package name */
    public static final st.c f51006e = q.a("TRANSITION_STRATEGY", net.time4j.tz.o.class);

    /* renamed from: f  reason: collision with root package name */
    public static final st.c f51007f = q.a("LENIENCY", g.class);

    /* renamed from: g  reason: collision with root package name */
    public static final st.c f51008g = q.a("TEXT_WIDTH", v.class);

    /* renamed from: h  reason: collision with root package name */
    public static final st.c f51009h = q.a("OUTPUT_CONTEXT", m.class);

    /* renamed from: i  reason: collision with root package name */
    public static final st.c f51010i = q.a("PARSE_CASE_INSENSITIVE", Boolean.class);

    /* renamed from: j  reason: collision with root package name */
    public static final st.c f51011j = q.a("PARSE_PARTIAL_COMPARE", Boolean.class);

    /* renamed from: k  reason: collision with root package name */
    public static final st.c f51012k = q.a("PARSE_MULTIPLE_CONTEXT", Boolean.class);

    /* renamed from: l  reason: collision with root package name */
    public static final st.c f51013l = q.a("NUMBER_SYSTEM", j.class);

    /* renamed from: m  reason: collision with root package name */
    public static final st.c f51014m = q.a("ZERO_DIGIT", Character.class);

    /* renamed from: n  reason: collision with root package name */
    public static final st.c f51015n = q.a("NO_GMT_PREFIX", Boolean.class);

    /* renamed from: o  reason: collision with root package name */
    public static final st.c f51016o = q.a("DECIMAL_SEPARATOR", Character.class);

    /* renamed from: p  reason: collision with root package name */
    public static final st.c f51017p = q.a("PAD_CHAR", Character.class);

    /* renamed from: q  reason: collision with root package name */
    public static final st.c f51018q = q.a("PIVOT_YEAR", Integer.class);

    /* renamed from: r  reason: collision with root package name */
    public static final st.c f51019r = q.a("TRAILING_CHARACTERS", Boolean.class);

    /* renamed from: s  reason: collision with root package name */
    public static final st.c f51020s = q.a("PROTECTED_CHARACTERS", Integer.class);

    /* renamed from: t  reason: collision with root package name */
    public static final st.c f51021t = q.a("CALENDAR_VARIANT", String.class);

    /* renamed from: u  reason: collision with root package name */
    public static final st.c f51022u = q.a("START_OF_DAY", f0.class);

    /* renamed from: v  reason: collision with root package name */
    public static final st.c f51023v = q.a("FOUR_DIGIT_YEAR", Boolean.class);

    /* renamed from: w  reason: collision with root package name */
    public static final st.c f51024w = q.a("TIME_SCALE", zt.f.class);

    /* renamed from: x  reason: collision with root package name */
    public static final st.c f51025x = q.a("FORMAT_PATTERN", String.class);

    /* renamed from: y  reason: collision with root package name */
    private static final a f51026y = new a();

    /* renamed from: a  reason: collision with root package name */
    private final Map f51027a;

    /* renamed from: tt.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class C0704a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f51028a;

        static {
            int[] iArr = new int[g.values().length];
            f51028a = iArr;
            try {
                iArr[g.STRICT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f51028a[g.SMART.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f51028a[g.LAX.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* synthetic */ a(Map map, C0704a c0704a) {
        this(map);
    }

    public static st.c e(String str, Class cls) {
        return q.a(str, cls);
    }

    public static a f() {
        return f51026y;
    }

    @Override // st.d
    public Object a(st.c cVar) {
        Object obj = this.f51027a.get(cVar.name());
        if (obj != null) {
            return cVar.type().cast(obj);
        }
        throw new NoSuchElementException(cVar.name());
    }

    @Override // st.d
    public Object b(st.c cVar, Object obj) {
        Object obj2 = this.f51027a.get(cVar.name());
        if (obj2 == null) {
            return obj;
        }
        return cVar.type().cast(obj2);
    }

    @Override // st.d
    public boolean c(st.c cVar) {
        return this.f51027a.containsKey(cVar.name());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            return this.f51027a.equals(((a) obj).f51027a);
        }
        return false;
    }

    public int hashCode() {
        return this.f51027a.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(this.f51027a.size() * 32);
        sb2.append(a.class.getName());
        sb2.append('[');
        sb2.append(this.f51027a);
        sb2.append(']');
        return sb2.toString();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f51029a = new HashMap();

        public b() {
        }

        private void g(st.c cVar, Object obj) {
            if (obj != null) {
                this.f51029a.put(cVar.name(), obj);
                return;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public a a() {
            return new a(this.f51029a, null);
        }

        public b b(st.c cVar, char c10) {
            this.f51029a.put(cVar.name(), Character.valueOf(c10));
            return this;
        }

        public b c(st.c cVar, int i10) {
            if (cVar == a.f51018q && i10 < 100) {
                throw new IllegalArgumentException("Pivot year in far past not supported: " + i10);
            }
            this.f51029a.put(cVar.name(), Integer.valueOf(i10));
            return this;
        }

        public b d(st.c cVar, Enum r52) {
            if (r52 != null) {
                this.f51029a.put(cVar.name(), r52);
                if (cVar == a.f51007f) {
                    int i10 = C0704a.f51028a[((g) g.class.cast(r52)).ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                e(a.f51010i, true);
                                e(a.f51011j, true);
                                e(a.f51019r, true);
                                e(a.f51012k, true);
                                return this;
                            }
                            throw new UnsupportedOperationException(r52.name());
                        }
                        e(a.f51010i, true);
                        e(a.f51011j, false);
                        e(a.f51019r, false);
                        e(a.f51012k, true);
                        return this;
                    }
                    e(a.f51010i, false);
                    e(a.f51011j, false);
                    e(a.f51019r, false);
                    e(a.f51012k, false);
                    return this;
                }
                if (cVar == a.f51013l) {
                    j jVar = (j) j.class.cast(r52);
                    if (jVar.o()) {
                        b(a.f51014m, jVar.m().charAt(0));
                    }
                }
                return this;
            }
            throw new NullPointerException("Missing attribute value for key: " + cVar);
        }

        public b e(st.c cVar, boolean z10) {
            this.f51029a.put(cVar.name(), Boolean.valueOf(z10));
            return this;
        }

        public b f(a aVar) {
            this.f51029a.putAll(aVar.f51027a);
            return this;
        }

        public b h(Locale locale) {
            g(a.f51004c, locale);
            return this;
        }

        public b i(net.time4j.tz.k kVar) {
            g(a.f51005d, kVar);
            return this;
        }

        public b(st.x xVar) {
            g(a.f51003b, tt.b.a(xVar));
        }
    }

    private a() {
        this.f51027a = Collections.EMPTY_MAP;
    }

    private a(Map map) {
        this.f51027a = Collections.unmodifiableMap(new HashMap(map));
    }
}
