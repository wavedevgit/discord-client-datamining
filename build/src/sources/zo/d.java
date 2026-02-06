package zo;

import android.content.Context;
import com.google.android.play.core.integrity.IntegrityManagerFactory;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements f {
    @Override // zo.f
    public com.google.android.play.core.integrity.c create(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        com.google.android.play.core.integrity.c a10 = IntegrityManagerFactory.a(context);
        Intrinsics.checkNotNullExpressionValue(a10, "createStandard(...)");
        return a10;
    }
}
