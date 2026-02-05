package ne;

import com.google.android.exoplayer2.PlaybackParameters;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements a0 {

    /* renamed from: d  reason: collision with root package name */
    private final e f39604d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f39605e;

    /* renamed from: i  reason: collision with root package name */
    private long f39606i;

    /* renamed from: o  reason: collision with root package name */
    private long f39607o;

    /* renamed from: p  reason: collision with root package name */
    private PlaybackParameters f39608p = PlaybackParameters.f11933o;

    public n0(e eVar) {
        this.f39604d = eVar;
    }

    public void a(long j10) {
        this.f39606i = j10;
        if (this.f39605e) {
            this.f39607o = this.f39604d.b();
        }
    }

    public void b() {
        if (!this.f39605e) {
            this.f39607o = this.f39604d.b();
            this.f39605e = true;
        }
    }

    @Override // ne.a0
    public PlaybackParameters c() {
        return this.f39608p;
    }

    public void d() {
        if (this.f39605e) {
            a(v());
            this.f39605e = false;
        }
    }

    @Override // ne.a0
    public void f(PlaybackParameters playbackParameters) {
        if (this.f39605e) {
            a(v());
        }
        this.f39608p = playbackParameters;
    }

    @Override // ne.a0
    public long v() {
        long b10;
        long j10 = this.f39606i;
        if (this.f39605e) {
            long b11 = this.f39604d.b() - this.f39607o;
            PlaybackParameters playbackParameters = this.f39608p;
            if (playbackParameters.f11937d == 1.0f) {
                b10 = w0.K0(b11);
            } else {
                b10 = playbackParameters.b(b11);
            }
            return j10 + b10;
        }
        return j10;
    }
}
