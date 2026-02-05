package com.google.firebase.installations;

import androidx.annotation.Keep;
import com.google.firebase.components.ComponentRegistrar;
import com.google.firebase.installations.FirebaseInstallationsRegistrar;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import ti.d0;
import ti.q;
@Keep
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FirebaseInstallationsRegistrar implements ComponentRegistrar {
    private static final String LIBRARY_NAME = "fire-installations";

    public static /* synthetic */ fj.e a(ti.d dVar) {
        return new c((qi.e) dVar.a(qi.e.class), dVar.e(cj.i.class), (ExecutorService) dVar.g(d0.a(si.a.class, ExecutorService.class)), ui.i.a((Executor) dVar.g(d0.a(si.b.class, Executor.class))));
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    public List<ti.c> getComponents() {
        return Arrays.asList(ti.c.c(fj.e.class).g(LIBRARY_NAME).b(q.j(qi.e.class)).b(q.h(cj.i.class)).b(q.k(d0.a(si.a.class, ExecutorService.class))).b(q.k(d0.a(si.b.class, Executor.class))).e(new ti.g() { // from class: fj.f
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return FirebaseInstallationsRegistrar.a(dVar);
            }
        }).d(), cj.h.a(), mj.h.b(LIBRARY_NAME, "17.2.0"));
    }
}
