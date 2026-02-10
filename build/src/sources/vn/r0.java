package vn;

import android.view.View;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import vn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 implements i {

    /* renamed from: a  reason: collision with root package name */
    private final View f52700a;

    public r0(View previewView) {
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        this.f52700a = previewView;
    }

    @Override // vn.i
    public v b() {
        return new v(null, null, null, 0, 15, null);
    }

    @Override // vn.i
    public ss.j0 c() {
        return ss.l0.a(x.c.f52759a);
    }

    @Override // vn.i
    public View e() {
        return this.f52700a;
    }

    @Override // vn.i
    public Object g(Continuation continuation) {
        Result.a aVar = Result.f31762e;
        return Result.b(kotlin.coroutines.jvm.internal.b.a(false));
    }

    @Override // vn.i
    public Object i(Continuation continuation) {
        Result.a aVar = Result.f31762e;
        return Result.b(kotlin.c.a(new s0()));
    }

    @Override // vn.i
    public Object j(Continuation continuation) {
        Result.a aVar = Result.f31762e;
        return Result.b(kotlin.c.a(new s0()));
    }

    @Override // vn.i
    public void d() {
    }

    @Override // vn.i
    public void f() {
    }

    @Override // vn.i
    public void a(boolean z10) {
    }

    @Override // vn.i
    public void h(boolean z10) {
    }
}
