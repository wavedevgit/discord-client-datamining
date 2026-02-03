package jp;

import android.content.Context;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import hp.a1;
import hp.d2;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import ms.g;
import pn.v;
import wm.o;
@Metadata(d1 = {"\u0000r\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u001e\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002+&B¥\u0001\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0005\u0012\b\b\u0001\u0010\t\u001a\u00020\b\u0012\u000e\b\u0001\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000b0\n\u0012\u0006\u0010\u000e\u001a\u00020\r\u0012\b\b\u0001\u0010\u000f\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u0010\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u0011\u001a\u00020\u0005\u0012\u0006\u0010\u0013\u001a\u00020\u0012\u0012\u0006\u0010\u0015\u001a\u00020\u0014\u0012\u0006\u0010\u0017\u001a\u00020\u0016\u0012\n\b\u0001\u0010\u0018\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0001\u0010\u001a\u001a\u00020\u0019\u0012\u0006\u0010\u001c\u001a\u00020\u001b\u0012\b\b\u0001\u0010\u001e\u001a\u00020\u001d¢\u0006\u0004\b\u001f\u0010 J!\u0010\"\u001a\u00020!*\u00020\u00122\f\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000b0\nH\u0002¢\u0006\u0004\b\"\u0010#J\u001b\u0010&\u001a\u00020%2\n\u0010$\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b&\u0010'J\u0015\u0010)\u001a\b\u0012\u0004\u0012\u00020\u00020(H\u0016¢\u0006\u0004\b)\u0010*R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010,R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010.R\u0014\u0010\u0007\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b/\u0010.R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b0\u00101R\u001a\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000b0\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b2\u00103R\u0014\u0010\u000e\u001a\u00020\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b4\u00105R\u0014\u0010\u000f\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b6\u0010.R\u0014\u0010\u0010\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b7\u0010.R\u0014\u0010\u0011\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b8\u0010.R\u0014\u0010\u0013\u001a\u00020\u00128\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b9\u0010:R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b;\u0010<R\u0014\u0010\u0017\u001a\u00020\u00168\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b=\u0010>R\u0016\u0010\u0018\u001a\u0004\u0018\u00010\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b?\u0010.R\u0014\u0010\u001a\u001a\u00020\u00198\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b@\u0010AR\u0014\u0010\u001c\u001a\u00020\u001b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bB\u0010CR\u0014\u0010\u001e\u001a\u00020\u001d8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bD\u0010E¨\u0006F"}, d2 = {"Ljp/c;", "Lwm/o;", "Ljp/c$b;", "Landroid/content/Context;", "context", "", "sessionToken", "inquiryId", "Lhp/d2;", "selfieType", "", "Lhp/a1;", "selfies", "Ljp/a;", "service", "fromStep", "fromComponent", "fieldKeySelfie", "Lnp/a;", "dataCollector", "Lco/a;", "fallbackModeManager", "Lsp/a;", "imageHelper", "webRtcObjectId", "Lpn/v;", "cameraProperties", "Lun/a;", "cameraStatsManager", "", "startSelfieTimestamp", "<init>", "(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Lhp/d2;Ljava/util/List;Ljp/a;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lnp/a;Lco/a;Lsp/a;Ljava/lang/String;Lpn/v;Lun/a;J)V", "", "s", "(Lnp/a;Ljava/util/List;)V", "otherWorker", "", "a", "(Lwm/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Landroid/content/Context;", "c", "Ljava/lang/String;", "d", "e", "Lhp/d2;", "f", "Ljava/util/List;", "g", "Ljp/a;", "h", "i", "j", "k", "Lnp/a;", "l", "Lco/a;", "m", "Lsp/a;", "n", "o", "Lpn/v;", "p", "Lun/a;", "q", "J", "selfie_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSubmitVerificationWorker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SubmitVerificationWorker.kt\ncom/withpersona/sdk2/inquiry/selfie/network/SubmitVerificationWorker\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,308:1\n808#2,11:309\n1202#2,2:320\n1230#2,4:322\n*S KotlinDebug\n*F\n+ 1 SubmitVerificationWorker.kt\ncom/withpersona/sdk2/inquiry/selfie/network/SubmitVerificationWorker\n*L\n277#1:309,11\n277#1:320,2\n277#1:322,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements o<b> {

    /* renamed from: b  reason: collision with root package name */
    private final Context f31850b;

    /* renamed from: c  reason: collision with root package name */
    private final String f31851c;

    /* renamed from: d  reason: collision with root package name */
    private final String f31852d;

    /* renamed from: e  reason: collision with root package name */
    private final d2 f31853e;

    /* renamed from: f  reason: collision with root package name */
    private final List f31854f;

    /* renamed from: g  reason: collision with root package name */
    private final jp.a f31855g;

    /* renamed from: h  reason: collision with root package name */
    private final String f31856h;

    /* renamed from: i  reason: collision with root package name */
    private final String f31857i;

    /* renamed from: j  reason: collision with root package name */
    private final String f31858j;

    /* renamed from: k  reason: collision with root package name */
    private final np.a f31859k;

    /* renamed from: l  reason: collision with root package name */
    private final co.a f31860l;

    /* renamed from: m  reason: collision with root package name */
    private final sp.a f31861m;

    /* renamed from: n  reason: collision with root package name */
    private final String f31862n;

    /* renamed from: o  reason: collision with root package name */
    private final v f31863o;

    /* renamed from: p  reason: collision with root package name */
    private final un.a f31864p;

    /* renamed from: q  reason: collision with root package name */
    private final long f31865q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        c a(String str, String str2, String str3, String str4, d2 d2Var, String str5, List list, String str6, v vVar, long j10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f31866a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f31866a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f31866a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof a) && Intrinsics.areEqual(this.f31866a, ((a) obj).f31866a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f31866a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f31866a;
                return "Error(cause=" + internalErrorInfo + ")";
            }
        }

        /* renamed from: jp.c$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0425b extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0425b f31867a = new C0425b();

            private C0425b() {
                super(null);
            }
        }

        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* renamed from: jp.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0426c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f31868d;

        /* renamed from: e  reason: collision with root package name */
        int f31869e;

        /* renamed from: i  reason: collision with root package name */
        private /* synthetic */ Object f31870i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: jp.c$c$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f31872d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ c f31873e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ List f31874i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(c cVar, List list, Continuation continuation) {
                super(1, continuation);
                this.f31873e = cVar;
                this.f31874i = list;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f31873e, this.f31874i, continuation);
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
                    java.lang.Object r0 = rr.b.f()
                    int r1 = r5.f31872d
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
                    jp.c r6 = r5.f31873e
                    co.a r6 = jp.c.f(r6)
                    boolean r6 = r6.b()
                    if (r6 == 0) goto L47
                    jp.c r6 = r5.f31873e
                    co.a r6 = jp.c.f(r6)
                    jp.c r1 = r5.f31873e
                    java.lang.String r1 = jp.c.o(r1)
                    java.util.List r2 = r5.f31874i
                    r5.f31872d = r3
                    java.lang.Object r6 = r6.a(r1, r2, r5)
                    if (r6 != r0) goto L44
                    goto L63
                L44:
                    lv.z r6 = (lv.z) r6
                    return r6
                L47:
                    jp.c r6 = r5.f31873e
                    jp.a r6 = jp.c.n(r6)
                    jp.c r1 = r5.f31873e
                    java.lang.String r1 = jp.c.o(r1)
                    jp.c r3 = r5.f31873e
                    java.lang.String r3 = jp.c.k(r3)
                    java.util.List r4 = r5.f31874i
                    r5.f31872d = r2
                    java.lang.Object r6 = r6.a(r1, r3, r4, r5)
                    if (r6 != r0) goto L64
                L63:
                    return r0
                L64:
                    lv.z r6 = (lv.z) r6
                    return r6
                */
                throw new UnsupportedOperationException("Method not decompiled: jp.c.C0426c.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* renamed from: jp.c$c$b */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class b {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f31875a;

            /* renamed from: b  reason: collision with root package name */
            public static final /* synthetic */ int[] f31876b;

            static {
                int[] iArr = new int[a1.b.values().length];
                try {
                    iArr[a1.b.f27138d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[a1.b.f27139e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[a1.b.f27140i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f31875a = iArr;
                int[] iArr2 = new int[v.b.values().length];
                try {
                    iArr2[v.b.f46372i.ordinal()] = 1;
                } catch (NoSuchFieldError unused4) {
                }
                f31876b = iArr2;
            }
        }

        C0426c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            C0426c c0426c = new C0426c(continuation);
            c0426c.f31870i = obj;
            return c0426c;
        }

        /* JADX WARN: Code restructure failed: missing block: B:72:0x0589, code lost:
            if (r3 == r1) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:85:0x05db, code lost:
            if (r5.emit(r3, r35) == r1) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:90:0x05fa, code lost:
            if (r5.emit(r4, r35) == r1) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:91:0x05fc, code lost:
            return r1;
         */
        /* JADX WARN: Removed duplicated region for block: B:89:0x05e2  */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r36) {
            /*
                Method dump skipped, instructions count: 1542
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: jp.c.C0426c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((C0426c) create(flowCollector, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public c(Context context, String sessionToken, String inquiryId, d2 selfieType, List selfies, jp.a service, String fromStep, String fromComponent, String fieldKeySelfie, np.a dataCollector, co.a fallbackModeManager, sp.a imageHelper, String str, v cameraProperties, un.a cameraStatsManager, long j10) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        Intrinsics.checkNotNullParameter(selfieType, "selfieType");
        Intrinsics.checkNotNullParameter(selfies, "selfies");
        Intrinsics.checkNotNullParameter(service, "service");
        Intrinsics.checkNotNullParameter(fromStep, "fromStep");
        Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
        Intrinsics.checkNotNullParameter(fieldKeySelfie, "fieldKeySelfie");
        Intrinsics.checkNotNullParameter(dataCollector, "dataCollector");
        Intrinsics.checkNotNullParameter(fallbackModeManager, "fallbackModeManager");
        Intrinsics.checkNotNullParameter(imageHelper, "imageHelper");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        this.f31850b = context;
        this.f31851c = sessionToken;
        this.f31852d = inquiryId;
        this.f31853e = selfieType;
        this.f31854f = selfies;
        this.f31855g = service;
        this.f31856h = fromStep;
        this.f31857i = fromComponent;
        this.f31858j = fieldKeySelfie;
        this.f31859k = dataCollector;
        this.f31860l = fallbackModeManager;
        this.f31861m = imageHelper;
        this.f31862n = str;
        this.f31863o = cameraProperties;
        this.f31864p = cameraStatsManager;
        this.f31865q = j10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void s(np.a aVar, List list) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : list) {
            if (obj instanceof a1.c) {
                arrayList.add(obj);
            }
        }
        LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(o0.e(CollectionsKt.w(arrayList, 10)), 16));
        for (Object obj2 : arrayList) {
            linkedHashMap.put(((a1.c) obj2).d(), obj2);
        }
        aVar.b(new jp.b(this.f31856h, (a1) linkedHashMap.get(a1.b.f27138d), (a1) linkedHashMap.get(a1.b.f27139e), (a1) linkedHashMap.get(a1.b.f27140i)));
    }

    @Override // wm.o
    public boolean a(o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if ((otherWorker instanceof c) && Intrinsics.areEqual(this.f31851c, ((c) otherWorker).f31851c)) {
            return true;
        }
        return false;
    }

    @Override // wm.o
    public Flow run() {
        return g.v(new C0426c(null));
    }
}
