package om;

import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.y0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j {
    public static final boolean a(y0 y0Var) {
        Intrinsics.checkNotNullParameter(y0Var, "<this>");
        if ((y0Var.c() & WindowInsetsCompat.p.c()) != 0) {
            return true;
        }
        return false;
    }
}
