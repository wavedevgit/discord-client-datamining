package us;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f50631a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50632b;

    /* renamed from: c  reason: collision with root package name */
    private final int f50633c;

    /* renamed from: d  reason: collision with root package name */
    private final String f50634d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f50635e;

    /* renamed from: f  reason: collision with root package name */
    private final m f50636f;

    /* renamed from: g  reason: collision with root package name */
    private final int f50637g;

    public /* synthetic */ b0(b bVar, int i10, int i11, String str, Integer num, m mVar, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, i10, i11, (i12 & 8) != 0 ? bVar.getName() : str, (i12 & 16) != 0 ? null : num, (i12 & 32) != 0 ? null : mVar);
    }

    @Override // us.n
    public b b() {
        return this.f50631a;
    }

    @Override // us.n
    public m c() {
        return this.f50636f;
    }

    @Override // us.n
    /* renamed from: d */
    public Integer a() {
        return this.f50635e;
    }

    public final int e() {
        return this.f50637g;
    }

    public final int f() {
        return this.f50633c;
    }

    public final int g() {
        return this.f50632b;
    }

    @Override // us.n
    public String getName() {
        return this.f50634d;
    }

    public b0(b accessor, int i10, int i11, String name, Integer num, m mVar) {
        int i12;
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f50631a = accessor;
        this.f50632b = i10;
        this.f50633c = i11;
        this.f50634d = name;
        this.f50635e = num;
        this.f50636f = mVar;
        if (i11 < 10) {
            i12 = 1;
        } else if (i11 < 100) {
            i12 = 2;
        } else if (i11 >= 1000) {
            throw new IllegalArgumentException("Max value " + i11 + " is too large");
        } else {
            i12 = 3;
        }
        this.f50637g = i12;
    }
}
