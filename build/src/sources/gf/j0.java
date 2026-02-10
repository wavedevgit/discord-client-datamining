package gf;

import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j0 extends x {

    /* renamed from: c  reason: collision with root package name */
    private final ff.d f24337c;

    public j0(ff.d dVar) {
        super("Method is not supported by connectionless client. APIs supporting connectionless client must not call this method.");
        this.f24337c = dVar;
    }

    @Override // ff.e
    public final com.google.android.gms.common.api.internal.a a(com.google.android.gms.common.api.internal.a aVar) {
        return this.f24337c.q(aVar);
    }

    @Override // ff.e
    public final Looper c() {
        return this.f24337c.w();
    }
}
