package ut;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.text.DateFormatSymbols;
import java.util.Collections;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import kt.d;
import net.time4j.tz.s;
import st.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements s {

    /* renamed from: a  reason: collision with root package name */
    private static final ConcurrentMap f51031a = new ConcurrentHashMap();

    /* renamed from: b  reason: collision with root package name */
    private static final Set f51032b;

    /* renamed from: c  reason: collision with root package name */
    private static final Map f51033c;

    /* renamed from: d  reason: collision with root package name */
    private static final Map f51034d;

    static {
        HashSet hashSet = new HashSet();
        hashSet.add("Z");
        hashSet.add("GMT");
        hashSet.add("GMT0");
        hashSet.add("Greenwich");
        hashSet.add("UCT");
        hashSet.add("UTC");
        hashSet.add("UTC0");
        hashSet.add("Universal");
        hashSet.add("Zulu");
        f51032b = Collections.unmodifiableSet(hashSet);
        HashMap hashMap = new HashMap();
        g(hashMap, "data/zone1970.tab");
        f51033c = Collections.unmodifiableMap(hashMap);
        HashMap hashMap2 = new HashMap();
        a(hashMap2, "CL", "America/Santiago");
        a(hashMap2, "CN", "Asia/Shanghai");
        a(hashMap2, "DE", "Europe/Berlin");
        a(hashMap2, "EC", "America/Guayaquil");
        a(hashMap2, "ES", "Europe/Madrid");
        a(hashMap2, "MH", "Pacific/Majuro");
        a(hashMap2, "MY", "Asia/Kuala_Lumpur");
        a(hashMap2, "NZ", "Pacific/Auckland");
        a(hashMap2, "PT", "Europe/Lisbon");
        a(hashMap2, "UA", "Europe/Kiev");
        a(hashMap2, "UZ", "Asia/Tashkent");
        f51034d = Collections.unmodifiableMap(hashMap2);
    }

    private static void a(Map map, String str, String str2) {
        map.put(str, str2);
    }

    private static void c(Map map, String str, String str2) {
        Set set = (Set) map.get(str);
        if (set == null) {
            set = new LinkedHashSet();
            map.put(str, set);
        }
        set.add(str2);
    }

    private static e e(Locale locale) {
        return e.h("olson/zones/tzname", locale);
    }

    static void g(Map map, String str) {
        InputStream e10 = d.c().e(d.c().f("olson", b.class, str), true);
        if (e10 == null) {
            e10 = b.class.getClassLoader().getResourceAsStream(str);
        }
        try {
            if (e10 != null) {
                try {
                    try {
                        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(e10, "UTF-8"));
                        while (true) {
                            String readLine = bufferedReader.readLine();
                            if (readLine != null) {
                                if (!readLine.startsWith("#") && !readLine.isEmpty()) {
                                    String[] split = readLine.split("\t");
                                    if (split.length >= 3) {
                                        for (String str2 : split[0].split(",")) {
                                            c(map, str2, split[2]);
                                        }
                                    }
                                }
                            } else {
                                try {
                                    e10.close();
                                    return;
                                } catch (IOException e11) {
                                    e11.printStackTrace(System.err);
                                    return;
                                }
                            }
                        }
                    } catch (IOException e12) {
                        throw new IllegalStateException(e12);
                    }
                } catch (UnsupportedEncodingException e13) {
                    throw new AssertionError(e13);
                }
            } else {
                System.err.println("Warning: File \"" + str + "\" not found.");
            }
        } catch (Throwable th2) {
            try {
                e10.close();
            } catch (IOException e14) {
                e14.printStackTrace(System.err);
            }
            throw th2;
        }
    }

    @Override // net.time4j.tz.s
    public Set b(Locale locale, boolean z10) {
        String country = locale.getCountry();
        if (z10) {
            if (country.equals("US")) {
                LinkedHashSet linkedHashSet = new LinkedHashSet();
                linkedHashSet.add("America/New_York");
                linkedHashSet.add("America/Chicago");
                linkedHashSet.add("America/Denver");
                linkedHashSet.add("America/Los_Angeles");
                linkedHashSet.add("America/Anchorage");
                linkedHashSet.add("Pacific/Honolulu");
                return Collections.unmodifiableSet(linkedHashSet);
            }
            String str = (String) f51034d.get(country);
            if (str != null) {
                return Collections.singleton(str);
            }
        }
        Set set = (Set) f51033c.get(country);
        if (set == null) {
            return Collections.EMPTY_SET;
        }
        return set;
    }

    @Override // net.time4j.tz.s
    public String d(boolean z10, Locale locale) {
        String str;
        e e10 = e(locale);
        if (z10) {
            str = "utc-literal";
        } else {
            str = "offset-pattern";
        }
        return e10.f(str);
    }

    @Override // net.time4j.tz.s
    public String f(String str, net.time4j.tz.d dVar, Locale locale) {
        if (f51032b.contains(str)) {
            return "";
        }
        Map map = (Map) f51031a.get(locale);
        if (map == null) {
            String[][] zoneStrings = DateFormatSymbols.getInstance(locale).getZoneStrings();
            HashMap hashMap = new HashMap();
            for (String[] strArr : zoneStrings) {
                EnumMap enumMap = new EnumMap(net.time4j.tz.d.class);
                enumMap.put((EnumMap) net.time4j.tz.d.LONG_STANDARD_TIME, (net.time4j.tz.d) strArr[1]);
                enumMap.put((EnumMap) net.time4j.tz.d.SHORT_STANDARD_TIME, (net.time4j.tz.d) strArr[2]);
                enumMap.put((EnumMap) net.time4j.tz.d.LONG_DAYLIGHT_TIME, (net.time4j.tz.d) strArr[3]);
                enumMap.put((EnumMap) net.time4j.tz.d.SHORT_DAYLIGHT_TIME, (net.time4j.tz.d) strArr[4]);
                hashMap.put(strArr[0], enumMap);
            }
            map = (Map) f51031a.putIfAbsent(locale, hashMap);
            if (map == null) {
                map = hashMap;
            }
        }
        Map map2 = (Map) map.get(str);
        if (map2 == null) {
            return "";
        }
        return (String) map2.get(dVar);
    }
}
