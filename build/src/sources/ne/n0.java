package ne;

import com.google.android.exoplayer2.PlaybackParameters;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements a0 {

    /* renamed from: d  reason: collision with root package name */
    private final e f40105d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f40106e;

    /* renamed from: i  reason: collision with root package name */
    private long f40107i;

    /* renamed from: o  reason: collision with root package name */
    private long f40108o;

    /* renamed from: p  reason: collision with root package name */
    private PlaybackParameters f40109p = PlaybackParameters.f12580o;

    public n0(e eVar) {
        this.f40105d = eVar;
    }

    public void a(long j10) {
        this.f40107i = j10;
        if (this.f40106e) {
            this.f40108o = this.f40105d.b();
        }
    }

    public void b() {
        if (!this.f40106e) {
            this.f40108o = this.f40105d.b();
            this.f40106e = true;
        }
    }

    @Override // ne.a0
    public PlaybackParameters c() {
        return this.f40109p;
    }

    public void d() {
        if (this.f40106e) {
            a(v());
            this.f40106e = false;
        }
    }

    @Override // ne.a0
    public void f(PlaybackParameters playbackParameters) {
        if (this.f40106e) {
            a(v());
        }
        this.f40109p = playbackParameters;
    }

    @Override // ne.a0
    public long v() {
        long b10;
        long j10 = this.f40107i;
        if (this.f40106e) {
            long b11 = this.f40105d.b() - this.f40108o;
            PlaybackParameters playbackParameters = this.f40109p;
            if (playbackParameters.f12584d == 1.0f) {
                b10 = w0.K0(b11);
            } else {
                b10 = playbackParameters.b(b11);
            }
            return j10 + b10;
        }
        return j10;
    }
}
