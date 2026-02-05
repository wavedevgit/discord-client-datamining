package net.time4j;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x0 extends pt.f implements u, Serializable {

    /* renamed from: d  reason: collision with root package name */
    public static final x0 f40296d = new x0();
    private static final long serialVersionUID = -4981215347844372171L;

    private x0() {
    }

    private Object readResolve() {
        return f40296d;
    }

    @Override // pt.w
    public boolean a() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // pt.f
    public pt.m0 b(pt.x xVar) {
        if (xVar.E(f0.f39950y)) {
            return b1.R();
        }
        return null;
    }

    @Override // net.time4j.w
    public char d() {
        return 'Y';
    }

    @Override // pt.w
    public double getLength() {
        return f.f39929o.getLength();
    }

    public String toString() {
        return "WEEK_BASED_YEARS";
    }
}
