package ne;

import com.google.android.exoplayer2.PlaybackParameters;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements a0 {

    /* renamed from: d  reason: collision with root package name */
    private final e f40242d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f40243e;

    /* renamed from: i  reason: collision with root package name */
    private long f40244i;

    /* renamed from: o  reason: collision with root package name */
    private long f40245o;

    /* renamed from: p  reason: collision with root package name */
    private PlaybackParameters f40246p = PlaybackParameters.f12951o;

    public n0(e eVar) {
        this.f40242d = eVar;
    }

    public void a(long j10) {
        this.f40244i = j10;
        if (this.f40243e) {
            this.f40245o = this.f40242d.b();
        }
    }

    public void b() {
        if (!this.f40243e) {
            this.f40245o = this.f40242d.b();
            this.f40243e = true;
        }
    }

    @Override // ne.a0
    public PlaybackParameters c() {
        return this.f40246p;
    }

    public void d() {
        if (this.f40243e) {
            a(v());
            this.f40243e = false;
        }
    }

    @Override // ne.a0
    public void f(PlaybackParameters playbackParameters) {
        if (this.f40243e) {
            a(v());
        }
        this.f40246p = playbackParameters;
    }

    @Override // ne.a0
    public long v() {
        long b10;
        long j10 = this.f40244i;
        if (this.f40243e) {
            long b11 = this.f40242d.b() - this.f40245o;
            PlaybackParameters playbackParameters = this.f40246p;
            if (playbackParameters.f12955d == 1.0f) {
                b10 = w0.K0(b11);
            } else {
                b10 = playbackParameters.b(b11);
            }
            return j10 + b10;
        }
        return j10;
    }
}
