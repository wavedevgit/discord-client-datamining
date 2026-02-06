package rt;

import kotlin.jvm.internal.CharCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum n0 implements p {
    ERROR_MESSAGE;

    @Override // rt.p
    public boolean A() {
        return false;
    }

    @Override // rt.p
    public boolean D() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(o oVar, o oVar2) {
        boolean n10 = oVar.n(this);
        if (n10 == oVar2.n(this)) {
            return 0;
        }
        if (n10) {
            return 1;
        }
        return -1;
    }

    @Override // rt.p
    public char d() {
        return (char) 0;
    }

    @Override // rt.p
    /* renamed from: g */
    public String e() {
        return String.valueOf((char) CharCompanionObject.MAX_VALUE);
    }

    @Override // rt.p
    public Class getType() {
        return String.class;
    }

    @Override // rt.p
    public boolean i() {
        return false;
    }

    @Override // rt.p
    /* renamed from: k */
    public String B() {
        return "";
    }
}
