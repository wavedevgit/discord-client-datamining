package oe;

import com.google.android.exoplayer2.PlaybackParameters;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements a0 {

    /* renamed from: d  reason: collision with root package name */
    private final e f38985d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f38986e;

    /* renamed from: i  reason: collision with root package name */
    private long f38987i;

    /* renamed from: o  reason: collision with root package name */
    private long f38988o;

    /* renamed from: p  reason: collision with root package name */
    private PlaybackParameters f38989p = PlaybackParameters.f12550o;

    public n0(e eVar) {
        this.f38985d = eVar;
    }

    public void a(long j10) {
        this.f38987i = j10;
        if (this.f38986e) {
            this.f38988o = this.f38985d.b();
        }
    }

    public void b() {
        if (!this.f38986e) {
            this.f38988o = this.f38985d.b();
            this.f38986e = true;
        }
    }

    @Override // oe.a0
    public PlaybackParameters c() {
        return this.f38989p;
    }

    public void d() {
        if (this.f38986e) {
            a(v());
            this.f38986e = false;
        }
    }

    @Override // oe.a0
    public void f(PlaybackParameters playbackParameters) {
        if (this.f38986e) {
            a(v());
        }
        this.f38989p = playbackParameters;
    }

    @Override // oe.a0
    public long v() {
        long b10;
        long j10 = this.f38987i;
        if (this.f38986e) {
            long b11 = this.f38985d.b() - this.f38988o;
            PlaybackParameters playbackParameters = this.f38989p;
            if (playbackParameters.f12554d == 1.0f) {
                b10 = w0.K0(b11);
            } else {
                b10 = playbackParameters.b(b11);
            }
            return j10 + b10;
        }
        return j10;
    }
}
