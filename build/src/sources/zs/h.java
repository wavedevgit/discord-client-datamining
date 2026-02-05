package zs;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements o {

    /* renamed from: a  reason: collision with root package name */
    private final List f56238a;

    public h(List formats) {
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f56238a = formats;
    }

    @Override // zs.o
    public at.e a() {
        List<s> list = this.f56238a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (s sVar : list) {
            arrayList.add(sVar.a());
        }
        if (arrayList.size() == 1) {
            return (at.e) CollectionsKt.Q0(arrayList);
        }
        return new at.a(arrayList);
    }

    @Override // zs.o
    public bt.q b() {
        List<s> list = this.f56238a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (s sVar : list) {
            arrayList.add(sVar.b());
        }
        return bt.n.b(arrayList);
    }

    public final List c() {
        return this.f56238a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof h) && Intrinsics.areEqual(this.f56238a, ((h) obj).f56238a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f56238a.hashCode();
    }

    public String toString() {
        return "ConcatenatedFormatStructure(" + CollectionsKt.x0(this.f56238a, ", ", null, null, 0, null, null, 62, null) + ')';
    }
}
