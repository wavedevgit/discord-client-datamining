package com.facebook.common.references;

import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends CloseableReference {
    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Object obj, s8.c cVar, CloseableReference.c cVar2, Throwable th2) {
        super(obj, cVar, cVar2, th2, true);
    }

    @Override // com.facebook.common.references.CloseableReference, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
    }

    protected void finalize() {
        String name;
        try {
            synchronized (this) {
                if (this.f9942d) {
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
                p8.a.L("FinalizerCloseableReference", "Finalized without closing: %x %x (type = %s)", valueOf, valueOf2, name);
                this.f9943e.d();
            }
        } finally {
            super.finalize();
        }
    }

    @Override // com.facebook.common.references.CloseableReference
    /* renamed from: k */
    public CloseableReference clone() {
        return this;
    }
}
