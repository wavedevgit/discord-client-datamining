package da;

import android.icu.text.Collator;
import android.icu.text.NumberingSystem;
import android.icu.util.Calendar;
import android.icu.util.ULocale;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i {

    /* renamed from: a  reason: collision with root package name */
    public static String f20374a = "calendar";

    /* renamed from: b  reason: collision with root package name */
    public static String f20375b = "ca";

    /* renamed from: c  reason: collision with root package name */
    public static String f20376c = "numbers";

    /* renamed from: d  reason: collision with root package name */
    public static String f20377d = "nu";

    /* renamed from: e  reason: collision with root package name */
    public static String f20378e = "hours";

    /* renamed from: f  reason: collision with root package name */
    public static String f20379f = "hc";

    /* renamed from: g  reason: collision with root package name */
    public static String f20380g = "collation";

    /* renamed from: h  reason: collision with root package name */
    public static String f20381h = "co";

    /* renamed from: i  reason: collision with root package name */
    public static String f20382i = "colnumeric";

    /* renamed from: j  reason: collision with root package name */
    public static String f20383j = "kn";

    /* renamed from: k  reason: collision with root package name */
    public static String f20384k = "colcasefirst";

    /* renamed from: l  reason: collision with root package name */
    public static String f20385l = "kf";

    /* renamed from: m  reason: collision with root package name */
    private static HashMap f20386m = new a();

    /* renamed from: n  reason: collision with root package name */
    private static HashMap f20387n = new b();

    /* renamed from: o  reason: collision with root package name */
    private static final Map f20388o = new c();

    /* renamed from: p  reason: collision with root package name */
    private static Map f20389p = new d();

    /* renamed from: q  reason: collision with root package name */
    private static Map f20390q = new e();

    /* renamed from: r  reason: collision with root package name */
    private static Map f20391r = new f();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends HashMap {
        a() {
            put(i.f20375b, i.f20374a);
            put(i.f20377d, i.f20376c);
            put(i.f20379f, i.f20378e);
            put(i.f20381h, i.f20380g);
            put(i.f20383j, i.f20382i);
            put(i.f20385l, i.f20384k);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends HashMap {
        b() {
            put(i.f20374a, i.f20375b);
            put(i.f20376c, i.f20377d);
            put(i.f20378e, i.f20379f);
            put(i.f20380g, i.f20381h);
            put(i.f20382i, i.f20383j);
            put(i.f20384k, i.f20385l);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class c extends HashMap {
        c() {
            put("dictionary", "dict");
            put("phonebook", "phonebk");
            put("traditional", "trad");
            put("gb2312han", "gb2312");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class d extends HashMap {
        d() {
            put("gregorian", "gregory");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class e extends HashMap {
        e() {
            put("traditional", "traditio");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class f extends HashMap {
        f() {
            put("nu", new String[]{"adlm", "ahom", "arab", "arabext", "bali", "beng", "bhks", "brah", "cakm", "cham", "deva", "diak", "fullwide", "gong", "gonm", "gujr", "guru", "hanidec", "hmng", "hmnp", "java", "kali", "khmr", "knda", "lana", "lanatham", "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl", "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong", "mroo", "mtei", "mymr", "mymrshan", "mymrtlng", "newa", "nkoo", "olck", "orya", "osma", "rohg", "saur", "segment", "shrd", "sind", "sinh", "sora", "sund", "takr", "talu", "tamldec", "telu", "thai", "tibt", "tirh", "vaii", "wara", "wcho"});
            put("co", new String[]{"big5han", "compat", "dict", "direct", "ducet", "emoji", "eor", "gb2312", "phonebk", "phonetic", "pinyin", "reformed", "searchjl", "stroke", "trad", "unihan", "zhuyin"});
            put("ca", new String[]{"buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "gregory", "hebrew", "indian", "islamic", "islamic-umalqura", "islamic-tbla", "islamic-civil", "islamic-rgsa", "iso8601", "japanese", "persian", "roc"});
        }
    }

    public static String a(String str) {
        if (f20386m.containsKey(str)) {
            return (String) f20386m.get(str);
        }
        return str;
    }

    public static String b(String str) {
        if (f20387n.containsKey(str)) {
            return (String) f20387n.get(str);
        }
        return str;
    }

    public static boolean c(String str, String str2, da.b bVar) {
        ULocale uLocale = (ULocale) bVar.h();
        String[] strArr = new String[0];
        if (str.equals("co")) {
            if (str2.equals("standard") || str2.equals("search")) {
                return false;
            }
            strArr = Collator.getKeywordValuesForLocale("co", uLocale, false);
        } else if (str.equals("ca")) {
            strArr = Calendar.getKeywordValuesForLocale("ca", uLocale, false);
        } else if (str.equals("nu")) {
            strArr = NumberingSystem.getAvailableNames();
        }
        if (strArr.length == 0) {
            return true;
        }
        return Arrays.asList(strArr).contains(str2);
    }

    public static String d(String str) {
        if (!f20389p.containsKey(str)) {
            return str;
        }
        return (String) f20389p.get(str);
    }

    public static String e(String str) {
        Map map = f20388o;
        if (!map.containsKey(str)) {
            return str;
        }
        return (String) map.get(str);
    }

    public static Object f(String str, Object obj) {
        if (str.equals("ca") && da.d.m(obj)) {
            return d((String) obj);
        }
        if (str.equals("nu") && da.d.m(obj)) {
            return g((String) obj);
        }
        if (str.equals("co") && da.d.m(obj)) {
            return e((String) obj);
        }
        if (str.equals("kn") && da.d.m(obj) && obj.equals("yes")) {
            return da.d.r("true");
        }
        if ((str.equals("kn") || str.equals("kf")) && da.d.m(obj) && obj.equals("no")) {
            return da.d.r("false");
        }
        return obj;
    }

    public static String g(String str) {
        if (!f20390q.containsKey(str)) {
            return str;
        }
        return (String) f20390q.get(str);
    }
}
