package ie;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lc.l0;
import ne.h0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private static final Pattern f28384a = Pattern.compile("^NOTE([ \t].*)?$");

    public static Matcher a(h0 h0Var) {
        String s10;
        while (true) {
            String s11 = h0Var.s();
            if (s11 != null) {
                if (f28384a.matcher(s11).matches()) {
                    do {
                        s10 = h0Var.s();
                        if (s10 != null) {
                        }
                    } while (!s10.isEmpty());
                } else {
                    Matcher matcher = f.f28358a.matcher(s11);
                    if (matcher.matches()) {
                        return matcher;
                    }
                }
            } else {
                return null;
            }
        }
    }

    public static boolean b(h0 h0Var) {
        String s10 = h0Var.s();
        if (s10 != null && s10.startsWith("WEBVTT")) {
            return true;
        }
        return false;
    }

    public static float c(String str) {
        if (str.endsWith("%")) {
            return Float.parseFloat(str.substring(0, str.length() - 1)) / 100.0f;
        }
        throw new NumberFormatException("Percentages must end with %");
    }

    public static long d(String str) {
        String[] e12 = w0.e1(str, "\\.");
        long j10 = 0;
        for (String str2 : w0.d1(e12[0], ":")) {
            j10 = (j10 * 60) + Long.parseLong(str2);
        }
        long j11 = j10 * 1000;
        if (e12.length == 2) {
            j11 += Long.parseLong(e12[1]);
        }
        return j11 * 1000;
    }

    public static void e(h0 h0Var) {
        int f10 = h0Var.f();
        if (b(h0Var)) {
            return;
        }
        h0Var.U(f10);
        throw l0.a("Expected WEBVTT. Got " + h0Var.s(), null);
    }
}
