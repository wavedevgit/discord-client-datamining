package mt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum b0 implements p {
    LEAP_SECOND,
    DAYLIGHT_SAVING;

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
        return Boolean.class;
    }

    @Override // mt.p
    /* renamed from: h */
    public Boolean f() {
        return Boolean.TRUE;
    }

    @Override // mt.p
    public boolean k() {
        return false;
    }

    @Override // mt.p
    /* renamed from: l */
    public Boolean A() {
        return Boolean.FALSE;
    }

    @Override // mt.p
    public boolean y() {
        return false;
    }
}
