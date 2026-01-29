package ao;

import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import androidx.activity.result.ActivityResultLauncher;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import tm.o;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0011\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\t\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0001\u001cB/\b\u0007\u0012\u0014\b\u0001\u0010\u0006\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00050\u00040\u0003\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\u0006\u0010\n\u001a\u00020\t¢\u0006\u0004\b\u000b\u0010\fJ\r\u0010\u000e\u001a\u00020\r¢\u0006\u0004\b\u000e\u0010\u000fJ\u0017\u0010\u0012\u001a\u0004\u0018\u00010\u00052\u0006\u0010\u0011\u001a\u00020\u0010¢\u0006\u0004\b\u0012\u0010\u0013J\u0015\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00020\u0014H\u0016¢\u0006\u0004\b\u0015\u0010\u0016R \u0010\u0006\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00050\u00040\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u0014\u0010\b\u001a\u00020\u00078\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u001aR\u0014\u0010\n\u001a\u00020\t8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u001b¨\u0006\u001d"}, d2 = {"Lao/a0;", "Ltm/o;", "Lao/a0$a;", "Landroidx/activity/result/ActivityResultLauncher;", "", "", "openDocumentLauncher", "Landroid/content/Context;", "context", "Lop/c;", "sdkFilesManager", "<init>", "(Landroidx/activity/result/ActivityResultLauncher;Landroid/content/Context;Lop/c;)V", "", "e", "()V", "Landroid/net/Uri;", "file", "d", "(Landroid/net/Uri;)Ljava/lang/String;", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Landroidx/activity/result/ActivityResultLauncher;", "c", "Landroid/content/Context;", "Lop/c;", "a", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDocumentSelectWorker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DocumentSelectWorker.kt\ncom/withpersona/sdk2/inquiry/governmentid/DocumentSelectWorker\n+ 2 Transform.kt\nkotlinx/coroutines/flow/FlowKt__TransformKt\n+ 3 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt\n+ 4 SafeCollector.common.kt\nkotlinx/coroutines/flow/internal/SafeCollector_commonKt\n*L\n1#1,67:1\n49#2:68\n51#2:72\n46#3:69\n51#3:71\n105#4:70\n*S KotlinDebug\n*F\n+ 1 DocumentSelectWorker.kt\ncom/withpersona/sdk2/inquiry/governmentid/DocumentSelectWorker\n*L\n44#1:68\n44#1:72\n44#1:69\n44#1:71\n44#1:70\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 implements tm.o<a> {

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f5772b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f5773c;

    /* renamed from: d  reason: collision with root package name */
    private final op.c f5774d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: ao.a0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0081a extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final C0081a f5775a = new C0081a();

            private C0081a() {
                super(null);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends a {

            /* renamed from: a  reason: collision with root package name */
            private final String f5776a;

            /* renamed from: b  reason: collision with root package name */
            private final String f5777b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String absoluteFilePath, String str) {
                super(null);
                Intrinsics.checkNotNullParameter(absoluteFilePath, "absoluteFilePath");
                this.f5776a = absoluteFilePath;
                this.f5777b = str;
            }

            public final String a() {
                return this.f5776a;
            }

            public final String b() {
                return this.f5777b;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f5778d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ a0 f5779e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f5780d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ a0 f5781e;

            /* renamed from: ao.a0$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0082a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f5782d;

                /* renamed from: e  reason: collision with root package name */
                int f5783e;

                public C0082a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f5782d = obj;
                    this.f5783e |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            public a(FlowCollector flowCollector, a0 a0Var) {
                this.f5780d = flowCollector;
                this.f5781e = a0Var;
            }

            /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
            /* JADX WARN: Removed duplicated region for block: B:14:0x0032  */
            @Override // kotlinx.coroutines.flow.FlowCollector
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object emit(java.lang.Object r10, kotlin.coroutines.Continuation r11) {
                /*
                    r9 = this;
                    boolean r0 = r11 instanceof ao.a0.b.a.C0082a
                    if (r0 == 0) goto L13
                    r0 = r11
                    ao.a0$b$a$a r0 = (ao.a0.b.a.C0082a) r0
                    int r1 = r0.f5783e
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f5783e = r1
                    goto L18
                L13:
                    ao.a0$b$a$a r0 = new ao.a0$b$a$a
                    r0.<init>(r11)
                L18:
                    java.lang.Object r11 = r0.f5782d
                    java.lang.Object r1 = or.b.f()
                    int r2 = r0.f5783e
                    r3 = 1
                    if (r2 == 0) goto L32
                    if (r2 != r3) goto L2a
                    kotlin.c.b(r11)
                    goto Lb9
                L2a:
                    java.lang.IllegalStateException r10 = new java.lang.IllegalStateException
                    java.lang.String r11 = "call to 'resume' before 'invoke' with coroutine"
                    r10.<init>(r11)
                    throw r10
                L32:
                    kotlin.c.b(r11)
                    kotlinx.coroutines.flow.FlowCollector r11 = r9.f5780d
                    android.net.Uri r10 = (android.net.Uri) r10
                    if (r10 == 0) goto Lae
                    ao.a0 r2 = r9.f5781e
                    android.content.Context r2 = ao.a0.b(r2)
                    android.content.ContentResolver r2 = r2.getContentResolver()
                    java.lang.String r2 = r2.getType(r10)
                    ao.a0 r4 = r9.f5781e
                    java.lang.String r4 = r4.d(r10)
                    android.webkit.MimeTypeMap r5 = android.webkit.MimeTypeMap.getSingleton()
                    java.lang.String r2 = r5.getExtensionFromMimeType(r2)
                    if (r2 != 0) goto L61
                    java.lang.String r2 = r10.toString()
                    java.lang.String r2 = android.webkit.MimeTypeMap.getFileExtensionFromUrl(r2)
                L61:
                    ao.a0 r5 = r9.f5781e
                    op.c r5 = ao.a0.c(r5)
                    kotlin.jvm.internal.Intrinsics.checkNotNull(r2)
                    java.io.File r2 = r5.c(r2)
                    ao.a0 r5 = r9.f5781e
                    android.content.Context r5 = ao.a0.b(r5)
                    android.content.ContentResolver r5 = r5.getContentResolver()
                    java.io.InputStream r10 = r5.openInputStream(r10)
                    kotlin.jvm.internal.Intrinsics.checkNotNull(r10)
                    java.io.FileOutputStream r5 = new java.io.FileOutputStream
                    r5.<init>(r2)
                    r6 = 0
                    r7 = 2
                    r8 = 0
                    tr.b.b(r10, r5, r6, r7, r8)     // Catch: java.lang.Throwable -> La1
                    tr.c.a(r10, r8)     // Catch: java.lang.Throwable -> L9f
                    tr.c.a(r5, r8)
                    ao.a0$a$b r10 = new ao.a0$a$b
                    java.lang.String r2 = r2.getAbsolutePath()
                    java.lang.String r5 = "getAbsolutePath(...)"
                    kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r5)
                    r10.<init>(r2, r4)
                    goto Lb0
                L9f:
                    r10 = move-exception
                    goto La8
                La1:
                    r11 = move-exception
                    throw r11     // Catch: java.lang.Throwable -> La3
                La3:
                    r0 = move-exception
                    tr.c.a(r10, r11)     // Catch: java.lang.Throwable -> L9f
                    throw r0     // Catch: java.lang.Throwable -> L9f
                La8:
                    throw r10     // Catch: java.lang.Throwable -> La9
                La9:
                    r11 = move-exception
                    tr.c.a(r5, r10)
                    throw r11
                Lae:
                    ao.a0$a$a r10 = ao.a0.a.C0081a.f5775a
                Lb0:
                    r0.f5783e = r3
                    java.lang.Object r10 = r11.emit(r10, r0)
                    if (r10 != r1) goto Lb9
                    return r1
                Lb9:
                    kotlin.Unit r10 = kotlin.Unit.f33282a
                    return r10
                */
                throw new UnsupportedOperationException("Method not decompiled: ao.a0.b.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        public b(Flow flow, a0 a0Var) {
            this.f5778d = flow;
            this.f5779e = a0Var;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f5778d.collect(new a(flowCollector, this.f5779e), continuation);
            if (collect == or.b.f()) {
                return collect;
            }
            return Unit.f33282a;
        }
    }

    public a0(ActivityResultLauncher openDocumentLauncher, Context context, op.c sdkFilesManager) {
        Intrinsics.checkNotNullParameter(openDocumentLauncher, "openDocumentLauncher");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        this.f5772b = openDocumentLauncher;
        this.f5773c = context;
        this.f5774d = sdkFilesManager;
    }

    @Override // tm.o
    public boolean a(tm.o oVar) {
        return o.b.a(this, oVar);
    }

    public final String d(Uri file) {
        String str;
        Intrinsics.checkNotNullParameter(file, "file");
        Cursor query = this.f5773c.getContentResolver().query(file, null, null, null, null);
        if (query != null) {
            query.moveToFirst();
        }
        if (query != null) {
            str = query.getString(Math.max(query.getColumnIndex("_display_name"), 0));
        } else {
            str = null;
        }
        if (query != null) {
            query.close();
        }
        return str;
    }

    public final void e() {
        this.f5772b.b(new String[]{"image/*", "application/pdf"});
    }

    @Override // tm.o
    public Flow run() {
        return js.g.x(new b(new uo.s(), this), gs.m0.b());
    }
}
