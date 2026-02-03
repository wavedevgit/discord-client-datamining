package ji;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r extends e implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f31914d;

    /* renamed from: e  reason: collision with root package name */
    final Object f31915e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(Object obj, Object obj2) {
        this.f31914d = obj;
        this.f31915e = obj2;
    }

    @Override // ji.e, java.util.Map.Entry
    public final Object getKey() {
        return this.f31914d;
    }

    @Override // ji.e, java.util.Map.Entry
    public final Object getValue() {
        return this.f31915e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}
