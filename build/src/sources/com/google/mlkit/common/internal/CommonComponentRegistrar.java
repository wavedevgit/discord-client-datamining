package com.google.mlkit.common.internal;

import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import mg.f;
import sj.c;
import tj.b;
import tj.d;
import tj.i;
import tj.j;
import tj.m;
import ui.c;
import ui.g;
import ui.q;
import uj.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class CommonComponentRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return f.i(m.f50658b, c.c(a.class).b(q.j(i.class)).e(new g() { // from class: qj.a
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return new uj.a((i) dVar.a(i.class));
            }
        }).d(), c.c(j.class).e(new g() { // from class: qj.b
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return new j();
            }
        }).d(), c.c(sj.c.class).b(q.m(c.a.class)).e(new g() { // from class: qj.c
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return new sj.c(dVar.b(c.a.class));
            }
        }).d(), ui.c.c(d.class).b(q.l(j.class)).e(new g() { // from class: qj.d
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return new tj.d(dVar.g(j.class));
            }
        }).d(), ui.c.c(tj.a.class).e(new g() { // from class: qj.e
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return tj.a.a();
            }
        }).d(), ui.c.c(b.class).b(q.j(tj.a.class)).e(new g() { // from class: qj.f
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return new tj.b((tj.a) dVar.a(tj.a.class));
            }
        }).d(), ui.c.c(rj.a.class).b(q.j(i.class)).e(new g() { // from class: qj.g
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return new rj.a((i) dVar.a(i.class));
            }
        }).d(), ui.c.m(c.a.class).b(q.l(rj.a.class)).e(new g() { // from class: qj.h
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return new c.a(sj.a.class, dVar.g(rj.a.class));
            }
        }).d());
    }
}
