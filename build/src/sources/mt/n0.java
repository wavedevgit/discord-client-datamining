package mt;

import kotlin.jvm.internal.CharCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum n0 implements p {
    ERROR_MESSAGE;

    @Override // mt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(o oVar, o oVar2) {
        boolean q10 = oVar.q(this);
        if (q10 == oVar2.q(this)) {
            return 0;
        }
        if (q10) {
            return 1;
        }
        return -1;
    }

    @Override // mt.p
    public char d() {
        return (char) 0;
    }

    @Override // mt.p
    public Class getType() {
        return String.class;
    }

    @Override // mt.p
    /* renamed from: h */
    public String f() {
        return String.valueOf((char) CharCompanionObject.MAX_VALUE);
    }

    @Override // mt.p
    public boolean k() {
        return false;
    }

    @Override // mt.p
    /* renamed from: l */
    public String A() {
        return "";
    }

    @Override // mt.p
    public boolean y() {
        return false;
    }
}
