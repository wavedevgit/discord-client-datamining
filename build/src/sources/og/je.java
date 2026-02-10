package og;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je {

    /* renamed from: a  reason: collision with root package name */
    private Long f39305a;

    /* renamed from: b  reason: collision with root package name */
    private xe f39306b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f39307c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f39308d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f39309e;

    public final je a(Boolean bool) {
        this.f39308d = bool;
        return this;
    }

    public final je b(Boolean bool) {
        this.f39309e = bool;
        return this;
    }

    public final je c(Long l10) {
        this.f39305a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final je d(xe xeVar) {
        this.f39306b = xeVar;
        return this;
    }

    public final je e(Boolean bool) {
        this.f39307c = bool;
        return this;
    }

    public final le f() {
        return new le(this, null);
    }
}
