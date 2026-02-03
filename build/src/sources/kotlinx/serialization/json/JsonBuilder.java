package kotlinx.serialization.json;

import ct.d;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JsonBuilder {

    /* renamed from: a  reason: collision with root package name */
    private boolean f36191a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f36192b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36193c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f36194d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f36195e;

    /* renamed from: f  reason: collision with root package name */
    private String f36196f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f36197g;

    /* renamed from: h  reason: collision with root package name */
    private String f36198h;

    /* renamed from: i  reason: collision with root package name */
    private ct.a f36199i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f36200j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f36201k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f36202l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f36203m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f36204n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36205o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f36206p;

    /* renamed from: q  reason: collision with root package name */
    private et.b f36207q;

    public JsonBuilder(Json json) {
        Intrinsics.checkNotNullParameter(json, "json");
        this.f36191a = json.e().i();
        this.f36192b = json.e().j();
        this.f36193c = json.e().k();
        this.f36194d = json.e().q();
        this.f36195e = json.e().m();
        this.f36196f = json.e().n();
        this.f36197g = json.e().g();
        this.f36198h = json.e().e();
        this.f36199i = json.e().f();
        this.f36200j = json.e().o();
        json.e().l();
        this.f36201k = json.e().h();
        this.f36202l = json.e().d();
        this.f36203m = json.e().a();
        this.f36204n = json.e().b();
        this.f36205o = json.e().c();
        this.f36206p = json.e().p();
        this.f36207q = json.a();
    }

    public final d a() {
        if (this.f36206p) {
            if (Intrinsics.areEqual(this.f36198h, "type")) {
                if (this.f36199i != ct.a.f20797i) {
                    throw new IllegalArgumentException("useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.");
                }
            } else {
                throw new IllegalArgumentException("Class discriminator should not be specified when array polymorphism is specified");
            }
        }
        if (!this.f36195e) {
            if (!Intrinsics.areEqual(this.f36196f, "    ")) {
                throw new IllegalArgumentException("Indent should not be specified when default printing mode is used");
            }
        } else if (!Intrinsics.areEqual(this.f36196f, "    ")) {
            String str = this.f36196f;
            for (int i10 = 0; i10 < str.length(); i10++) {
                char charAt = str.charAt(i10);
                if (charAt != ' ' && charAt != '\t' && charAt != '\r' && charAt != '\n') {
                    throw new IllegalArgumentException(("Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had " + this.f36196f).toString());
                }
            }
        }
        return new d(this.f36191a, this.f36193c, this.f36194d, this.f36205o, this.f36195e, this.f36192b, this.f36196f, this.f36197g, this.f36206p, this.f36198h, this.f36204n, this.f36200j, null, this.f36201k, this.f36202l, this.f36203m, this.f36199i);
    }

    public final et.b b() {
        return this.f36207q;
    }

    public final void c(boolean z10) {
        this.f36193c = z10;
    }
}
