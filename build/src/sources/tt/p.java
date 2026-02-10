package tt;

import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p {

    /* renamed from: a  reason: collision with root package name */
    private static final p f51090a;

    /* renamed from: b  reason: collision with root package name */
    private static final p f51091b;

    /* renamed from: c  reason: collision with root package name */
    private static final p f51092c;

    /* renamed from: d  reason: collision with root package name */
    private static final p f51093d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f51094e;

    /* renamed from: f  reason: collision with root package name */
    private static final Map f51095f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f51096a;

        static {
            int[] iArr = new int[k.values().length];
            f51096a = iArr;
            try {
                iArr[k.CARDINALS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f51096a[k.ORDINALS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements o {
        private b() {
        }

        @Override // tt.o
        public p a(Locale locale, k kVar) {
            boolean equals = locale.getLanguage().equals("en");
            int i10 = a.f51096a[kVar.ordinal()];
            if (i10 == 1) {
                return equals ? p.f51090a : p.f51091b;
            } else if (i10 == 2) {
                return equals ? p.f51092c : p.f51093d;
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
        private final k f51097g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f51098h;

        /* synthetic */ c(k kVar, boolean z10, a aVar) {
            this(kVar, z10);
        }

        private c(k kVar, boolean z10) {
            this.f51097g = kVar;
            this.f51098h = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d {

        /* renamed from: a  reason: collision with root package name */
        private static final o f51099a;

        static {
            o oVar;
            Iterator it = qt.d.c().g(o.class).iterator();
            if (it.hasNext()) {
                oVar = (o) it.next();
            } else {
                oVar = null;
            }
            if (oVar == null) {
                oVar = new b(null);
            }
            f51099a = oVar;
        }
    }

    static {
        k kVar = k.CARDINALS;
        f51090a = new c(kVar, true, null);
        f51091b = new c(kVar, false, null);
        k kVar2 = k.ORDINALS;
        f51092c = new c(kVar2, true, null);
        f51093d = new c(kVar2, false, null);
        f51094e = new ConcurrentHashMap();
        f51095f = new ConcurrentHashMap();
    }

    private static Map e(k kVar) {
        int i10 = a.f51096a[kVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return f51095f;
            }
            throw new UnsupportedOperationException(kVar.name());
        }
        return f51094e;
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
            return d.f51099a.a(locale, kVar);
        }
        return pVar;
    }

    private static String g(Locale locale) {
        return locale.getLanguage() + '_' + locale.getCountry();
    }
}
