package kotlinx.serialization.json;

import ht.d;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JsonBuilder {

    /* renamed from: a  reason: collision with root package name */
    private boolean f35105a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f35106b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f35107c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f35108d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f35109e;

    /* renamed from: f  reason: collision with root package name */
    private String f35110f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f35111g;

    /* renamed from: h  reason: collision with root package name */
    private String f35112h;

    /* renamed from: i  reason: collision with root package name */
    private ht.a f35113i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f35114j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f35115k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f35116l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f35117m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f35118n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35119o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f35120p;

    /* renamed from: q  reason: collision with root package name */
    private kt.b f35121q;

    public JsonBuilder(Json json) {
        Intrinsics.checkNotNullParameter(json, "json");
        this.f35105a = json.e().i();
        this.f35106b = json.e().j();
        this.f35107c = json.e().k();
        this.f35108d = json.e().q();
        this.f35109e = json.e().m();
        this.f35110f = json.e().n();
        this.f35111g = json.e().g();
        this.f35112h = json.e().e();
        this.f35113i = json.e().f();
        this.f35114j = json.e().o();
        json.e().l();
        this.f35115k = json.e().h();
        this.f35116l = json.e().d();
        this.f35117m = json.e().a();
        this.f35118n = json.e().b();
        this.f35119o = json.e().c();
        this.f35120p = json.e().p();
        this.f35121q = json.a();
    }

    public final d a() {
        if (this.f35120p) {
            if (Intrinsics.areEqual(this.f35112h, "type")) {
                if (this.f35113i != ht.a.f26955i) {
                    throw new IllegalArgumentException("useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.");
                }
            } else {
                throw new IllegalArgumentException("Class discriminator should not be specified when array polymorphism is specified");
            }
        }
        if (!this.f35109e) {
            if (!Intrinsics.areEqual(this.f35110f, "    ")) {
                throw new IllegalArgumentException("Indent should not be specified when default printing mode is used");
            }
        } else if (!Intrinsics.areEqual(this.f35110f, "    ")) {
            String str = this.f35110f;
            for (int i10 = 0; i10 < str.length(); i10++) {
                char charAt = str.charAt(i10);
                if (charAt != ' ' && charAt != '\t' && charAt != '\r' && charAt != '\n') {
                    throw new IllegalArgumentException(("Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had " + this.f35110f).toString());
                }
            }
        }
        return new d(this.f35105a, this.f35107c, this.f35108d, this.f35119o, this.f35109e, this.f35106b, this.f35110f, this.f35111g, this.f35120p, this.f35112h, this.f35118n, this.f35114j, null, this.f35115k, this.f35116l, this.f35117m, this.f35113i);
    }

    public final kt.b b() {
        return this.f35121q;
    }

    public final void c(boolean z10) {
        this.f35107c = z10;
    }
}
