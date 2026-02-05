package pt;

import kotlin.jvm.internal.CharCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum n0 implements p {
    ERROR_MESSAGE;

    @Override // pt.p
    public boolean B() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(o oVar, o oVar2) {
        boolean m10 = oVar.m(this);
        if (m10 == oVar2.m(this)) {
            return 0;
        }
        if (m10) {
            return 1;
        }
        return -1;
    }

    @Override // pt.p
    public char d() {
        return (char) 0;
    }

    @Override // pt.p
    public Class getType() {
        return String.class;
    }

    @Override // pt.p
    /* renamed from: h */
    public String e() {
        return String.valueOf((char) CharCompanionObject.MAX_VALUE);
    }

    @Override // pt.p
    /* renamed from: k */
    public String A() {
        return "";
    }

    @Override // pt.p
    public boolean l() {
        return false;
    }

    @Override // pt.p
    public boolean z() {
        return false;
    }
}
