package jm;

import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.x0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j {
    public static final boolean a(x0 x0Var) {
        Intrinsics.checkNotNullParameter(x0Var, "<this>");
        if ((x0Var.c() & WindowInsetsCompat.p.c()) != 0) {
            return true;
        }
        return false;
    }
}
