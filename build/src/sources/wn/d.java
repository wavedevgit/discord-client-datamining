package wn;

import android.graphics.Bitmap;
import android.graphics.Rect;
import androidx.recyclerview.widget.RecyclerView;
import com.google.android.gms.tasks.Task;
import com.google.android.renderscript.Toolkit;
import java.util.List;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import vn.g;
import vn.j0;
import wj.b;
import wn.a;
import wn.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements e {

    /* renamed from: b  reason: collision with root package name */
    public static final a f53851b = new a(null);

    /* renamed from: c  reason: collision with root package name */
    private static final float[] f53852c = {-0.15f, -0.15f, -0.15f, -0.15f, 2.2f, -0.15f, -0.15f, -0.15f, -0.15f};

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f53853a = rr.l.a(new Function0() { // from class: wn.c
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            wj.a c10;
            c10 = d.c();
            return c10;
        }
    });

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wj.a c() {
        wj.a a10 = wj.c.a(new b.a().b(RecyclerView.ItemAnimator.FLAG_MOVED, new int[0]).a());
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    private final wj.a d() {
        return (wj.a) this.f53853a.getValue();
    }

    private final Bitmap e(Bitmap bitmap) {
        try {
            return Toolkit.b(Toolkit.f16371a, bitmap, f53852c, null, 4, null);
        } catch (UnsatisfiedLinkError unused) {
            return null;
        }
    }

    @Override // wn.e
    public Object a(j0 j0Var, Rect rect, Continuation continuation) {
        Bitmap e10 = j0Var.e();
        if (e10 == null) {
            Result.a aVar = Result.f31762e;
            return Result.b(a.b.f53845a);
        }
        Bitmap e11 = e(e10);
        if (e11 != null) {
            e10 = e11;
        }
        ak.a a10 = ak.a.a(e10, j0Var.f().k());
        Intrinsics.checkNotNullExpressionValue(a10, "fromBitmap(...)");
        Task h10 = d().h(a10);
        Intrinsics.checkNotNullExpressionValue(h10, "process(...)");
        try {
            List list = (List) zg.m.a(h10);
            Object l10 = h10.l();
            Intrinsics.checkNotNullExpressionValue(l10, "getResult(...)");
            xj.a aVar2 = (xj.a) CollectionsKt.q0((List) l10, 0);
            if (aVar2 == null) {
                Result.a aVar3 = Result.f31762e;
                return Result.b(a.b.f53845a);
            }
            String d10 = aVar2.d();
            if (d10 == null) {
                Result.a aVar4 = Result.f31762e;
                return Result.b(a.b.f53845a);
            } else if (aVar2.c() == 2048) {
                g.b bVar = new g.b(d10);
                Rect rect2 = new Rect(0, 0, j0Var.f().l(), j0Var.f().h());
                Rect a11 = aVar2.a();
                if (a11 == null) {
                    Result.a aVar5 = Result.f31762e;
                    return Result.b(a.b.f53845a);
                }
                rect2.inset(1, 1);
                if (rect2.contains(a11)) {
                    Result.a aVar6 = Result.f31762e;
                    return Result.b(new a.C0750a(bVar));
                }
                Result.a aVar7 = Result.f31762e;
                return Result.b(a.b.f53845a);
            } else {
                Result.a aVar8 = Result.f31762e;
                return Result.b(a.b.f53845a);
            }
        } catch (ExecutionException unused) {
            Result.a aVar9 = Result.f31762e;
            return Result.b(kotlin.c.a(new b.C0751b()));
        }
    }
}
