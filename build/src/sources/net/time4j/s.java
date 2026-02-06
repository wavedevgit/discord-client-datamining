package net.time4j;

import java.io.InvalidObjectException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s extends a implements l0 {
    private static final long serialVersionUID = -1337148214680014674L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f39527o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Integer f39528p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Integer f39529q;

    /* renamed from: r  reason: collision with root package name */
    private final transient char f39530r;

    /* renamed from: s  reason: collision with root package name */
    private final transient rt.t f39531s;

    private s(String str, int i10, Integer num, Integer num2, char c10) {
        super(str);
        this.f39527o = i10;
        this.f39528p = num;
        this.f39529q = num2;
        this.f39530r = c10;
        this.f39531s = new m0(this, false);
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
    /* renamed from: H */
    public Integer e() {
        return this.f39529q;
    }

    @Override // rt.p
    /* renamed from: I */
    public Integer B() {
        return this.f39528p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int J() {
        return this.f39527o;
    }

    @Override // rt.e, rt.p
    public char d() {
        return this.f39530r;
    }

    @Override // rt.p
    public Class getType() {
        return Integer.class;
    }

    @Override // net.time4j.l0
    public /* bridge */ /* synthetic */ o t(Number number) {
        return super.F((Integer) number);
    }
}
