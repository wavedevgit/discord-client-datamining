package lg;

import java.util.AbstractMap;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m extends f {

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ n f36916o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar) {
        this.f36916o = nVar;
    }

    @Override // java.util.List
    public final /* bridge */ /* synthetic */ Object get(int i10) {
        int i11;
        Object[] objArr;
        Object[] objArr2;
        i11 = this.f36916o.f36919p;
        t0.a(i10, i11, "index");
        objArr = this.f36916o.f36918o;
        int i12 = i10 + i10;
        Object obj = objArr[i12];
        Objects.requireNonNull(obj);
        objArr2 = this.f36916o.f36918o;
        Object obj2 = objArr2[i12 + 1];
        Objects.requireNonNull(obj2);
        return new AbstractMap.SimpleImmutableEntry(obj, obj2);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        int i10;
        i10 = this.f36916o.f36919p;
        return i10;
    }
}
