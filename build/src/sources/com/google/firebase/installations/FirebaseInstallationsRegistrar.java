package com.google.firebase.installations;

import androidx.annotation.Keep;
import com.google.firebase.components.ComponentRegistrar;
import com.google.firebase.installations.FirebaseInstallationsRegistrar;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import qi.d0;
import qi.q;
@Keep
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FirebaseInstallationsRegistrar implements ComponentRegistrar {
    private static final String LIBRARY_NAME = "fire-installations";

    public static /* synthetic */ cj.e a(qi.d dVar) {
        return new c((ni.e) dVar.a(ni.e.class), dVar.c(zi.i.class), (ExecutorService) dVar.d(d0.a(pi.a.class, ExecutorService.class)), ri.i.a((Executor) dVar.d(d0.a(pi.b.class, Executor.class))));
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    public List<qi.c> getComponents() {
        return Arrays.asList(qi.c.c(cj.e.class).g(LIBRARY_NAME).b(q.j(ni.e.class)).b(q.h(zi.i.class)).b(q.k(d0.a(pi.a.class, ExecutorService.class))).b(q.k(d0.a(pi.b.class, Executor.class))).e(new qi.g() { // from class: cj.f
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return FirebaseInstallationsRegistrar.a(dVar);
            }
        }).d(), zi.h.a(), jj.h.b(LIBRARY_NAME, "17.2.0"));
    }
}
