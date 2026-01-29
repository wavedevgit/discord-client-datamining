package com.facebook.hermes.intl;

import android.icu.lang.UCharacter;
import android.icu.util.ULocale;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class Intl {
    private static List a(List list) {
        if (list.size() == 0) {
            return Collections.EMPTY_LIST;
        }
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            String str = (String) it.next();
            if (str != null) {
                if (!str.isEmpty()) {
                    String a10 = d.a(str);
                    if (!a10.isEmpty() && !arrayList.contains(a10)) {
                        arrayList.add(a10);
                    }
                } else {
                    throw new da.f("Incorrect locale information provided");
                }
            } else {
                throw new da.f("Incorrect locale information provided");
            }
        }
        return arrayList;
    }

    @fb.a
    public static List<String> getCanonicalLocales(List<String> list) {
        return a(list);
    }

    @fb.a
    public static String toLocaleLowerCase(List<String> list, String str) {
        return UCharacter.toLowerCase((ULocale) e.c((String[]) list.toArray(new String[list.size()])).f11403a.h(), str);
    }

    @fb.a
    public static String toLocaleUpperCase(List<String> list, String str) {
        return UCharacter.toUpperCase((ULocale) e.c((String[]) list.toArray(new String[list.size()])).f11403a.h(), str);
    }
}
