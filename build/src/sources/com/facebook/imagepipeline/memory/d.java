package com.facebook.imagepipeline.memory;

import com.facebook.common.references.CloseableReference;
import p8.j;
import wa.a0;
import wa.u;
import wa.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final t8.c f11247a;

    /* renamed from: b  reason: collision with root package name */
    final b f11248b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements t8.c {
        a() {
        }

        @Override // t8.c
        /* renamed from: a */
        public void release(byte[] bArr) {
            d.this.b(bArr);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends e {
        public b(s8.d dVar, z zVar, a0 a0Var) {
            super(dVar, zVar, a0Var);
        }

        @Override // com.facebook.imagepipeline.memory.a
        com.facebook.imagepipeline.memory.b x(int i10) {
            return new h(p(i10), this.f11232c.f53040g, 0);
        }
    }

    public d(s8.d dVar, z zVar) {
        boolean z10;
        if (zVar.f53040g > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.b(Boolean.valueOf(z10));
        this.f11248b = new b(dVar, zVar, u.h());
        this.f11247a = new a();
    }

    public CloseableReference a(int i10) {
        return CloseableReference.G0((byte[]) this.f11248b.get(i10), this.f11247a);
    }

    public void b(byte[] bArr) {
        this.f11248b.release(bArr);
    }
}
