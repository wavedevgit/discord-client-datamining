package io.sentry.util;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a0 {

    /* renamed from: a  reason: collision with root package name */
    static boolean f29797a;

    /* renamed from: b  reason: collision with root package name */
    static boolean f29798b;

    static {
        boolean z10;
        try {
            f29797a = "The Android Project".equals(System.getProperty("java.vendor"));
        } catch (Throwable unused) {
            f29797a = false;
        }
        try {
            String property = System.getProperty("java.specification.version");
            if (property != null) {
                if (Double.valueOf(property).doubleValue() >= 9.0d) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                f29798b = z10;
                return;
            }
            f29798b = false;
        } catch (Throwable unused2) {
            f29798b = false;
        }
    }

    public static boolean a() {
        return f29797a;
    }

    public static boolean b() {
        return f29798b;
    }

    public static boolean c() {
        return !f29797a;
    }
}
