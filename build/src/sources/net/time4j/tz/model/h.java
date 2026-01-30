package net.time4j.tz.model;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import net.time4j.b0;
import net.time4j.f0;
import net.time4j.y0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends g {
    private static final long serialVersionUID = -946839310332554772L;

    /* renamed from: q  reason: collision with root package name */
    private final transient byte f40897q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(b0 b0Var, y0 y0Var, int i10, i iVar, int i11) {
        super(b0Var, i10, iVar, i11);
        this.f40897q = (byte) y0Var.d();
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
        if (obj instanceof h) {
            h hVar = (h) obj;
            if (this.f40897q == hVar.f40897q && super.l(hVar)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // net.time4j.tz.model.d
    public int g() {
        return 122;
    }

    public int hashCode() {
        return (this.f40897q * 17) + (k() * 37);
    }

    @Override // net.time4j.tz.model.g
    protected f0 j(int i10) {
        byte k10 = k();
        int d10 = gt.b.d(i10, k10);
        int c10 = gt.b.c(i10, k10, d10) - this.f40897q;
        if (c10 < 0) {
            c10 += 7;
        }
        return f0.H0(i10, k10, d10 - c10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public byte m() {
        return this.f40897q;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append("LastDayOfWeekPattern:[month=");
        sb2.append((int) k());
        sb2.append(",day-of-week=");
        sb2.append(y0.h(this.f40897q));
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
