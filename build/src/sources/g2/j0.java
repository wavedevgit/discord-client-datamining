package g2;

import android.os.Bundle;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class j0 extends h {

    /* renamed from: e  reason: collision with root package name */
    public static final a f25609e = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final String f25610d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final j0 a(Bundle data) {
            Intrinsics.checkNotNullParameter(data, "data");
            String string = data.getString("androidx.credentials.BUNDLE_KEY_GET_RESTORE_CREDENTIAL_RESPONSE");
            if (string != null) {
                return new j0(string, data, null);
            }
            throw new h2.r("The device does not contain a restore credential.");
        }

        private a() {
        }
    }

    public /* synthetic */ j0(String str, Bundle bundle, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, bundle);
    }

    private j0(String str, Bundle bundle) {
        super("androidx.credentials.TYPE_RESTORE_CREDENTIAL", bundle);
        this.f25610d = str;
        if (!k2.c.f32954a.a(str)) {
            throw new IllegalArgumentException("authenticationResponseJson must not be empty, and must be a valid JSON");
        }
    }
}
