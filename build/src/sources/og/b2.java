package og;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b2 extends i1 {

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f39676o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f39677p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f39678q = 1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b2(Object[] objArr, int i10, int i11) {
        this.f39676o = objArr;
        this.f39677p = i10;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f39678q, "index");
        Object obj = this.f39676o[i10 + i10 + this.f39677p];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f39678q;
    }
}
