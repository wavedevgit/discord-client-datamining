package k5;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f31655a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f31656b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f31657c;

    /* renamed from: d  reason: collision with root package name */
    private final int f31658d;

    /* renamed from: e  reason: collision with root package name */
    private final x4.n f31659e;

    public q(boolean z10, boolean z11, boolean z12, int i10, x4.n nVar) {
        this.f31655a = z10;
        this.f31656b = z11;
        this.f31657c = z12;
        this.f31658d = i10;
        this.f31659e = nVar;
    }

    public final boolean a() {
        return this.f31655a;
    }

    public final x4.n b() {
        return this.f31659e;
    }

    public final int c() {
        return this.f31658d;
    }

    public final boolean d() {
        return this.f31656b;
    }

    public final boolean e() {
        return this.f31657c;
    }

    public /* synthetic */ q(boolean z10, boolean z11, boolean z12, int i10, x4.n nVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? true : z10, (i11 & 2) != 0 ? true : z11, (i11 & 4) != 0 ? true : z12, (i11 & 8) != 0 ? 4 : i10, (i11 & 16) != 0 ? x4.n.f53669e : nVar);
    }
}
