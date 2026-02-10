package np;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import np.a1;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\u0007\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\b\n\u0002\b\u0005\u0018\u0000 #2\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0003\u0019\u0017\u0012B-\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0005\u0012\b\b\u0001\u0010\b\u001a\u00020\u0007\u0012\u0006\u0010\n\u001a\u00020\t¢\u0006\u0004\b\u000b\u0010\fJ\u001b\u0010\u000f\u001a\u00020\u000e*\u00020\r2\u0006\u0010\u0006\u001a\u00020\u0005H\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u001b\u0010\u0012\u001a\u00020\u00072\n\u0010\u0011\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u0012\u0010\u0013J\u0015\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00020\u0014H\u0016¢\u0006\u0004\b\u0015\u0010\u0016R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u001aR\u0014\u0010\b\u001a\u00020\u00078\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u001cR\u0014\u0010\n\u001a\u00020\t8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u001eR\u0016\u0010\"\u001a\u00020\u001f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b \u0010!¨\u0006$"}, d2 = {"Lnp/b1;", "Lcn/o;", "Lnp/b1$c;", "Lvn/w0;", "selfieDirectionFeed", "Lnp/a1$b;", "pose", "", "captureOnPoseDetected", "Lxp/c;", "sdkFilesManager", "<init>", "(Lvn/w0;Lnp/a1$b;ZLxp/c;)V", "Lzn/c;", "", "h", "(Lzn/c;Lnp/a1$b;)F", "otherWorker", "a", "(Lcn/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Lvn/w0;", "c", "Lnp/a1$b;", "d", "Z", "e", "Lxp/c;", "", "f", "I", "numRetries", "g", "selfie_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSelfieAnalyzeWorker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SelfieAnalyzeWorker.kt\ncom/withpersona/sdk2/inquiry/selfie/SelfieAnalyzeWorker\n+ 2 Transform.kt\nkotlinx/coroutines/flow/FlowKt__TransformKt\n+ 3 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt\n+ 4 SafeCollector.common.kt\nkotlinx/coroutines/flow/internal/SafeCollector_commonKt\n*L\n1#1,172:1\n56#2:173\n59#2:177\n46#3:174\n51#3:176\n105#4:175\n*S KotlinDebug\n*F\n+ 1 SelfieAnalyzeWorker.kt\ncom/withpersona/sdk2/inquiry/selfie/SelfieAnalyzeWorker\n*L\n42#1:173\n42#1:177\n42#1:174\n42#1:176\n42#1:175\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b1 implements cn.o<c> {

    /* renamed from: g  reason: collision with root package name */
    public static final a f39042g = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final vn.w0 f39043b;

    /* renamed from: c  reason: collision with root package name */
    private final a1.b f39044c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f39045d;

    /* renamed from: e  reason: collision with root package name */
    private final xp.c f39046e;

    /* renamed from: f  reason: collision with root package name */
    private int f39047f;

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
        b1 a(a1.b bVar, boolean z10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            private final a1 f39048a;

            /* renamed from: b  reason: collision with root package name */
            private final float f39049b;

            /* renamed from: c  reason: collision with root package name */
            private final zn.a f39050c;

            public a(a1 a1Var, float f10, zn.a aVar) {
                super(null);
                this.f39048a = a1Var;
                this.f39049b = f10;
                this.f39050c = aVar;
            }

            public final zn.a a() {
                return this.f39050c;
            }

            public final float b() {
                return this.f39049b;
            }

            public final a1 c() {
                return this.f39048a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends c {

            /* renamed from: a  reason: collision with root package name */
            private final Throwable f39051a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(Throwable error) {
                super(null);
                Intrinsics.checkNotNullParameter(error, "error");
                this.f39051a = error;
            }

            public final Throwable a() {
                return this.f39051a;
            }
        }

        /* renamed from: np.b1$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0560c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final zn.b f39052a;

            /* renamed from: b  reason: collision with root package name */
            private final float f39053b;

            /* renamed from: c  reason: collision with root package name */
            private final zn.a f39054c;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0560c(zn.b error, float f10, zn.a aVar) {
                super(null);
                Intrinsics.checkNotNullParameter(error, "error");
                this.f39052a = error;
                this.f39053b = f10;
                this.f39054c = aVar;
            }

            public final zn.a a() {
                return this.f39054c;
            }

            public final zn.b b() {
                return this.f39052a;
            }

            public final float c() {
                return this.f39053b;
            }
        }

        public /* synthetic */ c(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private c() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f39055a;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f39020d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f39021e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f39022i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f39055a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f39056d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ b1 f39057e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f39058d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b1 f39059e;

            /* renamed from: np.b1$e$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0561a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f39060d;

                /* renamed from: e  reason: collision with root package name */
                int f39061e;

                /* renamed from: i  reason: collision with root package name */
                Object f39062i;

                public C0561a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f39060d = obj;
                    this.f39061e |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            public a(FlowCollector flowCollector, b1 b1Var) {
                this.f39058d = flowCollector;
                this.f39059e = b1Var;
            }

            /* JADX WARN: Code restructure failed: missing block: B:45:0x0106, code lost:
                if (r10.emit(r5, r0) == r1) goto L21;
             */
            /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
            /* JADX WARN: Removed duplicated region for block: B:16:0x003f  */
            /* JADX WARN: Removed duplicated region for block: B:44:0x00fe  */
            @Override // kotlinx.coroutines.flow.FlowCollector
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object emit(java.lang.Object r9, kotlin.coroutines.Continuation r10) {
                /*
                    Method dump skipped, instructions count: 268
                    To view this dump add '--comments-level debug' option
                */
                throw new UnsupportedOperationException("Method not decompiled: np.b1.e.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        public e(Flow flow, b1 b1Var) {
            this.f39056d = flow;
            this.f39057e = b1Var;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f39056d.collect(new a(flowCollector, this.f39057e), continuation);
            if (collect == xr.b.f()) {
                return collect;
            }
            return Unit.f31765a;
        }
    }

    public b1(vn.w0 selfieDirectionFeed, a1.b pose, boolean z10, xp.c sdkFilesManager) {
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        Intrinsics.checkNotNullParameter(pose, "pose");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        this.f39043b = selfieDirectionFeed;
        this.f39044c = pose;
        this.f39045d = z10;
        this.f39046e = sdkFilesManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final float h(zn.c cVar, a1.b bVar) {
        float f10;
        boolean z10 = true;
        if (cVar.d() != 1) {
            return 0.0f;
        }
        int i10 = d.f39055a[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    if (cVar.g() || cVar.h() || !cVar.f()) {
                        return 0.0f;
                    }
                    return 1.0f - Math.min(Math.abs(((-15.0f) - cVar.c()) / (-15.0f)), 1.0f);
                }
                throw new rr.p();
            } else if (cVar.g() || cVar.h() || !cVar.f()) {
                return 0.0f;
            } else {
                return 1.0f - Math.min(Math.abs((15.0f - cVar.c()) / 15.0f), 1.0f);
            }
        }
        z10 = (cVar.g() || cVar.h()) ? false : false;
        boolean f11 = cVar.f();
        float l10 = kotlin.ranges.d.l((Math.abs(cVar.c()) - 10.0f) / 90.0f, 0.0f, 1.0f);
        if (z10) {
            f10 = 0.33f;
        } else {
            f10 = 0.0f;
        }
        if (f11) {
            f10 += 0.17f;
        }
        if (l10 > 0.0f) {
            return f10 + (l10 * 0.5f);
        }
        return f10;
    }

    @Override // cn.o
    public boolean a(cn.o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if (otherWorker instanceof b1) {
            b1 b1Var = (b1) otherWorker;
            if (b1Var.f39044c == this.f39044c && b1Var.f39045d == this.f39045d) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // cn.o
    public Flow run() {
        return ss.g.x(new e(ss.g.m(this.f39043b, 1), this), ps.m0.a());
    }
}
