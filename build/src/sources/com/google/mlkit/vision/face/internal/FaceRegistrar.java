package com.google.mlkit.vision.face.internal;

import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import og.p0;
import pj.i;
import qi.c;
import qi.g;
import qi.q;
import yj.d;
import yj.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FaceRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return p0.i(c.c(f.class).b(q.j(i.class)).e(new g() { // from class: yj.l
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return new f((pj.i) dVar.a(pj.i.class));
            }
        }).d(), c.c(d.class).b(q.j(f.class)).b(q.j(pj.d.class)).e(new g() { // from class: yj.m
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return new d((f) dVar.a(f.class), (pj.d) dVar.a(pj.d.class));
            }
        }).d());
    }
}
