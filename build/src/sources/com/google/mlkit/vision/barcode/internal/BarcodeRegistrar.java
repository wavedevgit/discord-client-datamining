package com.google.mlkit.vision.barcode.internal;

import bk.f;
import bk.h;
import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import og.i1;
import wj.d;
import wj.i;
import xi.c;
import xi.g;
import xi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BarcodeRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return i1.i(c.c(h.class).b(q.j(i.class)).e(new g() { // from class: bk.c
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return new h((wj.i) dVar.a(wj.i.class));
            }
        }).d(), c.c(f.class).b(q.j(h.class)).b(q.j(d.class)).b(q.j(i.class)).e(new g() { // from class: bk.d
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return new f((h) dVar.a(h.class), (wj.d) dVar.a(wj.d.class), (wj.i) dVar.a(wj.i.class));
            }
        }).d());
    }
}
