package lc;

import java.util.HashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class u {

    /* renamed from: a  reason: collision with root package name */
    private static final HashSet f37236a = new HashSet();

    /* renamed from: b  reason: collision with root package name */
    private static String f37237b = "goog.exo.core";

    public static synchronized void a(String str) {
        synchronized (u.class) {
            if (f37236a.add(str)) {
                f37237b += ", " + str;
            }
        }
    }

    public static synchronized String b() {
        String str;
        synchronized (u.class) {
            str = f37237b;
        }
        return str;
    }
}
