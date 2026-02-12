package net.time4j.history;

import bu.a0;
import java.io.DataInput;
import java.io.DataOutput;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: d  reason: collision with root package name */
    static final g f37541d = new g();

    /* renamed from: e  reason: collision with root package name */
    private static final h f37542e = h.i(j.AD, 1, 1, 1);

    /* renamed from: f  reason: collision with root package name */
    private static final h f37543f = h.i(j.BC, 38, 1, 1);

    /* renamed from: g  reason: collision with root package name */
    private static final f0 f37544g = f0.G0(2000, 1);

    /* renamed from: a  reason: collision with root package name */
    private final j f37545a;

    /* renamed from: b  reason: collision with root package name */
    private final f0 f37546b;

    /* renamed from: c  reason: collision with root package name */
    private final f0 f37547c;

    private g() {
        this.f37545a = null;
        this.f37546b = (f0) f0.r0().Q();
        this.f37547c = (f0) f0.r0().P();
    }

    public static g a(f0 f0Var, f0 f0Var2) {
        return new g(j.AB_URBE_CONDITA, f0Var, f0Var2);
    }

    public static g b(f0 f0Var, f0 f0Var2) {
        return new g(j.BYZANTINE, f0Var, f0Var2);
    }

    public static g c(f0 f0Var) {
        return b((f0) f0.r0().Q(), f0Var);
    }

    public static g e(f0 f0Var, f0 f0Var2) {
        return new g(j.HISPANIC, f0Var, f0Var2);
    }

    public static g f(f0 f0Var) {
        return e((f0) f0.r0().Q(), f0Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g g(DataInput dataInput) {
        if (dataInput.readByte() == Byte.MAX_VALUE) {
            j valueOf = j.valueOf(dataInput.readUTF());
            long readLong = dataInput.readLong();
            long readLong2 = dataInput.readLong();
            f0 f0Var = f37544g;
            a0 a0Var = a0.MODIFIED_JULIAN_DATE;
            return new g(valueOf, (f0) f0Var.D(a0Var, readLong), (f0) f0Var.D(a0Var, readLong2));
        }
        return f37541d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j d(h hVar, f0 f0Var) {
        if (this.f37545a != null && !f0Var.Q(this.f37546b) && !f0Var.P(this.f37547c)) {
            if (this.f37545a == j.HISPANIC && hVar.compareTo(f37543f) < 0) {
                return j.BC;
            }
            return this.f37545a;
        } else if (hVar.compareTo(f37542e) < 0) {
            return j.BC;
        } else {
            return j.AD;
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            g gVar2 = f37541d;
            if (this == gVar2) {
                if (gVar == gVar2) {
                    return true;
                }
                return false;
            } else if (this.f37545a == gVar.f37545a && this.f37546b.equals(gVar.f37546b) && this.f37547c.equals(gVar.f37547c)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(DataOutput dataOutput) {
        if (this == f37541d) {
            dataOutput.writeByte(0);
            return;
        }
        dataOutput.writeByte(127);
        dataOutput.writeUTF(this.f37545a.name());
        f0 f0Var = this.f37546b;
        a0 a0Var = a0.MODIFIED_JULIAN_DATE;
        dataOutput.writeLong(((Long) f0Var.k(a0Var)).longValue());
        dataOutput.writeLong(((Long) this.f37547c.k(a0Var)).longValue());
    }

    public int hashCode() {
        return (this.f37545a.hashCode() * 17) + (this.f37546b.hashCode() * 31) + (this.f37547c.hashCode() * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append('[');
        if (this == f37541d) {
            sb2.append("default");
        } else {
            sb2.append("era->");
            sb2.append(this.f37545a);
            sb2.append(",start->");
            sb2.append(this.f37546b);
            sb2.append(",end->");
            sb2.append(this.f37547c);
        }
        sb2.append(']');
        return sb2.toString();
    }

    private g(j jVar, f0 f0Var, f0 f0Var2) {
        if (jVar.compareTo(j.AD) > 0) {
            if (!f0Var2.Q(f0Var)) {
                this.f37545a = jVar;
                this.f37546b = f0Var;
                this.f37547c = f0Var2;
                return;
            }
            throw new IllegalArgumentException("End before start: " + f0Var + "/" + f0Var2);
        }
        throw new UnsupportedOperationException(jVar.name());
    }
}
