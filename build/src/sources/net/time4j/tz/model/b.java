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
    private final transient int f37744e;

    /* renamed from: i  reason: collision with root package name */
    private final transient a f37745i;

    /* renamed from: o  reason: collision with root package name */
    private final transient j f37746o;

    /* renamed from: p  reason: collision with root package name */
    private final transient q f37747p;

    /* renamed from: q  reason: collision with root package name */
    private transient int f37748q = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, List list, List list2, boolean z10, boolean z11) {
        this.f37744e = i10;
        a aVar = new a(list, z10, z11);
        this.f37745i = aVar;
        q n10 = aVar.n();
        this.f37747p = n10;
        this.f37746o = new j(n10, list2, z10);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, 127);
    }

    @Override // net.time4j.tz.m
    public boolean a() {
        if (!this.f37746o.a() && !this.f37745i.a()) {
            return false;
        }
        return true;
    }

    @Override // net.time4j.tz.m
    public q b(zt.f fVar) {
        if (fVar.o() < this.f37747p.g()) {
            return this.f37745i.b(fVar);
        }
        q b10 = this.f37746o.b(fVar);
        if (b10 == null) {
            return this.f37747p;
        }
        return b10;
    }

    @Override // net.time4j.tz.m
    public p c() {
        return this.f37745i.c();
    }

    @Override // net.time4j.tz.m
    public q d(zt.a aVar, zt.g gVar) {
        return this.f37745i.m(aVar, gVar, this.f37746o);
    }

    @Override // net.time4j.tz.m
    public List e(zt.a aVar, zt.g gVar) {
        return this.f37745i.p(aVar, gVar, this.f37746o);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f37745i.l(bVar.f37745i, this.f37744e, bVar.f37744e) && this.f37746o.n().equals(bVar.f37746o.n())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f37748q;
        if (i10 == 0) {
            int q10 = this.f37745i.q(this.f37744e) + (this.f37746o.n().hashCode() * 37);
            this.f37748q = q10;
            return q10;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List k() {
        return this.f37746o.n();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(ObjectOutput objectOutput) {
        this.f37745i.t(this.f37744e, objectOutput);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append(b.class.getName());
        sb2.append("[transition-count=");
        sb2.append(this.f37744e);
        sb2.append(",hash=");
        sb2.append(hashCode());
        sb2.append(",last-rules=");
        sb2.append(this.f37746o.n());
        sb2.append(']');
        return sb2.toString();
    }
}
