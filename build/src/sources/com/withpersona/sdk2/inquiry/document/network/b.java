package com.withpersona.sdk2.inquiry.document.network;

import bn.o;
import com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt;
import eo.d;
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
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import os.g0;
import os.m0;
import rp.i;
import rs.g;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\u0015\u0010B1\b\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\b\u0012\u0006\u0010\u000b\u001a\u00020\n¢\u0006\u0004\b\f\u0010\rJ\u001b\u0010\u0010\u001a\u00020\u000f2\n\u0010\u000e\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u0010\u0010\u0011J\u0015\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00020\u0012H\u0016¢\u0006\u0004\b\u0013\u0010\u0014R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u0014\u0010\u0007\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u0016R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u001bR\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u001dR\u0014\u0010!\u001a\u00020\u001e8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010 ¨\u0006\""}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/b;", "Lbn/o;", "Lcom/withpersona/sdk2/inquiry/document/network/b$b;", "", "sessionToken", "Lgo/b;", "service", "documentId", "Leo/d$a;", "localDocument", "Lrp/i;", "fileHelper", "<init>", "(Ljava/lang/String;Lgo/b;Ljava/lang/String;Leo/d$a;Lrp/i;)V", "otherWorker", "", "a", "(Lbn/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Ljava/lang/String;", "c", "Lgo/b;", "d", "e", "Leo/d$a;", "f", "Lrp/i;", "Lkotlinx/coroutines/CoroutineScope;", "g", "Lkotlinx/coroutines/CoroutineScope;", "serviceCoroutineScope", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements o<AbstractC0225b> {

    /* renamed from: b  reason: collision with root package name */
    private final String f18529b;

    /* renamed from: c  reason: collision with root package name */
    private final go.b f18530c;

    /* renamed from: d  reason: collision with root package name */
    private final String f18531d;

    /* renamed from: e  reason: collision with root package name */
    private final d.a f18532e;

    /* renamed from: f  reason: collision with root package name */
    private final i f18533f;

    /* renamed from: g  reason: collision with root package name */
    private final CoroutineScope f18534g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final go.b f18535a;

        /* renamed from: b  reason: collision with root package name */
        private final i f18536b;

        public a(go.b service, i fileHelper) {
            Intrinsics.checkNotNullParameter(service, "service");
            Intrinsics.checkNotNullParameter(fileHelper, "fileHelper");
            this.f18535a = service;
            this.f18536b = fileHelper;
        }

        public final b a(String sessionToken, String documentId, d.a localDocument) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(documentId, "documentId");
            Intrinsics.checkNotNullParameter(localDocument, "localDocument");
            return new b(sessionToken, this.f18535a, documentId, localDocument, this.f18536b, null);
        }
    }

    /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class AbstractC0225b {

        /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends AbstractC0225b {

            /* renamed from: a  reason: collision with root package name */
            private final GenericFileUploadErrorResponse.DocumentErrorResponse f18537a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(GenericFileUploadErrorResponse.DocumentErrorResponse cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f18537a = cause;
            }

            public final GenericFileUploadErrorResponse.DocumentErrorResponse a() {
                return this.f18537a;
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0226b extends AbstractC0225b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f18538a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0226b(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f18538a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f18538a;
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$b$c */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends AbstractC0225b {

            /* renamed from: a  reason: collision with root package name */
            private final int f18539a;

            public c(int i10) {
                super(null);
                this.f18539a = i10;
            }

            public final int a() {
                return this.f18539a;
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$b$d */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends AbstractC0225b {

            /* renamed from: a  reason: collision with root package name */
            private final d.a f18540a;

            /* renamed from: b  reason: collision with root package name */
            private final d.b f18541b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public d(d.a oldLocalDocument, d.b newRemoteDocument) {
                super(null);
                Intrinsics.checkNotNullParameter(oldLocalDocument, "oldLocalDocument");
                Intrinsics.checkNotNullParameter(newRemoteDocument, "newRemoteDocument");
                this.f18540a = oldLocalDocument;
                this.f18541b = newRemoteDocument;
            }

            public final d.b a() {
                return this.f18541b;
            }

            public final d.a b() {
                return this.f18540a;
            }
        }

        public /* synthetic */ AbstractC0225b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private AbstractC0225b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18542d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f18543e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f18545d;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$c$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0227a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f18546d;

                /* renamed from: e  reason: collision with root package name */
                /* synthetic */ Object f18547e;

                /* renamed from: o  reason: collision with root package name */
                int f18549o;

                C0227a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f18547e = obj;
                    this.f18549o |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            a(FlowCollector flowCollector) {
                this.f18545d = flowCollector;
            }

            /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
            /* JADX WARN: Removed duplicated region for block: B:14:0x0035  */
            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object emit(com.withpersona.sdk2.inquiry.document.network.b.AbstractC0225b r5, kotlin.coroutines.Continuation r6) {
                /*
                    r4 = this;
                    boolean r0 = r6 instanceof com.withpersona.sdk2.inquiry.document.network.b.c.a.C0227a
                    if (r0 == 0) goto L13
                    r0 = r6
                    com.withpersona.sdk2.inquiry.document.network.b$c$a$a r0 = (com.withpersona.sdk2.inquiry.document.network.b.c.a.C0227a) r0
                    int r1 = r0.f18549o
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f18549o = r1
                    goto L18
                L13:
                    com.withpersona.sdk2.inquiry.document.network.b$c$a$a r0 = new com.withpersona.sdk2.inquiry.document.network.b$c$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f18547e
                    java.lang.Object r1 = wr.b.f()
                    int r2 = r0.f18549o
                    r3 = 1
                    if (r2 == 0) goto L35
                    if (r2 != r3) goto L2d
                    java.lang.Object r5 = r0.f18546d
                    com.withpersona.sdk2.inquiry.document.network.b$b r5 = (com.withpersona.sdk2.inquiry.document.network.b.AbstractC0225b) r5
                    kotlin.c.b(r6)
                    goto L45
                L2d:
                    java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                    java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                    r5.<init>(r6)
                    throw r5
                L35:
                    kotlin.c.b(r6)
                    kotlinx.coroutines.flow.FlowCollector r6 = r4.f18545d
                    r0.f18546d = r5
                    r0.f18549o = r3
                    java.lang.Object r6 = r6.emit(r5, r0)
                    if (r6 != r1) goto L45
                    return r1
                L45:
                    boolean r6 = r5 instanceof com.withpersona.sdk2.inquiry.document.network.b.AbstractC0225b.a
                    if (r6 != 0) goto L4d
                    boolean r5 = r5 instanceof com.withpersona.sdk2.inquiry.document.network.b.AbstractC0225b.C0226b
                    if (r5 == 0) goto L55
                L4d:
                    kotlin.coroutines.CoroutineContext r5 = r0.getContext()
                    r6 = 0
                    kotlinx.coroutines.z.e(r5, r6, r3, r6)
                L55:
                    kotlin.Unit r5 = kotlin.Unit.f32008a
                    return r5
                */
                throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.document.network.b.c.a.emit(com.withpersona.sdk2.inquiry.document.network.b$b, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$c$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0228b extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f18550d;

            /* renamed from: e  reason: collision with root package name */
            private /* synthetic */ Object f18551e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ go.d f18552i;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$c$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a extends k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f18553d;

                /* renamed from: e  reason: collision with root package name */
                /* synthetic */ int f18554e;

                a(Continuation continuation) {
                    super(2, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    a aVar = new a(continuation);
                    aVar.f18554e = ((Number) obj).intValue();
                    return aVar;
                }

                public final Object invoke(int i10, Continuation continuation) {
                    return ((a) create(Integer.valueOf(i10), continuation)).invokeSuspend(Unit.f32008a);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    boolean z10;
                    wr.b.f();
                    if (this.f18553d == 0) {
                        kotlin.c.b(obj);
                        if (this.f18554e < 100) {
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
            public static final class C0229b implements FlowCollector {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ FlowCollector f18555d;

                C0229b(FlowCollector flowCollector) {
                    this.f18555d = flowCollector;
                }

                public final Object a(int i10, Continuation continuation) {
                    Object emit = this.f18555d.emit(new AbstractC0225b.c(i10), continuation);
                    if (emit == wr.b.f()) {
                        return emit;
                    }
                    return Unit.f32008a;
                }

                @Override // kotlinx.coroutines.flow.FlowCollector
                public /* bridge */ /* synthetic */ Object emit(Object obj, Continuation continuation) {
                    return a(((Number) obj).intValue(), continuation);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0228b(go.d dVar, Continuation continuation) {
                super(2, continuation);
                this.f18552i = dVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                C0228b c0228b = new C0228b(this.f18552i, continuation);
                c0228b.f18551e = obj;
                return c0228b;
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
                    java.lang.Object r0 = wr.b.f()
                    int r1 = r6.f18550d
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
                    java.lang.Object r1 = r6.f18551e
                    kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                    kotlin.c.b(r7)
                    goto L4a
                L23:
                    kotlin.c.b(r7)
                    java.lang.Object r7 = r6.f18551e
                    r1 = r7
                    kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                    go.d r7 = r6.f18552i
                    rs.j0 r7 = r7.a()
                    com.withpersona.sdk2.inquiry.document.network.b$c$b$a r5 = new com.withpersona.sdk2.inquiry.document.network.b$c$b$a
                    r5.<init>(r2)
                    kotlinx.coroutines.flow.Flow r7 = rs.g.H(r7, r5)
                    com.withpersona.sdk2.inquiry.document.network.b$c$b$b r5 = new com.withpersona.sdk2.inquiry.document.network.b$c$b$b
                    r5.<init>(r1)
                    r6.f18551e = r1
                    r6.f18550d = r4
                    java.lang.Object r7 = r7.collect(r5, r6)
                    if (r7 != r0) goto L4a
                    goto L5b
                L4a:
                    com.withpersona.sdk2.inquiry.document.network.b$b$c r7 = new com.withpersona.sdk2.inquiry.document.network.b$b$c
                    r4 = 100
                    r7.<init>(r4)
                    r6.f18551e = r2
                    r6.f18550d = r3
                    java.lang.Object r7 = r1.emit(r7, r6)
                    if (r7 != r0) goto L5c
                L5b:
                    return r0
                L5c:
                    kotlin.Unit r7 = kotlin.Unit.f32008a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.document.network.b.c.C0228b.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
                return ((C0228b) create(flowCollector, continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0230c extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f18556d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f18557e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ go.d f18558i;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: com.withpersona.sdk2.inquiry.document.network.b$c$c$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a extends k implements Function1 {

                /* renamed from: d  reason: collision with root package name */
                int f18559d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ b f18560e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ go.d f18561i;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                a(b bVar, go.d dVar, Continuation continuation) {
                    super(1, continuation);
                    this.f18560e = bVar;
                    this.f18561i = dVar;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Continuation continuation) {
                    return new a(this.f18560e, this.f18561i, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = wr.b.f();
                    int i10 = this.f18559d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                            return obj;
                        }
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                    kotlin.c.b(obj);
                    go.b bVar = this.f18560e.f18530c;
                    String str = this.f18560e.f18529b;
                    MultipartBody.b.a aVar = MultipartBody.b.f42896c;
                    MultipartBody.b b10 = aVar.b("data[type]", "document-file");
                    MultipartBody.b b11 = aVar.b("data[attributes][document-id]", this.f18560e.f18531d);
                    MultipartBody.b b12 = aVar.b("data[attributes][capture-method]", this.f18560e.f18532e.d().d());
                    MultipartBody.b c10 = aVar.c("data[attributes][originals][]", this.f18560e.f18532e.c(), this.f18561i);
                    String name = new File(this.f18560e.f18532e.c()).getName();
                    Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                    List<MultipartBody.b> o10 = CollectionsKt.o(b10, b11, b12, c10, aVar.b("data[attributes][name]", name));
                    this.f18559d = 1;
                    Object c11 = bVar.c(str, o10, this);
                    if (c11 == f10) {
                        return f10;
                    }
                    return c11;
                }

                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Continuation continuation) {
                    return ((a) create(continuation)).invokeSuspend(Unit.f32008a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0230c(b bVar, go.d dVar, Continuation continuation) {
                super(2, continuation);
                this.f18557e = bVar;
                this.f18558i = dVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0230c(this.f18557e, this.f18558i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = wr.b.f();
                int i10 = this.f18556d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                a aVar = new a(this.f18557e, this.f18558i, null);
                this.f18556d = 1;
                Object enqueueVerificationRequestWithRetry = NetworkUtilsKt.enqueueVerificationRequestWithRetry(aVar, this);
                if (enqueueVerificationRequestWithRetry == f10) {
                    return f10;
                }
                return enqueueVerificationRequestWithRetry;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0230c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f18562d;

            /* renamed from: e  reason: collision with root package name */
            int f18563e;

            /* renamed from: i  reason: collision with root package name */
            private /* synthetic */ Object f18564i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ g0 f18565o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ b f18566p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            d(g0 g0Var, b bVar, Continuation continuation) {
                super(2, continuation);
                this.f18565o = g0Var;
                this.f18566p = bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                d dVar = new d(this.f18565o, this.f18566p, continuation);
                dVar.f18564i = obj;
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
                return ((d) create(flowCollector, continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            c cVar = new c(continuation);
            cVar.f18543e = obj;
            return cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            g0 b10;
            Object f10 = wr.b.f();
            int i10 = this.f18542d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                go.d dVar = new go.d(new File(b.this.f18532e.c()), MediaType.f42872e.c(b.this.f18533f.a(b.this.f18532e.c())));
                b10 = os.i.b(b.this.f18534g, m0.b(), null, new C0230c(b.this, dVar, null), 2, null);
                Flow B = g.B(g.v(new d(b10, b.this, null)), g.v(new C0228b(dVar, null)));
                a aVar = new a((FlowCollector) this.f18543e);
                this.f18542d = 1;
                if (B.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((c) create(flowCollector, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    public /* synthetic */ b(String str, go.b bVar, String str2, d.a aVar, i iVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, bVar, str2, aVar, iVar);
    }

    @Override // bn.o
    public boolean a(o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if (otherWorker instanceof b) {
            b bVar = (b) otherWorker;
            if (Intrinsics.areEqual(this.f18529b, bVar.f18529b) && Intrinsics.areEqual(this.f18532e, bVar.f18532e)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // bn.o
    public Flow run() {
        return g.v(new c(null));
    }

    private b(String str, go.b bVar, String str2, d.a aVar, i iVar) {
        CompletableJob b10;
        this.f18529b = str;
        this.f18530c = bVar;
        this.f18531d = str2;
        this.f18532e = aVar;
        this.f18533f = iVar;
        CoroutineDispatcher a10 = m0.a();
        b10 = a0.b(null, 1, null);
        this.f18534g = kotlinx.coroutines.i.a(a10.Y0(b10));
    }
}
