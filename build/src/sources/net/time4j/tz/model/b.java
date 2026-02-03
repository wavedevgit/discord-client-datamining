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
    private final transient int f40785e;

    /* renamed from: i  reason: collision with root package name */
    private final transient a f40786i;

    /* renamed from: o  reason: collision with root package name */
    private final transient j f40787o;

    /* renamed from: p  reason: collision with root package name */
    private final transient q f40788p;

    /* renamed from: q  reason: collision with root package name */
    private transient int f40789q = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, List list, List list2, boolean z10, boolean z11) {
        this.f40785e = i10;
        a aVar = new a(list, z10, z11);
        this.f40786i = aVar;
        q n10 = aVar.n();
        this.f40788p = n10;
        this.f40787o = new j(n10, list2, z10);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, 127);
    }

    @Override // net.time4j.tz.m
    public q a(kt.f fVar) {
        if (fVar.p() < this.f40788p.g()) {
            return this.f40786i.a(fVar);
        }
        q a10 = this.f40787o.a(fVar);
        if (a10 == null) {
            return this.f40788p;
        }
        return a10;
    }

    @Override // net.time4j.tz.m
    public List b(kt.a aVar, kt.g gVar) {
        return this.f40786i.p(aVar, gVar, this.f40787o);
    }

    @Override // net.time4j.tz.m
    public boolean c() {
        if (!this.f40787o.c() && !this.f40786i.c()) {
            return false;
        }
        return true;
    }

    @Override // net.time4j.tz.m
    public q d(kt.a aVar, kt.g gVar) {
        return this.f40786i.m(aVar, gVar, this.f40787o);
    }

    @Override // net.time4j.tz.m
    public p e() {
        return this.f40786i.e();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f40786i.l(bVar.f40786i, this.f40785e, bVar.f40785e) && this.f40787o.n().equals(bVar.f40787o.n())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f40789q;
        if (i10 == 0) {
            int q10 = this.f40786i.q(this.f40785e) + (this.f40787o.n().hashCode() * 37);
            this.f40789q = q10;
            return q10;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List k() {
        return this.f40787o.n();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(ObjectOutput objectOutput) {
        this.f40786i.t(this.f40785e, objectOutput);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append(b.class.getName());
        sb2.append("[transition-count=");
        sb2.append(this.f40785e);
        sb2.append(",hash=");
        sb2.append(hashCode());
        sb2.append(",last-rules=");
        sb2.append(this.f40787o.n());
        sb2.append(']');
        return sb2.toString();
    }
}
