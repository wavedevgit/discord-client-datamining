package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h extends rt.e implements e {

    /* renamed from: d  reason: collision with root package name */
    static final h f39355d = new h();
    private static final long serialVersionUID = -6519899440006935829L;

    private h() {
        super("CALENDAR_DATE");
    }

    private Object readResolve() {
        return f39355d;
    }

    @Override // rt.p
    public boolean A() {
        return true;
    }

    @Override // rt.p
    public boolean D() {
        return false;
    }

    @Override // rt.e
    protected boolean E() {
        return true;
    }

    @Override // rt.p
    /* renamed from: F */
    public f0 e() {
        return f0.f39296p;
    }

    @Override // rt.p
    /* renamed from: G */
    public f0 B() {
        return f0.f39295o;
    }

    @Override // rt.p
    public Class getType() {
        return f0.class;
    }
}
