package mt;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f37170a;

    /* renamed from: b  reason: collision with root package name */
    private final int f37171b;

    /* renamed from: c  reason: collision with root package name */
    private final int f37172c;

    /* renamed from: d  reason: collision with root package name */
    private final String f37173d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f37174e;

    /* renamed from: f  reason: collision with root package name */
    private final m f37175f;

    /* renamed from: g  reason: collision with root package name */
    private final int f37176g;

    public /* synthetic */ b0(b bVar, int i10, int i11, String str, Integer num, m mVar, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, i10, i11, (i12 & 8) != 0 ? bVar.getName() : str, (i12 & 16) != 0 ? null : num, (i12 & 32) != 0 ? null : mVar);
    }

    @Override // mt.n
    public b b() {
        return this.f37170a;
    }

    @Override // mt.n
    public m c() {
        return this.f37175f;
    }

    @Override // mt.n
    /* renamed from: d */
    public Integer a() {
        return this.f37174e;
    }

    public final int e() {
        return this.f37176g;
    }

    public final int f() {
        return this.f37172c;
    }

    public final int g() {
        return this.f37171b;
    }

    @Override // mt.n
    public String getName() {
        return this.f37173d;
    }

    public b0(b accessor, int i10, int i11, String name, Integer num, m mVar) {
        int i12;
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f37170a = accessor;
        this.f37171b = i10;
        this.f37172c = i11;
        this.f37173d = name;
        this.f37174e = num;
        this.f37175f = mVar;
        if (i11 < 10) {
            i12 = 1;
        } else if (i11 < 100) {
            i12 = 2;
        } else if (i11 >= 1000) {
            throw new IllegalArgumentException("Max value " + i11 + " is too large");
        } else {
            i12 = 3;
        }
        this.f37176g = i12;
    }
}
