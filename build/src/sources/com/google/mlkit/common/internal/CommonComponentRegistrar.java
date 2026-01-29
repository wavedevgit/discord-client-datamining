package com.google.mlkit.common.internal;

import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import lg.f;
import oj.c;
import pj.b;
import pj.d;
import pj.i;
import pj.j;
import pj.m;
import qi.c;
import qi.g;
import qi.q;
import qj.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class CommonComponentRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return f.i(m.f46030b, c.c(a.class).b(q.j(i.class)).e(new g() { // from class: mj.a
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return new qj.a((i) dVar.a(i.class));
            }
        }).d(), c.c(j.class).e(new g() { // from class: mj.b
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return new j();
            }
        }).d(), c.c(oj.c.class).b(q.m(c.a.class)).e(new g() { // from class: mj.c
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return new oj.c(dVar.b(c.a.class));
            }
        }).d(), qi.c.c(d.class).b(q.l(j.class)).e(new g() { // from class: mj.d
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return new pj.d(dVar.c(j.class));
            }
        }).d(), qi.c.c(pj.a.class).e(new g() { // from class: mj.e
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return pj.a.a();
            }
        }).d(), qi.c.c(b.class).b(q.j(pj.a.class)).e(new g() { // from class: mj.f
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return new pj.b((pj.a) dVar.a(pj.a.class));
            }
        }).d(), qi.c.c(nj.a.class).b(q.j(i.class)).e(new g() { // from class: mj.g
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return new nj.a((i) dVar.a(i.class));
            }
        }).d(), qi.c.m(c.a.class).b(q.l(nj.a.class)).e(new g() { // from class: mj.h
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return new c.a(oj.a.class, dVar.c(nj.a.class));
            }
        }).d());
    }
}
