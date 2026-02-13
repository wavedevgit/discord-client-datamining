package net.time4j;

import java.io.InvalidObjectException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s extends a implements l0 {
    private static final long serialVersionUID = -1337148214680014674L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f38240o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Integer f38241p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Integer f38242q;

    /* renamed from: r  reason: collision with root package name */
    private final transient char f38243r;

    /* renamed from: s  reason: collision with root package name */
    private final transient bu.t f38244s;

    private s(String str, int i10, Integer num, Integer num2, char c10) {
        super(str);
        this.f38240o = i10;
        this.f38241p = num;
        this.f38242q = num2;
        this.f38243r = c10;
        this.f38244s = new m0(this, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s G(String str, int i10, int i11, int i12, char c10) {
        return new s(str, i10, Integer.valueOf(i11), Integer.valueOf(i12), c10);
    }

    private Object readResolve() {
        Object F0 = f0.F0(name());
        if (F0 != null) {
            return F0;
        }
        throw new InvalidObjectException(name());
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
    /* renamed from: H */
    public Integer f() {
        return this.f38242q;
    }

    @Override // bu.p
    /* renamed from: I */
    public Integer B() {
        return this.f38241p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int J() {
        return this.f38240o;
    }

    @Override // bu.e, bu.p
    public char d() {
        return this.f38243r;
    }

    @Override // bu.p
    public Class getType() {
        return Integer.class;
    }

    @Override // net.time4j.l0
    public /* bridge */ /* synthetic */ o s(Number number) {
        return super.F((Integer) number);
    }
}
