package com.google.mlkit.vision.barcode.internal;

import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import mg.i1;
import sj.d;
import sj.i;
import ti.c;
import ti.g;
import ti.q;
import xj.f;
import xj.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BarcodeRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return i1.h(c.c(h.class).b(q.j(i.class)).e(new g() { // from class: xj.c
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return new h((sj.i) dVar.a(sj.i.class));
            }
        }).d(), c.c(f.class).b(q.j(h.class)).b(q.j(d.class)).b(q.j(i.class)).e(new g() { // from class: xj.d
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return new f((h) dVar.a(h.class), (sj.d) dVar.a(sj.d.class), (sj.i) dVar.a(sj.i.class));
            }
        }).d());
    }
}
