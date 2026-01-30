package ts;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f49873a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49874b;

    /* renamed from: c  reason: collision with root package name */
    private final int f49875c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49876d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f49877e;

    /* renamed from: f  reason: collision with root package name */
    private final m f49878f;

    /* renamed from: g  reason: collision with root package name */
    private final int f49879g;

    public /* synthetic */ b0(b bVar, int i10, int i11, String str, Integer num, m mVar, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, i10, i11, (i12 & 8) != 0 ? bVar.getName() : str, (i12 & 16) != 0 ? null : num, (i12 & 32) != 0 ? null : mVar);
    }

    @Override // ts.n
    public b b() {
        return this.f49873a;
    }

    @Override // ts.n
    public m c() {
        return this.f49878f;
    }

    @Override // ts.n
    /* renamed from: d */
    public Integer a() {
        return this.f49877e;
    }

    public final int e() {
        return this.f49879g;
    }

    public final int f() {
        return this.f49875c;
    }

    public final int g() {
        return this.f49874b;
    }

    @Override // ts.n
    public String getName() {
        return this.f49876d;
    }

    public b0(b accessor, int i10, int i11, String name, Integer num, m mVar) {
        int i12;
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f49873a = accessor;
        this.f49874b = i10;
        this.f49875c = i11;
        this.f49876d = name;
        this.f49877e = num;
        this.f49878f = mVar;
        if (i11 < 10) {
            i12 = 1;
        } else if (i11 < 100) {
            i12 = 2;
        } else if (i11 >= 1000) {
            throw new IllegalArgumentException("Max value " + i11 + " is too large");
        } else {
            i12 = 3;
        }
        this.f49879g = i12;
    }
}
