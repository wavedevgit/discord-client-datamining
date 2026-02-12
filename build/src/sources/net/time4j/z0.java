package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class z0 extends a implements d0 {

    /* renamed from: o  reason: collision with root package name */
    static final z0 f37817o = new z0();
    private static final long serialVersionUID = -2378018589067147278L;

    private z0() {
        super("WEEKDAY_IN_MONTH");
    }

    private Object readResolve() {
        return f37817o;
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
    /* renamed from: G */
    public Integer f() {
        return 5;
    }

    @Override // bu.p
    /* renamed from: H */
    public Integer B() {
        return 1;
    }

    @Override // bu.e, bu.p
    public char d() {
        return 'F';
    }

    @Override // bu.p
    public Class getType() {
        return Integer.class;
    }
}
