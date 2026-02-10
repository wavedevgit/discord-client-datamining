package com.google.mlkit.vision.text.internal;

import com.google.firebase.components.ComponentRegistrar;
import fk.r;
import java.util.List;
import rg.m0;
import uj.d;
import uj.i;
import vi.c;
import vi.g;
import vi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class TextRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return m0.i(c.c(r.class).b(q.j(i.class)).e(new g() { // from class: fk.u
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return new r((uj.i) dVar.a(uj.i.class));
            }
        }).d(), c.c(fk.q.class).b(q.j(r.class)).b(q.j(d.class)).e(new g() { // from class: fk.v
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return new q((r) dVar.a(r.class), (uj.d) dVar.a(uj.d.class));
            }
        }).d());
    }
}
