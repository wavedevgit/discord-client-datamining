package ne;

import com.google.android.exoplayer2.PlaybackParameters;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements a0 {

    /* renamed from: d  reason: collision with root package name */
    private final e f39007d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f39008e;

    /* renamed from: i  reason: collision with root package name */
    private long f39009i;

    /* renamed from: o  reason: collision with root package name */
    private long f39010o;

    /* renamed from: p  reason: collision with root package name */
    private PlaybackParameters f39011p = PlaybackParameters.f11832o;

    public n0(e eVar) {
        this.f39007d = eVar;
    }

    public void a(long j10) {
        this.f39009i = j10;
        if (this.f39008e) {
            this.f39010o = this.f39007d.b();
        }
    }

    public void b() {
        if (!this.f39008e) {
            this.f39010o = this.f39007d.b();
            this.f39008e = true;
        }
    }

    @Override // ne.a0
    public PlaybackParameters c() {
        return this.f39011p;
    }

    public void d() {
        if (this.f39008e) {
            a(v());
            this.f39008e = false;
        }
    }

    @Override // ne.a0
    public void f(PlaybackParameters playbackParameters) {
        if (this.f39008e) {
            a(v());
        }
        this.f39011p = playbackParameters;
    }

    @Override // ne.a0
    public long v() {
        long b10;
        long j10 = this.f39009i;
        if (this.f39008e) {
            long b11 = this.f39007d.b() - this.f39010o;
            PlaybackParameters playbackParameters = this.f39011p;
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
