package g2;

import android.os.Bundle;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: c  reason: collision with root package name */
    public static final a f24871c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f24872a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f24873b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final c a(String type, Bundle data) {
            Intrinsics.checkNotNullParameter(type, "type");
            Intrinsics.checkNotNullParameter(data, "data");
            try {
                if (Intrinsics.areEqual(type, "android.credentials.TYPE_PASSWORD_CREDENTIAL")) {
                    return e.f24882d.a(data);
                }
                if (Intrinsics.areEqual(type, "androidx.credentials.TYPE_PUBLIC_KEY_CREDENTIAL")) {
                    return g.f24892e.a(data);
                }
                throw new k2.b();
            } catch (k2.b unused) {
                return new d(type, data);
            }
        }

        private a() {
        }
    }

    public c(String type, Bundle data) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(data, "data");
        this.f24872a = type;
        this.f24873b = data;
    }

    public final String a() {
        return this.f24872a;
    }
}
