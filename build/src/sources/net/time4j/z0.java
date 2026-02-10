package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class z0 extends a implements d0 {

    /* renamed from: o  reason: collision with root package name */
    static final z0 f38812o = new z0();
    private static final long serialVersionUID = -2378018589067147278L;

    private z0() {
        super("WEEKDAY_IN_MONTH");
    }

    private Object readResolve() {
        return f38812o;
    }

    @Override // st.p
    public boolean A() {
        return true;
    }

    @Override // st.p
    public boolean D() {
        return false;
    }

    @Override // st.e
    protected boolean E() {
        return true;
    }

    @Override // st.p
    /* renamed from: G */
    public Integer e() {
        return 5;
    }

    @Override // st.p
    /* renamed from: H */
    public Integer B() {
        return 1;
    }

    @Override // st.e, st.p
    public char d() {
        return 'F';
    }

    @Override // st.p
    public Class getType() {
        return Integer.class;
    }
}
