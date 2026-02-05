package g2;

import android.os.Bundle;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h0 extends h {

    /* renamed from: e  reason: collision with root package name */
    public static final a f23596e = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final String f23597d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final h0 a(Bundle data) {
            Intrinsics.checkNotNullParameter(data, "data");
            try {
                String string = data.getString("androidx.credentials.BUNDLE_KEY_AUTHENTICATION_RESPONSE_JSON");
                Intrinsics.checkNotNull(string);
                return new h0(string, data, null);
            } catch (Exception unused) {
                throw new k2.b();
            }
        }

        public final Bundle b(String authenticationResponseJson) {
            Intrinsics.checkNotNullParameter(authenticationResponseJson, "authenticationResponseJson");
            Bundle bundle = new Bundle();
            bundle.putString("androidx.credentials.BUNDLE_KEY_AUTHENTICATION_RESPONSE_JSON", authenticationResponseJson);
            return bundle;
        }

        private a() {
        }
    }

    public /* synthetic */ h0(String str, Bundle bundle, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, bundle);
    }

    public final String a() {
        return this.f23597d;
    }

    private h0(String str, Bundle bundle) {
        super("androidx.credentials.TYPE_PUBLIC_KEY_CREDENTIAL", bundle);
        this.f23597d = str;
        if (!k2.c.f31561a.a(str)) {
            throw new IllegalArgumentException("authenticationResponseJson must not be empty, and must be a valid JSON");
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public h0(String authenticationResponseJson) {
        this(authenticationResponseJson, f23596e.b(authenticationResponseJson));
        Intrinsics.checkNotNullParameter(authenticationResponseJson, "authenticationResponseJson");
    }
}
