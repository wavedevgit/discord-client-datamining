package bo;

import android.content.Context;
import bo.c4;
import bo.d0;
import com.withpersona.sdk2.inquiry.governmentid.RawExtraction;
import java.io.IOException;
import java.util.List;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import nn.t0;
@Metadata(d1 = {"\u0000h\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0000\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0086\b\u0018\u00002\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00030\u00020\u0001:\u0001\u0019B5\b\u0007\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\t\u001a\u00020\b\u0012\b\b\u0001\u0010\u000b\u001a\u00020\n\u0012\b\b\u0001\u0010\r\u001a\u00020\f¢\u0006\u0004\b\u000e\u0010\u000fJ\u001d\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00030\u00022\u0006\u0010\u0011\u001a\u00020\u0010H\u0002¢\u0006\u0004\b\u0012\u0010\u0013J\u0019\u0010\u0015\u001a\u0004\u0018\u00010\u00142\u0006\u0010\u0011\u001a\u00020\u0010H\u0002¢\u0006\u0004\b\u0015\u0010\u0016J\u001b\u0010\u0019\u001a\u00020\u00182\n\u0010\u0017\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u0019\u0010\u001aJ\u001b\u0010\u001c\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00030\u00020\u001bH\u0016¢\u0006\u0004\b\u001c\u0010\u001dJ\u0010\u0010\u001e\u001a\u00020\fHÖ\u0001¢\u0006\u0004\b\u001e\u0010\u001fJ\u0010\u0010!\u001a\u00020 HÖ\u0001¢\u0006\u0004\b!\u0010\"J\u001a\u0010%\u001a\u00020\u00182\b\u0010$\u001a\u0004\u0018\u00010#HÖ\u0003¢\u0006\u0004\b%\u0010&R\u0014\u0010\u0005\u001a\u00020\u00048\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010(R\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010*R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010,R\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010-R\u0014\u0010\r\u001a\u00020\f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010.R\u0016\u00102\u001a\u00020/8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b0\u00101¨\u00063"}, d2 = {"Lbo/e0;", "Lum/o;", "Lkotlin/Result;", "Lbo/d0$b;", "Landroid/content/Context;", "context", "Lnn/f0;", "governmentIdFeed", "Lpp/c;", "sdkFilesManager", "Lbo/c4$e;", "side", "", "idClassKey", "<init>", "(Landroid/content/Context;Lnn/f0;Lpp/c;Lbo/c4$e;Ljava/lang/String;)V", "Lnn/t0$b;", "parsedIdSide", "e", "(Lnn/t0$b;)Ljava/lang/Object;", "Lbo/k0;", "f", "(Lnn/t0$b;)Lbo/k0;", "otherWorker", "", "a", "(Lum/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "", "other", "equals", "(Ljava/lang/Object;)Z", "b", "Landroid/content/Context;", "c", "Lnn/f0;", "d", "Lpp/c;", "Lbo/c4$e;", "Ljava/lang/String;", "Ljo/a;", "g", "Ljo/a;", "autocaptureState", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nGovernmentIdAnalyzeWorker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 GovernmentIdAnalyzeWorker.kt\ncom/withpersona/sdk2/inquiry/governmentid/GovernmentIdAnalyzeWorker\n+ 2 Transform.kt\nkotlinx/coroutines/flow/FlowKt__TransformKt\n+ 3 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt\n+ 4 SafeCollector.common.kt\nkotlinx/coroutines/flow/internal/SafeCollector_commonKt\n*L\n1#1,94:1\n56#2:95\n59#2:99\n46#3:96\n51#3:98\n105#4:97\n*S KotlinDebug\n*F\n+ 1 GovernmentIdAnalyzeWorker.kt\ncom/withpersona/sdk2/inquiry/governmentid/GovernmentIdAnalyzeWorker\n*L\n35#1:95\n35#1:99\n35#1:96\n35#1:98\n35#1:97\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 implements um.o<Result> {

    /* renamed from: b  reason: collision with root package name */
    private final Context f6697b;

    /* renamed from: c  reason: collision with root package name */
    private final nn.f0 f6698c;

    /* renamed from: d  reason: collision with root package name */
    private final pp.c f6699d;

    /* renamed from: e  reason: collision with root package name */
    private final c4.e f6700e;

    /* renamed from: f  reason: collision with root package name */
    private final String f6701f;

    /* renamed from: g  reason: collision with root package name */
    private jo.a f6702g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        e0 a(c4.e eVar, String str);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f6703a;

        static {
            int[] iArr = new int[t0.c.values().length];
            try {
                iArr[t0.c.f42069d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[t0.c.f42070e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f6703a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f6704d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ e0 f6705e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f6706d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e0 f6707e;

            /* renamed from: bo.e0$c$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0119a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f6708d;

                /* renamed from: e  reason: collision with root package name */
                int f6709e;

                public C0119a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f6708d = obj;
                    this.f6709e |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            public a(FlowCollector flowCollector, e0 e0Var) {
                this.f6706d = flowCollector;
                this.f6707e = e0Var;
            }

            /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
            /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
            @Override // kotlinx.coroutines.flow.FlowCollector
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object emit(java.lang.Object r7, kotlin.coroutines.Continuation r8) {
                /*
                    r6 = this;
                    boolean r0 = r8 instanceof bo.e0.c.a.C0119a
                    if (r0 == 0) goto L13
                    r0 = r8
                    bo.e0$c$a$a r0 = (bo.e0.c.a.C0119a) r0
                    int r1 = r0.f6709e
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f6709e = r1
                    goto L18
                L13:
                    bo.e0$c$a$a r0 = new bo.e0$c$a$a
                    r0.<init>(r8)
                L18:
                    java.lang.Object r8 = r0.f6708d
                    java.lang.Object r1 = pr.b.f()
                    int r2 = r0.f6709e
                    r3 = 1
                    if (r2 == 0) goto L31
                    if (r2 != r3) goto L29
                    kotlin.c.b(r8)
                    goto L98
                L29:
                    java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                    java.lang.String r8 = "call to 'resume' before 'invoke' with coroutine"
                    r7.<init>(r8)
                    throw r7
                L31:
                    kotlin.c.b(r8)
                    kotlinx.coroutines.flow.FlowCollector r8 = r6.f6706d
                    kotlin.Result r7 = (kotlin.Result) r7
                    java.lang.Object r7 = r7.j()
                    java.lang.Throwable r2 = kotlin.Result.e(r7)
                    if (r2 != 0) goto L81
                    nn.t0 r7 = (nn.t0) r7
                    boolean r2 = r7 instanceof nn.t0.b
                    if (r2 == 0) goto L7f
                    nn.t0$b r7 = (nn.t0.b) r7
                    nn.h0 r2 = r7.e()
                    if (r2 == 0) goto L74
                    bo.e0 r4 = r6.f6707e
                    jo.a r5 = bo.e0.c(r4)
                    jo.a r2 = jo.b.b(r5, r2)
                    bo.e0.d(r4, r2)
                    bo.e0 r2 = r6.f6707e
                    jo.a r2 = bo.e0.c(r2)
                    boolean r2 = jo.b.a(r2)
                    if (r2 == 0) goto L7f
                    bo.e0 r2 = r6.f6707e
                    java.lang.Object r7 = bo.e0.b(r2, r7)
                    kotlin.Result r7 = kotlin.Result.a(r7)
                    goto L8d
                L74:
                    bo.e0 r2 = r6.f6707e
                    java.lang.Object r7 = bo.e0.b(r2, r7)
                    kotlin.Result r7 = kotlin.Result.a(r7)
                    goto L8d
                L7f:
                    r7 = 0
                    goto L8d
                L81:
                    java.lang.Object r7 = kotlin.c.a(r2)
                    java.lang.Object r7 = kotlin.Result.b(r7)
                    kotlin.Result r7 = kotlin.Result.a(r7)
                L8d:
                    if (r7 == 0) goto L98
                    r0.f6709e = r3
                    java.lang.Object r7 = r8.emit(r7, r0)
                    if (r7 != r1) goto L98
                    return r1
                L98:
                    kotlin.Unit r7 = kotlin.Unit.f33074a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: bo.e0.c.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        public c(Flow flow, e0 e0Var) {
            this.f6704d = flow;
            this.f6705e = e0Var;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f6704d.collect(new a(flowCollector, this.f6705e), continuation);
            if (collect == pr.b.f()) {
                return collect;
            }
            return Unit.f33074a;
        }
    }

    public e0(Context context, nn.f0 governmentIdFeed, pp.c sdkFilesManager, c4.e side, String idClassKey) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(governmentIdFeed, "governmentIdFeed");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
        this.f6697b = context;
        this.f6698c = governmentIdFeed;
        this.f6699d = sdkFilesManager;
        this.f6700e = side;
        this.f6701f = idClassKey;
        this.f6702g = new jo.a(null, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object e(t0.b bVar) {
        d0.d dVar;
        try {
            String absolutePath = r0.a(bVar.b(), this.f6699d).getAbsolutePath();
            Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
            List e10 = CollectionsKt.e(new c0(absolutePath, null, 2, null));
            int i10 = b.f6703a[bVar.f().ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    dVar = d0.d.f6684e;
                } else {
                    throw new jr.p();
                }
            } else {
                dVar = d0.d.f6683d;
            }
            String str = this.f6701f;
            RawExtraction rawExtraction = null;
            d0.a aVar = d0.a.f6668d;
            nn.g c10 = bVar.c();
            if (c10 != null) {
                rawExtraction = q4.a(c10);
            }
            return Result.b(new d0.b(e10, dVar, str, aVar, rawExtraction, f(bVar)));
        } catch (IOException e11) {
            Result.a aVar2 = Result.f33071e;
            return Result.b(kotlin.c.a(e11));
        }
    }

    private final k0 f(t0.b bVar) {
        k0 l10;
        nn.g c10 = bVar.c();
        if (c10 != null && (l10 = z.l(c10)) != null) {
            return l10;
        }
        nn.d0 d10 = bVar.d();
        if (d10 != null) {
            return z.m(d10);
        }
        return null;
    }

    @Override // um.o
    public boolean a(um.o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if ((otherWorker instanceof e0) && ((e0) otherWorker).f6700e == this.f6700e) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e0)) {
            return false;
        }
        e0 e0Var = (e0) obj;
        if (Intrinsics.areEqual(this.f6697b, e0Var.f6697b) && Intrinsics.areEqual(this.f6698c, e0Var.f6698c) && Intrinsics.areEqual(this.f6699d, e0Var.f6699d) && this.f6700e == e0Var.f6700e && Intrinsics.areEqual(this.f6701f, e0Var.f6701f)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f6697b.hashCode() * 31) + this.f6698c.hashCode()) * 31) + this.f6699d.hashCode()) * 31) + this.f6700e.hashCode()) * 31) + this.f6701f.hashCode();
    }

    @Override // um.o
    public Flow run() {
        return new c(this.f6698c, this);
    }

    public String toString() {
        Context context = this.f6697b;
        nn.f0 f0Var = this.f6698c;
        pp.c cVar = this.f6699d;
        c4.e eVar = this.f6700e;
        String str = this.f6701f;
        return "GovernmentIdAnalyzeWorker(context=" + context + ", governmentIdFeed=" + f0Var + ", sdkFilesManager=" + cVar + ", side=" + eVar + ", idClassKey=" + str + ")";
    }
}
