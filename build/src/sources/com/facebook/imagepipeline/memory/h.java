package com.facebook.imagepipeline.memory;

import java.util.LinkedList;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class h extends b {

    /* renamed from: f  reason: collision with root package name */
    private LinkedList f11255f;

    public h(int i10, int i11, int i12) {
        super(i10, i11, i12, false);
        this.f11255f = new LinkedList();
    }

    @Override // com.facebook.imagepipeline.memory.b
    void a(Object obj) {
        t8.b bVar = (t8.b) this.f11255f.poll();
        if (bVar == null) {
            bVar = new t8.b();
        }
        bVar.c(obj);
        this.f11244c.add(bVar);
    }

    @Override // com.facebook.imagepipeline.memory.b
    public Object g() {
        t8.b bVar = (t8.b) this.f11244c.poll();
        j.g(bVar);
        Object b10 = bVar.b();
        bVar.a();
        this.f11255f.add(bVar);
        return b10;
    }
}
