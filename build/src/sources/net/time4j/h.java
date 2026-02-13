package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h extends bu.e implements e {

    /* renamed from: d  reason: collision with root package name */
    static final h f38068d = new h();
    private static final long serialVersionUID = -6519899440006935829L;

    private h() {
        super("CALENDAR_DATE");
    }

    private Object readResolve() {
        return f38068d;
    }

    @Override // bu.p
    public boolean A() {
        return true;
    }

    @Override // bu.p
    public boolean C() {
        return false;
    }

    @Override // bu.e
    protected boolean E() {
        return true;
    }

    @Override // bu.p
    /* renamed from: F */
    public f0 f() {
        return f0.f38009p;
    }

    @Override // bu.p
    /* renamed from: G */
    public f0 B() {
        return f0.f38008o;
    }

    @Override // bu.p
    public Class getType() {
        return f0.class;
    }
}
