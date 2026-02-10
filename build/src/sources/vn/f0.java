package vn;

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
import vn.e;
import vn.t0;
import wn.a;
import wn.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 implements yn.a, f.a, ss.a0, xn.b {

    /* renamed from: d  reason: collision with root package name */
    private final MutableSharedFlow f52609d;

    /* renamed from: e  reason: collision with root package name */
    private t0.c f52610e;

    /* renamed from: i  reason: collision with root package name */
    private List f52611i;

    /* renamed from: o  reason: collision with root package name */
    private List f52612o;

    /* renamed from: p  reason: collision with root package name */
    private yn.c f52613p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f52614d;

        /* renamed from: e  reason: collision with root package name */
        Object f52615e;

        /* renamed from: i  reason: collision with root package name */
        Object f52616i;

        /* renamed from: o  reason: collision with root package name */
        Object f52617o;

        /* renamed from: p  reason: collision with root package name */
        Object f52618p;

        /* renamed from: q  reason: collision with root package name */
        Object f52619q;

        /* renamed from: r  reason: collision with root package name */
        /* synthetic */ Object f52620r;

        /* renamed from: t  reason: collision with root package name */
        int f52622t;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f52620r = obj;
            this.f52622t |= Integer.MIN_VALUE;
            Object l10 = f0.this.l(null, this);
            if (l10 == xr.b.f()) {
                return l10;
            }
            return Result.a(l10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f52623d;

        /* renamed from: e  reason: collision with root package name */
        int f52624e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ androidx.camera.core.n f52625i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f0 f52626o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(androidx.camera.core.n nVar, f0 f0Var, Continuation continuation) {
            super(2, continuation);
            this.f52625i = nVar;
            this.f52626o = f0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f52625i, this.f52626o, continuation);
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
                java.lang.Object r0 = xr.b.f()
                int r1 = r6.f52624e
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
                java.lang.Object r1 = r6.f52623d
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
                androidx.camera.core.n r1 = r6.f52625i
                vn.f0 r7 = r6.f52626o
                vn.j0 r5 = vn.m0.e(r1)     // Catch: java.lang.Throwable -> L29
                if (r5 != 0) goto L3e
                kotlin.Unit r7 = kotlin.Unit.f31765a     // Catch: java.lang.Throwable -> L29
                ds.a.a(r1, r4)
                return r7
            L3e:
                r6.f52623d = r1     // Catch: java.lang.Throwable -> L29
                r6.f52624e = r3     // Catch: java.lang.Throwable -> L29
                java.lang.Object r7 = vn.f0.j(r7, r5, r6)     // Catch: java.lang.Throwable -> L29
                if (r7 != r0) goto L49
                goto L60
            L49:
                ds.a.a(r1, r4)
                vn.f0 r1 = r6.f52626o
                kotlinx.coroutines.flow.MutableSharedFlow r1 = vn.f0.k(r1)
                kotlin.Result r7 = kotlin.Result.a(r7)
                r6.f52623d = r4
                r6.f52624e = r2
                java.lang.Object r7 = r1.emit(r7, r6)
                if (r7 != r0) goto L61
            L60:
                return r0
            L61:
                kotlin.Unit r7 = kotlin.Unit.f31765a
                return r7
            L64:
                throw r7     // Catch: java.lang.Throwable -> L65
            L65:
                r0 = move-exception
                ds.a.a(r1, r7)
                throw r0
            */
            throw new UnsupportedOperationException("Method not decompiled: vn.f0.b.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f52627d;

        /* renamed from: e  reason: collision with root package name */
        int f52628e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Image f52629i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f0 f52630o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ int f52631p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Image image, f0 f0Var, int i10, Continuation continuation) {
            super(2, continuation);
            this.f52629i = image;
            this.f52630o = f0Var;
            this.f52631p = i10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f52629i, this.f52630o, this.f52631p, continuation);
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
                java.lang.Object r0 = xr.b.f()
                int r1 = r5.f52628e
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
                java.lang.Object r1 = r5.f52627d
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
                android.media.Image r1 = r5.f52629i
                vn.f0 r6 = r5.f52630o
                int r4 = r5.f52631p
                vn.j0 r4 = vn.m0.d(r1, r4)     // Catch: java.lang.Throwable -> L28
                r5.f52627d = r1     // Catch: java.lang.Throwable -> L28
                r5.f52628e = r3     // Catch: java.lang.Throwable -> L28
                java.lang.Object r6 = vn.f0.j(r6, r4, r5)     // Catch: java.lang.Throwable -> L28
                if (r6 != r0) goto L42
                goto L5a
            L42:
                r3 = 0
                ds.a.a(r1, r3)
                vn.f0 r1 = r5.f52630o
                kotlinx.coroutines.flow.MutableSharedFlow r1 = vn.f0.k(r1)
                kotlin.Result r6 = kotlin.Result.a(r6)
                r5.f52627d = r3
                r5.f52628e = r2
                java.lang.Object r6 = r1.emit(r6, r5)
                if (r6 != r0) goto L5b
            L5a:
                return r0
            L5b:
                kotlin.Unit r6 = kotlin.Unit.f31765a
                return r6
            L5e:
                throw r6     // Catch: java.lang.Throwable -> L5f
            L5f:
                r0 = move-exception
                ds.a.a(r1, r6)
                throw r0
            */
            throw new UnsupportedOperationException("Method not decompiled: vn.f0.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public f0(MutableSharedFlow resultFlow) {
        Intrinsics.checkNotNullParameter(resultFlow, "resultFlow");
        this.f52609d = resultFlow;
        this.f52611i = CollectionsKt.l();
        this.f52612o = CollectionsKt.l();
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
    public final java.lang.Object l(vn.j0 r13, kotlin.coroutines.Continuation r14) {
        /*
            Method dump skipped, instructions count: 290
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: vn.f0.l(vn.j0, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Type inference failed for: r10v10, types: [vn.d0, T] */
    /* JADX WARN: Type inference failed for: r10v11, types: [vn.t0$c, T] */
    /* JADX WARN: Type inference failed for: r10v14, types: [T, vn.h0] */
    /* JADX WARN: Type inference failed for: r10v18, types: [T, vn.g] */
    /* JADX WARN: Type inference failed for: r10v7, types: [T, vn.i0] */
    private static final void o(Ref.BooleanRef booleanRef, Ref.ObjectRef objectRef, Ref.ObjectRef objectRef2, Ref.ObjectRef objectRef3, Ref.ObjectRef objectRef4, Ref.BooleanRef booleanRef2, Ref.ObjectRef objectRef5, wn.a aVar, boolean z10) {
        a.b bVar = a.b.f53845a;
        if (!Intrinsics.areEqual(aVar, bVar) && z10) {
            booleanRef.element = true;
        }
        if (aVar instanceof a.C0750a) {
            if (objectRef.element == 0) {
                objectRef.element = ((a.C0750a) aVar).a();
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
            throw new rr.p();
        }
    }

    @Override // yn.a
    public void a(Rect rect, Rect previewRect) {
        Intrinsics.checkNotNullParameter(rect, "rect");
        Intrinsics.checkNotNullParameter(previewRect, "previewRect");
        this.f52613p = new yn.c(rect, previewRect);
    }

    @Override // ss.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f52609d.collect(flowCollector, continuation);
    }

    @Override // xn.b
    public void e(Image image, int i10) {
        Intrinsics.checkNotNullParameter(image, "image");
        ps.h.b(null, new c(image, this, i10, null), 1, null);
    }

    @Override // androidx.camera.core.f.a
    public void f(androidx.camera.core.n imageProxy) {
        Intrinsics.checkNotNullParameter(imageProxy, "imageProxy");
        ps.h.b(null, new b(imageProxy, this, null), 1, null);
    }

    public final void m(t0.c side, List rules, List passiveAnalyzers) {
        wn.e nVar;
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(rules, "rules");
        Intrinsics.checkNotNullParameter(passiveAnalyzers, "passiveAnalyzers");
        this.f52610e = side;
        List<e> list = rules;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (e eVar : list) {
            if (eVar instanceof e.a) {
                nVar = new wn.d();
            } else if (eVar instanceof e.b) {
                nVar = new wn.f(new wn.i(), new wn.d());
            } else if (eVar instanceof e.c) {
                nVar = new wn.i();
            } else if (eVar instanceof e.d) {
                nVar = new wn.l();
            } else if (eVar instanceof e.C0725e) {
                nVar = new wn.n();
            } else {
                throw new rr.p();
            }
            arrayList.add(nVar);
        }
        this.f52611i = arrayList;
        this.f52612o = passiveAnalyzers;
    }

    /* JADX WARN: Type inference failed for: r4v0, types: [vn.t0$c, T] */
    public final Object n(j0 imageToAnalyze, List analyzerResults) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(imageToAnalyze, "imageToAnalyze");
        Intrinsics.checkNotNullParameter(analyzerResults, "analyzerResults");
        if (analyzerResults.isEmpty()) {
            Result.a aVar = Result.f31762e;
            return Result.b(kotlin.c.a(new b.c()));
        }
        Ref.BooleanRef booleanRef = new Ref.BooleanRef();
        Ref.BooleanRef booleanRef2 = new Ref.BooleanRef();
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = this.f52610e;
        Ref.ObjectRef objectRef2 = new Ref.ObjectRef();
        Ref.ObjectRef objectRef3 = new Ref.ObjectRef();
        Ref.ObjectRef objectRef4 = new Ref.ObjectRef();
        Ref.ObjectRef objectRef5 = new Ref.ObjectRef();
        Iterator it = analyzerResults.iterator();
        Throwable th3 = null;
        loop0: while (true) {
            th2 = th3;
            while (it.hasNext()) {
                vn.b bVar = (vn.b) it.next();
                Object a10 = bVar.a();
                if (Result.h(a10)) {
                    o(booleanRef, objectRef3, objectRef2, objectRef, objectRef4, booleanRef2, objectRef5, (wn.a) a10, bVar.b());
                }
                th3 = Result.e(a10);
                if (th3 == null || th2 != null || !bVar.b()) {
                }
            }
            booleanRef2.element = true;
        }
        if (booleanRef2.element) {
            if (th2 != null) {
                Result.a aVar2 = Result.f31762e;
                return Result.b(kotlin.c.a(th2));
            }
            Result.a aVar3 = Result.f31762e;
            return Result.b(new t0.a((i0) objectRef5.element));
        } else if (!booleanRef.element) {
            Result.a aVar4 = Result.f31762e;
            return Result.b(new t0.a((i0) objectRef5.element));
        } else {
            t0.c cVar = (t0.c) objectRef.element;
            if (cVar == null) {
                Result.a aVar5 = Result.f31762e;
                return Result.b(new t0.a((i0) objectRef5.element));
            }
            Bitmap e10 = imageToAnalyze.e();
            if (e10 == null) {
                Result.a aVar6 = Result.f31762e;
                return Result.b(new t0.a((i0) objectRef5.element));
            }
            Result.a aVar7 = Result.f31762e;
            return Result.b(new t0.b(cVar, e10, (h0) objectRef2.element, (g) objectRef3.element, (d0) objectRef4.element, (i0) objectRef5.element));
        }
    }
}
