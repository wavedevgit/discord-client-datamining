package kotlinx.serialization.json;

import kotlin.jvm.internal.Intrinsics;
import kt.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JsonBuilder {

    /* renamed from: a  reason: collision with root package name */
    private boolean f35173a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f35174b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f35175c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f35176d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f35177e;

    /* renamed from: f  reason: collision with root package name */
    private String f35178f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f35179g;

    /* renamed from: h  reason: collision with root package name */
    private String f35180h;

    /* renamed from: i  reason: collision with root package name */
    private kt.a f35181i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f35182j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f35183k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f35184l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f35185m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f35186n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35187o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f35188p;

    /* renamed from: q  reason: collision with root package name */
    private mt.b f35189q;

    public JsonBuilder(Json json) {
        Intrinsics.checkNotNullParameter(json, "json");
        this.f35173a = json.e().i();
        this.f35174b = json.e().j();
        this.f35175c = json.e().k();
        this.f35176d = json.e().q();
        this.f35177e = json.e().m();
        this.f35178f = json.e().n();
        this.f35179g = json.e().g();
        this.f35180h = json.e().e();
        this.f35181i = json.e().f();
        this.f35182j = json.e().o();
        json.e().l();
        this.f35183k = json.e().h();
        this.f35184l = json.e().d();
        this.f35185m = json.e().a();
        this.f35186n = json.e().b();
        this.f35187o = json.e().c();
        this.f35188p = json.e().p();
        this.f35189q = json.a();
    }

    public final d a() {
        if (this.f35188p) {
            if (Intrinsics.areEqual(this.f35180h, "type")) {
                if (this.f35181i != kt.a.f35541i) {
                    throw new IllegalArgumentException("useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.");
                }
            } else {
                throw new IllegalArgumentException("Class discriminator should not be specified when array polymorphism is specified");
            }
        }
        if (!this.f35177e) {
            if (!Intrinsics.areEqual(this.f35178f, "    ")) {
                throw new IllegalArgumentException("Indent should not be specified when default printing mode is used");
            }
        } else if (!Intrinsics.areEqual(this.f35178f, "    ")) {
            String str = this.f35178f;
            for (int i10 = 0; i10 < str.length(); i10++) {
                char charAt = str.charAt(i10);
                if (charAt != ' ' && charAt != '\t' && charAt != '\r' && charAt != '\n') {
                    throw new IllegalArgumentException(("Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had " + this.f35178f).toString());
                }
            }
        }
        return new d(this.f35173a, this.f35175c, this.f35176d, this.f35187o, this.f35177e, this.f35174b, this.f35178f, this.f35179g, this.f35188p, this.f35180h, this.f35186n, this.f35182j, null, this.f35183k, this.f35184l, this.f35185m, this.f35181i);
    }

    public final mt.b b() {
        return this.f35189q;
    }

    public final void c(boolean z10) {
        this.f35175c = z10;
    }
}
