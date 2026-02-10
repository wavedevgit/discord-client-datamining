package com.google.mlkit.vision.barcode.internal;

import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import og.i1;
import uj.d;
import uj.i;
import vi.c;
import vi.g;
import vi.q;
import zj.f;
import zj.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BarcodeRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return i1.h(c.c(h.class).b(q.j(i.class)).e(new g() { // from class: zj.c
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return new h((uj.i) dVar.a(uj.i.class));
            }
        }).d(), c.c(f.class).b(q.j(h.class)).b(q.j(d.class)).b(q.j(i.class)).e(new g() { // from class: zj.d
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return new f((h) dVar.a(h.class), (uj.d) dVar.a(uj.d.class), (uj.i) dVar.a(uj.i.class));
            }
        }).d());
    }
}
