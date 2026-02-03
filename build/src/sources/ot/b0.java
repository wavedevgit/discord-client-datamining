package ot;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum b0 implements mt.p {
    TIMEZONE_ID,
    TIMEZONE_OFFSET;

    @Override // mt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(mt.o oVar, mt.o oVar2) {
        return oVar.t().a().compareTo(oVar2.t().a());
    }

    @Override // mt.p
    public char d() {
        return (char) 0;
    }

    @Override // mt.p
    public Class getType() {
        return net.time4j.tz.k.class;
    }

    @Override // mt.p
    /* renamed from: h */
    public net.time4j.tz.k f() {
        return net.time4j.tz.p.r(net.time4j.tz.f.AHEAD_OF_UTC, 14);
    }

    @Override // mt.p
    public boolean k() {
        return false;
    }

    @Override // mt.p
    /* renamed from: l */
    public net.time4j.tz.k A() {
        return net.time4j.tz.p.r(net.time4j.tz.f.BEHIND_UTC, 14);
    }

    @Override // mt.p
    public boolean y() {
        return false;
    }
}
