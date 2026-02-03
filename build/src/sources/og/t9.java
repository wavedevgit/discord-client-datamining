package og;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t9 {

    /* renamed from: a  reason: collision with root package name */
    private Long f43709a;

    /* renamed from: b  reason: collision with root package name */
    private ca f43710b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f43711c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f43712d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f43713e;

    public final t9 a(Boolean bool) {
        this.f43712d = bool;
        return this;
    }

    public final t9 b(Boolean bool) {
        this.f43713e = bool;
        return this;
    }

    public final t9 c(Long l10) {
        this.f43709a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final t9 d(ca caVar) {
        this.f43710b = caVar;
        return this;
    }

    public final t9 e(Boolean bool) {
        this.f43711c = bool;
        return this;
    }

    public final v9 f() {
        return new v9(this, null);
    }
}
