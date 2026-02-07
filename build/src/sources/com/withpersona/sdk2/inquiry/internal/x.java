package com.withpersona.sdk2.inquiry.internal;

import android.os.Parcel;
import android.os.Parcelable;
import bn.o;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import fq.k5;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import org.jetbrains.annotations.NotNull;
import uo.l2;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0016\b\u0000\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0003\u0017\u001b'BI\b\u0007\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0005\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0006\u0012\b\b\u0001\u0010\t\u001a\u00020\b\u0012\u0006\u0010\u000b\u001a\u00020\n\u0012\u0006\u0010\r\u001a\u00020\f\u0012\u0006\u0010\u000f\u001a\u00020\u000e¢\u0006\u0004\b\u0010\u0010\u0011J\u0015\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00020\u0012H\u0002¢\u0006\u0004\b\u0013\u0010\u0014J\u0015\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00020\u0012H\u0002¢\u0006\u0004\b\u0015\u0010\u0014J\u0015\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00020\u0012H\u0016¢\u0006\u0004\b\u0016\u0010\u0014R\u0017\u0010\u0004\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b\u0017\u0010\u0018\u001a\u0004\b\u0019\u0010\u001aR\u0017\u0010\u0005\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b\u001b\u0010\u0018\u001a\u0004\b\u001c\u0010\u001aR\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u001eR\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010 R\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\"R\u0014\u0010\r\u001a\u00020\f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010$R\u0014\u0010\u000f\u001a\u00020\u000e8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010&¨\u0006("}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/x;", "Lbn/o;", "Lcom/withpersona/sdk2/inquiry/internal/x$b;", "", "sessionToken", "inquiryId", "Lyp/g;", "inquirySessionConfig", "Lcom/withpersona/sdk2/inquiry/internal/x$c;", "transitionData", "Lap/r;", "service", "Lio/a;", "fallbackModeManager", "Luo/l2;", "uiStepSavedStateHelper", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lyp/g;Lcom/withpersona/sdk2/inquiry/internal/x$c;Lap/r;Lio/a;Luo/l2;)V", "Lkotlinx/coroutines/flow/Flow;", "l", "()Lkotlinx/coroutines/flow/Flow;", "k", "run", "b", "Ljava/lang/String;", "j", "()Ljava/lang/String;", "c", "i", "d", "Lyp/g;", "e", "Lcom/withpersona/sdk2/inquiry/internal/x$c;", "f", "Lap/r;", "g", "Lio/a;", "h", "Luo/l2;", "a", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements bn.o<b> {

    /* renamed from: b  reason: collision with root package name */
    private final String f19372b;

    /* renamed from: c  reason: collision with root package name */
    private final String f19373c;

    /* renamed from: d  reason: collision with root package name */
    private final yp.g f19374d;

    /* renamed from: e  reason: collision with root package name */
    private final c f19375e;

    /* renamed from: f  reason: collision with root package name */
    private final ap.r f19376f;

    /* renamed from: g  reason: collision with root package name */
    private final io.a f19377g;

    /* renamed from: h  reason: collision with root package name */
    private final l2 f19378h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        x a(String str, String str2, yp.g gVar, c cVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f19379a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f19379a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f19379a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof a) && Intrinsics.areEqual(this.f19379a, ((a) obj).f19379a);
            }

            public int hashCode() {
                return this.f19379a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f19379a;
                return "Error(cause=" + internalErrorInfo + ")";
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.internal.x$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0251b extends b {

            /* renamed from: a  reason: collision with root package name */
            private final l f19380a;

            public C0251b(l lVar) {
                super(null);
                this.f19380a = lVar;
            }

            public final l a() {
                return this.f19380a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof C0251b) && Intrinsics.areEqual(this.f19380a, ((C0251b) obj).f19380a);
            }

            public int hashCode() {
                l lVar = this.f19380a;
                if (lVar == null) {
                    return 0;
                }
                return lVar.hashCode();
            }

            public String toString() {
                l lVar = this.f19380a;
                return "Success(nextState=" + lVar + ")";
            }
        }

        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final k5 f19381d;

        /* renamed from: e  reason: collision with root package name */
        private final Map f19382e;

        /* renamed from: i  reason: collision with root package name */
        private final String f19383i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                k5 k5Var = (k5) parcel.readParcelable(c.class.getClassLoader());
                int readInt = parcel.readInt();
                LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    linkedHashMap.put(parcel.readString(), parcel.readParcelable(c.class.getClassLoader()));
                }
                return new c(k5Var, linkedHashMap, parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final c[] newArray(int i10) {
                return new c[i10];
            }
        }

        public c(k5 fromComponent, Map componentParams, String fromStep) {
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(componentParams, "componentParams");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            this.f19381d = fromComponent;
            this.f19382e = componentParams;
            this.f19383i = fromStep;
        }

        public final Map a() {
            return this.f19382e;
        }

        public final k5 b() {
            return this.f19381d;
        }

        public final String c() {
            return this.f19383i;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof c) {
                c cVar = (c) obj;
                return Intrinsics.areEqual(this.f19381d, cVar.f19381d) && Intrinsics.areEqual(this.f19382e, cVar.f19382e) && Intrinsics.areEqual(this.f19383i, cVar.f19383i);
            }
            return false;
        }

        public int hashCode() {
            return (((this.f19381d.hashCode() * 31) + this.f19382e.hashCode()) * 31) + this.f19383i.hashCode();
        }

        public String toString() {
            k5 k5Var = this.f19381d;
            Map map = this.f19382e;
            String str = this.f19383i;
            return "TransitionData(fromComponent=" + k5Var + ", componentParams=" + map + ", fromStep=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f19381d, i10);
            Map map = this.f19382e;
            dest.writeInt(map.size());
            for (Map.Entry entry : map.entrySet()) {
                dest.writeString((String) entry.getKey());
                dest.writeParcelable((Parcelable) entry.getValue(), i10);
            }
            dest.writeString(this.f19383i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19384d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f19385e;

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f19385e = obj;
            return dVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x003a, code lost:
            if (rs.g.o(r5, r1, r4) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:16:0x0049, code lost:
            if (rs.g.o(r5, r1, r4) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:17:0x004b, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r5) {
            /*
                r4 = this;
                java.lang.Object r0 = wr.b.f()
                int r1 = r4.f19384d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L1b
                if (r1 == r3) goto L17
                if (r1 != r2) goto Lf
                goto L17
            Lf:
                java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r5.<init>(r0)
                throw r5
            L17:
                kotlin.c.b(r5)
                goto L4c
            L1b:
                kotlin.c.b(r5)
                java.lang.Object r5 = r4.f19385e
                kotlinx.coroutines.flow.FlowCollector r5 = (kotlinx.coroutines.flow.FlowCollector) r5
                com.withpersona.sdk2.inquiry.internal.x r1 = com.withpersona.sdk2.inquiry.internal.x.this
                io.a r1 = com.withpersona.sdk2.inquiry.internal.x.b(r1)
                boolean r1 = r1.b()
                if (r1 == 0) goto L3d
                com.withpersona.sdk2.inquiry.internal.x r1 = com.withpersona.sdk2.inquiry.internal.x.this
                kotlinx.coroutines.flow.Flow r1 = com.withpersona.sdk2.inquiry.internal.x.g(r1)
                r4.f19384d = r3
                java.lang.Object r5 = rs.g.o(r5, r1, r4)
                if (r5 != r0) goto L4c
                goto L4b
            L3d:
                com.withpersona.sdk2.inquiry.internal.x r1 = com.withpersona.sdk2.inquiry.internal.x.this
                kotlinx.coroutines.flow.Flow r1 = com.withpersona.sdk2.inquiry.internal.x.h(r1)
                r4.f19384d = r2
                java.lang.Object r5 = rs.g.o(r5, r1, r4)
                if (r5 != r0) goto L4c
            L4b:
                return r0
            L4c:
                kotlin.Unit r5 = kotlin.Unit.f32056a
                return r5
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.x.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((d) create(flowCollector, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19387d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f19388e;

        e(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            e eVar = new e(continuation);
            eVar.f19388e = obj;
            return eVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x0067, code lost:
            if (r11 == r0) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:18:0x0084, code lost:
            if (r1.emit(r2, r10) == r0) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:21:0x0094, code lost:
            if (r1.emit(r11, r10) == r0) goto L17;
         */
        /* JADX WARN: Code restructure failed: missing block: B:22:0x0096, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r11) {
            /*
                r10 = this;
                java.lang.Object r0 = wr.b.f()
                int r1 = r10.f19387d
                r2 = 3
                r3 = 2
                r4 = 1
                if (r1 == 0) goto L27
                if (r1 == r4) goto L1f
                if (r1 == r3) goto L1a
                if (r1 != r2) goto L12
                goto L1a
            L12:
                java.lang.IllegalStateException r11 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r11.<init>(r0)
                throw r11
            L1a:
                kotlin.c.b(r11)
                goto L97
            L1f:
                java.lang.Object r1 = r10.f19388e
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r11)
                goto L6a
            L27:
                kotlin.c.b(r11)
                java.lang.Object r11 = r10.f19388e
                r1 = r11
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                com.withpersona.sdk2.inquiry.internal.x r11 = com.withpersona.sdk2.inquiry.internal.x.this
                io.a r11 = com.withpersona.sdk2.inquiry.internal.x.b(r11)
                com.withpersona.sdk2.inquiry.internal.x r5 = com.withpersona.sdk2.inquiry.internal.x.this
                java.lang.String r5 = r5.j()
                com.withpersona.sdk2.inquiry.ui.network.TransitionInquiryRequest$a r6 = com.withpersona.sdk2.inquiry.ui.network.TransitionInquiryRequest.f19827c
                com.withpersona.sdk2.inquiry.internal.x r7 = com.withpersona.sdk2.inquiry.internal.x.this
                com.withpersona.sdk2.inquiry.internal.x$c r7 = com.withpersona.sdk2.inquiry.internal.x.e(r7)
                fq.k5 r7 = r7.b()
                com.withpersona.sdk2.inquiry.internal.x r8 = com.withpersona.sdk2.inquiry.internal.x.this
                com.withpersona.sdk2.inquiry.internal.x$c r8 = com.withpersona.sdk2.inquiry.internal.x.e(r8)
                java.util.Map r8 = r8.a()
                com.withpersona.sdk2.inquiry.internal.x r9 = com.withpersona.sdk2.inquiry.internal.x.this
                com.withpersona.sdk2.inquiry.internal.x$c r9 = com.withpersona.sdk2.inquiry.internal.x.e(r9)
                java.lang.String r9 = r9.c()
                com.withpersona.sdk2.inquiry.ui.network.TransitionInquiryRequest r6 = r6.a(r7, r8, r9)
                r10.f19388e = r1
                r10.f19387d = r4
                java.lang.Object r11 = r11.a(r5, r6, r10)
                if (r11 != r0) goto L6a
                goto L96
            L6a:
                vv.z r11 = (vv.z) r11
                boolean r4 = r11.g()
                r5 = 0
                if (r4 != 0) goto L87
                com.withpersona.sdk2.inquiry.internal.x$b$a r2 = new com.withpersona.sdk2.inquiry.internal.x$b$a
                com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r11 = com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.toErrorInfo(r11)
                r2.<init>(r11)
                r10.f19388e = r5
                r10.f19387d = r3
                java.lang.Object r11 = r1.emit(r2, r10)
                if (r11 != r0) goto L97
                goto L96
            L87:
                com.withpersona.sdk2.inquiry.internal.x$b$b r11 = new com.withpersona.sdk2.inquiry.internal.x$b$b
                r11.<init>(r5)
                r10.f19388e = r5
                r10.f19387d = r2
                java.lang.Object r11 = r1.emit(r11, r10)
                if (r11 != r0) goto L97
            L96:
                return r0
            L97:
                kotlin.Unit r11 = kotlin.Unit.f32056a
                return r11
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.x.e.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((e) create(flowCollector, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f19390d;

        /* renamed from: e  reason: collision with root package name */
        int f19391e;

        /* renamed from: i  reason: collision with root package name */
        private /* synthetic */ Object f19392i;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            f fVar = new f(continuation);
            fVar.f19392i = obj;
            return fVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:21:0x009d, code lost:
            if (r1.emit(r2, r14) == r0) goto L18;
         */
        /* JADX WARN: Code restructure failed: missing block: B:34:0x00f2, code lost:
            if (r3.emit(r1, r14) == r0) goto L18;
         */
        /* JADX WARN: Removed duplicated region for block: B:29:0x00bb  */
        /* JADX WARN: Removed duplicated region for block: B:38:0x00f8  */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r15) {
            /*
                Method dump skipped, instructions count: 256
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.x.f.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((f) create(flowCollector, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public x(String sessionToken, String inquiryId, yp.g inquirySessionConfig, c transitionData, ap.r service, io.a fallbackModeManager, l2 uiStepSavedStateHelper) {
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
        Intrinsics.checkNotNullParameter(transitionData, "transitionData");
        Intrinsics.checkNotNullParameter(service, "service");
        Intrinsics.checkNotNullParameter(fallbackModeManager, "fallbackModeManager");
        Intrinsics.checkNotNullParameter(uiStepSavedStateHelper, "uiStepSavedStateHelper");
        this.f19372b = sessionToken;
        this.f19373c = inquiryId;
        this.f19374d = inquirySessionConfig;
        this.f19375e = transitionData;
        this.f19376f = service;
        this.f19377g = fallbackModeManager;
        this.f19378h = uiStepSavedStateHelper;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Flow k() {
        return rs.g.v(new e(null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Flow l() {
        return rs.g.v(new f(null));
    }

    @Override // bn.o
    public boolean a(bn.o oVar) {
        return o.b.a(this, oVar);
    }

    public final String i() {
        return this.f19373c;
    }

    public final String j() {
        return this.f19372b;
    }

    @Override // bn.o
    public Flow run() {
        return rs.g.v(new d(null));
    }
}
