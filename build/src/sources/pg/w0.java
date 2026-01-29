package pg;

import java.util.List;
import java.util.RandomAccess;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class w0 {
    public static List a(List list, uj ujVar) {
        if (list instanceof RandomAccess) {
            return new t0(list, ujVar);
        }
        return new v0(list, ujVar);
    }
}
