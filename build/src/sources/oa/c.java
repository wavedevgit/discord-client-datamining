package oa;

import com.facebook.common.references.CloseableReference;
import com.facebook.datasource.DataSource;
import com.facebook.imagepipeline.producers.ProducerContext;
import com.facebook.imagepipeline.producers.d1;
import com.facebook.imagepipeline.producers.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends a {
    private c(w0 w0Var, d1 d1Var, ua.d dVar) {
        super(w0Var, d1Var, dVar);
    }

    public static DataSource F(w0 w0Var, d1 d1Var, ua.d dVar) {
        if (ya.b.d()) {
            ya.b.a("CloseableProducerToDataSourceAdapter#create");
        }
        c cVar = new c(w0Var, d1Var, dVar);
        if (ya.b.d()) {
            ya.b.b();
        }
        return cVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // y8.a
    /* renamed from: E */
    public void f(CloseableReference closeableReference) {
        CloseableReference.z(closeableReference);
    }

    @Override // y8.a, com.facebook.datasource.DataSource
    /* renamed from: G */
    public CloseableReference getResult() {
        return CloseableReference.n((CloseableReference) super.getResult());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // oa.a
    /* renamed from: H */
    public void D(CloseableReference closeableReference, int i10, ProducerContext producerContext) {
        super.D(CloseableReference.n(closeableReference), i10, producerContext);
    }
}
