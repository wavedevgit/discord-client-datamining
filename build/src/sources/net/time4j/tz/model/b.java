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
    private final transient int f40883e;

    /* renamed from: i  reason: collision with root package name */
    private final transient a f40884i;

    /* renamed from: o  reason: collision with root package name */
    private final transient j f40885o;

    /* renamed from: p  reason: collision with root package name */
    private final transient q f40886p;

    /* renamed from: q  reason: collision with root package name */
    private transient int f40887q = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, List list, List list2, boolean z10, boolean z11) {
        this.f40883e = i10;
        a aVar = new a(list, z10, z11);
        this.f40884i = aVar;
        q n10 = aVar.n();
        this.f40886p = n10;
        this.f40885o = new j(n10, list2, z10);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, 127);
    }

    @Override // net.time4j.tz.m
    public List a(gt.a aVar, gt.g gVar) {
        return this.f40884i.p(aVar, gVar, this.f40885o);
    }

    @Override // net.time4j.tz.m
    public boolean b() {
        if (!this.f40885o.b() && !this.f40884i.b()) {
            return false;
        }
        return true;
    }

    @Override // net.time4j.tz.m
    public p c() {
        return this.f40884i.c();
    }

    @Override // net.time4j.tz.m
    public q d(gt.f fVar) {
        if (fVar.r() < this.f40886p.g()) {
            return this.f40884i.d(fVar);
        }
        q d10 = this.f40885o.d(fVar);
        if (d10 == null) {
            return this.f40886p;
        }
        return d10;
    }

    @Override // net.time4j.tz.m
    public q e(gt.a aVar, gt.g gVar) {
        return this.f40884i.m(aVar, gVar, this.f40885o);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f40884i.l(bVar.f40884i, this.f40883e, bVar.f40883e) && this.f40885o.n().equals(bVar.f40885o.n())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f40887q;
        if (i10 == 0) {
            int q10 = this.f40884i.q(this.f40883e) + (this.f40885o.n().hashCode() * 37);
            this.f40887q = q10;
            return q10;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List k() {
        return this.f40885o.n();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(ObjectOutput objectOutput) {
        this.f40884i.t(this.f40883e, objectOutput);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append(b.class.getName());
        sb2.append("[transition-count=");
        sb2.append(this.f40883e);
        sb2.append(",hash=");
        sb2.append(hashCode());
        sb2.append(",last-rules=");
        sb2.append(this.f40885o.n());
        sb2.append(']');
        return sb2.toString();
    }
}
