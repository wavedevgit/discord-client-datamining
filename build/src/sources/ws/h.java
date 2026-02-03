package ws;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements o {

    /* renamed from: a  reason: collision with root package name */
    private final List f52712a;

    public h(List formats) {
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f52712a = formats;
    }

    @Override // ws.o
    public xs.e a() {
        List<s> list = this.f52712a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (s sVar : list) {
            arrayList.add(sVar.a());
        }
        if (arrayList.size() == 1) {
            return (xs.e) CollectionsKt.Q0(arrayList);
        }
        return new xs.a(arrayList);
    }

    @Override // ws.o
    public ys.q b() {
        List<s> list = this.f52712a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (s sVar : list) {
            arrayList.add(sVar.b());
        }
        return ys.n.b(arrayList);
    }

    public final List c() {
        return this.f52712a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof h) && Intrinsics.areEqual(this.f52712a, ((h) obj).f52712a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f52712a.hashCode();
    }

    public String toString() {
        return "ConcatenatedFormatStructure(" + CollectionsKt.x0(this.f52712a, ", ", null, null, 0, null, null, 62, null) + ')';
    }
}
