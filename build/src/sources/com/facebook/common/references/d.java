package com.facebook.common.references;

import com.facebook.common.references.CloseableReference;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends CloseableReference {
    private d(s8.d dVar, CloseableReference.c cVar, Throwable th2) {
        super(dVar, cVar, th2);
    }

    @Override // com.facebook.common.references.CloseableReference
    /* renamed from: l */
    public CloseableReference clone() {
        j.i(J0());
        return new d(this.f10590e, this.f10591i, this.f10592o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(Object obj, s8.c cVar, CloseableReference.c cVar2, Throwable th2) {
        super(obj, cVar, cVar2, th2, false);
    }
}
