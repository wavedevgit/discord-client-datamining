package net.time4j.calendar.service;

import java.util.Locale;
import rt.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {
    public static String a(String str, y yVar, Locale locale) {
        st.e d10 = st.e.d(yVar.a());
        if (str.equals("iso8601")) {
            return st.b.r(d10, locale);
        }
        String str2 = "F(" + Character.toLowerCase(d10.name().charAt(0)) + ')';
        xt.e j10 = b.j(str, locale);
        if (!j10.b(str2)) {
            j10 = b.j("generic", locale);
        }
        return j10.f(str2);
    }
}
