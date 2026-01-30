package net.time4j.calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class m extends jt.e {

    /* renamed from: d  reason: collision with root package name */
    static final m f40480d = new m();
    private static final long serialVersionUID = -1117064522468823402L;

    private m() {
        super("RELATED_GREGORIAN_YEAR");
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
    public Integer e() {
        return 999999999;
    }

    @Override // jt.p
    /* renamed from: G */
    public Integer A() {
        return -999999999;
    }

    @Override // jt.e, jt.p
    public char d() {
        return 'r';
    }

    @Override // jt.p
    public Class getType() {
        return Integer.class;
    }

    protected Object readResolve() {
        return f40480d;
    }

    @Override // jt.p
    public boolean y() {
        return true;
    }
}
