package og;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je {

    /* renamed from: a  reason: collision with root package name */
    private Long f40979a;

    /* renamed from: b  reason: collision with root package name */
    private xe f40980b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f40981c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f40982d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f40983e;

    public final je a(Boolean bool) {
        this.f40982d = bool;
        return this;
    }

    public final je b(Boolean bool) {
        this.f40983e = bool;
        return this;
    }

    public final je c(Long l10) {
        this.f40979a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final je d(xe xeVar) {
        this.f40980b = xeVar;
        return this;
    }

    public final je e(Boolean bool) {
        this.f40981c = bool;
        return this;
    }

    public final le f() {
        return new le(this, null);
    }
}
