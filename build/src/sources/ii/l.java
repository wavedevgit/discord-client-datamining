package ii;

import java.util.logging.Logger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static final Logger f28420a = Logger.getLogger(l.class.getName());

    /* renamed from: b  reason: collision with root package name */
    private static final k f28421b = b();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements k {
        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String a(String str) {
        if (c(str)) {
            return null;
        }
        return str;
    }

    private static k b() {
        return new b();
    }

    static boolean c(String str) {
        if (str != null && !str.isEmpty()) {
            return false;
        }
        return true;
    }
}
