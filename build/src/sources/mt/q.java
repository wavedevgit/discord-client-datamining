package mt;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q extends a {

    /* renamed from: a  reason: collision with root package name */
    private final b f37196a;

    /* renamed from: b  reason: collision with root package name */
    private final String f37197b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f37198c;

    /* renamed from: d  reason: collision with root package name */
    private final m f37199d;

    public /* synthetic */ q(b bVar, String str, Object obj, m mVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? bVar.getName() : str, (i10 & 4) != 0 ? null : obj, (i10 & 8) != 0 ? null : mVar);
    }

    @Override // mt.n
    public Object a() {
        return this.f37198c;
    }

    @Override // mt.n
    public b b() {
        return this.f37196a;
    }

    @Override // mt.n
    public m c() {
        return this.f37199d;
    }

    @Override // mt.n
    public String getName() {
        return this.f37197b;
    }

    public q(b accessor, String name, Object obj, m mVar) {
        Intrinsics.checkNotNullParameter(accessor, "accessor");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f37196a = accessor;
        this.f37197b = name;
        this.f37198c = obj;
        this.f37199d = mVar;
    }
}
