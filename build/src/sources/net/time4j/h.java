package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h extends st.e implements e {

    /* renamed from: d  reason: collision with root package name */
    static final h f38495d = new h();
    private static final long serialVersionUID = -6519899440006935829L;

    private h() {
        super("CALENDAR_DATE");
    }

    private Object readResolve() {
        return f38495d;
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
    /* renamed from: F */
    public f0 e() {
        return f0.f38436p;
    }

    @Override // st.p
    /* renamed from: G */
    public f0 B() {
        return f0.f38435o;
    }

    @Override // st.p
    public Class getType() {
        return f0.class;
    }
}
