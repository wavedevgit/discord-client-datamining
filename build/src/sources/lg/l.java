package lg;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends f {

    /* renamed from: q  reason: collision with root package name */
    static final f f37329q = new l(new Object[0], 0);

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f37330o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f37331p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(Object[] objArr, int i10) {
        this.f37330o = objArr;
        this.f37331p = i10;
    }

    @Override // lg.f, lg.c
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f37330o, 0, objArr, 0, this.f37331p);
        return this.f37331p;
    }

    @Override // lg.c
    final int c() {
        return this.f37331p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lg.c
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lg.c
    public final Object[] e() {
        return this.f37330o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t0.a(i10, this.f37331p, "index");
        Object obj = this.f37330o[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f37331p;
    }
}
