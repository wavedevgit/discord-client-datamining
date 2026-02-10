package com.google.mlkit.vision.common.internal;

import com.google.firebase.components.ComponentRegistrar;
import com.google.mlkit.vision.common.internal.a;
import java.util.List;
import pg.mc;
import xi.c;
import xi.d;
import xi.g;
import xi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class VisionCommonRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return mc.j(c.c(a.class).b(q.m(a.C0197a.class)).e(new g() { // from class: com.google.mlkit.vision.common.internal.b
            @Override // xi.g
            public final Object a(d dVar) {
                return new a(dVar.e(a.C0197a.class));
            }
        }).d());
    }
}
