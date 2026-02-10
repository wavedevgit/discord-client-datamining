package st;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum b0 implements p {
    LEAP_SECOND,
    DAYLIGHT_SAVING;

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
    public Boolean e() {
        return Boolean.TRUE;
    }

    @Override // st.p
    public Class getType() {
        return Boolean.class;
    }

    @Override // st.p
    /* renamed from: h */
    public Boolean B() {
        return Boolean.FALSE;
    }
}
