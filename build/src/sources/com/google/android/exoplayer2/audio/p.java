package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.ShortBuffer;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p implements d {

    /* renamed from: b  reason: collision with root package name */
    private int f12304b;

    /* renamed from: c  reason: collision with root package name */
    private float f12305c = 1.0f;

    /* renamed from: d  reason: collision with root package name */
    private float f12306d = 1.0f;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12307e;

    /* renamed from: f  reason: collision with root package name */
    private d.a f12308f;

    /* renamed from: g  reason: collision with root package name */
    private d.a f12309g;

    /* renamed from: h  reason: collision with root package name */
    private d.a f12310h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f12311i;

    /* renamed from: j  reason: collision with root package name */
    private o f12312j;

    /* renamed from: k  reason: collision with root package name */
    private ByteBuffer f12313k;

    /* renamed from: l  reason: collision with root package name */
    private ShortBuffer f12314l;

    /* renamed from: m  reason: collision with root package name */
    private ByteBuffer f12315m;

    /* renamed from: n  reason: collision with root package name */
    private long f12316n;

    /* renamed from: o  reason: collision with root package name */
    private long f12317o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f12318p;

    public p() {
        d.a aVar = d.a.f12119e;
        this.f12307e = aVar;
        this.f12308f = aVar;
        this.f12309g = aVar;
        this.f12310h = aVar;
        ByteBuffer byteBuffer = d.f12118a;
        this.f12313k = byteBuffer;
        this.f12314l = byteBuffer.asShortBuffer();
        this.f12315m = byteBuffer;
        this.f12304b = -1;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean a() {
        if (this.f12308f.f12120a != -1) {
            if (Math.abs(this.f12305c - 1.0f) >= 1.0E-4f || Math.abs(this.f12306d - 1.0f) >= 1.0E-4f || this.f12308f.f12120a != this.f12307e.f12120a) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final ByteBuffer b() {
        int k10;
        o oVar = this.f12312j;
        if (oVar != null && (k10 = oVar.k()) > 0) {
            if (this.f12313k.capacity() < k10) {
                ByteBuffer order = ByteBuffer.allocateDirect(k10).order(ByteOrder.nativeOrder());
                this.f12313k = order;
                this.f12314l = order.asShortBuffer();
            } else {
                this.f12313k.clear();
                this.f12314l.clear();
            }
            oVar.j(this.f12314l);
            this.f12317o += k10;
            this.f12313k.limit(k10);
            this.f12315m = this.f12313k;
        }
        ByteBuffer byteBuffer = this.f12315m;
        this.f12315m = d.f12118a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void c(ByteBuffer byteBuffer) {
        if (!byteBuffer.hasRemaining()) {
            return;
        }
        ShortBuffer asShortBuffer = byteBuffer.asShortBuffer();
        int remaining = byteBuffer.remaining();
        this.f12316n += remaining;
        ((o) ne.a.e(this.f12312j)).t(asShortBuffer);
        byteBuffer.position(byteBuffer.position() + remaining);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean d() {
        if (this.f12318p) {
            o oVar = this.f12312j;
            if (oVar == null || oVar.k() == 0) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        if (aVar.f12122c == 2) {
            int i10 = this.f12304b;
            if (i10 == -1) {
                i10 = aVar.f12120a;
            }
            this.f12307e = aVar;
            d.a aVar2 = new d.a(i10, aVar.f12121b, 2);
            this.f12308f = aVar2;
            this.f12311i = true;
            return aVar2;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        o oVar = this.f12312j;
        if (oVar != null) {
            oVar.s();
        }
        this.f12318p = true;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        if (a()) {
            d.a aVar = this.f12307e;
            this.f12309g = aVar;
            d.a aVar2 = this.f12308f;
            this.f12310h = aVar2;
            if (this.f12311i) {
                this.f12312j = new o(aVar.f12120a, aVar.f12121b, this.f12305c, this.f12306d, aVar2.f12120a);
            } else {
                o oVar = this.f12312j;
                if (oVar != null) {
                    oVar.i();
                }
            }
        }
        this.f12315m = d.f12118a;
        this.f12316n = 0L;
        this.f12317o = 0L;
        this.f12318p = false;
    }

    public final long g(long j10) {
        if (this.f12317o >= 1024) {
            long l10 = this.f12316n - ((o) ne.a.e(this.f12312j)).l();
            int i10 = this.f12310h.f12120a;
            int i11 = this.f12309g.f12120a;
            if (i10 == i11) {
                return w0.X0(j10, l10, this.f12317o);
            }
            return w0.X0(j10, l10 * i10, this.f12317o * i11);
        }
        return (long) (this.f12305c * j10);
    }

    public final void h(float f10) {
        if (this.f12306d != f10) {
            this.f12306d = f10;
            this.f12311i = true;
        }
    }

    public final void i(float f10) {
        if (this.f12305c != f10) {
            this.f12305c = f10;
            this.f12311i = true;
        }
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        this.f12305c = 1.0f;
        this.f12306d = 1.0f;
        d.a aVar = d.a.f12119e;
        this.f12307e = aVar;
        this.f12308f = aVar;
        this.f12309g = aVar;
        this.f12310h = aVar;
        ByteBuffer byteBuffer = d.f12118a;
        this.f12313k = byteBuffer;
        this.f12314l = byteBuffer.asShortBuffer();
        this.f12315m = byteBuffer;
        this.f12304b = -1;
        this.f12311i = false;
        this.f12312j = null;
        this.f12316n = 0L;
        this.f12317o = 0L;
        this.f12318p = false;
    }
}
