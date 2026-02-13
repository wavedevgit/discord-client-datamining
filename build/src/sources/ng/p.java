package ng;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p extends f {

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f38447o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f38448p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f38449q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Object[] objArr, int i10, int i11) {
        this.f38447o = objArr;
        this.f38448p = i10;
        this.f38449q = i11;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t0.a(i10, this.f38449q, "index");
        Object obj = this.f38447o[i10 + i10 + this.f38448p];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f38449q;
    }
}
