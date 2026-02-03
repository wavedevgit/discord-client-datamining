package com.facebook.hermes.intl;

import com.facebook.hermes.intl.e;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f {
    public static HashMap a(List list, Object obj, List list2) {
        e.a c10;
        HashMap hashMap = new HashMap();
        if (da.d.h(da.d.a(obj, "localeMatcher")).equals("lookup")) {
            c10 = e.f((String[]) list.toArray(new String[list.size()]));
        } else {
            c10 = e.c((String[]) list.toArray(new String[list.size()]));
        }
        HashSet<String> hashSet = new HashSet();
        Iterator it = list2.iterator();
        while (it.hasNext()) {
            String str = (String) it.next();
            Object b10 = da.d.b();
            Object obj2 = b10;
            if (!c10.f10001b.isEmpty()) {
                obj2 = b10;
                if (c10.f10001b.containsKey(str)) {
                    String str2 = (String) c10.f10001b.get(str);
                    boolean isEmpty = str2.isEmpty();
                    String str3 = str2;
                    if (isEmpty) {
                        str3 = da.d.r("true");
                    }
                    hashSet.add(str);
                    obj2 = str3;
                }
            }
            if (da.d.g(obj).containsKey(str)) {
                Object a10 = da.d.a(obj, str);
                if (da.d.m(a10) && da.d.h(a10).isEmpty()) {
                    a10 = da.d.o(true);
                }
                if (!da.d.n(a10) && !a10.equals(obj2)) {
                    hashSet.remove(str);
                    obj2 = a10;
                }
            }
            if (!da.d.j(obj2)) {
                obj2 = da.i.f(str, obj2);
            }
            if (da.d.m(obj2) && !da.i.c(str, da.d.h(obj2), c10.f10000a)) {
                hashMap.put(str, da.d.b());
            } else {
                hashMap.put(str, obj2);
            }
        }
        for (String str4 : hashSet) {
            ArrayList arrayList = new ArrayList();
            String h10 = da.d.h(da.i.f(str4, da.d.r((String) c10.f10001b.get(str4))));
            if (!da.d.m(h10) || da.i.c(str4, da.d.h(h10), c10.f10000a)) {
                arrayList.add(h10);
                c10.f10000a.f(str4, arrayList);
            }
        }
        hashMap.put("locale", c10.f10000a);
        return hashMap;
    }
}
