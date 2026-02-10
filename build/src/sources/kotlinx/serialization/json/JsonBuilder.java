package kotlinx.serialization.json;

import kotlin.jvm.internal.Intrinsics;
import ut.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JsonBuilder {

    /* renamed from: a  reason: collision with root package name */
    private boolean f35104a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f35105b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f35106c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f35107d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f35108e;

    /* renamed from: f  reason: collision with root package name */
    private String f35109f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f35110g;

    /* renamed from: h  reason: collision with root package name */
    private String f35111h;

    /* renamed from: i  reason: collision with root package name */
    private ut.a f35112i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f35113j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f35114k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f35115l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f35116m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f35117n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35118o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f35119p;

    /* renamed from: q  reason: collision with root package name */
    private wt.b f35120q;

    public JsonBuilder(Json json) {
        Intrinsics.checkNotNullParameter(json, "json");
        this.f35104a = json.e().i();
        this.f35105b = json.e().j();
        this.f35106c = json.e().k();
        this.f35107d = json.e().q();
        this.f35108e = json.e().m();
        this.f35109f = json.e().n();
        this.f35110g = json.e().g();
        this.f35111h = json.e().e();
        this.f35112i = json.e().f();
        this.f35113j = json.e().o();
        json.e().l();
        this.f35114k = json.e().h();
        this.f35115l = json.e().d();
        this.f35116m = json.e().a();
        this.f35117n = json.e().b();
        this.f35118o = json.e().c();
        this.f35119p = json.e().p();
        this.f35120q = json.a();
    }

    public final d a() {
        if (this.f35119p) {
            if (Intrinsics.areEqual(this.f35111h, "type")) {
                if (this.f35112i != ut.a.f51225i) {
                    throw new IllegalArgumentException("useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.");
                }
            } else {
                throw new IllegalArgumentException("Class discriminator should not be specified when array polymorphism is specified");
            }
        }
        if (!this.f35108e) {
            if (!Intrinsics.areEqual(this.f35109f, "    ")) {
                throw new IllegalArgumentException("Indent should not be specified when default printing mode is used");
            }
        } else if (!Intrinsics.areEqual(this.f35109f, "    ")) {
            String str = this.f35109f;
            for (int i10 = 0; i10 < str.length(); i10++) {
                char charAt = str.charAt(i10);
                if (charAt != ' ' && charAt != '\t' && charAt != '\r' && charAt != '\n') {
                    throw new IllegalArgumentException(("Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had " + this.f35109f).toString());
                }
            }
        }
        return new d(this.f35104a, this.f35106c, this.f35107d, this.f35118o, this.f35108e, this.f35105b, this.f35109f, this.f35110g, this.f35119p, this.f35111h, this.f35117n, this.f35113j, null, this.f35114k, this.f35115l, this.f35116m, this.f35112i);
    }

    public final wt.b b() {
        return this.f35120q;
    }

    public final void c(boolean z10) {
        this.f35106c = z10;
    }
}
