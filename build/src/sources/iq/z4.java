package iq;

import androidx.activity.result.ActivityResultLauncher;
import androidx.browser.customtabs.b;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import um.o;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010$\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0010\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\u001b\u0016Bg\b\u0007\u0012\u000e\b\u0001\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\t\u001a\u00020\b\u0012\b\b\u0001\u0010\u000b\u001a\u00020\n\u0012\b\b\u0001\u0010\f\u001a\u00020\n\u0012\b\b\u0001\u0010\r\u001a\u00020\n\u0012\b\b\u0001\u0010\u000e\u001a\u00020\n\u0012\u0014\b\u0001\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u00100\u000f¢\u0006\u0004\b\u0012\u0010\u0013J\u001b\u0010\u0016\u001a\u00020\u00152\n\u0010\u0014\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u0016\u0010\u0017J\u0015\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00020\u0018H\u0016¢\u0006\u0004\b\u0019\u0010\u001aR\u001a\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u001cR\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u001eR\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010 R\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\"R\u0014\u0010\f\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\"R\u0014\u0010\r\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b$\u0010\"R\u0014\u0010\u000e\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\"R \u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u00100\u000f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b&\u0010'¨\u0006("}, d2 = {"Liq/z4;", "Lum/o;", "Liq/z4$b;", "Landroidx/activity/result/ActivityResultLauncher;", "Lvo/a;", "customTabsLauncher", "Lkq/b;", "uiService", "Lcom/squareup/moshi/w;", "moshi", "", "sessionToken", "inquiryId", "url", "componentName", "", "Lcom/withpersona/sdk2/inquiry/ui/network/ComponentParam;", "componentParams", "<init>", "(Landroidx/activity/result/ActivityResultLauncher;Lkq/b;Lcom/squareup/moshi/w;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/Map;)V", "otherWorker", "", "a", "(Lum/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Landroidx/activity/result/ActivityResultLauncher;", "c", "Lkq/b;", "d", "Lcom/squareup/moshi/w;", "e", "Ljava/lang/String;", "f", "g", "h", "i", "Ljava/util/Map;", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z4 implements um.o<b> {

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f31141b;

    /* renamed from: c  reason: collision with root package name */
    private final kq.b f31142c;

    /* renamed from: d  reason: collision with root package name */
    private final com.squareup.moshi.w f31143d;

    /* renamed from: e  reason: collision with root package name */
    private final String f31144e;

    /* renamed from: f  reason: collision with root package name */
    private final String f31145f;

    /* renamed from: g  reason: collision with root package name */
    private final String f31146g;

    /* renamed from: h  reason: collision with root package name */
    private final String f31147h;

    /* renamed from: i  reason: collision with root package name */
    private final Map f31148i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        z4 a(String str, String str2, String str3, String str4, Map map);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements b {

            /* renamed from: a  reason: collision with root package name */
            public static final a f31149a = new a();

            private a() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1215598964;
            }

            public String toString() {
                return "Complete";
            }
        }

        /* renamed from: iq.z4$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0419b implements b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f31150a;

            public C0419b(InternalErrorInfo errorInfo) {
                Intrinsics.checkNotNullParameter(errorInfo, "errorInfo");
                this.f31150a = errorInfo;
            }

            public final InternalErrorInfo a() {
                return this.f31150a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0419b) && Intrinsics.areEqual(this.f31150a, ((C0419b) obj).f31150a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f31150a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f31150a;
                return "Error(errorInfo=" + internalErrorInfo + ")";
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f31151d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f31152e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f31154d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ z4 f31155e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ String f31156i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(z4 z4Var, String str, Continuation continuation) {
                super(2, continuation);
                this.f31155e = z4Var;
                this.f31156i = str;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f31155e, this.f31156i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                pr.b.f();
                if (this.f31154d == 0) {
                    kotlin.c.b(obj);
                    ActivityResultLauncher activityResultLauncher = this.f31155e.f31141b;
                    androidx.browser.customtabs.b a10 = new b.d().a();
                    Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
                    activityResultLauncher.b(new vo.a(a10, h1.a(this.f31155e.f31146g, this.f31156i, this.f31155e.f31147h)));
                    return Unit.f33074a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            c cVar = new c(continuation);
            cVar.f31152e = obj;
            return cVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:23:0x008c, code lost:
            if (r1.emit(r2, r8) == r0) goto L13;
         */
        /* JADX WARN: Code restructure failed: missing block: B:35:0x00be, code lost:
            if (r1.emit(r9, r8) == r0) goto L13;
         */
        /* JADX WARN: Code restructure failed: missing block: B:40:0x00d8, code lost:
            if (hs.g.g(r4, r5, r8) == r0) goto L13;
         */
        /* JADX WARN: Code restructure failed: missing block: B:43:0x00ed, code lost:
            if (r9 == r0) goto L13;
         */
        /* JADX WARN: Code restructure failed: missing block: B:46:0x00fb, code lost:
            if (r1.emit(r9, r8) == r0) goto L13;
         */
        /* JADX WARN: Code restructure failed: missing block: B:51:0x0116, code lost:
            if (r1.emit(r9, r8) != r0) goto L24;
         */
        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Removed duplicated region for block: B:22:0x007a  */
        /* JADX WARN: Removed duplicated region for block: B:27:0x0093  */
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
        public final java.lang.Object invokeSuspend(java.lang.Object r9) {
            /*
                Method dump skipped, instructions count: 304
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: iq.z4.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((c) create(flowCollector, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public z4(ActivityResultLauncher customTabsLauncher, kq.b uiService, com.squareup.moshi.w moshi, String sessionToken, String inquiryId, String url, String componentName, Map componentParams) {
        Intrinsics.checkNotNullParameter(customTabsLauncher, "customTabsLauncher");
        Intrinsics.checkNotNullParameter(uiService, "uiService");
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(componentName, "componentName");
        Intrinsics.checkNotNullParameter(componentParams, "componentParams");
        this.f31141b = customTabsLauncher;
        this.f31142c = uiService;
        this.f31143d = moshi;
        this.f31144e = sessionToken;
        this.f31145f = inquiryId;
        this.f31146g = url;
        this.f31147h = componentName;
        this.f31148i = componentParams;
    }

    @Override // um.o
    public boolean a(um.o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if (o.b.a(this, otherWorker) && Intrinsics.areEqual(((z4) otherWorker).f31146g, this.f31146g)) {
            return true;
        }
        return false;
    }

    @Override // um.o
    public Flow run() {
        return ks.g.v(new c(null));
    }
}
