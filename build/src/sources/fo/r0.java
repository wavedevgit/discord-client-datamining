package fo;

import android.view.View;
import fo.x;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 implements i {

    /* renamed from: a  reason: collision with root package name */
    private final View f24096a;

    public r0(View previewView) {
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        this.f24096a = previewView;
    }

    @Override // fo.i
    public v b() {
        return new v(null, null, null, 0, 15, null);
    }

    @Override // fo.i
    public bt.j0 c() {
        return bt.l0.a(x.c.f24155a);
    }

    @Override // fo.i
    public View e() {
        return this.f24096a;
    }

    @Override // fo.i
    public Object g(Continuation continuation) {
        Result.a aVar = Result.f32553e;
        return Result.b(kotlin.coroutines.jvm.internal.b.a(false));
    }

    @Override // fo.i
    public Object i(Continuation continuation) {
        Result.a aVar = Result.f32553e;
        return Result.b(kotlin.c.a(new s0()));
    }

    @Override // fo.i
    public Object j(Continuation continuation) {
        Result.a aVar = Result.f32553e;
        return Result.b(kotlin.c.a(new s0()));
    }

    @Override // fo.i
    public void d() {
    }

    @Override // fo.i
    public void f() {
    }

    @Override // fo.i
    public void a(boolean z10) {
    }

    @Override // fo.i
    public void h(boolean z10) {
    }
}
