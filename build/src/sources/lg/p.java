package lg;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p extends f {

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f37342o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f37343p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f37344q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Object[] objArr, int i10, int i11) {
        this.f37342o = objArr;
        this.f37343p = i10;
        this.f37344q = i11;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t0.a(i10, this.f37344q, "index");
        Object obj = this.f37342o[i10 + i10 + this.f37343p];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f37344q;
    }
}
