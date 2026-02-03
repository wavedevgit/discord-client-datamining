package qd;

import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class y0 extends f {

    /* renamed from: w  reason: collision with root package name */
    private static final Void f47642w = null;

    /* renamed from: v  reason: collision with root package name */
    protected final r f47643v;

    /* JADX INFO: Access modifiers changed from: protected */
    public y0(r rVar) {
        this.f47643v = rVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.f, qd.a
    public final void B(le.c0 c0Var) {
        super.B(c0Var);
        T();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.f
    /* renamed from: K */
    public final r.b F(Void r12, r.b bVar) {
        return L(bVar);
    }

    protected abstract r.b L(r.b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.f
    /* renamed from: N */
    public final long G(Void r12, long j10) {
        return M(j10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.f
    /* renamed from: P */
    public final int H(Void r12, int i10) {
        return O(i10);
    }

    protected abstract void Q(Timeline timeline);

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.f
    /* renamed from: R */
    public final void I(Void r12, r rVar, Timeline timeline) {
        Q(timeline);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void S() {
        J(f47642w, this.f47643v);
    }

    protected abstract void T();

    @Override // qd.r
    public MediaItem f() {
        return this.f47643v.f();
    }

    @Override // qd.r
    public boolean p() {
        return this.f47643v.p();
    }

    @Override // qd.r
    public Timeline q() {
        return this.f47643v.q();
    }

    protected long M(long j10) {
        return j10;
    }

    protected int O(int i10) {
        return i10;
    }
}
