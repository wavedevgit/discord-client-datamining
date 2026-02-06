package rs;

import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d0 extends ss.d {

    /* renamed from: a  reason: collision with root package name */
    public long f49250a = -1;

    /* renamed from: b  reason: collision with root package name */
    public Continuation f49251b;

    @Override // ss.d
    /* renamed from: c */
    public boolean a(b0 b0Var) {
        if (this.f49250a >= 0) {
            return false;
        }
        this.f49250a = b0Var.X();
        return true;
    }

    @Override // ss.d
    /* renamed from: d */
    public Continuation[] b(b0 b0Var) {
        long j10 = this.f49250a;
        this.f49250a = -1L;
        this.f49251b = null;
        return b0Var.W(j10);
    }
}
