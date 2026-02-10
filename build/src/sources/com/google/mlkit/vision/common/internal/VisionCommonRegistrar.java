package com.google.mlkit.vision.common.internal;

import com.google.firebase.components.ComponentRegistrar;
import com.google.mlkit.vision.common.internal.a;
import java.util.List;
import pg.mc;
import vi.c;
import vi.d;
import vi.g;
import vi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class VisionCommonRegistrar implements ComponentRegistrar {
    @Override // com.google.firebase.components.ComponentRegistrar
    public final List getComponents() {
        return mc.i(c.c(a.class).b(q.m(a.C0216a.class)).e(new g() { // from class: com.google.mlkit.vision.common.internal.b
            @Override // vi.g
            public final Object a(d dVar) {
                return new a(dVar.c(a.C0216a.class));
            }
        }).d());
    }
}
