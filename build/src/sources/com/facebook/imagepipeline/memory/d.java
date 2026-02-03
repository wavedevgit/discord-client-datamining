package com.facebook.imagepipeline.memory;

import com.facebook.common.references.CloseableReference;
import o8.j;
import va.a0;
import va.u;
import va.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final s8.c f10245a;

    /* renamed from: b  reason: collision with root package name */
    final b f10246b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements s8.c {
        a() {
        }

        @Override // s8.c
        /* renamed from: a */
        public void release(byte[] bArr) {
            d.this.b(bArr);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends e {
        public b(r8.d dVar, z zVar, a0 a0Var) {
            super(dVar, zVar, a0Var);
        }

        @Override // com.facebook.imagepipeline.memory.a
        com.facebook.imagepipeline.memory.b x(int i10) {
            return new h(p(i10), this.f10230c.f51316g, 0);
        }
    }

    public d(r8.d dVar, z zVar) {
        boolean z10;
        if (zVar.f51316g > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.b(Boolean.valueOf(z10));
        this.f10246b = new b(dVar, zVar, u.h());
        this.f10245a = new a();
    }

    public CloseableReference a(int i10) {
        return CloseableReference.V0((byte[]) this.f10246b.get(i10), this.f10245a);
    }

    public void b(byte[] bArr) {
        this.f10246b.release(bArr);
    }
}
