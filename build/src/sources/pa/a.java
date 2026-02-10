package pa;

import com.facebook.imagepipeline.producers.Consumer;
import com.facebook.imagepipeline.producers.ProducerContext;
import com.facebook.imagepipeline.producers.d1;
import com.facebook.imagepipeline.producers.w0;
import java.util.Map;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a extends z8.a {

    /* renamed from: h  reason: collision with root package name */
    private final d1 f41540h;

    /* renamed from: i  reason: collision with root package name */
    private final va.d f41541i;

    /* renamed from: pa.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0587a extends com.facebook.imagepipeline.producers.c {
        C0587a() {
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
    public a(w0 producer, d1 settableProducerContext, va.d requestListener) {
        Intrinsics.checkNotNullParameter(producer, "producer");
        Intrinsics.checkNotNullParameter(settableProducerContext, "settableProducerContext");
        Intrinsics.checkNotNullParameter(requestListener, "requestListener");
        this.f41540h = settableProducerContext;
        this.f41541i = requestListener;
        if (!za.b.d()) {
            m(settableProducerContext.getExtras());
            if (!za.b.d()) {
                requestListener.a(settableProducerContext);
            } else {
                za.b.a("AbstractProducerToDataSourceAdapter()->onRequestStart");
                try {
                    requestListener.a(settableProducerContext);
                    Unit unit = Unit.f31987a;
                } finally {
                }
            }
            if (!za.b.d()) {
                producer.b(y(), settableProducerContext);
                return;
            }
            za.b.a("AbstractProducerToDataSourceAdapter()->produceResult");
            try {
                producer.b(y(), settableProducerContext);
                Unit unit2 = Unit.f31987a;
                return;
            } finally {
            }
        }
        za.b.a("AbstractProducerToDataSourceAdapter()");
        try {
            m(settableProducerContext.getExtras());
            if (!za.b.d()) {
                requestListener.a(settableProducerContext);
            } else {
                za.b.a("AbstractProducerToDataSourceAdapter()->onRequestStart");
                requestListener.a(settableProducerContext);
                Unit unit3 = Unit.f31987a;
                za.b.b();
            }
            if (!za.b.d()) {
                producer.b(y(), settableProducerContext);
            } else {
                za.b.a("AbstractProducerToDataSourceAdapter()->produceResult");
                producer.b(y(), settableProducerContext);
                Unit unit4 = Unit.f31987a;
                za.b.b();
            }
            Unit unit5 = Unit.f31987a;
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
        if (super.o(th2, z(this.f41540h))) {
            this.f41541i.i(this.f41540h, th2);
        }
    }

    private final Consumer y() {
        return new C0587a();
    }

    public final d1 A() {
        return this.f41540h;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void D(Object obj, int i10, ProducerContext producerContext) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        boolean d10 = com.facebook.imagepipeline.producers.c.d(i10);
        if (super.s(obj, d10, z(producerContext)) && d10) {
            this.f41541i.e(this.f41540h);
        }
    }

    @Override // z8.a, com.facebook.datasource.DataSource
    public boolean close() {
        if (!super.close()) {
            return false;
        }
        if (!super.isFinished()) {
            this.f41541i.g(this.f41540h);
            this.f41540h.f();
            return true;
        }
        return true;
    }

    protected final Map z(ProducerContext producerContext) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        return producerContext.getExtras();
    }
}
