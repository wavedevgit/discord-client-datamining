package io.sentry.util;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a0 {

    /* renamed from: a  reason: collision with root package name */
    static boolean f30378a;

    /* renamed from: b  reason: collision with root package name */
    static boolean f30379b;

    static {
        boolean z10;
        try {
            f30378a = "The Android Project".equals(System.getProperty("java.vendor"));
        } catch (Throwable unused) {
            f30378a = false;
        }
        try {
            String property = System.getProperty("java.specification.version");
            if (property != null) {
                if (Double.valueOf(property).doubleValue() >= 9.0d) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                f30379b = z10;
                return;
            }
            f30379b = false;
        } catch (Throwable unused2) {
            f30379b = false;
        }
    }

    public static boolean a() {
        return f30378a;
    }

    public static boolean b() {
        return f30379b;
    }

    public static boolean c() {
        return !f30378a;
    }
}
