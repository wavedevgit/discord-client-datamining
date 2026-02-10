package com.google.mlkit.vision.face.internal;

import com.google.firebase.components.ComponentRegistrar;
import fk.d;
import fk.f;
import java.util.List;
import qg.p0;
import wj.i;
import xi.c;
import xi.g;
import xi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FaceRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return p0.j(c.c(f.class).b(q.j(i.class)).e(new g() { // from class: fk.l
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return new f((wj.i) dVar.a(wj.i.class));
            }
        }).d(), c.c(d.class).b(q.j(f.class)).b(q.j(wj.d.class)).e(new g() { // from class: fk.m
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return new d((f) dVar.a(f.class), (wj.d) dVar.a(wj.d.class));
            }
        }).d());
    }
}
