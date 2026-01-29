package ei;

import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public enum h implements e {
    INSTANCE;
    

    /* renamed from: e  reason: collision with root package name */
    private static final AtomicReference f22809e = new AtomicReference(null);

    public final void a(f fVar) {
        f22809e.set(fVar);
    }

    @Override // ei.e
    public final f zza() {
        return (f) f22809e.get();
    }
}
