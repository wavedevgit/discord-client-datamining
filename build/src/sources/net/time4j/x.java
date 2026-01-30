package net.time4j;

import java.io.InvalidObjectException;
import kotlin.jvm.internal.LongCompanionObject;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x extends b implements l0 {

    /* renamed from: r  reason: collision with root package name */
    static final jt.p f40930r = new x();
    private static final long serialVersionUID = 5930990958663061693L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Long f40931o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Long f40932p;

    /* renamed from: q  reason: collision with root package name */
    private final transient jt.t f40933q;

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
                return f40930r;
            }
            throw new InvalidObjectException(name());
        }
        return D0;
    }

    @Override // jt.p
    public boolean C() {
        return true;
    }

    @Override // jt.p
    /* renamed from: H */
    public Long e() {
        return this.f40932p;
    }

    @Override // jt.p
    /* renamed from: I */
    public Long A() {
        return this.f40931o;
    }

    @Override // jt.p
    public Class getType() {
        return Long.class;
    }

    @Override // net.time4j.l0
    public /* bridge */ /* synthetic */ o r(Number number) {
        return super.F((Long) number);
    }

    @Override // jt.p
    public boolean y() {
        return false;
    }

    private x(String str, long j10, long j11) {
        super(str);
        this.f40931o = Long.valueOf(j10);
        this.f40932p = Long.valueOf(j11);
        this.f40933q = new m0(this, true);
    }
}
