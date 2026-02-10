package bu;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum b0 implements p {
    LEAP_SECOND,
    DAYLIGHT_SAVING;

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
        return Boolean.class;
    }

    @Override // bu.p
    /* renamed from: h */
    public Boolean f() {
        return Boolean.TRUE;
    }

    @Override // bu.p
    public boolean k() {
        return false;
    }

    @Override // bu.p
    /* renamed from: m */
    public Boolean B() {
        return Boolean.FALSE;
    }
}
