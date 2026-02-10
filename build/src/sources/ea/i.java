package ea;

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
    public static String f21218a = "calendar";

    /* renamed from: b  reason: collision with root package name */
    public static String f21219b = "ca";

    /* renamed from: c  reason: collision with root package name */
    public static String f21220c = "numbers";

    /* renamed from: d  reason: collision with root package name */
    public static String f21221d = "nu";

    /* renamed from: e  reason: collision with root package name */
    public static String f21222e = "hours";

    /* renamed from: f  reason: collision with root package name */
    public static String f21223f = "hc";

    /* renamed from: g  reason: collision with root package name */
    public static String f21224g = "collation";

    /* renamed from: h  reason: collision with root package name */
    public static String f21225h = "co";

    /* renamed from: i  reason: collision with root package name */
    public static String f21226i = "colnumeric";

    /* renamed from: j  reason: collision with root package name */
    public static String f21227j = "kn";

    /* renamed from: k  reason: collision with root package name */
    public static String f21228k = "colcasefirst";

    /* renamed from: l  reason: collision with root package name */
    public static String f21229l = "kf";

    /* renamed from: m  reason: collision with root package name */
    private static HashMap f21230m = new a();

    /* renamed from: n  reason: collision with root package name */
    private static HashMap f21231n = new b();

    /* renamed from: o  reason: collision with root package name */
    private static final Map f21232o = new c();

    /* renamed from: p  reason: collision with root package name */
    private static Map f21233p = new d();

    /* renamed from: q  reason: collision with root package name */
    private static Map f21234q = new e();

    /* renamed from: r  reason: collision with root package name */
    private static Map f21235r = new f();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends HashMap {
        a() {
            put(i.f21219b, i.f21218a);
            put(i.f21221d, i.f21220c);
            put(i.f21223f, i.f21222e);
            put(i.f21225h, i.f21224g);
            put(i.f21227j, i.f21226i);
            put(i.f21229l, i.f21228k);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends HashMap {
        b() {
            put(i.f21218a, i.f21219b);
            put(i.f21220c, i.f21221d);
            put(i.f21222e, i.f21223f);
            put(i.f21224g, i.f21225h);
            put(i.f21226i, i.f21227j);
            put(i.f21228k, i.f21229l);
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
        if (f21230m.containsKey(str)) {
            return (String) f21230m.get(str);
        }
        return str;
    }

    public static String b(String str) {
        if (f21231n.containsKey(str)) {
            return (String) f21231n.get(str);
        }
        return str;
    }

    public static boolean c(String str, String str2, ea.b bVar) {
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
        if (!f21233p.containsKey(str)) {
            return str;
        }
        return (String) f21233p.get(str);
    }

    public static String e(String str) {
        Map map = f21232o;
        if (!map.containsKey(str)) {
            return str;
        }
        return (String) map.get(str);
    }

    public static Object f(String str, Object obj) {
        if (str.equals("ca") && ea.d.m(obj)) {
            return d((String) obj);
        }
        if (str.equals("nu") && ea.d.m(obj)) {
            return g((String) obj);
        }
        if (str.equals("co") && ea.d.m(obj)) {
            return e((String) obj);
        }
        if (str.equals("kn") && ea.d.m(obj) && obj.equals("yes")) {
            return ea.d.r("true");
        }
        if ((str.equals("kn") || str.equals("kf")) && ea.d.m(obj) && obj.equals("no")) {
            return ea.d.r("false");
        }
        return obj;
    }

    public static String g(String str) {
        if (!f21234q.containsKey(str)) {
            return str;
        }
        return (String) f21234q.get(str);
    }
}
