package rd;

import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class y0 extends f {

    /* renamed from: w  reason: collision with root package name */
    private static final Void f46525w = null;

    /* renamed from: v  reason: collision with root package name */
    protected final r f46526v;

    /* JADX INFO: Access modifiers changed from: protected */
    public y0(r rVar) {
        this.f46526v = rVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rd.f, rd.a
    public final void B(me.c0 c0Var) {
        super.B(c0Var);
        T();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rd.f
    /* renamed from: K */
    public final r.b F(Void r12, r.b bVar) {
        return L(bVar);
    }

    protected abstract r.b L(r.b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rd.f
    /* renamed from: N */
    public final long G(Void r12, long j10) {
        return M(j10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rd.f
    /* renamed from: P */
    public final int H(Void r12, int i10) {
        return O(i10);
    }

    protected abstract void Q(Timeline timeline);

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rd.f
    /* renamed from: R */
    public final void I(Void r12, r rVar, Timeline timeline) {
        Q(timeline);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void S() {
        J(f46525w, this.f46526v);
    }

    protected abstract void T();

    @Override // rd.r
    public MediaItem d() {
        return this.f46526v.d();
    }

    @Override // rd.r
    public boolean r() {
        return this.f46526v.r();
    }

    @Override // rd.r
    public Timeline s() {
        return this.f46526v.s();
    }

    protected long M(long j10) {
        return j10;
    }

    protected int O(int i10) {
        return i10;
    }
}
