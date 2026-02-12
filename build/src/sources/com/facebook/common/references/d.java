package com.facebook.common.references;

import com.facebook.common.references.CloseableReference;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends CloseableReference {
    private d(t8.d dVar, CloseableReference.c cVar, Throwable th2) {
        super(dVar, cVar, th2);
    }

    @Override // com.facebook.common.references.CloseableReference
    /* renamed from: h */
    public CloseableReference clone() {
        j.i(z0());
        return new d(this.f10560e, this.f10561i, this.f10562o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(Object obj, t8.c cVar, CloseableReference.c cVar2, Throwable th2) {
        super(obj, cVar, cVar2, th2, false);
    }
}
