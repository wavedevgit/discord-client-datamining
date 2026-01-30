package io.sentry.util;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a0 {

    /* renamed from: a  reason: collision with root package name */
    static boolean f30812a;

    /* renamed from: b  reason: collision with root package name */
    static boolean f30813b;

    static {
        boolean z10;
        try {
            f30812a = "The Android Project".equals(System.getProperty("java.vendor"));
        } catch (Throwable unused) {
            f30812a = false;
        }
        try {
            String property = System.getProperty("java.specification.version");
            if (property != null) {
                if (Double.valueOf(property).doubleValue() >= 9.0d) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                f30813b = z10;
                return;
            }
            f30813b = false;
        } catch (Throwable unused2) {
            f30813b = false;
        }
    }

    public static boolean a() {
        return f30812a;
    }

    public static boolean b() {
        return f30813b;
    }

    public static boolean c() {
        return !f30812a;
    }
}
