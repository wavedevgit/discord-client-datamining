package wt;

import rt.p;
import st.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends d {

    /* renamed from: p  reason: collision with root package name */
    public static final p f54171p = new c("YEAR_OF_DISPLAY", 0, 1, 9999);
    private static final long serialVersionUID = 1;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f54172e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Integer f54173i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Integer f54174o;

    /* JADX INFO: Access modifiers changed from: protected */
    public c(String str, char c10, int i10, int i11) {
        super(str);
        this.f54172e = c10;
        this.f54173i = Integer.valueOf(i10);
        this.f54174o = Integer.valueOf(i11);
    }

    private Object readResolve() {
        return f54171p;
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
    public Integer e() {
        return this.f54174o;
    }

    @Override // rt.p
    /* renamed from: G */
    public Integer B() {
        return this.f54173i;
    }

    @Override // rt.e, rt.p
    public char d() {
        return this.f54172e;
    }

    @Override // rt.p
    public final Class getType() {
        return Integer.class;
    }
}
