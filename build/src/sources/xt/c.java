package xt;

import st.p;
import tt.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends d {

    /* renamed from: p  reason: collision with root package name */
    public static final p f55334p = new c("YEAR_OF_DISPLAY", 0, 1, 9999);
    private static final long serialVersionUID = 1;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f55335e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Integer f55336i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Integer f55337o;

    /* JADX INFO: Access modifiers changed from: protected */
    public c(String str, char c10, int i10, int i11) {
        super(str);
        this.f55335e = c10;
        this.f55336i = Integer.valueOf(i10);
        this.f55337o = Integer.valueOf(i11);
    }

    private Object readResolve() {
        return f55334p;
    }

    @Override // st.p
    public boolean A() {
        return true;
    }

    @Override // st.p
    public boolean D() {
        return false;
    }

    @Override // st.e
    protected boolean E() {
        return true;
    }

    @Override // st.p
    /* renamed from: F */
    public Integer e() {
        return this.f55337o;
    }

    @Override // st.p
    /* renamed from: G */
    public Integer B() {
        return this.f55336i;
    }

    @Override // st.e, st.p
    public char d() {
        return this.f55335e;
    }

    @Override // st.p
    public final Class getType() {
        return Integer.class;
    }
}
