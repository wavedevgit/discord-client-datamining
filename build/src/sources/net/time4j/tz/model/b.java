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
    private final transient int f40245e;

    /* renamed from: i  reason: collision with root package name */
    private final transient a f40246i;

    /* renamed from: o  reason: collision with root package name */
    private final transient j f40247o;

    /* renamed from: p  reason: collision with root package name */
    private final transient q f40248p;

    /* renamed from: q  reason: collision with root package name */
    private transient int f40249q = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, List list, List list2, boolean z10, boolean z11) {
        this.f40245e = i10;
        a aVar = new a(list, z10, z11);
        this.f40246i = aVar;
        q n10 = aVar.n();
        this.f40248p = n10;
        this.f40247o = new j(n10, list2, z10);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, 127);
    }

    @Override // net.time4j.tz.m
    public boolean a() {
        if (!this.f40247o.a() && !this.f40246i.a()) {
            return false;
        }
        return true;
    }

    @Override // net.time4j.tz.m
    public q b(nt.f fVar) {
        if (fVar.q() < this.f40248p.g()) {
            return this.f40246i.b(fVar);
        }
        q b10 = this.f40247o.b(fVar);
        if (b10 == null) {
            return this.f40248p;
        }
        return b10;
    }

    @Override // net.time4j.tz.m
    public q c(nt.a aVar, nt.g gVar) {
        return this.f40246i.m(aVar, gVar, this.f40247o);
    }

    @Override // net.time4j.tz.m
    public p d() {
        return this.f40246i.d();
    }

    @Override // net.time4j.tz.m
    public List e(nt.a aVar, nt.g gVar) {
        return this.f40246i.p(aVar, gVar, this.f40247o);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f40246i.l(bVar.f40246i, this.f40245e, bVar.f40245e) && this.f40247o.n().equals(bVar.f40247o.n())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f40249q;
        if (i10 == 0) {
            int q10 = this.f40246i.q(this.f40245e) + (this.f40247o.n().hashCode() * 37);
            this.f40249q = q10;
            return q10;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List k() {
        return this.f40247o.n();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(ObjectOutput objectOutput) {
        this.f40246i.t(this.f40245e, objectOutput);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append(b.class.getName());
        sb2.append("[transition-count=");
        sb2.append(this.f40245e);
        sb2.append(",hash=");
        sb2.append(hashCode());
        sb2.append(",last-rules=");
        sb2.append(this.f40247o.n());
        sb2.append(']');
        return sb2.toString();
    }
}
