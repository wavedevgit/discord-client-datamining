package jt;

import kotlin.jvm.internal.CharCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum n0 implements p {
    ERROR_MESSAGE;

    @Override // jt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(o oVar, o oVar2) {
        boolean o10 = oVar.o(this);
        if (o10 == oVar2.o(this)) {
            return 0;
        }
        if (o10) {
            return 1;
        }
        return -1;
    }

    @Override // jt.p
    public char d() {
        return (char) 0;
    }

    @Override // jt.p
    public Class getType() {
        return String.class;
    }

    @Override // jt.p
    /* renamed from: h */
    public String e() {
        return String.valueOf((char) CharCompanionObject.MAX_VALUE);
    }

    @Override // jt.p
    public boolean i() {
        return false;
    }

    @Override // jt.p
    /* renamed from: j */
    public String A() {
        return "";
    }

    @Override // jt.p
    public boolean y() {
        return false;
    }
}
