package com.google.mlkit.vision.barcode.internal;

import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import ng.i1;
import tj.d;
import tj.i;
import ui.c;
import ui.g;
import ui.q;
import yj.f;
import yj.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BarcodeRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return i1.h(c.c(h.class).b(q.j(i.class)).e(new g() { // from class: yj.c
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return new h((tj.i) dVar.a(tj.i.class));
            }
        }).d(), c.c(f.class).b(q.j(h.class)).b(q.j(d.class)).b(q.j(i.class)).e(new g() { // from class: yj.d
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return new f((h) dVar.a(h.class), (tj.d) dVar.a(tj.d.class), (tj.i) dVar.a(tj.i.class));
            }
        }).d());
    }
}
