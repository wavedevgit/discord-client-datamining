package mn;

import android.view.View;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import mn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 implements i {

    /* renamed from: a  reason: collision with root package name */
    private final View f39295a;

    public r0(View previewView) {
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        this.f39295a = previewView;
    }

    @Override // mn.i
    public v b() {
        return new v(null, null, null, 0, 15, null);
    }

    @Override // mn.i
    public js.j0 c() {
        return js.l0.a(x.c.f39354a);
    }

    @Override // mn.i
    public View e() {
        return this.f39295a;
    }

    @Override // mn.i
    public Object g(Continuation continuation) {
        Result.a aVar = Result.f33295e;
        return Result.b(kotlin.coroutines.jvm.internal.b.a(false));
    }

    @Override // mn.i
    public Object i(Continuation continuation) {
        Result.a aVar = Result.f33295e;
        return Result.b(kotlin.c.a(new s0()));
    }

    @Override // mn.i
    public Object j(Continuation continuation) {
        Result.a aVar = Result.f33295e;
        return Result.b(kotlin.c.a(new s0()));
    }

    @Override // mn.i
    public void d() {
    }

    @Override // mn.i
    public void f() {
    }

    @Override // mn.i
    public void a(boolean z10) {
    }

    @Override // mn.i
    public void h(boolean z10) {
    }
}
