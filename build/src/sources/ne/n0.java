package ne;

import com.google.android.exoplayer2.PlaybackParameters;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements a0 {

    /* renamed from: d  reason: collision with root package name */
    private final e f38959d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f38960e;

    /* renamed from: i  reason: collision with root package name */
    private long f38961i;

    /* renamed from: o  reason: collision with root package name */
    private long f38962o;

    /* renamed from: p  reason: collision with root package name */
    private PlaybackParameters f38963p = PlaybackParameters.f11832o;

    public n0(e eVar) {
        this.f38959d = eVar;
    }

    public void a(long j10) {
        this.f38961i = j10;
        if (this.f38960e) {
            this.f38962o = this.f38959d.b();
        }
    }

    public void b() {
        if (!this.f38960e) {
            this.f38962o = this.f38959d.b();
            this.f38960e = true;
        }
    }

    @Override // ne.a0
    public PlaybackParameters c() {
        return this.f38963p;
    }

    public void d() {
        if (this.f38960e) {
            a(v());
            this.f38960e = false;
        }
    }

    @Override // ne.a0
    public void f(PlaybackParameters playbackParameters) {
        if (this.f38960e) {
            a(v());
        }
        this.f38963p = playbackParameters;
    }

    @Override // ne.a0
    public long v() {
        long b10;
        long j10 = this.f38961i;
        if (this.f38960e) {
            long b11 = this.f38959d.b() - this.f38962o;
            PlaybackParameters playbackParameters = this.f38963p;
            if (playbackParameters.f11836d == 1.0f) {
                b10 = w0.K0(b11);
            } else {
                b10 = playbackParameters.b(b11);
            }
            return j10 + b10;
        }
        return j10;
    }
}
