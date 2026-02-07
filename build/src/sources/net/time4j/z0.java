package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class z0 extends a implements d0 {

    /* renamed from: o  reason: collision with root package name */
    static final z0 f39720o = new z0();
    private static final long serialVersionUID = -2378018589067147278L;

    private z0() {
        super("WEEKDAY_IN_MONTH");
    }

    private Object readResolve() {
        return f39720o;
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
    /* renamed from: G */
    public Integer e() {
        return 5;
    }

    @Override // rt.p
    /* renamed from: H */
    public Integer B() {
        return 1;
    }

    @Override // rt.e, rt.p
    public char d() {
        return 'F';
    }

    @Override // rt.p
    public Class getType() {
        return Integer.class;
    }
}
