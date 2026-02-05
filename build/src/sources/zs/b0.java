package zs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f56219a;

    /* renamed from: b  reason: collision with root package name */
    private final int f56220b;

    /* renamed from: c  reason: collision with root package name */
    private final int f56221c;

    /* renamed from: d  reason: collision with root package name */
    private final String f56222d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f56223e;

    /* renamed from: f  reason: collision with root package name */
    private final m f56224f;

    /* renamed from: g  reason: collision with root package name */
    private final int f56225g;

    public /* synthetic */ b0(b bVar, int i10, int i11, String str, Integer num, m mVar, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, i10, i11, (i12 & 8) != 0 ? bVar.getName() : str, (i12 & 16) != 0 ? null : num, (i12 & 32) != 0 ? null : mVar);
    }

    @Override // zs.n
    public b b() {
        return this.f56219a;
    }

    @Override // zs.n
    public m c() {
        return this.f56224f;
    }

    @Override // zs.n
    /* renamed from: d */
    public Integer a() {
        return this.f56223e;
    }

    public final int e() {
        return this.f56225g;
    }

    public final int f() {
        return this.f56221c;
    }

    public final int g() {
        return this.f56220b;
    }

    @Override // zs.n
    public String getName() {
        return this.f56222d;
    }

    public b0(b accessor, int i10, int i11, String name, Integer num, m mVar) {
        int i12;
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f56219a = accessor;
        this.f56220b = i10;
        this.f56221c = i11;
        this.f56222d = name;
        this.f56223e = num;
        this.f56224f = mVar;
        if (i11 < 10) {
            i12 = 1;
        } else if (i11 < 100) {
            i12 = 2;
        } else if (i11 >= 1000) {
            throw new IllegalArgumentException("Max value " + i11 + " is too large");
        } else {
            i12 = 3;
        }
        this.f56225g = i12;
    }
}
