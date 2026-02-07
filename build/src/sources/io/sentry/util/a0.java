package io.sentry.util;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a0 {

    /* renamed from: a  reason: collision with root package name */
    static boolean f28989a;

    /* renamed from: b  reason: collision with root package name */
    static boolean f28990b;

    static {
        boolean z10;
        try {
            f28989a = "The Android Project".equals(System.getProperty("java.vendor"));
        } catch (Throwable unused) {
            f28989a = false;
        }
        try {
            String property = System.getProperty("java.specification.version");
            if (property != null) {
                if (Double.valueOf(property).doubleValue() >= 9.0d) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                f28990b = z10;
                return;
            }
            f28990b = false;
        } catch (Throwable unused2) {
            f28990b = false;
        }
    }

    public static boolean a() {
        return f28989a;
    }

    public static boolean b() {
        return f28990b;
    }

    public static boolean c() {
        return !f28989a;
    }
}
