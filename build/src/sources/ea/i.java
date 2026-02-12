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
    public static String f22386a = "calendar";

    /* renamed from: b  reason: collision with root package name */
    public static String f22387b = "ca";

    /* renamed from: c  reason: collision with root package name */
    public static String f22388c = "numbers";

    /* renamed from: d  reason: collision with root package name */
    public static String f22389d = "nu";

    /* renamed from: e  reason: collision with root package name */
    public static String f22390e = "hours";

    /* renamed from: f  reason: collision with root package name */
    public static String f22391f = "hc";

    /* renamed from: g  reason: collision with root package name */
    public static String f22392g = "collation";

    /* renamed from: h  reason: collision with root package name */
    public static String f22393h = "co";

    /* renamed from: i  reason: collision with root package name */
    public static String f22394i = "colnumeric";

    /* renamed from: j  reason: collision with root package name */
    public static String f22395j = "kn";

    /* renamed from: k  reason: collision with root package name */
    public static String f22396k = "colcasefirst";

    /* renamed from: l  reason: collision with root package name */
    public static String f22397l = "kf";

    /* renamed from: m  reason: collision with root package name */
    private static HashMap f22398m = new a();

    /* renamed from: n  reason: collision with root package name */
    private static HashMap f22399n = new b();

    /* renamed from: o  reason: collision with root package name */
    private static final Map f22400o = new c();

    /* renamed from: p  reason: collision with root package name */
    private static Map f22401p = new d();

    /* renamed from: q  reason: collision with root package name */
    private static Map f22402q = new e();

    /* renamed from: r  reason: collision with root package name */
    private static Map f22403r = new f();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends HashMap {
        a() {
            put(i.f22387b, i.f22386a);
            put(i.f22389d, i.f22388c);
            put(i.f22391f, i.f22390e);
            put(i.f22393h, i.f22392g);
            put(i.f22395j, i.f22394i);
            put(i.f22397l, i.f22396k);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends HashMap {
        b() {
            put(i.f22386a, i.f22387b);
            put(i.f22388c, i.f22389d);
            put(i.f22390e, i.f22391f);
            put(i.f22392g, i.f22393h);
            put(i.f22394i, i.f22395j);
            put(i.f22396k, i.f22397l);
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
        if (f22398m.containsKey(str)) {
            return (String) f22398m.get(str);
        }
        return str;
    }

    public static String b(String str) {
        if (f22399n.containsKey(str)) {
            return (String) f22399n.get(str);
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
        if (!f22401p.containsKey(str)) {
            return str;
        }
        return (String) f22401p.get(str);
    }

    public static String e(String str) {
        Map map = f22400o;
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
        if (!f22402q.containsKey(str)) {
            return str;
        }
        return (String) f22402q.get(str);
    }
}
