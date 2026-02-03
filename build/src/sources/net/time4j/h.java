package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h extends mt.e implements e {

    /* renamed from: d  reason: collision with root package name */
    static final h f40540d = new h();
    private static final long serialVersionUID = -6519899440006935829L;

    private h() {
        super("CALENDAR_DATE");
    }

    private Object readResolve() {
        return f40540d;
    }

    @Override // mt.p
    public boolean C() {
        return false;
    }

    @Override // mt.e
    protected boolean E() {
        return true;
    }

    @Override // mt.p
    /* renamed from: F */
    public f0 f() {
        return f0.f40481p;
    }

    @Override // mt.p
    /* renamed from: G */
    public f0 A() {
        return f0.f40480o;
    }

    @Override // mt.p
    public Class getType() {
        return f0.class;
    }

    @Override // mt.p
    public boolean y() {
        return true;
    }
}
