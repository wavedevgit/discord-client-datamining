package mt;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements o {

    /* renamed from: a  reason: collision with root package name */
    private final List f37189a;

    public h(List formats) {
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f37189a = formats;
    }

    @Override // mt.o
    public nt.e a() {
        List<s> list = this.f37189a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (s sVar : list) {
            arrayList.add(sVar.a());
        }
        if (arrayList.size() == 1) {
            return (nt.e) CollectionsKt.Q0(arrayList);
        }
        return new nt.a(arrayList);
    }

    @Override // mt.o
    public ot.q b() {
        List<s> list = this.f37189a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (s sVar : list) {
            arrayList.add(sVar.b());
        }
        return ot.n.b(arrayList);
    }

    public final List c() {
        return this.f37189a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof h) && Intrinsics.areEqual(this.f37189a, ((h) obj).f37189a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f37189a.hashCode();
    }

    public String toString() {
        return "ConcatenatedFormatStructure(" + CollectionsKt.x0(this.f37189a, ", ", null, null, 0, null, null, 62, null) + ')';
    }
}
