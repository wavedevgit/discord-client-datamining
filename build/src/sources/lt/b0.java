package lt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum b0 implements jt.p {
    TIMEZONE_ID,
    TIMEZONE_OFFSET;

    @Override // jt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(jt.o oVar, jt.o oVar2) {
        return oVar.v().a().compareTo(oVar2.v().a());
    }

    @Override // jt.p
    public char d() {
        return (char) 0;
    }

    @Override // jt.p
    public Class getType() {
        return net.time4j.tz.k.class;
    }

    @Override // jt.p
    /* renamed from: h */
    public net.time4j.tz.k e() {
        return net.time4j.tz.p.r(net.time4j.tz.f.AHEAD_OF_UTC, 14);
    }

    @Override // jt.p
    public boolean i() {
        return false;
    }

    @Override // jt.p
    /* renamed from: j */
    public net.time4j.tz.k A() {
        return net.time4j.tz.p.r(net.time4j.tz.f.BEHIND_UTC, 14);
    }

    @Override // jt.p
    public boolean y() {
        return false;
    }
}
