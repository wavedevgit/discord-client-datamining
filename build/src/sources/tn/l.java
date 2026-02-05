package tn;

import android.graphics.Rect;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import sn.g;
import sn.j0;
import sn.p0;
import tn.a;
import tn.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f50867a = or.l.a(new Function0() { // from class: tn.k
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            ck.c d10;
            d10 = l.d();
            return d10;
        }
    });

    private final ck.c c() {
        return (ck.c) this.f50867a.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ck.c d() {
        ck.c a10 = ck.b.a(ek.a.f21628d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    @Override // tn.e
    public Object a(j0 j0Var, Rect rect, Continuation continuation) {
        Task e10 = c().e(j0Var.f());
        Intrinsics.checkNotNullExpressionValue(e10, "process(...)");
        try {
            ck.a aVar = (ck.a) xg.m.a(e10);
            String a10 = ((ck.a) e10.l()).a();
            Intrinsics.checkNotNullExpressionValue(a10, "getText(...)");
            if (Intrinsics.areEqual(a10, "")) {
                Result.a aVar2 = Result.f31985e;
                return Result.b(a.b.f50842a);
            }
            p0 e11 = p0.f49915p.e(a10);
            if (e11 == null) {
                Result.a aVar3 = Result.f31985e;
                return Result.b(a.b.f50842a);
            }
            Result.a aVar4 = Result.f31985e;
            return Result.b(new a.C0651a(new g.a(e11.i(), e11.h(), e11.f(), e11.g())));
        } catch (ExecutionException unused) {
            Result.a aVar5 = Result.f31985e;
            return Result.b(kotlin.c.a(new b.C0652b()));
        }
    }
}
