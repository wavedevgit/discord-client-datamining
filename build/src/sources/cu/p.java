package cu;

import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p {

    /* renamed from: a  reason: collision with root package name */
    private static final p f21197a;

    /* renamed from: b  reason: collision with root package name */
    private static final p f21198b;

    /* renamed from: c  reason: collision with root package name */
    private static final p f21199c;

    /* renamed from: d  reason: collision with root package name */
    private static final p f21200d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f21201e;

    /* renamed from: f  reason: collision with root package name */
    private static final Map f21202f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f21203a;

        static {
            int[] iArr = new int[k.values().length];
            f21203a = iArr;
            try {
                iArr[k.CARDINALS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f21203a[k.ORDINALS.ordinal()] = 2;
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
            int i10 = a.f21203a[kVar.ordinal()];
            if (i10 == 1) {
                return equals ? p.f21197a : p.f21198b;
            } else if (i10 == 2) {
                return equals ? p.f21199c : p.f21200d;
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
        private final k f21204g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f21205h;

        /* synthetic */ c(k kVar, boolean z10, a aVar) {
            this(kVar, z10);
        }

        private c(k kVar, boolean z10) {
            this.f21204g = kVar;
            this.f21205h = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d {

        /* renamed from: a  reason: collision with root package name */
        private static final o f21206a;

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
            f21206a = oVar;
        }
    }

    static {
        k kVar = k.CARDINALS;
        f21197a = new c(kVar, true, null);
        f21198b = new c(kVar, false, null);
        k kVar2 = k.ORDINALS;
        f21199c = new c(kVar2, true, null);
        f21200d = new c(kVar2, false, null);
        f21201e = new ConcurrentHashMap();
        f21202f = new ConcurrentHashMap();
    }

    private static Map e(k kVar) {
        int i10 = a.f21203a[kVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return f21202f;
            }
            throw new UnsupportedOperationException(kVar.name());
        }
        return f21201e;
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
            return d.f21206a.a(locale, kVar);
        }
        return pVar;
    }

    private static String g(Locale locale) {
        return locale.getLanguage() + '_' + locale.getCountry();
    }
}
