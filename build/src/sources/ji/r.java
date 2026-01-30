package ji;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r extends e implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f32176d;

    /* renamed from: e  reason: collision with root package name */
    final Object f32177e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(Object obj, Object obj2) {
        this.f32176d = obj;
        this.f32177e = obj2;
    }

    @Override // ji.e, java.util.Map.Entry
    public final Object getKey() {
        return this.f32176d;
    }

    @Override // ji.e, java.util.Map.Entry
    public final Object getValue() {
        return this.f32177e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}
