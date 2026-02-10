package com.google.mlkit.vision.face.internal;

import com.google.firebase.components.ComponentRegistrar;
import dk.d;
import dk.f;
import java.util.List;
import qg.p0;
import uj.i;
import vi.c;
import vi.g;
import vi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FaceRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return p0.i(c.c(f.class).b(q.j(i.class)).e(new g() { // from class: dk.l
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return new f((uj.i) dVar.a(uj.i.class));
            }
        }).d(), c.c(d.class).b(q.j(f.class)).b(q.j(uj.d.class)).e(new g() { // from class: dk.m
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return new d((f) dVar.a(f.class), (uj.d) dVar.a(uj.d.class));
            }
        }).d());
    }
}
