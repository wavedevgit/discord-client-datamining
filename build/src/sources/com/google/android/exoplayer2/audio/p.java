package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.ShortBuffer;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p implements d {

    /* renamed from: b  reason: collision with root package name */
    private int f13022b;

    /* renamed from: c  reason: collision with root package name */
    private float f13023c = 1.0f;

    /* renamed from: d  reason: collision with root package name */
    private float f13024d = 1.0f;

    /* renamed from: e  reason: collision with root package name */
    private d.a f13025e;

    /* renamed from: f  reason: collision with root package name */
    private d.a f13026f;

    /* renamed from: g  reason: collision with root package name */
    private d.a f13027g;

    /* renamed from: h  reason: collision with root package name */
    private d.a f13028h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f13029i;

    /* renamed from: j  reason: collision with root package name */
    private o f13030j;

    /* renamed from: k  reason: collision with root package name */
    private ByteBuffer f13031k;

    /* renamed from: l  reason: collision with root package name */
    private ShortBuffer f13032l;

    /* renamed from: m  reason: collision with root package name */
    private ByteBuffer f13033m;

    /* renamed from: n  reason: collision with root package name */
    private long f13034n;

    /* renamed from: o  reason: collision with root package name */
    private long f13035o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f13036p;

    public p() {
        d.a aVar = d.a.f12837e;
        this.f13025e = aVar;
        this.f13026f = aVar;
        this.f13027g = aVar;
        this.f13028h = aVar;
        ByteBuffer byteBuffer = d.f12836a;
        this.f13031k = byteBuffer;
        this.f13032l = byteBuffer.asShortBuffer();
        this.f13033m = byteBuffer;
        this.f13022b = -1;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean a() {
        if (this.f13026f.f12838a != -1) {
            if (Math.abs(this.f13023c - 1.0f) >= 1.0E-4f || Math.abs(this.f13024d - 1.0f) >= 1.0E-4f || this.f13026f.f12838a != this.f13025e.f12838a) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final ByteBuffer b() {
        int k10;
        o oVar = this.f13030j;
        if (oVar != null && (k10 = oVar.k()) > 0) {
            if (this.f13031k.capacity() < k10) {
                ByteBuffer order = ByteBuffer.allocateDirect(k10).order(ByteOrder.nativeOrder());
                this.f13031k = order;
                this.f13032l = order.asShortBuffer();
            } else {
                this.f13031k.clear();
                this.f13032l.clear();
            }
            oVar.j(this.f13032l);
            this.f13035o += k10;
            this.f13031k.limit(k10);
            this.f13033m = this.f13031k;
        }
        ByteBuffer byteBuffer = this.f13033m;
        this.f13033m = d.f12836a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void c(ByteBuffer byteBuffer) {
        if (!byteBuffer.hasRemaining()) {
            return;
        }
        ShortBuffer asShortBuffer = byteBuffer.asShortBuffer();
        int remaining = byteBuffer.remaining();
        this.f13034n += remaining;
        ((o) oe.a.e(this.f13030j)).t(asShortBuffer);
        byteBuffer.position(byteBuffer.position() + remaining);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean d() {
        if (this.f13036p) {
            o oVar = this.f13030j;
            if (oVar == null || oVar.k() == 0) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        if (aVar.f12840c == 2) {
            int i10 = this.f13022b;
            if (i10 == -1) {
                i10 = aVar.f12838a;
            }
            this.f13025e = aVar;
            d.a aVar2 = new d.a(i10, aVar.f12839b, 2);
            this.f13026f = aVar2;
            this.f13029i = true;
            return aVar2;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        o oVar = this.f13030j;
        if (oVar != null) {
            oVar.s();
        }
        this.f13036p = true;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        if (a()) {
            d.a aVar = this.f13025e;
            this.f13027g = aVar;
            d.a aVar2 = this.f13026f;
            this.f13028h = aVar2;
            if (this.f13029i) {
                this.f13030j = new o(aVar.f12838a, aVar.f12839b, this.f13023c, this.f13024d, aVar2.f12838a);
            } else {
                o oVar = this.f13030j;
                if (oVar != null) {
                    oVar.i();
                }
            }
        }
        this.f13033m = d.f12836a;
        this.f13034n = 0L;
        this.f13035o = 0L;
        this.f13036p = false;
    }

    public final long g(long j10) {
        if (this.f13035o >= 1024) {
            long l10 = this.f13034n - ((o) oe.a.e(this.f13030j)).l();
            int i10 = this.f13028h.f12838a;
            int i11 = this.f13027g.f12838a;
            if (i10 == i11) {
                return w0.X0(j10, l10, this.f13035o);
            }
            return w0.X0(j10, l10 * i10, this.f13035o * i11);
        }
        return (long) (this.f13023c * j10);
    }

    public final void h(float f10) {
        if (this.f13024d != f10) {
            this.f13024d = f10;
            this.f13029i = true;
        }
    }

    public final void i(float f10) {
        if (this.f13023c != f10) {
            this.f13023c = f10;
            this.f13029i = true;
        }
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        this.f13023c = 1.0f;
        this.f13024d = 1.0f;
        d.a aVar = d.a.f12837e;
        this.f13025e = aVar;
        this.f13026f = aVar;
        this.f13027g = aVar;
        this.f13028h = aVar;
        ByteBuffer byteBuffer = d.f12836a;
        this.f13031k = byteBuffer;
        this.f13032l = byteBuffer.asShortBuffer();
        this.f13033m = byteBuffer;
        this.f13022b = -1;
        this.f13029i = false;
        this.f13030j = null;
        this.f13034n = 0L;
        this.f13035o = 0L;
        this.f13036p = false;
    }
}
