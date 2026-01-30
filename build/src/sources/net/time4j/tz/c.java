package net.time4j.tz;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends l {
    private static final long serialVersionUID = 1738909257417361021L;
    private final transient k G;
    private final transient m H;
    private final transient o I;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(k kVar, m mVar) {
        this(kVar, mVar, l.f40862o);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, 14);
    }

    @Override // net.time4j.tz.l
    public p A(gt.a aVar, gt.g gVar) {
        List a10 = this.H.a(aVar, gVar);
        if (a10.size() == 1) {
            return (p) a10.get(0);
        }
        return p.t(this.H.e(aVar, gVar).k());
    }

    @Override // net.time4j.tz.l
    public p B(gt.f fVar) {
        q d10 = this.H.d(fVar);
        if (d10 == null) {
            return this.H.c();
        }
        return p.t(d10.k());
    }

    @Override // net.time4j.tz.l
    public o E() {
        return this.I;
    }

    @Override // net.time4j.tz.l
    public boolean I(gt.f fVar) {
        gt.f b10;
        q d10;
        q d11 = this.H.d(fVar);
        if (d11 == null) {
            return false;
        }
        int f10 = d11.f();
        if (f10 > 0) {
            return true;
        }
        if (f10 < 0 || !this.H.b() || (d10 = this.H.d((b10 = i.b(d11.g(), 0)))) == null) {
            return false;
        }
        if (d10.j() == d11.j()) {
            if (d10.f() >= 0) {
                return false;
            }
            return true;
        }
        return I(b10);
    }

    @Override // net.time4j.tz.l
    public boolean J() {
        return this.H.isEmpty();
    }

    @Override // net.time4j.tz.l
    public boolean K(gt.a aVar, gt.g gVar) {
        q e10 = this.H.e(aVar, gVar);
        if (e10 != null && e10.l()) {
            return true;
        }
        return false;
    }

    @Override // net.time4j.tz.l
    public l Q(o oVar) {
        if (this.I == oVar) {
            return this;
        }
        return new c(this.G, this.H, oVar);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (this.G.a().equals(cVar.G.a()) && this.H.equals(cVar.H) && this.I.equals(cVar.I)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.G.a().hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append('[');
        sb2.append(c.class.getName());
        sb2.append(':');
        sb2.append(this.G.a());
        sb2.append(",history={");
        sb2.append(this.H);
        sb2.append("},strategy=");
        sb2.append(this.I);
        sb2.append(']');
        return sb2.toString();
    }

    @Override // net.time4j.tz.l
    public m y() {
        return this.H;
    }

    @Override // net.time4j.tz.l
    public k z() {
        return this.G;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(k kVar, m mVar, o oVar) {
        if (kVar != null) {
            if ((kVar instanceof p) && !mVar.isEmpty()) {
                throw new IllegalArgumentException("Fixed zonal offset can't be combined with offset transitions: " + kVar.a());
            } else if (mVar == null) {
                throw new NullPointerException("Missing timezone history.");
            } else {
                if (oVar != null) {
                    this.G = kVar;
                    this.H = mVar;
                    this.I = oVar;
                    return;
                }
                throw new NullPointerException("Missing transition strategy.");
            }
        }
        throw new NullPointerException("Missing timezone id.");
    }
}
