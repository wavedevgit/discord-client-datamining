package k4;

import android.content.Context;
import androidx.work.impl.p0;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class y {
    public static y e(Context context) {
        return p0.k(context);
    }

    public static void f(Context context, androidx.work.a aVar) {
        p0.f(context, aVar);
    }

    public abstract q a(List list);

    public final q b(z zVar) {
        return a(Collections.singletonList(zVar));
    }

    public abstract q c(String str, f fVar, List list);

    public q d(String str, f fVar, p pVar) {
        return c(str, fVar, Collections.singletonList(pVar));
    }
}
