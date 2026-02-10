package ss;

import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d0 extends ts.d {

    /* renamed from: a  reason: collision with root package name */
    public long f50123a = -1;

    /* renamed from: b  reason: collision with root package name */
    public Continuation f50124b;

    @Override // ts.d
    /* renamed from: c */
    public boolean a(b0 b0Var) {
        if (this.f50123a >= 0) {
            return false;
        }
        this.f50123a = b0Var.X();
        return true;
    }

    @Override // ts.d
    /* renamed from: d */
    public Continuation[] b(b0 b0Var) {
        long j10 = this.f50123a;
        this.f50123a = -1L;
        this.f50124b = null;
        return b0Var.W(j10);
    }
}
