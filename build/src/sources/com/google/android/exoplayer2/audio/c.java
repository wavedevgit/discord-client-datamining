package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final mi.s f12213a;

    /* renamed from: b  reason: collision with root package name */
    private final List f12214b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private ByteBuffer[] f12215c = new ByteBuffer[0];

    /* renamed from: d  reason: collision with root package name */
    private d.a f12216d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12217e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f12218f;

    public c(mi.s sVar) {
        this.f12213a = sVar;
        d.a aVar = d.a.f12220e;
        this.f12216d = aVar;
        this.f12217e = aVar;
        this.f12218f = false;
    }

    private int c() {
        return this.f12215c.length - 1;
    }

    private void g(ByteBuffer byteBuffer) {
        boolean z10;
        ByteBuffer byteBuffer2;
        boolean z11;
        for (boolean z12 = true; z12; z12 = z10) {
            z10 = false;
            for (int i10 = 0; i10 <= c(); i10++) {
                if (!this.f12215c[i10].hasRemaining()) {
                    d dVar = (d) this.f12214b.get(i10);
                    if (dVar.d()) {
                        if (!this.f12215c[i10].hasRemaining() && i10 < c()) {
                            ((d) this.f12214b.get(i10 + 1)).f();
                        }
                    } else {
                        if (i10 > 0) {
                            byteBuffer2 = this.f12215c[i10 - 1];
                        } else if (byteBuffer.hasRemaining()) {
                            byteBuffer2 = byteBuffer;
                        } else {
                            byteBuffer2 = d.f12219a;
                        }
                        dVar.c(byteBuffer2);
                        this.f12215c[i10] = dVar.b();
                        if (byteBuffer2.remaining() - byteBuffer2.remaining() <= 0 && !this.f12215c[i10].hasRemaining()) {
                            z11 = false;
                        } else {
                            z11 = true;
                        }
                        z10 |= z11;
                    }
                }
            }
        }
    }

    public d.a a(d.a aVar) {
        if (!aVar.equals(d.a.f12220e)) {
            for (int i10 = 0; i10 < this.f12213a.size(); i10++) {
                d dVar = (d) this.f12213a.get(i10);
                d.a e10 = dVar.e(aVar);
                if (dVar.a()) {
                    ne.a.g(!e10.equals(d.a.f12220e));
                    aVar = e10;
                }
            }
            this.f12217e = aVar;
            return aVar;
        }
        throw new d.b(aVar);
    }

    public void b() {
        this.f12214b.clear();
        this.f12216d = this.f12217e;
        this.f12218f = false;
        for (int i10 = 0; i10 < this.f12213a.size(); i10++) {
            d dVar = (d) this.f12213a.get(i10);
            dVar.flush();
            if (dVar.a()) {
                this.f12214b.add(dVar);
            }
        }
        this.f12215c = new ByteBuffer[this.f12214b.size()];
        for (int i11 = 0; i11 <= c(); i11++) {
            this.f12215c[i11] = ((d) this.f12214b.get(i11)).b();
        }
    }

    public ByteBuffer d() {
        if (!f()) {
            return d.f12219a;
        }
        ByteBuffer byteBuffer = this.f12215c[c()];
        if (!byteBuffer.hasRemaining()) {
            g(d.f12219a);
        }
        return byteBuffer;
    }

    public boolean e() {
        if (this.f12218f && ((d) this.f12214b.get(c())).d() && !this.f12215c[c()].hasRemaining()) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f12213a.size() != cVar.f12213a.size()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f12213a.size(); i10++) {
            if (this.f12213a.get(i10) != cVar.f12213a.get(i10)) {
                return false;
            }
        }
        return true;
    }

    public boolean f() {
        return !this.f12214b.isEmpty();
    }

    public void h() {
        if (f() && !this.f12218f) {
            this.f12218f = true;
            ((d) this.f12214b.get(0)).f();
        }
    }

    public int hashCode() {
        return this.f12213a.hashCode();
    }

    public void i(ByteBuffer byteBuffer) {
        if (f() && !this.f12218f) {
            g(byteBuffer);
        }
    }

    public void j() {
        for (int i10 = 0; i10 < this.f12213a.size(); i10++) {
            d dVar = (d) this.f12213a.get(i10);
            dVar.flush();
            dVar.reset();
        }
        this.f12215c = new ByteBuffer[0];
        d.a aVar = d.a.f12220e;
        this.f12216d = aVar;
        this.f12217e = aVar;
        this.f12218f = false;
    }
}
