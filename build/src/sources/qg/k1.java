package qg;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k1 extends m0 {

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f47354o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f47355p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f47356q = 1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k1(Object[] objArr, int i10, int i11) {
        this.f47354o = objArr;
        this.f47355p = i10;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        el.a(i10, this.f47356q, "index");
        Object obj = this.f47354o[i10 + i10 + this.f47355p];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f47356q;
    }
}
