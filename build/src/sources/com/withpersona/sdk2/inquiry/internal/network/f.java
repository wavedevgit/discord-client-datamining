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
import iv.a0;
import java.util.Arrays;
import java.util.Set;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import so.r;
import tp.n;
import vm.c0;
import vm.e0;
import vm.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: d  reason: collision with root package name */
    public static final a f20315d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f20316a;

    /* renamed from: b  reason: collision with root package name */
    private final String f20317b;

    /* renamed from: c  reason: collision with root package name */
    private final String f20318c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Set a() {
            return x0.i(CreateInquiryRequest.Data.f20123c, CreateInquirySessionResponse.GpsCollectionRequirement.Companion, CreateInquirySessionResponse.GpsPrecisionRequirement.Companion, ComponentParam.Adapter.f20774a, InquiryFieldMap.f19677b, NextStep.GovernmentId.SelectPage.Companion, NextStep.GovernmentId.PassportNfcOption.Companion, NextStep.GovernmentId.CaptureFileType.Companion, NextStep.GovernmentId.VideoCaptureMethod.Companion, NextStep.Selfie.CaptureFileType.Companion, NextStep.Selfie.VideoCaptureMethod.Companion, Button.ButtonType.Companion, InputText.InputType.Companion, InputText.AutofillHint.Companion, RemoteImage.ContentType.Companion, GovernmentIdNfcScan.DataGroupTypes.Companion, UiComponentError.Companion, StyleElements.PositionType.Companion, StyleElements.DPSize.Companion, StyleElements.Size.Companion, StyleElements.FontName.Companion, StyleElements.FontWeight.Companion, StyleElements.Axis.Companion, JsonLogicBoolean.Companion, NumberAdapter.f20751a, RgbaHexColorAdapter.INSTANCE, PendingPageTextPosition.Companion);
        }

        public final Set b() {
            return x0.d();
        }

        public final Set c() {
            return x0.c(InquiryField.Companion.createAdapter());
        }

        public final Set d() {
            return x0.i(k.f19939f, com.withpersona.sdk2.inquiry.internal.i.f19899c, BackStackContainer.f19049i, to.c.f49785i, n.f49819i);
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
        this.f20316a = serverEndpoint;
        this.f20317b = webRtcServerEndpoint;
        this.f20318c = fallbackModeServerEndpoint;
    }

    public static final Set e() {
        return f20315d.a();
    }

    public static final Set f() {
        return f20315d.b();
    }

    public static final Set g() {
        return f20315d.c();
    }

    public static final Set h() {
        return f20315d.d();
    }

    public static final e0 l(Set set) {
        return f20315d.f(set);
    }

    public final xn.b a(a0 retrofit) {
        Intrinsics.checkNotNullParameter(retrofit, "retrofit");
        Object b10 = retrofit.b(xn.b.class);
        Intrinsics.checkNotNullExpressionValue(b10, "create(...)");
        return (xn.b) b10;
    }

    public final FallbackModeService b(a0 fallbackModeRetrofit) {
        Intrinsics.checkNotNullParameter(fallbackModeRetrofit, "fallbackModeRetrofit");
        Object b10 = fallbackModeRetrofit.d().b(this.f20318c).d().b(FallbackModeService.class);
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

    public final gp.a i(a0 retrofit) {
        Intrinsics.checkNotNullParameter(retrofit, "retrofit");
        Object b10 = retrofit.b(gp.a.class);
        Intrinsics.checkNotNullExpressionValue(b10, "create(...)");
        return (gp.a) b10;
    }

    public final String j() {
        return this.f20316a;
    }

    public final jq.b k(a0 retrofit) {
        Intrinsics.checkNotNullParameter(retrofit, "retrofit");
        Object b10 = retrofit.b(jq.b.class);
        Intrinsics.checkNotNullExpressionValue(b10, "create(...)");
        return (jq.b) b10;
    }

    public final kq.a m(a0 webRtcRetrofit) {
        Intrinsics.checkNotNullParameter(webRtcRetrofit, "webRtcRetrofit");
        Object b10 = webRtcRetrofit.d().b(this.f20317b).d().b(kq.a.class);
        Intrinsics.checkNotNullExpressionValue(b10, "create(...)");
        return (kq.a) b10;
    }
}
