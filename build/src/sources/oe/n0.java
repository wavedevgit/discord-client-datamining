package oe;

import com.google.android.exoplayer2.PlaybackParameters;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements a0 {

    /* renamed from: d  reason: collision with root package name */
    private final e f40658d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f40659e;

    /* renamed from: i  reason: collision with root package name */
    private long f40660i;

    /* renamed from: o  reason: collision with root package name */
    private long f40661o;

    /* renamed from: p  reason: collision with root package name */
    private PlaybackParameters f40662p = PlaybackParameters.f11972o;

    public n0(e eVar) {
        this.f40658d = eVar;
    }

    public void a(long j10) {
        this.f40660i = j10;
        if (this.f40659e) {
            this.f40661o = this.f40658d.b();
        }
    }

    public void b() {
        if (!this.f40659e) {
            this.f40661o = this.f40658d.b();
            this.f40659e = true;
        }
    }

    @Override // oe.a0
    public PlaybackParameters c() {
        return this.f40662p;
    }

    public void d() {
        if (this.f40659e) {
            a(v());
            this.f40659e = false;
        }
    }

    @Override // oe.a0
    public void f(PlaybackParameters playbackParameters) {
        if (this.f40659e) {
            a(v());
        }
        this.f40662p = playbackParameters;
    }

    @Override // oe.a0
    public long v() {
        long b10;
        long j10 = this.f40660i;
        if (this.f40659e) {
            long b11 = this.f40658d.b() - this.f40661o;
            PlaybackParameters playbackParameters = this.f40662p;
            if (playbackParameters.f11976d == 1.0f) {
                b10 = w0.K0(b11);
            } else {
                b10 = playbackParameters.b(b11);
            }
            return j10 + b10;
        }
        return j10;
    }
}
