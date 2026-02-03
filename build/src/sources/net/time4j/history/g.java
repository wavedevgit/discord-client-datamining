package net.time4j.history;

import java.io.DataInput;
import java.io.DataOutput;
import mt.a0;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: d  reason: collision with root package name */
    static final g f40581d = new g();

    /* renamed from: e  reason: collision with root package name */
    private static final h f40582e = h.i(j.AD, 1, 1, 1);

    /* renamed from: f  reason: collision with root package name */
    private static final h f40583f = h.i(j.BC, 38, 1, 1);

    /* renamed from: g  reason: collision with root package name */
    private static final f0 f40584g = f0.G0(2000, 1);

    /* renamed from: a  reason: collision with root package name */
    private final j f40585a;

    /* renamed from: b  reason: collision with root package name */
    private final f0 f40586b;

    /* renamed from: c  reason: collision with root package name */
    private final f0 f40587c;

    private g() {
        this.f40585a = null;
        this.f40586b = (f0) f0.r0().Q();
        this.f40587c = (f0) f0.r0().P();
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
            f0 f0Var = f40584g;
            a0 a0Var = a0.MODIFIED_JULIAN_DATE;
            return new g(valueOf, (f0) f0Var.D(a0Var, readLong), (f0) f0Var.D(a0Var, readLong2));
        }
        return f40581d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j d(h hVar, f0 f0Var) {
        if (this.f40585a != null && !f0Var.Q(this.f40586b) && !f0Var.P(this.f40587c)) {
            if (this.f40585a == j.HISPANIC && hVar.compareTo(f40583f) < 0) {
                return j.BC;
            }
            return this.f40585a;
        } else if (hVar.compareTo(f40582e) < 0) {
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
            g gVar2 = f40581d;
            if (this == gVar2) {
                if (gVar == gVar2) {
                    return true;
                }
                return false;
            } else if (this.f40585a == gVar.f40585a && this.f40586b.equals(gVar.f40586b) && this.f40587c.equals(gVar.f40587c)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(DataOutput dataOutput) {
        if (this == f40581d) {
            dataOutput.writeByte(0);
            return;
        }
        dataOutput.writeByte(127);
        dataOutput.writeUTF(this.f40585a.name());
        f0 f0Var = this.f40586b;
        a0 a0Var = a0.MODIFIED_JULIAN_DATE;
        dataOutput.writeLong(((Long) f0Var.o(a0Var)).longValue());
        dataOutput.writeLong(((Long) this.f40587c.o(a0Var)).longValue());
    }

    public int hashCode() {
        return (this.f40585a.hashCode() * 17) + (this.f40586b.hashCode() * 31) + (this.f40587c.hashCode() * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append('[');
        if (this == f40581d) {
            sb2.append("default");
        } else {
            sb2.append("era->");
            sb2.append(this.f40585a);
            sb2.append(",start->");
            sb2.append(this.f40586b);
            sb2.append(",end->");
            sb2.append(this.f40587c);
        }
        sb2.append(']');
        return sb2.toString();
    }

    private g(j jVar, f0 f0Var, f0 f0Var2) {
        if (jVar.compareTo(j.AD) > 0) {
            if (!f0Var2.Q(f0Var)) {
                this.f40585a = jVar;
                this.f40586b = f0Var;
                this.f40587c = f0Var2;
                return;
            }
            throw new IllegalArgumentException("End before start: " + f0Var + "/" + f0Var2);
        }
        throw new UnsupportedOperationException(jVar.name());
    }
}
