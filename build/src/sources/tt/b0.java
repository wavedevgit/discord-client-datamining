package tt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum b0 implements rt.p {
    TIMEZONE_ID,
    TIMEZONE_OFFSET;

    @Override // rt.p
    public boolean A() {
        return false;
    }

    @Override // rt.p
    public boolean D() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(rt.o oVar, rt.o oVar2) {
        return oVar.u().a().compareTo(oVar2.u().a());
    }

    @Override // rt.p
    public char d() {
        return (char) 0;
    }

    @Override // rt.p
    /* renamed from: g */
    public net.time4j.tz.k e() {
        return net.time4j.tz.p.r(net.time4j.tz.f.AHEAD_OF_UTC, 14);
    }

    @Override // rt.p
    public Class getType() {
        return net.time4j.tz.k.class;
    }

    @Override // rt.p
    public boolean i() {
        return false;
    }

    @Override // rt.p
    /* renamed from: k */
    public net.time4j.tz.k B() {
        return net.time4j.tz.p.r(net.time4j.tz.f.BEHIND_UTC, 14);
    }
}
