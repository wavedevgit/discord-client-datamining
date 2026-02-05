package sn;

import android.view.View;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import sn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 implements i {

    /* renamed from: a  reason: collision with root package name */
    private final View f49946a;

    public r0(View previewView) {
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        this.f49946a = previewView;
    }

    @Override // sn.i
    public v b() {
        return new v(null, null, null, 0, 15, null);
    }

    @Override // sn.i
    public ps.j0 c() {
        return ps.l0.a(x.c.f50005a);
    }

    @Override // sn.i
    public View e() {
        return this.f49946a;
    }

    @Override // sn.i
    public Object g(Continuation continuation) {
        Result.a aVar = Result.f31985e;
        return Result.b(kotlin.coroutines.jvm.internal.b.a(false));
    }

    @Override // sn.i
    public Object i(Continuation continuation) {
        Result.a aVar = Result.f31985e;
        return Result.b(kotlin.c.a(new s0()));
    }

    @Override // sn.i
    public Object j(Continuation continuation) {
        Result.a aVar = Result.f31985e;
        return Result.b(kotlin.c.a(new s0()));
    }

    @Override // sn.i
    public void d() {
    }

    @Override // sn.i
    public void f() {
    }

    @Override // sn.i
    public void a(boolean z10) {
    }

    @Override // sn.i
    public void h(boolean z10) {
    }
}
