package lc;

import java.util.HashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class u {

    /* renamed from: a  reason: collision with root package name */
    private static final HashSet f37106a = new HashSet();

    /* renamed from: b  reason: collision with root package name */
    private static String f37107b = "goog.exo.core";

    public static synchronized void a(String str) {
        synchronized (u.class) {
            if (f37106a.add(str)) {
                f37107b += ", " + str;
            }
        }
    }

    public static synchronized String b() {
        String str;
        synchronized (u.class) {
            str = f37107b;
        }
        return str;
    }
}
