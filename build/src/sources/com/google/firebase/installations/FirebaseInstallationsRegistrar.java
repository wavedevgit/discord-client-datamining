package com.google.firebase.installations;

import androidx.annotation.Keep;
import com.google.firebase.components.ComponentRegistrar;
import com.google.firebase.installations.FirebaseInstallationsRegistrar;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import xi.d0;
import xi.q;
@Keep
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FirebaseInstallationsRegistrar implements ComponentRegistrar {
    private static final String LIBRARY_NAME = "fire-installations";

    public static /* synthetic */ jj.e a(xi.d dVar) {
        return new c((ui.e) dVar.a(ui.e.class), dVar.g(gj.i.class), (ExecutorService) dVar.f(d0.a(wi.a.class, ExecutorService.class)), yi.i.a((Executor) dVar.f(d0.a(wi.b.class, Executor.class))));
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    public List<xi.c> getComponents() {
        return Arrays.asList(xi.c.c(jj.e.class).g(LIBRARY_NAME).b(q.j(ui.e.class)).b(q.h(gj.i.class)).b(q.k(d0.a(wi.a.class, ExecutorService.class))).b(q.k(d0.a(wi.b.class, Executor.class))).e(new xi.g() { // from class: jj.f
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return FirebaseInstallationsRegistrar.a(dVar);
            }
        }).d(), gj.h.a(), qj.h.b(LIBRARY_NAME, "17.2.0"));
    }
}
