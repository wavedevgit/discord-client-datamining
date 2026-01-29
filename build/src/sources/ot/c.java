package ot;

import jt.p;
import kt.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends d {

    /* renamed from: p  reason: collision with root package name */
    public static final p f44773p = new c("YEAR_OF_DISPLAY", 0, 1, 9999);
    private static final long serialVersionUID = 1;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f44774e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Integer f44775i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Integer f44776o;

    /* JADX INFO: Access modifiers changed from: protected */
    public c(String str, char c10, int i10, int i11) {
        super(str);
        this.f44774e = c10;
        this.f44775i = Integer.valueOf(i10);
        this.f44776o = Integer.valueOf(i11);
    }

    private Object readResolve() {
        return f44773p;
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
        return this.f44776o;
    }

    @Override // jt.p
    /* renamed from: G */
    public Integer A() {
        return this.f44775i;
    }

    @Override // jt.e, jt.p
    public char d() {
        return this.f44774e;
    }

    @Override // jt.p
    public final Class getType() {
        return Integer.class;
    }

    @Override // jt.p
    public boolean y() {
        return true;
    }
}
