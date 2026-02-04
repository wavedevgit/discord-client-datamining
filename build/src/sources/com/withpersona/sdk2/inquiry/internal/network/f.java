package com.withpersona.sdk2.inquiry.internal.network;

import com.squareup.workflow1.ui.backstack.BackStackContainer;
import com.withpersona.sdk2.inquiry.internal.InquiryFieldMap;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.FallbackModeService;
import com.withpersona.sdk2.inquiry.internal.k;
import com.withpersona.sdk2.inquiry.internal.network.CreateInquiryRequest;
import com.withpersona.sdk2.inquiry.internal.network.CreateInquirySessionResponse;
import com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.RgbaHexColorAdapter;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Button;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputText;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.steps.ui.network.NumberAdapter;
import com.withpersona.sdk2.inquiry.ui.network.ComponentParam;
import java.util.Arrays;
import java.util.Set;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import lv.a0;
import vo.r;
import wp.n;
import ym.c0;
import ym.e0;
import ym.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: d  reason: collision with root package name */
    public static final a f18930d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f18931a;

    /* renamed from: b  reason: collision with root package name */
    private final String f18932b;

    /* renamed from: c  reason: collision with root package name */
    private final String f18933c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Set a() {
            return x0.i(CreateInquiryRequest.Data.f18738c, CreateInquirySessionResponse.GpsCollectionRequirement.Companion, CreateInquirySessionResponse.GpsPrecisionRequirement.Companion, ComponentParam.Adapter.f19389a, InquiryFieldMap.f18292b, NextStep.GovernmentId.SelectPage.Companion, NextStep.GovernmentId.PassportNfcOption.Companion, NextStep.GovernmentId.CaptureFileType.Companion, NextStep.GovernmentId.VideoCaptureMethod.Companion, NextStep.Selfie.CaptureFileType.Companion, NextStep.Selfie.VideoCaptureMethod.Companion, Button.ButtonType.Companion, InputText.InputType.Companion, InputText.AutofillHint.Companion, RemoteImage.ContentType.Companion, GovernmentIdNfcScan.DataGroupTypes.Companion, UiComponentError.Companion, StyleElements.PositionType.Companion, StyleElements.DPSize.Companion, StyleElements.Size.Companion, StyleElements.FontName.Companion, StyleElements.FontWeight.Companion, StyleElements.Axis.Companion, JsonLogicBoolean.Companion, NumberAdapter.f19366a, RgbaHexColorAdapter.INSTANCE, PendingPageTextPosition.Companion);
        }

        public final Set b() {
            return x0.d();
        }

        public final Set c() {
            return x0.c(InquiryField.Companion.createAdapter());
        }

        public final Set d() {
            return x0.i(k.f18554f, com.withpersona.sdk2.inquiry.internal.i.f18514c, BackStackContainer.f17664i, wo.c.f52602i, n.f52636i);
        }

        public final String e() {
            return "Persona/1.0 (Android) Inquiry/2.21.0";
        }

        public final e0 f(Set viewBindings) {
            Intrinsics.checkNotNullParameter(viewBindings, "viewBindings");
            c0[] c0VarArr = (c0[]) viewBindings.toArray(new c0[0]);
            return f0.b((c0[]) Arrays.copyOf(c0VarArr, c0VarArr.length));
        }

        private a() {
        }
    }

    public f(String serverEndpoint, String webRtcServerEndpoint, String fallbackModeServerEndpoint) {
        Intrinsics.checkNotNullParameter(serverEndpoint, "serverEndpoint");
        Intrinsics.checkNotNullParameter(webRtcServerEndpoint, "webRtcServerEndpoint");
        Intrinsics.checkNotNullParameter(fallbackModeServerEndpoint, "fallbackModeServerEndpoint");
        this.f18931a = serverEndpoint;
        this.f18932b = webRtcServerEndpoint;
        this.f18933c = fallbackModeServerEndpoint;
    }

    public static final Set e() {
        return f18930d.a();
    }

    public static final Set f() {
        return f18930d.b();
    }

    public static final Set g() {
        return f18930d.c();
    }

    public static final Set h() {
        return f18930d.d();
    }

    public static final e0 l(Set set) {
        return f18930d.f(set);
    }

    public final ao.b a(a0 retrofit) {
        Intrinsics.checkNotNullParameter(retrofit, "retrofit");
        Object b10 = retrofit.b(ao.b.class);
        Intrinsics.checkNotNullExpressionValue(b10, "create(...)");
        return (ao.b) b10;
    }

    public final FallbackModeService b(a0 fallbackModeRetrofit) {
        Intrinsics.checkNotNullParameter(fallbackModeRetrofit, "fallbackModeRetrofit");
        Object b10 = fallbackModeRetrofit.d().b(this.f18933c).d().b(FallbackModeService.class);
        Intrinsics.checkNotNullExpressionValue(b10, "create(...)");
        return (FallbackModeService) b10;
    }

    public final com.withpersona.sdk2.inquiry.governmentid.network.a c(a0 retrofit) {
        Intrinsics.checkNotNullParameter(retrofit, "retrofit");
        Object b10 = retrofit.b(com.withpersona.sdk2.inquiry.governmentid.network.a.class);
        Intrinsics.checkNotNullExpressionValue(b10, "create(...)");
        return (com.withpersona.sdk2.inquiry.governmentid.network.a) b10;
    }

    public final r d(a0 retrofit) {
        Intrinsics.checkNotNullParameter(retrofit, "retrofit");
        Object b10 = retrofit.b(r.class);
        Intrinsics.checkNotNullExpressionValue(b10, "create(...)");
        return (r) b10;
    }

    public final jp.a i(a0 retrofit) {
        Intrinsics.checkNotNullParameter(retrofit, "retrofit");
        Object b10 = retrofit.b(jp.a.class);
        Intrinsics.checkNotNullExpressionValue(b10, "create(...)");
        return (jp.a) b10;
    }

    public final String j() {
        return this.f18931a;
    }

    public final mq.b k(a0 retrofit) {
        Intrinsics.checkNotNullParameter(retrofit, "retrofit");
        Object b10 = retrofit.b(mq.b.class);
        Intrinsics.checkNotNullExpressionValue(b10, "create(...)");
        return (mq.b) b10;
    }

    public final nq.a m(a0 webRtcRetrofit) {
        Intrinsics.checkNotNullParameter(webRtcRetrofit, "webRtcRetrofit");
        Object b10 = webRtcRetrofit.d().b(this.f18932b).d().b(nq.a.class);
        Intrinsics.checkNotNullExpressionValue(b10, "create(...)");
        return (nq.a) b10;
    }
}
