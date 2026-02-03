package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.ShortBuffer;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p implements d {

    /* renamed from: b  reason: collision with root package name */
    private int f12020b;

    /* renamed from: c  reason: collision with root package name */
    private float f12021c = 1.0f;

    /* renamed from: d  reason: collision with root package name */
    private float f12022d = 1.0f;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12023e;

    /* renamed from: f  reason: collision with root package name */
    private d.a f12024f;

    /* renamed from: g  reason: collision with root package name */
    private d.a f12025g;

    /* renamed from: h  reason: collision with root package name */
    private d.a f12026h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f12027i;

    /* renamed from: j  reason: collision with root package name */
    private o f12028j;

    /* renamed from: k  reason: collision with root package name */
    private ByteBuffer f12029k;

    /* renamed from: l  reason: collision with root package name */
    private ShortBuffer f12030l;

    /* renamed from: m  reason: collision with root package name */
    private ByteBuffer f12031m;

    /* renamed from: n  reason: collision with root package name */
    private long f12032n;

    /* renamed from: o  reason: collision with root package name */
    private long f12033o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f12034p;

    public p() {
        d.a aVar = d.a.f11835e;
        this.f12023e = aVar;
        this.f12024f = aVar;
        this.f12025g = aVar;
        this.f12026h = aVar;
        ByteBuffer byteBuffer = d.f11834a;
        this.f12029k = byteBuffer;
        this.f12030l = byteBuffer.asShortBuffer();
        this.f12031m = byteBuffer;
        this.f12020b = -1;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean a() {
        if (this.f12024f.f11836a != -1) {
            if (Math.abs(this.f12021c - 1.0f) >= 1.0E-4f || Math.abs(this.f12022d - 1.0f) >= 1.0E-4f || this.f12024f.f11836a != this.f12023e.f11836a) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final ByteBuffer b() {
        int k10;
        o oVar = this.f12028j;
        if (oVar != null && (k10 = oVar.k()) > 0) {
            if (this.f12029k.capacity() < k10) {
                ByteBuffer order = ByteBuffer.allocateDirect(k10).order(ByteOrder.nativeOrder());
                this.f12029k = order;
                this.f12030l = order.asShortBuffer();
            } else {
                this.f12029k.clear();
                this.f12030l.clear();
            }
            oVar.j(this.f12030l);
            this.f12033o += k10;
            this.f12029k.limit(k10);
            this.f12031m = this.f12029k;
        }
        ByteBuffer byteBuffer = this.f12031m;
        this.f12031m = d.f11834a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void c(ByteBuffer byteBuffer) {
        if (!byteBuffer.hasRemaining()) {
            return;
        }
        ShortBuffer asShortBuffer = byteBuffer.asShortBuffer();
        int remaining = byteBuffer.remaining();
        this.f12032n += remaining;
        ((o) ne.a.e(this.f12028j)).t(asShortBuffer);
        byteBuffer.position(byteBuffer.position() + remaining);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean d() {
        if (this.f12034p) {
            o oVar = this.f12028j;
            if (oVar == null || oVar.k() == 0) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        if (aVar.f11838c == 2) {
            int i10 = this.f12020b;
            if (i10 == -1) {
                i10 = aVar.f11836a;
            }
            this.f12023e = aVar;
            d.a aVar2 = new d.a(i10, aVar.f11837b, 2);
            this.f12024f = aVar2;
            this.f12027i = true;
            return aVar2;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        o oVar = this.f12028j;
        if (oVar != null) {
            oVar.s();
        }
        this.f12034p = true;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        if (a()) {
            d.a aVar = this.f12023e;
            this.f12025g = aVar;
            d.a aVar2 = this.f12024f;
            this.f12026h = aVar2;
            if (this.f12027i) {
                this.f12028j = new o(aVar.f11836a, aVar.f11837b, this.f12021c, this.f12022d, aVar2.f11836a);
            } else {
                o oVar = this.f12028j;
                if (oVar != null) {
                    oVar.i();
                }
            }
        }
        this.f12031m = d.f11834a;
        this.f12032n = 0L;
        this.f12033o = 0L;
        this.f12034p = false;
    }

    public final long g(long j10) {
        if (this.f12033o >= 1024) {
            long l10 = this.f12032n - ((o) ne.a.e(this.f12028j)).l();
            int i10 = this.f12026h.f11836a;
            int i11 = this.f12025g.f11836a;
            if (i10 == i11) {
                return w0.X0(j10, l10, this.f12033o);
            }
            return w0.X0(j10, l10 * i10, this.f12033o * i11);
        }
        return (long) (this.f12021c * j10);
    }

    public final void h(float f10) {
        if (this.f12022d != f10) {
            this.f12022d = f10;
            this.f12027i = true;
        }
    }

    public final void i(float f10) {
        if (this.f12021c != f10) {
            this.f12021c = f10;
            this.f12027i = true;
        }
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        this.f12021c = 1.0f;
        this.f12022d = 1.0f;
        d.a aVar = d.a.f11835e;
        this.f12023e = aVar;
        this.f12024f = aVar;
        this.f12025g = aVar;
        this.f12026h = aVar;
        ByteBuffer byteBuffer = d.f11834a;
        this.f12029k = byteBuffer;
        this.f12030l = byteBuffer.asShortBuffer();
        this.f12031m = byteBuffer;
        this.f12020b = -1;
        this.f12027i = false;
        this.f12028j = null;
        this.f12032n = 0L;
        this.f12033o = 0L;
        this.f12034p = false;
    }
}
