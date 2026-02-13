package kotlinx.serialization.json;

import kotlin.jvm.internal.Intrinsics;
import ut.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JsonBuilder {

    /* renamed from: a  reason: collision with root package name */
    private boolean f35673a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f35674b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f35675c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f35676d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f35677e;

    /* renamed from: f  reason: collision with root package name */
    private String f35678f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f35679g;

    /* renamed from: h  reason: collision with root package name */
    private String f35680h;

    /* renamed from: i  reason: collision with root package name */
    private ut.a f35681i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f35682j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f35683k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f35684l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f35685m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f35686n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35687o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f35688p;

    /* renamed from: q  reason: collision with root package name */
    private wt.b f35689q;

    public JsonBuilder(Json json) {
        Intrinsics.checkNotNullParameter(json, "json");
        this.f35673a = json.e().i();
        this.f35674b = json.e().j();
        this.f35675c = json.e().k();
        this.f35676d = json.e().q();
        this.f35677e = json.e().m();
        this.f35678f = json.e().n();
        this.f35679g = json.e().g();
        this.f35680h = json.e().e();
        this.f35681i = json.e().f();
        this.f35682j = json.e().o();
        json.e().l();
        this.f35683k = json.e().h();
        this.f35684l = json.e().d();
        this.f35685m = json.e().a();
        this.f35686n = json.e().b();
        this.f35687o = json.e().c();
        this.f35688p = json.e().p();
        this.f35689q = json.a();
    }

    public final d a() {
        if (this.f35688p) {
            if (Intrinsics.areEqual(this.f35680h, "type")) {
                if (this.f35681i != ut.a.f51794i) {
                    throw new IllegalArgumentException("useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.");
                }
            } else {
                throw new IllegalArgumentException("Class discriminator should not be specified when array polymorphism is specified");
            }
        }
        if (!this.f35677e) {
            if (!Intrinsics.areEqual(this.f35678f, "    ")) {
                throw new IllegalArgumentException("Indent should not be specified when default printing mode is used");
            }
        } else if (!Intrinsics.areEqual(this.f35678f, "    ")) {
            String str = this.f35678f;
            for (int i10 = 0; i10 < str.length(); i10++) {
                char charAt = str.charAt(i10);
                if (charAt != ' ' && charAt != '\t' && charAt != '\r' && charAt != '\n') {
                    throw new IllegalArgumentException(("Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had " + this.f35678f).toString());
                }
            }
        }
        return new d(this.f35673a, this.f35675c, this.f35676d, this.f35687o, this.f35677e, this.f35674b, this.f35678f, this.f35679g, this.f35688p, this.f35680h, this.f35686n, this.f35682j, null, this.f35683k, this.f35684l, this.f35685m, this.f35681i);
    }

    public final wt.b b() {
        return this.f35689q;
    }

    public final void c(boolean z10) {
        this.f35675c = z10;
    }
}
