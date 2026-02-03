package nn;

import android.view.View;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import nn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 implements i {

    /* renamed from: a  reason: collision with root package name */
    private final View f42038a;

    public r0(View previewView) {
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        this.f42038a = previewView;
    }

    @Override // nn.i
    public v b() {
        return new v(null, null, null, 0, 15, null);
    }

    @Override // nn.i
    public ks.j0 c() {
        return ks.l0.a(x.c.f42097a);
    }

    @Override // nn.i
    public View e() {
        return this.f42038a;
    }

    @Override // nn.i
    public Object g(Continuation continuation) {
        Result.a aVar = Result.f33071e;
        return Result.b(kotlin.coroutines.jvm.internal.b.a(false));
    }

    @Override // nn.i
    public Object i(Continuation continuation) {
        Result.a aVar = Result.f33071e;
        return Result.b(kotlin.c.a(new s0()));
    }

    @Override // nn.i
    public Object j(Continuation continuation) {
        Result.a aVar = Result.f33071e;
        return Result.b(kotlin.c.a(new s0()));
    }

    @Override // nn.i
    public void d() {
    }

    @Override // nn.i
    public void f() {
    }

    @Override // nn.i
    public void a(boolean z10) {
    }

    @Override // nn.i
    public void h(boolean z10) {
    }
}
