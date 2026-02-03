package kotlinx.serialization.json;

import et.d;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JsonBuilder {

    /* renamed from: a  reason: collision with root package name */
    private boolean f35581a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f35582b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f35583c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f35584d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f35585e;

    /* renamed from: f  reason: collision with root package name */
    private String f35586f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f35587g;

    /* renamed from: h  reason: collision with root package name */
    private String f35588h;

    /* renamed from: i  reason: collision with root package name */
    private et.a f35589i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f35590j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f35591k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f35592l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f35593m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f35594n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35595o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f35596p;

    /* renamed from: q  reason: collision with root package name */
    private gt.b f35597q;

    public JsonBuilder(Json json) {
        Intrinsics.checkNotNullParameter(json, "json");
        this.f35581a = json.e().i();
        this.f35582b = json.e().j();
        this.f35583c = json.e().k();
        this.f35584d = json.e().q();
        this.f35585e = json.e().m();
        this.f35586f = json.e().n();
        this.f35587g = json.e().g();
        this.f35588h = json.e().e();
        this.f35589i = json.e().f();
        this.f35590j = json.e().o();
        json.e().l();
        this.f35591k = json.e().h();
        this.f35592l = json.e().d();
        this.f35593m = json.e().a();
        this.f35594n = json.e().b();
        this.f35595o = json.e().c();
        this.f35596p = json.e().p();
        this.f35597q = json.a();
    }

    public final d a() {
        if (this.f35596p) {
            if (Intrinsics.areEqual(this.f35588h, "type")) {
                if (this.f35589i != et.a.f22643i) {
                    throw new IllegalArgumentException("useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.");
                }
            } else {
                throw new IllegalArgumentException("Class discriminator should not be specified when array polymorphism is specified");
            }
        }
        if (!this.f35585e) {
            if (!Intrinsics.areEqual(this.f35586f, "    ")) {
                throw new IllegalArgumentException("Indent should not be specified when default printing mode is used");
            }
        } else if (!Intrinsics.areEqual(this.f35586f, "    ")) {
            String str = this.f35586f;
            for (int i10 = 0; i10 < str.length(); i10++) {
                char charAt = str.charAt(i10);
                if (charAt != ' ' && charAt != '\t' && charAt != '\r' && charAt != '\n') {
                    throw new IllegalArgumentException(("Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had " + this.f35586f).toString());
                }
            }
        }
        return new d(this.f35581a, this.f35583c, this.f35584d, this.f35595o, this.f35585e, this.f35582b, this.f35586f, this.f35587g, this.f35596p, this.f35588h, this.f35594n, this.f35590j, null, this.f35591k, this.f35592l, this.f35593m, this.f35589i);
    }

    public final gt.b b() {
        return this.f35597q;
    }

    public final void c(boolean z10) {
        this.f35583c = z10;
    }
}
