package mt;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f36627a;

    /* renamed from: b  reason: collision with root package name */
    private final String f36628b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f36629c;

    /* renamed from: d  reason: collision with root package name */
    private final m f36630d;

    public /* synthetic */ q(b bVar, String str, Object obj, m mVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? bVar.getName() : str, (i10 & 4) != 0 ? null : obj, (i10 & 8) != 0 ? null : mVar);
    }

    @Override // mt.n
    public Object a() {
        return this.f36629c;
    }

    @Override // mt.n
    public b b() {
        return this.f36627a;
    }

    @Override // mt.n
    public m c() {
        return this.f36630d;
    }

    @Override // mt.n
    public String getName() {
        return this.f36628b;
    }

    public q(b accessor, String name, Object obj, m mVar) {
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f36627a = accessor;
        this.f36628b = name;
        this.f36629c = obj;
        this.f36630d = mVar;
    }
}
