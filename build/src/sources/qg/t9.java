package qg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t9 {

    /* renamed from: a  reason: collision with root package name */
    private Long f46319a;

    /* renamed from: b  reason: collision with root package name */
    private ca f46320b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f46321c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f46322d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f46323e;

    public final t9 a(Boolean bool) {
        this.f46322d = bool;
        return this;
    }

    public final t9 b(Boolean bool) {
        this.f46323e = bool;
        return this;
    }

    public final t9 c(Long l10) {
        this.f46319a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final t9 d(ca caVar) {
        this.f46320b = caVar;
        return this;
    }

    public final t9 e(Boolean bool) {
        this.f46321c = bool;
        return this;
    }

    public final v9 f() {
        return new v9(this, null);
    }
}
