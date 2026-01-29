package sp;

import kotlin.jvm.internal.Intrinsics;
import vm.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final void a(a0 a0Var, int i10) {
        a aVar;
        Intrinsics.checkNotNullParameter(a0Var, "<this>");
        Object obj = a0Var.b().get(b.f49136b);
        if (obj instanceof a) {
            aVar = (a) obj;
        } else {
            aVar = null;
        }
        if (aVar != null) {
            aVar.a(i10);
        }
    }
}
