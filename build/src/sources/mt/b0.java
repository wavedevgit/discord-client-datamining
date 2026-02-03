package mt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum b0 implements kt.p {
    TIMEZONE_ID,
    TIMEZONE_OFFSET;

    @Override // kt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(kt.o oVar, kt.o oVar2) {
        return oVar.u().a().compareTo(oVar2.u().a());
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
    public net.time4j.tz.k e() {
        return net.time4j.tz.p.r(net.time4j.tz.f.AHEAD_OF_UTC, 14);
    }

    @Override // kt.p
    public Class getType() {
        return net.time4j.tz.k.class;
    }

    @Override // kt.p
    /* renamed from: h */
    public net.time4j.tz.k A() {
        return net.time4j.tz.p.r(net.time4j.tz.f.BEHIND_UTC, 14);
    }

    @Override // kt.p
    public boolean y() {
        return false;
    }
}
