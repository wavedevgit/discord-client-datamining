package net.time4j.tz.model;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import net.time4j.b0;
import net.time4j.f0;
import net.time4j.y0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends g {
    private static final long serialVersionUID = -7354650946442523175L;

    /* renamed from: q  reason: collision with root package name */
    private final transient byte f40888q;

    /* renamed from: r  reason: collision with root package name */
    private final transient byte f40889r;

    /* renamed from: s  reason: collision with root package name */
    private final transient boolean f40890s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(b0 b0Var, int i10, y0 y0Var, int i11, i iVar, int i12, boolean z10) {
        super(b0Var, i11, iVar, i12);
        gt.b.a(2000, b0Var.d(), i10);
        this.f40888q = (byte) i10;
        this.f40889r = (byte) y0Var.d();
        this.f40890s = z10;
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, g());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (this.f40888q == cVar.f40888q && this.f40889r == cVar.f40889r && this.f40890s == cVar.f40890s && super.l(cVar)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // net.time4j.tz.model.d
    public int g() {
        return 121;
    }

    public int hashCode() {
        return this.f40888q + ((this.f40889r + (k() * 37)) * 17) + (this.f40890s ? 1 : 0);
    }

    @Override // net.time4j.tz.model.g
    protected f0 j(int i10) {
        int i11;
        byte k10 = k();
        int c10 = gt.b.c(i10, k10, this.f40888q);
        f0 H0 = f0.H0(i10, k10, this.f40888q);
        byte b10 = this.f40889r;
        if (c10 == b10) {
            return H0;
        }
        int i12 = c10 - b10;
        if (this.f40890s) {
            i12 = -i12;
            i11 = 1;
        } else {
            i11 = -1;
        }
        if (i12 < 0) {
            i12 += 7;
        }
        return (f0) H0.K(i12 * i11, net.time4j.f.f40571s);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int m() {
        return this.f40888q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public byte n() {
        return this.f40889r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean o() {
        return this.f40890s;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append("DayOfWeekInMonthPattern:[month=");
        sb2.append((int) k());
        sb2.append(",dayOfMonth=");
        sb2.append((int) this.f40888q);
        sb2.append(",dayOfWeek=");
        sb2.append(y0.h(this.f40889r));
        sb2.append(",day-overflow=");
        sb2.append(c());
        sb2.append(",time-of-day=");
        sb2.append(f());
        sb2.append(",offset-indicator=");
        sb2.append(d());
        sb2.append(",dst-offset=");
        sb2.append(e());
        sb2.append(",after=");
        sb2.append(this.f40890s);
        sb2.append(']');
        return sb2.toString();
    }
}
