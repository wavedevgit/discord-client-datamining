package com.google.mlkit.vision.text.internal;

import com.google.firebase.components.ComponentRegistrar;
import ek.r;
import java.util.List;
import qg.m0;
import tj.d;
import tj.i;
import ui.c;
import ui.g;
import ui.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class TextRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return m0.i(c.c(r.class).b(q.j(i.class)).e(new g() { // from class: ek.u
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return new r((tj.i) dVar.a(tj.i.class));
            }
        }).d(), c.c(ek.q.class).b(q.j(r.class)).b(q.j(d.class)).e(new g() { // from class: ek.v
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return new q((r) dVar.a(r.class), (tj.d) dVar.a(tj.d.class));
            }
        }).d());
    }
}
