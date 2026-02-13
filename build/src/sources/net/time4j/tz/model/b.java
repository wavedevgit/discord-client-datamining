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
    private final transient int f38313e;

    /* renamed from: i  reason: collision with root package name */
    private final transient a f38314i;

    /* renamed from: o  reason: collision with root package name */
    private final transient j f38315o;

    /* renamed from: p  reason: collision with root package name */
    private final transient q f38316p;

    /* renamed from: q  reason: collision with root package name */
    private transient int f38317q = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, List list, List list2, boolean z10, boolean z11) {
        this.f38313e = i10;
        a aVar = new a(list, z10, z11);
        this.f38314i = aVar;
        q n10 = aVar.n();
        this.f38316p = n10;
        this.f38315o = new j(n10, list2, z10);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, 127);
    }

    @Override // net.time4j.tz.m
    public boolean a() {
        if (!this.f38315o.a() && !this.f38314i.a()) {
            return false;
        }
        return true;
    }

    @Override // net.time4j.tz.m
    public q b(zt.f fVar) {
        if (fVar.o() < this.f38316p.g()) {
            return this.f38314i.b(fVar);
        }
        q b10 = this.f38315o.b(fVar);
        if (b10 == null) {
            return this.f38316p;
        }
        return b10;
    }

    @Override // net.time4j.tz.m
    public p c() {
        return this.f38314i.c();
    }

    @Override // net.time4j.tz.m
    public q d(zt.a aVar, zt.g gVar) {
        return this.f38314i.m(aVar, gVar, this.f38315o);
    }

    @Override // net.time4j.tz.m
    public List e(zt.a aVar, zt.g gVar) {
        return this.f38314i.p(aVar, gVar, this.f38315o);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f38314i.l(bVar.f38314i, this.f38313e, bVar.f38313e) && this.f38315o.n().equals(bVar.f38315o.n())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f38317q;
        if (i10 == 0) {
            int q10 = this.f38314i.q(this.f38313e) + (this.f38315o.n().hashCode() * 37);
            this.f38317q = q10;
            return q10;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List k() {
        return this.f38315o.n();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(ObjectOutput objectOutput) {
        this.f38314i.t(this.f38313e, objectOutput);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append(b.class.getName());
        sb2.append("[transition-count=");
        sb2.append(this.f38313e);
        sb2.append(",hash=");
        sb2.append(hashCode());
        sb2.append(",last-rules=");
        sb2.append(this.f38315o.n());
        sb2.append(']');
        return sb2.toString();
    }
}
