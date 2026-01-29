package ep;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class y1 {
    public static final void a(x1 x1Var) {
        Intrinsics.checkNotNullParameter(x1Var, "<this>");
        for (a1 a1Var : x1Var.p()) {
            new File(a1Var.a()).delete();
        }
    }
}
