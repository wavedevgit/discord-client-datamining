package lt;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class t extends jt.q {
    @Override // jt.q
    public boolean B(jt.p pVar, Object obj) {
        if (pVar != null) {
            return true;
        }
        throw new NullPointerException("Missing chronological element.");
    }

    abstract Object G();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void H(jt.p pVar, int i10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void I(jt.p pVar, Object obj);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void J(Object obj);

    @Override // jt.q
    /* renamed from: K */
    public t C(jt.p pVar, int i10) {
        H(pVar, i10);
        return this;
    }

    @Override // jt.q
    /* renamed from: L */
    public t E(jt.p pVar, Object obj) {
        I(pVar, obj);
        return this;
    }

    /* JADX WARN: Removed duplicated region for block: B:13:0x0028  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final boolean equals(java.lang.Object r7) {
        /*
            r6 = this;
            r0 = 1
            if (r6 != r7) goto L4
            return r0
        L4:
            boolean r1 = r7 instanceof lt.t
            r2 = 0
            if (r1 == 0) goto L56
            lt.t r7 = (lt.t) r7
            java.util.Set r1 = r6.y()
            java.util.Set r3 = r7.y()
            int r4 = r1.size()
            int r5 = r3.size()
            if (r4 == r5) goto L1e
            return r2
        L1e:
            java.util.Iterator r1 = r1.iterator()
        L22:
            boolean r4 = r1.hasNext()
            if (r4 == 0) goto L43
            java.lang.Object r4 = r1.next()
            jt.p r4 = (jt.p) r4
            boolean r5 = r3.contains(r4)
            if (r5 == 0) goto L42
            java.lang.Object r5 = r6.p(r4)
            java.lang.Object r4 = r7.p(r4)
            boolean r4 = r5.equals(r4)
            if (r4 != 0) goto L22
        L42:
            return r2
        L43:
            java.lang.Object r1 = r6.G()
            java.lang.Object r7 = r7.G()
            if (r1 != 0) goto L51
            if (r7 != 0) goto L50
            return r0
        L50:
            return r2
        L51:
            boolean r7 = r1.equals(r7)
            return r7
        L56:
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: lt.t.equals(java.lang.Object):boolean");
    }

    public final int hashCode() {
        int hashCode = y().hashCode();
        Object G = G();
        if (G != null) {
            return hashCode + (G.hashCode() * 31);
        }
        return hashCode;
    }

    @Override // jt.q, jt.o
    public Object i(jt.p pVar) {
        return pVar.e();
    }

    @Override // jt.q, jt.o
    public final boolean l() {
        if (!o(b0.TIMEZONE_ID) && !o(b0.TIMEZONE_OFFSET)) {
            return false;
        }
        return true;
    }

    @Override // jt.q, jt.o
    public Object t(jt.p pVar) {
        return pVar.A();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append('{');
        boolean z10 = true;
        for (jt.p pVar : y()) {
            if (z10) {
                z10 = false;
            } else {
                sb2.append(", ");
            }
            sb2.append(pVar.name());
            sb2.append('=');
            sb2.append(p(pVar));
        }
        sb2.append('}');
        Object G = G();
        if (G != null) {
            sb2.append(">>>result=");
            sb2.append(G);
        }
        return sb2.toString();
    }

    @Override // jt.q, jt.o
    public final net.time4j.tz.k v() {
        Object obj;
        b0 b0Var = b0.TIMEZONE_ID;
        if (o(b0Var)) {
            obj = p(b0Var);
        } else {
            b0 b0Var2 = b0.TIMEZONE_OFFSET;
            if (o(b0Var2)) {
                obj = p(b0Var2);
            } else {
                obj = null;
            }
        }
        if (obj instanceof net.time4j.tz.k) {
            return (net.time4j.tz.k) net.time4j.tz.k.class.cast(obj);
        }
        return super.v();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.q
    public final jt.x w() {
        throw new UnsupportedOperationException("Parsed values do not have any chronology.");
    }
}
