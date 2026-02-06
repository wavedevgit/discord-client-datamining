package lc;

import java.util.HashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class u {

    /* renamed from: a  reason: collision with root package name */
    private static final HashSet f36025a = new HashSet();

    /* renamed from: b  reason: collision with root package name */
    private static String f36026b = "goog.exo.core";

    public static synchronized void a(String str) {
        synchronized (u.class) {
            if (f36025a.add(str)) {
                f36026b += ", " + str;
            }
        }
    }

    public static synchronized String b() {
        String str;
        synchronized (u.class) {
            str = f36026b;
        }
        return str;
    }
}
