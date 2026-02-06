package yv;

import java.util.List;
import kotlin.collections.CollectionsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface o {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static String a(o oVar, Object obj) {
            List c10 = cw.a.c(obj);
            if (c10.size() <= 1) {
                Object firstOrNull = CollectionsKt.firstOrNull(c10);
                if (firstOrNull instanceof String) {
                    return (String) firstOrNull;
                }
            }
            return null;
        }
    }
}
