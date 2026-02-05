package tn;

import ak.e;
import android.graphics.Rect;
import ck.a;
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
import sn.h0;
import sn.j0;
import tn.a;
import tn.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f50862a = or.l.a(new Function0() { // from class: tn.g
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            ak.d d10;
            d10 = i.d();
            return d10;
        }
    });

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f50863b = or.l.a(new Function0() { // from class: tn.h
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            ck.c g10;
            g10 = i.g();
            return g10;
        }
    });

    /* JADX INFO: Access modifiers changed from: private */
    public static final ak.d d() {
        ak.d a10 = ak.c.a(new e.a().c(0.1f).a());
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    private final ak.d e() {
        return (ak.d) this.f50862a.getValue();
    }

    private final ck.c f() {
        return (ck.c) this.f50863b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ck.c g() {
        ck.c a10 = ck.b.a(ek.a.f21628d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    @Override // tn.e
    public Object a(j0 j0Var, Rect rect, Continuation continuation) {
        yj.a f10 = j0Var.f();
        Task e10 = e().e(f10);
        Intrinsics.checkNotNullExpressionValue(e10, "process(...)");
        Task e11 = f().e(f10);
        Intrinsics.checkNotNullExpressionValue(e11, "process(...)");
        try {
            Void r10 = (Void) xg.m.a(xg.m.h(e10, e11));
            Object l10 = e10.l();
            Intrinsics.checkNotNullExpressionValue(l10, "getResult(...)");
            ak.a aVar = (ak.a) CollectionsKt.q0((List) l10, 0);
            if (aVar == null) {
                Result.a aVar2 = Result.f31985e;
                return Result.b(a.b.f50842a);
            }
            List b10 = ((ck.a) e11.l()).b();
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
                Result.a aVar3 = Result.f31985e;
                return Result.b(a.b.f50842a);
            }
            Rect rect2 = new Rect(0, 0, f10.l(), f10.h());
            rect2.inset(1, 1);
            if (rect2.contains(aVar.a())) {
                Result.a aVar4 = Result.f31985e;
                String a10 = ((ck.a) e11.l()).a();
                Intrinsics.checkNotNullExpressionValue(a10, "getText(...)");
                return Result.b(new a.d(new h0(a10)));
            }
            Result.a aVar5 = Result.f31985e;
            return Result.b(a.b.f50842a);
        } catch (ExecutionException unused) {
            Result.a aVar6 = Result.f31985e;
            return Result.b(kotlin.c.a(new b.a()));
        }
    }
}
