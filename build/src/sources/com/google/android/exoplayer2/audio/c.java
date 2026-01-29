package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final ji.s f13231a;

    /* renamed from: b  reason: collision with root package name */
    private final List f13232b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private ByteBuffer[] f13233c = new ByteBuffer[0];

    /* renamed from: d  reason: collision with root package name */
    private d.a f13234d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f13235e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f13236f;

    public c(ji.s sVar) {
        this.f13231a = sVar;
        d.a aVar = d.a.f13238e;
        this.f13234d = aVar;
        this.f13235e = aVar;
        this.f13236f = false;
    }

    private int c() {
        return this.f13233c.length - 1;
    }

    private void g(ByteBuffer byteBuffer) {
        boolean z10;
        ByteBuffer byteBuffer2;
        boolean z11;
        for (boolean z12 = true; z12; z12 = z10) {
            z10 = false;
            for (int i10 = 0; i10 <= c(); i10++) {
                if (!this.f13233c[i10].hasRemaining()) {
                    d dVar = (d) this.f13232b.get(i10);
                    if (dVar.d()) {
                        if (!this.f13233c[i10].hasRemaining() && i10 < c()) {
                            ((d) this.f13232b.get(i10 + 1)).f();
                        }
                    } else {
                        if (i10 > 0) {
                            byteBuffer2 = this.f13233c[i10 - 1];
                        } else if (byteBuffer.hasRemaining()) {
                            byteBuffer2 = byteBuffer;
                        } else {
                            byteBuffer2 = d.f13237a;
                        }
                        dVar.c(byteBuffer2);
                        this.f13233c[i10] = dVar.b();
                        if (byteBuffer2.remaining() - byteBuffer2.remaining() <= 0 && !this.f13233c[i10].hasRemaining()) {
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
        if (!aVar.equals(d.a.f13238e)) {
            for (int i10 = 0; i10 < this.f13231a.size(); i10++) {
                d dVar = (d) this.f13231a.get(i10);
                d.a e10 = dVar.e(aVar);
                if (dVar.a()) {
                    ne.a.g(!e10.equals(d.a.f13238e));
                    aVar = e10;
                }
            }
            this.f13235e = aVar;
            return aVar;
        }
        throw new d.b(aVar);
    }

    public void b() {
        this.f13232b.clear();
        this.f13234d = this.f13235e;
        this.f13236f = false;
        for (int i10 = 0; i10 < this.f13231a.size(); i10++) {
            d dVar = (d) this.f13231a.get(i10);
            dVar.flush();
            if (dVar.a()) {
                this.f13232b.add(dVar);
            }
        }
        this.f13233c = new ByteBuffer[this.f13232b.size()];
        for (int i11 = 0; i11 <= c(); i11++) {
            this.f13233c[i11] = ((d) this.f13232b.get(i11)).b();
        }
    }

    public ByteBuffer d() {
        if (!f()) {
            return d.f13237a;
        }
        ByteBuffer byteBuffer = this.f13233c[c()];
        if (!byteBuffer.hasRemaining()) {
            g(d.f13237a);
        }
        return byteBuffer;
    }

    public boolean e() {
        if (this.f13236f && ((d) this.f13232b.get(c())).d() && !this.f13233c[c()].hasRemaining()) {
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
        if (this.f13231a.size() != cVar.f13231a.size()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f13231a.size(); i10++) {
            if (this.f13231a.get(i10) != cVar.f13231a.get(i10)) {
                return false;
            }
        }
        return true;
    }

    public boolean f() {
        return !this.f13232b.isEmpty();
    }

    public void h() {
        if (f() && !this.f13236f) {
            this.f13236f = true;
            ((d) this.f13232b.get(0)).f();
        }
    }

    public int hashCode() {
        return this.f13231a.hashCode();
    }

    public void i(ByteBuffer byteBuffer) {
        if (f() && !this.f13236f) {
            g(byteBuffer);
        }
    }

    public void j() {
        for (int i10 = 0; i10 < this.f13231a.size(); i10++) {
            d dVar = (d) this.f13231a.get(i10);
            dVar.flush();
            dVar.reset();
        }
        this.f13233c = new ByteBuffer[0];
        d.a aVar = d.a.f13238e;
        this.f13234d = aVar;
        this.f13235e = aVar;
        this.f13236f = false;
    }
}
