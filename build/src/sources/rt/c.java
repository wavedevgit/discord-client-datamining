package rt;

import mt.p;
import nt.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends d {

    /* renamed from: p  reason: collision with root package name */
    public static final p f49121p = new c("YEAR_OF_DISPLAY", 0, 1, 9999);
    private static final long serialVersionUID = 1;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f49122e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Integer f49123i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Integer f49124o;

    /* JADX INFO: Access modifiers changed from: protected */
    public c(String str, char c10, int i10, int i11) {
        super(str);
        this.f49122e = c10;
        this.f49123i = Integer.valueOf(i10);
        this.f49124o = Integer.valueOf(i11);
    }

    private Object readResolve() {
        return f49121p;
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
        return this.f49124o;
    }

    @Override // mt.p
    /* renamed from: G */
    public Integer A() {
        return this.f49123i;
    }

    @Override // mt.e, mt.p
    public char d() {
        return this.f49122e;
    }

    @Override // mt.p
    public final Class getType() {
        return Integer.class;
    }

    @Override // mt.p
    public boolean y() {
        return true;
    }
}
