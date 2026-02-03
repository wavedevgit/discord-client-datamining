package js;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z0 extends os.p implements n0, w0 {

    /* renamed from: o  reason: collision with root package name */
    public kotlinx.coroutines.b0 f32002o;

    @Override // js.w0
    public boolean a() {
        return true;
    }

    @Override // js.w0
    public d1 b() {
        return null;
    }

    @Override // js.n0
    public void dispose() {
        u().y0(this);
    }

    @Override // os.p
    public String toString() {
        return e0.a(this) + '@' + e0.b(this) + "[job@" + e0.b(u()) + ']';
    }

    public final kotlinx.coroutines.b0 u() {
        kotlinx.coroutines.b0 b0Var = this.f32002o;
        if (b0Var != null) {
            return b0Var;
        }
        Intrinsics.throwUninitializedPropertyAccessException("job");
        return null;
    }

    public abstract boolean v();

    public abstract void w(Throwable th2);

    public final void x(kotlinx.coroutines.b0 b0Var) {
        this.f32002o = b0Var;
    }
}
