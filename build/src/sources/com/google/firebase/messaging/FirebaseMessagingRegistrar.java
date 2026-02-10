package com.google.firebase.messaging;

import androidx.annotation.Keep;
import com.google.firebase.components.ComponentRegistrar;
import java.util.Arrays;
import java.util.List;
@Keep
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FirebaseMessagingRegistrar implements ComponentRegistrar {
    private static final String LIBRARY_NAME = "fire-fcm";

    public static /* synthetic */ FirebaseMessaging a(vi.d0 d0Var, vi.d dVar) {
        android.support.v4.media.session.b.a(dVar.a(fj.a.class));
        return new FirebaseMessaging((si.e) dVar.a(si.e.class), null, dVar.e(oj.i.class), dVar.e(ej.j.class), (hj.e) dVar.a(hj.e.class), dVar.b(d0Var), (dj.d) dVar.a(dj.d.class));
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    @Keep
    public List<vi.c> getComponents() {
        final vi.d0 a10 = vi.d0.a(xi.b.class, yb.i.class);
        return Arrays.asList(vi.c.c(FirebaseMessaging.class).g(LIBRARY_NAME).b(vi.q.j(si.e.class)).b(vi.q.g(fj.a.class)).b(vi.q.h(oj.i.class)).b(vi.q.h(ej.j.class)).b(vi.q.j(hj.e.class)).b(vi.q.i(a10)).b(vi.q.j(dj.d.class)).e(new vi.g() { // from class: com.google.firebase.messaging.a0
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return FirebaseMessagingRegistrar.a(vi.d0.this, dVar);
            }
        }).c().d(), oj.h.b(LIBRARY_NAME, "24.0.0"));
    }
}
