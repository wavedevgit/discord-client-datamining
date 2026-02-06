package net.time4j;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x0 extends rt.f implements u, Serializable {

    /* renamed from: d  reason: collision with root package name */
    public static final x0 f39651d = new x0();
    private static final long serialVersionUID = -4981215347844372171L;

    private x0() {
    }

    private Object readResolve() {
        return f39651d;
    }

    @Override // rt.w
    public boolean a() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rt.f
    public rt.m0 b(rt.x xVar) {
        if (xVar.E(f0.f39305y)) {
            return b1.R();
        }
        return null;
    }

    @Override // net.time4j.w
    public char d() {
        return 'Y';
    }

    @Override // rt.w
    public double getLength() {
        return f.f39284o.getLength();
    }

    public String toString() {
        return "WEEK_BASED_YEARS";
    }
}
