package com.facebook.common.references;

import com.facebook.common.references.CloseableReference;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends CloseableReference {
    private a(s8.d dVar, CloseableReference.c cVar, Throwable th2) {
        super(dVar, cVar, th2);
    }

    protected void finalize() {
        String name;
        try {
            synchronized (this) {
                if (this.f9942d) {
                    super.finalize();
                    return;
                }
                Object f10 = this.f9943e.f();
                Integer valueOf = Integer.valueOf(System.identityHashCode(this));
                Integer valueOf2 = Integer.valueOf(System.identityHashCode(this.f9943e));
                if (f10 == null) {
                    name = null;
                } else {
                    name = f10.getClass().getName();
                }
                p8.a.L("DefaultCloseableReference", "Finalized without closing: %x %x (type = %s)", valueOf, valueOf2, name);
                CloseableReference.c cVar = this.f9944i;
                if (cVar != null) {
                    cVar.b(this.f9943e, this.f9945o);
                }
                close();
                super.finalize();
            }
        } catch (Throwable th2) {
            super.finalize();
            throw th2;
        }
    }

    @Override // com.facebook.common.references.CloseableReference
    /* renamed from: k */
    public CloseableReference clone() {
        Throwable th2;
        j.i(I0());
        s8.d dVar = this.f9943e;
        CloseableReference.c cVar = this.f9944i;
        if (this.f9945o != null) {
            th2 = new Throwable();
        } else {
            th2 = null;
        }
        return new a(dVar, cVar, th2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Object obj, s8.c cVar, CloseableReference.c cVar2, Throwable th2) {
        super(obj, cVar, cVar2, th2, true);
    }
}
