package net.time4j.tz.model;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.ObjectOutput;
import java.util.List;
import net.time4j.tz.p;
import net.time4j.tz.q;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends l {
    private static final long serialVersionUID = 1749643877954103721L;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f39600e;

    /* renamed from: i  reason: collision with root package name */
    private final transient a f39601i;

    /* renamed from: o  reason: collision with root package name */
    private final transient j f39602o;

    /* renamed from: p  reason: collision with root package name */
    private final transient q f39603p;

    /* renamed from: q  reason: collision with root package name */
    private transient int f39604q = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, List list, List list2, boolean z10, boolean z11) {
        this.f39600e = i10;
        a aVar = new a(list, z10, z11);
        this.f39601i = aVar;
        q n10 = aVar.n();
        this.f39603p = n10;
        this.f39602o = new j(n10, list2, z10);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, 127);
    }

    @Override // net.time4j.tz.m
    public q a(pt.a aVar, pt.g gVar) {
        return this.f39601i.m(aVar, gVar, this.f39602o);
    }

    @Override // net.time4j.tz.m
    public q b(pt.f fVar) {
        if (fVar.m() < this.f39603p.g()) {
            return this.f39601i.b(fVar);
        }
        q b10 = this.f39602o.b(fVar);
        if (b10 == null) {
            return this.f39603p;
        }
        return b10;
    }

    @Override // net.time4j.tz.m
    public List c(pt.a aVar, pt.g gVar) {
        return this.f39601i.p(aVar, gVar, this.f39602o);
    }

    @Override // net.time4j.tz.m
    public boolean d() {
        if (!this.f39602o.d() && !this.f39601i.d()) {
            return false;
        }
        return true;
    }

    @Override // net.time4j.tz.m
    public p e() {
        return this.f39601i.e();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f39601i.l(bVar.f39601i, this.f39600e, bVar.f39600e) && this.f39602o.n().equals(bVar.f39602o.n())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f39604q;
        if (i10 == 0) {
            int q10 = this.f39601i.q(this.f39600e) + (this.f39602o.n().hashCode() * 37);
            this.f39604q = q10;
            return q10;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List k() {
        return this.f39602o.n();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(ObjectOutput objectOutput) {
        this.f39601i.t(this.f39600e, objectOutput);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append(b.class.getName());
        sb2.append("[transition-count=");
        sb2.append(this.f39600e);
        sb2.append(",hash=");
        sb2.append(hashCode());
        sb2.append(",last-rules=");
        sb2.append(this.f39602o.n());
        sb2.append(']');
        return sb2.toString();
    }
}
