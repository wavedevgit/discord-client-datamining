package ms;

import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d0 extends ns.d {

    /* renamed from: a  reason: collision with root package name */
    public long f39152a = -1;

    /* renamed from: b  reason: collision with root package name */
    public Continuation f39153b;

    @Override // ns.d
    /* renamed from: c */
    public boolean a(b0 b0Var) {
        if (this.f39152a >= 0) {
            return false;
        }
        this.f39152a = b0Var.X();
        return true;
    }

    @Override // ns.d
    /* renamed from: d */
    public Continuation[] b(b0 b0Var) {
        long j10 = this.f39152a;
        this.f39152a = -1L;
        this.f39153b = null;
        return b0Var.W(j10);
    }
}
