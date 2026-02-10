package pg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w7 {

    /* renamed from: a  reason: collision with root package name */
    private Long f42604a;

    /* renamed from: b  reason: collision with root package name */
    private x7 f42605b;

    /* renamed from: c  reason: collision with root package name */
    private r7 f42606c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f42607d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f42608e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f42609f;

    /* renamed from: g  reason: collision with root package name */
    private Integer f42610g;

    public final w7 b(Long l10) {
        this.f42604a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final w7 c(Integer num) {
        this.f42607d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final w7 d(r7 r7Var) {
        this.f42606c = r7Var;
        return this;
    }

    public final w7 e(Integer num) {
        this.f42609f = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final w7 f(x7 x7Var) {
        this.f42605b = x7Var;
        return this;
    }

    public final w7 g(Integer num) {
        this.f42608e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final w7 h(Integer num) {
        this.f42610g = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final z7 j() {
        return new z7(this, null);
    }
}
