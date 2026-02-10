package net.time4j.calendar.service;

import bu.y;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {
    public static String a(String str, y yVar, Locale locale) {
        cu.e d10 = cu.e.d(yVar.a());
        if (str.equals("iso8601")) {
            return cu.b.r(d10, locale);
        }
        String str2 = "F(" + Character.toLowerCase(d10.name().charAt(0)) + ')';
        hu.e f10 = b.f(str, locale);
        if (!f10.b(str2)) {
            f10 = b.f("generic", locale);
        }
        return f10.f(str2);
    }
}
