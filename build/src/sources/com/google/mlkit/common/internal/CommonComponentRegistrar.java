package com.google.mlkit.common.internal;

import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import ng.f;
import tj.c;
import uj.b;
import uj.d;
import uj.i;
import uj.j;
import uj.m;
import vi.c;
import vi.g;
import vi.q;
import vj.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class CommonComponentRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return f.i(m.f51611b, c.c(a.class).b(q.j(i.class)).e(new g() { // from class: rj.a
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return new vj.a((i) dVar.a(i.class));
            }
        }).d(), c.c(j.class).e(new g() { // from class: rj.b
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return new j();
            }
        }).d(), c.c(tj.c.class).b(q.m(c.a.class)).e(new g() { // from class: rj.c
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return new tj.c(dVar.c(c.a.class));
            }
        }).d(), vi.c.c(d.class).b(q.l(j.class)).e(new g() { // from class: rj.d
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return new uj.d(dVar.e(j.class));
            }
        }).d(), vi.c.c(uj.a.class).e(new g() { // from class: rj.e
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return uj.a.a();
            }
        }).d(), vi.c.c(b.class).b(q.j(uj.a.class)).e(new g() { // from class: rj.f
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return new uj.b((uj.a) dVar.a(uj.a.class));
            }
        }).d(), vi.c.c(sj.a.class).b(q.j(i.class)).e(new g() { // from class: rj.g
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return new sj.a((i) dVar.a(i.class));
            }
        }).d(), vi.c.m(c.a.class).b(q.l(sj.a.class)).e(new g() { // from class: rj.h
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return new c.a(tj.a.class, dVar.e(sj.a.class));
            }
        }).d());
    }
}
