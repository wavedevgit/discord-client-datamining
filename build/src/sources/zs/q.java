package zs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f56245a;

    /* renamed from: b  reason: collision with root package name */
    private final String f56246b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f56247c;

    /* renamed from: d  reason: collision with root package name */
    private final m f56248d;

    public /* synthetic */ q(b bVar, String str, Object obj, m mVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? bVar.getName() : str, (i10 & 4) != 0 ? null : obj, (i10 & 8) != 0 ? null : mVar);
    }

    @Override // zs.n
    public Object a() {
        return this.f56247c;
    }

    @Override // zs.n
    public b b() {
        return this.f56245a;
    }

    @Override // zs.n
    public m c() {
        return this.f56248d;
    }

    @Override // zs.n
    public String getName() {
        return this.f56246b;
    }

    public q(b accessor, String name, Object obj, m mVar) {
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f56245a = accessor;
        this.f56246b = name;
        this.f56247c = obj;
        this.f56248d = mVar;
    }
}
