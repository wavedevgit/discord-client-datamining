package lt;

import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p {

    /* renamed from: a  reason: collision with root package name */
    private static final p f37714a;

    /* renamed from: b  reason: collision with root package name */
    private static final p f37715b;

    /* renamed from: c  reason: collision with root package name */
    private static final p f37716c;

    /* renamed from: d  reason: collision with root package name */
    private static final p f37717d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f37718e;

    /* renamed from: f  reason: collision with root package name */
    private static final Map f37719f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f37720a;

        static {
            int[] iArr = new int[k.values().length];
            f37720a = iArr;
            try {
                iArr[k.CARDINALS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f37720a[k.ORDINALS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements o {
        private b() {
        }

        @Override // lt.o
        public p a(Locale locale, k kVar) {
            boolean equals = locale.getLanguage().equals("en");
            int i10 = a.f37720a[kVar.ordinal()];
            if (i10 == 1) {
                return equals ? p.f37714a : p.f37715b;
            } else if (i10 == 2) {
                return equals ? p.f37716c : p.f37717d;
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
        private final k f37721g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f37722h;

        /* synthetic */ c(k kVar, boolean z10, a aVar) {
            this(kVar, z10);
        }

        private c(k kVar, boolean z10) {
            this.f37721g = kVar;
            this.f37722h = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d {

        /* renamed from: a  reason: collision with root package name */
        private static final o f37723a;

        static {
            o oVar;
            Iterator it = ht.d.c().g(o.class).iterator();
            if (it.hasNext()) {
                oVar = (o) it.next();
            } else {
                oVar = null;
            }
            if (oVar == null) {
                oVar = new b(null);
            }
            f37723a = oVar;
        }
    }

    static {
        k kVar = k.CARDINALS;
        f37714a = new c(kVar, true, null);
        f37715b = new c(kVar, false, null);
        k kVar2 = k.ORDINALS;
        f37716c = new c(kVar2, true, null);
        f37717d = new c(kVar2, false, null);
        f37718e = new ConcurrentHashMap();
        f37719f = new ConcurrentHashMap();
    }

    private static Map e(k kVar) {
        int i10 = a.f37720a[kVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return f37719f;
            }
            throw new UnsupportedOperationException(kVar.name());
        }
        return f37718e;
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
            return d.f37723a.a(locale, kVar);
        }
        return pVar;
    }

    private static String g(Locale locale) {
        return locale.getLanguage() + '_' + locale.getCountry();
    }
}
