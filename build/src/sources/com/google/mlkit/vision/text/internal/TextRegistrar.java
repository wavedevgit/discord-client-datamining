package com.google.mlkit.vision.text.internal;

import ak.r;
import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import pg.m0;
import pj.d;
import pj.i;
import qi.c;
import qi.g;
import qi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class TextRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return m0.i(c.c(r.class).b(q.j(i.class)).e(new g() { // from class: ak.u
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return new r((pj.i) dVar.a(pj.i.class));
            }
        }).d(), c.c(ak.q.class).b(q.j(r.class)).b(q.j(d.class)).e(new g() { // from class: ak.v
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return new q((r) dVar.a(r.class), (pj.d) dVar.a(pj.d.class));
            }
        }).d());
    }
}
