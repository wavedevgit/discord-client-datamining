package kt;

import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p {

    /* renamed from: a  reason: collision with root package name */
    private static final p f36632a;

    /* renamed from: b  reason: collision with root package name */
    private static final p f36633b;

    /* renamed from: c  reason: collision with root package name */
    private static final p f36634c;

    /* renamed from: d  reason: collision with root package name */
    private static final p f36635d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f36636e;

    /* renamed from: f  reason: collision with root package name */
    private static final Map f36637f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36638a;

        static {
            int[] iArr = new int[k.values().length];
            f36638a = iArr;
            try {
                iArr[k.CARDINALS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36638a[k.ORDINALS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements o {
        private b() {
        }

        @Override // kt.o
        public p a(Locale locale, k kVar) {
            boolean equals = locale.getLanguage().equals("en");
            int i10 = a.f36638a[kVar.ordinal()];
            if (i10 == 1) {
                return equals ? p.f36632a : p.f36633b;
            } else if (i10 == 2) {
                return equals ? p.f36634c : p.f36635d;
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
        private final k f36639g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f36640h;

        /* synthetic */ c(k kVar, boolean z10, a aVar) {
            this(kVar, z10);
        }

        private c(k kVar, boolean z10) {
            this.f36639g = kVar;
            this.f36640h = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d {

        /* renamed from: a  reason: collision with root package name */
        private static final o f36641a;

        static {
            o oVar;
            Iterator it = gt.d.c().g(o.class).iterator();
            if (it.hasNext()) {
                oVar = (o) it.next();
            } else {
                oVar = null;
            }
            if (oVar == null) {
                oVar = new b(null);
            }
            f36641a = oVar;
        }
    }

    static {
        k kVar = k.CARDINALS;
        f36632a = new c(kVar, true, null);
        f36633b = new c(kVar, false, null);
        k kVar2 = k.ORDINALS;
        f36634c = new c(kVar2, true, null);
        f36635d = new c(kVar2, false, null);
        f36636e = new ConcurrentHashMap();
        f36637f = new ConcurrentHashMap();
    }

    private static Map e(k kVar) {
        int i10 = a.f36638a[kVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return f36637f;
            }
            throw new UnsupportedOperationException(kVar.name());
        }
        return f36636e;
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
            return d.f36641a.a(locale, kVar);
        }
        return pVar;
    }

    private static String g(Locale locale) {
        return locale.getLanguage() + '_' + locale.getCountry();
    }
}
