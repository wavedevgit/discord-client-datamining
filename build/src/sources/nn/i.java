package nn;

import android.graphics.Rect;
import com.google.android.gms.tasks.Task;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import mn.h0;
import mn.j0;
import nn.a;
import nn.b;
import xj.e;
import zj.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f42017a = ir.l.b(new Function0() { // from class: nn.g
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            xj.d d10;
            d10 = i.d();
            return d10;
        }
    });

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f42018b = ir.l.b(new Function0() { // from class: nn.h
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            zj.c g10;
            g10 = i.g();
            return g10;
        }
    });

    /* JADX INFO: Access modifiers changed from: private */
    public static final xj.d d() {
        xj.d a10 = xj.c.a(new e.a().c(0.1f).a());
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    private final xj.d e() {
        return (xj.d) this.f42017a.getValue();
    }

    private final zj.c f() {
        return (zj.c) this.f42018b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zj.c g() {
        zj.c a10 = zj.b.a(bk.a.f7521d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    @Override // nn.e
    public Object a(j0 j0Var, Rect rect, Continuation continuation) {
        vj.a f10 = j0Var.f();
        Task g10 = e().g(f10);
        Intrinsics.checkNotNullExpressionValue(g10, "process(...)");
        Task g11 = f().g(f10);
        Intrinsics.checkNotNullExpressionValue(g11, "process(...)");
        try {
            Void r10 = (Void) wg.m.a(wg.m.h(g10, g11));
            Object l10 = g10.l();
            Intrinsics.checkNotNullExpressionValue(l10, "getResult(...)");
            xj.a aVar = (xj.a) CollectionsKt.q0((List) l10, 0);
            if (aVar == null) {
                Result.a aVar2 = Result.f33295e;
                return Result.b(a.b.f41997a);
            }
            List b10 = ((zj.a) g11.l()).b();
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
                Result.a aVar3 = Result.f33295e;
                return Result.b(a.b.f41997a);
            }
            Rect rect2 = new Rect(0, 0, f10.l(), f10.h());
            rect2.inset(1, 1);
            if (rect2.contains(aVar.a())) {
                Result.a aVar4 = Result.f33295e;
                String a10 = ((zj.a) g11.l()).a();
                Intrinsics.checkNotNullExpressionValue(a10, "getText(...)");
                return Result.b(new a.d(new h0(a10)));
            }
            Result.a aVar5 = Result.f33295e;
            return Result.b(a.b.f41997a);
        } catch (ExecutionException unused) {
            Result.a aVar6 = Result.f33295e;
            return Result.b(kotlin.c.a(new b.a()));
        }
    }
}
