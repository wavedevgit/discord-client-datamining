package rg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vd {

    /* renamed from: a  reason: collision with root package name */
    private Long f47782a;

    /* renamed from: b  reason: collision with root package name */
    private ie f47783b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f47784c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f47785d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f47786e;

    public final vd a(Boolean bool) {
        this.f47785d = bool;
        return this;
    }

    public final vd b(Boolean bool) {
        this.f47786e = bool;
        return this;
    }

    public final vd c(Long l10) {
        this.f47782a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final vd d(ie ieVar) {
        this.f47783b = ieVar;
        return this;
    }

    public final vd e(Boolean bool) {
        this.f47784c = bool;
        return this;
    }

    public final xd f() {
        return new xd(this, null);
    }
}
