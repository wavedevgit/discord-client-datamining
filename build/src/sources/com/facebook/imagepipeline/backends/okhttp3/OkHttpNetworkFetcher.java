package com.facebook.imagepipeline.backends.okhttp3;

import android.net.Uri;
import android.os.Looper;
import android.os.SystemClock;
import com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher;
import com.facebook.imagepipeline.common.BytesRange;
import com.facebook.imagepipeline.producers.Consumer;
import com.facebook.imagepipeline.producers.FetchState;
import com.facebook.imagepipeline.producers.NetworkFetcher;
import com.facebook.imagepipeline.producers.ProducerContext;
import com.facebook.imagepipeline.producers.d;
import com.facebook.imagepipeline.producers.f;
import ir.v;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.Executor;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.CacheControl;
import okhttp3.Call;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class OkHttpNetworkFetcher extends d {
    @NotNull
    private static final Companion Companion = new Companion(null);
    @NotNull
    private static final String FETCH_TIME = "fetch_time";
    @NotNull
    private static final String IMAGE_SIZE = "image_size";
    @NotNull
    private static final String QUEUE_TIME = "queue_time";
    @NotNull
    private static final String TOTAL_TIME = "total_time";
    private final CacheControl cacheControl;
    @NotNull
    private final Call.Factory callFactory;
    @NotNull
    private final Executor cancellationExecutor;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class OkHttpNetworkFetchState extends FetchState {

        /* renamed from: f  reason: collision with root package name */
        public long f11422f;

        /* renamed from: g  reason: collision with root package name */
        public long f11423g;

        /* renamed from: h  reason: collision with root package name */
        public long f11424h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public OkHttpNetworkFetchState(Consumer consumer, ProducerContext producerContext) {
            super(consumer, producerContext);
            Intrinsics.checkNotNullParameter(consumer, "consumer");
            Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Call f11425a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ OkHttpNetworkFetcher f11426b;

        a(Call call, OkHttpNetworkFetcher okHttpNetworkFetcher) {
            this.f11425a = call;
            this.f11426b = okHttpNetworkFetcher;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void f(Call call) {
            call.cancel();
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            if (Intrinsics.areEqual(Looper.myLooper(), Looper.getMainLooper())) {
                Executor executor = this.f11426b.cancellationExecutor;
                final Call call = this.f11425a;
                executor.execute(new Runnable() { // from class: com.facebook.imagepipeline.backends.okhttp3.b
                    @Override // java.lang.Runnable
                    public final void run() {
                        OkHttpNetworkFetcher.a.f(Call.this);
                    }
                });
                return;
            }
            this.f11425a.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements tt.b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ OkHttpNetworkFetchState f11427d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ OkHttpNetworkFetcher f11428e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ NetworkFetcher.Callback f11429i;

        b(OkHttpNetworkFetchState okHttpNetworkFetchState, OkHttpNetworkFetcher okHttpNetworkFetcher, NetworkFetcher.Callback callback) {
            this.f11427d = okHttpNetworkFetchState;
            this.f11428e = okHttpNetworkFetcher;
            this.f11429i = callback;
        }

        @Override // tt.b
        public void onFailure(Call call, IOException e10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(e10, "e");
            this.f11428e.a(call, e10, this.f11429i);
        }

        @Override // tt.b
        public void onResponse(Call call, Response response) {
            int contentLength;
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            this.f11427d.f11423g = SystemClock.elapsedRealtime();
            ResponseBody x10 = response.x();
            if (x10 != null) {
                OkHttpNetworkFetcher okHttpNetworkFetcher = this.f11428e;
                NetworkFetcher.Callback callback = this.f11429i;
                OkHttpNetworkFetchState okHttpNetworkFetchState = this.f11427d;
                try {
                    try {
                        if (!response.isSuccessful()) {
                            okHttpNetworkFetcher.a(call, okHttpNetworkFetcher.b("Unexpected HTTP code " + response, response), callback);
                        } else {
                            BytesRange c10 = BytesRange.f11441c.c(response.A0("Content-Range"));
                            if (c10 != null && (c10.f11443a != 0 || c10.f11444b != Integer.MAX_VALUE)) {
                                okHttpNetworkFetchState.j(c10);
                                okHttpNetworkFetchState.i(8);
                            }
                            if (x10.contentLength() < 0) {
                                contentLength = 0;
                            } else {
                                contentLength = (int) x10.contentLength();
                            }
                            callback.b(x10.byteStream(), contentLength);
                        }
                    } catch (Exception e10) {
                        okHttpNetworkFetcher.a(call, e10, callback);
                    }
                    Unit unit = Unit.f33282a;
                    tr.c.a(x10, null);
                } finally {
                }
            } else {
                OkHttpNetworkFetcher okHttpNetworkFetcher2 = this.f11428e;
                okHttpNetworkFetcher2.a(call, okHttpNetworkFetcher2.b("Response body null: " + response, response), this.f11429i);
            }
        }
    }

    public /* synthetic */ OkHttpNetworkFetcher(Call.Factory factory, Executor executor, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(factory, executor, (i10 & 4) != 0 ? true : z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void a(Call call, Exception exc, NetworkFetcher.Callback callback) {
        if (call.x()) {
            callback.a();
        } else {
            callback.onFailure(exc);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final IOException b(String str, Response response) {
        return new IOException(str, c.f11432i.a(response));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void fetchWithRequest(@NotNull OkHttpNetworkFetchState fetchState, @NotNull NetworkFetcher.Callback callback, @NotNull Request request) {
        Intrinsics.checkNotNullParameter(fetchState, "fetchState");
        Intrinsics.checkNotNullParameter(callback, "callback");
        Intrinsics.checkNotNullParameter(request, "request");
        Call a10 = this.callFactory.a(request);
        fetchState.b().h(new a(a10, this));
        a10.C0(new b(fetchState, this, callback));
    }

    public OkHttpNetworkFetcher(Call.Factory callFactory, Executor cancellationExecutor, boolean z10) {
        Intrinsics.checkNotNullParameter(callFactory, "callFactory");
        Intrinsics.checkNotNullParameter(cancellationExecutor, "cancellationExecutor");
        this.callFactory = callFactory;
        this.cancellationExecutor = cancellationExecutor;
        this.cacheControl = z10 ? new CacheControl.a().e().a() : null;
    }

    @Override // com.facebook.imagepipeline.producers.NetworkFetcher
    @NotNull
    public OkHttpNetworkFetchState createFetchState(@NotNull Consumer consumer, @NotNull ProducerContext context) {
        Intrinsics.checkNotNullParameter(consumer, "consumer");
        Intrinsics.checkNotNullParameter(context, "context");
        return new OkHttpNetworkFetchState(consumer, context);
    }

    @Override // com.facebook.imagepipeline.producers.NetworkFetcher
    public void fetch(OkHttpNetworkFetchState fetchState, NetworkFetcher.Callback callback) {
        Intrinsics.checkNotNullParameter(fetchState, "fetchState");
        Intrinsics.checkNotNullParameter(callback, "callback");
        fetchState.f11422f = SystemClock.elapsedRealtime();
        Uri g10 = fetchState.g();
        Intrinsics.checkNotNullExpressionValue(g10, "getUri(...)");
        try {
            Request.Builder d10 = new Request.Builder().l(g10.toString()).d();
            CacheControl cacheControl = this.cacheControl;
            if (cacheControl != null) {
                d10.c(cacheControl);
            }
            BytesRange bytesRange = fetchState.b().V().getBytesRange();
            if (bytesRange != null) {
                d10.a("Range", bytesRange.f());
            }
            Request b10 = d10.b();
            Intrinsics.checkNotNullExpressionValue(b10, "build(...)");
            fetchWithRequest(fetchState, callback, b10);
        } catch (Exception e10) {
            callback.onFailure(e10);
        }
    }

    @Override // com.facebook.imagepipeline.producers.NetworkFetcher
    public Map<String, String> getExtraMap(@NotNull OkHttpNetworkFetchState fetchState, int i10) {
        Intrinsics.checkNotNullParameter(fetchState, "fetchState");
        return o0.m(v.a(QUEUE_TIME, String.valueOf(fetchState.f11423g - fetchState.f11422f)), v.a(FETCH_TIME, String.valueOf(fetchState.f11424h - fetchState.f11423g)), v.a(TOTAL_TIME, String.valueOf(fetchState.f11424h - fetchState.f11422f)), v.a(IMAGE_SIZE, String.valueOf(i10)));
    }

    @Override // com.facebook.imagepipeline.producers.NetworkFetcher
    public void onFetchCompletion(@NotNull OkHttpNetworkFetchState fetchState, int i10) {
        Intrinsics.checkNotNullParameter(fetchState, "fetchState");
        fetchState.f11424h = SystemClock.elapsedRealtime();
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public OkHttpNetworkFetcher(okhttp3.OkHttpClient r8) {
        /*
            r7 = this;
            java.lang.String r0 = "okHttpClient"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
            okhttp3.Dispatcher r0 = r8.s()
            java.util.concurrent.ExecutorService r3 = r0.e()
            java.lang.String r0 = "executorService(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r3, r0)
            r5 = 4
            r6 = 0
            r4 = 0
            r1 = r7
            r2 = r8
            r1.<init>(r2, r3, r4, r5, r6)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.<init>(okhttp3.OkHttpClient):void");
    }
}
