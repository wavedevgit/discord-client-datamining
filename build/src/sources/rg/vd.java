package rg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vd {

    /* renamed from: a  reason: collision with root package name */
    private Long f48759a;

    /* renamed from: b  reason: collision with root package name */
    private ie f48760b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f48761c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f48762d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f48763e;

    public final vd a(Boolean bool) {
        this.f48762d = bool;
        return this;
    }

    public final vd b(Boolean bool) {
        this.f48763e = bool;
        return this;
    }

    public final vd c(Long l10) {
        this.f48759a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final vd d(ie ieVar) {
        this.f48760b = ieVar;
        return this;
    }

    public final vd e(Boolean bool) {
        this.f48761c = bool;
        return this;
    }

    public final xd f() {
        return new xd(this, null);
    }
}
