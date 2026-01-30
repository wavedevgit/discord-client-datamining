package vn;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.e;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import vn.v2;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\n\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0003\u001d\u0016\u001bB/\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\f\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\n0\t¢\u0006\u0004\b\f\u0010\rJ(\u0010\u0012\u001a\u00020\n*\b\u0012\u0004\u0012\u00020\u00020\u000e2\f\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00100\u000fH\u0082@¢\u0006\u0004\b\u0012\u0010\u0013J\u001b\u0010\u0016\u001a\u00020\u00152\n\u0010\u0014\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u0016\u0010\u0017J\u0015\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00020\u0018H\u0016¢\u0006\u0004\b\u0019\u0010\u001aR\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u001cR\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u001eR\u0014\u0010\b\u001a\u00020\u00078\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u001fR\u001a\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\n0\t8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b \u0010!¨\u0006\""}, d2 = {"Lvn/v2;", "Ltm/o;", "Lvn/v2$c;", "", "key", "Landroid/content/Context;", "context", "Lop/c;", "sdkFilesManager", "Lkotlin/Function0;", "", "launchPicker", "<init>", "(Ljava/lang/String;Landroid/content/Context;Lop/c;Lkotlin/jvm/functions/Function0;)V", "Lkotlinx/coroutines/flow/FlowCollector;", "", "Landroid/net/Uri;", "documentSelectResult", "d", "(Lkotlinx/coroutines/flow/FlowCollector;Ljava/util/List;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "otherWorker", "", "a", "(Ltm/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Ljava/lang/String;", "c", "Landroid/content/Context;", "Lop/c;", "e", "Lkotlin/jvm/functions/Function0;", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDocumentsSelectWorker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DocumentsSelectWorker.kt\ncom/withpersona/sdk2/inquiry/document/DocumentsSelectWorker\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,147:1\n1611#2,9:148\n1863#2:157\n1864#2:159\n1620#2:160\n1#3:158\n*S KotlinDebug\n*F\n+ 1 DocumentsSelectWorker.kt\ncom/withpersona/sdk2/inquiry/document/DocumentsSelectWorker\n*L\n68#1:148,9\n68#1:157\n68#1:159\n68#1:160\n68#1:158\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v2 implements tm.o<c> {

    /* renamed from: b  reason: collision with root package name */
    private final String f51678b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f51679c;

    /* renamed from: d  reason: collision with root package name */
    private final op.c f51680d;

    /* renamed from: e  reason: collision with root package name */
    private final Function0 f51681e;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f51682d = new a("FileNotFound", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f51683e = new a("PermissionDenied", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ a[] f51684i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f51685o;

        static {
            a[] a10 = a();
            f51684i = a10;
            f51685o = pr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f51682d, f51683e};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f51684i.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final ActivityResultLauncher f51686a;

        /* renamed from: b  reason: collision with root package name */
        private final ActivityResultLauncher f51687b;

        /* renamed from: c  reason: collision with root package name */
        private final Context f51688c;

        /* renamed from: d  reason: collision with root package name */
        private final op.c f51689d;

        public b(ActivityResultLauncher openDocumentLauncher, ActivityResultLauncher selectFromPhotoLibraryLauncher, Context context, op.c sdkFilesManager) {
            Intrinsics.checkNotNullParameter(openDocumentLauncher, "openDocumentLauncher");
            Intrinsics.checkNotNullParameter(selectFromPhotoLibraryLauncher, "selectFromPhotoLibraryLauncher");
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
            this.f51686a = openDocumentLauncher;
            this.f51687b = selectFromPhotoLibraryLauncher;
            this.f51688c = context;
            this.f51689d = sdkFilesManager;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit d(b bVar) {
            bVar.f51686a.b(new String[]{"image/*", "application/pdf"});
            return Unit.f33298a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit f(b bVar) {
            bVar.f51687b.b(d.g.b(e.d.f888a, 0, false, null, 14, null));
            return Unit.f33298a;
        }

        public final v2 c() {
            return new v2("DocumentPicker", this.f51688c, this.f51689d, new Function0() { // from class: vn.w2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit d10;
                    d10 = v2.b.d(v2.b.this);
                    return d10;
                }
            });
        }

        public final v2 e() {
            return new v2("PhotoLibraryPicker", this.f51688c, this.f51689d, new Function0() { // from class: vn.x2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f10;
                    f10 = v2.b.f(v2.b.this);
                    return f10;
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f51690a = new a();

            private a() {
                super(null);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends c {

            /* renamed from: a  reason: collision with root package name */
            private final List f51691a;

            /* renamed from: b  reason: collision with root package name */
            private final a f51692b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(List absoluteFilePaths, a reason) {
                super(null);
                Intrinsics.checkNotNullParameter(absoluteFilePaths, "absoluteFilePaths");
                Intrinsics.checkNotNullParameter(reason, "reason");
                this.f51691a = absoluteFilePaths;
                this.f51692b = reason;
            }

            public final List a() {
                return this.f51691a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f51691a, bVar.f51691a) && this.f51692b == bVar.f51692b) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f51691a.hashCode() * 31) + this.f51692b.hashCode();
            }

            public String toString() {
                List list = this.f51691a;
                a aVar = this.f51692b;
                return "Failure(absoluteFilePaths=" + list + ", reason=" + aVar + ")";
            }
        }

        /* renamed from: vn.v2$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0700c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final List f51693a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0700c(List absoluteFilePaths) {
                super(null);
                Intrinsics.checkNotNullParameter(absoluteFilePaths, "absoluteFilePaths");
                this.f51693a = absoluteFilePaths;
            }

            public final List a() {
                return this.f51693a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0700c) && Intrinsics.areEqual(this.f51693a, ((C0700c) obj).f51693a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f51693a.hashCode();
            }

            public String toString() {
                List list = this.f51693a;
                return "Success(absoluteFilePaths=" + list + ")";
            }
        }

        public /* synthetic */ c(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private c() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51694d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f51695e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f51697d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ v2 f51698e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(v2 v2Var, Continuation continuation) {
                super(2, continuation);
                this.f51698e = v2Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f51698e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                or.b.f();
                if (this.f51697d == 0) {
                    kotlin.c.b(obj);
                    this.f51698e.f51681e.invoke();
                    return Unit.f33298a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ v2 f51699d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ FlowCollector f51700e;

            b(v2 v2Var, FlowCollector flowCollector) {
                this.f51699d = v2Var;
                this.f51700e = flowCollector;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(List list, Continuation continuation) {
                Object d10 = this.f51699d.d(this.f51700e, list, continuation);
                if (d10 == or.b.f()) {
                    return d10;
                }
                return Unit.f33298a;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f51701d;

            c(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new c(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = or.b.f();
                int i10 = this.f51701d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                uo.t tVar = new uo.t();
                this.f51701d = 1;
                Object u10 = js.g.u(tVar, this);
                if (u10 == f10) {
                    return f10;
                }
                return u10;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f51695e = obj;
            return dVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:21:0x0060, code lost:
            if (r2.d(r1, r11, r10) == r0) goto L16;
         */
        /* JADX WARN: Code restructure failed: missing block: B:26:0x0079, code lost:
            if (gs.g.g(r11, r4, r10) == r0) goto L16;
         */
        /* JADX WARN: Code restructure failed: missing block: B:29:0x0090, code lost:
            if (r11.collect(r3, r10) == r0) goto L16;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r11) {
            /*
                r10 = this;
                java.lang.Object r0 = or.b.f()
                int r1 = r10.f51694d
                r2 = 4
                r3 = 3
                r4 = 2
                r5 = 1
                r6 = 0
                if (r1 == 0) goto L36
                if (r1 == r5) goto L2e
                if (r1 == r4) goto L2a
                if (r1 == r3) goto L22
                if (r1 == r2) goto L1d
                java.lang.IllegalStateException r11 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r11.<init>(r0)
                throw r11
            L1d:
                kotlin.c.b(r11)
                goto L93
            L22:
                java.lang.Object r1 = r10.f51695e
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r11)
                goto L7c
            L2a:
                kotlin.c.b(r11)
                goto L63
            L2e:
                java.lang.Object r1 = r10.f51695e
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r11)
                goto L52
            L36:
                kotlin.c.b(r11)
                java.lang.Object r11 = r10.f51695e
                kotlinx.coroutines.flow.FlowCollector r11 = (kotlinx.coroutines.flow.FlowCollector) r11
                vn.v2$d$c r1 = new vn.v2$d$c
                r1.<init>(r6)
                r10.f51695e = r11
                r10.f51694d = r5
                r7 = 100
                java.lang.Object r1 = gs.t1.d(r7, r1, r10)
                if (r1 != r0) goto L4f
                goto L92
            L4f:
                r9 = r1
                r1 = r11
                r11 = r9
            L52:
                java.util.List r11 = (java.util.List) r11
                if (r11 == 0) goto L66
                vn.v2 r2 = vn.v2.this
                r10.f51695e = r6
                r10.f51694d = r4
                java.lang.Object r11 = vn.v2.c(r2, r1, r11, r10)
                if (r11 != r0) goto L63
                goto L92
            L63:
                kotlin.Unit r11 = kotlin.Unit.f33298a
                return r11
            L66:
                gs.c1 r11 = gs.m0.c()
                vn.v2$d$a r4 = new vn.v2$d$a
                vn.v2 r5 = vn.v2.this
                r4.<init>(r5, r6)
                r10.f51695e = r1
                r10.f51694d = r3
                java.lang.Object r11 = gs.g.g(r11, r4, r10)
                if (r11 != r0) goto L7c
                goto L92
            L7c:
                uo.t r11 = new uo.t
                r11.<init>()
                vn.v2$d$b r3 = new vn.v2$d$b
                vn.v2 r4 = vn.v2.this
                r3.<init>(r4, r1)
                r10.f51695e = r6
                r10.f51694d = r2
                java.lang.Object r11 = r11.collect(r3, r10)
                if (r11 != r0) goto L93
            L92:
                return r0
            L93:
                ir.h r11 = new ir.h
                r11.<init>()
                throw r11
            */
            throw new UnsupportedOperationException("Method not decompiled: vn.v2.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((d) create(flowCollector, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public v2(String key, Context context, op.c sdkFilesManager, Function0 launchPicker) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(launchPicker, "launchPicker");
        this.f51678b = key;
        this.f51679c = context;
        this.f51680d = sdkFilesManager;
        this.f51681e = launchPicker;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:56:0x0084 A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:60:0x002d A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object d(kotlinx.coroutines.flow.FlowCollector r11, java.util.List r12, kotlin.coroutines.Continuation r13) {
        /*
            r10 = this;
            android.webkit.MimeTypeMap r0 = android.webkit.MimeTypeMap.getSingleton()
            android.content.Context r1 = r10.f51679c
            android.content.ContentResolver r1 = r1.getContentResolver()
            boolean r2 = r12.isEmpty()
            if (r2 == 0) goto L20
            vn.v2$c$a r12 = vn.v2.c.a.f51690a
            java.lang.Object r11 = r11.emit(r12, r13)
            java.lang.Object r12 = or.b.f()
            if (r11 != r12) goto L1d
            return r11
        L1d:
            kotlin.Unit r11 = kotlin.Unit.f33298a
            return r11
        L20:
            java.lang.Iterable r12 = (java.lang.Iterable) r12
            java.util.ArrayList r2 = new java.util.ArrayList
            r2.<init>()
            java.util.Iterator r12 = r12.iterator()
            r3 = 0
            r4 = r3
        L2d:
            boolean r5 = r12.hasNext()
            if (r5 == 0) goto L88
            java.lang.Object r5 = r12.next()
            android.net.Uri r5 = (android.net.Uri) r5
            java.lang.String r6 = r1.getType(r5)     // Catch: java.lang.SecurityException -> L7b java.io.FileNotFoundException -> L7f
            java.lang.String r6 = r0.getExtensionFromMimeType(r6)     // Catch: java.lang.SecurityException -> L7b java.io.FileNotFoundException -> L7f
            op.c r7 = r10.f51680d     // Catch: java.lang.SecurityException -> L7b java.io.FileNotFoundException -> L7f
            if (r6 != 0) goto L47
            java.lang.String r6 = "jpg"
        L47:
            java.io.File r6 = r7.c(r6)     // Catch: java.lang.SecurityException -> L7b java.io.FileNotFoundException -> L7f
            java.io.InputStream r5 = r1.openInputStream(r5)     // Catch: java.lang.SecurityException -> L7b java.io.FileNotFoundException -> L7f
            if (r5 == 0) goto L75
            java.io.FileOutputStream r7 = new java.io.FileOutputStream     // Catch: java.lang.SecurityException -> L7b java.io.FileNotFoundException -> L7f
            r7.<init>(r6)     // Catch: java.lang.SecurityException -> L7b java.io.FileNotFoundException -> L7f
            r8 = 0
            r9 = 2
            tr.b.b(r5, r7, r8, r9, r3)     // Catch: java.lang.Throwable -> L68
            tr.c.a(r5, r3)     // Catch: java.lang.Throwable -> L66
            tr.c.a(r7, r3)     // Catch: java.lang.SecurityException -> L7b java.io.FileNotFoundException -> L7f
            java.lang.String r5 = r6.getAbsolutePath()     // Catch: java.lang.SecurityException -> L7b java.io.FileNotFoundException -> L7f
            goto L82
        L66:
            r4 = move-exception
            goto L6f
        L68:
            r4 = move-exception
            throw r4     // Catch: java.lang.Throwable -> L6a
        L6a:
            r6 = move-exception
            tr.c.a(r5, r4)     // Catch: java.lang.Throwable -> L66
            throw r6     // Catch: java.lang.Throwable -> L66
        L6f:
            throw r4     // Catch: java.lang.Throwable -> L70
        L70:
            r5 = move-exception
            tr.c.a(r7, r4)     // Catch: java.lang.SecurityException -> L7b java.io.FileNotFoundException -> L7f
            throw r5     // Catch: java.lang.SecurityException -> L7b java.io.FileNotFoundException -> L7f
        L75:
            java.io.FileNotFoundException r4 = new java.io.FileNotFoundException     // Catch: java.lang.SecurityException -> L7b java.io.FileNotFoundException -> L7f
            r4.<init>()     // Catch: java.lang.SecurityException -> L7b java.io.FileNotFoundException -> L7f
            throw r4     // Catch: java.lang.SecurityException -> L7b java.io.FileNotFoundException -> L7f
        L7b:
            vn.v2$a r4 = vn.v2.a.f51683e
        L7d:
            r5 = r3
            goto L82
        L7f:
            vn.v2$a r4 = vn.v2.a.f51682d
            goto L7d
        L82:
            if (r5 == 0) goto L2d
            r2.add(r5)
            goto L2d
        L88:
            if (r4 != 0) goto L9a
            vn.v2$c$c r12 = new vn.v2$c$c
            r12.<init>(r2)
            java.lang.Object r11 = r11.emit(r12, r13)
            java.lang.Object r12 = or.b.f()
            if (r11 != r12) goto Laa
            return r11
        L9a:
            vn.v2$c$b r12 = new vn.v2$c$b
            r12.<init>(r2, r4)
            java.lang.Object r11 = r11.emit(r12, r13)
            java.lang.Object r12 = or.b.f()
            if (r11 != r12) goto Laa
            return r11
        Laa:
            kotlin.Unit r11 = kotlin.Unit.f33298a
            return r11
        */
        throw new UnsupportedOperationException("Method not decompiled: vn.v2.d(kotlinx.coroutines.flow.FlowCollector, java.util.List, kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // tm.o
    public boolean a(tm.o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if ((otherWorker instanceof v2) && Intrinsics.areEqual(this.f51678b, ((v2) otherWorker).f51678b)) {
            return true;
        }
        return false;
    }

    @Override // tm.o
    public Flow run() {
        return js.g.x(js.g.v(new d(null)), gs.m0.b());
    }
}
