package g2;

import android.credentials.Credential;
import android.os.Bundle;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class h {

    /* renamed from: c  reason: collision with root package name */
    public static final a f25697c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f25698a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f25699b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final h a(Credential credential) {
            Intrinsics.checkNotNullParameter(credential, "credential");
            String type = credential.getType();
            Intrinsics.checkNotNullExpressionValue(type, "credential.type");
            Bundle data = credential.getData();
            Intrinsics.checkNotNullExpressionValue(data, "credential.data");
            return b(type, data);
        }

        public final h b(String type, Bundle data) {
            Intrinsics.checkNotNullParameter(type, "type");
            Intrinsics.checkNotNullParameter(data, "data");
            try {
                switch (type.hashCode()) {
                    case -1678407252:
                        if (type.equals("androidx.credentials.TYPE_DIGITAL_CREDENTIAL")) {
                            return b0.f25672e.a(data);
                        }
                        break;
                    case -1072734346:
                        if (type.equals("androidx.credentials.TYPE_RESTORE_CREDENTIAL")) {
                            return j0.f25704e.a(data);
                        }
                        break;
                    case -543568185:
                        if (type.equals("android.credentials.TYPE_PASSWORD_CREDENTIAL")) {
                            return f0.f25692f.a(data);
                        }
                        break;
                    case -95037569:
                        if (type.equals("androidx.credentials.TYPE_PUBLIC_KEY_CREDENTIAL")) {
                            return h0.f25700e.a(data);
                        }
                        break;
                }
                throw new k2.b();
            } catch (k2.b unused) {
                return new a0(type, data);
            }
        }

        private a() {
        }
    }

    public h(String type, Bundle data) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(data, "data");
        this.f25698a = type;
        this.f25699b = data;
    }
}
