package pg;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k1 extends m0 {

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f45514o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f45515p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f45516q = 1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k1(Object[] objArr, int i10, int i11) {
        this.f45514o = objArr;
        this.f45515p = i10;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        el.a(i10, this.f45516q, "index");
        Object obj = this.f45514o[i10 + i10 + this.f45515p];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f45516q;
    }
}
