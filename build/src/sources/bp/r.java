package bp;

import com.withpersona.sdk2.inquiry.internal.network.CreateInquiryRequest;
import com.withpersona.sdk2.inquiry.internal.network.CreateInquirySessionRequest;
import com.withpersona.sdk2.inquiry.internal.network.CreateInquirySessionResponse;
import com.withpersona.sdk2.inquiry.internal.network.ErrorRequest;
import com.withpersona.sdk2.inquiry.internal.network.ExchangeOneTimeLinkCodeRequest;
import com.withpersona.sdk2.inquiry.internal.network.ExchangeOneTimeLinkCodeResponse;
import com.withpersona.sdk2.inquiry.internal.network.TransitionBackRequest;
import com.withpersona.sdk2.inquiry.internal.network.UpdateInquirySessionRequest;
import com.withpersona.sdk2.inquiry.internal.network.VerifyDeviceIntegrityRequest;
import com.withpersona.sdk2.inquiry.network.dto.CheckInquiryResponse;
import com.withpersona.sdk2.inquiry.ui.network.TransitionInquiryRequest;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import okhttp3.ResponseBody;
import org.jetbrains.annotations.NotNull;
import wv.z;
import yv.s;
import yv.t;
@Metadata(d1 = {"\u0000n\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0011\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\b`\u0018\u00002\u00020\u0001J,\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00070\u00062\b\b\u0001\u0010\u0003\u001a\u00020\u00022\n\b\u0001\u0010\u0005\u001a\u0004\u0018\u00010\u0004H§@¢\u0006\u0004\b\b\u0010\tJ,\u0010\r\u001a\b\u0012\u0004\u0012\u00020\f0\u00062\b\b\u0001\u0010\u0003\u001a\u00020\n2\n\b\u0001\u0010\u000b\u001a\u0004\u0018\u00010\u0004H§@¢\u0006\u0004\b\r\u0010\u000eJF\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00070\u00062\b\b\u0001\u0010\u000f\u001a\u00020\u00042\n\b\u0001\u0010\u000b\u001a\u0004\u0018\u00010\u00042\b\b\u0001\u0010\u0010\u001a\u00020\u00042\u000e\b\u0001\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00040\u0011H§@¢\u0006\u0004\b\u0013\u0010\u0014J*\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00160\u00062\b\b\u0001\u0010\u000f\u001a\u00020\u00042\b\b\u0001\u0010\u0003\u001a\u00020\u0015H§@¢\u0006\u0004\b\u0017\u0010\u0018J*\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u00160\u00062\b\b\u0001\u0010\u000f\u001a\u00020\u00042\b\b\u0001\u0010\u0003\u001a\u00020\u0019H§@¢\u0006\u0004\b\u001a\u0010\u001bJ4\u0010\u001d\u001a\b\u0012\u0004\u0012\u00020\u00070\u00062\b\b\u0001\u0010\u000f\u001a\u00020\u00042\b\b\u0001\u0010\u0010\u001a\u00020\u00042\b\b\u0001\u0010\u0003\u001a\u00020\u001cH§@¢\u0006\u0004\b\u001d\u0010\u001eJ4\u0010 \u001a\b\u0012\u0004\u0012\u00020\u00070\u00062\b\b\u0001\u0010\u000f\u001a\u00020\u00042\b\b\u0001\u0010\u0010\u001a\u00020\u00042\b\b\u0001\u0010\u0003\u001a\u00020\u001fH§@¢\u0006\u0004\b \u0010!J \u0010\"\u001a\b\u0012\u0004\u0012\u00020\u00160\u00062\b\b\u0001\u0010\u000f\u001a\u00020\u0004H§@¢\u0006\u0004\b\"\u0010#J*\u0010%\u001a\b\u0012\u0004\u0012\u00020\u00160\u00062\b\b\u0001\u0010\u000f\u001a\u00020\u00042\b\b\u0001\u0010\u0003\u001a\u00020$H§@¢\u0006\u0004\b%\u0010&J \u0010)\u001a\b\u0012\u0004\u0012\u00020(0\u00062\b\b\u0001\u0010\u0003\u001a\u00020'H§@¢\u0006\u0004\b)\u0010*¨\u0006+"}, d2 = {"Lbp/r;", "", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquiryRequest;", "request", "", "fallbackMode", "Lwv/z;", "Lcom/withpersona/sdk2/inquiry/network/dto/CheckInquiryResponse;", "j", "(Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquiryRequest;Ljava/lang/String;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionRequest;", "deviceId", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionResponse;", "h", "(Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionRequest;Ljava/lang/String;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "sessionToken", "inquiryId", "", "include", "b", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest;", "Lokhttp3/ResponseBody;", "a", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/internal/network/UpdateInquirySessionRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Lcom/withpersona/sdk2/inquiry/internal/network/VerifyDeviceIntegrityRequest;", "g", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/internal/network/VerifyDeviceIntegrityRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Lcom/withpersona/sdk2/inquiry/ui/network/TransitionInquiryRequest;", "e", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/ui/network/TransitionInquiryRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Lcom/withpersona/sdk2/inquiry/internal/network/TransitionBackRequest;", "d", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/internal/network/TransitionBackRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "i", "(Ljava/lang/String;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Lcom/withpersona/sdk2/inquiry/internal/network/ErrorRequest;", "c", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/internal/network/ErrorRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeRequest;", "Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeResponse;", "f", "(Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface r {
    @yv.n("/api/internal/verify/v1/current-inquiry-session")
    Object a(@NotNull @yv.i("Authorization") String str, @NotNull @yv.a UpdateInquirySessionRequest updateInquirySessionRequest, @NotNull Continuation<? super z<ResponseBody>> continuation);

    @yv.f("/api/internal/verify/v1/inquiries/{inquiryId}")
    Object b(@NotNull @yv.i("Authorization") String str, @yv.i("Persona-Device-Id") String str2, @s("inquiryId") @NotNull String str3, @t("include") @NotNull String[] strArr, @NotNull Continuation<? super z<CheckInquiryResponse>> continuation);

    @yv.o("/api/internal/verify/v1/current-inquiry-session/error")
    Object c(@NotNull @yv.i("Authorization") String str, @NotNull @yv.a ErrorRequest errorRequest, @NotNull Continuation<? super z<ResponseBody>> continuation);

    @yv.o("/api/internal/verify/v1/inquiries/{inquiryId}/transition-back")
    Object d(@NotNull @yv.i("Authorization") String str, @s("inquiryId") @NotNull String str2, @NotNull @yv.a TransitionBackRequest transitionBackRequest, @NotNull Continuation<? super z<CheckInquiryResponse>> continuation);

    @yv.o("/api/internal/verify/v1/inquiries/{inquiryId}/transition")
    Object e(@NotNull @yv.i("Authorization") String str, @s("inquiryId") @NotNull String str2, @NotNull @yv.a TransitionInquiryRequest transitionInquiryRequest, @NotNull Continuation<? super z<CheckInquiryResponse>> continuation);

    @yv.o("/api/internal/verify/v1/inquiry-sessions/exchange-one-time-link-code")
    Object f(@NotNull @yv.a ExchangeOneTimeLinkCodeRequest exchangeOneTimeLinkCodeRequest, @NotNull Continuation<? super z<ExchangeOneTimeLinkCodeResponse>> continuation);

    @yv.o("/api/internal/verify/v1/current-inquiry-session/verify-device-integrity")
    Object g(@NotNull @yv.i("Authorization") String str, @NotNull @yv.a VerifyDeviceIntegrityRequest verifyDeviceIntegrityRequest, @NotNull Continuation<? super z<ResponseBody>> continuation);

    @yv.o("/api/internal/verify/v1/inquiry-sessions")
    Object h(@NotNull @yv.a CreateInquirySessionRequest createInquirySessionRequest, @yv.i("Persona-Device-Id") String str, @NotNull Continuation<? super z<CreateInquirySessionResponse>> continuation);

    @yv.o("/api/internal/verify/v1/current-inquiry-session/cancel")
    Object i(@NotNull @yv.i("Authorization") String str, @NotNull Continuation<? super z<ResponseBody>> continuation);

    @yv.o("/api/internal/verify/v1/inquiries")
    Object j(@NotNull @yv.a CreateInquiryRequest createInquiryRequest, @yv.i("Persona-Fallback-Mode") String str, @NotNull Continuation<? super z<CheckInquiryResponse>> continuation);
}
