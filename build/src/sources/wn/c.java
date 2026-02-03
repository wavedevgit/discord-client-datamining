package wn;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.widget.Toast;
import androidx.activity.result.ActivityResultLauncher;
import androidx.core.content.FileProvider;
import java.io.FileOutputStream;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import um.o;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\n\u0018\u0000 \u00192\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\u001a\u0014B)\b\u0007\u0012\u000e\b\u0001\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\t\u001a\u00020\b¢\u0006\u0004\b\n\u0010\u000bJ\u0015\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\r\u001a\u00020\f¢\u0006\u0004\b\u000f\u0010\u0010J\u0015\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00020\u0011H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u001a\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015R\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000f\u0010\u0016R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018¨\u0006\u001b"}, d2 = {"Lwn/c;", "Lum/o;", "Lwn/c$b;", "Landroidx/activity/result/ActivityResultLauncher;", "Landroid/net/Uri;", "pictureLauncher", "Landroid/content/Context;", "context", "Lpp/c;", "sdkFilesManager", "<init>", "(Landroidx/activity/result/ActivityResultLauncher;Landroid/content/Context;Lpp/c;)V", "", "errorMessage", "", "c", "(Ljava/lang/String;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Landroidx/activity/result/ActivityResultLauncher;", "Landroid/content/Context;", "d", "Lpp/c;", "e", "a", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDocumentCameraWorker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DocumentCameraWorker.kt\ncom/withpersona/sdk2/inquiry/document/DocumentCameraWorker\n+ 2 Transform.kt\nkotlinx/coroutines/flow/FlowKt__TransformKt\n+ 3 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt\n+ 4 SafeCollector.common.kt\nkotlinx/coroutines/flow/internal/SafeCollector_commonKt\n*L\n1#1,88:1\n49#2:89\n51#2:93\n46#3:90\n51#3:92\n105#4:91\n*S KotlinDebug\n*F\n+ 1 DocumentCameraWorker.kt\ncom/withpersona/sdk2/inquiry/document/DocumentCameraWorker\n*L\n70#1:89\n70#1:93\n70#1:90\n70#1:92\n70#1:91\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements um.o<b> {

    /* renamed from: e  reason: collision with root package name */
    public static final a f52452e = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f52453b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f52454c;

    /* renamed from: d  reason: collision with root package name */
    private final pp.c f52455d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final a f52456a = new a();

            private a() {
                super(null);
            }
        }

        /* renamed from: wn.c$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0717b extends b {

            /* renamed from: a  reason: collision with root package name */
            private final String f52457a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0717b(String absoluteFilePath) {
                super(null);
                Intrinsics.checkNotNullParameter(absoluteFilePath, "absoluteFilePath");
                this.f52457a = absoluteFilePath;
            }

            public final String a() {
                return this.f52457a;
            }
        }

        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* renamed from: wn.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0718c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f52458d;

        C0718c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new C0718c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f52458d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f52458d = 1;
                if (hs.i0.a(500L, this) == f10) {
                    return f10;
                }
            }
            Bitmap createBitmap = Bitmap.createBitmap(10, 10, Bitmap.Config.ARGB_8888);
            FileOutputStream fileOutputStream = new FileOutputStream(c.this.f52455d.d("document_camera_photo.jpg"));
            try {
                createBitmap.compress(Bitmap.CompressFormat.JPEG, 80, fileOutputStream);
                ur.c.a(fileOutputStream, null);
                new vo.y().a(true);
                return Unit.f33074a;
            } finally {
            }
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((C0718c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f52460d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ c f52461e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f52462d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ c f52463e;

            /* renamed from: wn.c$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0719a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f52464d;

                /* renamed from: e  reason: collision with root package name */
                int f52465e;

                public C0719a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f52464d = obj;
                    this.f52465e |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            public a(FlowCollector flowCollector, c cVar) {
                this.f52462d = flowCollector;
                this.f52463e = cVar;
            }

            /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
            /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
            @Override // kotlinx.coroutines.flow.FlowCollector
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object emit(java.lang.Object r6, kotlin.coroutines.Continuation r7) {
                /*
                    r5 = this;
                    boolean r0 = r7 instanceof wn.c.d.a.C0719a
                    if (r0 == 0) goto L13
                    r0 = r7
                    wn.c$d$a$a r0 = (wn.c.d.a.C0719a) r0
                    int r1 = r0.f52465e
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f52465e = r1
                    goto L18
                L13:
                    wn.c$d$a$a r0 = new wn.c$d$a$a
                    r0.<init>(r7)
                L18:
                    java.lang.Object r7 = r0.f52464d
                    java.lang.Object r1 = pr.b.f()
                    int r2 = r0.f52465e
                    r3 = 1
                    if (r2 == 0) goto L31
                    if (r2 != r3) goto L29
                    kotlin.c.b(r7)
                    goto L79
                L29:
                    java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                    java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
                    r6.<init>(r7)
                    throw r6
                L31:
                    kotlin.c.b(r7)
                    kotlinx.coroutines.flow.FlowCollector r7 = r5.f52462d
                    java.lang.Boolean r6 = (java.lang.Boolean) r6
                    boolean r6 = r6.booleanValue()
                    if (r6 == 0) goto L6e
                    wn.c r6 = r5.f52463e
                    pp.c r6 = wn.c.b(r6)
                    java.lang.String r2 = "document_camera_photo.jpg"
                    java.io.File r6 = r6.d(r2)
                    wn.c r2 = r5.f52463e
                    pp.c r2 = wn.c.b(r2)
                    java.lang.String r4 = "jpg"
                    java.io.File r2 = r2.c(r4)
                    boolean r6 = r6.renameTo(r2)
                    if (r6 == 0) goto L6b
                    wn.c$b$b r6 = new wn.c$b$b
                    java.lang.String r2 = r2.getAbsolutePath()
                    java.lang.String r4 = "getAbsolutePath(...)"
                    kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r4)
                    r6.<init>(r2)
                    goto L70
                L6b:
                    wn.c$b$a r6 = wn.c.b.a.f52456a
                    goto L70
                L6e:
                    wn.c$b$a r6 = wn.c.b.a.f52456a
                L70:
                    r0.f52465e = r3
                    java.lang.Object r6 = r7.emit(r6, r0)
                    if (r6 != r1) goto L79
                    return r1
                L79:
                    kotlin.Unit r6 = kotlin.Unit.f33074a
                    return r6
                */
                throw new UnsupportedOperationException("Method not decompiled: wn.c.d.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        public d(Flow flow, c cVar) {
            this.f52460d = flow;
            this.f52461e = cVar;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f52460d.collect(new a(flowCollector, this.f52461e), continuation);
            if (collect == pr.b.f()) {
                return collect;
            }
            return Unit.f33074a;
        }
    }

    public c(ActivityResultLauncher pictureLauncher, Context context, pp.c sdkFilesManager) {
        Intrinsics.checkNotNullParameter(pictureLauncher, "pictureLauncher");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        this.f52453b = pictureLauncher;
        this.f52454c = context;
        this.f52455d = sdkFilesManager;
    }

    @Override // um.o
    public boolean a(um.o oVar) {
        return o.b.a(this, oVar);
    }

    public final boolean c(String errorMessage) {
        Intrinsics.checkNotNullParameter(errorMessage, "errorMessage");
        try {
            if (vp.b.b()) {
                hs.i.d(hs.v0.f27954d, null, null, new C0718c(null), 3, null);
                return true;
            }
            Context context = this.f52454c;
            String packageName = context.getPackageName();
            Uri uriForFile = FileProvider.getUriForFile(context, packageName + ".persona.provider", this.f52455d.d("document_camera_photo.jpg"));
            ActivityResultLauncher activityResultLauncher = this.f52453b;
            Intrinsics.checkNotNull(uriForFile);
            activityResultLauncher.b(uriForFile);
            return true;
        } catch (IllegalArgumentException unused) {
            Toast.makeText(this.f52454c, errorMessage, 0).show();
            return false;
        }
    }

    @Override // um.o
    public Flow run() {
        return new d(new vo.y(), this);
    }
}
