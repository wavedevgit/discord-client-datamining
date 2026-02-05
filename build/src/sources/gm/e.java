package gm;

import android.content.ContentResolver;
import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.provider.DocumentsContract;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.List;
import java.util.Map;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import ms.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final Map f25014a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f25015d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Context f25016e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Uri f25017i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f f25018o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ e f25019p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Context context, Uri uri, f fVar, e eVar, Continuation continuation) {
            super(2, continuation);
            this.f25016e = context;
            this.f25017i = uri;
            this.f25018o = fVar;
            this.f25019p = eVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f25016e, this.f25017i, this.f25018o, this.f25019p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            boolean z10;
            ur.b.f();
            if (this.f25015d == 0) {
                kotlin.c.b(obj);
                ContentResolver contentResolver = this.f25016e.getContentResolver();
                gm.a aVar = new gm.a(this.f25017i);
                aVar.h(contentResolver.getType(this.f25017i));
                if (this.f25018o.b()) {
                    aVar.j(contentResolver.getStreamTypes(this.f25017i, "*/*"));
                }
                if (this.f25018o.h()) {
                    try {
                        this.f25016e.getContentResolver().takePersistableUriPermission(this.f25017i, 3);
                        aVar.a(this.f25017i);
                    } catch (Exception e10) {
                        String localizedMessage = e10.getLocalizedMessage();
                        if (localizedMessage == null && (localizedMessage = e10.getMessage()) == null) {
                            localizedMessage = "Unknown error with takePersistableUriPermission";
                        }
                        aVar.b(localizedMessage);
                    }
                }
                if (this.f25018o.b() && DocumentsContract.isDocumentUri(this.f25016e, this.f25017i)) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                e eVar = this.f25019p;
                Intrinsics.checkNotNull(contentResolver);
                eVar.f(contentResolver, aVar, z10);
                return aVar;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f25020d;

        /* renamed from: e  reason: collision with root package name */
        Object f25021e;

        /* renamed from: i  reason: collision with root package name */
        Object f25022i;

        /* renamed from: o  reason: collision with root package name */
        int f25023o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ List f25024p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ e f25025q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ Context f25026r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ f f25027s;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(List list, e eVar, Context context, f fVar, Continuation continuation) {
            super(2, continuation);
            this.f25024p = list;
            this.f25025q = eVar;
            this.f25026r = context;
            this.f25027s = fVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f25024p, this.f25025q, this.f25026r, this.f25027s, continuation);
        }

        /* JADX WARN: Removed duplicated region for block: B:11:0x003d  */
        /* JADX WARN: Removed duplicated region for block: B:15:0x0070 A[RETURN] */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:12:0x0056 -> B:14:0x0059). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r8) {
            /*
                r7 = this;
                java.lang.Object r0 = ur.b.f()
                int r1 = r7.f25023o
                r2 = 1
                if (r1 == 0) goto L23
                if (r1 != r2) goto L1b
                java.lang.Object r1 = r7.f25022i
                android.net.Uri r1 = (android.net.Uri) r1
                java.lang.Object r3 = r7.f25021e
                java.util.Iterator r3 = (java.util.Iterator) r3
                java.lang.Object r4 = r7.f25020d
                com.facebook.react.bridge.WritableArray r4 = (com.facebook.react.bridge.WritableArray) r4
                kotlin.c.b(r8)
                goto L59
            L1b:
                java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r8.<init>(r0)
                throw r8
            L23:
                kotlin.c.b(r8)
                com.facebook.react.bridge.WritableArray r8 = com.facebook.react.bridge.Arguments.createArray()
                java.lang.String r1 = "createArray(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r8, r1)
                java.util.List r1 = r7.f25024p
                java.util.Iterator r1 = r1.iterator()
                r4 = r8
                r3 = r1
            L37:
                boolean r8 = r3.hasNext()
                if (r8 == 0) goto L70
                java.lang.Object r8 = r3.next()
                r1 = r8
                android.net.Uri r1 = (android.net.Uri) r1
                gm.e r8 = r7.f25025q
                android.content.Context r5 = r7.f25026r
                gm.f r6 = r7.f25027s
                r7.f25020d = r4
                r7.f25021e = r3
                r7.f25022i = r1
                r7.f25023o = r2
                java.lang.Object r8 = gm.e.a(r8, r5, r1, r6, r7)
                if (r8 != r0) goto L59
                return r0
            L59:
                gm.a r8 = (gm.a) r8
                gm.e r5 = r7.f25025q
                java.util.Map r5 = gm.e.b(r5)
                java.lang.String r6 = r1.toString()
                r5.put(r6, r1)
                com.facebook.react.bridge.ReadableMap r8 = r8.c()
                r4.pushMap(r8)
                goto L37
            L70:
                return r4
            */
            throw new UnsupportedOperationException("Method not decompiled: gm.e.b.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public e(Map uriMap) {
        Intrinsics.checkNotNullParameter(uriMap, "uriMap");
        this.f25014a = uriMap;
    }

    private final Object c(Cursor cursor, String str, Class cls) {
        int columnIndex = cursor.getColumnIndex(str);
        if (columnIndex != -1 && !cursor.isNull(columnIndex)) {
            try {
                if (Intrinsics.areEqual(cls, String.class)) {
                    return cursor.getString(columnIndex);
                }
                if (Intrinsics.areEqual(cls, Integer.TYPE)) {
                    return Integer.valueOf(cursor.getInt(columnIndex));
                }
                if (Intrinsics.areEqual(cls, Long.TYPE)) {
                    return Long.valueOf(cursor.getLong(columnIndex));
                }
                if (Intrinsics.areEqual(cls, Double.TYPE)) {
                    return Double.valueOf(cursor.getDouble(columnIndex));
                }
                if (Intrinsics.areEqual(cls, Float.TYPE)) {
                    return Float.valueOf(cursor.getFloat(columnIndex));
                }
            } catch (Exception unused) {
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object d(Context context, Uri uri, f fVar, Continuation continuation) {
        return ms.g.g(m0.b(), new a(context, uri, fVar, this, null), continuation);
    }

    public final Object e(Context context, List list, f fVar, Continuation continuation) {
        return ms.g.g(m0.b(), new b(list, this, context, fVar, null), continuation);
    }

    public final void f(ContentResolver contentResolver, gm.a metadataBuilder, boolean z10) {
        int i10;
        Intrinsics.checkNotNullParameter(contentResolver, "contentResolver");
        Intrinsics.checkNotNullParameter(metadataBuilder, "metadataBuilder");
        Uri e10 = metadataBuilder.e();
        List r10 = CollectionsKt.r("mime_type", "_display_name", "_size");
        if (z10) {
            r10.add("flags");
        }
        boolean z11 = false;
        Cursor query = contentResolver.query(e10, (String[]) r10.toArray(new String[0]), null, null, null);
        if (query != null) {
            try {
                if (query.moveToFirst()) {
                    metadataBuilder.i((String) c(query, "_display_name", String.class));
                    if (!metadataBuilder.f()) {
                        metadataBuilder.h((String) c(query, "mime_type", String.class));
                    }
                    if (z10) {
                        Integer num = (Integer) c(query, "flags", Integer.TYPE);
                        if (num != null) {
                            i10 = num.intValue();
                        } else {
                            i10 = 0;
                        }
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                            z11 = true;
                        }
                    }
                    metadataBuilder.l(z11);
                    metadataBuilder.k((Long) c(query, "_size", Long.TYPE));
                    zr.c.a(query, null);
                }
            } finally {
            }
        }
        metadataBuilder.g("Could not read file metadata");
        zr.c.a(query, null);
    }
}
