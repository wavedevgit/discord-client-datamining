package bt;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f7048a;

    /* renamed from: b  reason: collision with root package name */
    private final int f7049b;

    /* renamed from: c  reason: collision with root package name */
    private final int f7050c;

    /* renamed from: d  reason: collision with root package name */
    private final String f7051d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f7052e;

    /* renamed from: f  reason: collision with root package name */
    private final m f7053f;

    /* renamed from: g  reason: collision with root package name */
    private final int f7054g;

    public /* synthetic */ b0(b bVar, int i10, int i11, String str, Integer num, m mVar, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, i10, i11, (i12 & 8) != 0 ? bVar.getName() : str, (i12 & 16) != 0 ? null : num, (i12 & 32) != 0 ? null : mVar);
    }

    @Override // bt.n
    public b b() {
        return this.f7048a;
    }

    @Override // bt.n
    public m c() {
        return this.f7053f;
    }

    @Override // bt.n
    /* renamed from: d */
    public Integer a() {
        return this.f7052e;
    }

    public final int e() {
        return this.f7054g;
    }

    public final int f() {
        return this.f7050c;
    }

    public final int g() {
        return this.f7049b;
    }

    @Override // bt.n
    public String getName() {
        return this.f7051d;
    }

    public b0(b accessor, int i10, int i11, String name, Integer num, m mVar) {
        int i12;
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f7048a = accessor;
        this.f7049b = i10;
        this.f7050c = i11;
        this.f7051d = name;
        this.f7052e = num;
        this.f7053f = mVar;
        if (i11 < 10) {
            i12 = 1;
        } else if (i11 < 100) {
            i12 = 2;
        } else if (i11 >= 1000) {
            throw new IllegalArgumentException("Max value " + i11 + " is too large");
        } else {
            i12 = 3;
        }
        this.f7054g = i12;
    }
}
