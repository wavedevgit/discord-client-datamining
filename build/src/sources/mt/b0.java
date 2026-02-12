package mt;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f36602a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36603b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36604c;

    /* renamed from: d  reason: collision with root package name */
    private final String f36605d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f36606e;

    /* renamed from: f  reason: collision with root package name */
    private final m f36607f;

    /* renamed from: g  reason: collision with root package name */
    private final int f36608g;

    public /* synthetic */ b0(b bVar, int i10, int i11, String str, Integer num, m mVar, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, i10, i11, (i12 & 8) != 0 ? bVar.getName() : str, (i12 & 16) != 0 ? null : num, (i12 & 32) != 0 ? null : mVar);
    }

    @Override // mt.n
    public b b() {
        return this.f36602a;
    }

    @Override // mt.n
    public m c() {
        return this.f36607f;
    }

    @Override // mt.n
    /* renamed from: d */
    public Integer a() {
        return this.f36606e;
    }

    public final int e() {
        return this.f36608g;
    }

    public final int f() {
        return this.f36604c;
    }

    public final int g() {
        return this.f36603b;
    }

    @Override // mt.n
    public String getName() {
        return this.f36605d;
    }

    public b0(b accessor, int i10, int i11, String name, Integer num, m mVar) {
        int i12;
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f36602a = accessor;
        this.f36603b = i10;
        this.f36604c = i11;
        this.f36605d = name;
        this.f36606e = num;
        this.f36607f = mVar;
        if (i11 < 10) {
            i12 = 1;
        } else if (i11 < 100) {
            i12 = 2;
        } else if (i11 >= 1000) {
            throw new IllegalArgumentException("Max value " + i11 + " is too large");
        } else {
            i12 = 3;
        }
        this.f36608g = i12;
    }
}
