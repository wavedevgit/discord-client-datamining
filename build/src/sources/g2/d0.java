package g2;

import android.os.Bundle;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d0 {

    /* renamed from: b  reason: collision with root package name */
    public static final a f25683b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final h f25684a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final d0 a(Bundle bundle) {
            Bundle bundle2;
            Intrinsics.checkNotNullParameter(bundle, "bundle");
            String string = bundle.getString("androidx.credentials.provider.extra.EXTRA_CREDENTIAL_TYPE");
            if (string == null || (bundle2 = bundle.getBundle("androidx.credentials.provider.extra.EXTRA_CREDENTIAL_DATA")) == null) {
                return null;
            }
            return new d0(h.f25697c.b(string, bundle2));
        }

        private a() {
        }
    }

    public d0(h credential) {
        Intrinsics.checkNotNullParameter(credential, "credential");
        this.f25684a = credential;
    }

    public final h a() {
        return this.f25684a;
    }
}
