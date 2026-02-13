package oe;

import com.google.android.exoplayer2.PlaybackParameters;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements a0 {

    /* renamed from: d  reason: collision with root package name */
    private final e f39553d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f39554e;

    /* renamed from: i  reason: collision with root package name */
    private long f39555i;

    /* renamed from: o  reason: collision with root package name */
    private long f39556o;

    /* renamed from: p  reason: collision with root package name */
    private PlaybackParameters f39557p = PlaybackParameters.f12550o;

    public n0(e eVar) {
        this.f39553d = eVar;
    }

    public void a(long j10) {
        this.f39555i = j10;
        if (this.f39554e) {
            this.f39556o = this.f39553d.b();
        }
    }

    public void b() {
        if (!this.f39554e) {
            this.f39556o = this.f39553d.b();
            this.f39554e = true;
        }
    }

    @Override // oe.a0
    public PlaybackParameters c() {
        return this.f39557p;
    }

    public void d() {
        if (this.f39554e) {
            a(v());
            this.f39554e = false;
        }
    }

    @Override // oe.a0
    public void f(PlaybackParameters playbackParameters) {
        if (this.f39554e) {
            a(v());
        }
        this.f39557p = playbackParameters;
    }

    @Override // oe.a0
    public long v() {
        long b10;
        long j10 = this.f39555i;
        if (this.f39554e) {
            long b11 = this.f39553d.b() - this.f39556o;
            PlaybackParameters playbackParameters = this.f39557p;
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
