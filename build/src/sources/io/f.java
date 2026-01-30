package io;

import android.content.Context;
import ao.c0;
import ao.d0;
import com.withpersona.sdk2.inquiry.governmentid.RawExtraction;
import com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import gq.e;
import ir.p;
import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
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
import mn.v;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import org.webrtc.MediaStreamTrack;
import tm.o;
import un.t;
@Metadata(d1 = {"\u0000j\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0018\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002(#B\u0083\u0001\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0005\u0012\b\b\u0001\u0010\b\u001a\u00020\u0005\u0012\b\b\u0001\u0010\t\u001a\u00020\u0005\u0012\u0006\u0010\u000b\u001a\u00020\n\u0012\n\b\u0001\u0010\r\u001a\u0004\u0018\u00010\f\u0012\u0006\u0010\u000f\u001a\u00020\u000e\u0012\u0006\u0010\u0011\u001a\u00020\u0010\u0012\u0006\u0010\u0013\u001a\u00020\u0012\u0012\n\b\u0001\u0010\u0014\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0001\u0010\u0016\u001a\u00020\u0015\u0012\u0006\u0010\u0018\u001a\u00020\u0017¢\u0006\u0004\b\u0019\u0010\u001aJ)\u0010\u001f\u001a\u00020\u001e*\u00020\f2\f\u0010\u001d\u001a\b\u0012\u0004\u0012\u00020\u001c0\u001b2\u0006\u0010\u0016\u001a\u00020\u0015H\u0002¢\u0006\u0004\b\u001f\u0010 J\u001b\u0010#\u001a\u00020\"2\n\u0010!\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b#\u0010$J\u0015\u0010&\u001a\b\u0012\u0004\u0012\u00020\u00020%H\u0016¢\u0006\u0004\b&\u0010'R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b(\u0010)R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b*\u0010+R\u0014\u0010\u0007\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b,\u0010+R\u0014\u0010\b\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010+R\u0014\u0010\t\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b.\u0010+R\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b/\u00100R\u0016\u0010\r\u001a\u0004\u0018\u00010\f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b1\u00102R\u0014\u0010\u000f\u001a\u00020\u000e8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b3\u00104R\u0014\u0010\u0011\u001a\u00020\u00108\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b5\u00106R\u0014\u0010\u0013\u001a\u00020\u00128\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b7\u00108R\u0016\u0010\u0014\u001a\u0004\u0018\u00010\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010+R\u0014\u0010\u0016\u001a\u00020\u00158\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b9\u0010:R\u0014\u0010\u0018\u001a\u00020\u00178\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b;\u0010<¨\u0006="}, d2 = {"Lio/f;", "Ltm/o;", "Lio/f$b;", "Landroid/content/Context;", "context", "", "sessionToken", "inquiryId", "fromStep", "fromComponent", "Lcom/withpersona/sdk2/inquiry/governmentid/network/a;", "service", "Lio/c;", "governmentIdRequestArguments", "Lkp/a;", "dataCollector", "Lzn/a;", "fallbackModeManager", "Lpp/a;", "imageHelper", "webRtcObjectId", "Lmn/v;", "cameraProperties", "Lrn/a;", "cameraStatsManager", "<init>", "(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/governmentid/network/a;Lio/c;Lkp/a;Lzn/a;Lpp/a;Ljava/lang/String;Lmn/v;Lrn/a;)V", "", "Lokhttp3/MultipartBody$b;", "body", "", "l", "(Lio/c;Ljava/util/List;Lmn/v;)V", "otherWorker", "", "a", "(Ltm/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Landroid/content/Context;", "c", "Ljava/lang/String;", "d", "e", "f", "g", "Lcom/withpersona/sdk2/inquiry/governmentid/network/a;", "h", "Lio/c;", "i", "Lkp/a;", "j", "Lzn/a;", "k", "Lpp/a;", "m", "Lmn/v;", "n", "Lrn/a;", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSubmitVerificationWorker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SubmitVerificationWorker.kt\ncom/withpersona/sdk2/inquiry/governmentid/network/SubmitVerificationWorker\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,320:1\n2632#2,3:321\n1863#2:324\n1863#2,2:325\n1864#2:327\n1368#2:328\n1454#2,5:329\n*S KotlinDebug\n*F\n+ 1 SubmitVerificationWorker.kt\ncom/withpersona/sdk2/inquiry/governmentid/network/SubmitVerificationWorker\n*L\n196#1:321,3\n210#1:324\n211#1:325,2\n210#1:327\n223#1:328\n223#1:329,5\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements o<b> {

    /* renamed from: b  reason: collision with root package name */
    private final Context f28679b;

    /* renamed from: c  reason: collision with root package name */
    private final String f28680c;

    /* renamed from: d  reason: collision with root package name */
    private final String f28681d;

    /* renamed from: e  reason: collision with root package name */
    private final String f28682e;

    /* renamed from: f  reason: collision with root package name */
    private final String f28683f;

    /* renamed from: g  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.governmentid.network.a f28684g;

    /* renamed from: h  reason: collision with root package name */
    private final io.c f28685h;

    /* renamed from: i  reason: collision with root package name */
    private final kp.a f28686i;

    /* renamed from: j  reason: collision with root package name */
    private final zn.a f28687j;

    /* renamed from: k  reason: collision with root package name */
    private final pp.a f28688k;

    /* renamed from: l  reason: collision with root package name */
    private final String f28689l;

    /* renamed from: m  reason: collision with root package name */
    private final v f28690m;

    /* renamed from: n  reason: collision with root package name */
    private final rn.a f28691n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        f a(String str, String str2, String str3, String str4, io.c cVar, String str5, v vVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo.NetworkErrorInfo f28692a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(InternalErrorInfo.NetworkErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f28692a = cause;
            }

            public final InternalErrorInfo.NetworkErrorInfo a() {
                return this.f28692a;
            }
        }

        /* renamed from: io.f$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0379b extends b {

            /* renamed from: a  reason: collision with root package name */
            private final GenericFileUploadErrorResponse.DocumentErrorResponse f28693a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0379b(GenericFileUploadErrorResponse.DocumentErrorResponse cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f28693a = cause;
            }

            public final GenericFileUploadErrorResponse.DocumentErrorResponse a() {
                return this.f28693a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final c f28694a = new c();

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
        public static final /* synthetic */ int[] f28695a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f28696b;

        static {
            int[] iArr = new int[v.b.values().length];
            try {
                iArr[v.b.f39337i.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            f28695a = iArr;
            int[] iArr2 = new int[d0.d.values().length];
            try {
                iArr2[d0.d.f5860d.ordinal()] = 1;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr2[d0.d.f5861e.ordinal()] = 2;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr2[d0.d.f5862i.ordinal()] = 3;
            } catch (NoSuchFieldError unused4) {
            }
            f28696b = iArr2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f28697d;

        /* renamed from: e  reason: collision with root package name */
        int f28698e;

        /* renamed from: i  reason: collision with root package name */
        private /* synthetic */ Object f28699i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f28701d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ f f28702e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ List f28703i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(f fVar, List list, Continuation continuation) {
                super(1, continuation);
                this.f28702e = fVar;
                this.f28703i = list;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f28702e, this.f28703i, continuation);
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
                    java.lang.Object r0 = or.b.f()
                    int r1 = r5.f28701d
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
                    io.f r6 = r5.f28702e
                    zn.a r6 = io.f.e(r6)
                    boolean r6 = r6.b()
                    if (r6 == 0) goto L47
                    io.f r6 = r5.f28702e
                    zn.a r6 = io.f.e(r6)
                    io.f r1 = r5.f28702e
                    java.lang.String r1 = io.f.k(r1)
                    java.util.List r2 = r5.f28703i
                    r5.f28701d = r3
                    java.lang.Object r6 = r6.a(r1, r2, r5)
                    if (r6 != r0) goto L44
                    goto L63
                L44:
                    iv.z r6 = (iv.z) r6
                    return r6
                L47:
                    io.f r6 = r5.f28702e
                    com.withpersona.sdk2.inquiry.governmentid.network.a r6 = io.f.j(r6)
                    io.f r1 = r5.f28702e
                    java.lang.String r1 = io.f.k(r1)
                    io.f r3 = r5.f28702e
                    java.lang.String r3 = io.f.i(r3)
                    java.util.List r4 = r5.f28703i
                    r5.f28701d = r2
                    java.lang.Object r6 = r6.b(r1, r3, r4, r5)
                    if (r6 != r0) goto L64
                L63:
                    return r0
                L64:
                    iv.z r6 = (iv.z) r6
                    return r6
                */
                throw new UnsupportedOperationException("Method not decompiled: io.f.d.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f33298a);
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f28699i = obj;
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
            throw new UnsupportedOperationException("Method not decompiled: io.f.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((d) create(flowCollector, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public f(Context context, String sessionToken, String inquiryId, String fromStep, String fromComponent, com.withpersona.sdk2.inquiry.governmentid.network.a service, io.c cVar, kp.a dataCollector, zn.a fallbackModeManager, pp.a imageHelper, String str, v cameraProperties, rn.a cameraStatsManager) {
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
        this.f28679b = context;
        this.f28680c = sessionToken;
        this.f28681d = inquiryId;
        this.f28682e = fromStep;
        this.f28683f = fromComponent;
        this.f28684g = service;
        this.f28685h = cVar;
        this.f28686i = dataCollector;
        this.f28687j = fallbackModeManager;
        this.f28688k = imageHelper;
        this.f28689l = str;
        this.f28690m = cameraProperties;
        this.f28691n = cameraStatsManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void l(io.c cVar, List list, v vVar) {
        String lowerCase;
        String str;
        String str2;
        String x12;
        this.f28686i.b(new io.d(this.f28682e, cVar.c()));
        MultipartBody.b.a aVar = MultipartBody.b.f44109c;
        MultipartBody.b b10 = aVar.b("data[attributes][fields][" + cVar.a() + "][cameraProperties][label]", vVar.d());
        String str3 = "data[attributes][fields][" + cVar.a() + "][cameraProperties][facing_mode]";
        if (c.f28695a[vVar.b().ordinal()] == 1) {
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
        if (t.j(this.f28679b)) {
            str = "mobile";
        } else {
            str = "mobile_sdk";
        }
        MultipartBody.b b20 = aVar.b(str4, str);
        String str5 = "data[attributes][fields][" + cVar.a() + "][cameraProperties][platform]";
        if (un.h.a()) {
            str2 = "android";
        } else {
            str2 = "android_sdk";
        }
        list.addAll(CollectionsKt.o(b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, aVar.b(str5, str2), aVar.b("data[attributes][fields][" + cVar.a() + "][cameraProperties][factor]", String.valueOf(this.f28691n.a().a()))));
        List<d0> c10 = cVar.c();
        if (!(c10 instanceof Collection) || !c10.isEmpty()) {
            for (d0 d0Var : c10) {
                if (Intrinsics.areEqual(d0Var.x1(), "auto-classification")) {
                    break;
                }
            }
        }
        d0 d0Var2 = (d0) CollectionsKt.firstOrNull(cVar.c());
        if (d0Var2 != null && (x12 = d0Var2.x1()) != null) {
            list.add(MultipartBody.b.f44109c.b("data[attributes][fields][" + cVar.b() + "]", x12));
        }
        Iterator it = cVar.c().iterator();
        while (true) {
            String str6 = "front_and_back";
            if (it.hasNext()) {
                d0 d0Var3 = (d0) it.next();
                for (c0 c0Var : d0Var3.i2()) {
                    Iterator it2 = it;
                    if (StringsKt.P(c0Var.b(), "image/", false, 2, null)) {
                        this.f28688k.a(new File(c0Var.a()));
                    }
                    it = it2;
                }
                Iterator it3 = it;
                int i10 = c.f28696b[d0Var3.U0().ordinal()];
                if (i10 == 1) {
                    str6 = "front";
                } else if (i10 == 2) {
                    str6 = "back";
                } else if (i10 != 3) {
                    throw new p();
                }
                MultipartBody.b.a aVar2 = MultipartBody.b.f44109c;
                list.addAll(CollectionsKt.o(aVar2.b("data[attributes][fields][" + cVar.a() + "][files][][page]", str6), aVar2.b("data[attributes][fields][" + cVar.a() + "][files][][capture_method]", d0Var3.c2().toString())));
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
            } else if (this.f28689l != null) {
                MultipartBody.b.a aVar3 = MultipartBody.b.f44109c;
                MultipartBody.b b21 = aVar3.b("data[attributes][fields][" + cVar.a() + "][files][][name]", MediaStreamTrack.VIDEO_TRACK_KIND);
                String lowerCase2 = e.a.f27120e.toString().toLowerCase(Locale.ROOT);
                Intrinsics.checkNotNullExpressionValue(lowerCase2, "toLowerCase(...)");
                list.addAll(CollectionsKt.o(b21, aVar3.b("data[attributes][fields][" + cVar.a() + "][files][][capture-method]", lowerCase2), aVar3.b("data[attributes][fields][" + cVar.a() + "][files][][type]", MediaStreamTrack.VIDEO_TRACK_KIND), aVar3.b("data[attributes][fields][" + cVar.a() + "][files][][page]", "front_and_back"), aVar3.b("data[attributes][fields][" + cVar.a() + "][files][][objectId]", this.f28689l)));
                return;
            } else {
                return;
            }
        }
    }

    private static final List m(io.c cVar, List list) {
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            c0 c0Var = (c0) it.next();
            MultipartBody.b.a aVar = MultipartBody.b.f44109c;
            String a10 = cVar.a();
            CollectionsKt.B(arrayList, CollectionsKt.e(aVar.c("data[attributes][fields][" + a10 + "][files][][frames][]", new File(c0Var.a()).getName(), RequestBody.Companion.a(new File(c0Var.a()), MediaType.f44085e.c(c0Var.b())))));
        }
        return arrayList;
    }

    @Override // tm.o
    public boolean a(o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if ((otherWorker instanceof f) && Intrinsics.areEqual(this.f28680c, ((f) otherWorker).f28680c)) {
            return true;
        }
        return false;
    }

    @Override // tm.o
    public Flow run() {
        return js.g.v(new d(null));
    }
}
