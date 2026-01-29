package ne;

import com.google.android.exoplayer2.PlaybackParameters;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements a0 {

    /* renamed from: d  reason: collision with root package name */
    private final e f40226d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f40227e;

    /* renamed from: i  reason: collision with root package name */
    private long f40228i;

    /* renamed from: o  reason: collision with root package name */
    private long f40229o;

    /* renamed from: p  reason: collision with root package name */
    private PlaybackParameters f40230p = PlaybackParameters.f12951o;

    public n0(e eVar) {
        this.f40226d = eVar;
    }

    public void a(long j10) {
        this.f40228i = j10;
        if (this.f40227e) {
            this.f40229o = this.f40226d.b();
        }
    }

    public void b() {
        if (!this.f40227e) {
            this.f40229o = this.f40226d.b();
            this.f40227e = true;
        }
    }

    @Override // ne.a0
    public PlaybackParameters c() {
        return this.f40230p;
    }

    public void d() {
        if (this.f40227e) {
            a(v());
            this.f40227e = false;
        }
    }

    @Override // ne.a0
    public void f(PlaybackParameters playbackParameters) {
        if (this.f40227e) {
            a(v());
        }
        this.f40230p = playbackParameters;
    }

    @Override // ne.a0
    public long v() {
        long b10;
        long j10 = this.f40228i;
        if (this.f40227e) {
            long b11 = this.f40226d.b() - this.f40229o;
            PlaybackParameters playbackParameters = this.f40230p;
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
