package pg;

import java.util.AbstractMap;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h1 extends m0 {

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ i1 f45308o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(i1 i1Var) {
        this.f45308o = i1Var;
    }

    @Override // java.util.List
    public final /* bridge */ /* synthetic */ Object get(int i10) {
        int i11;
        Object[] objArr;
        Object[] objArr2;
        i11 = this.f45308o.f45335p;
        el.a(i10, i11, "index");
        objArr = this.f45308o.f45334o;
        int i12 = i10 + i10;
        Object obj = objArr[i12];
        Objects.requireNonNull(obj);
        objArr2 = this.f45308o.f45334o;
        Object obj2 = objArr2[i12 + 1];
        Objects.requireNonNull(obj2);
        return new AbstractMap.SimpleImmutableEntry(obj, obj2);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        int i10;
        i10 = this.f45308o.f45335p;
        return i10;
    }
}
