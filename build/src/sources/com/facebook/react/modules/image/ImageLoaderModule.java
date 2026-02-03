package com.facebook.react.modules.image;

import android.net.Uri;
import android.util.SparseArray;
import com.facebook.common.references.CloseableReference;
import com.facebook.datasource.DataSource;
import com.facebook.fbreact.specs.NativeImageLoaderAndroidSpec;
import com.facebook.imagepipeline.core.ImagePipeline;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.GuardedAsyncTask;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapBuilder;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.fresco.ReactNetworkImageRequest;
import com.facebook.react.views.image.ReactCallerContextFactory;
import com.facebook.react.views.imagehelper.ImageSource;
import e9.d;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import m8.a;
import org.jetbrains.annotations.NotNull;
import sa.e;
import y8.b;
@ReactModule(name = "ImageLoader")
@Metadata(d1 = {"\u0000n\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\b\u0001\u0018\u0000 42\u00020\u00012\u00020\u0002:\u00014B\u0011\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006B\u001b\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\u0004\b\u0005\u0010\tB!\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\u0006\u0010\f\u001a\u00020\r¢\u0006\u0004\b\u0005\u0010\u000eJ\u001a\u0010\u001c\u001a\u00020\u001d2\b\u0010\u001e\u001a\u0004\u0018\u00010\u001f2\u0006\u0010 \u001a\u00020!H\u0017J$\u0010\"\u001a\u00020\u001d2\b\u0010\u001e\u001a\u0004\u0018\u00010\u001f2\b\u0010#\u001a\u0004\u0018\u00010$2\u0006\u0010 \u001a\u00020!H\u0017J\"\u0010%\u001a\u00020\u001d2\b\u0010\u001e\u001a\u0004\u0018\u00010\u001f2\u0006\u0010&\u001a\u00020'2\u0006\u0010 \u001a\u00020!H\u0016J\u0010\u0010(\u001a\u00020\u001d2\u0006\u0010)\u001a\u00020'H\u0016J\u0018\u0010*\u001a\u00020\u001d2\u0006\u0010+\u001a\u00020,2\u0006\u0010 \u001a\u00020!H\u0017J \u0010-\u001a\u00020\u001d2\u0006\u0010)\u001a\u00020.2\u000e\u0010/\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00140\u0013H\u0002J\u001a\u00100\u001a\f\u0012\u0006\u0012\u0004\u0018\u00010\u0014\u0018\u00010\u00132\u0006\u0010)\u001a\u00020.H\u0002J\b\u00101\u001a\u00020\u001dH\u0016J\b\u00102\u001a\u00020\u001dH\u0016J\b\u00103\u001a\u00020\u001dH\u0016R\u0010\u0010\u000f\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u001c\u0010\u0011\u001a\u0010\u0012\f\u0012\n\u0012\u0006\u0012\u0004\u0018\u00010\u00140\u00130\u0012X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\f\u001a\u0004\u0018\u00010\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u0018\u0010\u0007\u001a\u0004\u0018\u00010\b8BX\u0082\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R$\u0010\n\u001a\u00020\u000b2\u0006\u0010\u0017\u001a\u00020\u000b8B@BX\u0082\u000e¢\u0006\f\u001a\u0004\b\u0018\u0010\u0019\"\u0004\b\u001a\u0010\u001b¨\u00065"}, d2 = {"Lcom/facebook/react/modules/image/ImageLoaderModule;", "Lcom/facebook/fbreact/specs/NativeImageLoaderAndroidSpec;", "Lcom/facebook/react/bridge/LifecycleEventListener;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "callerContext", "", "(Lcom/facebook/react/bridge/ReactApplicationContext;Ljava/lang/Object;)V", "imagePipeline", "Lcom/facebook/imagepipeline/core/ImagePipeline;", "callerContextFactory", "Lcom/facebook/react/views/image/ReactCallerContextFactory;", "(Lcom/facebook/react/bridge/ReactApplicationContext;Lcom/facebook/imagepipeline/core/ImagePipeline;Lcom/facebook/react/views/image/ReactCallerContextFactory;)V", "_imagePipeline", "enqueuedRequestMonitor", "enqueuedRequests", "Landroid/util/SparseArray;", "Lcom/facebook/datasource/DataSource;", "Ljava/lang/Void;", "getCallerContext", "()Ljava/lang/Object;", "value", "getImagePipeline", "()Lcom/facebook/imagepipeline/core/ImagePipeline;", "setImagePipeline", "(Lcom/facebook/imagepipeline/core/ImagePipeline;)V", "getSize", "", "uriString", "", BaseJavaModule.METHOD_TYPE_PROMISE, "Lcom/facebook/react/bridge/Promise;", "getSizeWithHeaders", "headers", "Lcom/facebook/react/bridge/ReadableMap;", "prefetchImage", "requestIdAsDouble", "", "abortRequest", "requestId", "queryCache", "uris", "Lcom/facebook/react/bridge/ReadableArray;", "registerRequest", "", "request", "removeRequest", "onHostResume", "onHostPause", "onHostDestroy", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nImageLoaderModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ImageLoaderModule.kt\ncom/facebook/react/modules/image/ImageLoaderModule\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,289:1\n1#2:290\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ImageLoaderModule extends NativeImageLoaderAndroidSpec implements LifecycleEventListener {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String ERROR_GET_SIZE_FAILURE = "E_GET_SIZE_FAILURE";
    @NotNull
    private static final String ERROR_INVALID_URI = "E_INVALID_URI";
    @NotNull
    private static final String ERROR_PREFETCH_FAILURE = "E_PREFETCH_FAILURE";
    @NotNull
    public static final String NAME = "ImageLoader";
    private ImagePipeline _imagePipeline;
    private final Object callerContext;
    private ReactCallerContextFactory callerContextFactory;
    @NotNull
    private final Object enqueuedRequestMonitor;
    @NotNull
    private final SparseArray<DataSource> enqueuedRequests;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lcom/facebook/react/modules/image/ImageLoaderModule$Companion;", "", "<init>", "()V", "ERROR_INVALID_URI", "", "ERROR_PREFETCH_FAILURE", "ERROR_GET_SIZE_FAILURE", "NAME", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ImageLoaderModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.enqueuedRequestMonitor = new Object();
        this.enqueuedRequests = new SparseArray<>();
        this.callerContext = this;
    }

    private final Object getCallerContext() {
        Object orCreateCallerContext;
        ReactCallerContextFactory reactCallerContextFactory = this.callerContextFactory;
        if (reactCallerContextFactory != null && (orCreateCallerContext = reactCallerContextFactory.getOrCreateCallerContext("", "")) != null) {
            return orCreateCallerContext;
        }
        return this.callerContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ImagePipeline getImagePipeline() {
        ImagePipeline imagePipeline = this._imagePipeline;
        if (imagePipeline == null) {
            ImagePipeline a10 = d.a();
            Intrinsics.checkNotNullExpressionValue(a10, "getImagePipeline(...)");
            return a10;
        }
        return imagePipeline;
    }

    private final void registerRequest(int i10, DataSource dataSource) {
        synchronized (this.enqueuedRequestMonitor) {
            this.enqueuedRequests.put(i10, dataSource);
            Unit unit = Unit.f32464a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final DataSource removeRequest(int i10) {
        DataSource dataSource;
        synchronized (this.enqueuedRequestMonitor) {
            dataSource = this.enqueuedRequests.get(i10);
            this.enqueuedRequests.remove(i10);
        }
        return dataSource;
    }

    private final void setImagePipeline(ImagePipeline imagePipeline) {
        this._imagePipeline = imagePipeline;
    }

    @Override // com.facebook.fbreact.specs.NativeImageLoaderAndroidSpec
    public void abortRequest(double d10) {
        DataSource removeRequest = removeRequest((int) d10);
        if (removeRequest != null) {
            removeRequest.close();
        }
    }

    @Override // com.facebook.fbreact.specs.NativeImageLoaderAndroidSpec
    @ReactMethod
    public void getSize(String str, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (str != null && str.length() != 0) {
            ReactApplicationContext reactApplicationContext = getReactApplicationContext();
            Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
            ImageRequest a10 = ImageRequestBuilder.x(new ImageSource(reactApplicationContext, str, 0.0d, 0.0d, null, false, 60, null).getUri()).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            getImagePipeline().k(a10, getCallerContext()).c(new b() { // from class: com.facebook.react.modules.image.ImageLoaderModule$getSize$dataSubscriber$1
                @Override // y8.b
                protected void onFailureImpl(DataSource dataSource) {
                    Intrinsics.checkNotNullParameter(dataSource, "dataSource");
                    Promise.this.reject("E_GET_SIZE_FAILURE", dataSource.b());
                }

                @Override // y8.b
                protected void onNewResultImpl(DataSource dataSource) {
                    Intrinsics.checkNotNullParameter(dataSource, "dataSource");
                    if (!dataSource.isFinished()) {
                        return;
                    }
                    CloseableReference closeableReference = (CloseableReference) dataSource.getResult();
                    if (closeableReference != null) {
                        try {
                            Object C0 = closeableReference.C0();
                            Intrinsics.checkNotNullExpressionValue(C0, "get(...)");
                            e eVar = (e) C0;
                            WritableMap createMap = Arguments.createMap();
                            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                            ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
                            readableMapBuilder.put("width", eVar.getWidth());
                            readableMapBuilder.put("height", eVar.getHeight());
                            Promise.this.resolve(createMap);
                            return;
                        } catch (Exception e10) {
                            Promise.this.reject("E_GET_SIZE_FAILURE", e10);
                            return;
                        } finally {
                            CloseableReference.N(closeableReference);
                        }
                    }
                    Promise.this.reject("E_GET_SIZE_FAILURE", "Failed to get the size of the image");
                }
            }, a.a());
            return;
        }
        promise.reject(ERROR_INVALID_URI, "Cannot get the size of an image for an empty URI");
    }

    @Override // com.facebook.fbreact.specs.NativeImageLoaderAndroidSpec
    @ReactMethod
    public void getSizeWithHeaders(String str, ReadableMap readableMap, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (str != null && str.length() != 0) {
            ReactApplicationContext reactApplicationContext = getReactApplicationContext();
            Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
            ImageRequestBuilder x10 = ImageRequestBuilder.x(new ImageSource(reactApplicationContext, str, 0.0d, 0.0d, null, false, 60, null).getUri());
            Intrinsics.checkNotNullExpressionValue(x10, "newBuilderWithSource(...)");
            getImagePipeline().k(ReactNetworkImageRequest.Companion.fromBuilderWithHeaders$default(ReactNetworkImageRequest.Companion, x10, readableMap, null, 4, null), getCallerContext()).c(new b() { // from class: com.facebook.react.modules.image.ImageLoaderModule$getSizeWithHeaders$dataSubscriber$1
                @Override // y8.b
                protected void onFailureImpl(DataSource dataSource) {
                    Intrinsics.checkNotNullParameter(dataSource, "dataSource");
                    Promise.this.reject("E_GET_SIZE_FAILURE", dataSource.b());
                }

                @Override // y8.b
                protected void onNewResultImpl(DataSource dataSource) {
                    Intrinsics.checkNotNullParameter(dataSource, "dataSource");
                    if (!dataSource.isFinished()) {
                        return;
                    }
                    CloseableReference closeableReference = (CloseableReference) dataSource.getResult();
                    if (closeableReference != null) {
                        try {
                            Object C0 = closeableReference.C0();
                            Intrinsics.checkNotNullExpressionValue(C0, "get(...)");
                            e eVar = (e) C0;
                            WritableMap createMap = Arguments.createMap();
                            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                            ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
                            readableMapBuilder.put("width", eVar.getWidth());
                            readableMapBuilder.put("height", eVar.getHeight());
                            Promise.this.resolve(createMap);
                            return;
                        } catch (Exception e10) {
                            Promise.this.reject("E_GET_SIZE_FAILURE", e10);
                            return;
                        } finally {
                            CloseableReference.N(closeableReference);
                        }
                    }
                    Promise.this.reject("E_GET_SIZE_FAILURE", "Failed to get the size of the image");
                }
            }, a.a());
            return;
        }
        promise.reject(ERROR_INVALID_URI, "Cannot get the size of an image for an empty URI");
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
        synchronized (this.enqueuedRequestMonitor) {
            try {
                int size = this.enqueuedRequests.size();
                for (int i10 = 0; i10 < size; i10++) {
                    DataSource valueAt = this.enqueuedRequests.valueAt(i10);
                    Intrinsics.checkNotNullExpressionValue(valueAt, "valueAt(...)");
                    valueAt.close();
                }
                this.enqueuedRequests.clear();
                Unit unit = Unit.f32464a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
    }

    @Override // com.facebook.fbreact.specs.NativeImageLoaderAndroidSpec
    public void prefetchImage(String str, double d10, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        final int i10 = (int) d10;
        if (str != null && str.length() != 0) {
            ImageRequest a10 = ImageRequestBuilder.x(Uri.parse(str)).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            DataSource B = getImagePipeline().B(a10, getCallerContext());
            b bVar = new b() { // from class: com.facebook.react.modules.image.ImageLoaderModule$prefetchImage$prefetchSubscriber$1
                @Override // y8.b
                protected void onFailureImpl(DataSource dataSource) {
                    Intrinsics.checkNotNullParameter(dataSource, "dataSource");
                    try {
                        ImageLoaderModule.this.removeRequest(i10);
                        promise.reject("E_PREFETCH_FAILURE", dataSource.b());
                    } finally {
                        dataSource.close();
                    }
                }

                @Override // y8.b
                protected void onNewResultImpl(DataSource dataSource) {
                    Intrinsics.checkNotNullParameter(dataSource, "dataSource");
                    if (dataSource.isFinished()) {
                        try {
                            ImageLoaderModule.this.removeRequest(i10);
                            promise.resolve(Boolean.TRUE);
                        } catch (Exception e10) {
                            promise.reject("E_PREFETCH_FAILURE", e10);
                        } finally {
                            dataSource.close();
                        }
                    }
                }
            };
            registerRequest(i10, B);
            B.c(bVar, a.a());
            return;
        }
        promise.reject(ERROR_INVALID_URI, "Cannot prefetch an image for an empty URI");
    }

    @Override // com.facebook.fbreact.specs.NativeImageLoaderAndroidSpec
    @ReactMethod
    public void queryCache(@NotNull final ReadableArray uris, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(uris, "uris");
        Intrinsics.checkNotNullParameter(promise, "promise");
        final ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        new GuardedAsyncTask<Void, Void>(this, uris, reactApplicationContext) { // from class: com.facebook.react.modules.image.ImageLoaderModule$queryCache$1
            final /* synthetic */ ReadableArray $uris;
            final /* synthetic */ ImageLoaderModule this$0;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(reactApplicationContext);
                Intrinsics.checkNotNull(reactApplicationContext);
            }

            /* JADX INFO: Access modifiers changed from: protected */
            @Override // com.facebook.react.bridge.GuardedAsyncTask
            public void doInBackgroundGuarded(Void... params) {
                ImagePipeline imagePipeline;
                Intrinsics.checkNotNullParameter(params, "params");
                ImageLoaderModule imageLoaderModule = this.this$0;
                ReadableArray readableArray = this.$uris;
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
                imagePipeline = imageLoaderModule.getImagePipeline();
                int size = readableArray.size();
                for (int i10 = 0; i10 < size; i10++) {
                    String string = readableArray.getString(i10);
                    if (string != null && string.length() != 0) {
                        Uri parse = Uri.parse(string);
                        if (imagePipeline.t(parse)) {
                            readableMapBuilder.put(string, "memory");
                        } else if (imagePipeline.v(parse)) {
                            readableMapBuilder.put(string, "disk");
                        }
                    }
                }
                Promise.this.resolve(createMap);
            }
        }.executeOnExecutor(GuardedAsyncTask.THREAD_POOL_EXECUTOR, new Void[0]);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ImageLoaderModule(@NotNull ReactApplicationContext reactContext, Object obj) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.enqueuedRequestMonitor = new Object();
        this.enqueuedRequests = new SparseArray<>();
        this.callerContext = obj;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ImageLoaderModule(@NotNull ReactApplicationContext reactContext, @NotNull ImagePipeline imagePipeline, @NotNull ReactCallerContextFactory callerContextFactory) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(imagePipeline, "imagePipeline");
        Intrinsics.checkNotNullParameter(callerContextFactory, "callerContextFactory");
        this.enqueuedRequestMonitor = new Object();
        this.enqueuedRequests = new SparseArray<>();
        this.callerContextFactory = callerContextFactory;
        setImagePipeline(imagePipeline);
        this.callerContext = null;
    }
}
