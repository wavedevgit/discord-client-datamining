package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final qi.s f12830a;

    /* renamed from: b  reason: collision with root package name */
    private final List f12831b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private ByteBuffer[] f12832c = new ByteBuffer[0];

    /* renamed from: d  reason: collision with root package name */
    private d.a f12833d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12834e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f12835f;

    public c(qi.s sVar) {
        this.f12830a = sVar;
        d.a aVar = d.a.f12837e;
        this.f12833d = aVar;
        this.f12834e = aVar;
        this.f12835f = false;
    }

    private int c() {
        return this.f12832c.length - 1;
    }

    private void g(ByteBuffer byteBuffer) {
        boolean z10;
        ByteBuffer byteBuffer2;
        boolean z11;
        for (boolean z12 = true; z12; z12 = z10) {
            z10 = false;
            for (int i10 = 0; i10 <= c(); i10++) {
                if (!this.f12832c[i10].hasRemaining()) {
                    d dVar = (d) this.f12831b.get(i10);
                    if (dVar.d()) {
                        if (!this.f12832c[i10].hasRemaining() && i10 < c()) {
                            ((d) this.f12831b.get(i10 + 1)).f();
                        }
                    } else {
                        if (i10 > 0) {
                            byteBuffer2 = this.f12832c[i10 - 1];
                        } else if (byteBuffer.hasRemaining()) {
                            byteBuffer2 = byteBuffer;
                        } else {
                            byteBuffer2 = d.f12836a;
                        }
                        dVar.c(byteBuffer2);
                        this.f12832c[i10] = dVar.b();
                        if (byteBuffer2.remaining() - byteBuffer2.remaining() <= 0 && !this.f12832c[i10].hasRemaining()) {
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
        if (!aVar.equals(d.a.f12837e)) {
            for (int i10 = 0; i10 < this.f12830a.size(); i10++) {
                d dVar = (d) this.f12830a.get(i10);
                d.a e10 = dVar.e(aVar);
                if (dVar.a()) {
                    oe.a.g(!e10.equals(d.a.f12837e));
                    aVar = e10;
                }
            }
            this.f12834e = aVar;
            return aVar;
        }
        throw new d.b(aVar);
    }

    public void b() {
        this.f12831b.clear();
        this.f12833d = this.f12834e;
        this.f12835f = false;
        for (int i10 = 0; i10 < this.f12830a.size(); i10++) {
            d dVar = (d) this.f12830a.get(i10);
            dVar.flush();
            if (dVar.a()) {
                this.f12831b.add(dVar);
            }
        }
        this.f12832c = new ByteBuffer[this.f12831b.size()];
        for (int i11 = 0; i11 <= c(); i11++) {
            this.f12832c[i11] = ((d) this.f12831b.get(i11)).b();
        }
    }

    public ByteBuffer d() {
        if (!f()) {
            return d.f12836a;
        }
        ByteBuffer byteBuffer = this.f12832c[c()];
        if (!byteBuffer.hasRemaining()) {
            g(d.f12836a);
        }
        return byteBuffer;
    }

    public boolean e() {
        if (this.f12835f && ((d) this.f12831b.get(c())).d() && !this.f12832c[c()].hasRemaining()) {
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
        if (this.f12830a.size() != cVar.f12830a.size()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f12830a.size(); i10++) {
            if (this.f12830a.get(i10) != cVar.f12830a.get(i10)) {
                return false;
            }
        }
        return true;
    }

    public boolean f() {
        return !this.f12831b.isEmpty();
    }

    public void h() {
        if (f() && !this.f12835f) {
            this.f12835f = true;
            ((d) this.f12831b.get(0)).f();
        }
    }

    public int hashCode() {
        return this.f12830a.hashCode();
    }

    public void i(ByteBuffer byteBuffer) {
        if (f() && !this.f12835f) {
            g(byteBuffer);
        }
    }

    public void j() {
        for (int i10 = 0; i10 < this.f12830a.size(); i10++) {
            d dVar = (d) this.f12830a.get(i10);
            dVar.flush();
            dVar.reset();
        }
        this.f12832c = new ByteBuffer[0];
        d.a aVar = d.a.f12837e;
        this.f12833d = aVar;
        this.f12834e = aVar;
        this.f12835f = false;
    }
}
