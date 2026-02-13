package go;

import android.graphics.Rect;
import com.google.android.gms.tasks.Task;
import fo.g;
import fo.j0;
import fo.p0;
import go.a;
import go.b;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f25944a = as.l.b(new Function0() { // from class: go.k
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            gk.c d10;
            d10 = l.d();
            return d10;
        }
    });

    private final gk.c c() {
        return (gk.c) this.f25944a.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final gk.c d() {
        gk.c a10 = gk.b.a(ik.a.f28541d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    @Override // go.e
    public Object a(j0 j0Var, Rect rect, Continuation continuation) {
        Task e10 = c().e(j0Var.f());
        Intrinsics.checkNotNullExpressionValue(e10, "process(...)");
        try {
            gk.a aVar = (gk.a) zg.m.a(e10);
            String a10 = ((gk.a) e10.l()).a();
            Intrinsics.checkNotNullExpressionValue(a10, "getText(...)");
            if (Intrinsics.areEqual(a10, "")) {
                Result.a aVar2 = Result.f32553e;
                return Result.b(a.b.f25919a);
            }
            p0 e11 = p0.f24065p.e(a10);
            if (e11 == null) {
                Result.a aVar3 = Result.f32553e;
                return Result.b(a.b.f25919a);
            }
            Result.a aVar4 = Result.f32553e;
            return Result.b(new a.C0355a(new g.a(e11.i(), e11.h(), e11.f(), e11.g())));
        } catch (ExecutionException unused) {
            Result.a aVar5 = Result.f32553e;
            return Result.b(kotlin.c.a(new b.C0356b()));
        }
    }
}
