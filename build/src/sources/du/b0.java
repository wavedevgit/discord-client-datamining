package du;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum b0 implements bu.p {
    TIMEZONE_ID,
    TIMEZONE_OFFSET;

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
    public int compare(bu.o oVar, bu.o oVar2) {
        return oVar.r().a().compareTo(oVar2.r().a());
    }

    @Override // bu.p
    public char d() {
        return (char) 0;
    }

    @Override // bu.p
    public Class getType() {
        return net.time4j.tz.k.class;
    }

    @Override // bu.p
    /* renamed from: h */
    public net.time4j.tz.k f() {
        return net.time4j.tz.p.r(net.time4j.tz.f.AHEAD_OF_UTC, 14);
    }

    @Override // bu.p
    public boolean k() {
        return false;
    }

    @Override // bu.p
    /* renamed from: m */
    public net.time4j.tz.k B() {
        return net.time4j.tz.p.r(net.time4j.tz.f.BEHIND_UTC, 14);
    }
}
