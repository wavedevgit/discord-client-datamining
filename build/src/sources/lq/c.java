package lq;

import android.app.Application;
import android.graphics.Typeface;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import java.io.File;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.i;
import lq.c;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.jetbrains.annotations.NotNull;
import os.j1;
import os.m0;
import qr.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements lq.a {

    /* renamed from: h  reason: collision with root package name */
    public static final a f36509h = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final OkHttpClient f36510b;

    /* renamed from: c  reason: collision with root package name */
    private final Application f36511c;

    /* renamed from: d  reason: collision with root package name */
    private Map f36512d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f36513e;

    /* renamed from: f  reason: collision with root package name */
    private final List f36514f;

    /* renamed from: g  reason: collision with root package name */
    private final CoroutineScope f36515g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f36516a;

        /* renamed from: b  reason: collision with root package name */
        private final Function1 f36517b;

        public b(String url, Function1 onFontDownloaded) {
            Intrinsics.checkNotNullParameter(url, "url");
            Intrinsics.checkNotNullParameter(onFontDownloaded, "onFontDownloaded");
            this.f36516a = url;
            this.f36517b = onFontDownloaded;
        }

        public final Function1 a() {
            return this.f36517b;
        }

        public final String b() {
            return this.f36516a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: lq.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0487c implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<C0487c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final Map f36518d;

        /* renamed from: lq.c$c$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final C0487c createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    String readString = parcel.readString();
                    int readInt2 = parcel.readInt();
                    LinkedHashMap linkedHashMap2 = new LinkedHashMap(readInt2);
                    for (int i11 = 0; i11 != readInt2; i11++) {
                        linkedHashMap2.put(StyleElements.FontWeight.valueOf(parcel.readString()), parcel.readString());
                    }
                    linkedHashMap.put(readString, linkedHashMap2);
                }
                return new C0487c(linkedHashMap);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final C0487c[] newArray(int i10) {
                return new C0487c[i10];
            }
        }

        public C0487c(Map fontDownloaderMapping) {
            Intrinsics.checkNotNullParameter(fontDownloaderMapping, "fontDownloaderMapping");
            this.f36518d = fontDownloaderMapping;
        }

        public final Map a() {
            return this.f36518d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            Map map = this.f36518d;
            dest.writeInt(map.size());
            for (Map.Entry entry : map.entrySet()) {
                dest.writeString((String) entry.getKey());
                Map map2 = (Map) entry.getValue();
                dest.writeInt(map2.size());
                for (Map.Entry entry2 : map2.entrySet()) {
                    dest.writeString(((StyleElements.FontWeight) entry2.getKey()).name());
                    dest.writeString((String) entry2.getValue());
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private interface d {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements d {

            /* renamed from: a  reason: collision with root package name */
            private final Typeface f36519a;

            public a(Typeface typeface) {
                Intrinsics.checkNotNullParameter(typeface, "typeface");
                this.f36519a = typeface;
            }

            public final Typeface a() {
                return this.f36519a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof a) && Intrinsics.areEqual(this.f36519a, ((a) obj).f36519a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f36519a.hashCode();
            }

            public String toString() {
                Typeface typeface = this.f36519a;
                return "Cached(typeface=" + typeface + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements d {

            /* renamed from: a  reason: collision with root package name */
            public static final b f36520a = new b();

            private b() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1662305117;
            }

            public String toString() {
                return "Downloading";
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f36521d;

        /* renamed from: e  reason: collision with root package name */
        int f36522e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f36524o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function1 f36525p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f36526d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f36527e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Typeface f36528i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ c f36529o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f36530p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Function1 function1, Typeface typeface, c cVar, String str, Continuation continuation) {
                super(2, continuation);
                this.f36527e = function1;
                this.f36528i = typeface;
                this.f36529o = cVar;
                this.f36530p = str;
            }

            /* JADX INFO: Access modifiers changed from: private */
            public static final boolean k(String str, b bVar) {
                return Intrinsics.areEqual(bVar.b(), str);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f36527e, this.f36528i, this.f36529o, this.f36530p, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                wr.b.f();
                if (this.f36526d == 0) {
                    kotlin.c.b(obj);
                    Function1 function1 = this.f36527e;
                    Typeface typeface = this.f36528i;
                    Intrinsics.checkNotNull(typeface);
                    function1.invoke(typeface);
                    String str = this.f36530p;
                    ArrayList<b> arrayList = new ArrayList();
                    for (Object obj2 : this.f36529o.f36514f) {
                        if (Intrinsics.areEqual(((b) obj2).b(), str)) {
                            arrayList.add(obj2);
                        }
                    }
                    List list = this.f36529o.f36514f;
                    final String str2 = this.f36530p;
                    CollectionsKt.J(list, new Function1() { // from class: lq.e
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj3) {
                            boolean k10;
                            k10 = c.e.a.k(str2, (c.b) obj3);
                            return Boolean.valueOf(k10);
                        }
                    });
                    for (b bVar : arrayList) {
                        Function1 a10 = bVar.a();
                        Typeface typeface2 = this.f36528i;
                        Intrinsics.checkNotNull(typeface2);
                        a10.invoke(typeface2);
                    }
                    return Unit.f32008a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, Function1 function1, Continuation continuation) {
            super(2, continuation);
            this.f36524o = str;
            this.f36525p = function1;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final boolean k(String str, b bVar) {
            return Intrinsics.areEqual(bVar.b(), str);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f36524o, this.f36525p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:18:0x006e, code lost:
            if (os.g.g(r11, r4, r10) == r0) goto L16;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r11) {
            /*
                r10 = this;
                java.lang.Object r0 = wr.b.f()
                int r1 = r10.f36522e
                r2 = 0
                r3 = 2
                r4 = 1
                if (r1 == 0) goto L24
                if (r1 == r4) goto L1c
                if (r1 != r3) goto L14
                kotlin.c.b(r11)     // Catch: java.lang.Exception -> L71
                goto L8c
            L14:
                java.lang.IllegalStateException r11 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r11.<init>(r0)
                throw r11
            L1c:
                java.lang.Object r1 = r10.f36521d
                java.io.File r1 = (java.io.File) r1
                kotlin.c.b(r11)     // Catch: java.lang.Exception -> L71
                goto L3c
            L24:
                kotlin.c.b(r11)
                lq.c r11 = lq.c.this     // Catch: java.lang.Exception -> L71
                java.io.File r1 = lq.c.i(r11)     // Catch: java.lang.Exception -> L71
                lq.c r11 = lq.c.this     // Catch: java.lang.Exception -> L71
                java.lang.String r5 = r10.f36524o     // Catch: java.lang.Exception -> L71
                r10.f36521d = r1     // Catch: java.lang.Exception -> L71
                r10.f36522e = r4     // Catch: java.lang.Exception -> L71
                java.lang.Object r11 = lq.c.g(r11, r5, r1, r10)     // Catch: java.lang.Exception -> L71
                if (r11 != r0) goto L3c
                goto L70
            L3c:
                android.graphics.Typeface r6 = android.graphics.Typeface.createFromFile(r1)     // Catch: java.lang.Exception -> L71
                lq.c r11 = lq.c.this     // Catch: java.lang.Exception -> L71
                java.util.Map r11 = lq.c.h(r11)     // Catch: java.lang.Exception -> L71
                java.lang.String r4 = r10.f36524o     // Catch: java.lang.Exception -> L71
                lq.c$d$a r5 = new lq.c$d$a     // Catch: java.lang.Exception -> L71
                kotlin.jvm.internal.Intrinsics.checkNotNull(r6)     // Catch: java.lang.Exception -> L71
                r5.<init>(r6)     // Catch: java.lang.Exception -> L71
                r11.put(r4, r5)     // Catch: java.lang.Exception -> L71
                r1.delete()     // Catch: java.lang.Exception -> L71
                os.c1 r11 = os.m0.c()     // Catch: java.lang.Exception -> L71
                lq.c$e$a r4 = new lq.c$e$a     // Catch: java.lang.Exception -> L71
                kotlin.jvm.functions.Function1 r5 = r10.f36525p     // Catch: java.lang.Exception -> L71
                lq.c r7 = lq.c.this     // Catch: java.lang.Exception -> L71
                java.lang.String r8 = r10.f36524o     // Catch: java.lang.Exception -> L71
                r9 = 0
                r4.<init>(r5, r6, r7, r8, r9)     // Catch: java.lang.Exception -> L71
                r10.f36521d = r2     // Catch: java.lang.Exception -> L71
                r10.f36522e = r3     // Catch: java.lang.Exception -> L71
                java.lang.Object r11 = os.g.g(r11, r4, r10)     // Catch: java.lang.Exception -> L71
                if (r11 != r0) goto L8c
            L70:
                return r0
            L71:
                lq.c r11 = lq.c.this
                java.util.Map r11 = lq.c.h(r11)
                java.lang.String r0 = r10.f36524o
                r11.put(r0, r2)
                lq.c r11 = lq.c.this
                java.util.List r11 = lq.c.j(r11)
                java.lang.String r0 = r10.f36524o
                lq.d r1 = new lq.d
                r1.<init>()
                kotlin.collections.CollectionsKt.J(r11, r1)
            L8c:
                kotlin.Unit r11 = kotlin.Unit.f32008a
                return r11
            */
            throw new UnsupportedOperationException("Method not decompiled: lq.c.e.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f36531d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f36532e;

        /* renamed from: o  reason: collision with root package name */
        int f36534o;

        f(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f36532e = obj;
            this.f36534o |= Integer.MIN_VALUE;
            return c.this.k(null, null, this);
        }
    }

    public c(OkHttpClient okHttpClient, Application context) {
        Intrinsics.checkNotNullParameter(okHttpClient, "okHttpClient");
        Intrinsics.checkNotNullParameter(context, "context");
        this.f36510b = okHttpClient;
        this.f36511c = context;
        this.f36512d = new LinkedHashMap();
        this.f36513e = new LinkedHashMap();
        this.f36514f = new ArrayList();
        this.f36515g = i.a(m0.a().Y0(j1.b(null, 1, null)));
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0036  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0063 A[Catch: all -> 0x0068, TRY_LEAVE, TryCatch #4 {all -> 0x0068, blocks: (B:18:0x005c, B:20:0x0063, B:38:0x0088, B:25:0x006b, B:37:0x0085, B:28:0x0074), top: B:49:0x005c }] */
    /* JADX WARN: Removed duplicated region for block: B:24:0x006a  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0072  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object k(java.lang.String r5, java.io.File r6, kotlin.coroutines.Continuation r7) {
        /*
            r4 = this;
            boolean r0 = r7 instanceof lq.c.f
            if (r0 == 0) goto L13
            r0 = r7
            lq.c$f r0 = (lq.c.f) r0
            int r1 = r0.f36534o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f36534o = r1
            goto L18
        L13:
            lq.c$f r0 = new lq.c$f
            r0.<init>(r7)
        L18:
            java.lang.Object r7 = r0.f36532e
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f36534o
            r3 = 1
            if (r2 == 0) goto L36
            if (r2 != r3) goto L2e
            java.lang.Object r5 = r0.f36531d
            r6 = r5
            java.io.File r6 = (java.io.File) r6
            kotlin.c.b(r7)
            goto L5a
        L2e:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r6)
            throw r5
        L36:
            kotlin.c.b(r7)
            okhttp3.Request$Builder r7 = new okhttp3.Request$Builder
            r7.<init>()
            okhttp3.Request$Builder r5 = r7.l(r5)
            okhttp3.Request r5 = r5.b()
            kotlinx.coroutines.CoroutineDispatcher r7 = os.m0.b()
            lq.b r2 = new lq.b
            r2.<init>()
            r0.f36531d = r6
            r0.f36534o = r3
            java.lang.Object r7 = os.x0.b(r7, r2, r0)
            if (r7 != r1) goto L5a
            return r1
        L5a:
            okhttp3.Response r7 = (okhttp3.Response) r7
            okhttp3.ResponseBody r5 = r7.n()     // Catch: java.lang.Throwable -> L68
            r0 = 0
            if (r5 == 0) goto L6a
            java.io.InputStream r5 = r5.byteStream()     // Catch: java.lang.Throwable -> L68
            goto L6b
        L68:
            r5 = move-exception
            goto L97
        L6a:
            r5 = r0
        L6b:
            java.io.FileOutputStream r1 = new java.io.FileOutputStream     // Catch: java.lang.Throwable -> L83
            r1.<init>(r6)     // Catch: java.lang.Throwable -> L83
            if (r5 == 0) goto L85
            r6 = 0
            r2 = 2
            long r2 = bs.b.b(r5, r1, r6, r2, r0)     // Catch: java.lang.Throwable -> L7c
            kotlin.coroutines.jvm.internal.b.f(r2)     // Catch: java.lang.Throwable -> L7c
            goto L85
        L7c:
            r6 = move-exception
            throw r6     // Catch: java.lang.Throwable -> L7e
        L7e:
            r0 = move-exception
            bs.c.a(r1, r6)     // Catch: java.lang.Throwable -> L83
            throw r0     // Catch: java.lang.Throwable -> L83
        L83:
            r6 = move-exception
            goto L91
        L85:
            bs.c.a(r1, r0)     // Catch: java.lang.Throwable -> L83
            bs.c.a(r5, r0)     // Catch: java.lang.Throwable -> L68
            bs.c.a(r7, r0)
            kotlin.Unit r5 = kotlin.Unit.f32008a
            return r5
        L91:
            throw r6     // Catch: java.lang.Throwable -> L92
        L92:
            r0 = move-exception
            bs.c.a(r5, r6)     // Catch: java.lang.Throwable -> L68
            throw r0     // Catch: java.lang.Throwable -> L68
        L97:
            throw r5     // Catch: java.lang.Throwable -> L98
        L98:
            r6 = move-exception
            bs.c.a(r7, r5)
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: lq.c.k(java.lang.String, java.io.File, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Response l(c cVar, Request request) {
        return cVar.f36510b.a(request).execute();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final File m() {
        File file = new File(new File(this.f36511c.getCacheDir(), ".com.withpersona.sdk2.inquiry"), "fonts");
        if (!file.exists()) {
            file.mkdirs();
        }
        return new File(file, UUID.randomUUID().toString());
    }

    @Override // lq.a
    public void a(String fontUrl, Function1 onSuccess) {
        Intrinsics.checkNotNullParameter(fontUrl, "fontUrl");
        Intrinsics.checkNotNullParameter(onSuccess, "onSuccess");
        d dVar = (d) this.f36513e.get(fontUrl);
        if (dVar instanceof d.a) {
            onSuccess.invoke(((d.a) dVar).a());
            return;
        }
        d.b bVar = d.b.f36520a;
        if (Intrinsics.areEqual(dVar, bVar)) {
            this.f36514f.add(new b(fontUrl, onSuccess));
        } else if (dVar == null) {
            this.f36513e.put(fontUrl, bVar);
            os.i.d(this.f36515g, null, null, new e(fontUrl, onSuccess, null), 3, null);
        } else {
            throw new p();
        }
    }

    @Override // lq.a
    public void b(Bundle bundle) {
        Map linkedHashMap;
        C0487c c0487c;
        if (bundle == null || (c0487c = (C0487c) w1.b.a(bundle, "font_downloader_mapping", C0487c.class)) == null || (linkedHashMap = c0487c.a()) == null) {
            linkedHashMap = new LinkedHashMap();
        }
        this.f36512d = linkedHashMap;
    }

    @Override // lq.a
    public void c(List list) {
        if (list == null) {
            list = CollectionsKt.l();
        }
        for (g gVar : list) {
            String a10 = gVar.a();
            String c10 = gVar.c();
            StyleElements.FontWeight b10 = gVar.b();
            if (a10 != null && c10 != null && b10 != null) {
                Map d10 = d();
                Object obj = d10.get(a10);
                if (obj == null) {
                    obj = new LinkedHashMap();
                    d10.put(a10, obj);
                }
                ((Map) obj).put(b10, c10);
            }
        }
    }

    @Override // lq.a
    public Map d() {
        return this.f36512d;
    }

    @Override // lq.a
    public void e(Bundle outState) {
        Intrinsics.checkNotNullParameter(outState, "outState");
        outState.putParcelable("font_downloader_mapping", new C0487c(d()));
    }
}
