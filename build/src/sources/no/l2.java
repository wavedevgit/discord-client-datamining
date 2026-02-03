package no;

import android.content.Context;
import android.os.Bundle;
import android.os.Looper;
import android.os.Parcel;
import android.os.Parcelable;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l2 {

    /* renamed from: d  reason: collision with root package name */
    public static final a f42225d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final CoroutineScope f42226a;

    /* renamed from: b  reason: collision with root package name */
    private final File f42227b;

    /* renamed from: c  reason: collision with root package name */
    private b f42228c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f42229d;

        /* renamed from: e  reason: collision with root package name */
        private final String f42230e;

        /* renamed from: i  reason: collision with root package name */
        private final String f42231i;

        /* renamed from: o  reason: collision with root package name */
        private final List f42232o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                String readString2 = parcel.readString();
                String readString3 = parcel.readString();
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(b.class.getClassLoader()));
                }
                return new b(readString, readString2, readString3, arrayList);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        public b(String sessionToken, String inquiryId, String stepName, List uiComponentConfig) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(uiComponentConfig, "uiComponentConfig");
            this.f42229d = sessionToken;
            this.f42230e = inquiryId;
            this.f42231i = stepName;
            this.f42232o = uiComponentConfig;
        }

        public final String a() {
            return this.f42230e;
        }

        public final String b() {
            return this.f42231i;
        }

        public final List c() {
            return this.f42232o;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final String l() {
            return this.f42229d;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f42229d);
            dest.writeString(this.f42230e);
            dest.writeString(this.f42231i);
            List<Parcelable> list = this.f42232o;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f42233d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            pr.b.f();
            if (this.f42233d == 0) {
                kotlin.c.b(obj);
                l2.this.f42227b.delete();
                l2.this.f42228c = null;
                return Unit.f33074a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f42235d;

        /* renamed from: e  reason: collision with root package name */
        int f42236e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f42238o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ String f42239p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ String f42240q;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f42241d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ l2 f42242e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ b f42243i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(l2 l2Var, b bVar, Continuation continuation) {
                super(2, continuation);
                this.f42242e = l2Var;
                this.f42243i = bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f42242e, this.f42243i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                pr.b.f();
                if (this.f42241d == 0) {
                    kotlin.c.b(obj);
                    this.f42242e.f42228c = this.f42243i;
                    return Unit.f33074a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f42244d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ l2 f42245e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Parcel f42246i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(l2 l2Var, Parcel parcel, Continuation continuation) {
                super(2, continuation);
                this.f42245e = l2Var;
                this.f42246i = parcel;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f42245e, this.f42246i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                pr.b.f();
                if (this.f42244d == 0) {
                    kotlin.c.b(obj);
                    FileInputStream fileInputStream = new FileInputStream(this.f42245e.f42227b);
                    Parcel parcel = this.f42246i;
                    try {
                        byte[] c10 = ur.b.c(fileInputStream);
                        parcel.unmarshall(c10, 0, c10.length);
                        Unit unit = Unit.f33074a;
                        ur.c.a(fileInputStream, null);
                        return Unit.f33074a;
                    } finally {
                    }
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(String str, String str2, String str3, Continuation continuation) {
            super(2, continuation);
            this.f42238o = str;
            this.f42239p = str2;
            this.f42240q = str3;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f42238o, this.f42239p, this.f42240q, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:42:0x00bb, code lost:
            if (hs.g.g(r9, r2, r8) == r1) goto L31;
         */
        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r2v0, types: [int] */
        /* JADX WARN: Type inference failed for: r2v11 */
        /* JADX WARN: Type inference failed for: r2v12 */
        /* JADX WARN: Type inference failed for: r2v8, types: [android.os.Parcel] */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r9) {
            /*
                r8 = this;
                java.lang.Class<no.l2$b> r0 = no.l2.b.class
                java.lang.Object r1 = pr.b.f()
                int r2 = r8.f42236e
                r3 = 2
                r4 = 1
                r5 = 0
                if (r2 == 0) goto L2c
                if (r2 == r4) goto L22
                if (r2 != r3) goto L1a
                java.lang.Object r0 = r8.f42235d
                no.l2$b r0 = (no.l2.b) r0
                kotlin.c.b(r9)     // Catch: java.lang.Exception -> Lc3
                goto Lbe
            L1a:
                java.lang.IllegalStateException r9 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r9.<init>(r0)
                throw r9
            L22:
                java.lang.Object r2 = r8.f42235d
                android.os.Parcel r2 = (android.os.Parcel) r2
                kotlin.c.b(r9)     // Catch: java.lang.Throwable -> L2a java.lang.Exception -> L7c
                goto L5b
            L2a:
                r9 = move-exception
                goto L78
            L2c:
                kotlin.c.b(r9)
                no.l2 r9 = no.l2.this
                java.io.File r9 = no.l2.a(r9)
                boolean r9 = r9.exists()
                if (r9 != 0) goto L3c
                return r5
            L3c:
                android.os.Parcel r2 = android.os.Parcel.obtain()     // Catch: java.lang.Exception -> Lc3
                java.lang.String r9 = "obtain(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r9)     // Catch: java.lang.Exception -> Lc3
                kotlinx.coroutines.CoroutineDispatcher r9 = hs.m0.b()     // Catch: java.lang.Throwable -> L2a java.lang.Exception -> L7c
                no.l2$d$b r6 = new no.l2$d$b     // Catch: java.lang.Throwable -> L2a java.lang.Exception -> L7c
                no.l2 r7 = no.l2.this     // Catch: java.lang.Throwable -> L2a java.lang.Exception -> L7c
                r6.<init>(r7, r2, r5)     // Catch: java.lang.Throwable -> L2a java.lang.Exception -> L7c
                r8.f42235d = r2     // Catch: java.lang.Throwable -> L2a java.lang.Exception -> L7c
                r8.f42236e = r4     // Catch: java.lang.Throwable -> L2a java.lang.Exception -> L7c
                java.lang.Object r9 = hs.g.g(r9, r6, r8)     // Catch: java.lang.Throwable -> L2a java.lang.Exception -> L7c
                if (r9 != r1) goto L5b
                goto Lbd
            L5b:
                r9 = 0
                r2.setDataPosition(r9)     // Catch: java.lang.Throwable -> L2a java.lang.Exception -> L7c
                java.lang.ClassLoader r9 = r0.getClassLoader()     // Catch: java.lang.Throwable -> L2a java.lang.Exception -> L7c
                android.os.Bundle r9 = r2.readBundle(r9)     // Catch: java.lang.Throwable -> L2a java.lang.Exception -> L7c
                if (r9 == 0) goto L72
                java.lang.String r4 = "data"
                java.lang.Object r9 = w1.b.a(r9, r4, r0)     // Catch: java.lang.Throwable -> L2a java.lang.Exception -> L7c
                no.l2$b r9 = (no.l2.b) r9     // Catch: java.lang.Throwable -> L2a java.lang.Exception -> L7c
                goto L73
            L72:
                r9 = r5
            L73:
                r2.recycle()     // Catch: java.lang.Exception -> Lc3
                r0 = r9
                goto L80
            L78:
                r2.recycle()     // Catch: java.lang.Exception -> Lc3
                throw r9     // Catch: java.lang.Exception -> Lc3
            L7c:
                r2.recycle()     // Catch: java.lang.Exception -> Lc3
                r0 = r5
            L80:
                if (r0 != 0) goto L83
                return r5
            L83:
                java.lang.String r9 = r0.l()     // Catch: java.lang.Exception -> Lc3
                java.lang.String r2 = r8.f42238o     // Catch: java.lang.Exception -> Lc3
                boolean r9 = kotlin.jvm.internal.Intrinsics.areEqual(r9, r2)     // Catch: java.lang.Exception -> Lc3
                if (r9 == 0) goto Lc3
                java.lang.String r9 = r0.a()     // Catch: java.lang.Exception -> Lc3
                java.lang.String r2 = r8.f42239p     // Catch: java.lang.Exception -> Lc3
                boolean r9 = kotlin.jvm.internal.Intrinsics.areEqual(r9, r2)     // Catch: java.lang.Exception -> Lc3
                if (r9 == 0) goto Lc3
                java.lang.String r9 = r0.b()     // Catch: java.lang.Exception -> Lc3
                java.lang.String r2 = r8.f42240q     // Catch: java.lang.Exception -> Lc3
                boolean r9 = kotlin.jvm.internal.Intrinsics.areEqual(r9, r2)     // Catch: java.lang.Exception -> Lc3
                if (r9 != 0) goto La8
                goto Lc3
            La8:
                hs.c1 r9 = hs.m0.c()     // Catch: java.lang.Exception -> Lc3
                no.l2$d$a r2 = new no.l2$d$a     // Catch: java.lang.Exception -> Lc3
                no.l2 r4 = no.l2.this     // Catch: java.lang.Exception -> Lc3
                r2.<init>(r4, r0, r5)     // Catch: java.lang.Exception -> Lc3
                r8.f42235d = r0     // Catch: java.lang.Exception -> Lc3
                r8.f42236e = r3     // Catch: java.lang.Exception -> Lc3
                java.lang.Object r9 = hs.g.g(r9, r2, r8)     // Catch: java.lang.Exception -> Lc3
                if (r9 != r1) goto Lbe
            Lbd:
                return r1
            Lbe:
                java.util.List r5 = r0.c()     // Catch: java.lang.Exception -> Lc3
            Lc3:
                return r5
            */
            throw new UnsupportedOperationException("Method not decompiled: no.l2.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f42247d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ b f42249i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f42250d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ l2 f42251e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Bundle f42252i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(l2 l2Var, Bundle bundle, Continuation continuation) {
                super(2, continuation);
                this.f42251e = l2Var;
                this.f42252i = bundle;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f42251e, this.f42252i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                pr.b.f();
                if (this.f42250d == 0) {
                    kotlin.c.b(obj);
                    FileOutputStream fileOutputStream = new FileOutputStream(this.f42251e.f42227b);
                    Bundle bundle = this.f42252i;
                    try {
                        Parcel obtain = Parcel.obtain();
                        Intrinsics.checkNotNullExpressionValue(obtain, "obtain(...)");
                        obtain.writeBundle(bundle);
                        fileOutputStream.write(obtain.marshall());
                        obtain.recycle();
                        Unit unit = Unit.f33074a;
                        ur.c.a(fileOutputStream, null);
                        return Unit.f33074a;
                    } finally {
                    }
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(b bVar, Continuation continuation) {
            super(2, continuation);
            this.f42249i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f42249i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f42247d;
            try {
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    File parentFile = l2.this.f42227b.getParentFile();
                    if (parentFile != null) {
                        kotlin.coroutines.jvm.internal.b.a(parentFile.mkdirs());
                    }
                    Bundle bundle = new Bundle();
                    bundle.putParcelable("data", this.f42249i);
                    CoroutineDispatcher b10 = hs.m0.b();
                    a aVar = new a(l2.this, bundle, null);
                    this.f42247d = 1;
                    if (hs.g.g(b10, aVar, this) == f10) {
                        return f10;
                    }
                }
            } catch (Exception unused) {
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public l2(Context applicationContext) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        this.f42226a = kotlinx.coroutines.i.a(hs.m0.a().Z0(hs.j1.b(null, 1, null)));
        this.f42227b = new File(new File(applicationContext.getFilesDir(), ".com.withpersona.sdk2.inquiry"), "ui_step_config");
    }

    public final Object c(Continuation continuation) {
        Object g10 = hs.g.g(hs.m0.c(), new c(null), continuation);
        if (g10 == pr.b.f()) {
            return g10;
        }
        return Unit.f33074a;
    }

    public final Object d(String str, String str2, String str3, Continuation continuation) {
        return hs.g.g(hs.m0.a(), new d(str, str2, str3, null), continuation);
    }

    public final void e(String sessionToken, String inquiryId, String stepName, List list) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        Intrinsics.checkNotNullParameter(stepName, "stepName");
        if (Intrinsics.areEqual(Looper.getMainLooper().getThread(), Thread.currentThread())) {
            if (list != null) {
                b bVar = this.f42228c;
                if (bVar != null) {
                    str = bVar.l();
                } else {
                    str = null;
                }
                if (Intrinsics.areEqual(str, sessionToken)) {
                    b bVar2 = this.f42228c;
                    if (bVar2 != null) {
                        str2 = bVar2.a();
                    } else {
                        str2 = null;
                    }
                    if (Intrinsics.areEqual(str2, inquiryId)) {
                        b bVar3 = this.f42228c;
                        if (bVar3 != null) {
                            str3 = bVar3.b();
                        } else {
                            str3 = null;
                        }
                        if (Intrinsics.areEqual(str3, stepName)) {
                            return;
                        }
                    }
                }
                b bVar4 = new b(sessionToken, inquiryId, stepName, list);
                this.f42228c = bVar4;
                hs.g.d(this.f42226a, null, null, new e(bVar4, null), 3, null);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("saveComponentConfigs must be called on the main thread.");
    }
}
