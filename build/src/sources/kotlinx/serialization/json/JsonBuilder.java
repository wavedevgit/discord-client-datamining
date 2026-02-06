package kotlinx.serialization.json;

import kotlin.jvm.internal.Intrinsics;
import kt.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JsonBuilder {

    /* renamed from: a  reason: collision with root package name */
    private boolean f35125a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f35126b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f35127c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f35128d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f35129e;

    /* renamed from: f  reason: collision with root package name */
    private String f35130f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f35131g;

    /* renamed from: h  reason: collision with root package name */
    private String f35132h;

    /* renamed from: i  reason: collision with root package name */
    private kt.a f35133i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f35134j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f35135k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f35136l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f35137m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f35138n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35139o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f35140p;

    /* renamed from: q  reason: collision with root package name */
    private mt.b f35141q;

    public JsonBuilder(Json json) {
        Intrinsics.checkNotNullParameter(json, "json");
        this.f35125a = json.e().i();
        this.f35126b = json.e().j();
        this.f35127c = json.e().k();
        this.f35128d = json.e().q();
        this.f35129e = json.e().m();
        this.f35130f = json.e().n();
        this.f35131g = json.e().g();
        this.f35132h = json.e().e();
        this.f35133i = json.e().f();
        this.f35134j = json.e().o();
        json.e().l();
        this.f35135k = json.e().h();
        this.f35136l = json.e().d();
        this.f35137m = json.e().a();
        this.f35138n = json.e().b();
        this.f35139o = json.e().c();
        this.f35140p = json.e().p();
        this.f35141q = json.a();
    }

    public final d a() {
        if (this.f35140p) {
            if (Intrinsics.areEqual(this.f35132h, "type")) {
                if (this.f35133i != kt.a.f35493i) {
                    throw new IllegalArgumentException("useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.");
                }
            } else {
                throw new IllegalArgumentException("Class discriminator should not be specified when array polymorphism is specified");
            }
        }
        if (!this.f35129e) {
            if (!Intrinsics.areEqual(this.f35130f, "    ")) {
                throw new IllegalArgumentException("Indent should not be specified when default printing mode is used");
            }
        } else if (!Intrinsics.areEqual(this.f35130f, "    ")) {
            String str = this.f35130f;
            for (int i10 = 0; i10 < str.length(); i10++) {
                char charAt = str.charAt(i10);
                if (charAt != ' ' && charAt != '\t' && charAt != '\r' && charAt != '\n') {
                    throw new IllegalArgumentException(("Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had " + this.f35130f).toString());
                }
            }
        }
        return new d(this.f35125a, this.f35127c, this.f35128d, this.f35139o, this.f35129e, this.f35126b, this.f35130f, this.f35131g, this.f35140p, this.f35132h, this.f35138n, this.f35134j, null, this.f35135k, this.f35136l, this.f35137m, this.f35133i);
    }

    public final mt.b b() {
        return this.f35141q;
    }

    public final void c(boolean z10) {
        this.f35127c = z10;
    }
}
