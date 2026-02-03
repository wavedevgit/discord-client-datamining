package jo;

import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import nn.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    public static final boolean a(a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        if (aVar.b().size() < 3) {
            return false;
        }
        int i10 = 0;
        for (h0 h0Var : aVar.b()) {
            i10 += h0Var.a().length();
        }
        double size = i10 / aVar.b().size();
        double d10 = 0.0d;
        for (h0 h0Var2 : aVar.b()) {
            d10 += (h0Var2.a().length() - size) * (h0Var2.a().length() - size);
        }
        if (Math.sqrt(d10 / aVar.b().size()) / size >= 0.05d) {
            return false;
        }
        return true;
    }

    public static final a b(a aVar, h0 newFrame) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        Intrinsics.checkNotNullParameter(newFrame, "newFrame");
        return aVar.a(CollectionsKt.M0(CollectionsKt.b1(aVar.b(), 2), newFrame));
    }
}
