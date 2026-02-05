package j2;

import h2.l;
import h2.m;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e extends m {

    /* renamed from: p  reason: collision with root package name */
    public static final a f30738p = new a(null);

    /* renamed from: o  reason: collision with root package name */
    private final String f30739o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final m a(String type, String str) {
            Intrinsics.checkNotNullParameter(type, "type");
            try {
                if (StringsKt.P(type, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION", false, 2, null)) {
                    return d.f30736r.a(type, str);
                }
                throw new k2.b();
            } catch (k2.b unused) {
                return new l(type, str);
            }
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(String type, CharSequence charSequence) {
        super(type, charSequence);
        Intrinsics.checkNotNullParameter(type, "type");
        this.f30739o = type;
        if (a().length() > 0) {
            return;
        }
        throw new IllegalArgumentException("type must not be empty");
    }

    public String a() {
        return this.f30739o;
    }
}
