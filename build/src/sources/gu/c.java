package gu;

import bu.p;
import cu.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends d {

    /* renamed from: p  reason: collision with root package name */
    public static final p f26037p = new c("YEAR_OF_DISPLAY", 0, 1, 9999);
    private static final long serialVersionUID = 1;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f26038e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Integer f26039i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Integer f26040o;

    /* JADX INFO: Access modifiers changed from: protected */
    public c(String str, char c10, int i10, int i11) {
        super(str);
        this.f26038e = c10;
        this.f26039i = Integer.valueOf(i10);
        this.f26040o = Integer.valueOf(i11);
    }

    private Object readResolve() {
        return f26037p;
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
    /* renamed from: F */
    public Integer f() {
        return this.f26040o;
    }

    @Override // bu.p
    /* renamed from: G */
    public Integer B() {
        return this.f26039i;
    }

    @Override // bu.e, bu.p
    public char d() {
        return this.f26038e;
    }

    @Override // bu.p
    public final Class getType() {
        return Integer.class;
    }
}
