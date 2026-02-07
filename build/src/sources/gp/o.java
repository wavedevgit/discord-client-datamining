package gp;

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
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0015\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0001\u001bBo\b\u0007\u0012\u000e\b\u0001\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\t\u001a\u00020\b\u0012\b\b\u0001\u0010\u000b\u001a\u00020\n\u0012\b\b\u0001\u0010\r\u001a\u00020\f\u0012\b\b\u0001\u0010\u000f\u001a\u00020\u000e\u0012\u000e\b\u0001\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00110\u0010\u0012\n\b\u0001\u0010\u0014\u001a\u0004\u0018\u00010\u0013\u0012\n\b\u0001\u0010\u0016\u001a\u0004\u0018\u00010\u0015¢\u0006\u0004\b\u0017\u0010\u0018J\u001b\u0010\u001b\u001a\u00020\u001a2\n\u0010\u0019\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u001b\u0010\u001cJ\u0015\u0010\u001e\u001a\b\u0012\u0004\u0012\u00020\u00020\u001dH\u0016¢\u0006\u0004\b\u001e\u0010\u001fR\u001a\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b \u0010!R\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\"\u0010#R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b$\u0010%R\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b&\u0010'R\u0014\u0010\r\u001a\u00020\f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b(\u0010)R\u0014\u0010\u000f\u001a\u00020\u000e8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b*\u0010+R\u001a\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00110\u00108\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b,\u0010-R\u0016\u0010\u0014\u001a\u0004\u0018\u00010\u00138\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b.\u0010/R\u0016\u0010\u0016\u001a\u0004\u0018\u00010\u00158\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b0\u00101¨\u00062"}, d2 = {"Lgp/o;", "Lbn/o;", "Lgp/k;", "Landroidx/activity/result/ActivityResultLauncher;", "Lgp/e;", "passportNfcReaderLauncher", "Landroid/content/Context;", "context", "Lkp/c;", "sandboxFlags", "", "cardAccessNumber", "Lgp/b;", "mrzKey", "Lgp/m;", "passportNfcStrings", "", "Lgp/c;", "enabledDataGroups", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepStyle;", "styles", "", "theme", "<init>", "(Landroidx/activity/result/ActivityResultLauncher;Landroid/content/Context;Lkp/c;Ljava/lang/String;Lgp/b;Lgp/m;Ljava/util/List;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepStyle;Ljava/lang/Integer;)V", "otherWorker", "", "a", "(Lbn/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Landroidx/activity/result/ActivityResultLauncher;", "c", "Landroid/content/Context;", "d", "Lkp/c;", "e", "Ljava/lang/String;", "f", "Lgp/b;", "g", "Lgp/m;", "h", "Ljava/util/List;", "i", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepStyle;", "j", "Ljava/lang/Integer;", "nfc_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements bn.o<k> {

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f25529b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f25530c;

    /* renamed from: d  reason: collision with root package name */
    private final kp.c f25531d;

    /* renamed from: e  reason: collision with root package name */
    private final String f25532e;

    /* renamed from: f  reason: collision with root package name */
    private final gp.b f25533f;

    /* renamed from: g  reason: collision with root package name */
    private final m f25534g;

    /* renamed from: h  reason: collision with root package name */
    private final List f25535h;

    /* renamed from: i  reason: collision with root package name */
    private final StepStyles.UiStepStyle f25536i;

    /* renamed from: j  reason: collision with root package name */
    private final Integer f25537j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        o a(String str, gp.b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f25538d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f25539e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ o f25541d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ FlowCollector f25542e;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: gp.o$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0347a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f25543d;

                /* renamed from: e  reason: collision with root package name */
                Object f25544e;

                /* renamed from: i  reason: collision with root package name */
                /* synthetic */ Object f25545i;

                /* renamed from: p  reason: collision with root package name */
                int f25547p;

                C0347a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f25545i = obj;
                    this.f25547p |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            a(o oVar, FlowCollector flowCollector) {
                this.f25541d = oVar;
                this.f25542e = flowCollector;
            }

            /* JADX WARN: Code restructure failed: missing block: B:20:0x005e, code lost:
                if (os.i0.a(r7.f25541d.f25530c.getResources().getInteger(gp.n.f25528a), r0) == r1) goto L21;
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
            public final java.lang.Object emit(gp.k r8, kotlin.coroutines.Continuation r9) {
                /*
                    r7 = this;
                    boolean r0 = r9 instanceof gp.o.b.a.C0347a
                    if (r0 == 0) goto L13
                    r0 = r9
                    gp.o$b$a$a r0 = (gp.o.b.a.C0347a) r0
                    int r1 = r0.f25547p
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f25547p = r1
                    goto L18
                L13:
                    gp.o$b$a$a r0 = new gp.o$b$a$a
                    r0.<init>(r9)
                L18:
                    java.lang.Object r9 = r0.f25545i
                    java.lang.Object r1 = wr.b.f()
                    int r2 = r0.f25547p
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
                    java.lang.Object r8 = r0.f25544e
                    gp.k r8 = (gp.k) r8
                    java.lang.Object r2 = r0.f25543d
                    gp.o$b$a r2 = (gp.o.b.a) r2
                    kotlin.c.b(r9)     // Catch: android.content.res.Resources.NotFoundException -> L62
                    goto L62
                L40:
                    kotlin.c.b(r9)
                    gp.o r9 = r7.f25541d     // Catch: android.content.res.Resources.NotFoundException -> L61
                    android.content.Context r9 = gp.o.c(r9)     // Catch: android.content.res.Resources.NotFoundException -> L61
                    android.content.res.Resources r9 = r9.getResources()     // Catch: android.content.res.Resources.NotFoundException -> L61
                    int r2 = gp.n.f25528a     // Catch: android.content.res.Resources.NotFoundException -> L61
                    int r9 = r9.getInteger(r2)     // Catch: android.content.res.Resources.NotFoundException -> L61
                    long r5 = (long) r9     // Catch: android.content.res.Resources.NotFoundException -> L61
                    r0.f25543d = r7     // Catch: android.content.res.Resources.NotFoundException -> L61
                    r0.f25544e = r8     // Catch: android.content.res.Resources.NotFoundException -> L61
                    r0.f25547p = r4     // Catch: android.content.res.Resources.NotFoundException -> L61
                    java.lang.Object r9 = os.i0.a(r5, r0)     // Catch: android.content.res.Resources.NotFoundException -> L61
                    if (r9 != r1) goto L61
                    goto L71
                L61:
                    r2 = r7
                L62:
                    kotlinx.coroutines.flow.FlowCollector r9 = r2.f25542e
                    r2 = 0
                    r0.f25543d = r2
                    r0.f25544e = r2
                    r0.f25547p = r3
                    java.lang.Object r8 = r9.emit(r8, r0)
                    if (r8 != r1) goto L72
                L71:
                    return r1
                L72:
                    kotlin.Unit r8 = kotlin.Unit.f32056a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: gp.o.b.a.emit(gp.k, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f25539e = obj;
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
            throw new UnsupportedOperationException("Method not decompiled: gp.o.b.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((b) create(flowCollector, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public o(ActivityResultLauncher passportNfcReaderLauncher, Context context, kp.c sandboxFlags, String cardAccessNumber, gp.b mrzKey, m passportNfcStrings, List enabledDataGroups, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        Intrinsics.checkNotNullParameter(passportNfcReaderLauncher, "passportNfcReaderLauncher");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(sandboxFlags, "sandboxFlags");
        Intrinsics.checkNotNullParameter(cardAccessNumber, "cardAccessNumber");
        Intrinsics.checkNotNullParameter(mrzKey, "mrzKey");
        Intrinsics.checkNotNullParameter(passportNfcStrings, "passportNfcStrings");
        Intrinsics.checkNotNullParameter(enabledDataGroups, "enabledDataGroups");
        this.f25529b = passportNfcReaderLauncher;
        this.f25530c = context;
        this.f25531d = sandboxFlags;
        this.f25532e = cardAccessNumber;
        this.f25533f = mrzKey;
        this.f25534g = passportNfcStrings;
        this.f25535h = enabledDataGroups;
        this.f25536i = uiStepStyle;
        this.f25537j = num;
    }

    @Override // bn.o
    public boolean a(bn.o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        return otherWorker instanceof o;
    }

    @Override // bn.o
    public Flow run() {
        return rs.g.v(new b(null));
    }
}
