package ct;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f20229a;

    /* renamed from: b  reason: collision with root package name */
    private final String f20230b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f20231c;

    /* renamed from: d  reason: collision with root package name */
    private final m f20232d;

    public /* synthetic */ q(b bVar, String str, Object obj, m mVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? bVar.getName() : str, (i10 & 4) != 0 ? null : obj, (i10 & 8) != 0 ? null : mVar);
    }

    @Override // ct.n
    public Object a() {
        return this.f20231c;
    }

    @Override // ct.n
    public b b() {
        return this.f20229a;
    }

    @Override // ct.n
    public m c() {
        return this.f20232d;
    }

    @Override // ct.n
    public String getName() {
        return this.f20230b;
    }

    public q(b accessor, String name, Object obj, m mVar) {
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f20229a = accessor;
        this.f20230b = name;
        this.f20231c = obj;
        this.f20232d = mVar;
    }
}
