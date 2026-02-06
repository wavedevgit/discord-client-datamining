package wt;

import rt.p;
import st.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends d {

    /* renamed from: p  reason: collision with root package name */
    public static final p f54123p = new c("YEAR_OF_DISPLAY", 0, 1, 9999);
    private static final long serialVersionUID = 1;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f54124e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Integer f54125i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Integer f54126o;

    /* JADX INFO: Access modifiers changed from: protected */
    public c(String str, char c10, int i10, int i11) {
        super(str);
        this.f54124e = c10;
        this.f54125i = Integer.valueOf(i10);
        this.f54126o = Integer.valueOf(i11);
    }

    private Object readResolve() {
        return f54123p;
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
        return this.f54126o;
    }

    @Override // rt.p
    /* renamed from: G */
    public Integer B() {
        return this.f54125i;
    }

    @Override // rt.e, rt.p
    public char d() {
        return this.f54124e;
    }

    @Override // rt.p
    public final Class getType() {
        return Integer.class;
    }
}
