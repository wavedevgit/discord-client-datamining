package st;

import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p {

    /* renamed from: a  reason: collision with root package name */
    private static final p f50246a;

    /* renamed from: b  reason: collision with root package name */
    private static final p f50247b;

    /* renamed from: c  reason: collision with root package name */
    private static final p f50248c;

    /* renamed from: d  reason: collision with root package name */
    private static final p f50249d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f50250e;

    /* renamed from: f  reason: collision with root package name */
    private static final Map f50251f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50252a;

        static {
            int[] iArr = new int[k.values().length];
            f50252a = iArr;
            try {
                iArr[k.CARDINALS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50252a[k.ORDINALS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements o {
        private b() {
        }

        @Override // st.o
        public p a(Locale locale, k kVar) {
            boolean equals = locale.getLanguage().equals("en");
            int i10 = a.f50252a[kVar.ordinal()];
            if (i10 == 1) {
                return equals ? p.f50246a : p.f50247b;
            } else if (i10 == 2) {
                return equals ? p.f50248c : p.f50249d;
            } else {
                throw new UnsupportedOperationException(kVar.name());
            }
        }

        /* synthetic */ b(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c extends p {

        /* renamed from: g  reason: collision with root package name */
        private final k f50253g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f50254h;

        /* synthetic */ c(k kVar, boolean z10, a aVar) {
            this(kVar, z10);
        }

        private c(k kVar, boolean z10) {
            this.f50253g = kVar;
            this.f50254h = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d {

        /* renamed from: a  reason: collision with root package name */
        private static final o f50255a;

        static {
            o oVar;
            Iterator it = pt.d.c().g(o.class).iterator();
            if (it.hasNext()) {
                oVar = (o) it.next();
            } else {
                oVar = null;
            }
            if (oVar == null) {
                oVar = new b(null);
            }
            f50255a = oVar;
        }
    }

    static {
        k kVar = k.CARDINALS;
        f50246a = new c(kVar, true, null);
        f50247b = new c(kVar, false, null);
        k kVar2 = k.ORDINALS;
        f50248c = new c(kVar2, true, null);
        f50249d = new c(kVar2, false, null);
        f50250e = new ConcurrentHashMap();
        f50251f = new ConcurrentHashMap();
    }

    private static Map e(k kVar) {
        int i10 = a.f50252a[kVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return f50251f;
            }
            throw new UnsupportedOperationException(kVar.name());
        }
        return f50250e;
    }

    public static p f(Locale locale, k kVar) {
        Map e10 = e(kVar);
        p pVar = null;
        if (!e10.isEmpty()) {
            if (!locale.getCountry().equals("")) {
                pVar = (p) e10.get(g(locale));
            }
            if (pVar == null) {
                pVar = (p) e10.get(locale.getLanguage());
            }
        }
        if (pVar == null) {
            return d.f50255a.a(locale, kVar);
        }
        return pVar;
    }

    private static String g(Locale locale) {
        return locale.getLanguage() + '_' + locale.getCountry();
    }
}
