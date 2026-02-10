package com.google.mlkit.common.internal;

import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import ng.f;
import vj.c;
import wj.b;
import wj.d;
import wj.i;
import wj.j;
import wj.m;
import xi.c;
import xi.g;
import xi.q;
import xj.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class CommonComponentRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return f.j(m.f52823b, c.c(a.class).b(q.j(i.class)).e(new g() { // from class: tj.a
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return new xj.a((i) dVar.a(i.class));
            }
        }).d(), c.c(j.class).e(new g() { // from class: tj.b
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return new j();
            }
        }).d(), c.c(vj.c.class).b(q.m(c.a.class)).e(new g() { // from class: tj.c
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return new vj.c(dVar.e(c.a.class));
            }
        }).d(), xi.c.c(d.class).b(q.l(j.class)).e(new g() { // from class: tj.d
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return new wj.d(dVar.g(j.class));
            }
        }).d(), xi.c.c(wj.a.class).e(new g() { // from class: tj.e
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return wj.a.a();
            }
        }).d(), xi.c.c(b.class).b(q.j(wj.a.class)).e(new g() { // from class: tj.f
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return new wj.b((wj.a) dVar.a(wj.a.class));
            }
        }).d(), xi.c.c(uj.a.class).b(q.j(i.class)).e(new g() { // from class: tj.g
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return new uj.a((i) dVar.a(i.class));
            }
        }).d(), xi.c.m(c.a.class).b(q.l(uj.a.class)).e(new g() { // from class: tj.h
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return new c.a(vj.a.class, dVar.g(uj.a.class));
            }
        }).d());
    }
}
