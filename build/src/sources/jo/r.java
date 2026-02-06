package jo;

import jo.c4;
import jo.q;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class r {
    public static final qo.e a(q qVar) {
        Intrinsics.checkNotNullParameter(qVar, "<this>");
        if (qVar instanceof q.a) {
            return qo.e.M;
        }
        if (qVar instanceof q.b) {
            return ((q.b) qVar).a().d();
        }
        throw new qr.p();
    }

    public static final String b(q qVar) {
        Intrinsics.checkNotNullParameter(qVar, "<this>");
        if (qVar instanceof q.a) {
            return "auto-classification";
        }
        if (qVar instanceof q.b) {
            return ((q.b) qVar).a().w1();
        }
        throw new qr.p();
    }

    public static final c4 c(q qVar) {
        Intrinsics.checkNotNullParameter(qVar, "<this>");
        if (qVar instanceof q.a) {
            return null;
        }
        if (qVar instanceof q.b) {
            return ((q.b) qVar).a();
        }
        throw new qr.p();
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
        throw new qr.p();
    }
}
