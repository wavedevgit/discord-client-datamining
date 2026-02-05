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
    private final transient byte f40250q;

    /* renamed from: r  reason: collision with root package name */
    private final transient byte f40251r;

    /* renamed from: s  reason: collision with root package name */
    private final transient boolean f40252s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(b0 b0Var, int i10, y0 y0Var, int i11, i iVar, int i12, boolean z10) {
        super(b0Var, i11, iVar, i12);
        nt.b.a(2000, b0Var.d(), i10);
        this.f40250q = (byte) i10;
        this.f40251r = (byte) y0Var.d();
        this.f40252s = z10;
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
            if (this.f40250q == cVar.f40250q && this.f40251r == cVar.f40251r && this.f40252s == cVar.f40252s && super.l(cVar)) {
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
        return this.f40250q + ((this.f40251r + (k() * 37)) * 17) + (this.f40252s ? 1 : 0);
    }

    @Override // net.time4j.tz.model.g
    protected f0 j(int i10) {
        int i11;
        byte k10 = k();
        int c10 = nt.b.c(i10, k10, this.f40250q);
        f0 H0 = f0.H0(i10, k10, this.f40250q);
        byte b10 = this.f40251r;
        if (c10 == b10) {
            return H0;
        }
        int i12 = c10 - b10;
        if (this.f40252s) {
            i12 = -i12;
            i11 = 1;
        } else {
            i11 = -1;
        }
        if (i12 < 0) {
            i12 += 7;
        }
        return (f0) H0.K(i12 * i11, net.time4j.f.f39933s);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int m() {
        return this.f40250q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public byte n() {
        return this.f40251r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean o() {
        return this.f40252s;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append("DayOfWeekInMonthPattern:[month=");
        sb2.append((int) k());
        sb2.append(",dayOfMonth=");
        sb2.append((int) this.f40250q);
        sb2.append(",dayOfWeek=");
        sb2.append(y0.h(this.f40251r));
        sb2.append(",day-overflow=");
        sb2.append(c());
        sb2.append(",time-of-day=");
        sb2.append(f());
        sb2.append(",offset-indicator=");
        sb2.append(d());
        sb2.append(",dst-offset=");
        sb2.append(e());
        sb2.append(",after=");
        sb2.append(this.f40252s);
        sb2.append(']');
        return sb2.toString();
    }
}
