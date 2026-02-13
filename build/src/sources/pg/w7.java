package pg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w7 {

    /* renamed from: a  reason: collision with root package name */
    private Long f43173a;

    /* renamed from: b  reason: collision with root package name */
    private x7 f43174b;

    /* renamed from: c  reason: collision with root package name */
    private r7 f43175c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f43176d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f43177e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f43178f;

    /* renamed from: g  reason: collision with root package name */
    private Integer f43179g;

    public final w7 b(Long l10) {
        this.f43173a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final w7 c(Integer num) {
        this.f43176d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final w7 d(r7 r7Var) {
        this.f43175c = r7Var;
        return this;
    }

    public final w7 e(Integer num) {
        this.f43178f = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final w7 f(x7 x7Var) {
        this.f43174b = x7Var;
        return this;
    }

    public final w7 g(Integer num) {
        this.f43177e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final w7 h(Integer num) {
        this.f43179g = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final z7 j() {
        return new z7(this, null);
    }
}
