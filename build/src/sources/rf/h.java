package rf;

import com.google.android.gms.tasks.Task;
import ff.q;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends ef.d implements qf.b {
    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public h(android.content.Context r4) {
        /*
            r3 = this;
            java.lang.String r0 = "context"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            ef.a r0 = rf.c.a()
            ef.a$d$a r1 = ef.a.d.f22794c
            ef.d$a r2 = ef.d.a.f22806c
            r3.<init>(r4, r0, r1, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: rf.h.<init>(android.content.Context):void");
    }

    @Override // qf.b
    public final Task a() {
        Task p10 = p(q.a().d(ig.d.f28169a).b(g.f48499a).e(28601).a());
        Intrinsics.checkNotNullExpressionValue(p10, "doRead(\n      TaskApiCal…Y)\n        .build()\n    )");
        return p10;
    }
}
