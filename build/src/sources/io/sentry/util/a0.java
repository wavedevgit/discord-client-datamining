package io.sentry.util;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a0 {

    /* renamed from: a  reason: collision with root package name */
    static boolean f30693a;

    /* renamed from: b  reason: collision with root package name */
    static boolean f30694b;

    static {
        boolean z10;
        try {
            f30693a = "The Android Project".equals(System.getProperty("java.vendor"));
        } catch (Throwable unused) {
            f30693a = false;
        }
        try {
            String property = System.getProperty("java.specification.version");
            if (property != null) {
                if (Double.valueOf(property).doubleValue() >= 9.0d) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                f30694b = z10;
                return;
            }
            f30694b = false;
        } catch (Throwable unused2) {
            f30694b = false;
        }
    }

    public static boolean a() {
        return f30693a;
    }

    public static boolean b() {
        return f30694b;
    }

    public static boolean c() {
        return !f30693a;
    }
}
