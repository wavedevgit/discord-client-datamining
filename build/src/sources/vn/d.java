package vn;

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
import un.g;
import un.j0;
import vj.b;
import vn.a;
import vn.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements e {

    /* renamed from: b  reason: collision with root package name */
    public static final a f52776b = new a(null);

    /* renamed from: c  reason: collision with root package name */
    private static final float[] f52777c = {-0.15f, -0.15f, -0.15f, -0.15f, 2.2f, -0.15f, -0.15f, -0.15f, -0.15f};

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f52778a = qr.l.a(new Function0() { // from class: vn.c
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            vj.a c10;
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
    public static final vj.a c() {
        vj.a a10 = vj.c.a(new b.a().b(RecyclerView.ItemAnimator.FLAG_MOVED, new int[0]).a());
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    private final vj.a d() {
        return (vj.a) this.f52778a.getValue();
    }

    private final Bitmap e(Bitmap bitmap) {
        try {
            return Toolkit.b(Toolkit.f16231a, bitmap, f52777c, null, 4, null);
        } catch (UnsatisfiedLinkError unused) {
            return null;
        }
    }

    @Override // vn.e
    public Object a(j0 j0Var, Rect rect, Continuation continuation) {
        Bitmap e10 = j0Var.e();
        if (e10 == null) {
            Result.a aVar = Result.f32005e;
            return Result.b(a.b.f52770a);
        }
        Bitmap e11 = e(e10);
        if (e11 != null) {
            e10 = e11;
        }
        zj.a a10 = zj.a.a(e10, j0Var.f().k());
        Intrinsics.checkNotNullExpressionValue(a10, "fromBitmap(...)");
        Task j10 = d().j(a10);
        Intrinsics.checkNotNullExpressionValue(j10, "process(...)");
        try {
            List list = (List) yg.m.a(j10);
            Object l10 = j10.l();
            Intrinsics.checkNotNullExpressionValue(l10, "getResult(...)");
            wj.a aVar2 = (wj.a) CollectionsKt.q0((List) l10, 0);
            if (aVar2 == null) {
                Result.a aVar3 = Result.f32005e;
                return Result.b(a.b.f52770a);
            }
            String d10 = aVar2.d();
            if (d10 == null) {
                Result.a aVar4 = Result.f32005e;
                return Result.b(a.b.f52770a);
            } else if (aVar2.c() == 2048) {
                g.b bVar = new g.b(d10);
                Rect rect2 = new Rect(0, 0, j0Var.f().l(), j0Var.f().h());
                Rect a11 = aVar2.a();
                if (a11 == null) {
                    Result.a aVar5 = Result.f32005e;
                    return Result.b(a.b.f52770a);
                }
                rect2.inset(1, 1);
                if (rect2.contains(a11)) {
                    Result.a aVar6 = Result.f32005e;
                    return Result.b(new a.C0697a(bVar));
                }
                Result.a aVar7 = Result.f32005e;
                return Result.b(a.b.f52770a);
            } else {
                Result.a aVar8 = Result.f32005e;
                return Result.b(a.b.f52770a);
            }
        } catch (ExecutionException unused) {
            Result.a aVar9 = Result.f32005e;
            return Result.b(kotlin.c.a(new b.C0698b()));
        }
    }
}
