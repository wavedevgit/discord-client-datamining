package up;

import android.content.Context;
import android.content.res.Resources;
import jp.n;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final void a(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        try {
            context.getResources().getLayout(n.f32358c);
        } catch (Resources.NotFoundException unused) {
            di.a.b(context);
        }
    }
}
