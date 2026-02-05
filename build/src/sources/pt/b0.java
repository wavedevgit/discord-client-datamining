package pt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum b0 implements p {
    LEAP_SECOND,
    DAYLIGHT_SAVING;

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
        return Boolean.class;
    }

    @Override // pt.p
    /* renamed from: h */
    public Boolean e() {
        return Boolean.TRUE;
    }

    @Override // pt.p
    /* renamed from: k */
    public Boolean A() {
        return Boolean.FALSE;
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
