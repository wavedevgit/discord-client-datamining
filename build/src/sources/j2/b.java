package j2;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b extends h2.e {

    /* renamed from: p  reason: collision with root package name */
    public static final a f31850p = new a(null);

    /* renamed from: o  reason: collision with root package name */
    private final String f31851o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final h2.e a(String type, String str) {
            Intrinsics.checkNotNullParameter(type, "type");
            try {
                if (StringsKt.V(type, "androidx.credentials.TYPE_CREATE_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION", false, 2, null)) {
                    return j2.a.f31848r.a(type, str);
                }
                throw new k2.b();
            } catch (k2.b unused) {
                return new h2.d(type, str);
            }
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(String type, CharSequence charSequence) {
        super(type, charSequence);
        Intrinsics.checkNotNullParameter(type, "type");
        this.f31851o = type;
        if (a().length() > 0) {
            return;
        }
        throw new IllegalArgumentException("type must not be empty");
    }

    public String a() {
        return this.f31851o;
    }
}
