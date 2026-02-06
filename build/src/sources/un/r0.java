package un;

import android.view.View;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import un.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 implements i {

    /* renamed from: a  reason: collision with root package name */
    private final View f51792a;

    public r0(View previewView) {
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        this.f51792a = previewView;
    }

    @Override // un.i
    public v b() {
        return new v(null, null, null, 0, 15, null);
    }

    @Override // un.i
    public rs.j0 c() {
        return rs.l0.a(x.c.f51851a);
    }

    @Override // un.i
    public View e() {
        return this.f51792a;
    }

    @Override // un.i
    public Object g(Continuation continuation) {
        Result.a aVar = Result.f32005e;
        return Result.b(kotlin.coroutines.jvm.internal.b.a(false));
    }

    @Override // un.i
    public Object i(Continuation continuation) {
        Result.a aVar = Result.f32005e;
        return Result.b(kotlin.c.a(new s0()));
    }

    @Override // un.i
    public Object j(Continuation continuation) {
        Result.a aVar = Result.f32005e;
        return Result.b(kotlin.c.a(new s0()));
    }

    @Override // un.i
    public void d() {
    }

    @Override // un.i
    public void f() {
    }

    @Override // un.i
    public void a(boolean z10) {
    }

    @Override // un.i
    public void h(boolean z10) {
    }
}
