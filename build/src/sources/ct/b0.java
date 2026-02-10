package ct;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f20203a;

    /* renamed from: b  reason: collision with root package name */
    private final int f20204b;

    /* renamed from: c  reason: collision with root package name */
    private final int f20205c;

    /* renamed from: d  reason: collision with root package name */
    private final String f20206d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f20207e;

    /* renamed from: f  reason: collision with root package name */
    private final m f20208f;

    /* renamed from: g  reason: collision with root package name */
    private final int f20209g;

    public /* synthetic */ b0(b bVar, int i10, int i11, String str, Integer num, m mVar, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, i10, i11, (i12 & 8) != 0 ? bVar.getName() : str, (i12 & 16) != 0 ? null : num, (i12 & 32) != 0 ? null : mVar);
    }

    @Override // ct.n
    public b b() {
        return this.f20203a;
    }

    @Override // ct.n
    public m c() {
        return this.f20208f;
    }

    @Override // ct.n
    /* renamed from: d */
    public Integer a() {
        return this.f20207e;
    }

    public final int e() {
        return this.f20209g;
    }

    public final int f() {
        return this.f20205c;
    }

    public final int g() {
        return this.f20204b;
    }

    @Override // ct.n
    public String getName() {
        return this.f20206d;
    }

    public b0(b accessor, int i10, int i11, String name, Integer num, m mVar) {
        int i12;
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f20203a = accessor;
        this.f20204b = i10;
        this.f20205c = i11;
        this.f20206d = name;
        this.f20207e = num;
        this.f20208f = mVar;
        if (i11 < 10) {
            i12 = 1;
        } else if (i11 < 100) {
            i12 = 2;
        } else if (i11 >= 1000) {
            throw new IllegalArgumentException("Max value " + i11 + " is too large");
        } else {
            i12 = 3;
        }
        this.f20209g = i12;
    }
}
