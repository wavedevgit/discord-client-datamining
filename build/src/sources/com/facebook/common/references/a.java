package com.facebook.common.references;

import com.facebook.common.references.CloseableReference;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends CloseableReference {
    private a(t8.d dVar, CloseableReference.c cVar, Throwable th2) {
        super(dVar, cVar, th2);
    }

    protected void finalize() {
        String name;
        try {
            synchronized (this) {
                if (this.f10559d) {
                    super.finalize();
                    return;
                }
                Object f10 = this.f10560e.f();
                Integer valueOf = Integer.valueOf(System.identityHashCode(this));
                Integer valueOf2 = Integer.valueOf(System.identityHashCode(this.f10560e));
                if (f10 == null) {
                    name = null;
                } else {
                    name = f10.getClass().getName();
                }
                q8.a.L("DefaultCloseableReference", "Finalized without closing: %x %x (type = %s)", valueOf, valueOf2, name);
                CloseableReference.c cVar = this.f10561i;
                if (cVar != null) {
                    cVar.a(this.f10560e, this.f10562o);
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
    /* renamed from: h */
    public CloseableReference clone() {
        Throwable th2;
        j.i(z0());
        t8.d dVar = this.f10560e;
        CloseableReference.c cVar = this.f10561i;
        if (this.f10562o != null) {
            th2 = new Throwable();
        } else {
            th2 = null;
        }
        return new a(dVar, cVar, th2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Object obj, t8.c cVar, CloseableReference.c cVar2, Throwable th2) {
        super(obj, cVar, cVar2, th2, true);
    }
}
