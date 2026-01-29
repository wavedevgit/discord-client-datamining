package hq;

import androidx.activity.result.ActivityResultLauncher;
import androidx.browser.customtabs.b;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import tm.o;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u000f\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\u0014\u001fBQ\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u000e\b\u0001\u0010\t\u001a\b\u0012\u0004\u0012\u00020\b0\u0007\u0012\b\b\u0001\u0010\u000b\u001a\u00020\n\u0012\b\b\u0001\u0010\f\u001a\u00020\n\u0012\b\b\u0001\u0010\r\u001a\u00020\n\u0012\b\b\u0001\u0010\u000e\u001a\u00020\n¢\u0006\u0004\b\u000f\u0010\u0010J\u0015\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00020\u0011H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0016\u0010\u0017R\u001a\u0010\t\u001a\b\u0012\u0004\u0012\u00020\b0\u00078\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u001bR\u0014\u0010\f\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u001bR\u0014\u0010\r\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u001bR\u0014\u0010\u000e\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u001b¨\u0006 "}, d2 = {"Lhq/y0;", "Ltm/o;", "Lhq/y0$b;", "Ljq/b;", "uiService", "Lun/a;", "deviceIdProvider", "Landroidx/activity/result/ActivityResultLauncher;", "Luo/a;", "customTabsLauncher", "", "sessionToken", "inquiryId", "url", "componentName", "<init>", "(Ljq/b;Lun/a;Landroidx/activity/result/ActivityResultLauncher;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Ljq/b;", "c", "Lun/a;", "d", "Landroidx/activity/result/ActivityResultLauncher;", "e", "Ljava/lang/String;", "f", "g", "h", "a", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 implements tm.o<b> {

    /* renamed from: b  reason: collision with root package name */
    private final jq.b f28120b;

    /* renamed from: c  reason: collision with root package name */
    private final un.a f28121c;

    /* renamed from: d  reason: collision with root package name */
    private final ActivityResultLauncher f28122d;

    /* renamed from: e  reason: collision with root package name */
    private final String f28123e;

    /* renamed from: f  reason: collision with root package name */
    private final String f28124f;

    /* renamed from: g  reason: collision with root package name */
    private final String f28125g;

    /* renamed from: h  reason: collision with root package name */
    private final String f28126h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        y0 a(String str, String str2, String str3, String str4);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements b {

            /* renamed from: a  reason: collision with root package name */
            public static final a f28127a = new a();

            private a() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1705280535;
            }

            public String toString() {
                return "Complete";
            }
        }

        /* renamed from: hq.y0$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0365b implements b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f28128a;

            public C0365b(InternalErrorInfo errorInfo) {
                Intrinsics.checkNotNullParameter(errorInfo, "errorInfo");
                this.f28128a = errorInfo;
            }

            public final InternalErrorInfo a() {
                return this.f28128a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0365b) && Intrinsics.areEqual(this.f28128a, ((C0365b) obj).f28128a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f28128a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f28128a;
                return "Error(errorInfo=" + internalErrorInfo + ")";
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f28129d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f28130e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f28132d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ y0 f28133e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ String f28134i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(y0 y0Var, String str, Continuation continuation) {
                super(2, continuation);
                this.f28133e = y0Var;
                this.f28134i = str;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f28133e, this.f28134i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                or.b.f();
                if (this.f28132d == 0) {
                    kotlin.c.b(obj);
                    ActivityResultLauncher activityResultLauncher = this.f28133e.f28122d;
                    androidx.browser.customtabs.b a10 = new b.d().a();
                    Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
                    activityResultLauncher.b(new uo.a(a10, h1.a(this.f28133e.f28125g, this.f28134i, this.f28133e.f28126h)));
                    return Unit.f33282a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
            }
        }

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            c cVar = new c(continuation);
            cVar.f28130e = obj;
            return cVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:23:0x0080, code lost:
            if (r1.emit(r2, r7) == r0) goto L13;
         */
        /* JADX WARN: Code restructure failed: missing block: B:35:0x00b2, code lost:
            if (r1.emit(r8, r7) == r0) goto L13;
         */
        /* JADX WARN: Code restructure failed: missing block: B:40:0x00cc, code lost:
            if (gs.g.g(r4, r5, r7) == r0) goto L13;
         */
        /* JADX WARN: Code restructure failed: missing block: B:43:0x00e1, code lost:
            if (r8 == r0) goto L13;
         */
        /* JADX WARN: Code restructure failed: missing block: B:46:0x00ef, code lost:
            if (r1.emit(r8, r7) == r0) goto L13;
         */
        /* JADX WARN: Code restructure failed: missing block: B:51:0x010a, code lost:
            if (r1.emit(r8, r7) != r0) goto L24;
         */
        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Removed duplicated region for block: B:22:0x006e  */
        /* JADX WARN: Removed duplicated region for block: B:27:0x0087  */
        /* JADX WARN: Type inference failed for: r1v0, types: [int] */
        /* JADX WARN: Type inference failed for: r1v1, types: [kotlinx.coroutines.flow.FlowCollector] */
        /* JADX WARN: Type inference failed for: r1v17 */
        /* JADX WARN: Type inference failed for: r1v18 */
        /* JADX WARN: Type inference failed for: r1v4, types: [kotlinx.coroutines.flow.FlowCollector, java.lang.Object] */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r8) {
            /*
                Method dump skipped, instructions count: 292
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: hq.y0.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((c) create(flowCollector, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    public y0(jq.b uiService, un.a deviceIdProvider, ActivityResultLauncher customTabsLauncher, String sessionToken, String inquiryId, String url, String componentName) {
        Intrinsics.checkNotNullParameter(uiService, "uiService");
        Intrinsics.checkNotNullParameter(deviceIdProvider, "deviceIdProvider");
        Intrinsics.checkNotNullParameter(customTabsLauncher, "customTabsLauncher");
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(componentName, "componentName");
        this.f28120b = uiService;
        this.f28121c = deviceIdProvider;
        this.f28122d = customTabsLauncher;
        this.f28123e = sessionToken;
        this.f28124f = inquiryId;
        this.f28125g = url;
        this.f28126h = componentName;
    }

    @Override // tm.o
    public boolean a(tm.o oVar) {
        return o.b.a(this, oVar);
    }

    @Override // tm.o
    public Flow run() {
        return js.g.v(new c(null));
    }
}
