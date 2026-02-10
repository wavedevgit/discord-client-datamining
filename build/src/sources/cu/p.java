package cu;

import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p {

    /* renamed from: a  reason: collision with root package name */
    private static final p f21196a;

    /* renamed from: b  reason: collision with root package name */
    private static final p f21197b;

    /* renamed from: c  reason: collision with root package name */
    private static final p f21198c;

    /* renamed from: d  reason: collision with root package name */
    private static final p f21199d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f21200e;

    /* renamed from: f  reason: collision with root package name */
    private static final Map f21201f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f21202a;

        static {
            int[] iArr = new int[k.values().length];
            f21202a = iArr;
            try {
                iArr[k.CARDINALS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f21202a[k.ORDINALS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements o {
        private b() {
        }

        @Override // cu.o
        public p a(Locale locale, k kVar) {
            boolean equals = locale.getLanguage().equals("en");
            int i10 = a.f21202a[kVar.ordinal()];
            if (i10 == 1) {
                return equals ? p.f21196a : p.f21197b;
            } else if (i10 == 2) {
                return equals ? p.f21198c : p.f21199d;
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
        private final k f21203g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f21204h;

        /* synthetic */ c(k kVar, boolean z10, a aVar) {
            this(kVar, z10);
        }

        private c(k kVar, boolean z10) {
            this.f21203g = kVar;
            this.f21204h = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d {

        /* renamed from: a  reason: collision with root package name */
        private static final o f21205a;

        static {
            o oVar;
            Iterator it = zt.d.c().g(o.class).iterator();
            if (it.hasNext()) {
                oVar = (o) it.next();
            } else {
                oVar = null;
            }
            if (oVar == null) {
                oVar = new b(null);
            }
            f21205a = oVar;
        }
    }

    static {
        k kVar = k.CARDINALS;
        f21196a = new c(kVar, true, null);
        f21197b = new c(kVar, false, null);
        k kVar2 = k.ORDINALS;
        f21198c = new c(kVar2, true, null);
        f21199d = new c(kVar2, false, null);
        f21200e = new ConcurrentHashMap();
        f21201f = new ConcurrentHashMap();
    }

    private static Map e(k kVar) {
        int i10 = a.f21202a[kVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return f21201f;
            }
            throw new UnsupportedOperationException(kVar.name());
        }
        return f21200e;
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
            return d.f21205a.a(locale, kVar);
        }
        return pVar;
    }

    private static String g(Locale locale) {
        return locale.getLanguage() + '_' + locale.getCountry();
    }
}
