package nt;

import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p {

    /* renamed from: a  reason: collision with root package name */
    private static final p f42114a;

    /* renamed from: b  reason: collision with root package name */
    private static final p f42115b;

    /* renamed from: c  reason: collision with root package name */
    private static final p f42116c;

    /* renamed from: d  reason: collision with root package name */
    private static final p f42117d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f42118e;

    /* renamed from: f  reason: collision with root package name */
    private static final Map f42119f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f42120a;

        static {
            int[] iArr = new int[k.values().length];
            f42120a = iArr;
            try {
                iArr[k.CARDINALS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f42120a[k.ORDINALS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements o {
        private b() {
        }

        @Override // nt.o
        public p a(Locale locale, k kVar) {
            boolean equals = locale.getLanguage().equals("en");
            int i10 = a.f42120a[kVar.ordinal()];
            if (i10 == 1) {
                return equals ? p.f42114a : p.f42115b;
            } else if (i10 == 2) {
                return equals ? p.f42116c : p.f42117d;
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
        private final k f42121g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f42122h;

        /* synthetic */ c(k kVar, boolean z10, a aVar) {
            this(kVar, z10);
        }

        private c(k kVar, boolean z10) {
            this.f42121g = kVar;
            this.f42122h = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d {

        /* renamed from: a  reason: collision with root package name */
        private static final o f42123a;

        static {
            o oVar;
            Iterator it = kt.d.c().g(o.class).iterator();
            if (it.hasNext()) {
                oVar = (o) it.next();
            } else {
                oVar = null;
            }
            if (oVar == null) {
                oVar = new b(null);
            }
            f42123a = oVar;
        }
    }

    static {
        k kVar = k.CARDINALS;
        f42114a = new c(kVar, true, null);
        f42115b = new c(kVar, false, null);
        k kVar2 = k.ORDINALS;
        f42116c = new c(kVar2, true, null);
        f42117d = new c(kVar2, false, null);
        f42118e = new ConcurrentHashMap();
        f42119f = new ConcurrentHashMap();
    }

    private static Map e(k kVar) {
        int i10 = a.f42120a[kVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return f42119f;
            }
            throw new UnsupportedOperationException(kVar.name());
        }
        return f42118e;
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
            return d.f42123a.a(locale, kVar);
        }
        return pVar;
    }

    private static String g(Locale locale) {
        return locale.getLanguage() + '_' + locale.getCountry();
    }
}
