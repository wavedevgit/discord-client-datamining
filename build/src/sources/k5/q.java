package k5;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f32142a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f32143b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f32144c;

    /* renamed from: d  reason: collision with root package name */
    private final int f32145d;

    /* renamed from: e  reason: collision with root package name */
    private final x4.n f32146e;

    public q(boolean z10, boolean z11, boolean z12, int i10, x4.n nVar) {
        this.f32142a = z10;
        this.f32143b = z11;
        this.f32144c = z12;
        this.f32145d = i10;
        this.f32146e = nVar;
    }

    public final boolean a() {
        return this.f32142a;
    }

    public final x4.n b() {
        return this.f32146e;
    }

    public final int c() {
        return this.f32145d;
    }

    public final boolean d() {
        return this.f32143b;
    }

    public final boolean e() {
        return this.f32144c;
    }

    public /* synthetic */ q(boolean z10, boolean z11, boolean z12, int i10, x4.n nVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? true : z10, (i11 & 2) != 0 ? true : z11, (i11 & 4) != 0 ? true : z12, (i11 & 8) != 0 ? 4 : i10, (i11 & 16) != 0 ? x4.n.f54929e : nVar);
    }
}
