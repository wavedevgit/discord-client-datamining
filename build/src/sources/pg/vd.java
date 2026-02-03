package pg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vd {

    /* renamed from: a  reason: collision with root package name */
    private Long f45833a;

    /* renamed from: b  reason: collision with root package name */
    private ie f45834b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f45835c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f45836d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f45837e;

    public final vd a(Boolean bool) {
        this.f45836d = bool;
        return this;
    }

    public final vd b(Boolean bool) {
        this.f45837e = bool;
        return this;
    }

    public final vd c(Long l10) {
        this.f45833a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final vd d(ie ieVar) {
        this.f45834b = ieVar;
        return this;
    }

    public final vd e(Boolean bool) {
        this.f45835c = bool;
        return this;
    }

    public final xd f() {
        return new xd(this, null);
    }
}
