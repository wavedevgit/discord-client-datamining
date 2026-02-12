package rg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vd {

    /* renamed from: a  reason: collision with root package name */
    private Long f47214a;

    /* renamed from: b  reason: collision with root package name */
    private ie f47215b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f47216c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f47217d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f47218e;

    public final vd a(Boolean bool) {
        this.f47217d = bool;
        return this;
    }

    public final vd b(Boolean bool) {
        this.f47218e = bool;
        return this;
    }

    public final vd c(Long l10) {
        this.f47214a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final vd d(ie ieVar) {
        this.f47215b = ieVar;
        return this;
    }

    public final vd e(Boolean bool) {
        this.f47216c = bool;
        return this;
    }

    public final xd f() {
        return new xd(this, null);
    }
}
