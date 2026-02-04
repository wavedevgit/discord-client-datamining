package pn;

import android.graphics.Bitmap;
import android.graphics.Rect;
import android.media.Image;
import androidx.camera.core.f;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import pn.e;
import pn.t0;
import qn.a;
import qn.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 implements sn.a, f.a, ms.a0, rn.b {

    /* renamed from: d  reason: collision with root package name */
    private final MutableSharedFlow f46239d;

    /* renamed from: e  reason: collision with root package name */
    private t0.c f46240e;

    /* renamed from: i  reason: collision with root package name */
    private List f46241i;

    /* renamed from: o  reason: collision with root package name */
    private List f46242o;

    /* renamed from: p  reason: collision with root package name */
    private sn.c f46243p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f46244d;

        /* renamed from: e  reason: collision with root package name */
        Object f46245e;

        /* renamed from: i  reason: collision with root package name */
        Object f46246i;

        /* renamed from: o  reason: collision with root package name */
        Object f46247o;

        /* renamed from: p  reason: collision with root package name */
        Object f46248p;

        /* renamed from: q  reason: collision with root package name */
        Object f46249q;

        /* renamed from: r  reason: collision with root package name */
        /* synthetic */ Object f46250r;

        /* renamed from: t  reason: collision with root package name */
        int f46252t;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f46250r = obj;
            this.f46252t |= Integer.MIN_VALUE;
            Object l10 = f0.this.l(null, this);
            if (l10 == rr.b.f()) {
                return l10;
            }
            return Result.a(l10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f46253d;

        /* renamed from: e  reason: collision with root package name */
        int f46254e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ androidx.camera.core.n f46255i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f0 f46256o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(androidx.camera.core.n nVar, f0 f0Var, Continuation continuation) {
            super(2, continuation);
            this.f46255i = nVar;
            this.f46256o = f0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f46255i, this.f46256o, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:21:0x0046, code lost:
            if (r7 == r0) goto L16;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x005e, code lost:
            if (r1.emit(r7, r6) == r0) goto L16;
         */
        /* JADX WARN: Code restructure failed: missing block: B:25:0x0060, code lost:
            return r0;
         */
        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r1v0, types: [int, java.lang.AutoCloseable] */
        /* JADX WARN: Type inference failed for: r1v6, types: [java.lang.AutoCloseable] */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r7) {
            /*
                r6 = this;
                java.lang.Object r0 = rr.b.f()
                int r1 = r6.f46254e
                r2 = 2
                r3 = 1
                r4 = 0
                if (r1 == 0) goto L2b
                if (r1 == r3) goto L1b
                if (r1 != r2) goto L13
                kotlin.c.b(r7)
                goto L61
            L13:
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r0)
                throw r7
            L1b:
                java.lang.Object r1 = r6.f46253d
                java.lang.AutoCloseable r1 = (java.lang.AutoCloseable) r1
                kotlin.c.b(r7)     // Catch: java.lang.Throwable -> L29
                kotlin.Result r7 = (kotlin.Result) r7     // Catch: java.lang.Throwable -> L29
                java.lang.Object r7 = r7.j()     // Catch: java.lang.Throwable -> L29
                goto L49
            L29:
                r7 = move-exception
                goto L64
            L2b:
                kotlin.c.b(r7)
                androidx.camera.core.n r1 = r6.f46255i
                pn.f0 r7 = r6.f46256o
                pn.j0 r5 = pn.m0.e(r1)     // Catch: java.lang.Throwable -> L29
                if (r5 != 0) goto L3e
                kotlin.Unit r7 = kotlin.Unit.f32464a     // Catch: java.lang.Throwable -> L29
                xr.a.a(r1, r4)
                return r7
            L3e:
                r6.f46253d = r1     // Catch: java.lang.Throwable -> L29
                r6.f46254e = r3     // Catch: java.lang.Throwable -> L29
                java.lang.Object r7 = pn.f0.j(r7, r5, r6)     // Catch: java.lang.Throwable -> L29
                if (r7 != r0) goto L49
                goto L60
            L49:
                xr.a.a(r1, r4)
                pn.f0 r1 = r6.f46256o
                kotlinx.coroutines.flow.MutableSharedFlow r1 = pn.f0.k(r1)
                kotlin.Result r7 = kotlin.Result.a(r7)
                r6.f46253d = r4
                r6.f46254e = r2
                java.lang.Object r7 = r1.emit(r7, r6)
                if (r7 != r0) goto L61
            L60:
                return r0
            L61:
                kotlin.Unit r7 = kotlin.Unit.f32464a
                return r7
            L64:
                throw r7     // Catch: java.lang.Throwable -> L65
            L65:
                r0 = move-exception
                xr.a.a(r1, r7)
                throw r0
            */
            throw new UnsupportedOperationException("Method not decompiled: pn.f0.b.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f46257d;

        /* renamed from: e  reason: collision with root package name */
        int f46258e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Image f46259i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f0 f46260o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ int f46261p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Image image, f0 f0Var, int i10, Continuation continuation) {
            super(2, continuation);
            this.f46259i = image;
            this.f46260o = f0Var;
            this.f46261p = i10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f46259i, this.f46260o, this.f46261p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:16:0x003f, code lost:
            if (r6 == r0) goto L16;
         */
        /* JADX WARN: Code restructure failed: missing block: B:19:0x0058, code lost:
            if (r1.emit(r6, r5) == r0) goto L16;
         */
        /* JADX WARN: Code restructure failed: missing block: B:20:0x005a, code lost:
            return r0;
         */
        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r1v0, types: [int] */
        /* JADX WARN: Type inference failed for: r1v1, types: [java.lang.AutoCloseable] */
        /* JADX WARN: Type inference failed for: r1v5, types: [kotlinx.coroutines.flow.MutableSharedFlow] */
        /* JADX WARN: Type inference failed for: r1v7, types: [java.lang.AutoCloseable] */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r6) {
            /*
                r5 = this;
                java.lang.Object r0 = rr.b.f()
                int r1 = r5.f46258e
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L2a
                if (r1 == r3) goto L1a
                if (r1 != r2) goto L12
                kotlin.c.b(r6)
                goto L5b
            L12:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r0)
                throw r6
            L1a:
                java.lang.Object r1 = r5.f46257d
                java.lang.AutoCloseable r1 = (java.lang.AutoCloseable) r1
                kotlin.c.b(r6)     // Catch: java.lang.Throwable -> L28
                kotlin.Result r6 = (kotlin.Result) r6     // Catch: java.lang.Throwable -> L28
                java.lang.Object r6 = r6.j()     // Catch: java.lang.Throwable -> L28
                goto L42
            L28:
                r6 = move-exception
                goto L5e
            L2a:
                kotlin.c.b(r6)
                android.media.Image r1 = r5.f46259i
                pn.f0 r6 = r5.f46260o
                int r4 = r5.f46261p
                pn.j0 r4 = pn.m0.d(r1, r4)     // Catch: java.lang.Throwable -> L28
                r5.f46257d = r1     // Catch: java.lang.Throwable -> L28
                r5.f46258e = r3     // Catch: java.lang.Throwable -> L28
                java.lang.Object r6 = pn.f0.j(r6, r4, r5)     // Catch: java.lang.Throwable -> L28
                if (r6 != r0) goto L42
                goto L5a
            L42:
                r3 = 0
                xr.a.a(r1, r3)
                pn.f0 r1 = r5.f46260o
                kotlinx.coroutines.flow.MutableSharedFlow r1 = pn.f0.k(r1)
                kotlin.Result r6 = kotlin.Result.a(r6)
                r5.f46257d = r3
                r5.f46258e = r2
                java.lang.Object r6 = r1.emit(r6, r5)
                if (r6 != r0) goto L5b
            L5a:
                return r0
            L5b:
                kotlin.Unit r6 = kotlin.Unit.f32464a
                return r6
            L5e:
                throw r6     // Catch: java.lang.Throwable -> L5f
            L5f:
                r0 = move-exception
                xr.a.a(r1, r6)
                throw r0
            */
            throw new UnsupportedOperationException("Method not decompiled: pn.f0.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public f0(MutableSharedFlow resultFlow) {
        Intrinsics.checkNotNullParameter(resultFlow, "resultFlow");
        this.f46239d = resultFlow;
        this.f46241i = CollectionsKt.l();
        this.f46242o = CollectionsKt.l();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x0076  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x00af  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x00da  */
    /* JADX WARN: Removed duplicated region for block: B:36:0x00f0  */
    /* JADX WARN: Removed duplicated region for block: B:41:0x011a  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:31:0x00cd -> B:32:0x00d0). Please submit an issue!!! */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:39:0x010e -> B:40:0x0111). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object l(pn.j0 r13, kotlin.coroutines.Continuation r14) {
        /*
            Method dump skipped, instructions count: 290
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: pn.f0.l(pn.j0, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Type inference failed for: r10v10, types: [pn.d0, T] */
    /* JADX WARN: Type inference failed for: r10v11, types: [T, pn.t0$c] */
    /* JADX WARN: Type inference failed for: r10v14, types: [T, pn.h0] */
    /* JADX WARN: Type inference failed for: r10v18, types: [pn.g, T] */
    /* JADX WARN: Type inference failed for: r10v7, types: [T, pn.i0] */
    private static final void o(Ref.BooleanRef booleanRef, Ref.ObjectRef objectRef, Ref.ObjectRef objectRef2, Ref.ObjectRef objectRef3, Ref.ObjectRef objectRef4, Ref.BooleanRef booleanRef2, Ref.ObjectRef objectRef5, qn.a aVar, boolean z10) {
        a.b bVar = a.b.f47975a;
        if (!Intrinsics.areEqual(aVar, bVar) && z10) {
            booleanRef.element = true;
        }
        if (aVar instanceof a.C0578a) {
            if (objectRef.element == 0) {
                objectRef.element = ((a.C0578a) aVar).a();
            }
        } else if (aVar instanceof a.d) {
            objectRef2.element = ((a.d) aVar).a();
        } else if (aVar instanceof a.c) {
            a.c cVar = (a.c) aVar;
            o(booleanRef, objectRef, objectRef2, objectRef3, objectRef4, booleanRef2, objectRef5, cVar.a(), z10);
            objectRef3.element = cVar.b();
        } else if (aVar instanceof a.f) {
            objectRef4.element = ((a.f) aVar).a();
        } else if (Intrinsics.areEqual(aVar, bVar)) {
            booleanRef2.element = true;
        } else if (aVar instanceof a.e) {
            objectRef5.element = ((a.e) aVar).a();
        } else {
            throw new lr.p();
        }
    }

    @Override // sn.a
    public void a(Rect rect, Rect previewRect) {
        Intrinsics.checkNotNullParameter(rect, "rect");
        Intrinsics.checkNotNullParameter(previewRect, "previewRect");
        this.f46243p = new sn.c(rect, previewRect);
    }

    @Override // ms.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f46239d.collect(flowCollector, continuation);
    }

    @Override // rn.b
    public void f(Image image, int i10) {
        Intrinsics.checkNotNullParameter(image, "image");
        js.h.b(null, new c(image, this, i10, null), 1, null);
    }

    @Override // androidx.camera.core.f.a
    public void g(androidx.camera.core.n imageProxy) {
        Intrinsics.checkNotNullParameter(imageProxy, "imageProxy");
        js.h.b(null, new b(imageProxy, this, null), 1, null);
    }

    public final void m(t0.c side, List rules, List passiveAnalyzers) {
        qn.e nVar;
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(rules, "rules");
        Intrinsics.checkNotNullParameter(passiveAnalyzers, "passiveAnalyzers");
        this.f46240e = side;
        List<e> list = rules;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (e eVar : list) {
            if (eVar instanceof e.a) {
                nVar = new qn.d();
            } else if (eVar instanceof e.b) {
                nVar = new qn.f(new qn.i(), new qn.d());
            } else if (eVar instanceof e.c) {
                nVar = new qn.i();
            } else if (eVar instanceof e.d) {
                nVar = new qn.l();
            } else if (eVar instanceof e.C0562e) {
                nVar = new qn.n();
            } else {
                throw new lr.p();
            }
            arrayList.add(nVar);
        }
        this.f46241i = arrayList;
        this.f46242o = passiveAnalyzers;
    }

    /* JADX WARN: Type inference failed for: r4v0, types: [T, pn.t0$c] */
    public final Object n(j0 imageToAnalyze, List analyzerResults) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(imageToAnalyze, "imageToAnalyze");
        Intrinsics.checkNotNullParameter(analyzerResults, "analyzerResults");
        if (analyzerResults.isEmpty()) {
            Result.a aVar = Result.f32461e;
            return Result.b(kotlin.c.a(new b.c()));
        }
        Ref.BooleanRef booleanRef = new Ref.BooleanRef();
        Ref.BooleanRef booleanRef2 = new Ref.BooleanRef();
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = this.f46240e;
        Ref.ObjectRef objectRef2 = new Ref.ObjectRef();
        Ref.ObjectRef objectRef3 = new Ref.ObjectRef();
        Ref.ObjectRef objectRef4 = new Ref.ObjectRef();
        Ref.ObjectRef objectRef5 = new Ref.ObjectRef();
        Iterator it = analyzerResults.iterator();
        Throwable th3 = null;
        loop0: while (true) {
            th2 = th3;
            while (it.hasNext()) {
                pn.b bVar = (pn.b) it.next();
                Object a10 = bVar.a();
                if (Result.h(a10)) {
                    o(booleanRef, objectRef3, objectRef2, objectRef, objectRef4, booleanRef2, objectRef5, (qn.a) a10, bVar.b());
                }
                th3 = Result.e(a10);
                if (th3 == null || th2 != null || !bVar.b()) {
                }
            }
            booleanRef2.element = true;
        }
        if (booleanRef2.element) {
            if (th2 != null) {
                Result.a aVar2 = Result.f32461e;
                return Result.b(kotlin.c.a(th2));
            }
            Result.a aVar3 = Result.f32461e;
            return Result.b(new t0.a((i0) objectRef5.element));
        } else if (!booleanRef.element) {
            Result.a aVar4 = Result.f32461e;
            return Result.b(new t0.a((i0) objectRef5.element));
        } else {
            t0.c cVar = (t0.c) objectRef.element;
            if (cVar == null) {
                Result.a aVar5 = Result.f32461e;
                return Result.b(new t0.a((i0) objectRef5.element));
            }
            Bitmap e10 = imageToAnalyze.e();
            if (e10 == null) {
                Result.a aVar6 = Result.f32461e;
                return Result.b(new t0.a((i0) objectRef5.element));
            }
            Result.a aVar7 = Result.f32461e;
            return Result.b(new t0.b(cVar, e10, (h0) objectRef2.element, (g) objectRef3.element, (d0) objectRef4.element, (i0) objectRef5.element));
        }
    }
}
