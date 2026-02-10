package wn;

import android.graphics.Rect;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import vn.g;
import vn.j0;
import vn.p0;
import wn.a;
import wn.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f53870a = rr.l.a(new Function0() { // from class: wn.k
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            ek.c d10;
            d10 = l.d();
            return d10;
        }
    });

    private final ek.c c() {
        return (ek.c) this.f53870a.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ek.c d() {
        ek.c a10 = ek.b.a(gk.a.f24404d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    @Override // wn.e
    public Object a(j0 j0Var, Rect rect, Continuation continuation) {
        Task h10 = c().h(j0Var.f());
        Intrinsics.checkNotNullExpressionValue(h10, "process(...)");
        try {
            ek.a aVar = (ek.a) zg.m.a(h10);
            String a10 = ((ek.a) h10.l()).a();
            Intrinsics.checkNotNullExpressionValue(a10, "getText(...)");
            if (Intrinsics.areEqual(a10, "")) {
                Result.a aVar2 = Result.f31762e;
                return Result.b(a.b.f53845a);
            }
            p0 e10 = p0.f52669p.e(a10);
            if (e10 == null) {
                Result.a aVar3 = Result.f31762e;
                return Result.b(a.b.f53845a);
            }
            Result.a aVar4 = Result.f31762e;
            return Result.b(new a.C0750a(new g.a(e10.i(), e10.h(), e10.f(), e10.g())));
        } catch (ExecutionException unused) {
            Result.a aVar5 = Result.f31762e;
            return Result.b(kotlin.c.a(new b.C0751b()));
        }
    }
}
