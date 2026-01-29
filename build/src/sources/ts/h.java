package ts;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements o {

    /* renamed from: a  reason: collision with root package name */
    private final List f49876a;

    public h(List formats) {
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f49876a = formats;
    }

    @Override // ts.o
    public us.e a() {
        List<s> list = this.f49876a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (s sVar : list) {
            arrayList.add(sVar.a());
        }
        if (arrayList.size() == 1) {
            return (us.e) CollectionsKt.Q0(arrayList);
        }
        return new us.a(arrayList);
    }

    @Override // ts.o
    public vs.q b() {
        List<s> list = this.f49876a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (s sVar : list) {
            arrayList.add(sVar.b());
        }
        return vs.n.b(arrayList);
    }

    public final List c() {
        return this.f49876a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof h) && Intrinsics.areEqual(this.f49876a, ((h) obj).f49876a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f49876a.hashCode();
    }

    public String toString() {
        return "ConcatenatedFormatStructure(" + CollectionsKt.x0(this.f49876a, ", ", null, null, 0, null, null, 62, null) + ')';
    }
}
