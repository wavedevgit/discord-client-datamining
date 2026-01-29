package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.ShortBuffer;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p implements d {

    /* renamed from: b  reason: collision with root package name */
    private int f13423b;

    /* renamed from: c  reason: collision with root package name */
    private float f13424c = 1.0f;

    /* renamed from: d  reason: collision with root package name */
    private float f13425d = 1.0f;

    /* renamed from: e  reason: collision with root package name */
    private d.a f13426e;

    /* renamed from: f  reason: collision with root package name */
    private d.a f13427f;

    /* renamed from: g  reason: collision with root package name */
    private d.a f13428g;

    /* renamed from: h  reason: collision with root package name */
    private d.a f13429h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f13430i;

    /* renamed from: j  reason: collision with root package name */
    private o f13431j;

    /* renamed from: k  reason: collision with root package name */
    private ByteBuffer f13432k;

    /* renamed from: l  reason: collision with root package name */
    private ShortBuffer f13433l;

    /* renamed from: m  reason: collision with root package name */
    private ByteBuffer f13434m;

    /* renamed from: n  reason: collision with root package name */
    private long f13435n;

    /* renamed from: o  reason: collision with root package name */
    private long f13436o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f13437p;

    public p() {
        d.a aVar = d.a.f13238e;
        this.f13426e = aVar;
        this.f13427f = aVar;
        this.f13428g = aVar;
        this.f13429h = aVar;
        ByteBuffer byteBuffer = d.f13237a;
        this.f13432k = byteBuffer;
        this.f13433l = byteBuffer.asShortBuffer();
        this.f13434m = byteBuffer;
        this.f13423b = -1;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean a() {
        if (this.f13427f.f13239a != -1) {
            if (Math.abs(this.f13424c - 1.0f) >= 1.0E-4f || Math.abs(this.f13425d - 1.0f) >= 1.0E-4f || this.f13427f.f13239a != this.f13426e.f13239a) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final ByteBuffer b() {
        int k10;
        o oVar = this.f13431j;
        if (oVar != null && (k10 = oVar.k()) > 0) {
            if (this.f13432k.capacity() < k10) {
                ByteBuffer order = ByteBuffer.allocateDirect(k10).order(ByteOrder.nativeOrder());
                this.f13432k = order;
                this.f13433l = order.asShortBuffer();
            } else {
                this.f13432k.clear();
                this.f13433l.clear();
            }
            oVar.j(this.f13433l);
            this.f13436o += k10;
            this.f13432k.limit(k10);
            this.f13434m = this.f13432k;
        }
        ByteBuffer byteBuffer = this.f13434m;
        this.f13434m = d.f13237a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void c(ByteBuffer byteBuffer) {
        if (!byteBuffer.hasRemaining()) {
            return;
        }
        ShortBuffer asShortBuffer = byteBuffer.asShortBuffer();
        int remaining = byteBuffer.remaining();
        this.f13435n += remaining;
        ((o) ne.a.e(this.f13431j)).t(asShortBuffer);
        byteBuffer.position(byteBuffer.position() + remaining);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean d() {
        if (this.f13437p) {
            o oVar = this.f13431j;
            if (oVar == null || oVar.k() == 0) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        if (aVar.f13241c == 2) {
            int i10 = this.f13423b;
            if (i10 == -1) {
                i10 = aVar.f13239a;
            }
            this.f13426e = aVar;
            d.a aVar2 = new d.a(i10, aVar.f13240b, 2);
            this.f13427f = aVar2;
            this.f13430i = true;
            return aVar2;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        o oVar = this.f13431j;
        if (oVar != null) {
            oVar.s();
        }
        this.f13437p = true;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        if (a()) {
            d.a aVar = this.f13426e;
            this.f13428g = aVar;
            d.a aVar2 = this.f13427f;
            this.f13429h = aVar2;
            if (this.f13430i) {
                this.f13431j = new o(aVar.f13239a, aVar.f13240b, this.f13424c, this.f13425d, aVar2.f13239a);
            } else {
                o oVar = this.f13431j;
                if (oVar != null) {
                    oVar.i();
                }
            }
        }
        this.f13434m = d.f13237a;
        this.f13435n = 0L;
        this.f13436o = 0L;
        this.f13437p = false;
    }

    public final long g(long j10) {
        if (this.f13436o >= 1024) {
            long l10 = this.f13435n - ((o) ne.a.e(this.f13431j)).l();
            int i10 = this.f13429h.f13239a;
            int i11 = this.f13428g.f13239a;
            if (i10 == i11) {
                return w0.X0(j10, l10, this.f13436o);
            }
            return w0.X0(j10, l10 * i10, this.f13436o * i11);
        }
        return (long) (this.f13424c * j10);
    }

    public final void h(float f10) {
        if (this.f13425d != f10) {
            this.f13425d = f10;
            this.f13430i = true;
        }
    }

    public final void i(float f10) {
        if (this.f13424c != f10) {
            this.f13424c = f10;
            this.f13430i = true;
        }
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        this.f13424c = 1.0f;
        this.f13425d = 1.0f;
        d.a aVar = d.a.f13238e;
        this.f13426e = aVar;
        this.f13427f = aVar;
        this.f13428g = aVar;
        this.f13429h = aVar;
        ByteBuffer byteBuffer = d.f13237a;
        this.f13432k = byteBuffer;
        this.f13433l = byteBuffer.asShortBuffer();
        this.f13434m = byteBuffer;
        this.f13423b = -1;
        this.f13430i = false;
        this.f13431j = null;
        this.f13435n = 0L;
        this.f13436o = 0L;
        this.f13437p = false;
    }
}
