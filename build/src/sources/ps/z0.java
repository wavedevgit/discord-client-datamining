package ps;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z0 extends us.p implements n0, w0 {

    /* renamed from: o  reason: collision with root package name */
    public kotlinx.coroutines.b0 f44551o;

    @Override // ps.w0
    public boolean a() {
        return true;
    }

    @Override // ps.w0
    public d1 b() {
        return null;
    }

    @Override // ps.n0
    public void dispose() {
        u().A0(this);
    }

    @Override // us.p
    public String toString() {
        return e0.a(this) + '@' + e0.b(this) + "[job@" + e0.b(u()) + ']';
    }

    public final kotlinx.coroutines.b0 u() {
        kotlinx.coroutines.b0 b0Var = this.f44551o;
        if (b0Var != null) {
            return b0Var;
        }
        Intrinsics.throwUninitializedPropertyAccessException("job");
        return null;
    }

    public abstract boolean v();

    public abstract void w(Throwable th2);

    public final void x(kotlinx.coroutines.b0 b0Var) {
        this.f44551o = b0Var;
    }
}
