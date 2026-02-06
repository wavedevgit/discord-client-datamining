package bv;

import java.util.Collection;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static boolean a(d dVar, Object obj) {
            if (obj == null) {
                return false;
            }
            if (obj instanceof Boolean) {
                return ((Boolean) obj).booleanValue();
            }
            if (obj instanceof Number) {
                if (((Number) obj).doubleValue() == 0.0d) {
                    return false;
                }
                return true;
            } else if (obj instanceof String) {
                if (((CharSequence) obj).length() <= 0 || Intrinsics.areEqual(obj, "[]") || Intrinsics.areEqual(obj, "null")) {
                    return false;
                }
                return true;
            } else if (obj instanceof Collection) {
                if (((Collection) obj).isEmpty()) {
                    return false;
                }
                return true;
            } else if ((obj instanceof Object[]) && ((Object[]) obj).length == 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}
