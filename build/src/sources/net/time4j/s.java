package net.time4j;

import java.io.InvalidObjectException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s extends a implements l0 {
    private static final long serialVersionUID = -1337148214680014674L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f40712o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Integer f40713p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Integer f40714q;

    /* renamed from: r  reason: collision with root package name */
    private final transient char f40715r;

    /* renamed from: s  reason: collision with root package name */
    private final transient mt.t f40716s;

    private s(String str, int i10, Integer num, Integer num2, char c10) {
        super(str);
        this.f40712o = i10;
        this.f40713p = num;
        this.f40714q = num2;
        this.f40715r = c10;
        this.f40716s = new m0(this, false);
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

    @Override // mt.p
    public boolean C() {
        return false;
    }

    @Override // mt.e
    protected boolean E() {
        return true;
    }

    @Override // mt.p
    /* renamed from: H */
    public Integer f() {
        return this.f40714q;
    }

    @Override // mt.p
    /* renamed from: I */
    public Integer A() {
        return this.f40713p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int J() {
        return this.f40712o;
    }

    @Override // mt.e, mt.p
    public char d() {
        return this.f40715r;
    }

    @Override // mt.p
    public Class getType() {
        return Integer.class;
    }

    @Override // net.time4j.l0
    public /* bridge */ /* synthetic */ o t(Number number) {
        return super.F((Integer) number);
    }

    @Override // mt.p
    public boolean y() {
        return true;
    }
}
