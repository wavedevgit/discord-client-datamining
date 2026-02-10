package ct;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements o {

    /* renamed from: a  reason: collision with root package name */
    private final List f20222a;

    public h(List formats) {
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f20222a = formats;
    }

    @Override // ct.o
    public dt.e a() {
        List<s> list = this.f20222a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (s sVar : list) {
            arrayList.add(sVar.a());
        }
        if (arrayList.size() == 1) {
            return (dt.e) CollectionsKt.Q0(arrayList);
        }
        return new dt.a(arrayList);
    }

    @Override // ct.o
    public et.q b() {
        List<s> list = this.f20222a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (s sVar : list) {
            arrayList.add(sVar.b());
        }
        return et.n.b(arrayList);
    }

    public final List c() {
        return this.f20222a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof h) && Intrinsics.areEqual(this.f20222a, ((h) obj).f20222a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f20222a.hashCode();
    }

    public String toString() {
        return "ConcatenatedFormatStructure(" + CollectionsKt.x0(this.f20222a, ", ", null, null, 0, null, null, 62, null) + ')';
    }
}
