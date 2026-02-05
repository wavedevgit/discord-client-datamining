package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.ShortBuffer;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p implements d {

    /* renamed from: b  reason: collision with root package name */
    private int f12405b;

    /* renamed from: c  reason: collision with root package name */
    private float f12406c = 1.0f;

    /* renamed from: d  reason: collision with root package name */
    private float f12407d = 1.0f;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12408e;

    /* renamed from: f  reason: collision with root package name */
    private d.a f12409f;

    /* renamed from: g  reason: collision with root package name */
    private d.a f12410g;

    /* renamed from: h  reason: collision with root package name */
    private d.a f12411h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f12412i;

    /* renamed from: j  reason: collision with root package name */
    private o f12413j;

    /* renamed from: k  reason: collision with root package name */
    private ByteBuffer f12414k;

    /* renamed from: l  reason: collision with root package name */
    private ShortBuffer f12415l;

    /* renamed from: m  reason: collision with root package name */
    private ByteBuffer f12416m;

    /* renamed from: n  reason: collision with root package name */
    private long f12417n;

    /* renamed from: o  reason: collision with root package name */
    private long f12418o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f12419p;

    public p() {
        d.a aVar = d.a.f12220e;
        this.f12408e = aVar;
        this.f12409f = aVar;
        this.f12410g = aVar;
        this.f12411h = aVar;
        ByteBuffer byteBuffer = d.f12219a;
        this.f12414k = byteBuffer;
        this.f12415l = byteBuffer.asShortBuffer();
        this.f12416m = byteBuffer;
        this.f12405b = -1;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean a() {
        if (this.f12409f.f12221a != -1) {
            if (Math.abs(this.f12406c - 1.0f) >= 1.0E-4f || Math.abs(this.f12407d - 1.0f) >= 1.0E-4f || this.f12409f.f12221a != this.f12408e.f12221a) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final ByteBuffer b() {
        int k10;
        o oVar = this.f12413j;
        if (oVar != null && (k10 = oVar.k()) > 0) {
            if (this.f12414k.capacity() < k10) {
                ByteBuffer order = ByteBuffer.allocateDirect(k10).order(ByteOrder.nativeOrder());
                this.f12414k = order;
                this.f12415l = order.asShortBuffer();
            } else {
                this.f12414k.clear();
                this.f12415l.clear();
            }
            oVar.j(this.f12415l);
            this.f12418o += k10;
            this.f12414k.limit(k10);
            this.f12416m = this.f12414k;
        }
        ByteBuffer byteBuffer = this.f12416m;
        this.f12416m = d.f12219a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void c(ByteBuffer byteBuffer) {
        if (!byteBuffer.hasRemaining()) {
            return;
        }
        ShortBuffer asShortBuffer = byteBuffer.asShortBuffer();
        int remaining = byteBuffer.remaining();
        this.f12417n += remaining;
        ((o) ne.a.e(this.f12413j)).t(asShortBuffer);
        byteBuffer.position(byteBuffer.position() + remaining);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean d() {
        if (this.f12419p) {
            o oVar = this.f12413j;
            if (oVar == null || oVar.k() == 0) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        if (aVar.f12223c == 2) {
            int i10 = this.f12405b;
            if (i10 == -1) {
                i10 = aVar.f12221a;
            }
            this.f12408e = aVar;
            d.a aVar2 = new d.a(i10, aVar.f12222b, 2);
            this.f12409f = aVar2;
            this.f12412i = true;
            return aVar2;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        o oVar = this.f12413j;
        if (oVar != null) {
            oVar.s();
        }
        this.f12419p = true;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        if (a()) {
            d.a aVar = this.f12408e;
            this.f12410g = aVar;
            d.a aVar2 = this.f12409f;
            this.f12411h = aVar2;
            if (this.f12412i) {
                this.f12413j = new o(aVar.f12221a, aVar.f12222b, this.f12406c, this.f12407d, aVar2.f12221a);
            } else {
                o oVar = this.f12413j;
                if (oVar != null) {
                    oVar.i();
                }
            }
        }
        this.f12416m = d.f12219a;
        this.f12417n = 0L;
        this.f12418o = 0L;
        this.f12419p = false;
    }

    public final long g(long j10) {
        if (this.f12418o >= 1024) {
            long l10 = this.f12417n - ((o) ne.a.e(this.f12413j)).l();
            int i10 = this.f12411h.f12221a;
            int i11 = this.f12410g.f12221a;
            if (i10 == i11) {
                return w0.X0(j10, l10, this.f12418o);
            }
            return w0.X0(j10, l10 * i10, this.f12418o * i11);
        }
        return (long) (this.f12406c * j10);
    }

    public final void h(float f10) {
        if (this.f12407d != f10) {
            this.f12407d = f10;
            this.f12412i = true;
        }
    }

    public final void i(float f10) {
        if (this.f12406c != f10) {
            this.f12406c = f10;
            this.f12412i = true;
        }
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        this.f12406c = 1.0f;
        this.f12407d = 1.0f;
        d.a aVar = d.a.f12220e;
        this.f12408e = aVar;
        this.f12409f = aVar;
        this.f12410g = aVar;
        this.f12411h = aVar;
        ByteBuffer byteBuffer = d.f12219a;
        this.f12414k = byteBuffer;
        this.f12415l = byteBuffer.asShortBuffer();
        this.f12416m = byteBuffer;
        this.f12405b = -1;
        this.f12412i = false;
        this.f12413j = null;
        this.f12417n = 0L;
        this.f12418o = 0L;
        this.f12419p = false;
    }
}
