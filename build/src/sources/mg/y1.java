package mg;

import java.util.AbstractMap;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y1 extends i1 {

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ z1 f38625o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y1(z1 z1Var) {
        this.f38625o = z1Var;
    }

    @Override // java.util.List
    public final /* bridge */ /* synthetic */ Object get(int i10) {
        int i11;
        Object[] objArr;
        Object[] objArr2;
        i11 = this.f38625o.f38809p;
        t.a(i10, i11, "index");
        objArr = this.f38625o.f38808o;
        int i12 = i10 + i10;
        Object obj = objArr[i12];
        Objects.requireNonNull(obj);
        objArr2 = this.f38625o.f38808o;
        Object obj2 = objArr2[i12 + 1];
        Objects.requireNonNull(obj2);
        return new AbstractMap.SimpleImmutableEntry(obj, obj2);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        int i10;
        i10 = this.f38625o.f38809p;
        return i10;
    }
}
