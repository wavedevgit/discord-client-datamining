package og;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l0 extends r implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f43373d;

    /* renamed from: e  reason: collision with root package name */
    final Object f43374e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0(Object obj, Object obj2) {
        this.f43373d = obj;
        this.f43374e = obj2;
    }

    @Override // og.r, java.util.Map.Entry
    public final Object getKey() {
        return this.f43373d;
    }

    @Override // og.r, java.util.Map.Entry
    public final Object getValue() {
        return this.f43374e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}
