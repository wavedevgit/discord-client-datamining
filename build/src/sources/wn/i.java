package wn;

import android.graphics.Rect;
import ck.e;
import com.google.android.gms.tasks.Task;
import ek.a;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import vn.h0;
import vn.j0;
import wn.a;
import wn.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f53865a = rr.l.a(new Function0() { // from class: wn.g
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            ck.d d10;
            d10 = i.d();
            return d10;
        }
    });

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f53866b = rr.l.a(new Function0() { // from class: wn.h
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            ek.c g10;
            g10 = i.g();
            return g10;
        }
    });

    /* JADX INFO: Access modifiers changed from: private */
    public static final ck.d d() {
        ck.d a10 = ck.c.a(new e.a().c(0.1f).a());
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    private final ck.d e() {
        return (ck.d) this.f53865a.getValue();
    }

    private final ek.c f() {
        return (ek.c) this.f53866b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ek.c g() {
        ek.c a10 = ek.b.a(gk.a.f24404d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    @Override // wn.e
    public Object a(j0 j0Var, Rect rect, Continuation continuation) {
        ak.a f10 = j0Var.f();
        Task h10 = e().h(f10);
        Intrinsics.checkNotNullExpressionValue(h10, "process(...)");
        Task h11 = f().h(f10);
        Intrinsics.checkNotNullExpressionValue(h11, "process(...)");
        try {
            Void r10 = (Void) zg.m.a(zg.m.h(h10, h11));
            Object l10 = h10.l();
            Intrinsics.checkNotNullExpressionValue(l10, "getResult(...)");
            ck.a aVar = (ck.a) CollectionsKt.q0((List) l10, 0);
            if (aVar == null) {
                Result.a aVar2 = Result.f31762e;
                return Result.b(a.b.f53845a);
            }
            List b10 = ((ek.a) h11.l()).b();
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
                Result.a aVar3 = Result.f31762e;
                return Result.b(a.b.f53845a);
            }
            Rect rect2 = new Rect(0, 0, f10.l(), f10.h());
            rect2.inset(1, 1);
            if (rect2.contains(aVar.a())) {
                Result.a aVar4 = Result.f31762e;
                String a10 = ((ek.a) h11.l()).a();
                Intrinsics.checkNotNullExpressionValue(a10, "getText(...)");
                return Result.b(new a.d(new h0(a10)));
            }
            Result.a aVar5 = Result.f31762e;
            return Result.b(a.b.f53845a);
        } catch (ExecutionException unused) {
            Result.a aVar6 = Result.f31762e;
            return Result.b(kotlin.c.a(new b.a()));
        }
    }
}
