package com.google.mlkit.vision.text.internal;

import com.google.firebase.components.ComponentRegistrar;
import hk.r;
import java.util.List;
import rg.m0;
import wj.d;
import wj.i;
import xi.c;
import xi.g;
import xi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class TextRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return m0.j(c.c(r.class).b(q.j(i.class)).e(new g() { // from class: hk.u
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return new r((wj.i) dVar.a(wj.i.class));
            }
        }).d(), c.c(hk.q.class).b(q.j(r.class)).b(q.j(d.class)).e(new g() { // from class: hk.v
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return new q((r) dVar.a(r.class), (wj.d) dVar.a(wj.d.class));
            }
        }).d());
    }
}
