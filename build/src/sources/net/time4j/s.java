package net.time4j;

import java.io.InvalidObjectException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s extends a implements l0 {
    private static final long serialVersionUID = -1337148214680014674L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f40794o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Integer f40795p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Integer f40796q;

    /* renamed from: r  reason: collision with root package name */
    private final transient char f40797r;

    /* renamed from: s  reason: collision with root package name */
    private final transient jt.t f40798s;

    private s(String str, int i10, Integer num, Integer num2, char c10) {
        super(str);
        this.f40794o = i10;
        this.f40795p = num;
        this.f40796q = num2;
        this.f40797r = c10;
        this.f40798s = new m0(this, false);
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

    @Override // jt.p
    public boolean C() {
        return false;
    }

    @Override // jt.e
    protected boolean E() {
        return true;
    }

    @Override // jt.p
    /* renamed from: H */
    public Integer e() {
        return this.f40796q;
    }

    @Override // jt.p
    /* renamed from: I */
    public Integer A() {
        return this.f40795p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int J() {
        return this.f40794o;
    }

    @Override // jt.e, jt.p
    public char d() {
        return this.f40797r;
    }

    @Override // jt.p
    public Class getType() {
        return Integer.class;
    }

    @Override // net.time4j.l0
    public /* bridge */ /* synthetic */ o r(Number number) {
        return super.F((Integer) number);
    }

    @Override // jt.p
    public boolean y() {
        return true;
    }
}
