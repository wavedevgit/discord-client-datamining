package com.withpersona.sdk2.inquiry.governmentid.network;

import com.squareup.moshi.i;
import com.withpersona.sdk2.inquiry.governmentid.network.AutoClassifyResponse;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.government_id.Id;
import ho.c0;
import ho.c4;
import ho.d0;
import ho.e4;
import ho.z;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import ms.m0;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import ps.g;
import sn.d1;
import zm.o;
@Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0013\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0004!#\u001c6BW\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\b\u0012\u0006\u0010\u000b\u001a\u00020\n\u0012\u0006\u0010\r\u001a\u00020\f\u0012\u0006\u0010\u000f\u001a\u00020\u000e\u0012\u0006\u0010\u0011\u001a\u00020\u0010\u0012\u0006\u0010\u0013\u001a\u00020\u0012¢\u0006\u0004\b\u0014\u0010\u0015J\u001f\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00180\u0016*\b\u0012\u0004\u0012\u00020\u00170\u0016H\u0002¢\u0006\u0004\b\u0019\u0010\u001aJ\u001b\u0010\u001c\u001a\u00020\u00122\n\u0010\u001b\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u001c\u0010\u001dJ\u0015\u0010\u001f\u001a\b\u0012\u0004\u0012\u00020\u00020\u001eH\u0016¢\u0006\u0004\b\u001f\u0010 R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\"R\u0014\u0010\u0005\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\"R\u0014\u0010\u0006\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b$\u0010\"R\u0014\u0010\u0007\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\"R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b&\u0010'R\u0014\u0010\u000b\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b(\u0010)R\u0014\u0010\r\u001a\u00020\f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b*\u0010+R\u0014\u0010\u000f\u001a\u00020\u000e8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b,\u0010-R\u0014\u0010\u0011\u001a\u00020\u00108\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b.\u0010/R\u0014\u0010\u0013\u001a\u00020\u00128\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b0\u00101R\u0014\u00105\u001a\u0002028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b3\u00104¨\u00067"}, d2 = {"Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyWorker;", "Lzm/o;", "Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyWorker$c;", "", "sessionToken", "inquiryId", "fromStep", "fromComponent", "Lcom/withpersona/sdk2/inquiry/governmentid/network/a;", "service", "Lho/d0;", "governmentId", "Lvp/a;", "imageHelper", "Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyWorker$SupplementaryData;", "supplementaryData", "", "defaultManualCaptureDelayMs", "", "extractTextFromImage", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/governmentid/network/a;Lho/d0;Lvp/a;Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyWorker$SupplementaryData;JZ)V", "", "Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse$IdClassesForCountry;", "Lho/e4;", "n", "(Ljava/util/List;)Ljava/util/List;", "otherWorker", "a", "(Lzm/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Ljava/lang/String;", "c", "d", "e", "f", "Lcom/withpersona/sdk2/inquiry/governmentid/network/a;", "g", "Lho/d0;", "h", "Lvp/a;", "i", "Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyWorker$SupplementaryData;", "j", "J", "k", "Z", "Lsn/d1;", "l", "Lsn/d1;", "idFrontAnalyzer", "SupplementaryData", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAutoClassifyWorker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AutoClassifyWorker.kt\ncom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyWorker\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,226:1\n1557#2:227\n1628#2,2:228\n1611#2,9:230\n1863#2:239\n1864#2:241\n1620#2:242\n1630#2:243\n1#3:240\n*S KotlinDebug\n*F\n+ 1 AutoClassifyWorker.kt\ncom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyWorker\n*L\n189#1:227\n189#1:228,2\n193#1:230,9\n193#1:239\n193#1:241\n193#1:242\n189#1:243\n193#1:240\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class AutoClassifyWorker implements o<c> {

    /* renamed from: b  reason: collision with root package name */
    private final String f18643b;

    /* renamed from: c  reason: collision with root package name */
    private final String f18644c;

    /* renamed from: d  reason: collision with root package name */
    private final String f18645d;

    /* renamed from: e  reason: collision with root package name */
    private final String f18646e;

    /* renamed from: f  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.governmentid.network.a f18647f;

    /* renamed from: g  reason: collision with root package name */
    private final d0 f18648g;

    /* renamed from: h  reason: collision with root package name */
    private final vp.a f18649h;

    /* renamed from: i  reason: collision with root package name */
    private final SupplementaryData f18650i;

    /* renamed from: j  reason: collision with root package name */
    private final long f18651j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f18652k;

    /* renamed from: l  reason: collision with root package name */
    private final d1 f18653l;

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0007\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyWorker$SupplementaryData;", "", "<init>", "()V", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class SupplementaryData {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {

        /* renamed from: com.withpersona.sdk2.inquiry.governmentid.network.AutoClassifyWorker$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0242a implements a {

            /* renamed from: a  reason: collision with root package name */
            private final String f18654a;

            /* renamed from: b  reason: collision with root package name */
            private final c4 f18655b;

            public C0242a(String countryCode, c4 idConfig) {
                Intrinsics.checkNotNullParameter(countryCode, "countryCode");
                Intrinsics.checkNotNullParameter(idConfig, "idConfig");
                this.f18654a = countryCode;
                this.f18655b = idConfig;
            }

            public final c4 a() {
                return this.f18655b;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements a {

            /* renamed from: a  reason: collision with root package name */
            private final List f18656a;

            public b(List idClassesPerCountry) {
                Intrinsics.checkNotNullParameter(idClassesPerCountry, "idClassesPerCountry");
                this.f18656a = idClassesPerCountry;
            }

            public final List a() {
                return this.f18656a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c implements a {

            /* renamed from: a  reason: collision with root package name */
            private final List f18657a;

            public c(List idClassesPerCountry) {
                Intrinsics.checkNotNullParameter(idClassesPerCountry, "idClassesPerCountry");
                this.f18657a = idClassesPerCountry;
            }

            public final List a() {
                return this.f18657a;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final com.withpersona.sdk2.inquiry.governmentid.network.a f18658a;

        /* renamed from: b  reason: collision with root package name */
        private final vp.a f18659b;

        public b(com.withpersona.sdk2.inquiry.governmentid.network.a service, vp.a imageHelper) {
            Intrinsics.checkNotNullParameter(service, "service");
            Intrinsics.checkNotNullParameter(imageHelper, "imageHelper");
            this.f18658a = service;
            this.f18659b = imageHelper;
        }

        public final AutoClassifyWorker a(String sessionToken, String inquiryId, String fromStep, String fromComponent, d0 governmentId, SupplementaryData supplementaryData, long j10, boolean z10) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(governmentId, "governmentId");
            Intrinsics.checkNotNullParameter(supplementaryData, "supplementaryData");
            return new AutoClassifyWorker(sessionToken, inquiryId, fromStep, fromComponent, this.f18658a, governmentId, this.f18659b, supplementaryData, j10, z10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f18660a;

            public a(InternalErrorInfo cause) {
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f18660a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f18660a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements c {

            /* renamed from: a  reason: collision with root package name */
            private final a f18661a;

            public b(a autoClassificationResult) {
                Intrinsics.checkNotNullParameter(autoClassificationResult, "autoClassificationResult");
                this.f18661a = autoClassificationResult;
            }

            public final a a() {
                return this.f18661a;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f18662d;

        /* renamed from: e  reason: collision with root package name */
        int f18663e;

        /* renamed from: i  reason: collision with root package name */
        private /* synthetic */ Object f18664i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f18666d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ AutoClassifyWorker f18667e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ List f18668i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(AutoClassifyWorker autoClassifyWorker, List list, Continuation continuation) {
                super(1, continuation);
                this.f18667e = autoClassifyWorker;
                this.f18668i = list;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new a(this.f18667e, this.f18668i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = ur.b.f();
                int i10 = this.f18666d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                        return obj;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                com.withpersona.sdk2.inquiry.governmentid.network.a aVar = this.f18667e.f18647f;
                String str = this.f18667e.f18643b;
                String str2 = this.f18667e.f18644c;
                List<MultipartBody.b> list = this.f18668i;
                SupplementaryData supplementaryData = this.f18667e.f18650i;
                this.f18666d = 1;
                Object a10 = aVar.a(str, str2, list, supplementaryData, this);
                if (a10 == f10) {
                    return f10;
                }
                return a10;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((a) create(continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        private static final void j(List list, AutoClassifyWorker autoClassifyWorker, c0 c0Var) {
            String b10;
            MultipartBody.b.a aVar = MultipartBody.b.f43790c;
            list.add(aVar.c("data[attributes][image]", new File(c0Var.a()).getName(), RequestBody.Companion.a(new File(c0Var.a()), MediaType.f43766e.c(c0Var.b()))));
            if (autoClassifyWorker.f18652k && (b10 = autoClassifyWorker.f18653l.b(c0Var.a())) != null) {
                list.add(aVar.b("data[attributes][client_extracted_text]", b10));
            }
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f18664i = obj;
            return dVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:28:0x0135, code lost:
            if (r1.emit(r4, r12) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:30:0x0139, code lost:
            r2 = r1;
            r1 = r13;
         */
        /* JADX WARN: Code restructure failed: missing block: B:33:0x0158, code lost:
            if (r1.emit(r2, r12) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:38:0x017f, code lost:
            if (r1.emit(r2, r12) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:43:0x01a6, code lost:
            if (r1.emit(r2, r12) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:48:0x01c6, code lost:
            if (r1.emit(r2, r12) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:53:0x01e4, code lost:
            if (r1.emit(r2, r12) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:58:0x0203, code lost:
            if (r1.emit(r4, r12) == r0) goto L15;
         */
        /* JADX WARN: Removed duplicated region for block: B:21:0x00fc  */
        /* JADX WARN: Removed duplicated region for block: B:57:0x01eb  */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r13) {
            /*
                Method dump skipped, instructions count: 544
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.governmentid.network.AutoClassifyWorker.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((d) create(flowCollector, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public AutoClassifyWorker(String sessionToken, String inquiryId, String fromStep, String fromComponent, com.withpersona.sdk2.inquiry.governmentid.network.a service, d0 governmentId, vp.a imageHelper, SupplementaryData supplementaryData, long j10, boolean z10) {
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        Intrinsics.checkNotNullParameter(fromStep, "fromStep");
        Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
        Intrinsics.checkNotNullParameter(service, "service");
        Intrinsics.checkNotNullParameter(governmentId, "governmentId");
        Intrinsics.checkNotNullParameter(imageHelper, "imageHelper");
        Intrinsics.checkNotNullParameter(supplementaryData, "supplementaryData");
        this.f18643b = sessionToken;
        this.f18644c = inquiryId;
        this.f18645d = fromStep;
        this.f18646e = fromComponent;
        this.f18647f = service;
        this.f18648g = governmentId;
        this.f18649h = imageHelper;
        this.f18650i = supplementaryData;
        this.f18651j = j10;
        this.f18652k = z10;
        this.f18653l = new d1();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final List n(List list) {
        List<AutoClassifyResponse.IdClassesForCountry> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (AutoClassifyResponse.IdClassesForCountry idClassesForCountry : list2) {
            String b10 = idClassesForCountry.b();
            String a10 = idClassesForCountry.a();
            ArrayList arrayList2 = new ArrayList();
            for (Id id2 : idClassesForCountry.c()) {
                c4 o10 = z.o(id2, idClassesForCountry.a(), this.f18651j);
                if (o10 != null) {
                    arrayList2.add(o10);
                }
            }
            arrayList.add(new e4(b10, a10, arrayList2));
        }
        return arrayList;
    }

    @Override // zm.o
    public boolean a(o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if ((otherWorker instanceof AutoClassifyWorker) && Intrinsics.areEqual(this.f18643b, ((AutoClassifyWorker) otherWorker).f18643b)) {
            return true;
        }
        return false;
    }

    @Override // zm.o
    public Flow run() {
        return g.x(g.v(new d(null)), m0.a());
    }
}
