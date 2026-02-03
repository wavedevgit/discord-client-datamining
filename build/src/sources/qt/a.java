package qt;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import lt.k;
import lt.o;
import lt.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements o {

    /* renamed from: a  reason: collision with root package name */
    private static final Map f47861a;

    /* renamed from: b  reason: collision with root package name */
    private static final p f47862b;

    /* renamed from: c  reason: collision with root package name */
    private static final Map f47863c;

    /* renamed from: d  reason: collision with root package name */
    private static final p f47864d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: qt.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class C0584a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f47865a;

        static {
            int[] iArr = new int[k.values().length];
            f47865a = iArr;
            try {
                iArr[k.CARDINALS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f47865a[k.ORDINALS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b extends p {

        /* renamed from: g  reason: collision with root package name */
        private final int f47866g;

        /* synthetic */ b(int i10, C0584a c0584a) {
            this(i10);
        }

        private b(int i10) {
            this.f47866g = i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c extends p {

        /* renamed from: g  reason: collision with root package name */
        private final int f47867g;

        /* synthetic */ c(int i10, C0584a c0584a) {
            this(i10);
        }

        private c(int i10) {
            this.f47867g = i10;
        }
    }

    static {
        HashMap hashMap = new HashMap(140);
        f47861a = hashMap;
        f47862b = new b(0, null);
        HashMap hashMap2 = new HashMap();
        b(hashMap2, "bm bo dz id ig ii in ja jbo jv jw kde kea km ko lkt", -1);
        b(hashMap2, "lo ms my nqo root sah ses sg th to vi wo yo zh", -1);
        b(hashMap2, "pt_PT", 0);
        b(hashMap2, "am as bn fa gu hi kn zu", 1);
        b(hashMap2, "ff fr hy kab pt", 1);
        b(hashMap2, "si", 1);
        b(hashMap2, "ak bh guw ln mg nso pa ti wa", 1);
        b(hashMap2, "tzm", 2);
        b(hashMap2, "is", 3);
        b(hashMap2, "mk", 4);
        b(hashMap2, "ceb fil tl", 5);
        b(hashMap2, "lv prg", 6);
        b(hashMap2, "lag ksh", 7);
        b(hashMap2, "iu naq se sma smi smj smn sms", 8);
        b(hashMap2, "shi", 9);
        b(hashMap2, "mo ro", 10);
        b(hashMap2, "bs hr sh sr", 11);
        b(hashMap2, "gd", 12);
        b(hashMap2, "sl", 13);
        b(hashMap2, "he iw", 14);
        b(hashMap2, "cs sk", 15);
        b(hashMap2, "pl", 16);
        b(hashMap2, "be", 17);
        b(hashMap2, "lt", 18);
        b(hashMap2, "mt", 19);
        b(hashMap2, "ru uk", 17);
        b(hashMap2, "br", 20);
        b(hashMap2, "ga", 21);
        b(hashMap2, "gv", 22);
        b(hashMap2, "ar", 23);
        b(hashMap2, "cy", 24);
        b(hashMap2, "dsb hsb", 25);
        b(hashMap2, "kw", 26);
        hashMap.putAll(hashMap2);
        HashMap hashMap3 = new HashMap(140);
        f47863c = hashMap3;
        f47864d = new c(0, null);
        HashMap hashMap4 = new HashMap();
        c(hashMap4, "sv", 1);
        c(hashMap4, "fil fr ga hy lo mo ms ro tl vi", 2);
        c(hashMap4, "hu", 3);
        c(hashMap4, "ne", 4);
        c(hashMap4, "kk", 5);
        c(hashMap4, "it sc scn", 6);
        c(hashMap4, "ka", 7);
        c(hashMap4, "sq", 8);
        c(hashMap4, "en", 9);
        c(hashMap4, "mr", 10);
        c(hashMap4, "ca", 11);
        c(hashMap4, "mk", 12);
        c(hashMap4, "az", 13);
        c(hashMap4, "gu hi", 14);
        c(hashMap4, "as bn", 15);
        c(hashMap4, "cy", 16);
        c(hashMap4, "be", 17);
        c(hashMap4, "uk", 18);
        c(hashMap4, "tk", 19);
        c(hashMap4, "or", 20);
        c(hashMap4, "gd", 21);
        c(hashMap4, "kw", 22);
        hashMap3.putAll(hashMap4);
    }

    private static void b(Map map, String str, int i10) {
        for (String str2 : str.split(" ")) {
            map.put(str2, new b(i10, null));
        }
    }

    private static void c(Map map, String str, int i10) {
        for (String str2 : str.split(" ")) {
            map.put(str2, new c(i10, null));
        }
    }

    @Override // lt.o
    public p a(Locale locale, k kVar) {
        Map map;
        p pVar;
        p pVar2;
        int i10 = C0584a.f47865a[kVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                map = f47863c;
                pVar = f47864d;
            } else {
                throw new UnsupportedOperationException(kVar.name());
            }
        } else {
            map = f47861a;
            pVar = f47862b;
        }
        String country = locale.getCountry();
        if (!country.isEmpty()) {
            pVar2 = (p) map.get(locale.getLanguage() + '_' + country);
        } else {
            pVar2 = null;
        }
        if (pVar2 == null) {
            pVar2 = (p) map.get(locale.getLanguage());
        }
        if (pVar2 == null) {
            return pVar;
        }
        return pVar2;
    }
}
