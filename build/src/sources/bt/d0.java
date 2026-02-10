package bt;

import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d0 extends ct.d {

    /* renamed from: a  reason: collision with root package name */
    public long f7552a = -1;

    /* renamed from: b  reason: collision with root package name */
    public Continuation f7553b;

    @Override // ct.d
    /* renamed from: c */
    public boolean a(b0 b0Var) {
        if (this.f7552a >= 0) {
            return false;
        }
        this.f7552a = b0Var.X();
        return true;
    }

    @Override // ct.d
    /* renamed from: d */
    public Continuation[] b(b0 b0Var) {
        long j10 = this.f7552a;
        this.f7552a = -1L;
        this.f7553b = null;
        return b0Var.W(j10);
    }
}
