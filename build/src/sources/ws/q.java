package ws;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f52716a;

    /* renamed from: b  reason: collision with root package name */
    private final String f52717b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f52718c;

    /* renamed from: d  reason: collision with root package name */
    private final m f52719d;

    public /* synthetic */ q(b bVar, String str, Object obj, m mVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? bVar.getName() : str, (i10 & 4) != 0 ? null : obj, (i10 & 8) != 0 ? null : mVar);
    }

    @Override // ws.n
    public Object a() {
        return this.f52718c;
    }

    @Override // ws.n
    public b b() {
        return this.f52716a;
    }

    @Override // ws.n
    public m c() {
        return this.f52719d;
    }

    @Override // ws.n
    public String getName() {
        return this.f52717b;
    }

    public q(b accessor, String name, Object obj, m mVar) {
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f52716a = accessor;
        this.f52717b = name;
        this.f52718c = obj;
        this.f52719d = mVar;
    }
}
