package nn;

import android.graphics.Rect;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import mn.g;
import mn.j0;
import mn.p0;
import nn.a;
import nn.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f42006a = ir.l.b(new Function0() { // from class: nn.k
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            zj.c d10;
            d10 = l.d();
            return d10;
        }
    });

    private final zj.c c() {
        return (zj.c) this.f42006a.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zj.c d() {
        zj.c a10 = zj.b.a(bk.a.f7521d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    @Override // nn.e
    public Object a(j0 j0Var, Rect rect, Continuation continuation) {
        Task g10 = c().g(j0Var.f());
        Intrinsics.checkNotNullExpressionValue(g10, "process(...)");
        try {
            zj.a aVar = (zj.a) wg.m.a(g10);
            String a10 = ((zj.a) g10.l()).a();
            Intrinsics.checkNotNullExpressionValue(a10, "getText(...)");
            if (Intrinsics.areEqual(a10, "")) {
                Result.a aVar2 = Result.f33279e;
                return Result.b(a.b.f41981a);
            }
            p0 e10 = p0.f39248p.e(a10);
            if (e10 == null) {
                Result.a aVar3 = Result.f33279e;
                return Result.b(a.b.f41981a);
            }
            Result.a aVar4 = Result.f33279e;
            return Result.b(new a.C0520a(new g.a(e10.i(), e10.h(), e10.f(), e10.g())));
        } catch (ExecutionException unused) {
            Result.a aVar5 = Result.f33279e;
            return Result.b(kotlin.c.a(new b.C0521b()));
        }
    }
}
