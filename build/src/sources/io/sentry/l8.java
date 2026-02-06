package io.sentry;

import com.facebook.react.views.text.ReactFontManager;
import com.withpersona.sdk2.inquiry.network.core.HttpStatusCode;
import java.util.Locale;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public enum l8 implements w1 {
    OK(0, 399),
    CANCELLED(499),
    INTERNAL_ERROR(500),
    UNKNOWN(500),
    UNKNOWN_ERROR(500),
    INVALID_ARGUMENT(ReactFontManager.TypefaceStyle.NORMAL),
    DEADLINE_EXCEEDED(504),
    NOT_FOUND(HttpStatusCode.NOT_FOUND_404),
    ALREADY_EXISTS(HttpStatusCode.CONFLICT_409),
    PERMISSION_DENIED(403),
    RESOURCE_EXHAUSTED(HttpStatusCode.TOO_MANY_REQUESTS_429),
    FAILED_PRECONDITION(ReactFontManager.TypefaceStyle.NORMAL),
    ABORTED(HttpStatusCode.CONFLICT_409),
    OUT_OF_RANGE(ReactFontManager.TypefaceStyle.NORMAL),
    UNIMPLEMENTED(501),
    UNAVAILABLE(503),
    DATA_LOSS(500),
    UNAUTHENTICATED(HttpStatusCode.UNAUTHORIZED_401);
    
    private final int maxHttpStatusCode;
    private final int minHttpStatusCode;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public l8 a(e3 e3Var, ILogger iLogger) {
            return l8.valueOf(e3Var.e1().toUpperCase(Locale.ROOT));
        }
    }

    l8(int i10) {
        this.minHttpStatusCode = i10;
        this.maxHttpStatusCode = i10;
    }

    public static l8 fromApiNameSafely(String str) {
        if (str == null) {
            return null;
        }
        try {
            return valueOf(str.toUpperCase(Locale.ROOT));
        } catch (IllegalArgumentException unused) {
            return null;
        }
    }

    public static l8 fromHttpStatusCode(int i10) {
        l8[] values;
        for (l8 l8Var : values()) {
            if (l8Var.matches(i10)) {
                return l8Var;
            }
        }
        return null;
    }

    private boolean matches(int i10) {
        if (i10 >= this.minHttpStatusCode && i10 <= this.maxHttpStatusCode) {
            return true;
        }
        return false;
    }

    @NotNull
    public String apiName() {
        return name().toLowerCase(Locale.ROOT);
    }

    @Override // io.sentry.w1
    public void serialize(@NotNull f3 f3Var, @NotNull ILogger iLogger) {
        f3Var.f(apiName());
    }

    @NotNull
    public static l8 fromHttpStatusCode(Integer num, @NotNull l8 l8Var) {
        l8 fromHttpStatusCode = num != null ? fromHttpStatusCode(num.intValue()) : l8Var;
        return fromHttpStatusCode != null ? fromHttpStatusCode : l8Var;
    }

    l8(int i10, int i11) {
        this.minHttpStatusCode = i10;
        this.maxHttpStatusCode = i11;
    }
}
