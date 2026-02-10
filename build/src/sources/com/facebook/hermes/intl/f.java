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
        if (ea.d.h(ea.d.a(obj, "localeMatcher")).equals("lookup")) {
            c10 = e.f((String[]) list.toArray(new String[list.size()]));
        } else {
            c10 = e.c((String[]) list.toArray(new String[list.size()]));
        }
        HashSet<String> hashSet = new HashSet();
        Iterator it = list2.iterator();
        while (it.hasNext()) {
            String str = (String) it.next();
            Object b10 = ea.d.b();
            Object obj2 = b10;
            if (!c10.f11002b.isEmpty()) {
                obj2 = b10;
                if (c10.f11002b.containsKey(str)) {
                    String str2 = (String) c10.f11002b.get(str);
                    boolean isEmpty = str2.isEmpty();
                    String str3 = str2;
                    if (isEmpty) {
                        str3 = ea.d.r("true");
                    }
                    hashSet.add(str);
                    obj2 = str3;
                }
            }
            if (ea.d.g(obj).containsKey(str)) {
                Object a10 = ea.d.a(obj, str);
                if (ea.d.m(a10) && ea.d.h(a10).isEmpty()) {
                    a10 = ea.d.o(true);
                }
                if (!ea.d.n(a10) && !a10.equals(obj2)) {
                    hashSet.remove(str);
                    obj2 = a10;
                }
            }
            if (!ea.d.j(obj2)) {
                obj2 = ea.i.f(str, obj2);
            }
            if (ea.d.m(obj2) && !ea.i.c(str, ea.d.h(obj2), c10.f11001a)) {
                hashMap.put(str, ea.d.b());
            } else {
                hashMap.put(str, obj2);
            }
        }
        for (String str4 : hashSet) {
            ArrayList arrayList = new ArrayList();
            String h10 = ea.d.h(ea.i.f(str4, ea.d.r((String) c10.f11002b.get(str4))));
            if (!ea.d.m(h10) || ea.i.c(str4, ea.d.h(h10), c10.f11001a)) {
                arrayList.add(h10);
                c10.f11001a.f(str4, arrayList);
            }
        }
        hashMap.put("locale", c10.f11001a);
        return hashMap;
    }
}
