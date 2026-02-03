package com.withpersona.sdk2.inquiry.document.network;

import com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt;
import hs.g0;
import hs.m0;
import java.io.File;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CompletableJob;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.a0;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import kp.i;
import ks.g;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import um.o;
import wn.d;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\u0015\u0010B1\b\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\b\u0012\u0006\u0010\u000b\u001a\u00020\n¢\u0006\u0004\b\f\u0010\rJ\u001b\u0010\u0010\u001a\u00020\u000f2\n\u0010\u000e\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u0010\u0010\u0011J\u0015\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00020\u0012H\u0016¢\u0006\u0004\b\u0013\u0010\u0014R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u0014\u0010\u0007\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u0016R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u001bR\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u001dR\u0014\u0010!\u001a\u00020\u001e8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010 ¨\u0006\""}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/b;", "Lum/o;", "Lcom/withpersona/sdk2/inquiry/document/network/b$b;", "", "sessionToken", "Lyn/b;", "service", "documentId", "Lwn/d$a;", "localDocument", "Lkp/i;", "fileHelper", "<init>", "(Ljava/lang/String;Lyn/b;Ljava/lang/String;Lwn/d$a;Lkp/i;)V", "otherWorker", "", "a", "(Lum/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Ljava/lang/String;", "c", "Lyn/b;", "d", "e", "Lwn/d$a;", "f", "Lkp/i;", "Lkotlinx/coroutines/CoroutineScope;", "g", "Lkotlinx/coroutines/CoroutineScope;", "serviceCoroutineScope", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements o<AbstractC0234b> {

    /* renamed from: b  reason: collision with root package name */
    private final String f19161b;

    /* renamed from: c  reason: collision with root package name */
    private final yn.b f19162c;

    /* renamed from: d  reason: collision with root package name */
    private final String f19163d;

    /* renamed from: e  reason: collision with root package name */
    private final d.a f19164e;

    /* renamed from: f  reason: collision with root package name */
    private final i f19165f;

    /* renamed from: g  reason: collision with root package name */
    private final CoroutineScope f19166g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final yn.b f19167a;

        /* renamed from: b  reason: collision with root package name */
        private final i f19168b;

        public a(yn.b service, i fileHelper) {
            Intrinsics.checkNotNullParameter(service, "service");
            Intrinsics.checkNotNullParameter(fileHelper, "fileHelper");
            this.f19167a = service;
            this.f19168b = fileHelper;
        }

        public final b a(String sessionToken, String documentId, d.a localDocument) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(documentId, "documentId");
            Intrinsics.checkNotNullParameter(localDocument, "localDocument");
            return new b(sessionToken, this.f19167a, documentId, localDocument, this.f19168b, null);
        }
    }

    /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class AbstractC0234b {

        /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends AbstractC0234b {

            /* renamed from: a  reason: collision with root package name */
            private final GenericFileUploadErrorResponse.DocumentErrorResponse f19169a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(GenericFileUploadErrorResponse.DocumentErrorResponse cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f19169a = cause;
            }

            public final GenericFileUploadErrorResponse.DocumentErrorResponse a() {
                return this.f19169a;
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0235b extends AbstractC0234b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f19170a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0235b(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f19170a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f19170a;
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$b$c */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends AbstractC0234b {

            /* renamed from: a  reason: collision with root package name */
            private final int f19171a;

            public c(int i10) {
                super(null);
                this.f19171a = i10;
            }

            public final int a() {
                return this.f19171a;
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$b$d */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends AbstractC0234b {

            /* renamed from: a  reason: collision with root package name */
            private final d.a f19172a;

            /* renamed from: b  reason: collision with root package name */
            private final d.b f19173b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public d(d.a oldLocalDocument, d.b newRemoteDocument) {
                super(null);
                Intrinsics.checkNotNullParameter(oldLocalDocument, "oldLocalDocument");
                Intrinsics.checkNotNullParameter(newRemoteDocument, "newRemoteDocument");
                this.f19172a = oldLocalDocument;
                this.f19173b = newRemoteDocument;
            }

            public final d.b a() {
                return this.f19173b;
            }

            public final d.a b() {
                return this.f19172a;
            }
        }

        public /* synthetic */ AbstractC0234b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private AbstractC0234b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19174d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f19175e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f19177d;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$c$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0236a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f19178d;

                /* renamed from: e  reason: collision with root package name */
                /* synthetic */ Object f19179e;

                /* renamed from: o  reason: collision with root package name */
                int f19181o;

                C0236a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f19179e = obj;
                    this.f19181o |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            a(FlowCollector flowCollector) {
                this.f19177d = flowCollector;
            }

            /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
            /* JADX WARN: Removed duplicated region for block: B:14:0x0035  */
            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object emit(com.withpersona.sdk2.inquiry.document.network.b.AbstractC0234b r5, kotlin.coroutines.Continuation r6) {
                /*
                    r4 = this;
                    boolean r0 = r6 instanceof com.withpersona.sdk2.inquiry.document.network.b.c.a.C0236a
                    if (r0 == 0) goto L13
                    r0 = r6
                    com.withpersona.sdk2.inquiry.document.network.b$c$a$a r0 = (com.withpersona.sdk2.inquiry.document.network.b.c.a.C0236a) r0
                    int r1 = r0.f19181o
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f19181o = r1
                    goto L18
                L13:
                    com.withpersona.sdk2.inquiry.document.network.b$c$a$a r0 = new com.withpersona.sdk2.inquiry.document.network.b$c$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f19179e
                    java.lang.Object r1 = pr.b.f()
                    int r2 = r0.f19181o
                    r3 = 1
                    if (r2 == 0) goto L35
                    if (r2 != r3) goto L2d
                    java.lang.Object r5 = r0.f19178d
                    com.withpersona.sdk2.inquiry.document.network.b$b r5 = (com.withpersona.sdk2.inquiry.document.network.b.AbstractC0234b) r5
                    kotlin.c.b(r6)
                    goto L45
                L2d:
                    java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                    java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                    r5.<init>(r6)
                    throw r5
                L35:
                    kotlin.c.b(r6)
                    kotlinx.coroutines.flow.FlowCollector r6 = r4.f19177d
                    r0.f19178d = r5
                    r0.f19181o = r3
                    java.lang.Object r6 = r6.emit(r5, r0)
                    if (r6 != r1) goto L45
                    return r1
                L45:
                    boolean r6 = r5 instanceof com.withpersona.sdk2.inquiry.document.network.b.AbstractC0234b.a
                    if (r6 != 0) goto L4d
                    boolean r5 = r5 instanceof com.withpersona.sdk2.inquiry.document.network.b.AbstractC0234b.C0235b
                    if (r5 == 0) goto L55
                L4d:
                    kotlin.coroutines.CoroutineContext r5 = r0.getContext()
                    r6 = 0
                    kotlinx.coroutines.z.e(r5, r6, r3, r6)
                L55:
                    kotlin.Unit r5 = kotlin.Unit.f33074a
                    return r5
                */
                throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.document.network.b.c.a.emit(com.withpersona.sdk2.inquiry.document.network.b$b, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$c$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0237b extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f19182d;

            /* renamed from: e  reason: collision with root package name */
            private /* synthetic */ Object f19183e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ yn.d f19184i;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$c$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a extends k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f19185d;

                /* renamed from: e  reason: collision with root package name */
                /* synthetic */ int f19186e;

                a(Continuation continuation) {
                    super(2, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    a aVar = new a(continuation);
                    aVar.f19186e = ((Number) obj).intValue();
                    return aVar;
                }

                public final Object invoke(int i10, Continuation continuation) {
                    return ((a) create(Integer.valueOf(i10), continuation)).invokeSuspend(Unit.f33074a);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    boolean z10;
                    pr.b.f();
                    if (this.f19185d == 0) {
                        kotlin.c.b(obj);
                        if (this.f19186e < 100) {
                            z10 = true;
                        } else {
                            z10 = false;
                        }
                        return kotlin.coroutines.jvm.internal.b.a(z10);
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                    return invoke(((Number) obj).intValue(), (Continuation) obj2);
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$c$b$b  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0238b implements FlowCollector {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ FlowCollector f19187d;

                C0238b(FlowCollector flowCollector) {
                    this.f19187d = flowCollector;
                }

                public final Object a(int i10, Continuation continuation) {
                    Object emit = this.f19187d.emit(new AbstractC0234b.c(i10), continuation);
                    if (emit == pr.b.f()) {
                        return emit;
                    }
                    return Unit.f33074a;
                }

                @Override // kotlinx.coroutines.flow.FlowCollector
                public /* bridge */ /* synthetic */ Object emit(Object obj, Continuation continuation) {
                    return a(((Number) obj).intValue(), continuation);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0237b(yn.d dVar, Continuation continuation) {
                super(2, continuation);
                this.f19184i = dVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                C0237b c0237b = new C0237b(this.f19184i, continuation);
                c0237b.f19183e = obj;
                return c0237b;
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0047, code lost:
                if (r7.collect(r5, r6) == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:14:0x0059, code lost:
                if (r1.emit(r7, r6) == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:15:0x005b, code lost:
                return r0;
             */
            @Override // kotlin.coroutines.jvm.internal.a
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object invokeSuspend(java.lang.Object r7) {
                /*
                    r6 = this;
                    java.lang.Object r0 = pr.b.f()
                    int r1 = r6.f19182d
                    r2 = 0
                    r3 = 2
                    r4 = 1
                    if (r1 == 0) goto L23
                    if (r1 == r4) goto L1b
                    if (r1 != r3) goto L13
                    kotlin.c.b(r7)
                    goto L5c
                L13:
                    java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                    java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                    r7.<init>(r0)
                    throw r7
                L1b:
                    java.lang.Object r1 = r6.f19183e
                    kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                    kotlin.c.b(r7)
                    goto L4a
                L23:
                    kotlin.c.b(r7)
                    java.lang.Object r7 = r6.f19183e
                    r1 = r7
                    kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                    yn.d r7 = r6.f19184i
                    ks.j0 r7 = r7.a()
                    com.withpersona.sdk2.inquiry.document.network.b$c$b$a r5 = new com.withpersona.sdk2.inquiry.document.network.b$c$b$a
                    r5.<init>(r2)
                    kotlinx.coroutines.flow.Flow r7 = ks.g.H(r7, r5)
                    com.withpersona.sdk2.inquiry.document.network.b$c$b$b r5 = new com.withpersona.sdk2.inquiry.document.network.b$c$b$b
                    r5.<init>(r1)
                    r6.f19183e = r1
                    r6.f19182d = r4
                    java.lang.Object r7 = r7.collect(r5, r6)
                    if (r7 != r0) goto L4a
                    goto L5b
                L4a:
                    com.withpersona.sdk2.inquiry.document.network.b$b$c r7 = new com.withpersona.sdk2.inquiry.document.network.b$b$c
                    r4 = 100
                    r7.<init>(r4)
                    r6.f19183e = r2
                    r6.f19182d = r3
                    java.lang.Object r7 = r1.emit(r7, r6)
                    if (r7 != r0) goto L5c
                L5b:
                    return r0
                L5c:
                    kotlin.Unit r7 = kotlin.Unit.f33074a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.document.network.b.c.C0237b.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
                return ((C0237b) create(flowCollector, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0239c extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f19188d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f19189e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ yn.d f19190i;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$c$c$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a extends k implements Function1 {

                /* renamed from: d  reason: collision with root package name */
                int f19191d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ b f19192e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ yn.d f19193i;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                a(b bVar, yn.d dVar, Continuation continuation) {
                    super(1, continuation);
                    this.f19192e = bVar;
                    this.f19193i = dVar;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Continuation continuation) {
                    return new a(this.f19192e, this.f19193i, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = pr.b.f();
                    int i10 = this.f19191d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                            return obj;
                        }
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                    kotlin.c.b(obj);
                    yn.b bVar = this.f19192e.f19162c;
                    String str = this.f19192e.f19161b;
                    MultipartBody.b.a aVar = MultipartBody.b.f44237c;
                    MultipartBody.b b10 = aVar.b("data[type]", "document-file");
                    MultipartBody.b b11 = aVar.b("data[attributes][document-id]", this.f19192e.f19163d);
                    MultipartBody.b b12 = aVar.b("data[attributes][capture-method]", this.f19192e.f19164e.d().d());
                    MultipartBody.b c10 = aVar.c("data[attributes][originals][]", this.f19192e.f19164e.c(), this.f19193i);
                    String name = new File(this.f19192e.f19164e.c()).getName();
                    Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                    List<MultipartBody.b> o10 = CollectionsKt.o(b10, b11, b12, c10, aVar.b("data[attributes][name]", name));
                    this.f19191d = 1;
                    Object c11 = bVar.c(str, o10, this);
                    if (c11 == f10) {
                        return f10;
                    }
                    return c11;
                }

                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Continuation continuation) {
                    return ((a) create(continuation)).invokeSuspend(Unit.f33074a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0239c(b bVar, yn.d dVar, Continuation continuation) {
                super(2, continuation);
                this.f19189e = bVar;
                this.f19190i = dVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0239c(this.f19189e, this.f19190i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = pr.b.f();
                int i10 = this.f19188d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                a aVar = new a(this.f19189e, this.f19190i, null);
                this.f19188d = 1;
                Object enqueueVerificationRequestWithRetry = NetworkUtilsKt.enqueueVerificationRequestWithRetry(aVar, this);
                if (enqueueVerificationRequestWithRetry == f10) {
                    return f10;
                }
                return enqueueVerificationRequestWithRetry;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0239c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f19194d;

            /* renamed from: e  reason: collision with root package name */
            int f19195e;

            /* renamed from: i  reason: collision with root package name */
            private /* synthetic */ Object f19196i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ g0 f19197o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ b f19198p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            d(g0 g0Var, b bVar, Continuation continuation) {
                super(2, continuation);
                this.f19197o = g0Var;
                this.f19198p = bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                d dVar = new d(this.f19197o, this.f19198p, continuation);
                dVar.f19196i = obj;
                return dVar;
            }

            /* JADX WARN: Code restructure failed: missing block: B:28:0x00ac, code lost:
                if (r3.emit(r6, r10) == r0) goto L22;
             */
            /* JADX WARN: Code restructure failed: missing block: B:31:0x00ca, code lost:
                if (r3.emit(r11, r10) == r0) goto L22;
             */
            /* JADX WARN: Code restructure failed: missing block: B:46:0x013a, code lost:
                if (r3.emit(r4, r10) == r0) goto L22;
             */
            /* JADX WARN: Code restructure failed: missing block: B:49:0x0157, code lost:
                if (r3.emit(r11, r10) == r0) goto L22;
             */
            /* JADX WARN: Code restructure failed: missing block: B:54:0x017a, code lost:
                if (r3.emit(r11, r10) == r0) goto L22;
             */
            /* JADX WARN: Code restructure failed: missing block: B:57:0x018d, code lost:
                if (r3.emit(r4, r10) == r0) goto L22;
             */
            /* JADX WARN: Removed duplicated region for block: B:15:0x0052  */
            /* JADX WARN: Removed duplicated region for block: B:35:0x00d2  */
            /* JADX WARN: Removed duplicated region for block: B:45:0x011f  */
            /* JADX WARN: Removed duplicated region for block: B:48:0x013d  */
            @Override // kotlin.coroutines.jvm.internal.a
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object invokeSuspend(java.lang.Object r11) {
                /*
                    Method dump skipped, instructions count: 424
                    To view this dump add '--comments-level debug' option
                */
                throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.document.network.b.c.d.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
                return ((d) create(flowCollector, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            c cVar = new c(continuation);
            cVar.f19175e = obj;
            return cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            g0 b10;
            Object f10 = pr.b.f();
            int i10 = this.f19174d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                yn.d dVar = new yn.d(new File(b.this.f19164e.c()), MediaType.f44213e.c(b.this.f19165f.a(b.this.f19164e.c())));
                b10 = hs.i.b(b.this.f19166g, m0.b(), null, new C0239c(b.this, dVar, null), 2, null);
                Flow B = g.B(g.v(new d(b10, b.this, null)), g.v(new C0237b(dVar, null)));
                a aVar = new a((FlowCollector) this.f19175e);
                this.f19174d = 1;
                if (B.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((c) create(flowCollector, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public /* synthetic */ b(String str, yn.b bVar, String str2, d.a aVar, i iVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, bVar, str2, aVar, iVar);
    }

    @Override // um.o
    public boolean a(o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if (otherWorker instanceof b) {
            b bVar = (b) otherWorker;
            if (Intrinsics.areEqual(this.f19161b, bVar.f19161b) && Intrinsics.areEqual(this.f19164e, bVar.f19164e)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // um.o
    public Flow run() {
        return g.v(new c(null));
    }

    private b(String str, yn.b bVar, String str2, d.a aVar, i iVar) {
        CompletableJob b10;
        this.f19161b = str;
        this.f19162c = bVar;
        this.f19163d = str2;
        this.f19164e = aVar;
        this.f19165f = iVar;
        CoroutineDispatcher a10 = m0.a();
        b10 = a0.b(null, 1, null);
        this.f19166g = kotlinx.coroutines.i.a(a10.Z0(b10));
    }
}
