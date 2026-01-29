package com.google.mlkit.vision.barcode.internal;

import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import mg.i1;
import pj.d;
import pj.i;
import qi.c;
import qi.g;
import qi.q;
import uj.f;
import uj.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BarcodeRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return i1.h(c.c(h.class).b(q.j(i.class)).e(new g() { // from class: uj.c
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return new h((pj.i) dVar.a(pj.i.class));
            }
        }).d(), c.c(f.class).b(q.j(h.class)).b(q.j(d.class)).b(q.j(i.class)).e(new g() { // from class: uj.d
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return new f((h) dVar.a(h.class), (pj.d) dVar.a(pj.d.class), (pj.i) dVar.a(pj.i.class));
            }
        }).d());
    }
}
