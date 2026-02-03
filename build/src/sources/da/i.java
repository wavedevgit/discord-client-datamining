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
    public static String f21299a = "calendar";

    /* renamed from: b  reason: collision with root package name */
    public static String f21300b = "ca";

    /* renamed from: c  reason: collision with root package name */
    public static String f21301c = "numbers";

    /* renamed from: d  reason: collision with root package name */
    public static String f21302d = "nu";

    /* renamed from: e  reason: collision with root package name */
    public static String f21303e = "hours";

    /* renamed from: f  reason: collision with root package name */
    public static String f21304f = "hc";

    /* renamed from: g  reason: collision with root package name */
    public static String f21305g = "collation";

    /* renamed from: h  reason: collision with root package name */
    public static String f21306h = "co";

    /* renamed from: i  reason: collision with root package name */
    public static String f21307i = "colnumeric";

    /* renamed from: j  reason: collision with root package name */
    public static String f21308j = "kn";

    /* renamed from: k  reason: collision with root package name */
    public static String f21309k = "colcasefirst";

    /* renamed from: l  reason: collision with root package name */
    public static String f21310l = "kf";

    /* renamed from: m  reason: collision with root package name */
    private static HashMap f21311m = new a();

    /* renamed from: n  reason: collision with root package name */
    private static HashMap f21312n = new b();

    /* renamed from: o  reason: collision with root package name */
    private static final Map f21313o = new c();

    /* renamed from: p  reason: collision with root package name */
    private static Map f21314p = new d();

    /* renamed from: q  reason: collision with root package name */
    private static Map f21315q = new e();

    /* renamed from: r  reason: collision with root package name */
    private static Map f21316r = new f();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends HashMap {
        a() {
            put(i.f21300b, i.f21299a);
            put(i.f21302d, i.f21301c);
            put(i.f21304f, i.f21303e);
            put(i.f21306h, i.f21305g);
            put(i.f21308j, i.f21307i);
            put(i.f21310l, i.f21309k);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends HashMap {
        b() {
            put(i.f21299a, i.f21300b);
            put(i.f21301c, i.f21302d);
            put(i.f21303e, i.f21304f);
            put(i.f21305g, i.f21306h);
            put(i.f21307i, i.f21308j);
            put(i.f21309k, i.f21310l);
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
        if (f21311m.containsKey(str)) {
            return (String) f21311m.get(str);
        }
        return str;
    }

    public static String b(String str) {
        if (f21312n.containsKey(str)) {
            return (String) f21312n.get(str);
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
        if (!f21314p.containsKey(str)) {
            return str;
        }
        return (String) f21314p.get(str);
    }

    public static String e(String str) {
        Map map = f21313o;
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
        if (!f21315q.containsKey(str)) {
            return str;
        }
        return (String) f21315q.get(str);
    }
}
