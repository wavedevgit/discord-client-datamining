package rs;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract /* synthetic */ class g0 {

    /* renamed from: a  reason: collision with root package name */
    private static final int f48961a = Runtime.getRuntime().availableProcessors();

    public static final int a() {
        return f48961a;
    }

    public static final String b(String str) {
        try {
            return System.getProperty(str);
        } catch (SecurityException unused) {
            return null;
        }
    }
}
