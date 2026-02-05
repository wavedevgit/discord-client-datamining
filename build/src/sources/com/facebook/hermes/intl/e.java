package com.facebook.hermes.intl;

import android.icu.util.ULocale;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public da.b f10385a;

        /* renamed from: b  reason: collision with root package name */
        public HashMap f10386b = new HashMap();
    }

    public static String a(String[] strArr, String str) {
        while (Arrays.asList(strArr).indexOf(str) <= -1) {
            int lastIndexOf = str.lastIndexOf("-");
            if (lastIndexOf < 0) {
                return "";
            }
            if (lastIndexOf >= 2 && str.charAt(lastIndexOf - 2) == '-') {
                lastIndexOf -= 2;
            }
            str = str.substring(0, lastIndexOf);
        }
        return str;
    }

    public static ULocale b(da.b bVar) {
        boolean[] zArr = new boolean[1];
        ULocale acceptLanguage = ULocale.acceptLanguage(new ULocale[]{(ULocale) bVar.c()}, ULocale.getAvailableLocales(), zArr);
        if (!zArr[0] && acceptLanguage != null) {
            return acceptLanguage;
        }
        return null;
    }

    public static a c(String[] strArr) {
        a aVar = new a();
        for (String str : strArr) {
            da.b b10 = da.g.b(str);
            ULocale b11 = b(b10);
            if (b11 != null) {
                aVar.f10385a = da.h.k(b11);
                aVar.f10386b = b10.a();
                return aVar;
            }
        }
        aVar.f10385a = da.h.i();
        return aVar;
    }

    public static String[] d(String[] strArr) {
        ArrayList arrayList = new ArrayList();
        for (String str : strArr) {
            if (b(da.g.b(str)) != null) {
                arrayList.add(str);
            }
        }
        return (String[]) arrayList.toArray(new String[arrayList.size()]);
    }

    public static String[] e() {
        ArrayList arrayList = new ArrayList();
        for (Locale locale : Locale.getAvailableLocales()) {
            arrayList.add(locale.toLanguageTag());
        }
        return (String[]) arrayList.toArray(new String[arrayList.size()]);
    }

    public static a f(String[] strArr) {
        return g(strArr, e());
    }

    public static a g(String[] strArr, String[] strArr2) {
        a aVar = new a();
        for (String str : strArr) {
            da.b b10 = da.g.b(str);
            String a10 = a(strArr2, b10.e());
            if (!a10.isEmpty()) {
                aVar.f10385a = da.g.b(a10);
                aVar.f10386b = b10.a();
                return aVar;
            }
        }
        aVar.f10385a = da.g.a();
        return aVar;
    }

    public static String[] h(String[] strArr) {
        ArrayList arrayList = new ArrayList();
        String[] e10 = e();
        for (String str : strArr) {
            String a10 = a(e10, da.g.b(str).e());
            if (a10 != null && !a10.isEmpty()) {
                arrayList.add(str);
            }
        }
        return (String[]) arrayList.toArray(new String[arrayList.size()]);
    }
}
