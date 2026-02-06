package qo;

import android.content.Context;
import bn.o;
import co.t;
import com.withpersona.sdk2.inquiry.governmentid.RawExtraction;
import com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import jo.c0;
import jo.d0;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import oq.e;
import org.webrtc.MediaStreamTrack;
import qr.p;
import un.v;
@Metadata(d1 = {"\u0000j\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0018\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002(#B\u0083\u0001\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0005\u0012\b\b\u0001\u0010\b\u001a\u00020\u0005\u0012\b\b\u0001\u0010\t\u001a\u00020\u0005\u0012\u0006\u0010\u000b\u001a\u00020\n\u0012\n\b\u0001\u0010\r\u001a\u0004\u0018\u00010\f\u0012\u0006\u0010\u000f\u001a\u00020\u000e\u0012\u0006\u0010\u0011\u001a\u00020\u0010\u0012\u0006\u0010\u0013\u001a\u00020\u0012\u0012\n\b\u0001\u0010\u0014\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0001\u0010\u0016\u001a\u00020\u0015\u0012\u0006\u0010\u0018\u001a\u00020\u0017¢\u0006\u0004\b\u0019\u0010\u001aJ)\u0010\u001f\u001a\u00020\u001e*\u00020\f2\f\u0010\u001d\u001a\b\u0012\u0004\u0012\u00020\u001c0\u001b2\u0006\u0010\u0016\u001a\u00020\u0015H\u0002¢\u0006\u0004\b\u001f\u0010 J\u001b\u0010#\u001a\u00020\"2\n\u0010!\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b#\u0010$J\u0015\u0010&\u001a\b\u0012\u0004\u0012\u00020\u00020%H\u0016¢\u0006\u0004\b&\u0010'R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b(\u0010)R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b*\u0010+R\u0014\u0010\u0007\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b,\u0010+R\u0014\u0010\b\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010+R\u0014\u0010\t\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b.\u0010+R\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b/\u00100R\u0016\u0010\r\u001a\u0004\u0018\u00010\f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b1\u00102R\u0014\u0010\u000f\u001a\u00020\u000e8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b3\u00104R\u0014\u0010\u0011\u001a\u00020\u00108\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b5\u00106R\u0014\u0010\u0013\u001a\u00020\u00128\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b7\u00108R\u0016\u0010\u0014\u001a\u0004\u0018\u00010\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010+R\u0014\u0010\u0016\u001a\u00020\u00158\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b9\u0010:R\u0014\u0010\u0018\u001a\u00020\u00178\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b;\u0010<¨\u0006="}, d2 = {"Lqo/f;", "Lbn/o;", "Lqo/f$b;", "Landroid/content/Context;", "context", "", "sessionToken", "inquiryId", "fromStep", "fromComponent", "Lcom/withpersona/sdk2/inquiry/governmentid/network/a;", "service", "Lqo/c;", "governmentIdRequestArguments", "Lsp/a;", "dataCollector", "Lio/a;", "fallbackModeManager", "Lxp/a;", "imageHelper", "webRtcObjectId", "Lun/v;", "cameraProperties", "Lzn/a;", "cameraStatsManager", "<init>", "(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/governmentid/network/a;Lqo/c;Lsp/a;Lio/a;Lxp/a;Ljava/lang/String;Lun/v;Lzn/a;)V", "", "Lokhttp3/MultipartBody$b;", "body", "", "l", "(Lqo/c;Ljava/util/List;Lun/v;)V", "otherWorker", "", "a", "(Lbn/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Landroid/content/Context;", "c", "Ljava/lang/String;", "d", "e", "f", "g", "Lcom/withpersona/sdk2/inquiry/governmentid/network/a;", "h", "Lqo/c;", "i", "Lsp/a;", "j", "Lio/a;", "k", "Lxp/a;", "m", "Lun/v;", "n", "Lzn/a;", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSubmitVerificationWorker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SubmitVerificationWorker.kt\ncom/withpersona/sdk2/inquiry/governmentid/network/SubmitVerificationWorker\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,320:1\n2632#2,3:321\n1863#2:324\n1863#2,2:325\n1864#2:327\n1368#2:328\n1454#2,5:329\n*S KotlinDebug\n*F\n+ 1 SubmitVerificationWorker.kt\ncom/withpersona/sdk2/inquiry/governmentid/network/SubmitVerificationWorker\n*L\n196#1:321,3\n210#1:324\n211#1:325,2\n210#1:327\n223#1:328\n223#1:329,5\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements o<b> {

    /* renamed from: b  reason: collision with root package name */
    private final Context f47929b;

    /* renamed from: c  reason: collision with root package name */
    private final String f47930c;

    /* renamed from: d  reason: collision with root package name */
    private final String f47931d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47932e;

    /* renamed from: f  reason: collision with root package name */
    private final String f47933f;

    /* renamed from: g  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.governmentid.network.a f47934g;

    /* renamed from: h  reason: collision with root package name */
    private final qo.c f47935h;

    /* renamed from: i  reason: collision with root package name */
    private final sp.a f47936i;

    /* renamed from: j  reason: collision with root package name */
    private final io.a f47937j;

    /* renamed from: k  reason: collision with root package name */
    private final xp.a f47938k;

    /* renamed from: l  reason: collision with root package name */
    private final String f47939l;

    /* renamed from: m  reason: collision with root package name */
    private final v f47940m;

    /* renamed from: n  reason: collision with root package name */
    private final zn.a f47941n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        f a(String str, String str2, String str3, String str4, qo.c cVar, String str5, v vVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo.NetworkErrorInfo f47942a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(InternalErrorInfo.NetworkErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f47942a = cause;
            }

            public final InternalErrorInfo.NetworkErrorInfo a() {
                return this.f47942a;
            }
        }

        /* renamed from: qo.f$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0607b extends b {

            /* renamed from: a  reason: collision with root package name */
            private final GenericFileUploadErrorResponse.DocumentErrorResponse f47943a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0607b(GenericFileUploadErrorResponse.DocumentErrorResponse cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f47943a = cause;
            }

            public final GenericFileUploadErrorResponse.DocumentErrorResponse a() {
                return this.f47943a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final c f47944a = new c();

            private c() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof c)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1775834809;
            }

            public String toString() {
                return "Success";
            }
        }

        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class c {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f47945a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f47946b;

        static {
            int[] iArr = new int[v.b.values().length];
            try {
                iArr[v.b.f51834i.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            f47945a = iArr;
            int[] iArr2 = new int[d0.d.values().length];
            try {
                iArr2[d0.d.f30046d.ordinal()] = 1;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr2[d0.d.f30047e.ordinal()] = 2;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr2[d0.d.f30048i.ordinal()] = 3;
            } catch (NoSuchFieldError unused4) {
            }
            f47946b = iArr2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f47947d;

        /* renamed from: e  reason: collision with root package name */
        int f47948e;

        /* renamed from: i  reason: collision with root package name */
        private /* synthetic */ Object f47949i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f47951d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ f f47952e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ List f47953i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(f fVar, List list, Continuation continuation) {
                super(1, continuation);
                this.f47952e = fVar;
                this.f47953i = list;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f47952e, this.f47953i, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:13:0x0041, code lost:
                if (r6 == r0) goto L18;
             */
            /* JADX WARN: Code restructure failed: missing block: B:18:0x0061, code lost:
                if (r6 == r0) goto L18;
             */
            @Override // kotlin.coroutines.jvm.internal.a
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object invokeSuspend(java.lang.Object r6) {
                /*
                    r5 = this;
                    java.lang.Object r0 = wr.b.f()
                    int r1 = r5.f47951d
                    r2 = 2
                    r3 = 1
                    if (r1 == 0) goto L1e
                    if (r1 == r3) goto L1a
                    if (r1 != r2) goto L12
                    kotlin.c.b(r6)
                    goto L64
                L12:
                    java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                    java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                    r6.<init>(r0)
                    throw r6
                L1a:
                    kotlin.c.b(r6)
                    goto L44
                L1e:
                    kotlin.c.b(r6)
                    qo.f r6 = r5.f47952e
                    io.a r6 = qo.f.e(r6)
                    boolean r6 = r6.b()
                    if (r6 == 0) goto L47
                    qo.f r6 = r5.f47952e
                    io.a r6 = qo.f.e(r6)
                    qo.f r1 = r5.f47952e
                    java.lang.String r1 = qo.f.k(r1)
                    java.util.List r2 = r5.f47953i
                    r5.f47951d = r3
                    java.lang.Object r6 = r6.a(r1, r2, r5)
                    if (r6 != r0) goto L44
                    goto L63
                L44:
                    vv.z r6 = (vv.z) r6
                    return r6
                L47:
                    qo.f r6 = r5.f47952e
                    com.withpersona.sdk2.inquiry.governmentid.network.a r6 = qo.f.j(r6)
                    qo.f r1 = r5.f47952e
                    java.lang.String r1 = qo.f.k(r1)
                    qo.f r3 = r5.f47952e
                    java.lang.String r3 = qo.f.i(r3)
                    java.util.List r4 = r5.f47953i
                    r5.f47951d = r2
                    java.lang.Object r6 = r6.b(r1, r3, r4, r5)
                    if (r6 != r0) goto L64
                L63:
                    return r0
                L64:
                    vv.z r6 = (vv.z) r6
                    return r6
                */
                throw new UnsupportedOperationException("Method not decompiled: qo.f.d.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f47949i = obj;
            return dVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:19:0x009d, code lost:
            if (r6 == r0) goto L28;
         */
        /* JADX WARN: Code restructure failed: missing block: B:54:0x0179, code lost:
            if (r1.emit(r3, r14) == r0) goto L28;
         */
        /* JADX WARN: Code restructure failed: missing block: B:57:0x0195, code lost:
            if (r1.emit(r2, r14) == r0) goto L28;
         */
        /* JADX WARN: Code restructure failed: missing block: B:60:0x01a7, code lost:
            if (r1.emit(r3, r14) == r0) goto L28;
         */
        /* JADX WARN: Removed duplicated region for block: B:43:0x0112  */
        /* JADX WARN: Removed duplicated region for block: B:53:0x015f  */
        /* JADX WARN: Removed duplicated region for block: B:56:0x017c  */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r15) {
            /*
                Method dump skipped, instructions count: 429
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: qo.f.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((d) create(flowCollector, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    public f(Context context, String sessionToken, String inquiryId, String fromStep, String fromComponent, com.withpersona.sdk2.inquiry.governmentid.network.a service, qo.c cVar, sp.a dataCollector, io.a fallbackModeManager, xp.a imageHelper, String str, v cameraProperties, zn.a cameraStatsManager) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        Intrinsics.checkNotNullParameter(fromStep, "fromStep");
        Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
        Intrinsics.checkNotNullParameter(service, "service");
        Intrinsics.checkNotNullParameter(dataCollector, "dataCollector");
        Intrinsics.checkNotNullParameter(fallbackModeManager, "fallbackModeManager");
        Intrinsics.checkNotNullParameter(imageHelper, "imageHelper");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        this.f47929b = context;
        this.f47930c = sessionToken;
        this.f47931d = inquiryId;
        this.f47932e = fromStep;
        this.f47933f = fromComponent;
        this.f47934g = service;
        this.f47935h = cVar;
        this.f47936i = dataCollector;
        this.f47937j = fallbackModeManager;
        this.f47938k = imageHelper;
        this.f47939l = str;
        this.f47940m = cameraProperties;
        this.f47941n = cameraStatsManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void l(qo.c cVar, List list, v vVar) {
        String lowerCase;
        String str;
        String str2;
        String w12;
        this.f47936i.b(new qo.d(this.f47932e, cVar.c()));
        MultipartBody.b.a aVar = MultipartBody.b.f42896c;
        MultipartBody.b b10 = aVar.b("data[attributes][fields][" + cVar.a() + "][cameraProperties][label]", vVar.d());
        String str3 = "data[attributes][fields][" + cVar.a() + "][cameraProperties][facing_mode]";
        if (c.f47945a[vVar.b().ordinal()] == 1) {
            lowerCase = "";
        } else {
            lowerCase = vVar.b().toString().toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
        }
        MultipartBody.b b11 = aVar.b(str3, lowerCase);
        MultipartBody.b b12 = aVar.b("data[attributes][fields][" + cVar.a() + "][cameraProperties][width]", String.valueOf(vVar.e().getWidth()));
        MultipartBody.b b13 = aVar.b("data[attributes][fields][" + cVar.a() + "][cameraProperties][height]", String.valueOf(vVar.e().getHeight()));
        MultipartBody.b b14 = aVar.b("data[attributes][fields][" + cVar.a() + "][cameraProperties][aspectRatio]", String.valueOf(vVar.a()));
        MultipartBody.b b15 = aVar.b("data[attributes][fields][" + cVar.a() + "][cameraProperties][frameRate]", String.valueOf(vVar.c()));
        MultipartBody.b b16 = aVar.b("data[attributes][fields][" + cVar.a() + "][cameraProperties][kind]", "");
        MultipartBody.b b17 = aVar.b("data[attributes][fields][" + cVar.a() + "][cameraProperties][selectedCameraIndex]", "");
        MultipartBody.b b18 = aVar.b("data[attributes][fields][" + cVar.a() + "][cameraProperties][streamStability]", "");
        MultipartBody.b b19 = aVar.b("data[attributes][fields][" + cVar.a() + "][cameraProperties][allCameraLabels]", "");
        String str4 = "data[attributes][fields][" + cVar.a() + "][cameraProperties][client]";
        if (t.j(this.f47929b)) {
            str = "mobile";
        } else {
            str = "mobile_sdk";
        }
        MultipartBody.b b20 = aVar.b(str4, str);
        String str5 = "data[attributes][fields][" + cVar.a() + "][cameraProperties][platform]";
        if (co.h.a()) {
            str2 = "android";
        } else {
            str2 = "android_sdk";
        }
        list.addAll(CollectionsKt.o(b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, aVar.b(str5, str2), aVar.b("data[attributes][fields][" + cVar.a() + "][cameraProperties][factor]", String.valueOf(this.f47941n.a().a()))));
        List<d0> c10 = cVar.c();
        if (!(c10 instanceof Collection) || !c10.isEmpty()) {
            for (d0 d0Var : c10) {
                if (Intrinsics.areEqual(d0Var.w1(), "auto-classification")) {
                    break;
                }
            }
        }
        d0 d0Var2 = (d0) CollectionsKt.firstOrNull(cVar.c());
        if (d0Var2 != null && (w12 = d0Var2.w1()) != null) {
            list.add(MultipartBody.b.f42896c.b("data[attributes][fields][" + cVar.b() + "]", w12));
        }
        Iterator it = cVar.c().iterator();
        while (true) {
            String str6 = "front_and_back";
            if (it.hasNext()) {
                d0 d0Var3 = (d0) it.next();
                for (c0 c0Var : d0Var3.i2()) {
                    Iterator it2 = it;
                    if (StringsKt.P(c0Var.b(), "image/", false, 2, null)) {
                        this.f47938k.a(new File(c0Var.a()));
                    }
                    it = it2;
                }
                Iterator it3 = it;
                int i10 = c.f47946b[d0Var3.O0().ordinal()];
                if (i10 == 1) {
                    str6 = "front";
                } else if (i10 == 2) {
                    str6 = "back";
                } else if (i10 != 3) {
                    throw new p();
                }
                MultipartBody.b.a aVar2 = MultipartBody.b.f42896c;
                list.addAll(CollectionsKt.o(aVar2.b("data[attributes][fields][" + cVar.a() + "][files][][page]", str6), aVar2.b("data[attributes][fields][" + cVar.a() + "][files][][capture_method]", d0Var3.b2().toString())));
                list.addAll(m(cVar, d0Var3.i2()));
                if (d0Var3 instanceof d0.b) {
                    RawExtraction d10 = ((d0.b) d0Var3).d();
                    if (d10 != null) {
                        List list2 = list;
                        list2.add(aVar2.b("data[attributes][client-extraction-raws][][type]", d10.a()));
                        list2.add(aVar2.b("data[attributes][client-extraction-raws][][value]", d10.b()));
                    }
                    list.add(aVar2.b("data[attributes][fields][" + cVar.a() + "][files][][type]", "image"));
                } else if (d0Var3 instanceof d0.c) {
                    list.add(aVar2.b("data[attributes][fields][" + cVar.a() + "][files][][type]", MediaStreamTrack.VIDEO_TRACK_KIND));
                } else {
                    throw new p();
                }
                it = it3;
            } else if (this.f47939l != null) {
                MultipartBody.b.a aVar3 = MultipartBody.b.f42896c;
                MultipartBody.b b21 = aVar3.b("data[attributes][fields][" + cVar.a() + "][files][][name]", MediaStreamTrack.VIDEO_TRACK_KIND);
                String lowerCase2 = e.a.f43350e.toString().toLowerCase(Locale.ROOT);
                Intrinsics.checkNotNullExpressionValue(lowerCase2, "toLowerCase(...)");
                list.addAll(CollectionsKt.o(b21, aVar3.b("data[attributes][fields][" + cVar.a() + "][files][][capture-method]", lowerCase2), aVar3.b("data[attributes][fields][" + cVar.a() + "][files][][type]", MediaStreamTrack.VIDEO_TRACK_KIND), aVar3.b("data[attributes][fields][" + cVar.a() + "][files][][page]", "front_and_back"), aVar3.b("data[attributes][fields][" + cVar.a() + "][files][][objectId]", this.f47939l)));
                return;
            } else {
                return;
            }
        }
    }

    private static final List m(qo.c cVar, List list) {
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            c0 c0Var = (c0) it.next();
            MultipartBody.b.a aVar = MultipartBody.b.f42896c;
            String a10 = cVar.a();
            CollectionsKt.B(arrayList, CollectionsKt.e(aVar.c("data[attributes][fields][" + a10 + "][files][][frames][]", new File(c0Var.a()).getName(), RequestBody.Companion.a(new File(c0Var.a()), MediaType.f42872e.c(c0Var.b())))));
        }
        return arrayList;
    }

    @Override // bn.o
    public boolean a(o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if ((otherWorker instanceof f) && Intrinsics.areEqual(this.f47930c, ((f) otherWorker).f47930c)) {
            return true;
        }
        return false;
    }

    @Override // bn.o
    public Flow run() {
        return rs.g.v(new d(null));
    }
}
