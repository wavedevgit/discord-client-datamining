package ii;

import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public enum h implements e {
    INSTANCE;
    

    /* renamed from: e  reason: collision with root package name */
    private static final AtomicReference f26779e = new AtomicReference(null);

    public final void a(f fVar) {
        f26779e.set(fVar);
    }

    @Override // ii.e
    public final f zza() {
        return (f) f26779e.get();
    }
}
