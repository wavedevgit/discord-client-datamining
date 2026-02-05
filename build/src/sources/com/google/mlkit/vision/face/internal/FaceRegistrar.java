package com.google.mlkit.vision.face.internal;

import bk.d;
import bk.f;
import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import og.p0;
import sj.i;
import ti.c;
import ti.g;
import ti.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FaceRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return p0.i(c.c(f.class).b(q.j(i.class)).e(new g() { // from class: bk.l
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return new f((sj.i) dVar.a(sj.i.class));
            }
        }).d(), c.c(d.class).b(q.j(f.class)).b(q.j(sj.d.class)).e(new g() { // from class: bk.m
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return new d((f) dVar.a(f.class), (sj.d) dVar.a(sj.d.class));
            }
        }).d());
    }
}
