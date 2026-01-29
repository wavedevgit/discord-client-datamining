package mg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je {

    /* renamed from: a  reason: collision with root package name */
    private Long f38288a;

    /* renamed from: b  reason: collision with root package name */
    private xe f38289b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f38290c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f38291d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f38292e;

    public final je a(Boolean bool) {
        this.f38291d = bool;
        return this;
    }

    public final je b(Boolean bool) {
        this.f38292e = bool;
        return this;
    }

    public final je c(Long l10) {
        this.f38288a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final je d(xe xeVar) {
        this.f38289b = xeVar;
        return this;
    }

    public final je e(Boolean bool) {
        this.f38290c = bool;
        return this;
    }

    public final le f() {
        return new le(this, null);
    }
}
