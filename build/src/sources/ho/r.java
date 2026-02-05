package ho;

import ho.c4;
import ho.q;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class r {
    public static final oo.e a(q qVar) {
        Intrinsics.checkNotNullParameter(qVar, "<this>");
        if (qVar instanceof q.a) {
            return oo.e.M;
        }
        if (qVar instanceof q.b) {
            return ((q.b) qVar).a().d();
        }
        throw new or.p();
    }

    public static final String b(q qVar) {
        Intrinsics.checkNotNullParameter(qVar, "<this>");
        if (qVar instanceof q.a) {
            return "auto-classification";
        }
        if (qVar instanceof q.b) {
            return ((q.b) qVar).a().x1();
        }
        throw new or.p();
    }

    public static final c4 c(q qVar) {
        Intrinsics.checkNotNullParameter(qVar, "<this>");
        if (qVar instanceof q.a) {
            return null;
        }
        if (qVar instanceof q.b) {
            return ((q.b) qVar).a();
        }
        throw new or.p();
    }

    public static final c4.c d(q qVar, c4.e side) {
        Intrinsics.checkNotNullParameter(qVar, "<this>");
        Intrinsics.checkNotNullParameter(side, "side");
        if (qVar instanceof q.a) {
            return ((q.a) qVar).a().b();
        }
        if (qVar instanceof q.b) {
            return ((q.b) qVar).a().c(side);
        }
        throw new or.p();
    }
}
