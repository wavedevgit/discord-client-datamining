package rt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum b0 implements pt.p {
    TIMEZONE_ID,
    TIMEZONE_OFFSET;

    @Override // pt.p
    public boolean B() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(pt.o oVar, pt.o oVar2) {
        return oVar.u().a().compareTo(oVar2.u().a());
    }

    @Override // pt.p
    public char d() {
        return (char) 0;
    }

    @Override // pt.p
    public Class getType() {
        return net.time4j.tz.k.class;
    }

    @Override // pt.p
    /* renamed from: h */
    public net.time4j.tz.k e() {
        return net.time4j.tz.p.r(net.time4j.tz.f.AHEAD_OF_UTC, 14);
    }

    @Override // pt.p
    /* renamed from: k */
    public net.time4j.tz.k A() {
        return net.time4j.tz.p.r(net.time4j.tz.f.BEHIND_UTC, 14);
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
