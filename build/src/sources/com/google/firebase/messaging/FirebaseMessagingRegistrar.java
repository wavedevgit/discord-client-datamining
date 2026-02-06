package com.google.firebase.messaging;

import androidx.annotation.Keep;
import com.google.firebase.components.ComponentRegistrar;
import java.util.Arrays;
import java.util.List;
@Keep
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FirebaseMessagingRegistrar implements ComponentRegistrar {
    private static final String LIBRARY_NAME = "fire-fcm";

    public static /* synthetic */ FirebaseMessaging a(ui.d0 d0Var, ui.d dVar) {
        android.support.v4.media.session.b.a(dVar.a(ej.a.class));
        return new FirebaseMessaging((ri.e) dVar.a(ri.e.class), null, dVar.g(nj.i.class), dVar.g(dj.j.class), (gj.e) dVar.a(gj.e.class), dVar.f(d0Var), (cj.d) dVar.a(cj.d.class));
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    @Keep
    public List<ui.c> getComponents() {
        final ui.d0 a10 = ui.d0.a(wi.b.class, xb.i.class);
        return Arrays.asList(ui.c.c(FirebaseMessaging.class).g(LIBRARY_NAME).b(ui.q.j(ri.e.class)).b(ui.q.g(ej.a.class)).b(ui.q.h(nj.i.class)).b(ui.q.h(dj.j.class)).b(ui.q.j(gj.e.class)).b(ui.q.i(a10)).b(ui.q.j(cj.d.class)).e(new ui.g() { // from class: com.google.firebase.messaging.a0
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return FirebaseMessagingRegistrar.a(ui.d0.this, dVar);
            }
        }).c().d(), nj.h.b(LIBRARY_NAME, "24.0.0"));
    }
}
