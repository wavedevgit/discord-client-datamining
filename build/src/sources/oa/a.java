package oa;

import com.facebook.imagepipeline.producers.Consumer;
import com.facebook.imagepipeline.producers.ProducerContext;
import com.facebook.imagepipeline.producers.d1;
import com.facebook.imagepipeline.producers.w0;
import java.util.Map;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a extends y8.a {

    /* renamed from: h  reason: collision with root package name */
    private final d1 f42501h;

    /* renamed from: i  reason: collision with root package name */
    private final ua.d f42502i;

    /* renamed from: oa.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0533a extends com.facebook.imagepipeline.producers.c {
        C0533a() {
        }

        @Override // com.facebook.imagepipeline.producers.c
        protected void f() {
            a.this.B();
        }

        @Override // com.facebook.imagepipeline.producers.c
        protected void g(Throwable throwable) {
            Intrinsics.checkNotNullParameter(throwable, "throwable");
            a.this.C(throwable);
        }

        @Override // com.facebook.imagepipeline.producers.c
        protected void h(Object obj, int i10) {
            a aVar = a.this;
            aVar.D(obj, i10, aVar.A());
        }

        @Override // com.facebook.imagepipeline.producers.c
        protected void i(float f10) {
            a.this.q(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(w0 producer, d1 settableProducerContext, ua.d requestListener) {
        Intrinsics.checkNotNullParameter(producer, "producer");
        Intrinsics.checkNotNullParameter(settableProducerContext, "settableProducerContext");
        Intrinsics.checkNotNullParameter(requestListener, "requestListener");
        this.f42501h = settableProducerContext;
        this.f42502i = requestListener;
        if (!ya.b.d()) {
            m(settableProducerContext.getExtras());
            if (!ya.b.d()) {
                requestListener.a(settableProducerContext);
            } else {
                ya.b.a("AbstractProducerToDataSourceAdapter()->onRequestStart");
                try {
                    requestListener.a(settableProducerContext);
                    Unit unit = Unit.f33282a;
                } finally {
                }
            }
            if (!ya.b.d()) {
                producer.b(y(), settableProducerContext);
                return;
            }
            ya.b.a("AbstractProducerToDataSourceAdapter()->produceResult");
            try {
                producer.b(y(), settableProducerContext);
                Unit unit2 = Unit.f33282a;
                return;
            } finally {
            }
        }
        ya.b.a("AbstractProducerToDataSourceAdapter()");
        try {
            m(settableProducerContext.getExtras());
            if (!ya.b.d()) {
                requestListener.a(settableProducerContext);
            } else {
                ya.b.a("AbstractProducerToDataSourceAdapter()->onRequestStart");
                requestListener.a(settableProducerContext);
                Unit unit3 = Unit.f33282a;
                ya.b.b();
            }
            if (!ya.b.d()) {
                producer.b(y(), settableProducerContext);
            } else {
                ya.b.a("AbstractProducerToDataSourceAdapter()->produceResult");
                producer.b(y(), settableProducerContext);
                Unit unit4 = Unit.f33282a;
                ya.b.b();
            }
            Unit unit5 = Unit.f33282a;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void B() {
        j.i(i());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void C(Throwable th2) {
        if (super.o(th2, z(this.f42501h))) {
            this.f42502i.i(this.f42501h, th2);
        }
    }

    private final Consumer y() {
        return new C0533a();
    }

    public final d1 A() {
        return this.f42501h;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void D(Object obj, int i10, ProducerContext producerContext) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        boolean d10 = com.facebook.imagepipeline.producers.c.d(i10);
        if (super.s(obj, d10, z(producerContext)) && d10) {
            this.f42502i.e(this.f42501h);
        }
    }

    @Override // y8.a, com.facebook.datasource.DataSource
    public boolean close() {
        if (!super.close()) {
            return false;
        }
        if (!super.isFinished()) {
            this.f42502i.g(this.f42501h);
            this.f42501h.f();
            return true;
        }
        return true;
    }

    protected final Map z(ProducerContext producerContext) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        return producerContext.getExtras();
    }
}
