package net.time4j.calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class m extends mt.e {

    /* renamed from: d  reason: collision with root package name */
    static final m f40382d = new m();
    private static final long serialVersionUID = -1117064522468823402L;

    private m() {
        super("RELATED_GREGORIAN_YEAR");
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
    public Integer f() {
        return 999999999;
    }

    @Override // mt.p
    /* renamed from: G */
    public Integer A() {
        return -999999999;
    }

    @Override // mt.e, mt.p
    public char d() {
        return 'r';
    }

    @Override // mt.p
    public Class getType() {
        return Integer.class;
    }

    protected Object readResolve() {
        return f40382d;
    }

    @Override // mt.p
    public boolean y() {
        return true;
    }
}
