package ff;

import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j0 extends x {

    /* renamed from: c  reason: collision with root package name */
    private final ef.d f24334c;

    public j0(ef.d dVar) {
        super("Method is not supported by connectionless client. APIs supporting connectionless client must not call this method.");
        this.f24334c = dVar;
    }

    @Override // ef.e
    public final com.google.android.gms.common.api.internal.a a(com.google.android.gms.common.api.internal.a aVar) {
        return this.f24334c.q(aVar);
    }

    @Override // ef.e
    public final Looper c() {
        return this.f24334c.w();
    }
}
