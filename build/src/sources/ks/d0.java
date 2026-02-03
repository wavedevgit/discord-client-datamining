package ks;

import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d0 extends ls.d {

    /* renamed from: a  reason: collision with root package name */
    public long f36425a = -1;

    /* renamed from: b  reason: collision with root package name */
    public Continuation f36426b;

    @Override // ls.d
    /* renamed from: c */
    public boolean a(b0 b0Var) {
        if (this.f36425a >= 0) {
            return false;
        }
        this.f36425a = b0Var.X();
        return true;
    }

    @Override // ls.d
    /* renamed from: d */
    public Continuation[] b(b0 b0Var) {
        long j10 = this.f36425a;
        this.f36425a = -1L;
        this.f36426b = null;
        return b0Var.W(j10);
    }
}
