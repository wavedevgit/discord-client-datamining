package ne;

import com.google.android.exoplayer2.PlaybackParameters;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements a0 {

    /* renamed from: d  reason: collision with root package name */
    private final e f40144d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f40145e;

    /* renamed from: i  reason: collision with root package name */
    private long f40146i;

    /* renamed from: o  reason: collision with root package name */
    private long f40147o;

    /* renamed from: p  reason: collision with root package name */
    private PlaybackParameters f40148p = PlaybackParameters.f11548o;

    public n0(e eVar) {
        this.f40144d = eVar;
    }

    public void a(long j10) {
        this.f40146i = j10;
        if (this.f40145e) {
            this.f40147o = this.f40144d.b();
        }
    }

    public void b() {
        if (!this.f40145e) {
            this.f40147o = this.f40144d.b();
            this.f40145e = true;
        }
    }

    @Override // ne.a0
    public PlaybackParameters c() {
        return this.f40148p;
    }

    public void d() {
        if (this.f40145e) {
            a(v());
            this.f40145e = false;
        }
    }

    @Override // ne.a0
    public void f(PlaybackParameters playbackParameters) {
        if (this.f40145e) {
            a(v());
        }
        this.f40148p = playbackParameters;
    }

    @Override // ne.a0
    public long v() {
        long b10;
        long j10 = this.f40146i;
        if (this.f40145e) {
            long b11 = this.f40144d.b() - this.f40147o;
            PlaybackParameters playbackParameters = this.f40148p;
            if (playbackParameters.f11552d == 1.0f) {
                b10 = w0.K0(b11);
            } else {
                b10 = playbackParameters.b(b11);
            }
            return j10 + b10;
        }
        return j10;
    }
}
