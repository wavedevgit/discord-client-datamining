package ut;

import pt.p;
import qt.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c extends d {

    /* renamed from: p  reason: collision with root package name */
    public static final p f51723p = new c("YEAR_OF_DISPLAY", 0, 1, 9999);
    private static final long serialVersionUID = 1;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f51724e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Integer f51725i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Integer f51726o;

    /* JADX INFO: Access modifiers changed from: protected */
    public c(String str, char c10, int i10, int i11) {
        super(str);
        this.f51724e = c10;
        this.f51725i = Integer.valueOf(i10);
        this.f51726o = Integer.valueOf(i11);
    }

    private Object readResolve() {
        return f51723p;
    }

    @Override // pt.p
    public boolean B() {
        return false;
    }

    @Override // pt.e
    protected boolean E() {
        return true;
    }

    @Override // pt.p
    /* renamed from: F */
    public Integer e() {
        return this.f51726o;
    }

    @Override // pt.p
    /* renamed from: G */
    public Integer A() {
        return this.f51725i;
    }

    @Override // pt.e, pt.p
    public char d() {
        return this.f51724e;
    }

    @Override // pt.p
    public final Class getType() {
        return Integer.class;
    }

    @Override // pt.p
    public boolean z() {
        return true;
    }
}
