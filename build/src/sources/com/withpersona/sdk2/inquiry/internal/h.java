package com.withpersona.sdk2.inquiry.internal;

import android.os.Bundle;
import com.withpersona.sdk2.inquiry.FallbackMode;
import com.withpersona.sdk2.inquiry.StaticInquiryTemplate;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: b  reason: collision with root package name */
    public static final a f18898b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Bundle f18899a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a(String str) {
            Intrinsics.checkNotNullParameter(str, "<this>");
            return StringsKt.W0(str, "Bearer ", null, 2, null);
        }

        private a() {
        }
    }

    public h(Bundle bundle) {
        this.f18899a = bundle;
    }

    public final boolean A() {
        Bundle bundle = this.f18899a;
        if (bundle == null) {
            return true;
        }
        return bundle.getBoolean("IS_NAV_BAR_ENABLED", true);
    }

    public final String a() {
        Bundle bundle = this.f18899a;
        if (bundle != null) {
            return bundle.getString("ACCOUNT_ID_KEY");
        }
        return null;
    }

    public final boolean b() {
        Bundle bundle = this.f18899a;
        if (bundle == null) {
            return false;
        }
        return bundle.getBoolean("CONSUME_EXCEPTIONS", false);
    }

    public final boolean c() {
        Bundle bundle = this.f18899a;
        if (bundle == null) {
            return true;
        }
        return bundle.getBoolean("CONTROL_NAVIGATION_BAR", true);
    }

    public final boolean d() {
        Bundle bundle = this.f18899a;
        if (bundle == null) {
            return true;
        }
        return bundle.getBoolean("CONTROL_STATUS_BAR", true);
    }

    public final boolean e() {
        Bundle bundle = this.f18899a;
        if (bundle == null) {
            return true;
        }
        return bundle.getBoolean("ENABLE_ERROR_LOGGING", true);
    }

    public final uo.f f() {
        String str;
        Bundle bundle = this.f18899a;
        if (bundle != null) {
            str = bundle.getString("ENVIRONMENT_KEY");
        } else {
            str = null;
        }
        if (str != null) {
            int hashCode = str.hashCode();
            if (hashCode != -2056856391) {
                if (hashCode == -1711584601 && str.equals("SANDBOX")) {
                    return uo.f.f51906e;
                }
            } else if (str.equals("PRODUCTION")) {
                return uo.f.f51905d;
            }
        }
        return uo.f.f51905d;
    }

    public final String g() {
        Bundle bundle = this.f18899a;
        if (bundle != null) {
            return bundle.getString("ENVIRONMENT_ID_KEY");
        }
        return null;
    }

    public final FallbackMode h() {
        String str;
        Bundle bundle = this.f18899a;
        if (bundle != null) {
            str = bundle.getString("FALLBACK_MODE");
        } else {
            str = null;
        }
        if (str != null) {
            int hashCode = str.hashCode();
            if (hashCode != 64924498) {
                if (hashCode != 74175084) {
                    if (hashCode == 1933739535 && str.equals("ALWAYS")) {
                        return FallbackMode.ALWAYS;
                    }
                } else if (str.equals("NEVER")) {
                    return FallbackMode.NEVER;
                }
            } else if (str.equals("DEFER")) {
                return FallbackMode.DEFER;
            }
        }
        return FallbackMode.NEVER;
    }

    public final String i() {
        String string;
        Bundle bundle = this.f18899a;
        if (bundle == null || (string = bundle.getString("FALLBACK_MODE_SERVER_ENDPOINT", "https://inquiry-fallback.withpersona.com")) == null) {
            return "https://inquiry-fallback.withpersona.com";
        }
        return string;
    }

    public final uo.s j() {
        Bundle bundle = this.f18899a;
        if (bundle != null) {
            return (uo.s) w1.b.a(bundle, "FIELDS_MAP_KEY", uo.s.class);
        }
        return null;
    }

    public final boolean k() {
        Bundle bundle = this.f18899a;
        if (bundle == null) {
            return true;
        }
        return bundle.getBoolean("HANDLE_BACK_PRESS", true);
    }

    public final String l() {
        Bundle bundle = this.f18899a;
        if (bundle != null) {
            return bundle.getString("INQUIRY_ID_KEY");
        }
        return null;
    }

    public final String m() {
        Bundle bundle = this.f18899a;
        if (bundle != null) {
            return bundle.getString("LOCALE");
        }
        return null;
    }

    public final String n() {
        Bundle bundle = this.f18899a;
        if (bundle != null) {
            return bundle.getString("ONE_TIME_LINK_CODE");
        }
        return null;
    }

    public final String o() {
        Bundle bundle = this.f18899a;
        if (bundle != null) {
            return bundle.getString("REFERENCE_ID_KEY");
        }
        return null;
    }

    public final String p() {
        String string;
        Bundle bundle = this.f18899a;
        if (bundle != null && (string = bundle.getString("REQUEST_KEY")) != null) {
            return string;
        }
        return "com.withpersona.sdk2.request_key";
    }

    public final boolean q() {
        Bundle bundle = this.f18899a;
        if (bundle == null) {
            return false;
        }
        return bundle.getBoolean("RETURN_COLLECTED_DATA", false);
    }

    public final String r() {
        String string;
        Bundle bundle = this.f18899a;
        if (bundle == null || (string = bundle.getString("SERVER_ENDPOINT", "https://withpersona.com")) == null) {
            return "https://withpersona.com";
        }
        return string;
    }

    public final String s() {
        String string;
        Bundle bundle = this.f18899a;
        if (bundle != null && (string = bundle.getString("SESSION_TOKEN_KEY")) != null) {
            return "Bearer " + string;
        }
        return null;
    }

    public final StaticInquiryTemplate t() {
        Bundle bundle = this.f18899a;
        if (bundle != null) {
            return (StaticInquiryTemplate) w1.b.a(bundle, "STATIC_INQUIRY_TEMPLATE_KEY", StaticInquiryTemplate.class);
        }
        return null;
    }

    public final String u() {
        Bundle bundle = this.f18899a;
        if (bundle != null) {
            return bundle.getString("TEMPLATE_ID_KEY");
        }
        return null;
    }

    public final String v() {
        Bundle bundle = this.f18899a;
        if (bundle != null) {
            return bundle.getString("TEMPLATE_VERSION_KEY");
        }
        return null;
    }

    public final Integer w() {
        Bundle bundle = this.f18899a;
        if (bundle != null) {
            return Integer.valueOf(bundle.getInt("THEME_KEY"));
        }
        return null;
    }

    public final String x() {
        Bundle bundle = this.f18899a;
        if (bundle != null) {
            return bundle.getString("THEME_SET_ID_KEY");
        }
        return null;
    }

    public final boolean y() {
        Bundle bundle = this.f18899a;
        if (bundle == null) {
            return true;
        }
        return bundle.getBoolean("USE_SERVER_STYLES", true);
    }

    public final String z() {
        String string;
        Bundle bundle = this.f18899a;
        if (bundle == null || (string = bundle.getString("WEB_RTC_SERVER_ENDPOINT", "https://webrtc-consumer.withpersona.com")) == null) {
            return "https://webrtc-consumer.withpersona.com";
        }
        return string;
    }
}
