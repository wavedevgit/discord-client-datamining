package hi;

import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public enum h implements e {
    INSTANCE;
    

    /* renamed from: e  reason: collision with root package name */
    private static final AtomicReference f25876e = new AtomicReference(null);

    public final void a(f fVar) {
        f25876e.set(fVar);
    }

    @Override // hi.e
    public final f zza() {
        return (f) f25876e.get();
    }
}
