package bt;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements o {

    /* renamed from: a  reason: collision with root package name */
    private final List f7067a;

    public h(List formats) {
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f7067a = formats;
    }

    @Override // bt.o
    public ct.e a() {
        List<s> list = this.f7067a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (s sVar : list) {
            arrayList.add(sVar.a());
        }
        if (arrayList.size() == 1) {
            return (ct.e) CollectionsKt.Q0(arrayList);
        }
        return new ct.a(arrayList);
    }

    @Override // bt.o
    public dt.q b() {
        List<s> list = this.f7067a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (s sVar : list) {
            arrayList.add(sVar.b());
        }
        return dt.n.b(arrayList);
    }

    public final List c() {
        return this.f7067a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof h) && Intrinsics.areEqual(this.f7067a, ((h) obj).f7067a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f7067a.hashCode();
    }

    public String toString() {
        return "ConcatenatedFormatStructure(" + CollectionsKt.x0(this.f7067a, ", ", null, null, 0, null, null, 62, null) + ')';
    }
}
