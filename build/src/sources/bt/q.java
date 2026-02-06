package bt;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f7074a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7075b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f7076c;

    /* renamed from: d  reason: collision with root package name */
    private final m f7077d;

    public /* synthetic */ q(b bVar, String str, Object obj, m mVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? bVar.getName() : str, (i10 & 4) != 0 ? null : obj, (i10 & 8) != 0 ? null : mVar);
    }

    @Override // bt.n
    public Object a() {
        return this.f7076c;
    }

    @Override // bt.n
    public b b() {
        return this.f7074a;
    }

    @Override // bt.n
    public m c() {
        return this.f7077d;
    }

    @Override // bt.n
    public String getName() {
        return this.f7075b;
    }

    public q(b accessor, String name, Object obj, m mVar) {
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f7074a = accessor;
        this.f7075b = name;
        this.f7076c = obj;
        this.f7077d = mVar;
    }
}
