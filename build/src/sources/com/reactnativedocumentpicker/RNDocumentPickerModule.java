package com.reactnativedocumentpicker;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.ClipData;
import android.content.ContentResolver;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.util.Base64;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import dm.f;
import dm.g;
import dm.h;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import js.m0;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import kotlin.text.Charsets;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.i;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0088\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010%\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u0000 A2\u00020\u00012\u00020\u0002:\u0001BB\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u0017\u0010\n\u001a\u00020\t2\u0006\u0010\b\u001a\u00020\u0007H\u0003¢\u0006\u0004\b\n\u0010\u000bJ\u0017\u0010\f\u001a\u00020\t2\u0006\u0010\b\u001a\u00020\u0007H\u0002¢\u0006\u0004\b\f\u0010\u000bJ\u000f\u0010\r\u001a\u00020\tH\u0016¢\u0006\u0004\b\r\u0010\u000eJ\u001f\u0010\u0013\u001a\u00020\t2\u0006\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u0011H\u0017¢\u0006\u0004\b\u0013\u0010\u0014J\u001f\u0010\u0016\u001a\u00020\t2\u0006\u0010\u0015\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u0011H\u0016¢\u0006\u0004\b\u0016\u0010\u0014J\u001f\u0010\u0017\u001a\u00020\t2\u0006\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u0011H\u0017¢\u0006\u0004\b\u0017\u0010\u0014J\u001f\u0010\u0018\u001a\u00020\t2\u0006\u0010\u0015\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u0011H\u0017¢\u0006\u0004\b\u0018\u0010\u0014J\u001f\u0010\u001d\u001a\u00020\u001c2\u0006\u0010\u001a\u001a\u00020\u00192\u0006\u0010\u001b\u001a\u00020\u0019H\u0016¢\u0006\u0004\b\u001d\u0010\u001eJ\u001f\u0010!\u001a\u00020\t2\u0006\u0010 \u001a\u00020\u001f2\u0006\u0010\u0012\u001a\u00020\u0011H\u0016¢\u0006\u0004\b!\u0010\"J\u001f\u0010#\u001a\u00020\t2\u0006\u0010 \u001a\u00020\u001f2\u0006\u0010\u0012\u001a\u00020\u0011H\u0016¢\u0006\u0004\b#\u0010\"J\u001f\u0010$\u001a\u00020\t2\u0006\u0010\u0015\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u0011H\u0016¢\u0006\u0004\b$\u0010\u0014J\u0015\u0010%\u001a\u00020\t2\u0006\u0010\b\u001a\u00020\u0007¢\u0006\u0004\b%\u0010\u000bJ\u000f\u0010&\u001a\u00020\tH\u0016¢\u0006\u0004\b&\u0010\u000eJ\u000f\u0010'\u001a\u00020\tH\u0016¢\u0006\u0004\b'\u0010\u000eJ\u000f\u0010(\u001a\u00020\tH\u0016¢\u0006\u0004\b(\u0010\u000eR\u0018\u0010*\u001a\u0004\u0018\u00010)8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b*\u0010+R\u0018\u0010-\u001a\u0004\u0018\u00010,8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b-\u0010.R\u0014\u00100\u001a\u00020/8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b0\u00101R \u00103\u001a\u000e\u0012\u0004\u0012\u00020\u0019\u0012\u0004\u0012\u00020,028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b3\u00104R\u0014\u00106\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b6\u00107R\u0014\u00109\u001a\u0002088\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b9\u0010:R\u0014\u0010<\u001a\u00020;8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b<\u0010=R\u0014\u0010?\u001a\u00020>8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b?\u0010@¨\u0006C"}, d2 = {"Lcom/reactnativedocumentpicker/RNDocumentPickerModule;", "Lcom/reactnativedocumentpicker/NativeDocumentPickerSpec;", "Lcom/facebook/react/bridge/LifecycleEventListener;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "reactContext", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "Landroid/content/Intent;", "intent", "", "processDirectoryPickerResult", "(Landroid/content/Intent;)V", "processSaveAsResult", "invalidate", "()V", "Lcom/facebook/react/bridge/ReadableMap;", "opts", "Lcom/facebook/react/bridge/Promise;", BaseJavaModule.METHOD_TYPE_PROMISE, "pick", "(Lcom/facebook/react/bridge/ReadableMap;Lcom/facebook/react/bridge/Promise;)V", "options", "saveDocument", "pickDirectory", "keepLocalCopy", "", "kind", "value", "Lcom/facebook/react/bridge/WritableMap;", "isKnownType", "(Ljava/lang/String;Ljava/lang/String;)Lcom/facebook/react/bridge/WritableMap;", "Lcom/facebook/react/bridge/ReadableArray;", "uris", "releaseSecureAccess", "(Lcom/facebook/react/bridge/ReadableArray;Lcom/facebook/react/bridge/Promise;)V", "releaseLongTermAccess", "writeDocuments", "processFilePickerResult", "onHostResume", "onHostPause", "onHostDestroy", "Ldm/f;", "currentPickOptions", "Ldm/f;", "Landroid/net/Uri;", "currentUriOfFileBeingExported", "Landroid/net/Uri;", "Ldm/h;", "promiseWrapper", "Ldm/h;", "", "pickedFilesUriMap", "Ljava/util/Map;", "Ldm/e;", "metadataGetter", "Ldm/e;", "Ldm/c;", "fileOps", "Ldm/c;", "Lkotlinx/coroutines/CoroutineScope;", "fileCopyingCoroutine", "Lkotlinx/coroutines/CoroutineScope;", "Lcom/facebook/react/bridge/ActivityEventListener;", "activityEventListener", "Lcom/facebook/react/bridge/ActivityEventListener;", "Companion", "a", "react-native-documents_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nRNDocumentPickerModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RNDocumentPickerModule.kt\ncom/reactnativedocumentpicker/RNDocumentPickerModule\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,352:1\n1#2:353\n1563#3:354\n1634#3,3:355\n*S KotlinDebug\n*F\n+ 1 RNDocumentPickerModule.kt\ncom/reactnativedocumentpicker/RNDocumentPickerModule\n*L\n309#1:354\n309#1:355,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class RNDocumentPickerModule extends NativeDocumentPickerSpec implements LifecycleEventListener {
    @NotNull
    public static final a Companion = new a(null);
    @NotNull
    private static final String E_INVALID_DATA_RETURNED = "INVALID_DATA_RETURNED";
    @NotNull
    private static final String E_OTHER_PRESENTING_ERROR = "OTHER_PRESENTING_ERROR";
    private static final int PICK_DIR_REQUEST_CODE = 42;
    private static final int PICK_FILES_REQUEST_CODE = 41;
    @NotNull
    private static final String PRESENTER_IS_NULL = "NULL_PRESENTER";
    private static final int SAVE_DOC_REQUEST_CODE = 43;
    @NotNull
    private static final String UNABLE_TO_OPEN_FILE_TYPE = "UNABLE_TO_OPEN_FILE_TYPE";
    @NotNull
    private final ActivityEventListener activityEventListener;
    private f currentPickOptions;
    private Uri currentUriOfFileBeingExported;
    @NotNull
    private final CoroutineScope fileCopyingCoroutine;
    @NotNull
    private final dm.c fileOps;
    @NotNull
    private final dm.e metadataGetter;
    @NotNull
    private final Map<String, Uri> pickedFilesUriMap;
    @NotNull
    private final h promiseWrapper;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void a(Promise promise) {
            Intrinsics.checkNotNullParameter(promise, "promise");
            promise.reject(RNDocumentPickerModule.PRESENTER_IS_NULL, RNDocumentPickerModule.PRESENTER_IS_NULL);
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends BaseActivityEventListener {
        b() {
        }

        @Override // com.facebook.react.bridge.BaseActivityEventListener, com.facebook.react.bridge.ActivityEventListener
        public void onActivityResult(Activity activity, int i10, int i11, Intent intent) {
            Intrinsics.checkNotNullParameter(activity, "activity");
            if (i10 != 41 && i10 != RNDocumentPickerModule.PICK_DIR_REQUEST_CODE && i10 != 43) {
                return;
            }
            if (i11 != -1) {
                if (i11 != 0) {
                    h hVar = RNDocumentPickerModule.this.promiseWrapper;
                    hVar.d("UNEXPECTED_ACTIVITY_RESULT", "Unknown activity result: " + i11, null);
                    return;
                }
                RNDocumentPickerModule.this.promiseWrapper.e();
            } else if (intent == null) {
                RNDocumentPickerModule.this.promiseWrapper.c(RNDocumentPickerModule.E_INVALID_DATA_RETURNED, "Data from document picker is null");
            } else {
                switch (i10) {
                    case 41:
                        RNDocumentPickerModule.this.processFilePickerResult(intent);
                        return;
                    case RNDocumentPickerModule.PICK_DIR_REQUEST_CODE /* 42 */:
                        RNDocumentPickerModule.this.processDirectoryPickerResult(intent);
                        return;
                    case 43:
                        RNDocumentPickerModule.this.processSaveAsResult(intent);
                        return;
                    default:
                        h hVar2 = RNDocumentPickerModule.this.promiseWrapper;
                        hVar2.d("UNEXPECTED_ACTIVITY_RESULT", "Unknown activity result: " + i11, null);
                        return;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f17164d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ReadableArray f17166i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f17167o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Promise f17168p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(ReadableArray readableArray, String str, Promise promise, Continuation continuation) {
            super(2, continuation);
            this.f17166i = readableArray;
            this.f17167o = str;
            this.f17168p = promise;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f17166i, this.f17167o, this.f17168p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f17164d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                dm.c cVar = RNDocumentPickerModule.this.fileOps;
                ReactApplicationContext reactApplicationContext = RNDocumentPickerModule.this.getReactApplicationContext();
                Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "access$getReactApplicationContext(...)");
                ReadableArray readableArray = this.f17166i;
                com.reactnativedocumentpicker.a a10 = com.reactnativedocumentpicker.a.f17176e.a(this.f17167o);
                this.f17164d = 1;
                obj = cVar.f(reactApplicationContext, readableArray, a10, this);
                if (obj == f10) {
                    return f10;
                }
            }
            this.f17168p.resolve((ReadableArray) obj);
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f17169d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ List f17171i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(List list, Continuation continuation) {
            super(2, continuation);
            this.f17171i = list;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f17171i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f17169d;
            try {
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    f fVar = RNDocumentPickerModule.this.currentPickOptions;
                    if (fVar != null) {
                        dm.e eVar = RNDocumentPickerModule.this.metadataGetter;
                        ReactApplicationContext reactApplicationContext = RNDocumentPickerModule.this.getReactApplicationContext();
                        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "access$getReactApplicationContext(...)");
                        List list = this.f17171i;
                        this.f17169d = 1;
                        obj = eVar.e(reactApplicationContext, list, fVar, this);
                        if (obj == f10) {
                            return f10;
                        }
                    } else {
                        throw new IllegalArgumentException("Failed requirement.");
                    }
                }
                RNDocumentPickerModule.this.promiseWrapper.h((ReadableArray) obj);
            } catch (Exception e10) {
                RNDocumentPickerModule.this.promiseWrapper.b(e10);
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f17172d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ ReadableMap f17173e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ RNDocumentPickerModule f17174i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Promise f17175o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(ReadableMap readableMap, RNDocumentPickerModule rNDocumentPickerModule, Promise promise, Continuation continuation) {
            super(2, continuation);
            this.f17173e = readableMap;
            this.f17174i = rNDocumentPickerModule;
            this.f17175o = promise;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f17173e, this.f17174i, this.f17175o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            String str;
            rr.b.f();
            if (this.f17172d == 0) {
                kotlin.c.b(obj);
                try {
                    if (this.f17173e.hasKey("uri")) {
                        str = this.f17173e.getString("uri");
                    } else {
                        str = null;
                    }
                    dm.c cVar = this.f17174i.fileOps;
                    Uri uri = this.f17174i.currentUriOfFileBeingExported;
                    ReactApplicationContext reactApplicationContext = this.f17174i.getReactApplicationContext();
                    Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "access$getReactApplicationContext(...)");
                    dm.a k10 = cVar.k(uri, str, reactApplicationContext);
                    dm.e eVar = this.f17174i.metadataGetter;
                    ContentResolver contentResolver = this.f17174i.getReactApplicationContext().getContentResolver();
                    Intrinsics.checkNotNullExpressionValue(contentResolver, "getContentResolver(...)");
                    eVar.f(contentResolver, k10, false);
                    WritableArray createArray = Arguments.createArray();
                    createArray.pushMap(k10.c());
                    Intrinsics.checkNotNullExpressionValue(createArray, "apply(...)");
                    this.f17175o.resolve(createArray);
                } catch (Exception e10) {
                    this.f17175o.reject(e10);
                }
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RNDocumentPickerModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.promiseWrapper = new h(NativeDocumentPickerSpec.NAME);
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        this.pickedFilesUriMap = linkedHashMap;
        this.metadataGetter = new dm.e(linkedHashMap);
        this.fileOps = new dm.c(linkedHashMap);
        this.fileCopyingCoroutine = i.a(m0.b());
        b bVar = new b();
        this.activityEventListener = bVar;
        reactContext.addActivityEventListener(bVar);
        reactContext.addLifecycleEventListener(this);
    }

    /* JADX INFO: Access modifiers changed from: private */
    @SuppressLint({"WrongConstant"})
    public final void processDirectoryPickerResult(Intent intent) {
        Uri data = intent.getData();
        f fVar = this.currentPickOptions;
        if (data != null && fVar != null) {
            WritableMap createMap = Arguments.createMap();
            createMap.putString("uri", data.toString());
            Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
            if (fVar.h()) {
                try {
                    getReactApplicationContext().getContentResolver().takePersistableUriPermission(data, intent.getFlags() & 3);
                    String uri = data.toString();
                    Intrinsics.checkNotNullExpressionValue(uri, "toString(...)");
                    byte[] bytes = uri.getBytes(Charsets.UTF_8);
                    Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
                    String encodeToString = Base64.encodeToString(bytes, 0);
                    createMap.putString("bookmarkStatus", "success");
                    createMap.putString("bookmark", encodeToString);
                } catch (Exception e10) {
                    String localizedMessage = e10.getLocalizedMessage();
                    if (localizedMessage == null && (localizedMessage = e10.getMessage()) == null) {
                        localizedMessage = "Unknown error with takePersistableUriPermission";
                    }
                    createMap.putString("bookmarkStatus", "error");
                    createMap.putString("bookmarkError", localizedMessage);
                }
            }
            this.promiseWrapper.h(createMap);
            return;
        }
        this.promiseWrapper.c(E_INVALID_DATA_RETURNED, "Data from document picker is null");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void processSaveAsResult(Intent intent) {
        Uri data = intent.getData();
        if (data != null) {
            this.pickedFilesUriMap.put(data.toString(), data);
            WritableMap createMap = Arguments.createMap();
            createMap.putString("uri", data.toString());
            Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
            this.promiseWrapper.h(createMap);
            return;
        }
        this.promiseWrapper.c(E_INVALID_DATA_RETURNED, "Data from document picker is null");
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        getReactApplicationContext().removeActivityEventListener(this.activityEventListener);
        super.invalidate();
    }

    @Override // com.reactnativedocumentpicker.NativeDocumentPickerSpec
    @NotNull
    public WritableMap isKnownType(@NotNull String kind, @NotNull String value) {
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(value, "value");
        return com.reactnativedocumentpicker.b.f17182a.b(kind, value);
    }

    @Override // com.reactnativedocumentpicker.NativeDocumentPickerSpec
    @ReactMethod
    public void keepLocalCopy(@NotNull ReadableMap options, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(promise, "promise");
        ReadableArray array = options.getArray("files");
        String string = options.getString("destination");
        if (string != null && array != null) {
            js.i.d(this.fileCopyingCoroutine, null, null, new c(array, string, promise, null), 3, null);
            return;
        }
        Set<String> keySet = options.toHashMap().keySet();
        promise.reject("keepLocalCopy", "You did not provide the correct options. Expected 'files' and 'destination', got: " + keySet);
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
        i.e(this.fileCopyingCoroutine, "host destroyed", null, 2, null);
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
    }

    @Override // com.reactnativedocumentpicker.NativeDocumentPickerSpec
    @ReactMethod
    public void pick(@NotNull ReadableMap opts, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(opts, "opts");
        Intrinsics.checkNotNullParameter(promise, "promise");
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null) {
            Companion.a(promise);
        } else if (this.promiseWrapper.i(promise, "pick")) {
            f a10 = g.a(opts);
            this.currentPickOptions = a10;
            try {
                currentActivity.startActivityForResult(dm.d.f20689a.a(a10), 41);
            } catch (ActivityNotFoundException e10) {
                promise.reject(UNABLE_TO_OPEN_FILE_TYPE, e10);
            } catch (Exception e11) {
                promise.reject(E_OTHER_PRESENTING_ERROR, e11);
            }
        }
    }

    @Override // com.reactnativedocumentpicker.NativeDocumentPickerSpec
    @ReactMethod
    public void pickDirectory(@NotNull ReadableMap opts, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(opts, "opts");
        Intrinsics.checkNotNullParameter(promise, "promise");
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null) {
            Companion.a(promise);
        } else if (this.promiseWrapper.i(promise, "pickDirectory")) {
            f a10 = g.a(opts);
            this.currentPickOptions = a10;
            try {
                Intent intent = new Intent("android.intent.action.OPEN_DOCUMENT_TREE");
                if (Build.VERSION.SDK_INT >= 26 && a10.c() != null) {
                    intent.putExtra("android.provider.extra.INITIAL_URI", a10.c());
                }
                currentActivity.startActivityForResult(intent, PICK_DIR_REQUEST_CODE);
            } catch (ActivityNotFoundException e10) {
                promise.reject(UNABLE_TO_OPEN_FILE_TYPE, e10);
            } catch (Exception e11) {
                promise.reject(E_OTHER_PRESENTING_ERROR, e11);
            }
        }
    }

    public final void processFilePickerResult(@NotNull Intent intent) {
        List l10;
        Intrinsics.checkNotNullParameter(intent, "intent");
        Uri data = intent.getData();
        ClipData clipData = intent.getClipData();
        if (clipData != null && clipData.getItemCount() > 0) {
            IntRange u10 = kotlin.ranges.d.u(0, clipData.getItemCount());
            l10 = new ArrayList(CollectionsKt.w(u10, 10));
            Iterator it = u10.iterator();
            while (it.hasNext()) {
                l10.add(clipData.getItemAt(((kotlin.collections.m0) it).nextInt()).getUri());
            }
        } else if (data != null) {
            l10 = CollectionsKt.e(data);
        } else {
            l10 = CollectionsKt.l();
        }
        js.i.d(i.a(m0.b()), null, null, new d(l10, null), 3, null);
    }

    @Override // com.reactnativedocumentpicker.NativeDocumentPickerSpec
    public void releaseLongTermAccess(@NotNull ReadableArray uris, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(uris, "uris");
        Intrinsics.checkNotNullParameter(promise, "promise");
        ContentResolver contentResolver = getReactApplicationContext().getContentResolver();
        WritableArray createArray = Arguments.createArray();
        Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
        int size = uris.size();
        for (int i10 = 0; i10 < size; i10++) {
            String string = uris.getString(i10);
            WritableMap createMap = Arguments.createMap();
            createMap.putString("uri", string);
            Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
            try {
                contentResolver.releasePersistableUriPermission(Uri.parse(string), 3);
                createMap.putString("status", "success");
            } catch (Exception e10) {
                createMap.putString("status", "error");
                String message = e10.getMessage();
                if (message == null) {
                    message = "Unknown error";
                }
                createMap.putString("errorMessage", message);
            }
            createArray.pushMap(createMap);
        }
        promise.resolve(createArray);
    }

    @Override // com.reactnativedocumentpicker.NativeDocumentPickerSpec
    public void releaseSecureAccess(@NotNull ReadableArray uris, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(uris, "uris");
        Intrinsics.checkNotNullParameter(promise, "promise");
        promise.resolve(null);
    }

    @Override // com.reactnativedocumentpicker.NativeDocumentPickerSpec
    public void saveDocument(@NotNull ReadableMap options, @NotNull Promise promise) {
        String type;
        String str;
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(promise, "promise");
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null) {
            Companion.a(promise);
        } else if (this.promiseWrapper.i(promise, "saveDocuments")) {
            try {
                ReadableArray array = options.getArray("sourceUris");
                Intrinsics.checkNotNull(array);
                Uri parse = Uri.parse(array.getString(0));
                this.currentUriOfFileBeingExported = parse;
                if (options.hasKey("mimeType")) {
                    type = options.getString("mimeType");
                } else {
                    type = getReactApplicationContext().getContentResolver().getType(parse);
                    if (type == null) {
                        throw new IllegalStateException("MIME type could not be determined from the URI");
                    }
                }
                if (options.hasKey("fileName")) {
                    str = options.getString("fileName");
                } else {
                    str = null;
                }
                Intent intent = new Intent("android.intent.action.CREATE_DOCUMENT");
                intent.addCategory("android.intent.category.OPENABLE");
                intent.setType(type);
                if (str != null) {
                    intent.putExtra("android.intent.extra.TITLE", str);
                }
                if (Build.VERSION.SDK_INT >= 26 && options.hasKey("initialUri")) {
                    intent.putExtra("android.provider.extra.INITIAL_URI", options.getString("initialUri"));
                }
                currentActivity.startActivityForResult(intent, 43);
            } catch (ActivityNotFoundException e10) {
                promise.reject(UNABLE_TO_OPEN_FILE_TYPE, e10);
            } catch (Exception e11) {
                promise.reject(E_OTHER_PRESENTING_ERROR, e11);
            }
        }
    }

    @Override // com.reactnativedocumentpicker.NativeDocumentPickerSpec
    public void writeDocuments(@NotNull ReadableMap options, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(promise, "promise");
        js.i.d(this.fileCopyingCoroutine, null, null, new e(options, this, promise, null), 3, null);
    }
}
