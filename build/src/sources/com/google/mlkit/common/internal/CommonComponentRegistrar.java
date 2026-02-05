package com.google.mlkit.common.internal;

import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import lg.f;
import rj.c;
import sj.b;
import sj.d;
import sj.i;
import sj.j;
import sj.m;
import ti.c;
import ti.g;
import ti.q;
import tj.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class CommonComponentRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return f.i(m.f49694b, c.c(a.class).b(q.j(i.class)).e(new g() { // from class: pj.a
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return new tj.a((i) dVar.a(i.class));
            }
        }).d(), c.c(j.class).e(new g() { // from class: pj.b
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return new j();
            }
        }).d(), c.c(rj.c.class).b(q.m(c.a.class)).e(new g() { // from class: pj.c
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return new rj.c(dVar.b(c.a.class));
            }
        }).d(), ti.c.c(d.class).b(q.l(j.class)).e(new g() { // from class: pj.d
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return new sj.d(dVar.e(j.class));
            }
        }).d(), ti.c.c(sj.a.class).e(new g() { // from class: pj.e
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return sj.a.a();
            }
        }).d(), ti.c.c(b.class).b(q.j(sj.a.class)).e(new g() { // from class: pj.f
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return new sj.b((sj.a) dVar.a(sj.a.class));
            }
        }).d(), ti.c.c(qj.a.class).b(q.j(i.class)).e(new g() { // from class: pj.g
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return new qj.a((i) dVar.a(i.class));
            }
        }).d(), ti.c.m(c.a.class).b(q.l(qj.a.class)).e(new g() { // from class: pj.h
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return new c.a(rj.a.class, dVar.e(qj.a.class));
            }
        }).d());
    }
}
