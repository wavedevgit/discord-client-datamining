package og;

import java.util.AbstractMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f1 extends p0 {

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ g1 f43012i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f1(g1 g1Var) {
        this.f43012i = g1Var;
    }

    @Override // java.util.List
    public final /* bridge */ /* synthetic */ Object get(int i10) {
        int i11;
        Object[] objArr;
        Object[] objArr2;
        i11 = this.f43012i.f43043p;
        c.a(i10, i11, "index");
        g1 g1Var = this.f43012i;
        int i12 = i10 + i10;
        objArr = g1Var.f43042o;
        Object obj = objArr[i12];
        obj.getClass();
        objArr2 = g1Var.f43042o;
        Object obj2 = objArr2[i12 + 1];
        obj2.getClass();
        return new AbstractMap.SimpleImmutableEntry(obj, obj2);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        int i10;
        i10 = this.f43012i.f43043p;
        return i10;
    }
}
