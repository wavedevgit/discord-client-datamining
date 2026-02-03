package po;

import com.withpersona.sdk2.inquiry.network.core.ErrorResponse;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class r {
    public static final jq.d a(InternalErrorInfo internalErrorInfo) {
        Intrinsics.checkNotNullParameter(internalErrorInfo, "<this>");
        if (internalErrorInfo instanceof InternalErrorInfo.CameraErrorInfo) {
            return jq.d.f31891o;
        }
        if (internalErrorInfo instanceof InternalErrorInfo.IntegrationErrorInfo) {
            return jq.d.f31892p;
        }
        if (internalErrorInfo instanceof InternalErrorInfo.NetworkErrorInfo) {
            ErrorResponse.Error responseError = ((InternalErrorInfo.NetworkErrorInfo) internalErrorInfo).getResponseError();
            if (responseError instanceof ErrorResponse.Error.RateLimitExceededError) {
                return jq.d.f31894r;
            }
            if (responseError instanceof ErrorResponse.Error.UnauthenticatedError) {
                return jq.d.f31893q;
            }
            if (!(responseError instanceof ErrorResponse.Error.FieldNotFoundError) && !(responseError instanceof ErrorResponse.Error.InactiveTemplateError) && !(responseError instanceof ErrorResponse.Error.InconsistentTransitionError) && !(responseError instanceof ErrorResponse.Error.TransitionFromTerminalStateError) && !(responseError instanceof ErrorResponse.Error.InvalidConfigError) && !(responseError instanceof ErrorResponse.Error.UnknownError) && !(responseError instanceof ErrorResponse.Error.InvalidFieldValueError) && responseError != null) {
                throw new lr.p();
            }
            return jq.d.f31888d;
        } else if (internalErrorInfo instanceof InternalErrorInfo.PermissionErrorInfo) {
            return jq.d.f31889e;
        } else {
            if (internalErrorInfo instanceof InternalErrorInfo.ConfigurationErrorInfo) {
                return jq.d.f31890i;
            }
            if (internalErrorInfo instanceof InternalErrorInfo.NoDiskSpaceErrorInfo) {
                return jq.d.f31896t;
            }
            if (internalErrorInfo instanceof InternalErrorInfo.WebRtcIntegrationErrorInfo) {
                return jq.d.f31897u;
            }
            if (internalErrorInfo instanceof InternalErrorInfo.InvalidOneTimeLinkCode) {
                return jq.d.f31898v;
            }
            if (internalErrorInfo instanceof InternalErrorInfo.UnknownErrorInfo) {
                return jq.d.f31895s;
            }
            throw new lr.p();
        }
    }

    public static final String b(InternalErrorInfo internalErrorInfo) {
        Intrinsics.checkNotNullParameter(internalErrorInfo, "<this>");
        if (internalErrorInfo instanceof InternalErrorInfo.CameraErrorInfo) {
            return "Unable to find a suitable camera.";
        }
        if (internalErrorInfo instanceof InternalErrorInfo.IntegrationErrorInfo) {
            return "The SDK is misconfigured.";
        }
        if (internalErrorInfo instanceof InternalErrorInfo.NetworkErrorInfo) {
            return "There was a problem reaching the server.";
        }
        if (internalErrorInfo instanceof InternalErrorInfo.PermissionErrorInfo) {
            return "There was an issue with camera permissions.";
        }
        if (internalErrorInfo instanceof InternalErrorInfo.ConfigurationErrorInfo) {
            return "The SDK needs a template ID that starts with `itmpl_`. If your template ID starts with `tmpl_`, you should use version v1.x of the Persona Android SDK. https://docs.withpersona.com/docs/mobile-sdks-v1";
        }
        if (internalErrorInfo instanceof InternalErrorInfo.NoDiskSpaceErrorInfo) {
            return "The device has no available disk space.";
        }
        if (internalErrorInfo instanceof InternalErrorInfo.WebRtcIntegrationErrorInfo) {
            return "WebRTC is listed as the preferred or only capture method, but it has not been configured for this project.";
        }
        if (internalErrorInfo instanceof InternalErrorInfo.InvalidOneTimeLinkCode) {
            return "Invalid one time link code.";
        }
        if (internalErrorInfo instanceof InternalErrorInfo.UnknownErrorInfo) {
            return "An otherwise unexpected error occurred.";
        }
        throw new lr.p();
    }
}
