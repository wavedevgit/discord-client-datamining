package com.facebook.react.modules.blob;

import android.content.res.Resources;
import android.database.Cursor;
import android.net.Uri;
import android.webkit.MimeTypeMap;
import com.facebook.fbreact.specs.NativeBlobModuleSpec;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapBuilder;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.network.NetworkingModule;
import com.facebook.react.modules.websocket.WebSocketModule;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import ir.v;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.UUID;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.SourceDebugExtension;
import okhttp3.MediaType;
import okhttp3.RequestBody;
import okhttp3.ResponseBody;
import okio.ByteString;
import org.jetbrains.annotations.NotNull;
import tr.c;
@ReactModule(name = "BlobModule")
@Metadata(d1 = {"\u0000~\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0010\u0012\n\u0000\n\u0002\b\u0003\n\u0002\b\u0003\n\u0002\b\u0003\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010$\n\u0002\u0010\u0000\n\u0002\b\u0004\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0006\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0003*\u0004\u000b\u000e\u0011\u0014\b\u0007\u0018\u0000 <2\u00020\u0001:\u0001<B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0016\u001a\u00020\u0017H\u0016J\u0014\u0010\u0018\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u001a0\u0019H\u0016J\u000e\u0010\u001b\u001a\u00020\b2\u0006\u0010\u001c\u001a\u00020\tJ\u0016\u0010\u001b\u001a\u00020\u00172\u0006\u0010\u001c\u001a\u00020\t2\u0006\u0010\u001d\u001a\u00020\bJ\u0010\u0010\u001e\u001a\u00020\u001f2\u0006\u0010\u001d\u001a\u00020\bH\u0007J\u0010\u0010 \u001a\u00020\u00172\u0006\u0010\u001d\u001a\u00020\bH\u0007J\u0010\u0010!\u001a\u0004\u0018\u00010\t2\u0006\u0010\"\u001a\u00020#J\"\u0010!\u001a\u0004\u0018\u00010\t2\b\u0010\u001d\u001a\u0004\u0018\u00010\b2\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020%J\u0010\u0010!\u001a\u0004\u0018\u00010\t2\u0006\u0010'\u001a\u00020(J\u0010\u0010)\u001a\u00020\t2\u0006\u0010*\u001a\u00020#H\u0002J\u0012\u0010+\u001a\u0004\u0018\u00010\b2\u0006\u0010*\u001a\u00020#H\u0002J\u0010\u0010,\u001a\u00020-2\u0006\u0010*\u001a\u00020#H\u0002J\u0010\u0010.\u001a\u00020\b2\u0006\u0010*\u001a\u00020#H\u0002J\b\u00103\u001a\u00020\u0017H\u0016J\u0010\u00104\u001a\u00020\u00172\u0006\u00105\u001a\u00020-H\u0016J\u0010\u00106\u001a\u00020\u00172\u0006\u00105\u001a\u00020-H\u0016J\u0018\u00107\u001a\u00020\u00172\u0006\u0010'\u001a\u00020(2\u0006\u00105\u001a\u00020-H\u0016J\u0018\u00108\u001a\u00020\u00172\u0006\u00109\u001a\u00020:2\u0006\u0010\u001d\u001a\u00020\bH\u0016J\u0010\u0010;\u001a\u00020\u00172\u0006\u0010\u001d\u001a\u00020\bH\u0016R\u001a\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\t0\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\fR\u0010\u0010\r\u001a\u00020\u000eX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u000fR\u0010\u0010\u0010\u001a\u00020\u0011X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0012R\u0010\u0010\u0013\u001a\u00020\u0014X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0015R\u0016\u0010/\u001a\u0004\u0018\u0001008BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b1\u00102¨\u0006="}, d2 = {"Lcom/facebook/react/modules/blob/BlobModule;", "Lcom/facebook/fbreact/specs/NativeBlobModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "blobs", "Ljava/util/HashMap;", "", "", "webSocketContentHandler", "com/facebook/react/modules/blob/BlobModule$webSocketContentHandler$1", "Lcom/facebook/react/modules/blob/BlobModule$webSocketContentHandler$1;", "networkingUriHandler", "com/facebook/react/modules/blob/BlobModule$networkingUriHandler$1", "Lcom/facebook/react/modules/blob/BlobModule$networkingUriHandler$1;", "networkingRequestBodyHandler", "com/facebook/react/modules/blob/BlobModule$networkingRequestBodyHandler$1", "Lcom/facebook/react/modules/blob/BlobModule$networkingRequestBodyHandler$1;", "networkingResponseHandler", "com/facebook/react/modules/blob/BlobModule$networkingResponseHandler$1", "Lcom/facebook/react/modules/blob/BlobModule$networkingResponseHandler$1;", "initialize", "", "getTypedExportedConstants", "", "", "store", "data", "blobId", "getLengthOfBlob", "", "remove", "resolve", "uri", "Landroid/net/Uri;", "offset", "", "size", "blob", "Lcom/facebook/react/bridge/ReadableMap;", "getBytesFromUri", "contentUri", "getNameFromUri", "getLastModifiedFromUri", "", "getMimeTypeFromUri", "webSocketModule", "Lcom/facebook/react/modules/websocket/WebSocketModule;", "getWebSocketModule", "()Lcom/facebook/react/modules/websocket/WebSocketModule;", "addNetworkingHandler", "addWebSocketHandler", "idDouble", "removeWebSocketHandler", "sendOverSocket", "createFromParts", "parts", "Lcom/facebook/react/bridge/ReadableArray;", "release", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nBlobModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BlobModule.kt\ncom/facebook/react/modules/blob/BlobModule\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,339:1\n1#2:340\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BlobModule extends NativeBlobModuleSpec {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "BlobModule";
    @NotNull
    private final HashMap<String, byte[]> blobs;
    @NotNull
    private final BlobModule$networkingRequestBodyHandler$1 networkingRequestBodyHandler;
    @NotNull
    private final BlobModule$networkingResponseHandler$1 networkingResponseHandler;
    @NotNull
    private final BlobModule$networkingUriHandler$1 networkingUriHandler;
    @NotNull
    private final BlobModule$webSocketContentHandler$1 webSocketContentHandler;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/facebook/react/modules/blob/BlobModule$Companion;", "", "<init>", "()V", "NAME", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Type inference failed for: r2v2, types: [com.facebook.react.modules.blob.BlobModule$webSocketContentHandler$1] */
    /* JADX WARN: Type inference failed for: r2v3, types: [com.facebook.react.modules.blob.BlobModule$networkingUriHandler$1] */
    /* JADX WARN: Type inference failed for: r2v4, types: [com.facebook.react.modules.blob.BlobModule$networkingRequestBodyHandler$1] */
    /* JADX WARN: Type inference failed for: r2v5, types: [com.facebook.react.modules.blob.BlobModule$networkingResponseHandler$1] */
    public BlobModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.blobs = new HashMap<>();
        this.webSocketContentHandler = new WebSocketModule.ContentHandler() { // from class: com.facebook.react.modules.blob.BlobModule$webSocketContentHandler$1
            @Override // com.facebook.react.modules.websocket.WebSocketModule.ContentHandler
            public void onMessage(String text, WritableMap params) {
                Intrinsics.checkNotNullParameter(text, "text");
                Intrinsics.checkNotNullParameter(params, "params");
                params.putString("data", text);
            }

            @Override // com.facebook.react.modules.websocket.WebSocketModule.ContentHandler
            public void onMessage(ByteString byteString, WritableMap params) {
                Intrinsics.checkNotNullParameter(byteString, "byteString");
                Intrinsics.checkNotNullParameter(params, "params");
                byte[] L = byteString.L();
                BlobModule blobModule = BlobModule.this;
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
                readableMapBuilder.put("blobId", blobModule.store(L));
                readableMapBuilder.put("offset", 0);
                readableMapBuilder.put("size", L.length);
                params.putMap("data", createMap);
                params.putString("type", "blob");
            }
        };
        this.networkingUriHandler = new NetworkingModule.UriHandler() { // from class: com.facebook.react.modules.blob.BlobModule$networkingUriHandler$1
            @Override // com.facebook.react.modules.network.NetworkingModule.UriHandler
            public WritableMap fetch(Uri uri) {
                byte[] bytesFromUri;
                String mimeTypeFromUri;
                String nameFromUri;
                double lastModifiedFromUri;
                Intrinsics.checkNotNullParameter(uri, "uri");
                bytesFromUri = BlobModule.this.getBytesFromUri(uri);
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                createMap.putString("blobId", BlobModule.this.store(bytesFromUri));
                createMap.putInt("offset", 0);
                createMap.putInt("size", bytesFromUri.length);
                mimeTypeFromUri = BlobModule.this.getMimeTypeFromUri(uri);
                createMap.putString("type", mimeTypeFromUri);
                nameFromUri = BlobModule.this.getNameFromUri(uri);
                createMap.putString(StackTraceHelper.NAME_KEY, nameFromUri);
                lastModifiedFromUri = BlobModule.this.getLastModifiedFromUri(uri);
                createMap.putDouble("lastModified", lastModifiedFromUri);
                return createMap;
            }

            @Override // com.facebook.react.modules.network.NetworkingModule.UriHandler
            public boolean supports(Uri uri, String responseType) {
                Intrinsics.checkNotNullParameter(uri, "uri");
                Intrinsics.checkNotNullParameter(responseType, "responseType");
                String scheme = uri.getScheme();
                if (!Intrinsics.areEqual(scheme, "http") && !Intrinsics.areEqual(scheme, "https") && Intrinsics.areEqual(responseType, "blob")) {
                    return true;
                }
                return false;
            }
        };
        this.networkingRequestBodyHandler = new NetworkingModule.RequestBodyHandler() { // from class: com.facebook.react.modules.blob.BlobModule$networkingRequestBodyHandler$1
            @Override // com.facebook.react.modules.network.NetworkingModule.RequestBodyHandler
            public boolean supports(ReadableMap map) {
                Intrinsics.checkNotNullParameter(map, "map");
                return map.hasKey("blob");
            }

            @Override // com.facebook.react.modules.network.NetworkingModule.RequestBodyHandler
            public RequestBody toRequestBody(ReadableMap map, String str) {
                String string;
                Intrinsics.checkNotNullParameter(map, "map");
                if (map.hasKey("type") && (string = map.getString("type")) != null && string.length() != 0) {
                    str = map.getString("type");
                }
                if (str == null) {
                    str = "application/octet-stream";
                }
                ReadableMap map2 = map.getMap("blob");
                if (map2 != null) {
                    byte[] resolve = BlobModule.this.resolve(map2.getString("blobId"), map2.getInt("offset"), map2.getInt("size"));
                    if (resolve != null) {
                        return RequestBody.Companion.o(RequestBody.Companion, MediaType.f44069e.a(str), resolve, 0, 0, 12, null);
                    }
                    throw new IllegalStateException("Required value was null.");
                }
                throw new IllegalStateException("Required value was null.");
            }
        };
        this.networkingResponseHandler = new NetworkingModule.ResponseHandler() { // from class: com.facebook.react.modules.blob.BlobModule$networkingResponseHandler$1
            @Override // com.facebook.react.modules.network.NetworkingModule.ResponseHandler
            public boolean supports(String responseType) {
                Intrinsics.checkNotNullParameter(responseType, "responseType");
                return Intrinsics.areEqual(responseType, "blob");
            }

            @Override // com.facebook.react.modules.network.NetworkingModule.ResponseHandler
            public WritableMap toResponseData(ResponseBody body) {
                Intrinsics.checkNotNullParameter(body, "body");
                byte[] bytes = body.bytes();
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                createMap.putString("blobId", BlobModule.this.store(bytes));
                createMap.putInt("offset", 0);
                createMap.putInt("size", bytes.length);
                return createMap;
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final byte[] getBytesFromUri(Uri uri) {
        InputStream openInputStream = getReactApplicationContext().getContentResolver().openInputStream(uri);
        if (openInputStream != null) {
            try {
                byte[] bArr = new byte[Math.max((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, openInputStream.available())];
                Ref.IntRef intRef = new Ref.IntRef();
                byte[] bArr2 = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                int i10 = 0;
                while (true) {
                    int read = openInputStream.read(bArr);
                    intRef.element = read;
                    if (read == -1) {
                        break;
                    }
                    byteArrayOutputStream.write(bArr2, 0, i10);
                    i10 = intRef.element;
                    byte[] bArr3 = bArr2;
                    bArr2 = bArr;
                    bArr = bArr3;
                }
                if (byteArrayOutputStream.size() == 0 && bArr2.length == i10) {
                    openInputStream.close();
                    return bArr2;
                }
                byteArrayOutputStream.write(bArr2, 0, i10);
                byte[] byteArray = byteArrayOutputStream.toByteArray();
                Intrinsics.checkNotNullExpressionValue(byteArray, "toByteArray(...)");
                openInputStream.close();
                return byteArray;
            } catch (Throwable th2) {
                openInputStream.close();
                throw th2;
            }
        }
        throw new FileNotFoundException("File not found for " + uri);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final double getLastModifiedFromUri(Uri uri) {
        if (Intrinsics.areEqual(uri.getScheme(), "file")) {
            return new File(uri.toString()).lastModified();
        }
        return 0.0d;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String getMimeTypeFromUri(Uri uri) {
        String fileExtensionFromUrl;
        String type = getReactApplicationContext().getContentResolver().getType(uri);
        if (type == null && (fileExtensionFromUrl = MimeTypeMap.getFileExtensionFromUrl(uri.getPath())) != null) {
            type = MimeTypeMap.getSingleton().getMimeTypeFromExtension(fileExtensionFromUrl);
        }
        if (type == null) {
            return "";
        }
        return type;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String getNameFromUri(Uri uri) {
        if (Intrinsics.areEqual(uri.getScheme(), "file")) {
            return uri.getLastPathSegment();
        }
        Cursor query = getReactApplicationContext().getContentResolver().query(uri, new String[]{"_display_name"}, null, null, null);
        if (query != null) {
            try {
                if (query.moveToFirst()) {
                    String string = query.getString(0);
                    c.a(query, null);
                    return string;
                }
                Unit unit = Unit.f33282a;
                c.a(query, null);
            } finally {
            }
        }
        return uri.getLastPathSegment();
    }

    private final WebSocketModule getWebSocketModule() {
        return (WebSocketModule) getReactApplicationContext().getNativeModule(WebSocketModule.class);
    }

    @Override // com.facebook.fbreact.specs.NativeBlobModuleSpec
    public void addNetworkingHandler() {
        NativeModule nativeModule = getReactApplicationContext().getNativeModule(NetworkingModule.class);
        if (nativeModule != null) {
            NetworkingModule networkingModule = (NetworkingModule) nativeModule;
            networkingModule.addUriHandler$ReactAndroid_release(this.networkingUriHandler);
            networkingModule.addRequestBodyHandler$ReactAndroid_release(this.networkingRequestBodyHandler);
            networkingModule.addResponseHandler$ReactAndroid_release(this.networkingResponseHandler);
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // com.facebook.fbreact.specs.NativeBlobModuleSpec
    public void addWebSocketHandler(double d10) {
        int i10 = (int) d10;
        WebSocketModule webSocketModule = getWebSocketModule();
        if (webSocketModule != null) {
            webSocketModule.setContentHandler(i10, this.webSocketContentHandler);
        }
    }

    @Override // com.facebook.fbreact.specs.NativeBlobModuleSpec
    public void createFromParts(@NotNull ReadableArray parts, @NotNull String blobId) {
        Intrinsics.checkNotNullParameter(parts, "parts");
        Intrinsics.checkNotNullParameter(blobId, "blobId");
        ArrayList arrayList = new ArrayList(parts.size());
        int size = parts.size();
        int i10 = 0;
        for (int i11 = 0; i11 < size; i11++) {
            ReadableMap map = parts.getMap(i11);
            if (map != null) {
                String string = map.getString("type");
                if (string != null) {
                    if (Intrinsics.areEqual(string, "blob")) {
                        ReadableMap map2 = map.getMap("data");
                        if (map2 != null) {
                            i10 += map2.getInt("size");
                            byte[] resolve = resolve(map2);
                            if (resolve != null) {
                                arrayList.add(i11, resolve);
                            } else {
                                throw new IllegalStateException("Required value was null.");
                            }
                        } else {
                            throw new IllegalStateException("Required value was null.");
                        }
                    } else if (Intrinsics.areEqual(string, InquiryField.StringField.TYPE)) {
                        String string2 = map.getString("data");
                        if (string2 != null) {
                            Charset forName = Charset.forName("UTF-8");
                            Intrinsics.checkNotNullExpressionValue(forName, "forName(...)");
                            byte[] bytes = string2.getBytes(forName);
                            Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
                            i10 += bytes.length;
                            arrayList.add(i11, bytes);
                        } else {
                            throw new IllegalStateException("Required value was null.");
                        }
                    } else {
                        throw new IllegalArgumentException("Invalid type for blob: " + map.getString("type"));
                    }
                } else {
                    throw new IllegalStateException("Required value was null.");
                }
            } else {
                throw new IllegalStateException("Required value was null.");
            }
        }
        ByteBuffer allocate = ByteBuffer.allocate(i10);
        Iterator it = arrayList.iterator();
        Intrinsics.checkNotNullExpressionValue(it, "iterator(...)");
        while (it.hasNext()) {
            Object next = it.next();
            Intrinsics.checkNotNullExpressionValue(next, "next(...)");
            allocate.put((byte[]) next);
        }
        byte[] array = allocate.array();
        Intrinsics.checkNotNullExpressionValue(array, "array(...)");
        store(array, blobId);
    }

    @fb.a
    public final long getLengthOfBlob(@NotNull String blobId) {
        long j10;
        Intrinsics.checkNotNullParameter(blobId, "blobId");
        synchronized (this.blobs) {
            byte[] bArr = this.blobs.get(blobId);
            if (bArr != null) {
                j10 = bArr.length;
            } else {
                j10 = 0;
            }
        }
        return j10;
    }

    @Override // com.facebook.fbreact.specs.NativeBlobModuleSpec
    @NotNull
    public Map<String, Object> getTypedExportedConstants() {
        Resources resources = getReactApplicationContext().getResources();
        int identifier = resources.getIdentifier("blob_provider_authority", InquiryField.StringField.TYPE, getReactApplicationContext().getPackageName());
        if (identifier == 0) {
            return o0.i();
        }
        return o0.m(v.a("BLOB_URI_SCHEME", "content"), v.a("BLOB_URI_HOST", resources.getString(identifier)));
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void initialize() {
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        BlobCollector.install(reactApplicationContext, this);
    }

    @Override // com.facebook.fbreact.specs.NativeBlobModuleSpec
    public void release(@NotNull String blobId) {
        Intrinsics.checkNotNullParameter(blobId, "blobId");
        remove(blobId);
    }

    @fb.a
    public final void remove(@NotNull String blobId) {
        Intrinsics.checkNotNullParameter(blobId, "blobId");
        synchronized (this.blobs) {
            this.blobs.remove(blobId);
        }
    }

    @Override // com.facebook.fbreact.specs.NativeBlobModuleSpec
    public void removeWebSocketHandler(double d10) {
        int i10 = (int) d10;
        WebSocketModule webSocketModule = getWebSocketModule();
        if (webSocketModule != null) {
            webSocketModule.setContentHandler(i10, null);
        }
    }

    public final byte[] resolve(@NotNull Uri uri) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        String lastPathSegment = uri.getLastPathSegment();
        String queryParameter = uri.getQueryParameter("offset");
        int parseInt = queryParameter != null ? Integer.parseInt(queryParameter) : 0;
        String queryParameter2 = uri.getQueryParameter("size");
        return resolve(lastPathSegment, parseInt, queryParameter2 != null ? Integer.parseInt(queryParameter2) : -1);
    }

    @Override // com.facebook.fbreact.specs.NativeBlobModuleSpec
    public void sendOverSocket(@NotNull ReadableMap blob, double d10) {
        byte[] resolve;
        Intrinsics.checkNotNullParameter(blob, "blob");
        int i10 = (int) d10;
        WebSocketModule webSocketModule = getWebSocketModule();
        if (webSocketModule != null && (resolve = resolve(blob.getString("blobId"), blob.getInt("offset"), blob.getInt("size"))) != null) {
            ByteString.a aVar = ByteString.f44363o;
            ByteBuffer wrap = ByteBuffer.wrap(resolve);
            Intrinsics.checkNotNullExpressionValue(wrap, "wrap(...)");
            webSocketModule.sendBinary(aVar.c(wrap), i10);
        }
    }

    @NotNull
    public final String store(@NotNull byte[] data) {
        Intrinsics.checkNotNullParameter(data, "data");
        String uuid = UUID.randomUUID().toString();
        Intrinsics.checkNotNullExpressionValue(uuid, "toString(...)");
        store(data, uuid);
        return uuid;
    }

    public final void store(@NotNull byte[] data, @NotNull String blobId) {
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(blobId, "blobId");
        synchronized (this.blobs) {
            this.blobs.put(blobId, data);
            Unit unit = Unit.f33282a;
        }
    }

    public final byte[] resolve(String str, int i10, int i11) {
        synchronized (this.blobs) {
            try {
                byte[] bArr = this.blobs.get(str);
                if (bArr == null) {
                    return null;
                }
                if (i11 == -1) {
                    i11 = bArr.length - i10;
                }
                if (i10 > 0 || i11 != bArr.length) {
                    return Arrays.copyOfRange(bArr, i10, i11 + i10);
                }
                return bArr;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final byte[] resolve(@NotNull ReadableMap blob) {
        Intrinsics.checkNotNullParameter(blob, "blob");
        return resolve(blob.getString("blobId"), blob.getInt("offset"), blob.getInt("size"));
    }
}
