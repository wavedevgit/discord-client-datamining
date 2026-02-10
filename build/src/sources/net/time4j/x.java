package net.time4j;

import java.io.InvalidObjectException;
import kotlin.jvm.internal.LongCompanionObject;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x extends b implements l0 {

    /* renamed from: r  reason: collision with root package name */
    static final bu.p f37791r = new x();
    private static final long serialVersionUID = 5930990958663061693L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Long f37792o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Long f37793p;

    /* renamed from: q  reason: collision with root package name */
    private final transient bu.t f37794q;

    private x() {
        this("DAY_OVERFLOW", Long.MIN_VALUE, LongCompanionObject.MAX_VALUE);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static x G(String str, long j10, long j11) {
        return new x(str, j10, j11);
    }

    private Object readResolve() {
        Object D0 = g0.D0(name());
        if (D0 == null) {
            if (name().equals("DAY_OVERFLOW")) {
                return f37791r;
            }
            throw new InvalidObjectException(name());
        }
        return D0;
    }

    @Override // bu.p
    public boolean A() {
        return false;
    }

    @Override // bu.p
    public boolean C() {
        return true;
    }

    @Override // bu.p
    /* renamed from: H */
    public Long f() {
        return this.f37793p;
    }

    @Override // bu.p
    /* renamed from: I */
    public Long B() {
        return this.f37792o;
    }

    @Override // bu.p
    public Class getType() {
        return Long.class;
    }

    @Override // net.time4j.l0
    public /* bridge */ /* synthetic */ o s(Number number) {
        return super.F((Long) number);
    }

    private x(String str, long j10, long j11) {
        super(str);
        this.f37792o = Long.valueOf(j10);
        this.f37793p = Long.valueOf(j11);
        this.f37794q = new m0(this, true);
    }
}
