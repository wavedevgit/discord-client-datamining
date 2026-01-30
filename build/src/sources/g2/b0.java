package g2;

import android.os.Bundle;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 extends h {

    /* renamed from: e  reason: collision with root package name */
    public static final a f25577e = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final String f25578d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final b0 a(Bundle data) {
            Intrinsics.checkNotNullParameter(data, "data");
            try {
                String string = data.getString("androidx.credentials.BUNDLE_KEY_REQUEST_JSON");
                Intrinsics.checkNotNull(string);
                return new b0(string, data, null);
            } catch (Exception unused) {
                throw new k2.b();
            }
        }

        private a() {
        }
    }

    public /* synthetic */ b0(String str, Bundle bundle, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, bundle);
    }

    private b0(String str, Bundle bundle) {
        super("androidx.credentials.TYPE_DIGITAL_CREDENTIAL", bundle);
        this.f25578d = str;
        if (!k2.c.f32954a.a(str)) {
            throw new IllegalArgumentException("credentialJson must not be empty, and must be a valid JSON");
        }
    }
}
