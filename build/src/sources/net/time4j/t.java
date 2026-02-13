package net.time4j;

import java.io.InvalidObjectException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t extends b implements l0 {
    private static final long serialVersionUID = -1337148214680014674L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f38246o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Integer f38247p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Integer f38248q;

    /* renamed from: r  reason: collision with root package name */
    private final transient char f38249r;

    /* renamed from: s  reason: collision with root package name */
    private final transient bu.t f38250s;

    private t(String str, int i10, Integer num, Integer num2, char c10) {
        super(str);
        boolean z10;
        this.f38246o = i10;
        this.f38247p = num;
        this.f38248q = num2;
        this.f38249r = c10;
        if (i10 != 5 && i10 != 7 && i10 != 9 && i10 != 13) {
            z10 = false;
        } else {
            z10 = true;
        }
        this.f38250s = new m0(this, z10);
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

    @Override // bu.p
    public boolean A() {
        return false;
    }

    @Override // bu.p
    public boolean C() {
        return true;
    }

    @Override // bu.e
    protected boolean E() {
        return true;
    }

    @Override // bu.p
    /* renamed from: I */
    public Integer f() {
        return this.f38248q;
    }

    @Override // bu.p
    /* renamed from: J */
    public Integer B() {
        return this.f38247p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int K() {
        return this.f38246o;
    }

    @Override // bu.e, bu.p
    public char d() {
        return this.f38249r;
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
