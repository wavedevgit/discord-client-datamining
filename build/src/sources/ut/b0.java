package ut;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum b0 implements st.p {
    TIMEZONE_ID,
    TIMEZONE_OFFSET;

    @Override // st.p
    public boolean A() {
        return false;
    }

    @Override // st.p
    public boolean D() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(st.o oVar, st.o oVar2) {
        return oVar.u().a().compareTo(oVar2.u().a());
    }

    @Override // st.p
    public char d() {
        return (char) 0;
    }

    @Override // st.p
    public boolean f() {
        return false;
    }

    @Override // st.p
    /* renamed from: g */
    public net.time4j.tz.k e() {
        return net.time4j.tz.p.r(net.time4j.tz.f.AHEAD_OF_UTC, 14);
    }

    @Override // st.p
    public Class getType() {
        return net.time4j.tz.k.class;
    }

    @Override // st.p
    /* renamed from: h */
    public net.time4j.tz.k B() {
        return net.time4j.tz.p.r(net.time4j.tz.f.BEHIND_UTC, 14);
    }
}
