package net.time4j.calendar.service;

import java.util.Locale;
import st.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {
    public static String a(String str, y yVar, Locale locale) {
        tt.e d10 = tt.e.d(yVar.a());
        if (str.equals("iso8601")) {
            return tt.b.r(d10, locale);
        }
        String str2 = "F(" + Character.toLowerCase(d10.name().charAt(0)) + ')';
        yt.e f10 = b.f(str, locale);
        if (!f10.b(str2)) {
            f10 = b.f("generic", locale);
        }
        return f10.f(str2);
    }
}
