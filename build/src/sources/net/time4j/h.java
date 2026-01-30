package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h extends jt.e implements e {

    /* renamed from: d  reason: collision with root package name */
    static final h f40638d = new h();
    private static final long serialVersionUID = -6519899440006935829L;

    private h() {
        super("CALENDAR_DATE");
    }

    private Object readResolve() {
        return f40638d;
    }

    @Override // jt.p
    public boolean C() {
        return false;
    }

    @Override // jt.e
    protected boolean E() {
        return true;
    }

    @Override // jt.p
    /* renamed from: F */
    public f0 e() {
        return f0.f40579p;
    }

    @Override // jt.p
    /* renamed from: G */
    public f0 A() {
        return f0.f40578o;
    }

    @Override // jt.p
    public Class getType() {
        return f0.class;
    }

    @Override // jt.p
    public boolean y() {
        return true;
    }
}
