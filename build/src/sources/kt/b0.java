package kt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum b0 implements p {
    LEAP_SECOND,
    DAYLIGHT_SAVING;

    @Override // kt.p
    public boolean C() {
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

    @Override // kt.p
    public char d() {
        return (char) 0;
    }

    @Override // kt.p
    public boolean f() {
        return false;
    }

    @Override // kt.p
    /* renamed from: g */
    public Boolean e() {
        return Boolean.TRUE;
    }

    @Override // kt.p
    public Class getType() {
        return Boolean.class;
    }

    @Override // kt.p
    /* renamed from: h */
    public Boolean A() {
        return Boolean.FALSE;
    }

    @Override // kt.p
    public boolean y() {
        return false;
    }
}
