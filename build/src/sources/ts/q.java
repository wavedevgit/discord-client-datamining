package ts;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f49883a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49884b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f49885c;

    /* renamed from: d  reason: collision with root package name */
    private final m f49886d;

    public /* synthetic */ q(b bVar, String str, Object obj, m mVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? bVar.getName() : str, (i10 & 4) != 0 ? null : obj, (i10 & 8) != 0 ? null : mVar);
    }

    @Override // ts.n
    public Object a() {
        return this.f49885c;
    }

    @Override // ts.n
    public b b() {
        return this.f49883a;
    }

    @Override // ts.n
    public m c() {
        return this.f49886d;
    }

    @Override // ts.n
    public String getName() {
        return this.f49884b;
    }

    public q(b accessor, String name, Object obj, m mVar) {
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f49883a = accessor;
        this.f49884b = name;
        this.f49885c = obj;
        this.f49886d = mVar;
    }
}
