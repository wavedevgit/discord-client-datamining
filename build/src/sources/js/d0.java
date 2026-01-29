package js;

import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d0 extends ks.d {

    /* renamed from: a  reason: collision with root package name */
    public long f32490a = -1;

    /* renamed from: b  reason: collision with root package name */
    public Continuation f32491b;

    @Override // ks.d
    /* renamed from: c */
    public boolean a(b0 b0Var) {
        if (this.f32490a >= 0) {
            return false;
        }
        this.f32490a = b0Var.X();
        return true;
    }

    @Override // ks.d
    /* renamed from: d */
    public Continuation[] b(b0 b0Var) {
        long j10 = this.f32490a;
        this.f32490a = -1L;
        this.f32491b = null;
        return b0Var.W(j10);
    }
}
