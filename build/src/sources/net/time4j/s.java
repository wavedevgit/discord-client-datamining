package net.time4j;

import java.io.InvalidObjectException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s extends a implements l0 {
    private static final long serialVersionUID = -1337148214680014674L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f40172o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Integer f40173p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Integer f40174q;

    /* renamed from: r  reason: collision with root package name */
    private final transient char f40175r;

    /* renamed from: s  reason: collision with root package name */
    private final transient pt.t f40176s;

    private s(String str, int i10, Integer num, Integer num2, char c10) {
        super(str);
        this.f40172o = i10;
        this.f40173p = num;
        this.f40174q = num2;
        this.f40175r = c10;
        this.f40176s = new m0(this, false);
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

    @Override // pt.p
    public boolean B() {
        return false;
    }

    @Override // pt.e
    protected boolean E() {
        return true;
    }

    @Override // pt.p
    /* renamed from: H */
    public Integer e() {
        return this.f40174q;
    }

    @Override // pt.p
    /* renamed from: I */
    public Integer A() {
        return this.f40173p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int J() {
        return this.f40172o;
    }

    @Override // pt.e, pt.p
    public char d() {
        return this.f40175r;
    }

    @Override // pt.p
    public Class getType() {
        return Integer.class;
    }

    @Override // net.time4j.l0
    public /* bridge */ /* synthetic */ o v(Number number) {
        return super.F((Integer) number);
    }

    @Override // pt.p
    public boolean z() {
        return true;
    }
}
