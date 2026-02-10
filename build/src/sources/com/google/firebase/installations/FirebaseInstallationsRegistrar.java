package com.google.firebase.installations;

import androidx.annotation.Keep;
import com.google.firebase.components.ComponentRegistrar;
import com.google.firebase.installations.FirebaseInstallationsRegistrar;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import vi.d0;
import vi.q;
@Keep
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FirebaseInstallationsRegistrar implements ComponentRegistrar {
    private static final String LIBRARY_NAME = "fire-installations";

    public static /* synthetic */ hj.e a(vi.d dVar) {
        return new c((si.e) dVar.a(si.e.class), dVar.e(ej.i.class), (ExecutorService) dVar.f(d0.a(ui.a.class, ExecutorService.class)), wi.i.a((Executor) dVar.f(d0.a(ui.b.class, Executor.class))));
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    public List<vi.c> getComponents() {
        return Arrays.asList(vi.c.c(hj.e.class).g(LIBRARY_NAME).b(q.j(si.e.class)).b(q.h(ej.i.class)).b(q.k(d0.a(ui.a.class, ExecutorService.class))).b(q.k(d0.a(ui.b.class, Executor.class))).e(new vi.g() { // from class: hj.f
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return FirebaseInstallationsRegistrar.a(dVar);
            }
        }).d(), ej.h.a(), oj.h.b(LIBRARY_NAME, "17.2.0"));
    }
}
