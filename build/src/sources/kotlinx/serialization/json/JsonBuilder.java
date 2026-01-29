package kotlinx.serialization.json;

import bt.d;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JsonBuilder {

    /* renamed from: a  reason: collision with root package name */
    private boolean f36399a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f36400b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36401c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f36402d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f36403e;

    /* renamed from: f  reason: collision with root package name */
    private String f36404f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f36405g;

    /* renamed from: h  reason: collision with root package name */
    private String f36406h;

    /* renamed from: i  reason: collision with root package name */
    private bt.a f36407i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f36408j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f36409k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f36410l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f36411m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f36412n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36413o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f36414p;

    /* renamed from: q  reason: collision with root package name */
    private dt.b f36415q;

    public JsonBuilder(Json json) {
        Intrinsics.checkNotNullParameter(json, "json");
        this.f36399a = json.e().i();
        this.f36400b = json.e().j();
        this.f36401c = json.e().k();
        this.f36402d = json.e().q();
        this.f36403e = json.e().m();
        this.f36404f = json.e().n();
        this.f36405g = json.e().g();
        this.f36406h = json.e().e();
        this.f36407i = json.e().f();
        this.f36408j = json.e().o();
        json.e().l();
        this.f36409k = json.e().h();
        this.f36410l = json.e().d();
        this.f36411m = json.e().a();
        this.f36412n = json.e().b();
        this.f36413o = json.e().c();
        this.f36414p = json.e().p();
        this.f36415q = json.a();
    }

    public final d a() {
        if (this.f36414p) {
            if (Intrinsics.areEqual(this.f36406h, "type")) {
                if (this.f36407i != bt.a.f7799i) {
                    throw new IllegalArgumentException("useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.");
                }
            } else {
                throw new IllegalArgumentException("Class discriminator should not be specified when array polymorphism is specified");
            }
        }
        if (!this.f36403e) {
            if (!Intrinsics.areEqual(this.f36404f, "    ")) {
                throw new IllegalArgumentException("Indent should not be specified when default printing mode is used");
            }
        } else if (!Intrinsics.areEqual(this.f36404f, "    ")) {
            String str = this.f36404f;
            for (int i10 = 0; i10 < str.length(); i10++) {
                char charAt = str.charAt(i10);
                if (charAt != ' ' && charAt != '\t' && charAt != '\r' && charAt != '\n') {
                    throw new IllegalArgumentException(("Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had " + this.f36404f).toString());
                }
            }
        }
        return new d(this.f36399a, this.f36401c, this.f36402d, this.f36413o, this.f36403e, this.f36400b, this.f36404f, this.f36405g, this.f36414p, this.f36406h, this.f36412n, this.f36408j, null, this.f36409k, this.f36410l, this.f36411m, this.f36407i);
    }

    public final dt.b b() {
        return this.f36415q;
    }

    public final void c(boolean z10) {
        this.f36401c = z10;
    }
}
