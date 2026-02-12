package og;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je {

    /* renamed from: a  reason: collision with root package name */
    private Long f39306a;

    /* renamed from: b  reason: collision with root package name */
    private xe f39307b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f39308c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f39309d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f39310e;

    public final je a(Boolean bool) {
        this.f39309d = bool;
        return this;
    }

    public final je b(Boolean bool) {
        this.f39310e = bool;
        return this;
    }

    public final je c(Long l10) {
        this.f39306a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final je d(xe xeVar) {
        this.f39307b = xeVar;
        return this;
    }

    public final je e(Boolean bool) {
        this.f39308c = bool;
        return this;
    }

    public final le f() {
        return new le(this, null);
    }
}
