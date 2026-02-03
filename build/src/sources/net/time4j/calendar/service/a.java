package net.time4j.calendar.service;

import java.util.Locale;
import kt.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {
    public static String a(String str, y yVar, Locale locale) {
        lt.e d10 = lt.e.d(yVar.a());
        if (str.equals("iso8601")) {
            return lt.b.r(d10, locale);
        }
        String str2 = "F(" + Character.toLowerCase(d10.name().charAt(0)) + ')';
        qt.e h10 = b.h(str, locale);
        if (!h10.b(str2)) {
            h10 = b.h("generic", locale);
        }
        return h10.f(str2);
    }
}
