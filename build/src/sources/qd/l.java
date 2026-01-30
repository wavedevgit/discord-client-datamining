package qd;

import com.google.android.exoplayer2.Timeline;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l extends Timeline {

    /* renamed from: q  reason: collision with root package name */
    protected final Timeline f47236q;

    public l(Timeline timeline) {
        this.f47236q = timeline;
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int e(boolean z10) {
        return this.f47236q.e(z10);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int f(Object obj) {
        return this.f47236q.f(obj);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int g(boolean z10) {
        return this.f47236q.g(z10);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int i(int i10, int i11, boolean z10) {
        return this.f47236q.i(i10, i11, z10);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public Timeline.b k(int i10, Timeline.b bVar, boolean z10) {
        return this.f47236q.k(i10, bVar, z10);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int m() {
        return this.f47236q.m();
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int p(int i10, int i11, boolean z10) {
        return this.f47236q.p(i10, i11, z10);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public Object q(int i10) {
        return this.f47236q.q(i10);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public Timeline.d s(int i10, Timeline.d dVar, long j10) {
        return this.f47236q.s(i10, dVar, j10);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int t() {
        return this.f47236q.t();
    }
}
