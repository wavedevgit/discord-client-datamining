package com.google.firebase.messaging;

import androidx.annotation.Keep;
import com.google.firebase.components.ComponentRegistrar;
import java.util.Arrays;
import java.util.List;
@Keep
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FirebaseMessagingRegistrar implements ComponentRegistrar {
    private static final String LIBRARY_NAME = "fire-fcm";

    public static /* synthetic */ FirebaseMessaging a(xi.d0 d0Var, xi.d dVar) {
        android.support.v4.media.session.b.a(dVar.a(hj.a.class));
        return new FirebaseMessaging((ui.e) dVar.a(ui.e.class), null, dVar.g(qj.i.class), dVar.g(gj.j.class), (jj.e) dVar.a(jj.e.class), dVar.c(d0Var), (fj.d) dVar.a(fj.d.class));
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    @Keep
    public List<xi.c> getComponents() {
        final xi.d0 a10 = xi.d0.a(zi.b.class, yb.i.class);
        return Arrays.asList(xi.c.c(FirebaseMessaging.class).g(LIBRARY_NAME).b(xi.q.j(ui.e.class)).b(xi.q.g(hj.a.class)).b(xi.q.h(qj.i.class)).b(xi.q.h(gj.j.class)).b(xi.q.j(jj.e.class)).b(xi.q.i(a10)).b(xi.q.j(fj.d.class)).e(new xi.g() { // from class: com.google.firebase.messaging.a0
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return FirebaseMessagingRegistrar.a(xi.d0.this, dVar);
            }
        }).c().d(), qj.h.b(LIBRARY_NAME, "24.0.0"));
    }
}
