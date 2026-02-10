package hp;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0015\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0001\u001bBo\b\u0007\u0012\u000e\b\u0001\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\t\u001a\u00020\b\u0012\b\b\u0001\u0010\u000b\u001a\u00020\n\u0012\b\b\u0001\u0010\r\u001a\u00020\f\u0012\b\b\u0001\u0010\u000f\u001a\u00020\u000e\u0012\u000e\b\u0001\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00110\u0010\u0012\n\b\u0001\u0010\u0014\u001a\u0004\u0018\u00010\u0013\u0012\n\b\u0001\u0010\u0016\u001a\u0004\u0018\u00010\u0015¢\u0006\u0004\b\u0017\u0010\u0018J\u001b\u0010\u001b\u001a\u00020\u001a2\n\u0010\u0019\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u001b\u0010\u001cJ\u0015\u0010\u001e\u001a\b\u0012\u0004\u0012\u00020\u00020\u001dH\u0016¢\u0006\u0004\b\u001e\u0010\u001fR\u001a\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b \u0010!R\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\"\u0010#R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b$\u0010%R\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b&\u0010'R\u0014\u0010\r\u001a\u00020\f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b(\u0010)R\u0014\u0010\u000f\u001a\u00020\u000e8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b*\u0010+R\u001a\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00110\u00108\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b,\u0010-R\u0016\u0010\u0014\u001a\u0004\u0018\u00010\u00138\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b.\u0010/R\u0016\u0010\u0016\u001a\u0004\u0018\u00010\u00158\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b0\u00101¨\u00062"}, d2 = {"Lhp/o;", "Lcn/o;", "Lhp/k;", "Landroidx/activity/result/ActivityResultLauncher;", "Lhp/e;", "passportNfcReaderLauncher", "Landroid/content/Context;", "context", "Llp/c;", "sandboxFlags", "", "cardAccessNumber", "Lhp/b;", "mrzKey", "Lhp/m;", "passportNfcStrings", "", "Lhp/c;", "enabledDataGroups", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepStyle;", "styles", "", "theme", "<init>", "(Landroidx/activity/result/ActivityResultLauncher;Landroid/content/Context;Llp/c;Ljava/lang/String;Lhp/b;Lhp/m;Ljava/util/List;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepStyle;Ljava/lang/Integer;)V", "otherWorker", "", "a", "(Lcn/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Landroidx/activity/result/ActivityResultLauncher;", "c", "Landroid/content/Context;", "d", "Llp/c;", "e", "Ljava/lang/String;", "f", "Lhp/b;", "g", "Lhp/m;", "h", "Ljava/util/List;", "i", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepStyle;", "j", "Ljava/lang/Integer;", "nfc_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements cn.o<k> {

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f26440b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f26441c;

    /* renamed from: d  reason: collision with root package name */
    private final lp.c f26442d;

    /* renamed from: e  reason: collision with root package name */
    private final String f26443e;

    /* renamed from: f  reason: collision with root package name */
    private final hp.b f26444f;

    /* renamed from: g  reason: collision with root package name */
    private final m f26445g;

    /* renamed from: h  reason: collision with root package name */
    private final List f26446h;

    /* renamed from: i  reason: collision with root package name */
    private final StepStyles.UiStepStyle f26447i;

    /* renamed from: j  reason: collision with root package name */
    private final Integer f26448j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        o a(String str, hp.b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f26449d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f26450e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ o f26452d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ FlowCollector f26453e;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: hp.o$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0392a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f26454d;

                /* renamed from: e  reason: collision with root package name */
                Object f26455e;

                /* renamed from: i  reason: collision with root package name */
                /* synthetic */ Object f26456i;

                /* renamed from: p  reason: collision with root package name */
                int f26458p;

                C0392a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f26456i = obj;
                    this.f26458p |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            a(o oVar, FlowCollector flowCollector) {
                this.f26452d = oVar;
                this.f26453e = flowCollector;
            }

            /* JADX WARN: Code restructure failed: missing block: B:20:0x005e, code lost:
                if (ps.i0.a(r7.f26452d.f26441c.getResources().getInteger(hp.n.f26439a), r0) == r1) goto L21;
             */
            /* JADX WARN: Code restructure failed: missing block: B:24:0x006f, code lost:
                if (r9.emit(r8, r0) == r1) goto L21;
             */
            /* JADX WARN: Code restructure failed: missing block: B:25:0x0071, code lost:
                return r1;
             */
            /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
            /* JADX WARN: Removed duplicated region for block: B:18:0x0040  */
            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object emit(hp.k r8, kotlin.coroutines.Continuation r9) {
                /*
                    r7 = this;
                    boolean r0 = r9 instanceof hp.o.b.a.C0392a
                    if (r0 == 0) goto L13
                    r0 = r9
                    hp.o$b$a$a r0 = (hp.o.b.a.C0392a) r0
                    int r1 = r0.f26458p
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f26458p = r1
                    goto L18
                L13:
                    hp.o$b$a$a r0 = new hp.o$b$a$a
                    r0.<init>(r9)
                L18:
                    java.lang.Object r9 = r0.f26456i
                    java.lang.Object r1 = xr.b.f()
                    int r2 = r0.f26458p
                    r3 = 2
                    r4 = 1
                    if (r2 == 0) goto L40
                    if (r2 == r4) goto L34
                    if (r2 != r3) goto L2c
                    kotlin.c.b(r9)
                    goto L72
                L2c:
                    java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                    java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
                    r8.<init>(r9)
                    throw r8
                L34:
                    java.lang.Object r8 = r0.f26455e
                    hp.k r8 = (hp.k) r8
                    java.lang.Object r2 = r0.f26454d
                    hp.o$b$a r2 = (hp.o.b.a) r2
                    kotlin.c.b(r9)     // Catch: android.content.res.Resources.NotFoundException -> L62
                    goto L62
                L40:
                    kotlin.c.b(r9)
                    hp.o r9 = r7.f26452d     // Catch: android.content.res.Resources.NotFoundException -> L61
                    android.content.Context r9 = hp.o.c(r9)     // Catch: android.content.res.Resources.NotFoundException -> L61
                    android.content.res.Resources r9 = r9.getResources()     // Catch: android.content.res.Resources.NotFoundException -> L61
                    int r2 = hp.n.f26439a     // Catch: android.content.res.Resources.NotFoundException -> L61
                    int r9 = r9.getInteger(r2)     // Catch: android.content.res.Resources.NotFoundException -> L61
                    long r5 = (long) r9     // Catch: android.content.res.Resources.NotFoundException -> L61
                    r0.f26454d = r7     // Catch: android.content.res.Resources.NotFoundException -> L61
                    r0.f26455e = r8     // Catch: android.content.res.Resources.NotFoundException -> L61
                    r0.f26458p = r4     // Catch: android.content.res.Resources.NotFoundException -> L61
                    java.lang.Object r9 = ps.i0.a(r5, r0)     // Catch: android.content.res.Resources.NotFoundException -> L61
                    if (r9 != r1) goto L61
                    goto L71
                L61:
                    r2 = r7
                L62:
                    kotlinx.coroutines.flow.FlowCollector r9 = r2.f26453e
                    r2 = 0
                    r0.f26454d = r2
                    r0.f26455e = r2
                    r0.f26458p = r3
                    java.lang.Object r8 = r9.emit(r8, r0)
                    if (r8 != r1) goto L72
                L71:
                    return r1
                L72:
                    kotlin.Unit r8 = kotlin.Unit.f31765a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: hp.o.b.a.emit(hp.k, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f26450e = obj;
            return bVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:19:0x00c6, code lost:
            if (r12.emit(r3, r11) == r0) goto L27;
         */
        /* JADX WARN: Code restructure failed: missing block: B:42:0x0128, code lost:
            if (r1.collect(r2, r11) == r0) goto L27;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r12) {
            /*
                Method dump skipped, instructions count: 305
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: hp.o.b.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((b) create(flowCollector, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public o(ActivityResultLauncher passportNfcReaderLauncher, Context context, lp.c sandboxFlags, String cardAccessNumber, hp.b mrzKey, m passportNfcStrings, List enabledDataGroups, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        Intrinsics.checkNotNullParameter(passportNfcReaderLauncher, "passportNfcReaderLauncher");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(sandboxFlags, "sandboxFlags");
        Intrinsics.checkNotNullParameter(cardAccessNumber, "cardAccessNumber");
        Intrinsics.checkNotNullParameter(mrzKey, "mrzKey");
        Intrinsics.checkNotNullParameter(passportNfcStrings, "passportNfcStrings");
        Intrinsics.checkNotNullParameter(enabledDataGroups, "enabledDataGroups");
        this.f26440b = passportNfcReaderLauncher;
        this.f26441c = context;
        this.f26442d = sandboxFlags;
        this.f26443e = cardAccessNumber;
        this.f26444f = mrzKey;
        this.f26445g = passportNfcStrings;
        this.f26446h = enabledDataGroups;
        this.f26447i = uiStepStyle;
        this.f26448j = num;
    }

    @Override // cn.o
    public boolean a(cn.o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        return otherWorker instanceof o;
    }

    @Override // cn.o
    public Flow run() {
        return ss.g.v(new b(null));
    }
}
