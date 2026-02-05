package ng;

import java.util.AbstractMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class sc extends mc {

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ tc f40999i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public sc(tc tcVar) {
        this.f40999i = tcVar;
    }

    @Override // java.util.List
    public final /* bridge */ /* synthetic */ Object get(int i10) {
        int i11;
        Object[] objArr;
        Object[] objArr2;
        i11 = this.f40999i.f41071p;
        f4.a(i10, i11, "index");
        tc tcVar = this.f40999i;
        objArr = tcVar.f41070o;
        int i12 = i10 + i10;
        Object obj = objArr[i12];
        obj.getClass();
        objArr2 = tcVar.f41070o;
        Object obj2 = objArr2[i12 + 1];
        obj2.getClass();
        return new AbstractMap.SimpleImmutableEntry(obj, obj2);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        int i10;
        i10 = this.f40999i.f41071p;
        return i10;
    }
}
