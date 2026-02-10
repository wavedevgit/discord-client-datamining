package go;

import android.graphics.Bitmap;
import android.graphics.Rect;
import androidx.recyclerview.widget.RecyclerView;
import com.google.android.gms.tasks.Task;
import com.google.android.renderscript.Toolkit;
import fo.g;
import fo.j0;
import go.a;
import go.b;
import java.util.List;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import yj.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements e {

    /* renamed from: b  reason: collision with root package name */
    public static final a f25924b = new a(null);

    /* renamed from: c  reason: collision with root package name */
    private static final float[] f25925c = {-0.15f, -0.15f, -0.15f, -0.15f, 2.2f, -0.15f, -0.15f, -0.15f, -0.15f};

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f25926a = as.l.b(new Function0() { // from class: go.c
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            yj.a c10;
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
    public static final yj.a c() {
        yj.a a10 = yj.c.a(new b.a().b(RecyclerView.ItemAnimator.FLAG_MOVED, new int[0]).a());
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    private final yj.a d() {
        return (yj.a) this.f25926a.getValue();
    }

    private final Bitmap e(Bitmap bitmap) {
        try {
            return Toolkit.b(Toolkit.f17120a, bitmap, f25925c, null, 4, null);
        } catch (UnsatisfiedLinkError unused) {
            return null;
        }
    }

    @Override // go.e
    public Object a(j0 j0Var, Rect rect, Continuation continuation) {
        Bitmap e10 = j0Var.e();
        if (e10 == null) {
            Result.a aVar = Result.f31984e;
            return Result.b(a.b.f25918a);
        }
        Bitmap e11 = e(e10);
        if (e11 != null) {
            e10 = e11;
        }
        ck.a a10 = ck.a.a(e10, j0Var.f().k());
        Intrinsics.checkNotNullExpressionValue(a10, "fromBitmap(...)");
        Task e12 = d().e(a10);
        Intrinsics.checkNotNullExpressionValue(e12, "process(...)");
        try {
            List list = (List) zg.m.a(e12);
            Object l10 = e12.l();
            Intrinsics.checkNotNullExpressionValue(l10, "getResult(...)");
            zj.a aVar2 = (zj.a) CollectionsKt.q0((List) l10, 0);
            if (aVar2 == null) {
                Result.a aVar3 = Result.f31984e;
                return Result.b(a.b.f25918a);
            }
            String d10 = aVar2.d();
            if (d10 == null) {
                Result.a aVar4 = Result.f31984e;
                return Result.b(a.b.f25918a);
            } else if (aVar2.c() == 2048) {
                g.b bVar = new g.b(d10);
                Rect rect2 = new Rect(0, 0, j0Var.f().l(), j0Var.f().h());
                Rect a11 = aVar2.a();
                if (a11 == null) {
                    Result.a aVar5 = Result.f31984e;
                    return Result.b(a.b.f25918a);
                }
                rect2.inset(1, 1);
                if (rect2.contains(a11)) {
                    Result.a aVar6 = Result.f31984e;
                    return Result.b(new a.C0355a(bVar));
                }
                Result.a aVar7 = Result.f31984e;
                return Result.b(a.b.f25918a);
            } else {
                Result.a aVar8 = Result.f31984e;
                return Result.b(a.b.f25918a);
            }
        } catch (ExecutionException unused) {
            Result.a aVar9 = Result.f31984e;
            return Result.b(kotlin.c.a(new b.C0356b()));
        }
    }
}
