package net.time4j;

import java.io.Serializable;
import net.time4j.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class e0 extends jt.f implements u, Serializable {
    private static final long serialVersionUID = 1988843503875912054L;
    private final int policy;
    private final f unit;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f fVar, int i10) {
        this.unit = fVar;
        this.policy = i10;
    }

    @Override // jt.w
    public boolean a() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.f
    public jt.m0 b(jt.x xVar) {
        if (xVar.E(f0.f40588y)) {
            return new f.j(this.unit, this.policy);
        }
        return null;
    }

    @Override // net.time4j.w
    public char d() {
        return (char) 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof e0) {
            e0 e0Var = (e0) obj;
            if (this.unit == e0Var.unit && this.policy == e0Var.policy) {
                return true;
            }
        }
        return false;
    }

    @Override // jt.w
    public double getLength() {
        return this.unit.getLength();
    }

    public int hashCode() {
        return (this.unit.hashCode() * 23) + (this.policy * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.unit.d());
        sb2.append('-');
        switch (this.policy) {
            case 1:
                sb2.append("NEXT_VALID_DATE");
                break;
            case 2:
                sb2.append("END_OF_MONTH");
                break;
            case 3:
                sb2.append("CARRY_OVER");
                break;
            case 4:
                sb2.append("UNLESS_INVALID");
                break;
            case 5:
                sb2.append("KEEPING_LAST_DATE");
                break;
            case 6:
                sb2.append("JODA_METRIC");
                break;
            default:
                sb2.append("PREVIOUS_VALID_DATE");
                break;
        }
        return sb2.toString();
    }
}
