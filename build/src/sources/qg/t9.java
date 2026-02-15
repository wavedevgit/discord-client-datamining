package qg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t9 {

    /* renamed from: a */
    private Long f45556a;

    /* renamed from: b */
    private ca f45557b;

    /* renamed from: c */
    private Boolean f45558c;

    /* renamed from: d */
    private Boolean f45559d;

    /* renamed from: e */
    private Boolean f45560e;

    public static /* bridge */ /* synthetic */ Boolean j(t9 t9Var) {
        return t9Var.f45558c;
    }

    public static /* bridge */ /* synthetic */ Long k(t9 t9Var) {
        return t9Var.f45556a;
    }

    public final t9 a(Boolean bool) {
        this.f45559d = bool;
        return this;
    }

    public final t9 b(Boolean bool) {
        this.f45560e = bool;
        return this;
    }

    public final t9 c(Long l10) {
        this.f45556a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final t9 d(ca caVar) {
        this.f45557b = caVar;
        return this;
    }

    public final t9 e(Boolean bool) {
        this.f45558c = bool;
        return this;
    }

    public final v9 f() {
        return new v9(this, null);
    }
}
