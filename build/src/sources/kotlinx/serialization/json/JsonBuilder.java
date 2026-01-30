package kotlinx.serialization.json;

import bt.d;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JsonBuilder {

    /* renamed from: a  reason: collision with root package name */
    private boolean f36415a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f36416b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36417c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f36418d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f36419e;

    /* renamed from: f  reason: collision with root package name */
    private String f36420f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f36421g;

    /* renamed from: h  reason: collision with root package name */
    private String f36422h;

    /* renamed from: i  reason: collision with root package name */
    private bt.a f36423i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f36424j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f36425k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f36426l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f36427m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f36428n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36429o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f36430p;

    /* renamed from: q  reason: collision with root package name */
    private dt.b f36431q;

    public JsonBuilder(Json json) {
        Intrinsics.checkNotNullParameter(json, "json");
        this.f36415a = json.e().i();
        this.f36416b = json.e().j();
        this.f36417c = json.e().k();
        this.f36418d = json.e().q();
        this.f36419e = json.e().m();
        this.f36420f = json.e().n();
        this.f36421g = json.e().g();
        this.f36422h = json.e().e();
        this.f36423i = json.e().f();
        this.f36424j = json.e().o();
        json.e().l();
        this.f36425k = json.e().h();
        this.f36426l = json.e().d();
        this.f36427m = json.e().a();
        this.f36428n = json.e().b();
        this.f36429o = json.e().c();
        this.f36430p = json.e().p();
        this.f36431q = json.a();
    }

    public final d a() {
        if (this.f36430p) {
            if (Intrinsics.areEqual(this.f36422h, "type")) {
                if (this.f36423i != bt.a.f7799i) {
                    throw new IllegalArgumentException("useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.");
                }
            } else {
                throw new IllegalArgumentException("Class discriminator should not be specified when array polymorphism is specified");
            }
        }
        if (!this.f36419e) {
            if (!Intrinsics.areEqual(this.f36420f, "    ")) {
                throw new IllegalArgumentException("Indent should not be specified when default printing mode is used");
            }
        } else if (!Intrinsics.areEqual(this.f36420f, "    ")) {
            String str = this.f36420f;
            for (int i10 = 0; i10 < str.length(); i10++) {
                char charAt = str.charAt(i10);
                if (charAt != ' ' && charAt != '\t' && charAt != '\r' && charAt != '\n') {
                    throw new IllegalArgumentException(("Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had " + this.f36420f).toString());
                }
            }
        }
        return new d(this.f36415a, this.f36417c, this.f36418d, this.f36429o, this.f36419e, this.f36416b, this.f36420f, this.f36421g, this.f36430p, this.f36422h, this.f36428n, this.f36424j, null, this.f36425k, this.f36426l, this.f36427m, this.f36423i);
    }

    public final dt.b b() {
        return this.f36431q;
    }

    public final void c(boolean z10) {
        this.f36417c = z10;
    }
}
