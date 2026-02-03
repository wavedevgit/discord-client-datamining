package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class z0 extends a implements d0 {

    /* renamed from: o  reason: collision with root package name */
    static final z0 f40857o = new z0();
    private static final long serialVersionUID = -2378018589067147278L;

    private z0() {
        super("WEEKDAY_IN_MONTH");
    }

    private Object readResolve() {
        return f40857o;
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
    /* renamed from: G */
    public Integer f() {
        return 5;
    }

    @Override // mt.p
    /* renamed from: H */
    public Integer A() {
        return 1;
    }

    @Override // mt.e, mt.p
    public char d() {
        return 'F';
    }

    @Override // mt.p
    public Class getType() {
        return Integer.class;
    }

    @Override // mt.p
    public boolean y() {
        return true;
    }
}
