package ws;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f52690a;

    /* renamed from: b  reason: collision with root package name */
    private final int f52691b;

    /* renamed from: c  reason: collision with root package name */
    private final int f52692c;

    /* renamed from: d  reason: collision with root package name */
    private final String f52693d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f52694e;

    /* renamed from: f  reason: collision with root package name */
    private final m f52695f;

    /* renamed from: g  reason: collision with root package name */
    private final int f52696g;

    public /* synthetic */ b0(b bVar, int i10, int i11, String str, Integer num, m mVar, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, i10, i11, (i12 & 8) != 0 ? bVar.getName() : str, (i12 & 16) != 0 ? null : num, (i12 & 32) != 0 ? null : mVar);
    }

    @Override // ws.n
    public b b() {
        return this.f52690a;
    }

    @Override // ws.n
    public m c() {
        return this.f52695f;
    }

    @Override // ws.n
    /* renamed from: d */
    public Integer a() {
        return this.f52694e;
    }

    public final int e() {
        return this.f52696g;
    }

    public final int f() {
        return this.f52692c;
    }

    public final int g() {
        return this.f52691b;
    }

    @Override // ws.n
    public String getName() {
        return this.f52693d;
    }

    public b0(b accessor, int i10, int i11, String name, Integer num, m mVar) {
        int i12;
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f52690a = accessor;
        this.f52691b = i10;
        this.f52692c = i11;
        this.f52693d = name;
        this.f52694e = num;
        this.f52695f = mVar;
        if (i11 < 10) {
            i12 = 1;
        } else if (i11 < 100) {
            i12 = 2;
        } else if (i11 >= 1000) {
            throw new IllegalArgumentException("Max value " + i11 + " is too large");
        } else {
            i12 = 3;
        }
        this.f52696g = i12;
    }
}
