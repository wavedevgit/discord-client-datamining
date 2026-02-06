package com.facebook.common.references;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends CloseableReference {
    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Object obj) {
        super(obj, null, null, null, false);
    }

    @Override // com.facebook.common.references.CloseableReference
    public boolean F0() {
        return true;
    }

    @Override // com.facebook.common.references.CloseableReference, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
    }

    @Override // com.facebook.common.references.CloseableReference
    /* renamed from: k */
    public CloseableReference clone() {
        return this;
    }

    @Override // com.facebook.common.references.CloseableReference
    public CloseableReference m() {
        return this;
    }
}
