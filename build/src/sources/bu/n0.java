package bu;

import kotlin.jvm.internal.CharCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum n0 implements p {
    ERROR_MESSAGE;

    @Override // bu.p
    public boolean A() {
        return false;
    }

    @Override // bu.p
    public boolean C() {
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

    @Override // bu.p
    public char d() {
        return (char) 0;
    }

    @Override // bu.p
    public Class getType() {
        return String.class;
    }

    @Override // bu.p
    /* renamed from: h */
    public String f() {
        return String.valueOf((char) CharCompanionObject.MAX_VALUE);
    }

    @Override // bu.p
    public boolean k() {
        return false;
    }

    @Override // bu.p
    /* renamed from: m */
    public String B() {
        return "";
    }
}
