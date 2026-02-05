package com.google.mlkit.vision.text.internal;

import com.google.firebase.components.ComponentRegistrar;
import dk.r;
import java.util.List;
import pg.m0;
import sj.d;
import sj.i;
import ti.c;
import ti.g;
import ti.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class TextRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return m0.i(c.c(r.class).b(q.j(i.class)).e(new g() { // from class: dk.u
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return new r((sj.i) dVar.a(sj.i.class));
            }
        }).d(), c.c(dk.q.class).b(q.j(r.class)).b(q.j(d.class)).e(new g() { // from class: dk.v
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return new q((r) dVar.a(r.class), (sj.d) dVar.a(sj.d.class));
            }
        }).d());
    }
}
