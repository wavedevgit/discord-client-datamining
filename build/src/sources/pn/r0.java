package pn;

import android.view.View;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import pn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 implements i {

    /* renamed from: a  reason: collision with root package name */
    private final View f46330a;

    public r0(View previewView) {
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        this.f46330a = previewView;
    }

    @Override // pn.i
    public v b() {
        return new v(null, null, null, 0, 15, null);
    }

    @Override // pn.i
    public ms.j0 c() {
        return ms.l0.a(x.c.f46389a);
    }

    @Override // pn.i
    public View e() {
        return this.f46330a;
    }

    @Override // pn.i
    public Object g(Continuation continuation) {
        Result.a aVar = Result.f32461e;
        return Result.b(kotlin.coroutines.jvm.internal.b.a(false));
    }

    @Override // pn.i
    public Object i(Continuation continuation) {
        Result.a aVar = Result.f32461e;
        return Result.b(kotlin.c.a(new s0()));
    }

    @Override // pn.i
    public Object j(Continuation continuation) {
        Result.a aVar = Result.f32461e;
        return Result.b(kotlin.c.a(new s0()));
    }

    @Override // pn.i
    public void d() {
    }

    @Override // pn.i
    public void f() {
    }

    @Override // pn.i
    public void a(boolean z10) {
    }

    @Override // pn.i
    public void h(boolean z10) {
    }
}
