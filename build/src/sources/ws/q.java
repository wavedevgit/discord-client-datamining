package ws;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f52719a;

    /* renamed from: b  reason: collision with root package name */
    private final String f52720b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f52721c;

    /* renamed from: d  reason: collision with root package name */
    private final m f52722d;

    public /* synthetic */ q(b bVar, String str, Object obj, m mVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? bVar.getName() : str, (i10 & 4) != 0 ? null : obj, (i10 & 8) != 0 ? null : mVar);
    }

    @Override // ws.n
    public Object a() {
        return this.f52721c;
    }

    @Override // ws.n
    public b b() {
        return this.f52719a;
    }

    @Override // ws.n
    public m c() {
        return this.f52722d;
    }

    @Override // ws.n
    public String getName() {
        return this.f52720b;
    }

    public q(b accessor, String name, Object obj, m mVar) {
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f52719a = accessor;
        this.f52720b = name;
        this.f52721c = obj;
        this.f52722d = mVar;
    }
}
