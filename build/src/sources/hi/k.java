package hi;

import ii.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    private static final r0 f25879a = new r0("SplitInstallInfoProvider");

    /* renamed from: b  reason: collision with root package name */
    public static final /* synthetic */ int f25880b = 0;

    public static String a(String str) {
        if (str.startsWith("config.")) {
            return "";
        }
        return str.split("\\.config\\.", 2)[0];
    }

    public static boolean b(String str) {
        if (!str.startsWith("config.") && !str.contains(".config.")) {
            return false;
        }
        return true;
    }
}
