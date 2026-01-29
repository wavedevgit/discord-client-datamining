package jt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum b0 implements p {
    LEAP_SECOND,
    DAYLIGHT_SAVING;

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
        return Boolean.class;
    }

    @Override // jt.p
    /* renamed from: h */
    public Boolean e() {
        return Boolean.TRUE;
    }

    @Override // jt.p
    public boolean i() {
        return false;
    }

    @Override // jt.p
    /* renamed from: j */
    public Boolean A() {
        return Boolean.FALSE;
    }

    @Override // jt.p
    public boolean y() {
        return false;
    }
}
