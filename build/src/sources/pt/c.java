package pt;

import kt.p;
import lt.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends d {

    /* renamed from: p  reason: collision with root package name */
    public static final p f46488p = new c("YEAR_OF_DISPLAY", 0, 1, 9999);
    private static final long serialVersionUID = 1;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f46489e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Integer f46490i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Integer f46491o;

    /* JADX INFO: Access modifiers changed from: protected */
    public c(String str, char c10, int i10, int i11) {
        super(str);
        this.f46489e = c10;
        this.f46490i = Integer.valueOf(i10);
        this.f46491o = Integer.valueOf(i11);
    }

    private Object readResolve() {
        return f46488p;
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
        return this.f46491o;
    }

    @Override // kt.p
    /* renamed from: G */
    public Integer A() {
        return this.f46490i;
    }

    @Override // kt.e, kt.p
    public char d() {
        return this.f46489e;
    }

    @Override // kt.p
    public final Class getType() {
        return Integer.class;
    }

    @Override // kt.p
    public boolean y() {
        return true;
    }
}
