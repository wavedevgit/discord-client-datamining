package com.google.firebase.messaging;

import androidx.annotation.Keep;
import com.google.firebase.components.ComponentRegistrar;
import java.util.Arrays;
import java.util.List;
@Keep
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FirebaseMessagingRegistrar implements ComponentRegistrar {
    private static final String LIBRARY_NAME = "fire-fcm";

    public static /* synthetic */ FirebaseMessaging a(qi.d0 d0Var, qi.d dVar) {
        android.support.v4.media.session.b.a(dVar.a(aj.a.class));
        return new FirebaseMessaging((ni.e) dVar.a(ni.e.class), null, dVar.c(jj.i.class), dVar.c(zi.j.class), (cj.e) dVar.a(cj.e.class), dVar.g(d0Var), (yi.d) dVar.a(yi.d.class));
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    @Keep
    public List<qi.c> getComponents() {
        final qi.d0 a10 = qi.d0.a(si.b.class, xb.i.class);
        return Arrays.asList(qi.c.c(FirebaseMessaging.class).g(LIBRARY_NAME).b(qi.q.j(ni.e.class)).b(qi.q.g(aj.a.class)).b(qi.q.h(jj.i.class)).b(qi.q.h(zi.j.class)).b(qi.q.j(cj.e.class)).b(qi.q.i(a10)).b(qi.q.j(yi.d.class)).e(new qi.g() { // from class: com.google.firebase.messaging.a0
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return FirebaseMessagingRegistrar.a(qi.d0.this, dVar);
            }
        }).c().d(), jj.h.b(LIBRARY_NAME, "24.0.0"));
    }
}
