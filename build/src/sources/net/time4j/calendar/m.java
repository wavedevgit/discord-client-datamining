package net.time4j.calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class m extends kt.e {

    /* renamed from: d  reason: collision with root package name */
    static final m f40343d = new m();
    private static final long serialVersionUID = -1117064522468823402L;

    private m() {
        super("RELATED_GREGORIAN_YEAR");
    }

    @Override // kt.p
    public boolean C() {
        return false;
    }

    @Override // kt.e
    protected boolean E() {
        return true;
    }

    @Override // kt.p
    /* renamed from: F */
    public Integer e() {
        return 999999999;
    }

    @Override // kt.p
    /* renamed from: G */
    public Integer A() {
        return -999999999;
    }

    @Override // kt.e, kt.p
    public char d() {
        return 'r';
    }

    @Override // kt.p
    public Class getType() {
        return Integer.class;
    }

    protected Object readResolve() {
        return f40343d;
    }

    @Override // kt.p
    public boolean y() {
        return true;
    }
}
