package ps;

import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d0 extends qs.d {

    /* renamed from: a  reason: collision with root package name */
    public long f46349a = -1;

    /* renamed from: b  reason: collision with root package name */
    public Continuation f46350b;

    @Override // qs.d
    /* renamed from: c */
    public boolean a(b0 b0Var) {
        if (this.f46349a >= 0) {
            return false;
        }
        this.f46349a = b0Var.X();
        return true;
    }

    @Override // qs.d
    /* renamed from: d */
    public Continuation[] b(b0 b0Var) {
        long j10 = this.f46349a;
        this.f46349a = -1L;
        this.f46350b = null;
        return b0Var.W(j10);
    }
}
