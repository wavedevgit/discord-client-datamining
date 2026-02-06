package vn;

import android.graphics.Rect;
import bk.e;
import com.google.android.gms.tasks.Task;
import dk.a;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import un.h0;
import un.j0;
import vn.a;
import vn.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f52790a = qr.l.a(new Function0() { // from class: vn.g
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            bk.d d10;
            d10 = i.d();
            return d10;
        }
    });

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f52791b = qr.l.a(new Function0() { // from class: vn.h
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            dk.c g10;
            g10 = i.g();
            return g10;
        }
    });

    /* JADX INFO: Access modifiers changed from: private */
    public static final bk.d d() {
        bk.d a10 = bk.c.a(new e.a().c(0.1f).a());
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    private final bk.d e() {
        return (bk.d) this.f52790a.getValue();
    }

    private final dk.c f() {
        return (dk.c) this.f52791b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final dk.c g() {
        dk.c a10 = dk.b.a(fk.a.f23319d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    @Override // vn.e
    public Object a(j0 j0Var, Rect rect, Continuation continuation) {
        zj.a f10 = j0Var.f();
        Task j10 = e().j(f10);
        Intrinsics.checkNotNullExpressionValue(j10, "process(...)");
        Task j11 = f().j(f10);
        Intrinsics.checkNotNullExpressionValue(j11, "process(...)");
        try {
            Void r10 = (Void) yg.m.a(yg.m.h(j10, j11));
            Object l10 = j10.l();
            Intrinsics.checkNotNullExpressionValue(l10, "getResult(...)");
            bk.a aVar = (bk.a) CollectionsKt.q0((List) l10, 0);
            if (aVar == null) {
                Result.a aVar2 = Result.f32005e;
                return Result.b(a.b.f52770a);
            }
            List b10 = ((dk.a) j11.l()).b();
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
                Result.a aVar3 = Result.f32005e;
                return Result.b(a.b.f52770a);
            }
            Rect rect2 = new Rect(0, 0, f10.l(), f10.h());
            rect2.inset(1, 1);
            if (rect2.contains(aVar.a())) {
                Result.a aVar4 = Result.f32005e;
                String a10 = ((dk.a) j11.l()).a();
                Intrinsics.checkNotNullExpressionValue(a10, "getText(...)");
                return Result.b(new a.d(new h0(a10)));
            }
            Result.a aVar5 = Result.f32005e;
            return Result.b(a.b.f52770a);
        } catch (ExecutionException unused) {
            Result.a aVar6 = Result.f32005e;
            return Result.b(kotlin.c.a(new b.a()));
        }
    }
}
