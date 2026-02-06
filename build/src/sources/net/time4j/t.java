package net.time4j;

import java.io.InvalidObjectException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t extends b implements l0 {
    private static final long serialVersionUID = -1337148214680014674L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f39533o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Integer f39534p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Integer f39535q;

    /* renamed from: r  reason: collision with root package name */
    private final transient char f39536r;

    /* renamed from: s  reason: collision with root package name */
    private final transient rt.t f39537s;

    private t(String str, int i10, Integer num, Integer num2, char c10) {
        super(str);
        boolean z10;
        this.f39533o = i10;
        this.f39534p = num;
        this.f39535q = num2;
        this.f39536r = c10;
        if (i10 != 5 && i10 != 7 && i10 != 9 && i10 != 13) {
            z10 = false;
        } else {
            z10 = true;
        }
        this.f39537s = new m0(this, z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t G(String str, boolean z10) {
        int i10;
        int i11;
        char c10;
        if (z10) {
            i10 = 2;
        } else {
            i10 = 1;
        }
        if (z10) {
            i11 = 24;
        } else {
            i11 = 12;
        }
        Integer valueOf = Integer.valueOf(i11);
        if (z10) {
            c10 = 'k';
        } else {
            c10 = 'h';
        }
        return new t(str, i10, 1, valueOf, c10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t H(String str, int i10, int i11, int i12, char c10) {
        return new t(str, i10, Integer.valueOf(i11), Integer.valueOf(i12), c10);
    }

    private Object readResolve() {
        Object D0 = g0.D0(name());
        if (D0 != null) {
            return D0;
        }
        throw new InvalidObjectException(name());
    }

    @Override // rt.p
    public boolean A() {
        return false;
    }

    @Override // rt.p
    public boolean D() {
        return true;
    }

    @Override // rt.e
    protected boolean E() {
        return true;
    }

    @Override // rt.p
    /* renamed from: I */
    public Integer e() {
        return this.f39535q;
    }

    @Override // rt.p
    /* renamed from: J */
    public Integer B() {
        return this.f39534p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int K() {
        return this.f39533o;
    }

    @Override // rt.e, rt.p
    public char d() {
        return this.f39536r;
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
