package vo;

import android.content.Context;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private static b f52337a;

    public static final void a(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        c(context).b();
    }

    private static final synchronized b b(Context context) {
        synchronized (c.class) {
            b bVar = f52337a;
            if (bVar != null) {
                return bVar;
            }
            b bVar2 = new b(context);
            f52337a = bVar2;
            return bVar2;
        }
    }

    public static final b c(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        b bVar = f52337a;
        if (bVar == null) {
            return b(context);
        }
        return bVar;
    }

    public static final void d(Context context, List directoriesToDeleteOnError) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(directoriesToDeleteOnError, "directoriesToDeleteOnError");
        b c10 = c(context);
        c10.d();
        c10.f(directoriesToDeleteOnError);
    }

    public static final void e(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        c(context).g();
    }
}
