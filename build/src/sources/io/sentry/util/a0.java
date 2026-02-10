package io.sentry.util;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a0 {

    /* renamed from: a  reason: collision with root package name */
    static boolean f29189a;

    /* renamed from: b  reason: collision with root package name */
    static boolean f29190b;

    static {
        boolean z10;
        try {
            f29189a = "The Android Project".equals(System.getProperty("java.vendor"));
        } catch (Throwable unused) {
            f29189a = false;
        }
        try {
            String property = System.getProperty("java.specification.version");
            if (property != null) {
                if (Double.valueOf(property).doubleValue() >= 9.0d) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                f29190b = z10;
                return;
            }
            f29190b = false;
        } catch (Throwable unused2) {
            f29190b = false;
        }
    }

    public static boolean a() {
        return f29189a;
    }

    public static boolean b() {
        return f29190b;
    }

    public static boolean c() {
        return !f29189a;
    }
}
