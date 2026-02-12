package io.sentry.util;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a0 {

    /* renamed from: a  reason: collision with root package name */
    static boolean f30125a;

    /* renamed from: b  reason: collision with root package name */
    static boolean f30126b;

    static {
        boolean z10;
        try {
            f30125a = "The Android Project".equals(System.getProperty("java.vendor"));
        } catch (Throwable unused) {
            f30125a = false;
        }
        try {
            String property = System.getProperty("java.specification.version");
            if (property != null) {
                if (Double.valueOf(property).doubleValue() >= 9.0d) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                f30126b = z10;
                return;
            }
            f30126b = false;
        } catch (Throwable unused2) {
            f30126b = false;
        }
    }

    public static boolean a() {
        return f30125a;
    }

    public static boolean b() {
        return f30126b;
    }

    public static boolean c() {
        return !f30125a;
    }
}
