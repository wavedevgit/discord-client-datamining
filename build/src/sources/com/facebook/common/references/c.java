package com.facebook.common.references;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends CloseableReference {
    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Object obj) {
        super(obj, null, null, null, false);
    }

    @Override // com.facebook.common.references.CloseableReference
    public CloseableReference B() {
        return this;
    }

    @Override // com.facebook.common.references.CloseableReference
    public boolean E0() {
        return true;
    }

    @Override // com.facebook.common.references.CloseableReference, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
    }

    @Override // com.facebook.common.references.CloseableReference
    /* renamed from: l */
    public CloseableReference clone() {
        return this;
    }
}
