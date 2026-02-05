package com.google.firebase.messaging;

import androidx.annotation.Keep;
import com.google.firebase.components.ComponentRegistrar;
import java.util.Arrays;
import java.util.List;
@Keep
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FirebaseMessagingRegistrar implements ComponentRegistrar {
    private static final String LIBRARY_NAME = "fire-fcm";

    public static /* synthetic */ FirebaseMessaging a(ti.d0 d0Var, ti.d dVar) {
        android.support.v4.media.session.b.a(dVar.a(dj.a.class));
        return new FirebaseMessaging((qi.e) dVar.a(qi.e.class), null, dVar.e(mj.i.class), dVar.e(cj.j.class), (fj.e) dVar.a(fj.e.class), dVar.c(d0Var), (bj.d) dVar.a(bj.d.class));
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    @Keep
    public List<ti.c> getComponents() {
        final ti.d0 a10 = ti.d0.a(vi.b.class, xb.i.class);
        return Arrays.asList(ti.c.c(FirebaseMessaging.class).g(LIBRARY_NAME).b(ti.q.j(qi.e.class)).b(ti.q.g(dj.a.class)).b(ti.q.h(mj.i.class)).b(ti.q.h(cj.j.class)).b(ti.q.j(fj.e.class)).b(ti.q.i(a10)).b(ti.q.j(bj.d.class)).e(new ti.g() { // from class: com.google.firebase.messaging.a0
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return FirebaseMessagingRegistrar.a(ti.d0.this, dVar);
            }
        }).c().d(), mj.h.b(LIBRARY_NAME, "24.0.0"));
    }
}
