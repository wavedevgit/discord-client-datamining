package as;

import cs.a0;
import cs.w0;
import java.util.ArrayList;
import java.util.Collection;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlin.reflect.KProperty1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final Collection a(KClass kClass) {
        Intrinsics.checkNotNullParameter(kClass, "<this>");
        ArrayList arrayList = new ArrayList();
        for (Object obj : ((w0.a) ((w0) kClass).J().getValue()).I()) {
            a0 a0Var = (a0) obj;
            if (c(a0Var) && (a0Var instanceof KProperty1)) {
                arrayList.add(obj);
            }
        }
        return arrayList;
    }

    private static final boolean b(a0 a0Var) {
        if (a0Var.D().getExtensionReceiverParameter() != null) {
            return true;
        }
        return false;
    }

    private static final boolean c(a0 a0Var) {
        return !b(a0Var);
    }
}
