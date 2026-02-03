package com.withpersona.sdk2.inquiry.document.network;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import ks.g;
import um.o;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\t\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\u0011\fB!\b\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0003¢\u0006\u0004\b\b\u0010\tJ\u001b\u0010\f\u001a\u00020\u000b2\n\u0010\n\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\f\u0010\rJ\u0015\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00020\u000eH\u0016¢\u0006\u0004\b\u000f\u0010\u0010R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0011\u0010\u0012R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0013\u0010\u0014R\u0017\u0010\u0007\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b\u0015\u0010\u0012\u001a\u0004\b\u0015\u0010\u0016¨\u0006\u0017"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/c;", "Lum/o;", "Lcom/withpersona/sdk2/inquiry/document/network/c$b;", "", "sessionToken", "Lyn/b;", "service", "documentId", "<init>", "(Ljava/lang/String;Lyn/b;Ljava/lang/String;)V", "otherWorker", "", "a", "(Lum/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Ljava/lang/String;", "c", "Lyn/b;", "d", "()Ljava/lang/String;", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements o<b> {

    /* renamed from: b  reason: collision with root package name */
    private final String f19199b;

    /* renamed from: c  reason: collision with root package name */
    private final yn.b f19200c;

    /* renamed from: d  reason: collision with root package name */
    private final String f19201d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final yn.b f19202a;

        public a(yn.b service) {
            Intrinsics.checkNotNullParameter(service, "service");
            this.f19202a = service;
        }

        public final c a(String sessionToken, String documentId) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(documentId, "documentId");
            return new c(sessionToken, this.f19202a, documentId, null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f19203a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f19203a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f19203a;
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.document.network.c$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0240b extends b {

            /* renamed from: a  reason: collision with root package name */
            private final List f19204a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0240b(List documents) {
                super(null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                this.f19204a = documents;
            }

            public final List a() {
                return this.f19204a;
            }
        }

        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* renamed from: com.withpersona.sdk2.inquiry.document.network.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0241c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f19205d;

        /* renamed from: e  reason: collision with root package name */
        int f19206e;

        /* renamed from: i  reason: collision with root package name */
        private /* synthetic */ Object f19207i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.document.network.c$c$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f19209d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ c f19210e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(c cVar, Continuation continuation) {
                super(1, continuation);
                this.f19210e = cVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f19210e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = pr.b.f();
                int i10 = this.f19209d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                yn.b bVar = this.f19210e.f19200c;
                String str = this.f19210e.f19199b;
                String d10 = this.f19210e.d();
                this.f19209d = 1;
                Object b10 = bVar.b(str, d10, this);
                if (b10 == f10) {
                    return f10;
                }
                return b10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        C0241c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            C0241c c0241c = new C0241c(continuation);
            c0241c.f19207i = obj;
            return c0241c;
        }

        /* JADX WARN: Code restructure failed: missing block: B:14:0x0052, code lost:
            if (r5 == r0) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:37:0x00c4, code lost:
            if (r1.emit(r3, r14) == r0) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:39:0x00c7, code lost:
            r3 = r1;
            r1 = r5;
         */
        /* JADX WARN: Code restructure failed: missing block: B:42:0x00e8, code lost:
            if (r1.emit(r4, r14) == r0) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:47:0x0105, code lost:
            if (r1.emit(r4, r14) == r0) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:48:0x0107, code lost:
            return r0;
         */
        /* JADX WARN: Removed duplicated region for block: B:46:0x00ef  */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r15) {
            /*
                Method dump skipped, instructions count: 267
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.document.network.c.C0241c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((C0241c) create(flowCollector, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public /* synthetic */ c(String str, yn.b bVar, String str2, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, bVar, str2);
    }

    @Override // um.o
    public boolean a(o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if (otherWorker instanceof c) {
            c cVar = (c) otherWorker;
            if (Intrinsics.areEqual(this.f19199b, cVar.f19199b) && Intrinsics.areEqual(this.f19201d, cVar.f19201d)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final String d() {
        return this.f19201d;
    }

    @Override // um.o
    public Flow run() {
        return g.v(new C0241c(null));
    }

    private c(String str, yn.b bVar, String str2) {
        this.f19199b = str;
        this.f19200c = bVar;
        this.f19201d = str2;
    }
}
