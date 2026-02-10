package oe;

import com.google.android.exoplayer2.PlaybackParameters;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements a0 {

    /* renamed from: d  reason: collision with root package name */
    private final e f38984d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f38985e;

    /* renamed from: i  reason: collision with root package name */
    private long f38986i;

    /* renamed from: o  reason: collision with root package name */
    private long f38987o;

    /* renamed from: p  reason: collision with root package name */
    private PlaybackParameters f38988p = PlaybackParameters.f12549o;

    public n0(e eVar) {
        this.f38984d = eVar;
    }

    public void a(long j10) {
        this.f38986i = j10;
        if (this.f38985e) {
            this.f38987o = this.f38984d.b();
        }
    }

    public void b() {
        if (!this.f38985e) {
            this.f38987o = this.f38984d.b();
            this.f38985e = true;
        }
    }

    @Override // oe.a0
    public PlaybackParameters c() {
        return this.f38988p;
    }

    public void d() {
        if (this.f38985e) {
            a(v());
            this.f38985e = false;
        }
    }

    @Override // oe.a0
    public void f(PlaybackParameters playbackParameters) {
        if (this.f38985e) {
            a(v());
        }
        this.f38988p = playbackParameters;
    }

    @Override // oe.a0
    public long v() {
        long b10;
        long j10 = this.f38986i;
        if (this.f38985e) {
            long b11 = this.f38984d.b() - this.f38987o;
            PlaybackParameters playbackParameters = this.f38988p;
            if (playbackParameters.f12553d == 1.0f) {
                b10 = w0.K0(b11);
            } else {
                b10 = playbackParameters.b(b11);
            }
            return j10 + b10;
        }
        return j10;
    }
}
