package rg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vd {

    /* renamed from: a  reason: collision with root package name */
    private Long f47213a;

    /* renamed from: b  reason: collision with root package name */
    private ie f47214b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f47215c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f47216d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f47217e;

    public final vd a(Boolean bool) {
        this.f47216d = bool;
        return this;
    }

    public final vd b(Boolean bool) {
        this.f47217e = bool;
        return this;
    }

    public final vd c(Long l10) {
        this.f47213a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final vd d(ie ieVar) {
        this.f47214b = ieVar;
        return this;
    }

    public final vd e(Boolean bool) {
        this.f47215c = bool;
        return this;
    }

    public final xd f() {
        return new xd(this, null);
    }
}
