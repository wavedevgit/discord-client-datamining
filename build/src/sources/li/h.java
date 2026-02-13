package li;

import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public enum h implements e {
    INSTANCE;
    

    /* renamed from: e  reason: collision with root package name */
    private static final AtomicReference f36408e = new AtomicReference(null);

    public final void a(f fVar) {
        f36408e.set(fVar);
    }

    @Override // li.e
    public final f zza() {
        return (f) f36408e.get();
    }
}
