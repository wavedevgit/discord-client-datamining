package io.sentry.util;

import io.sentry.s8;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c0 {
    public static s8 a(s8 s8Var) {
        if (s8Var.c() != null) {
            return s8Var;
        }
        return new s8(s8Var.e(), s8Var.d(), b(null, s8Var.d(), s8Var.e()), s8Var.b(), s8Var.a());
    }

    public static Double b(Double d10, Double d11, Boolean bool) {
        if (d10 != null) {
            return d10;
        }
        double c10 = d0.a().c();
        if (d11 != null && bool != null) {
            if (bool.booleanValue()) {
                return Double.valueOf(c10 * d11.doubleValue());
            }
            return Double.valueOf(d11.doubleValue() + (c10 * (1.0d - d11.doubleValue())));
        }
        return Double.valueOf(c10);
    }

    public static boolean c(Double d10) {
        return e(d10, true);
    }

    public static boolean d(Double d10) {
        return e(d10, true);
    }

    private static boolean e(Double d10, boolean z10) {
        if (d10 == null) {
            return z10;
        }
        if (!d10.isNaN() && d10.doubleValue() >= 0.0d && d10.doubleValue() <= 1.0d) {
            return true;
        }
        return false;
    }

    public static boolean f(Double d10) {
        return e(d10, true);
    }

    public static boolean g(Double d10) {
        return h(d10, true);
    }

    public static boolean h(Double d10, boolean z10) {
        return e(d10, z10);
    }
}
