package mg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je {

    /* renamed from: a  reason: collision with root package name */
    private Long f38304a;

    /* renamed from: b  reason: collision with root package name */
    private xe f38305b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f38306c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f38307d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f38308e;

    public final je a(Boolean bool) {
        this.f38307d = bool;
        return this;
    }

    public final je b(Boolean bool) {
        this.f38308e = bool;
        return this;
    }

    public final je c(Long l10) {
        this.f38304a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final je d(xe xeVar) {
        this.f38305b = xeVar;
        return this;
    }

    public final je e(Boolean bool) {
        this.f38306c = bool;
        return this;
    }

    public final le f() {
        return new le(this, null);
    }
}
