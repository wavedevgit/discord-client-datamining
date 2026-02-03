package c6;

import com.android.volley.b;
import com.android.volley.v;
import j$.util.DesugarTimeZone;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.TreeMap;
import java.util.TreeSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static List a(List list, b.a aVar) {
        TreeSet treeSet = new TreeSet(String.CASE_INSENSITIVE_ORDER);
        if (!list.isEmpty()) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                treeSet.add(((com.android.volley.g) it.next()).a());
            }
        }
        ArrayList arrayList = new ArrayList(list);
        List list2 = aVar.f8794h;
        if (list2 != null) {
            if (!list2.isEmpty()) {
                for (com.android.volley.g gVar : aVar.f8794h) {
                    if (!treeSet.contains(gVar.a())) {
                        arrayList.add(gVar);
                    }
                }
            }
        } else if (!aVar.f8793g.isEmpty()) {
            for (Map.Entry entry : aVar.f8793g.entrySet()) {
                if (!treeSet.contains(entry.getKey())) {
                    arrayList.add(new com.android.volley.g((String) entry.getKey(), (String) entry.getValue()));
                }
            }
        }
        return arrayList;
    }

    static String b(long j10) {
        return d("EEE, dd MMM yyyy HH:mm:ss 'GMT'").format(new Date(j10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Map c(b.a aVar) {
        if (aVar == null) {
            return Collections.EMPTY_MAP;
        }
        HashMap hashMap = new HashMap();
        String str = aVar.f8788b;
        if (str != null) {
            hashMap.put("If-None-Match", str);
        }
        long j10 = aVar.f8790d;
        if (j10 > 0) {
            hashMap.put("If-Modified-Since", b(j10));
        }
        return hashMap;
    }

    private static SimpleDateFormat d(String str) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(str, Locale.US);
        simpleDateFormat.setTimeZone(DesugarTimeZone.getTimeZone("GMT"));
        return simpleDateFormat;
    }

    public static b.a e(com.android.volley.k kVar) {
        long j10;
        long j11;
        boolean z10;
        long j12;
        long j13;
        long j14;
        long j15;
        long j16;
        long j17;
        long currentTimeMillis = System.currentTimeMillis();
        Map map = kVar.f8823c;
        if (map == null) {
            return null;
        }
        String str = (String) map.get("Date");
        if (str != null) {
            j10 = f(str);
        } else {
            j10 = 0;
        }
        String str2 = (String) map.get("Cache-Control");
        int i10 = 0;
        if (str2 != null) {
            String[] split = str2.split(",", 0);
            z10 = false;
            j12 = 0;
            j13 = 0;
            while (i10 < split.length) {
                String trim = split[i10].trim();
                if (trim.equals("no-cache") || trim.equals("no-store")) {
                    return null;
                }
                if (trim.startsWith("max-age=")) {
                    try {
                        j12 = Long.parseLong(trim.substring(8));
                    } catch (Exception unused) {
                    }
                } else if (trim.startsWith("stale-while-revalidate=")) {
                    j13 = Long.parseLong(trim.substring(23));
                } else if (trim.equals("must-revalidate") || trim.equals("proxy-revalidate")) {
                    z10 = true;
                }
                i10++;
            }
            j11 = 0;
            i10 = 1;
        } else {
            j11 = 0;
            z10 = false;
            j12 = 0;
            j13 = 0;
        }
        String str3 = (String) map.get("Expires");
        if (str3 != null) {
            j14 = f(str3);
        } else {
            j14 = j11;
        }
        String str4 = (String) map.get("Last-Modified");
        if (str4 != null) {
            j15 = f(str4);
        } else {
            j15 = j11;
        }
        String str5 = (String) map.get("ETag");
        if (i10 != 0) {
            long j18 = currentTimeMillis + (j12 * 1000);
            if (z10) {
                j17 = j18;
            } else {
                j17 = (j13 * 1000) + j18;
            }
            j16 = j18;
        } else {
            if (j10 > j11 && j14 >= j10) {
                j16 = currentTimeMillis + (j14 - j10);
            } else {
                j16 = j11;
            }
            j17 = j16;
        }
        b.a aVar = new b.a();
        aVar.f8787a = kVar.f8822b;
        aVar.f8788b = str5;
        aVar.f8792f = j16;
        aVar.f8791e = j17;
        aVar.f8789c = j10;
        aVar.f8790d = j15;
        aVar.f8793g = map;
        aVar.f8794h = kVar.f8824d;
        return aVar;
    }

    public static long f(String str) {
        try {
            return d("EEE, dd MMM yyyy HH:mm:ss zzz").parse(str).getTime();
        } catch (ParseException e10) {
            if (!"0".equals(str) && !"-1".equals(str)) {
                v.d(e10, "Unable to parse dateStr: %s, falling back to 0", str);
                return 0L;
            }
            v.e("Unable to parse dateStr: %s, falling back to 0", str);
            return 0L;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List g(Map map) {
        ArrayList arrayList = new ArrayList(map.size());
        for (Map.Entry entry : map.entrySet()) {
            arrayList.add(new com.android.volley.g((String) entry.getKey(), (String) entry.getValue()));
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Map h(List list) {
        TreeMap treeMap = new TreeMap(String.CASE_INSENSITIVE_ORDER);
        Iterator it = list.iterator();
        while (it.hasNext()) {
            com.android.volley.g gVar = (com.android.volley.g) it.next();
            treeMap.put(gVar.a(), gVar.b());
        }
        return treeMap;
    }
}
