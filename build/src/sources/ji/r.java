package ji;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r extends e implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f32160d;

    /* renamed from: e  reason: collision with root package name */
    final Object f32161e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(Object obj, Object obj2) {
        this.f32160d = obj;
        this.f32161e = obj2;
    }

    @Override // ji.e, java.util.Map.Entry
    public final Object getKey() {
        return this.f32160d;
    }

    @Override // ji.e, java.util.Map.Entry
    public final Object getValue() {
        return this.f32161e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}
