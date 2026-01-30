package com.withpersona.sdk2.inquiry.internal;

import android.content.Context;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.CheckInquiryResponse;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import mo.b2;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0018\b\u0000\u0018\u0000 32\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0003#\u001f\u001dBa\b\u0007\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0005\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0006\u0012\b\b\u0001\u0010\t\u001a\u00020\b\u0012\u0006\u0010\u000b\u001a\u00020\n\u0012\u0006\u0010\r\u001a\u00020\f\u0012\u0006\u0010\u000f\u001a\u00020\u000e\u0012\u0006\u0010\u0011\u001a\u00020\u0010\u0012\u0006\u0010\u0013\u001a\u00020\u0012\u0012\u0006\u0010\u0015\u001a\u00020\u0014¢\u0006\u0004\b\u0016\u0010\u0017J\u0015\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00020\u0018H\u0016¢\u0006\u0004\b\u0019\u0010\u001aJ\u001b\u0010\u001d\u001a\u00020\u001c2\n\u0010\u001b\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u001d\u0010\u001eR\u0017\u0010\u0004\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b\u001f\u0010 \u001a\u0004\b!\u0010\"R\u0017\u0010\u0005\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b#\u0010 \u001a\u0004\b$\u0010\"R\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010&R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010(R\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010*R\u0014\u0010\r\u001a\u00020\f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010,R\u0014\u0010\u000f\u001a\u00020\u000e8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010.R\u0014\u0010\u0011\u001a\u00020\u00108\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b$\u0010/R\u0014\u0010\u0013\u001a\u00020\u00128\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u00100R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b1\u00102¨\u00064"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/q;", "Ltm/o;", "Lcom/withpersona/sdk2/inquiry/internal/q$c;", "", "sessionToken", "inquiryId", "Lmo/b2;", "pollingMode", "Lqp/g;", "inquirySessionConfig", "Landroid/content/Context;", "applicationContext", "Lso/r;", "service", "Lun/a;", "deviceIdProvider", "Lcp/c;", "sandboxFlags", "Lqo/i;", "fallbackModeManager", "Ldq/a;", "fontDownloader", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lmo/b2;Lqp/g;Landroid/content/Context;Lso/r;Lun/a;Lcp/c;Lqo/i;Ldq/a;)V", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "otherWorker", "", "a", "(Ltm/o;)Z", "b", "Ljava/lang/String;", "j", "()Ljava/lang/String;", "c", "i", "d", "Lmo/b2;", "e", "Lqp/g;", "f", "Landroid/content/Context;", "g", "Lso/r;", "h", "Lun/a;", "Lcp/c;", "Lqo/i;", "k", "Ldq/a;", "l", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements tm.o<c> {

    /* renamed from: l  reason: collision with root package name */
    public static final a f20327l = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final String f20328b;

    /* renamed from: c  reason: collision with root package name */
    private final String f20329c;

    /* renamed from: d  reason: collision with root package name */
    private final b2 f20330d;

    /* renamed from: e  reason: collision with root package name */
    private final qp.g f20331e;

    /* renamed from: f  reason: collision with root package name */
    private final Context f20332f;

    /* renamed from: g  reason: collision with root package name */
    private final so.r f20333g;

    /* renamed from: h  reason: collision with root package name */
    private final un.a f20334h;

    /* renamed from: i  reason: collision with root package name */
    private final cp.c f20335i;

    /* renamed from: j  reason: collision with root package name */
    private final qo.i f20336j;

    /* renamed from: k  reason: collision with root package name */
    private final dq.a f20337k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        q a(String str, String str2, b2 b2Var, qp.g gVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f20338a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f20338a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f20338a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof a) && Intrinsics.areEqual(this.f20338a, ((a) obj).f20338a);
            }

            public int hashCode() {
                return this.f20338a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f20338a;
                return "Error(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends c {

            /* renamed from: a  reason: collision with root package name */
            private final l f20339a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(l nextState) {
                super(null);
                Intrinsics.checkNotNullParameter(nextState, "nextState");
                this.f20339a = nextState;
            }

            public final l a() {
                return this.f20339a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof b) && Intrinsics.areEqual(this.f20339a, ((b) obj).f20339a);
            }

            public int hashCode() {
                return this.f20339a.hashCode();
            }

            public String toString() {
                l lVar = this.f20339a;
                return "Success(nextState=" + lVar + ")";
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
        Object f20340d;

        /* renamed from: e  reason: collision with root package name */
        Object f20341e;

        /* renamed from: i  reason: collision with root package name */
        long f20342i;

        /* renamed from: o  reason: collision with root package name */
        int f20343o;

        /* renamed from: p  reason: collision with root package name */
        private /* synthetic */ Object f20344p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f20346a;

            static {
                int[] iArr = new int[CheckInquiryResponse.PollingMode.values().length];
                try {
                    iArr[CheckInquiryResponse.PollingMode.Blocking.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[CheckInquiryResponse.PollingMode.Background.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[CheckInquiryResponse.PollingMode.None.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f20346a = iArr;
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f20344p = obj;
            return dVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:19:0x0082, code lost:
            if (r0.emit(r2, r17) == r6) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:59:0x01df, code lost:
            if (r4.emit(r1, r17) == r6) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:72:0x0240, code lost:
            if (r4.emit(r1, r17) == r6) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:79:0x0269, code lost:
            if (r4.emit(r1, r17) == r6) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:83:0x027e, code lost:
            if (gs.i0.a(r7, r17) == r6) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:89:0x02af, code lost:
            if (r14.emit(r0, r17) == r6) goto L19;
         */
        /* JADX WARN: Removed duplicated region for block: B:33:0x00ee  */
        /* JADX WARN: Removed duplicated region for block: B:76:0x024b  */
        /* JADX WARN: Removed duplicated region for block: B:86:0x0285  */
        /* JADX WARN: Removed duplicated region for block: B:97:0x00af A[EXC_TOP_SPLITTER, SYNTHETIC] */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:83:0x027e -> B:8:0x002b). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:93:0x002c -> B:9:0x002c). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:94:0x0281 -> B:85:0x0281). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r18) {
            /*
                Method dump skipped, instructions count: 714
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.q.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((d) create(flowCollector, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public q(String sessionToken, String inquiryId, b2 pollingMode, qp.g inquirySessionConfig, Context applicationContext, so.r service, un.a deviceIdProvider, cp.c sandboxFlags, qo.i fallbackModeManager, dq.a fontDownloader) {
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        Intrinsics.checkNotNullParameter(pollingMode, "pollingMode");
        Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(service, "service");
        Intrinsics.checkNotNullParameter(deviceIdProvider, "deviceIdProvider");
        Intrinsics.checkNotNullParameter(sandboxFlags, "sandboxFlags");
        Intrinsics.checkNotNullParameter(fallbackModeManager, "fallbackModeManager");
        Intrinsics.checkNotNullParameter(fontDownloader, "fontDownloader");
        this.f20328b = sessionToken;
        this.f20329c = inquiryId;
        this.f20330d = pollingMode;
        this.f20331e = inquirySessionConfig;
        this.f20332f = applicationContext;
        this.f20333g = service;
        this.f20334h = deviceIdProvider;
        this.f20335i = sandboxFlags;
        this.f20336j = fallbackModeManager;
        this.f20337k = fontDownloader;
    }

    @Override // tm.o
    public boolean a(tm.o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if (otherWorker instanceof q) {
            q qVar = (q) otherWorker;
            if (Intrinsics.areEqual(this.f20328b, qVar.f20328b) && Intrinsics.areEqual(this.f20329c, qVar.f20329c) && this.f20330d == qVar.f20330d) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final String i() {
        return this.f20329c;
    }

    public final String j() {
        return this.f20328b;
    }

    @Override // tm.o
    public Flow run() {
        return js.g.v(new d(null));
    }
}
