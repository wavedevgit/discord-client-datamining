package com.henninghall.date_picker;

import com.henninghall.date_picker.f;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {
    public static String a(String str) {
        return e(str, f.c.d);
    }

    public static String b(Locale locale) {
        return ((SimpleDateFormat) DateFormat.getDateInstance(0, locale)).toLocalizedPattern().replaceAll(",", "").replaceAll("([a-zA-Z]+)", " $1").trim();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String c(Locale locale) {
        return ((SimpleDateFormat) DateFormat.getDateTimeInstance(0, 0, locale)).toLocalizedPattern().replace(",", "");
    }

    public static String d(String str) {
        return e(str, f.c.MMMEd);
    }

    private static String e(String str, f.c cVar) {
        try {
            try {
                return f.b(str, cVar);
            } catch (f.d unused) {
                return f.b(str.substring(0, str.indexOf("_")), cVar);
            }
        } catch (f.d | IndexOutOfBoundsException unused2) {
            return (String) f.f16604a.get(cVar);
        }
    }

    public static Locale f(String str) {
        try {
            return ev.a.e(str);
        } catch (Exception unused) {
            return ev.a.e(str.substring(0, str.indexOf("_")));
        }
    }

    public static String g(String str) {
        return e(str, f.c.y);
    }

    public static boolean h(Locale locale) {
        DateFormat timeInstance = DateFormat.getTimeInstance(0, locale);
        if (!(timeInstance instanceof SimpleDateFormat) || !((SimpleDateFormat) timeInstance).toPattern().contains("a")) {
            return false;
        }
        return true;
    }
}
