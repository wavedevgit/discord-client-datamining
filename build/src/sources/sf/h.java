package sf;

import com.google.android.gms.tasks.Task;
import gf.q;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends ff.d implements rf.b {
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
            ff.a r0 = sf.c.a()
            ff.a$d$a r1 = ff.a.d.f23724g
            ff.d$a r2 = ff.d.a.f23736c
            r3.<init>(r4, r0, r1, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: sf.h.<init>(android.content.Context):void");
    }

    @Override // rf.b
    public final Task a() {
        Task p10 = p(q.a().d(kg.d.f32305a).b(g.f48657a).e(28601).a());
        Intrinsics.checkNotNullExpressionValue(p10, "doRead(\n      TaskApiCal…Y)\n        .build()\n    )");
        return p10;
    }
}
