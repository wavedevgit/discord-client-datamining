package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.ShortBuffer;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p implements d {

    /* renamed from: b  reason: collision with root package name */
    private int f13052b;

    /* renamed from: c  reason: collision with root package name */
    private float f13053c = 1.0f;

    /* renamed from: d  reason: collision with root package name */
    private float f13054d = 1.0f;

    /* renamed from: e  reason: collision with root package name */
    private d.a f13055e;

    /* renamed from: f  reason: collision with root package name */
    private d.a f13056f;

    /* renamed from: g  reason: collision with root package name */
    private d.a f13057g;

    /* renamed from: h  reason: collision with root package name */
    private d.a f13058h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f13059i;

    /* renamed from: j  reason: collision with root package name */
    private o f13060j;

    /* renamed from: k  reason: collision with root package name */
    private ByteBuffer f13061k;

    /* renamed from: l  reason: collision with root package name */
    private ShortBuffer f13062l;

    /* renamed from: m  reason: collision with root package name */
    private ByteBuffer f13063m;

    /* renamed from: n  reason: collision with root package name */
    private long f13064n;

    /* renamed from: o  reason: collision with root package name */
    private long f13065o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f13066p;

    public p() {
        d.a aVar = d.a.f12867e;
        this.f13055e = aVar;
        this.f13056f = aVar;
        this.f13057g = aVar;
        this.f13058h = aVar;
        ByteBuffer byteBuffer = d.f12866a;
        this.f13061k = byteBuffer;
        this.f13062l = byteBuffer.asShortBuffer();
        this.f13063m = byteBuffer;
        this.f13052b = -1;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean a() {
        if (this.f13056f.f12868a != -1) {
            if (Math.abs(this.f13053c - 1.0f) >= 1.0E-4f || Math.abs(this.f13054d - 1.0f) >= 1.0E-4f || this.f13056f.f12868a != this.f13055e.f12868a) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final ByteBuffer b() {
        int k10;
        o oVar = this.f13060j;
        if (oVar != null && (k10 = oVar.k()) > 0) {
            if (this.f13061k.capacity() < k10) {
                ByteBuffer order = ByteBuffer.allocateDirect(k10).order(ByteOrder.nativeOrder());
                this.f13061k = order;
                this.f13062l = order.asShortBuffer();
            } else {
                this.f13061k.clear();
                this.f13062l.clear();
            }
            oVar.j(this.f13062l);
            this.f13065o += k10;
            this.f13061k.limit(k10);
            this.f13063m = this.f13061k;
        }
        ByteBuffer byteBuffer = this.f13063m;
        this.f13063m = d.f12866a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void c(ByteBuffer byteBuffer) {
        if (!byteBuffer.hasRemaining()) {
            return;
        }
        ShortBuffer asShortBuffer = byteBuffer.asShortBuffer();
        int remaining = byteBuffer.remaining();
        this.f13064n += remaining;
        ((o) ne.a.e(this.f13060j)).t(asShortBuffer);
        byteBuffer.position(byteBuffer.position() + remaining);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final boolean d() {
        if (this.f13066p) {
            o oVar = this.f13060j;
            if (oVar == null || oVar.k() == 0) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        if (aVar.f12870c == 2) {
            int i10 = this.f13052b;
            if (i10 == -1) {
                i10 = aVar.f12868a;
            }
            this.f13055e = aVar;
            d.a aVar2 = new d.a(i10, aVar.f12869b, 2);
            this.f13056f = aVar2;
            this.f13059i = true;
            return aVar2;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        o oVar = this.f13060j;
        if (oVar != null) {
            oVar.s();
        }
        this.f13066p = true;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        if (a()) {
            d.a aVar = this.f13055e;
            this.f13057g = aVar;
            d.a aVar2 = this.f13056f;
            this.f13058h = aVar2;
            if (this.f13059i) {
                this.f13060j = new o(aVar.f12868a, aVar.f12869b, this.f13053c, this.f13054d, aVar2.f12868a);
            } else {
                o oVar = this.f13060j;
                if (oVar != null) {
                    oVar.i();
                }
            }
        }
        this.f13063m = d.f12866a;
        this.f13064n = 0L;
        this.f13065o = 0L;
        this.f13066p = false;
    }

    public final long g(long j10) {
        if (this.f13065o >= 1024) {
            long l10 = this.f13064n - ((o) ne.a.e(this.f13060j)).l();
            int i10 = this.f13058h.f12868a;
            int i11 = this.f13057g.f12868a;
            if (i10 == i11) {
                return w0.X0(j10, l10, this.f13065o);
            }
            return w0.X0(j10, l10 * i10, this.f13065o * i11);
        }
        return (long) (this.f13053c * j10);
    }

    public final void h(float f10) {
        if (this.f13054d != f10) {
            this.f13054d = f10;
            this.f13059i = true;
        }
    }

    public final void i(float f10) {
        if (this.f13053c != f10) {
            this.f13053c = f10;
            this.f13059i = true;
        }
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        this.f13053c = 1.0f;
        this.f13054d = 1.0f;
        d.a aVar = d.a.f12867e;
        this.f13055e = aVar;
        this.f13056f = aVar;
        this.f13057g = aVar;
        this.f13058h = aVar;
        ByteBuffer byteBuffer = d.f12866a;
        this.f13061k = byteBuffer;
        this.f13062l = byteBuffer.asShortBuffer();
        this.f13063m = byteBuffer;
        this.f13052b = -1;
        this.f13059i = false;
        this.f13060j = null;
        this.f13064n = 0L;
        this.f13065o = 0L;
        this.f13066p = false;
    }
}
