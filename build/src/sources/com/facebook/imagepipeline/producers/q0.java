package com.facebook.imagepipeline.producers;

import android.os.SystemClock;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.common.BytesRange;
import com.facebook.imagepipeline.producers.NetworkFetcher;
import java.io.InputStream;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class q0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    protected final r8.i f10511a;

    /* renamed from: b  reason: collision with root package name */
    private final r8.a f10512b;

    /* renamed from: c  reason: collision with root package name */
    private final NetworkFetcher f10513c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements NetworkFetcher.Callback {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ FetchState f10514a;

        a(FetchState fetchState) {
            this.f10514a = fetchState;
        }

        @Override // com.facebook.imagepipeline.producers.NetworkFetcher.Callback
        public void a() {
            q0.this.k(this.f10514a);
        }

        @Override // com.facebook.imagepipeline.producers.NetworkFetcher.Callback
        public void b(InputStream inputStream, int i10) {
            if (ya.b.d()) {
                ya.b.a("NetworkFetcher->onResponse");
            }
            q0.this.m(this.f10514a, inputStream, i10);
            if (ya.b.d()) {
                ya.b.b();
            }
        }

        @Override // com.facebook.imagepipeline.producers.NetworkFetcher.Callback
        public void onFailure(Throwable th2) {
            q0.this.l(this.f10514a, th2);
        }
    }

    public q0(r8.i iVar, r8.a aVar, NetworkFetcher networkFetcher) {
        this.f10511a = iVar;
        this.f10512b = aVar;
        this.f10513c = networkFetcher;
    }

    protected static float e(int i10, int i11) {
        if (i11 > 0) {
            return i10 / i11;
        }
        return 1.0f - ((float) Math.exp((-i10) / 50000.0d));
    }

    private Map f(FetchState fetchState, int i10) {
        if (!fetchState.d().f(fetchState.b(), "NetworkFetchProducer")) {
            return null;
        }
        return this.f10513c.getExtraMap(fetchState, i10);
    }

    protected static void j(r8.k kVar, int i10, BytesRange bytesRange, Consumer consumer, ProducerContext producerContext) {
        sa.k kVar2;
        CloseableReference J0 = CloseableReference.J0(kVar.a());
        sa.k kVar3 = null;
        try {
            kVar2 = new sa.k(J0);
        } catch (Throwable th2) {
            th = th2;
        }
        try {
            kVar2.x1(bytesRange);
            kVar2.V0();
            consumer.b(kVar2, i10);
            sa.k.l(kVar2);
            CloseableReference.N(J0);
        } catch (Throwable th3) {
            th = th3;
            kVar3 = kVar2;
            sa.k.l(kVar3);
            CloseableReference.N(J0);
            throw th;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void k(FetchState fetchState) {
        fetchState.d().c(fetchState.b(), "NetworkFetchProducer", null);
        fetchState.a().a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l(FetchState fetchState, Throwable th2) {
        fetchState.d().k(fetchState.b(), "NetworkFetchProducer", th2, null);
        fetchState.d().b(fetchState.b(), "NetworkFetchProducer", false);
        fetchState.b().E("network");
        fetchState.a().onFailure(th2);
    }

    private boolean n(FetchState fetchState, ProducerContext producerContext) {
        qa.e h10 = producerContext.l().h();
        if (h10 == null || !h10.c() || !fetchState.b().L()) {
            return false;
        }
        return this.f10513c.shouldPropagate(fetchState);
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        producerContext.F().d(producerContext, "NetworkFetchProducer");
        FetchState createFetchState = this.f10513c.createFetchState(consumer, producerContext);
        this.f10513c.fetch(createFetchState, new a(createFetchState));
    }

    protected long g() {
        return SystemClock.uptimeMillis();
    }

    protected void h(r8.k kVar, FetchState fetchState) {
        Map f10 = f(fetchState, kVar.size());
        y0 d10 = fetchState.d();
        d10.j(fetchState.b(), "NetworkFetchProducer", f10);
        d10.b(fetchState.b(), "NetworkFetchProducer", true);
        fetchState.b().E("network");
        j(kVar, fetchState.e() | 1, fetchState.f(), fetchState.a(), fetchState.b());
    }

    protected void i(r8.k kVar, FetchState fetchState) {
        if (n(fetchState, fetchState.b())) {
            long g10 = g();
            if (g10 - fetchState.c() >= 100) {
                fetchState.h(g10);
                fetchState.d().h(fetchState.b(), "NetworkFetchProducer", "intermediate_result");
                j(kVar, fetchState.e(), fetchState.f(), fetchState.a(), fetchState.b());
            }
        }
    }

    protected void m(FetchState fetchState, InputStream inputStream, int i10) {
        r8.k c10;
        if (i10 > 0) {
            c10 = this.f10511a.e(i10);
        } else {
            c10 = this.f10511a.c();
        }
        byte[] bArr = (byte[]) this.f10512b.get(16384);
        while (true) {
            try {
                int read = inputStream.read(bArr);
                if (read >= 0) {
                    if (read > 0) {
                        c10.write(bArr, 0, read);
                        i(c10, fetchState);
                        fetchState.a().c(e(c10.size(), i10));
                    }
                } else {
                    this.f10513c.onFetchCompletion(fetchState, c10.size());
                    h(c10, fetchState);
                    this.f10512b.release(bArr);
                    c10.close();
                    return;
                }
            } catch (Throwable th2) {
                this.f10512b.release(bArr);
                c10.close();
                throw th2;
            }
        }
    }
}
