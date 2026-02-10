package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r0 extends st.e implements v0 {

    /* renamed from: d  reason: collision with root package name */
    static final r0 f38666d = new r0();
    private static final long serialVersionUID = -3712256393866098916L;

    private r0() {
        super("WALL_TIME");
    }

    private Object readResolve() {
        return f38666d;
    }

    @Override // st.p
    public boolean A() {
        return false;
    }

    @Override // st.p
    public boolean D() {
        return true;
    }

    @Override // st.e
    protected boolean E() {
        return true;
    }

    @Override // st.p
    /* renamed from: F */
    public g0 e() {
        return g0.J0(23, 59, 59, 999999999);
    }

    @Override // st.p
    /* renamed from: G */
    public g0 B() {
        return g0.f38477x;
    }

    @Override // st.p
    public Class getType() {
        return g0.class;
    }
}
