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
    private final transient int f40867e;

    /* renamed from: i  reason: collision with root package name */
    private final transient a f40868i;

    /* renamed from: o  reason: collision with root package name */
    private final transient j f40869o;

    /* renamed from: p  reason: collision with root package name */
    private final transient q f40870p;

    /* renamed from: q  reason: collision with root package name */
    private transient int f40871q = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, List list, List list2, boolean z10, boolean z11) {
        this.f40867e = i10;
        a aVar = new a(list, z10, z11);
        this.f40868i = aVar;
        q n10 = aVar.n();
        this.f40870p = n10;
        this.f40869o = new j(n10, list2, z10);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, 127);
    }

    @Override // net.time4j.tz.m
    public List a(gt.a aVar, gt.g gVar) {
        return this.f40868i.p(aVar, gVar, this.f40869o);
    }

    @Override // net.time4j.tz.m
    public boolean b() {
        if (!this.f40869o.b() && !this.f40868i.b()) {
            return false;
        }
        return true;
    }

    @Override // net.time4j.tz.m
    public p c() {
        return this.f40868i.c();
    }

    @Override // net.time4j.tz.m
    public q d(gt.f fVar) {
        if (fVar.r() < this.f40870p.g()) {
            return this.f40868i.d(fVar);
        }
        q d10 = this.f40869o.d(fVar);
        if (d10 == null) {
            return this.f40870p;
        }
        return d10;
    }

    @Override // net.time4j.tz.m
    public q e(gt.a aVar, gt.g gVar) {
        return this.f40868i.m(aVar, gVar, this.f40869o);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f40868i.l(bVar.f40868i, this.f40867e, bVar.f40867e) && this.f40869o.n().equals(bVar.f40869o.n())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f40871q;
        if (i10 == 0) {
            int q10 = this.f40868i.q(this.f40867e) + (this.f40869o.n().hashCode() * 37);
            this.f40871q = q10;
            return q10;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List k() {
        return this.f40869o.n();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(ObjectOutput objectOutput) {
        this.f40868i.t(this.f40867e, objectOutput);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append(b.class.getName());
        sb2.append("[transition-count=");
        sb2.append(this.f40867e);
        sb2.append(",hash=");
        sb2.append(hashCode());
        sb2.append(",last-rules=");
        sb2.append(this.f40869o.n());
        sb2.append(']');
        return sb2.toString();
    }
}
