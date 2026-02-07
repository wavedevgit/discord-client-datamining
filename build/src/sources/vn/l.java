package vn;

import android.graphics.Rect;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import un.g;
import un.j0;
import un.p0;
import vn.a;
import vn.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f52843a = qr.l.a(new Function0() { // from class: vn.k
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            dk.c d10;
            d10 = l.d();
            return d10;
        }
    });

    private final dk.c c() {
        return (dk.c) this.f52843a.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final dk.c d() {
        dk.c a10 = dk.b.a(fk.a.f23319d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    @Override // vn.e
    public Object a(j0 j0Var, Rect rect, Continuation continuation) {
        Task j10 = c().j(j0Var.f());
        Intrinsics.checkNotNullExpressionValue(j10, "process(...)");
        try {
            dk.a aVar = (dk.a) yg.m.a(j10);
            String a10 = ((dk.a) j10.l()).a();
            Intrinsics.checkNotNullExpressionValue(a10, "getText(...)");
            if (Intrinsics.areEqual(a10, "")) {
                Result.a aVar2 = Result.f32053e;
                return Result.b(a.b.f52818a);
            }
            p0 e10 = p0.f51809p.e(a10);
            if (e10 == null) {
                Result.a aVar3 = Result.f32053e;
                return Result.b(a.b.f52818a);
            }
            Result.a aVar4 = Result.f32053e;
            return Result.b(new a.C0697a(new g.a(e10.i(), e10.h(), e10.f(), e10.g())));
        } catch (ExecutionException unused) {
            Result.a aVar5 = Result.f32053e;
            return Result.b(kotlin.c.a(new b.C0698b()));
        }
    }
}
