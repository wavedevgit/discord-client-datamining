package com.google.firebase.installations;

import androidx.annotation.Keep;
import com.google.firebase.components.ComponentRegistrar;
import com.google.firebase.installations.FirebaseInstallationsRegistrar;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import ui.d0;
import ui.q;
@Keep
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FirebaseInstallationsRegistrar implements ComponentRegistrar {
    private static final String LIBRARY_NAME = "fire-installations";

    public static /* synthetic */ gj.e a(ui.d dVar) {
        return new c((ri.e) dVar.a(ri.e.class), dVar.g(dj.i.class), (ExecutorService) dVar.e(d0.a(ti.a.class, ExecutorService.class)), vi.i.a((Executor) dVar.e(d0.a(ti.b.class, Executor.class))));
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    public List<ui.c> getComponents() {
        return Arrays.asList(ui.c.c(gj.e.class).g(LIBRARY_NAME).b(q.j(ri.e.class)).b(q.h(dj.i.class)).b(q.k(d0.a(ti.a.class, ExecutorService.class))).b(q.k(d0.a(ti.b.class, Executor.class))).e(new ui.g() { // from class: gj.f
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return FirebaseInstallationsRegistrar.a(dVar);
            }
        }).d(), dj.h.a(), nj.h.b(LIBRARY_NAME, "17.2.0"));
    }
}
