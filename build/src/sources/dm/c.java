package dm;

import android.content.ContentResolver;
import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.net.Uri;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.util.RNLog;
import hs.g0;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.channels.Channels;
import java.nio.channels.FileChannel;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
import java.util.UUID;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.ranges.IntRange;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Map f21817a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21818d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f21819e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ ReactContext f21821o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ com.reactnativedocumentpicker.a f21822p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ ReadableArray f21823q;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: dm.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0286a extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f21824d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ ReadableArray f21825e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ int f21826i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ c f21827o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ ReactContext f21828p;

            /* renamed from: q  reason: collision with root package name */
            final /* synthetic */ File f21829q;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0286a(ReadableArray readableArray, int i10, c cVar, ReactContext reactContext, File file, Continuation continuation) {
                super(2, continuation);
                this.f21825e = readableArray;
                this.f21826i = i10;
                this.f21827o = cVar;
                this.f21828p = reactContext;
                this.f21829q = file;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0286a(this.f21825e, this.f21826i, this.f21827o, this.f21828p, this.f21829q, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                String str;
                pr.b.f();
                if (this.f21824d == 0) {
                    kotlin.c.b(obj);
                    WritableMap createMap = Arguments.createMap();
                    Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                    ReadableMap map = this.f21825e.getMap(this.f21826i);
                    try {
                        if (map != null) {
                            createMap.merge(this.f21827o.g(map, this.f21828p, this.f21829q));
                            return createMap;
                        }
                        int i10 = this.f21826i;
                        throw new IllegalArgumentException("keepLocalCopy: The file argument is null at index " + i10);
                    } catch (Exception e10) {
                        String localizedMessage = e10.getLocalizedMessage();
                        if (localizedMessage == null && (localizedMessage = e10.getMessage()) == null) {
                            localizedMessage = "Unknown error";
                        }
                        createMap.putString("status", "error");
                        createMap.putString("copyError", localizedMessage);
                        if (map != null) {
                            str = map.getString("uri");
                        } else {
                            str = null;
                        }
                        createMap.putString("sourceUri", str);
                        return createMap;
                    }
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0286a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(ReactContext reactContext, com.reactnativedocumentpicker.a aVar, ReadableArray readableArray, Continuation continuation) {
            super(2, continuation);
            this.f21821o = reactContext;
            this.f21822p = aVar;
            this.f21823q = readableArray;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f21821o, this.f21822p, this.f21823q, continuation);
            aVar.f21819e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            WritableArray writableArray;
            g0 b10;
            Object f10 = pr.b.f();
            int i10 = this.f21818d;
            if (i10 != 0) {
                if (i10 == 1) {
                    writableArray = (WritableArray) this.f21819e;
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                CoroutineScope coroutineScope = (CoroutineScope) this.f21819e;
                File i11 = c.this.i(this.f21821o, this.f21822p);
                IntRange u10 = kotlin.ranges.d.u(0, this.f21823q.size());
                ReadableArray readableArray = this.f21823q;
                c cVar = c.this;
                ReactContext reactContext = this.f21821o;
                ArrayList arrayList = new ArrayList(CollectionsKt.w(u10, 10));
                Iterator it = u10.iterator();
                while (it.hasNext()) {
                    b10 = hs.i.b(coroutineScope, null, null, new C0286a(readableArray, ((m0) it).nextInt(), cVar, reactContext, i11, null), 3, null);
                    arrayList.add(b10);
                    readableArray = readableArray;
                    cVar = cVar;
                    reactContext = reactContext;
                }
                WritableArray createArray = Arguments.createArray();
                Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
                this.f21819e = createArray;
                this.f21818d = 1;
                Object a10 = hs.d.a(arrayList, this);
                if (a10 == f10) {
                    return f10;
                }
                writableArray = createArray;
                obj = a10;
            }
            for (WritableMap writableMap : (Iterable) obj) {
                writableArray.pushMap(writableMap);
            }
            return writableArray;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public c(Map uriMap) {
        Intrinsics.checkNotNullParameter(uriMap, "uriMap");
        this.f21817a = uriMap;
    }

    private final File d(Context context, Uri uri, File file, String str, String str2) {
        final File j10 = j(new File(file, str), file);
        Function1 function1 = new Function1() { // from class: dm.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit e10;
                e10 = c.e(j10, (InputStream) obj);
                return e10;
            }
        };
        if (str2 == null) {
            InputStream openInputStream = context.getContentResolver().openInputStream(uri);
            try {
                function1.invoke(openInputStream);
                ur.c.a(openInputStream, null);
                return j10;
            } finally {
            }
        } else {
            ContentResolver contentResolver = context.getContentResolver();
            Intrinsics.checkNotNullExpressionValue(contentResolver, "getContentResolver(...)");
            InputStream h10 = h(contentResolver, uri, str2);
            try {
                function1.invoke(h10);
                ur.c.a(h10, null);
                return j10;
            } finally {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e(File file, InputStream inputStream) {
        if (inputStream != null) {
            FileChannel channel = new FileOutputStream(file).getChannel();
            try {
                if (channel.transferFrom(Channels.newChannel(inputStream), 0L, LongCompanionObject.MAX_VALUE) != 0) {
                    Unit unit = Unit.f33074a;
                    ur.c.a(channel, null);
                    return Unit.f33074a;
                }
                throw new IOException("No data was copied to the destination file");
            } finally {
            }
        } else {
            throw new FileNotFoundException("No input stream was found for the source file");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ReadableMap g(ReadableMap readableMap, ReactContext reactContext, File file) {
        String string = readableMap.getString("uri");
        if (string != null) {
            String string2 = readableMap.getString("fileName");
            if (string2 != null) {
                String string3 = readableMap.getString("convertVirtualFileToType");
                Uri uri = (Uri) this.f21817a.get(string);
                if (uri == null) {
                    RNLog.w(reactContext, "keepLocalCopy: You're trying to copy a file \"" + string2 + "\" that wasn't picked with this module. This can lead to permission errors because the file reference is transient to your activity's current lifecycle. See https://developer.android.com/guide/components/intents-common#GetFile . Please use the result from the picker directly.");
                }
                if (uri == null) {
                    uri = Uri.parse(string);
                }
                Uri uri2 = uri;
                Intrinsics.checkNotNull(uri2);
                File d10 = d(reactContext, uri2, file, string2, string3);
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                createMap.putString("status", "success");
                createMap.putString("localUri", Uri.fromFile(d10).toString());
                createMap.putString("sourceUri", string);
                return createMap;
            }
            throw new IllegalArgumentException("fileName is missing");
        }
        throw new IllegalArgumentException("URI is missing");
    }

    private final InputStream h(ContentResolver contentResolver, Uri uri, String str) {
        AssetFileDescriptor openTypedAssetFileDescriptor = contentResolver.openTypedAssetFileDescriptor(uri, str, null);
        if (openTypedAssetFileDescriptor == null) {
            return null;
        }
        return openTypedAssetFileDescriptor.createInputStream();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final File i(Context context, com.reactnativedocumentpicker.a aVar) {
        File cacheDir;
        if (aVar == com.reactnativedocumentpicker.a.f18210o) {
            cacheDir = context.getFilesDir();
        } else {
            cacheDir = context.getCacheDir();
        }
        File file = new File(cacheDir, UUID.randomUUID().toString());
        if (file.mkdir()) {
            return file;
        }
        String absolutePath = file.getAbsolutePath();
        throw new IOException("Failed to create directory at " + absolutePath);
    }

    private final File j(File file, File file2) {
        String canonicalPath = file.getCanonicalPath();
        Intrinsics.checkNotNull(canonicalPath);
        String canonicalPath2 = file2.getCanonicalPath();
        Intrinsics.checkNotNullExpressionValue(canonicalPath2, "getCanonicalPath(...)");
        if (StringsKt.P(canonicalPath, canonicalPath2, false, 2, null)) {
            return file;
        }
        throw new IllegalArgumentException("The copied file is attempting to write outside of the target directory.");
    }

    public final Object f(ReactContext reactContext, ReadableArray readableArray, com.reactnativedocumentpicker.a aVar, Continuation continuation) {
        return hs.g.g(hs.m0.b(), new a(reactContext, aVar, readableArray, null), continuation);
    }

    public final dm.a k(Uri uri, String str, ReactApplicationContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        if (uri != null) {
            Uri uri2 = (Uri) this.f21817a.get(str);
            if (uri2 != null) {
                dm.a aVar = new dm.a(uri2);
                ContentResolver contentResolver = context.getContentResolver();
                aVar.h(contentResolver.getType(uri2));
                InputStream openInputStream = contentResolver.openInputStream(uri);
                try {
                    if (openInputStream == null) {
                        aVar.g("No output stream found for source file");
                    } else {
                        OutputStream openOutputStream = contentResolver.openOutputStream(uri2);
                        if (openOutputStream == null) {
                            aVar.g("No output stream found for destination file");
                        } else {
                            if (ur.b.b(openInputStream, openOutputStream, 0, 2, null) == 0) {
                                aVar.g("No data was copied to the destination file");
                            }
                            openOutputStream.flush();
                            Unit unit = Unit.f33074a;
                        }
                        ur.c.a(openOutputStream, null);
                    }
                    ur.c.a(openInputStream, null);
                    return aVar;
                } finally {
                }
            } else {
                RNLog.e(context, "writeDocument: You're trying to write from Uri \"" + str + "\" that wasn't picked with this module. Please use the result from saveDocument()");
                throw new IllegalArgumentException("The provided URI is not known");
            }
        } else {
            throw new IllegalArgumentException("The source URI is null. Call saveDocument() before writeDocument()");
        }
    }
}
