package g2;

import android.os.Bundle;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l {

    /* renamed from: h  reason: collision with root package name */
    public static final a f25708h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f25709a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f25710b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f25711c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f25712d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f25713e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f25714f;

    /* renamed from: g  reason: collision with root package name */
    private final int f25715g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public l(String type, Bundle requestData, Bundle candidateQueryData, boolean z10, boolean z11, Set allowedProviders, int i10) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(requestData, "requestData");
        Intrinsics.checkNotNullParameter(candidateQueryData, "candidateQueryData");
        Intrinsics.checkNotNullParameter(allowedProviders, "allowedProviders");
        this.f25709a = type;
        this.f25710b = requestData;
        this.f25711c = candidateQueryData;
        this.f25712d = z10;
        this.f25713e = z11;
        this.f25714f = allowedProviders;
        this.f25715g = i10;
        requestData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        candidateQueryData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        requestData.putInt("androidx.credentials.BUNDLE_KEY_TYPE_PRIORITY_VALUE", i10);
        candidateQueryData.putInt("androidx.credentials.BUNDLE_KEY_TYPE_PRIORITY_VALUE", i10);
    }

    public final Set a() {
        return this.f25714f;
    }

    public final Bundle b() {
        return this.f25711c;
    }

    public final Bundle c() {
        return this.f25710b;
    }

    public final String d() {
        return this.f25709a;
    }

    public final boolean e() {
        return this.f25712d;
    }
}
