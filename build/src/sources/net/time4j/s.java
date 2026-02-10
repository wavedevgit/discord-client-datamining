package net.time4j;

import java.io.InvalidObjectException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s extends a implements l0 {
    private static final long serialVersionUID = -1337148214680014674L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f38667o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Integer f38668p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Integer f38669q;

    /* renamed from: r  reason: collision with root package name */
    private final transient char f38670r;

    /* renamed from: s  reason: collision with root package name */
    private final transient st.t f38671s;

    private s(String str, int i10, Integer num, Integer num2, char c10) {
        super(str);
        this.f38667o = i10;
        this.f38668p = num;
        this.f38669q = num2;
        this.f38670r = c10;
        this.f38671s = new m0(this, false);
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
    /* renamed from: H */
    public Integer e() {
        return this.f38669q;
    }

    @Override // st.p
    /* renamed from: I */
    public Integer B() {
        return this.f38668p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int J() {
        return this.f38667o;
    }

    @Override // st.e, st.p
    public char d() {
        return this.f38670r;
    }

    @Override // st.p
    public Class getType() {
        return Integer.class;
    }

    @Override // net.time4j.l0
    public /* bridge */ /* synthetic */ o v(Number number) {
        return super.F((Integer) number);
    }
}
