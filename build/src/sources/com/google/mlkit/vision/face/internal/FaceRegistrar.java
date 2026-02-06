package com.google.mlkit.vision.face.internal;

import ck.d;
import ck.f;
import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import pg.p0;
import tj.i;
import ui.c;
import ui.g;
import ui.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FaceRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return p0.i(c.c(f.class).b(q.j(i.class)).e(new g() { // from class: ck.l
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return new f((tj.i) dVar.a(tj.i.class));
            }
        }).d(), c.c(d.class).b(q.j(f.class)).b(q.j(tj.d.class)).e(new g() { // from class: ck.m
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return new d((f) dVar.a(f.class), (tj.d) dVar.a(tj.d.class));
            }
        }).d());
    }
}
