package kotlinx.serialization.json;

import kotlin.jvm.internal.Intrinsics;
import lt.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JsonBuilder {

    /* renamed from: a  reason: collision with root package name */
    private boolean f34882a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f34883b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f34884c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f34885d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f34886e;

    /* renamed from: f  reason: collision with root package name */
    private String f34887f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f34888g;

    /* renamed from: h  reason: collision with root package name */
    private String f34889h;

    /* renamed from: i  reason: collision with root package name */
    private lt.a f34890i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f34891j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f34892k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f34893l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f34894m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f34895n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f34896o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f34897p;

    /* renamed from: q  reason: collision with root package name */
    private nt.b f34898q;

    public JsonBuilder(Json json) {
        Intrinsics.checkNotNullParameter(json, "json");
        this.f34882a = json.e().i();
        this.f34883b = json.e().j();
        this.f34884c = json.e().k();
        this.f34885d = json.e().q();
        this.f34886e = json.e().m();
        this.f34887f = json.e().n();
        this.f34888g = json.e().g();
        this.f34889h = json.e().e();
        this.f34890i = json.e().f();
        this.f34891j = json.e().o();
        json.e().l();
        this.f34892k = json.e().h();
        this.f34893l = json.e().d();
        this.f34894m = json.e().a();
        this.f34895n = json.e().b();
        this.f34896o = json.e().c();
        this.f34897p = json.e().p();
        this.f34898q = json.a();
    }

    public final d a() {
        if (this.f34897p) {
            if (Intrinsics.areEqual(this.f34889h, "type")) {
                if (this.f34890i != lt.a.f36620i) {
                    throw new IllegalArgumentException("useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.");
                }
            } else {
                throw new IllegalArgumentException("Class discriminator should not be specified when array polymorphism is specified");
            }
        }
        if (!this.f34886e) {
            if (!Intrinsics.areEqual(this.f34887f, "    ")) {
                throw new IllegalArgumentException("Indent should not be specified when default printing mode is used");
            }
        } else if (!Intrinsics.areEqual(this.f34887f, "    ")) {
            String str = this.f34887f;
            for (int i10 = 0; i10 < str.length(); i10++) {
                char charAt = str.charAt(i10);
                if (charAt != ' ' && charAt != '\t' && charAt != '\r' && charAt != '\n') {
                    throw new IllegalArgumentException(("Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had " + this.f34887f).toString());
                }
            }
        }
        return new d(this.f34882a, this.f34884c, this.f34885d, this.f34896o, this.f34886e, this.f34883b, this.f34887f, this.f34888g, this.f34897p, this.f34889h, this.f34895n, this.f34891j, null, this.f34892k, this.f34893l, this.f34894m, this.f34890i);
    }

    public final nt.b b() {
        return this.f34898q;
    }

    public final void c(boolean z10) {
        this.f34884c = z10;
    }
}
