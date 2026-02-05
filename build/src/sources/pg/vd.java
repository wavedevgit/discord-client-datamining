package pg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vd {

    /* renamed from: a  reason: collision with root package name */
    private Long f45763a;

    /* renamed from: b  reason: collision with root package name */
    private ie f45764b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f45765c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f45766d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f45767e;

    public final vd a(Boolean bool) {
        this.f45766d = bool;
        return this;
    }

    public final vd b(Boolean bool) {
        this.f45767e = bool;
        return this;
    }

    public final vd c(Long l10) {
        this.f45763a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final vd d(ie ieVar) {
        this.f45764b = ieVar;
        return this;
    }

    public final vd e(Boolean bool) {
        this.f45765c = bool;
        return this;
    }

    public final xd f() {
        return new xd(this, null);
    }
}
