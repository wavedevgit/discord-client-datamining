package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.ShortBuffer;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p implements d {

    /* renamed from: b  reason: collision with root package name */
    private int f12444b;

    /* renamed from: c  reason: collision with root package name */
    private float f12445c = 1.0f;

    /* renamed from: d  reason: collision with root package name */
    private float f12446d = 1.0f;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12447e;

    /* renamed from: f  reason: collision with root package name */
    private d.a f12448f;

    /* renamed from: g  reason: collision with root package name */
    private d.a f12449g;

    /* renamed from: h  reason: collision with root package name */
    private d.a f12450h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f12451i;

    /* renamed from: j  reason: collision with root package name */
    private o f12452j;

    /* renamed from: k  reason: collision with root package name */
    private ByteBuffer f12453k;

    /* renamed from: l  reason: collision with root package name */
    private ShortBuffer f12454l;

    /* renamed from: m  reason: collision with root package name */
    private ByteBuffer f12455m;

    /* renamed from: n  reason: collision with root package name */
    private long f12456n;

    /* renamed from: o  reason: collision with root package name */
    private long f12457o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f12458p;

    public p() {
        d.a aVar = d.a.f12259e;
        this.f12447e = aVar;
        this.f12448f = aVar;
        this.f12449g = aVar;
        this.f12450h = aVar;
        ByteBuffer byteBuffer = d.f12258a;
        this.f12453k = byteBuffer;
        this.f12454l = byteBuffer.asShortBuffer();
        this.f12455m = byteBuffer;
        this.f12444b = -1;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean a() {
        if (this.f12448f.f12260a != -1) {
            if (Math.abs(this.f12445c - 1.0f) >= 1.0E-4f || Math.abs(this.f12446d - 1.0f) >= 1.0E-4f || this.f12448f.f12260a != this.f12447e.f12260a) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final ByteBuffer b() {
        int k10;
        o oVar = this.f12452j;
        if (oVar != null && (k10 = oVar.k()) > 0) {
            if (this.f12453k.capacity() < k10) {
                ByteBuffer order = ByteBuffer.allocateDirect(k10).order(ByteOrder.nativeOrder());
                this.f12453k = order;
                this.f12454l = order.asShortBuffer();
            } else {
                this.f12453k.clear();
                this.f12454l.clear();
            }
            oVar.j(this.f12454l);
            this.f12457o += k10;
            this.f12453k.limit(k10);
            this.f12455m = this.f12453k;
        }
        ByteBuffer byteBuffer = this.f12455m;
        this.f12455m = d.f12258a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void c(ByteBuffer byteBuffer) {
        if (!byteBuffer.hasRemaining()) {
            return;
        }
        ShortBuffer asShortBuffer = byteBuffer.asShortBuffer();
        int remaining = byteBuffer.remaining();
        this.f12456n += remaining;
        ((o) oe.a.e(this.f12452j)).t(asShortBuffer);
        byteBuffer.position(byteBuffer.position() + remaining);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean d() {
        if (this.f12458p) {
            o oVar = this.f12452j;
            if (oVar == null || oVar.k() == 0) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        if (aVar.f12262c == 2) {
            int i10 = this.f12444b;
            if (i10 == -1) {
                i10 = aVar.f12260a;
            }
            this.f12447e = aVar;
            d.a aVar2 = new d.a(i10, aVar.f12261b, 2);
            this.f12448f = aVar2;
            this.f12451i = true;
            return aVar2;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        o oVar = this.f12452j;
        if (oVar != null) {
            oVar.s();
        }
        this.f12458p = true;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        if (a()) {
            d.a aVar = this.f12447e;
            this.f12449g = aVar;
            d.a aVar2 = this.f12448f;
            this.f12450h = aVar2;
            if (this.f12451i) {
                this.f12452j = new o(aVar.f12260a, aVar.f12261b, this.f12445c, this.f12446d, aVar2.f12260a);
            } else {
                o oVar = this.f12452j;
                if (oVar != null) {
                    oVar.i();
                }
            }
        }
        this.f12455m = d.f12258a;
        this.f12456n = 0L;
        this.f12457o = 0L;
        this.f12458p = false;
    }

    public final long g(long j10) {
        if (this.f12457o >= 1024) {
            long l10 = this.f12456n - ((o) oe.a.e(this.f12452j)).l();
            int i10 = this.f12450h.f12260a;
            int i11 = this.f12449g.f12260a;
            if (i10 == i11) {
                return w0.X0(j10, l10, this.f12457o);
            }
            return w0.X0(j10, l10 * i10, this.f12457o * i11);
        }
        return (long) (this.f12445c * j10);
    }

    public final void h(float f10) {
        if (this.f12446d != f10) {
            this.f12446d = f10;
            this.f12451i = true;
        }
    }

    public final void i(float f10) {
        if (this.f12445c != f10) {
            this.f12445c = f10;
            this.f12451i = true;
        }
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        this.f12445c = 1.0f;
        this.f12446d = 1.0f;
        d.a aVar = d.a.f12259e;
        this.f12447e = aVar;
        this.f12448f = aVar;
        this.f12449g = aVar;
        this.f12450h = aVar;
        ByteBuffer byteBuffer = d.f12258a;
        this.f12453k = byteBuffer;
        this.f12454l = byteBuffer.asShortBuffer();
        this.f12455m = byteBuffer;
        this.f12444b = -1;
        this.f12451i = false;
        this.f12452j = null;
        this.f12456n = 0L;
        this.f12457o = 0L;
        this.f12458p = false;
    }
}
