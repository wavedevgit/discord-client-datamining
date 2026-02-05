package mg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je {

    /* renamed from: a  reason: collision with root package name */
    private Long f37743a;

    /* renamed from: b  reason: collision with root package name */
    private xe f37744b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f37745c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f37746d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f37747e;

    public final je a(Boolean bool) {
        this.f37746d = bool;
        return this;
    }

    public final je b(Boolean bool) {
        this.f37747e = bool;
        return this;
    }

    public final je c(Long l10) {
        this.f37743a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final je d(xe xeVar) {
        this.f37744b = xeVar;
        return this;
    }

    public final je e(Boolean bool) {
        this.f37745c = bool;
        return this;
    }

    public final le f() {
        return new le(this, null);
    }
}
