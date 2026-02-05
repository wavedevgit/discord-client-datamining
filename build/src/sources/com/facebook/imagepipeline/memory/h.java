package com.facebook.imagepipeline.memory;

import java.util.LinkedList;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class h extends b {

    /* renamed from: f  reason: collision with root package name */
    private LinkedList f10638f;

    public h(int i10, int i11, int i12) {
        super(i10, i11, i12, false);
        this.f10638f = new LinkedList();
    }

    @Override // com.facebook.imagepipeline.memory.b
    void a(Object obj) {
        s8.b bVar = (s8.b) this.f10638f.poll();
        if (bVar == null) {
            bVar = new s8.b();
        }
        bVar.c(obj);
        this.f10627c.add(bVar);
    }

    @Override // com.facebook.imagepipeline.memory.b
    public Object g() {
        s8.b bVar = (s8.b) this.f10627c.poll();
        j.g(bVar);
        Object b10 = bVar.b();
        bVar.a();
        this.f10638f.add(bVar);
        return b10;
    }
}
