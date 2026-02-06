package k5;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f31499a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f31500b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f31501c;

    /* renamed from: d  reason: collision with root package name */
    private final int f31502d;

    /* renamed from: e  reason: collision with root package name */
    private final x4.n f31503e;

    public q(boolean z10, boolean z11, boolean z12, int i10, x4.n nVar) {
        this.f31499a = z10;
        this.f31500b = z11;
        this.f31501c = z12;
        this.f31502d = i10;
        this.f31503e = nVar;
    }

    public final boolean a() {
        return this.f31499a;
    }

    public final x4.n b() {
        return this.f31503e;
    }

    public final int c() {
        return this.f31502d;
    }

    public final boolean d() {
        return this.f31500b;
    }

    public final boolean e() {
        return this.f31501c;
    }

    public /* synthetic */ q(boolean z10, boolean z11, boolean z12, int i10, x4.n nVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? true : z10, (i11 & 2) != 0 ? true : z11, (i11 & 4) != 0 ? true : z12, (i11 & 8) != 0 ? 4 : i10, (i11 & 16) != 0 ? x4.n.f54488e : nVar);
    }
}
