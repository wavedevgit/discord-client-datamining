package net.time4j.tz.model;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import net.time4j.b0;
import net.time4j.f0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends g {
    private static final long serialVersionUID = 3957240859230862745L;

    /* renamed from: q  reason: collision with root package name */
    private final transient byte f39660q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(b0 b0Var, int i10, int i11, i iVar, int i12) {
        super(b0Var, i11, iVar, i12);
        pt.b.a(2000, b0Var.d(), i10);
        this.f39660q = (byte) i10;
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
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f39660q == fVar.f39660q && super.l(fVar)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // net.time4j.tz.model.d
    public int g() {
        return 120;
    }

    public int hashCode() {
        return this.f39660q + (k() * 37);
    }

    @Override // net.time4j.tz.model.g
    protected f0 j(int i10) {
        return f0.H0(i10, k(), this.f39660q);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int m() {
        return this.f39660q;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append("FixedDayPattern:[month=");
        sb2.append((int) k());
        sb2.append(",day-of-month=");
        sb2.append((int) this.f39660q);
        sb2.append(",day-overflow=");
        sb2.append(c());
        sb2.append(",time-of-day=");
        sb2.append(f());
        sb2.append(",offset-indicator=");
        sb2.append(d());
        sb2.append(",dst-offset=");
        sb2.append(e());
        sb2.append(']');
        return sb2.toString();
    }
}
