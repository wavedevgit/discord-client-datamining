package pg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vd {

    /* renamed from: a  reason: collision with root package name */
    private Long f45785a;

    /* renamed from: b  reason: collision with root package name */
    private ie f45786b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f45787c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f45788d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f45789e;

    public final vd a(Boolean bool) {
        this.f45788d = bool;
        return this;
    }

    public final vd b(Boolean bool) {
        this.f45789e = bool;
        return this;
    }

    public final vd c(Long l10) {
        this.f45785a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final vd d(ie ieVar) {
        this.f45786b = ieVar;
        return this;
    }

    public final vd e(Boolean bool) {
        this.f45787c = bool;
        return this;
    }

    public final xd f() {
        return new xd(this, null);
    }
}
