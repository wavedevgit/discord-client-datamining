package us;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f50657a;

    /* renamed from: b  reason: collision with root package name */
    private final String f50658b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f50659c;

    /* renamed from: d  reason: collision with root package name */
    private final m f50660d;

    public /* synthetic */ q(b bVar, String str, Object obj, m mVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? bVar.getName() : str, (i10 & 4) != 0 ? null : obj, (i10 & 8) != 0 ? null : mVar);
    }

    @Override // us.n
    public Object a() {
        return this.f50659c;
    }

    @Override // us.n
    public b b() {
        return this.f50657a;
    }

    @Override // us.n
    public m c() {
        return this.f50660d;
    }

    @Override // us.n
    public String getName() {
        return this.f50658b;
    }

    public q(b accessor, String name, Object obj, m mVar) {
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f50657a = accessor;
        this.f50658b = name;
        this.f50659c = obj;
        this.f50660d = mVar;
    }
}
