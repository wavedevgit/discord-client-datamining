package qt;

import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p {

    /* renamed from: a  reason: collision with root package name */
    private static final p f48174a;

    /* renamed from: b  reason: collision with root package name */
    private static final p f48175b;

    /* renamed from: c  reason: collision with root package name */
    private static final p f48176c;

    /* renamed from: d  reason: collision with root package name */
    private static final p f48177d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f48178e;

    /* renamed from: f  reason: collision with root package name */
    private static final Map f48179f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f48180a;

        static {
            int[] iArr = new int[k.values().length];
            f48180a = iArr;
            try {
                iArr[k.CARDINALS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f48180a[k.ORDINALS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements o {
        private b() {
        }

        @Override // qt.o
        public p a(Locale locale, k kVar) {
            boolean equals = locale.getLanguage().equals("en");
            int i10 = a.f48180a[kVar.ordinal()];
            if (i10 == 1) {
                return equals ? p.f48174a : p.f48175b;
            } else if (i10 == 2) {
                return equals ? p.f48176c : p.f48177d;
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
        private final k f48181g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f48182h;

        /* synthetic */ c(k kVar, boolean z10, a aVar) {
            this(kVar, z10);
        }

        private c(k kVar, boolean z10) {
            this.f48181g = kVar;
            this.f48182h = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d {

        /* renamed from: a  reason: collision with root package name */
        private static final o f48183a;

        static {
            o oVar;
            Iterator it = nt.d.c().g(o.class).iterator();
            if (it.hasNext()) {
                oVar = (o) it.next();
            } else {
                oVar = null;
            }
            if (oVar == null) {
                oVar = new b(null);
            }
            f48183a = oVar;
        }
    }

    static {
        k kVar = k.CARDINALS;
        f48174a = new c(kVar, true, null);
        f48175b = new c(kVar, false, null);
        k kVar2 = k.ORDINALS;
        f48176c = new c(kVar2, true, null);
        f48177d = new c(kVar2, false, null);
        f48178e = new ConcurrentHashMap();
        f48179f = new ConcurrentHashMap();
    }

    private static Map e(k kVar) {
        int i10 = a.f48180a[kVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return f48179f;
            }
            throw new UnsupportedOperationException(kVar.name());
        }
        return f48178e;
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
            return d.f48183a.a(locale, kVar);
        }
        return pVar;
    }

    private static String g(Locale locale) {
        return locale.getLanguage() + '_' + locale.getCountry();
    }
}
