package eo;

import android.content.Context;
import com.withpersona.sdk2.inquiry.governmentid.RawExtraction;
import eo.c4;
import eo.d0;
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
import pn.t0;
@Metadata(d1 = {"\u0000h\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0000\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0086\b\u0018\u00002\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00030\u00020\u0001:\u0001\u0019B5\b\u0007\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\t\u001a\u00020\b\u0012\b\b\u0001\u0010\u000b\u001a\u00020\n\u0012\b\b\u0001\u0010\r\u001a\u00020\f¢\u0006\u0004\b\u000e\u0010\u000fJ\u001d\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00030\u00022\u0006\u0010\u0011\u001a\u00020\u0010H\u0002¢\u0006\u0004\b\u0012\u0010\u0013J\u0019\u0010\u0015\u001a\u0004\u0018\u00010\u00142\u0006\u0010\u0011\u001a\u00020\u0010H\u0002¢\u0006\u0004\b\u0015\u0010\u0016J\u001b\u0010\u0019\u001a\u00020\u00182\n\u0010\u0017\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u0019\u0010\u001aJ\u001b\u0010\u001c\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00030\u00020\u001bH\u0016¢\u0006\u0004\b\u001c\u0010\u001dJ\u0010\u0010\u001e\u001a\u00020\fHÖ\u0001¢\u0006\u0004\b\u001e\u0010\u001fJ\u0010\u0010!\u001a\u00020 HÖ\u0001¢\u0006\u0004\b!\u0010\"J\u001a\u0010%\u001a\u00020\u00182\b\u0010$\u001a\u0004\u0018\u00010#HÖ\u0003¢\u0006\u0004\b%\u0010&R\u0014\u0010\u0005\u001a\u00020\u00048\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010(R\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010*R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010,R\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010-R\u0014\u0010\r\u001a\u00020\f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010.R\u0016\u00102\u001a\u00020/8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b0\u00101¨\u00063"}, d2 = {"Leo/e0;", "Lwm/o;", "Lkotlin/Result;", "Leo/d0$b;", "Landroid/content/Context;", "context", "Lpn/f0;", "governmentIdFeed", "Lrp/c;", "sdkFilesManager", "Leo/c4$e;", "side", "", "idClassKey", "<init>", "(Landroid/content/Context;Lpn/f0;Lrp/c;Leo/c4$e;Ljava/lang/String;)V", "Lpn/t0$b;", "parsedIdSide", "e", "(Lpn/t0$b;)Ljava/lang/Object;", "Leo/k0;", "f", "(Lpn/t0$b;)Leo/k0;", "otherWorker", "", "a", "(Lwm/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "", "other", "equals", "(Ljava/lang/Object;)Z", "b", "Landroid/content/Context;", "c", "Lpn/f0;", "d", "Lrp/c;", "Leo/c4$e;", "Ljava/lang/String;", "Llo/a;", "g", "Llo/a;", "autocaptureState", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nGovernmentIdAnalyzeWorker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 GovernmentIdAnalyzeWorker.kt\ncom/withpersona/sdk2/inquiry/governmentid/GovernmentIdAnalyzeWorker\n+ 2 Transform.kt\nkotlinx/coroutines/flow/FlowKt__TransformKt\n+ 3 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt\n+ 4 SafeCollector.common.kt\nkotlinx/coroutines/flow/internal/SafeCollector_commonKt\n*L\n1#1,94:1\n56#2:95\n59#2:99\n46#3:96\n51#3:98\n105#4:97\n*S KotlinDebug\n*F\n+ 1 GovernmentIdAnalyzeWorker.kt\ncom/withpersona/sdk2/inquiry/governmentid/GovernmentIdAnalyzeWorker\n*L\n35#1:95\n35#1:99\n35#1:96\n35#1:98\n35#1:97\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 implements wm.o<Result> {

    /* renamed from: b  reason: collision with root package name */
    private final Context f21752b;

    /* renamed from: c  reason: collision with root package name */
    private final pn.f0 f21753c;

    /* renamed from: d  reason: collision with root package name */
    private final rp.c f21754d;

    /* renamed from: e  reason: collision with root package name */
    private final c4.e f21755e;

    /* renamed from: f  reason: collision with root package name */
    private final String f21756f;

    /* renamed from: g  reason: collision with root package name */
    private lo.a f21757g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        e0 a(c4.e eVar, String str);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f21758a;

        static {
            int[] iArr = new int[t0.c.values().length];
            try {
                iArr[t0.c.f46361d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[t0.c.f46362e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f21758a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f21759d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ e0 f21760e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f21761d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e0 f21762e;

            /* renamed from: eo.e0$c$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0289a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f21763d;

                /* renamed from: e  reason: collision with root package name */
                int f21764e;

                public C0289a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f21763d = obj;
                    this.f21764e |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            public a(FlowCollector flowCollector, e0 e0Var) {
                this.f21761d = flowCollector;
                this.f21762e = e0Var;
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
                    boolean r0 = r8 instanceof eo.e0.c.a.C0289a
                    if (r0 == 0) goto L13
                    r0 = r8
                    eo.e0$c$a$a r0 = (eo.e0.c.a.C0289a) r0
                    int r1 = r0.f21764e
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f21764e = r1
                    goto L18
                L13:
                    eo.e0$c$a$a r0 = new eo.e0$c$a$a
                    r0.<init>(r8)
                L18:
                    java.lang.Object r8 = r0.f21763d
                    java.lang.Object r1 = rr.b.f()
                    int r2 = r0.f21764e
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
                    kotlinx.coroutines.flow.FlowCollector r8 = r6.f21761d
                    kotlin.Result r7 = (kotlin.Result) r7
                    java.lang.Object r7 = r7.j()
                    java.lang.Throwable r2 = kotlin.Result.e(r7)
                    if (r2 != 0) goto L81
                    pn.t0 r7 = (pn.t0) r7
                    boolean r2 = r7 instanceof pn.t0.b
                    if (r2 == 0) goto L7f
                    pn.t0$b r7 = (pn.t0.b) r7
                    pn.h0 r2 = r7.e()
                    if (r2 == 0) goto L74
                    eo.e0 r4 = r6.f21762e
                    lo.a r5 = eo.e0.c(r4)
                    lo.a r2 = lo.b.b(r5, r2)
                    eo.e0.d(r4, r2)
                    eo.e0 r2 = r6.f21762e
                    lo.a r2 = eo.e0.c(r2)
                    boolean r2 = lo.b.a(r2)
                    if (r2 == 0) goto L7f
                    eo.e0 r2 = r6.f21762e
                    java.lang.Object r7 = eo.e0.b(r2, r7)
                    kotlin.Result r7 = kotlin.Result.a(r7)
                    goto L8d
                L74:
                    eo.e0 r2 = r6.f21762e
                    java.lang.Object r7 = eo.e0.b(r2, r7)
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
                    r0.f21764e = r3
                    java.lang.Object r7 = r8.emit(r7, r0)
                    if (r7 != r1) goto L98
                    return r1
                L98:
                    kotlin.Unit r7 = kotlin.Unit.f32464a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: eo.e0.c.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        public c(Flow flow, e0 e0Var) {
            this.f21759d = flow;
            this.f21760e = e0Var;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f21759d.collect(new a(flowCollector, this.f21760e), continuation);
            if (collect == rr.b.f()) {
                return collect;
            }
            return Unit.f32464a;
        }
    }

    public e0(Context context, pn.f0 governmentIdFeed, rp.c sdkFilesManager, c4.e side, String idClassKey) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(governmentIdFeed, "governmentIdFeed");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(idClassKey, "idClassKey");
        this.f21752b = context;
        this.f21753c = governmentIdFeed;
        this.f21754d = sdkFilesManager;
        this.f21755e = side;
        this.f21756f = idClassKey;
        this.f21757g = new lo.a(null, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object e(t0.b bVar) {
        d0.d dVar;
        try {
            String absolutePath = r0.a(bVar.b(), this.f21754d).getAbsolutePath();
            Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
            List e10 = CollectionsKt.e(new c0(absolutePath, null, 2, null));
            int i10 = b.f21758a[bVar.f().ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    dVar = d0.d.f21739e;
                } else {
                    throw new lr.p();
                }
            } else {
                dVar = d0.d.f21738d;
            }
            String str = this.f21756f;
            RawExtraction rawExtraction = null;
            d0.a aVar = d0.a.f21723d;
            pn.g c10 = bVar.c();
            if (c10 != null) {
                rawExtraction = q4.a(c10);
            }
            return Result.b(new d0.b(e10, dVar, str, aVar, rawExtraction, f(bVar)));
        } catch (IOException e11) {
            Result.a aVar2 = Result.f32461e;
            return Result.b(kotlin.c.a(e11));
        }
    }

    private final k0 f(t0.b bVar) {
        k0 l10;
        pn.g c10 = bVar.c();
        if (c10 != null && (l10 = z.l(c10)) != null) {
            return l10;
        }
        pn.d0 d10 = bVar.d();
        if (d10 != null) {
            return z.m(d10);
        }
        return null;
    }

    @Override // wm.o
    public boolean a(wm.o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if ((otherWorker instanceof e0) && ((e0) otherWorker).f21755e == this.f21755e) {
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
        if (Intrinsics.areEqual(this.f21752b, e0Var.f21752b) && Intrinsics.areEqual(this.f21753c, e0Var.f21753c) && Intrinsics.areEqual(this.f21754d, e0Var.f21754d) && this.f21755e == e0Var.f21755e && Intrinsics.areEqual(this.f21756f, e0Var.f21756f)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f21752b.hashCode() * 31) + this.f21753c.hashCode()) * 31) + this.f21754d.hashCode()) * 31) + this.f21755e.hashCode()) * 31) + this.f21756f.hashCode();
    }

    @Override // wm.o
    public Flow run() {
        return new c(this.f21753c, this);
    }

    public String toString() {
        Context context = this.f21752b;
        pn.f0 f0Var = this.f21753c;
        rp.c cVar = this.f21754d;
        c4.e eVar = this.f21755e;
        String str = this.f21756f;
        return "GovernmentIdAnalyzeWorker(context=" + context + ", governmentIdFeed=" + f0Var + ", sdkFilesManager=" + cVar + ", side=" + eVar + ", idClassKey=" + str + ")";
    }
}
