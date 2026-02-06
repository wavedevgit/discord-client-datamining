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
import uo.b2;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0018\b\u0000\u0018\u0000 32\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0003#\u001f\u001dBa\b\u0007\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0005\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0006\u0012\b\b\u0001\u0010\t\u001a\u00020\b\u0012\u0006\u0010\u000b\u001a\u00020\n\u0012\u0006\u0010\r\u001a\u00020\f\u0012\u0006\u0010\u000f\u001a\u00020\u000e\u0012\u0006\u0010\u0011\u001a\u00020\u0010\u0012\u0006\u0010\u0013\u001a\u00020\u0012\u0012\u0006\u0010\u0015\u001a\u00020\u0014¢\u0006\u0004\b\u0016\u0010\u0017J\u0015\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00020\u0018H\u0016¢\u0006\u0004\b\u0019\u0010\u001aJ\u001b\u0010\u001d\u001a\u00020\u001c2\n\u0010\u001b\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u001d\u0010\u001eR\u0017\u0010\u0004\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b\u001f\u0010 \u001a\u0004\b!\u0010\"R\u0017\u0010\u0005\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b#\u0010 \u001a\u0004\b$\u0010\"R\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010&R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010(R\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010*R\u0014\u0010\r\u001a\u00020\f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010,R\u0014\u0010\u000f\u001a\u00020\u000e8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010.R\u0014\u0010\u0011\u001a\u00020\u00108\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b$\u0010/R\u0014\u0010\u0013\u001a\u00020\u00128\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u00100R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b1\u00102¨\u00064"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/q;", "Lbn/o;", "Lcom/withpersona/sdk2/inquiry/internal/q$c;", "", "sessionToken", "inquiryId", "Luo/b2;", "pollingMode", "Lyp/g;", "inquirySessionConfig", "Landroid/content/Context;", "applicationContext", "Lap/r;", "service", "Lco/a;", "deviceIdProvider", "Lkp/c;", "sandboxFlags", "Lyo/i;", "fallbackModeManager", "Llq/a;", "fontDownloader", "<init>", "(Ljava/lang/String;Ljava/lang/String;Luo/b2;Lyp/g;Landroid/content/Context;Lap/r;Lco/a;Lkp/c;Lyo/i;Llq/a;)V", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "otherWorker", "", "a", "(Lbn/o;)Z", "b", "Ljava/lang/String;", "j", "()Ljava/lang/String;", "c", "i", "d", "Luo/b2;", "e", "Lyp/g;", "f", "Landroid/content/Context;", "g", "Lap/r;", "h", "Lco/a;", "Lkp/c;", "Lyo/i;", "k", "Llq/a;", "l", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements bn.o<c> {

    /* renamed from: l  reason: collision with root package name */
    public static final a f19328l = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final String f19329b;

    /* renamed from: c  reason: collision with root package name */
    private final String f19330c;

    /* renamed from: d  reason: collision with root package name */
    private final b2 f19331d;

    /* renamed from: e  reason: collision with root package name */
    private final yp.g f19332e;

    /* renamed from: f  reason: collision with root package name */
    private final Context f19333f;

    /* renamed from: g  reason: collision with root package name */
    private final ap.r f19334g;

    /* renamed from: h  reason: collision with root package name */
    private final co.a f19335h;

    /* renamed from: i  reason: collision with root package name */
    private final kp.c f19336i;

    /* renamed from: j  reason: collision with root package name */
    private final yo.i f19337j;

    /* renamed from: k  reason: collision with root package name */
    private final lq.a f19338k;

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
        q a(String str, String str2, b2 b2Var, yp.g gVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f19339a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f19339a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f19339a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof a) && Intrinsics.areEqual(this.f19339a, ((a) obj).f19339a);
            }

            public int hashCode() {
                return this.f19339a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f19339a;
                return "Error(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends c {

            /* renamed from: a  reason: collision with root package name */
            private final l f19340a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(l nextState) {
                super(null);
                Intrinsics.checkNotNullParameter(nextState, "nextState");
                this.f19340a = nextState;
            }

            public final l a() {
                return this.f19340a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof b) && Intrinsics.areEqual(this.f19340a, ((b) obj).f19340a);
            }

            public int hashCode() {
                return this.f19340a.hashCode();
            }

            public String toString() {
                l lVar = this.f19340a;
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
        Object f19341d;

        /* renamed from: e  reason: collision with root package name */
        Object f19342e;

        /* renamed from: i  reason: collision with root package name */
        long f19343i;

        /* renamed from: o  reason: collision with root package name */
        int f19344o;

        /* renamed from: p  reason: collision with root package name */
        private /* synthetic */ Object f19345p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f19347a;

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
                f19347a = iArr;
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f19345p = obj;
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
            if (os.i0.a(r7, r17) == r6) goto L19;
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
            return ((d) create(flowCollector, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    public q(String sessionToken, String inquiryId, b2 pollingMode, yp.g inquirySessionConfig, Context applicationContext, ap.r service, co.a deviceIdProvider, kp.c sandboxFlags, yo.i fallbackModeManager, lq.a fontDownloader) {
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
        this.f19329b = sessionToken;
        this.f19330c = inquiryId;
        this.f19331d = pollingMode;
        this.f19332e = inquirySessionConfig;
        this.f19333f = applicationContext;
        this.f19334g = service;
        this.f19335h = deviceIdProvider;
        this.f19336i = sandboxFlags;
        this.f19337j = fallbackModeManager;
        this.f19338k = fontDownloader;
    }

    @Override // bn.o
    public boolean a(bn.o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if (otherWorker instanceof q) {
            q qVar = (q) otherWorker;
            if (Intrinsics.areEqual(this.f19329b, qVar.f19329b) && Intrinsics.areEqual(this.f19330c, qVar.f19330c) && this.f19331d == qVar.f19331d) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final String i() {
        return this.f19330c;
    }

    public final String j() {
        return this.f19329b;
    }

    @Override // bn.o
    public Flow run() {
        return rs.g.v(new d(null));
    }
}
