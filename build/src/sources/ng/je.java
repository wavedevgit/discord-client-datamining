package ng;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je {

    /* renamed from: a  reason: collision with root package name */
    private Long f39906a;

    /* renamed from: b  reason: collision with root package name */
    private xe f39907b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f39908c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f39909d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f39910e;

    public final je a(Boolean bool) {
        this.f39909d = bool;
        return this;
    }

    public final je b(Boolean bool) {
        this.f39910e = bool;
        return this;
    }

    public final je c(Long l10) {
        this.f39906a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final je d(xe xeVar) {
        this.f39907b = xeVar;
        return this;
    }

    public final je e(Boolean bool) {
        this.f39908c = bool;
        return this;
    }

    public final le f() {
        return new le(this, null);
    }
}
