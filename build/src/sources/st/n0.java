package st;

import kotlin.jvm.internal.CharCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum n0 implements p {
    ERROR_MESSAGE;

    @Override // st.p
    public boolean A() {
        return false;
    }

    @Override // st.p
    public boolean D() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(o oVar, o oVar2) {
        boolean s10 = oVar.s(this);
        if (s10 == oVar2.s(this)) {
            return 0;
        }
        if (s10) {
            return 1;
        }
        return -1;
    }

    @Override // st.p
    public char d() {
        return (char) 0;
    }

    @Override // st.p
    public boolean f() {
        return false;
    }

    @Override // st.p
    /* renamed from: g */
    public String e() {
        return String.valueOf((char) CharCompanionObject.MAX_VALUE);
    }

    @Override // st.p
    public Class getType() {
        return String.class;
    }

    @Override // st.p
    /* renamed from: h */
    public String B() {
        return "";
    }
}
