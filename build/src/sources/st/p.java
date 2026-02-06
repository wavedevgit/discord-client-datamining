package st;

import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p {

    /* renamed from: a  reason: collision with root package name */
    private static final p f50198a;

    /* renamed from: b  reason: collision with root package name */
    private static final p f50199b;

    /* renamed from: c  reason: collision with root package name */
    private static final p f50200c;

    /* renamed from: d  reason: collision with root package name */
    private static final p f50201d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f50202e;

    /* renamed from: f  reason: collision with root package name */
    private static final Map f50203f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50204a;

        static {
            int[] iArr = new int[k.values().length];
            f50204a = iArr;
            try {
                iArr[k.CARDINALS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50204a[k.ORDINALS.ordinal()] = 2;
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
            int i10 = a.f50204a[kVar.ordinal()];
            if (i10 == 1) {
                return equals ? p.f50198a : p.f50199b;
            } else if (i10 == 2) {
                return equals ? p.f50200c : p.f50201d;
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
        private final k f50205g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f50206h;

        /* synthetic */ c(k kVar, boolean z10, a aVar) {
            this(kVar, z10);
        }

        private c(k kVar, boolean z10) {
            this.f50205g = kVar;
            this.f50206h = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d {

        /* renamed from: a  reason: collision with root package name */
        private static final o f50207a;

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
            f50207a = oVar;
        }
    }

    static {
        k kVar = k.CARDINALS;
        f50198a = new c(kVar, true, null);
        f50199b = new c(kVar, false, null);
        k kVar2 = k.ORDINALS;
        f50200c = new c(kVar2, true, null);
        f50201d = new c(kVar2, false, null);
        f50202e = new ConcurrentHashMap();
        f50203f = new ConcurrentHashMap();
    }

    private static Map e(k kVar) {
        int i10 = a.f50204a[kVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return f50203f;
            }
            throw new UnsupportedOperationException(kVar.name());
        }
        return f50202e;
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
            return d.f50207a.a(locale, kVar);
        }
        return pVar;
    }

    private static String g(Locale locale) {
        return locale.getLanguage() + '_' + locale.getCountry();
    }
}
