package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.ShortBuffer;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p implements d {

    /* renamed from: b  reason: collision with root package name */
    private int f13021b;

    /* renamed from: c  reason: collision with root package name */
    private float f13022c = 1.0f;

    /* renamed from: d  reason: collision with root package name */
    private float f13023d = 1.0f;

    /* renamed from: e  reason: collision with root package name */
    private d.a f13024e;

    /* renamed from: f  reason: collision with root package name */
    private d.a f13025f;

    /* renamed from: g  reason: collision with root package name */
    private d.a f13026g;

    /* renamed from: h  reason: collision with root package name */
    private d.a f13027h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f13028i;

    /* renamed from: j  reason: collision with root package name */
    private o f13029j;

    /* renamed from: k  reason: collision with root package name */
    private ByteBuffer f13030k;

    /* renamed from: l  reason: collision with root package name */
    private ShortBuffer f13031l;

    /* renamed from: m  reason: collision with root package name */
    private ByteBuffer f13032m;

    /* renamed from: n  reason: collision with root package name */
    private long f13033n;

    /* renamed from: o  reason: collision with root package name */
    private long f13034o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f13035p;

    public p() {
        d.a aVar = d.a.f12836e;
        this.f13024e = aVar;
        this.f13025f = aVar;
        this.f13026g = aVar;
        this.f13027h = aVar;
        ByteBuffer byteBuffer = d.f12835a;
        this.f13030k = byteBuffer;
        this.f13031l = byteBuffer.asShortBuffer();
        this.f13032m = byteBuffer;
        this.f13021b = -1;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean a() {
        if (this.f13025f.f12837a != -1) {
            if (Math.abs(this.f13022c - 1.0f) >= 1.0E-4f || Math.abs(this.f13023d - 1.0f) >= 1.0E-4f || this.f13025f.f12837a != this.f13024e.f12837a) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final ByteBuffer b() {
        int k10;
        o oVar = this.f13029j;
        if (oVar != null && (k10 = oVar.k()) > 0) {
            if (this.f13030k.capacity() < k10) {
                ByteBuffer order = ByteBuffer.allocateDirect(k10).order(ByteOrder.nativeOrder());
                this.f13030k = order;
                this.f13031l = order.asShortBuffer();
            } else {
                this.f13030k.clear();
                this.f13031l.clear();
            }
            oVar.j(this.f13031l);
            this.f13034o += k10;
            this.f13030k.limit(k10);
            this.f13032m = this.f13030k;
        }
        ByteBuffer byteBuffer = this.f13032m;
        this.f13032m = d.f12835a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void c(ByteBuffer byteBuffer) {
        if (!byteBuffer.hasRemaining()) {
            return;
        }
        ShortBuffer asShortBuffer = byteBuffer.asShortBuffer();
        int remaining = byteBuffer.remaining();
        this.f13033n += remaining;
        ((o) oe.a.e(this.f13029j)).t(asShortBuffer);
        byteBuffer.position(byteBuffer.position() + remaining);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean d() {
        if (this.f13035p) {
            o oVar = this.f13029j;
            if (oVar == null || oVar.k() == 0) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        if (aVar.f12839c == 2) {
            int i10 = this.f13021b;
            if (i10 == -1) {
                i10 = aVar.f12837a;
            }
            this.f13024e = aVar;
            d.a aVar2 = new d.a(i10, aVar.f12838b, 2);
            this.f13025f = aVar2;
            this.f13028i = true;
            return aVar2;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        o oVar = this.f13029j;
        if (oVar != null) {
            oVar.s();
        }
        this.f13035p = true;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        if (a()) {
            d.a aVar = this.f13024e;
            this.f13026g = aVar;
            d.a aVar2 = this.f13025f;
            this.f13027h = aVar2;
            if (this.f13028i) {
                this.f13029j = new o(aVar.f12837a, aVar.f12838b, this.f13022c, this.f13023d, aVar2.f12837a);
            } else {
                o oVar = this.f13029j;
                if (oVar != null) {
                    oVar.i();
                }
            }
        }
        this.f13032m = d.f12835a;
        this.f13033n = 0L;
        this.f13034o = 0L;
        this.f13035p = false;
    }

    public final long g(long j10) {
        if (this.f13034o >= 1024) {
            long l10 = this.f13033n - ((o) oe.a.e(this.f13029j)).l();
            int i10 = this.f13027h.f12837a;
            int i11 = this.f13026g.f12837a;
            if (i10 == i11) {
                return w0.X0(j10, l10, this.f13034o);
            }
            return w0.X0(j10, l10 * i10, this.f13034o * i11);
        }
        return (long) (this.f13022c * j10);
    }

    public final void h(float f10) {
        if (this.f13023d != f10) {
            this.f13023d = f10;
            this.f13028i = true;
        }
    }

    public final void i(float f10) {
        if (this.f13022c != f10) {
            this.f13022c = f10;
            this.f13028i = true;
        }
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        this.f13022c = 1.0f;
        this.f13023d = 1.0f;
        d.a aVar = d.a.f12836e;
        this.f13024e = aVar;
        this.f13025f = aVar;
        this.f13026g = aVar;
        this.f13027h = aVar;
        ByteBuffer byteBuffer = d.f12835a;
        this.f13030k = byteBuffer;
        this.f13031l = byteBuffer.asShortBuffer();
        this.f13032m = byteBuffer;
        this.f13021b = -1;
        this.f13028i = false;
        this.f13029j = null;
        this.f13033n = 0L;
        this.f13034o = 0L;
        this.f13035p = false;
    }
}
