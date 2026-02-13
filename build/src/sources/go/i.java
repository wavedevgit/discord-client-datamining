package go;

import android.graphics.Rect;
import com.google.android.gms.tasks.Task;
import ek.e;
import fo.h0;
import fo.j0;
import gk.a;
import go.a;
import go.b;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f25939a = as.l.b(new Function0() { // from class: go.g
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            ek.d d10;
            d10 = i.d();
            return d10;
        }
    });

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f25940b = as.l.b(new Function0() { // from class: go.h
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            gk.c g10;
            g10 = i.g();
            return g10;
        }
    });

    /* JADX INFO: Access modifiers changed from: private */
    public static final ek.d d() {
        ek.d a10 = ek.c.a(new e.a().c(0.1f).a());
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    private final ek.d e() {
        return (ek.d) this.f25939a.getValue();
    }

    private final gk.c f() {
        return (gk.c) this.f25940b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final gk.c g() {
        gk.c a10 = gk.b.a(ik.a.f28541d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    @Override // go.e
    public Object a(j0 j0Var, Rect rect, Continuation continuation) {
        ck.a f10 = j0Var.f();
        Task e10 = e().e(f10);
        Intrinsics.checkNotNullExpressionValue(e10, "process(...)");
        Task e11 = f().e(f10);
        Intrinsics.checkNotNullExpressionValue(e11, "process(...)");
        try {
            Void r10 = (Void) zg.m.a(zg.m.h(e10, e11));
            Object l10 = e10.l();
            Intrinsics.checkNotNullExpressionValue(l10, "getResult(...)");
            ek.a aVar = (ek.a) CollectionsKt.q0((List) l10, 0);
            if (aVar == null) {
                Result.a aVar2 = Result.f32553e;
                return Result.b(a.b.f25919a);
            }
            List b10 = ((gk.a) e11.l()).b();
            Intrinsics.checkNotNullExpressionValue(b10, "getTextBlocks(...)");
            List<a.e> list = b10;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
            for (a.e eVar : list) {
                List c10 = eVar.c();
                Intrinsics.checkNotNullExpressionValue(c10, "getLines(...)");
                List<a.b> list2 = c10;
                ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list2, 10));
                for (a.b bVar : list2) {
                    arrayList2.add(bVar.c());
                }
                arrayList.add(arrayList2);
            }
            if (CollectionsKt.y(arrayList).size() < 5) {
                Result.a aVar3 = Result.f32553e;
                return Result.b(a.b.f25919a);
            }
            Rect rect2 = new Rect(0, 0, f10.l(), f10.h());
            rect2.inset(1, 1);
            if (rect2.contains(aVar.a())) {
                Result.a aVar4 = Result.f32553e;
                String a10 = ((gk.a) e11.l()).a();
                Intrinsics.checkNotNullExpressionValue(a10, "getText(...)");
                return Result.b(new a.d(new h0(a10)));
            }
            Result.a aVar5 = Result.f32553e;
            return Result.b(a.b.f25919a);
        } catch (ExecutionException unused) {
            Result.a aVar6 = Result.f32553e;
            return Result.b(kotlin.c.a(new b.a()));
        }
    }
}
