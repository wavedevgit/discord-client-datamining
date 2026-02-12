package g2;

import android.os.Bundle;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l {

    /* renamed from: h  reason: collision with root package name */
    public static final a f24683h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f24684a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f24685b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f24686c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f24687d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f24688e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f24689f;

    /* renamed from: g  reason: collision with root package name */
    private final int f24690g;

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
        this.f24684a = type;
        this.f24685b = requestData;
        this.f24686c = candidateQueryData;
        this.f24687d = z10;
        this.f24688e = z11;
        this.f24689f = allowedProviders;
        this.f24690g = i10;
        requestData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        candidateQueryData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        requestData.putInt("androidx.credentials.BUNDLE_KEY_TYPE_PRIORITY_VALUE", i10);
        candidateQueryData.putInt("androidx.credentials.BUNDLE_KEY_TYPE_PRIORITY_VALUE", i10);
    }

    public final Set a() {
        return this.f24689f;
    }

    public final Bundle b() {
        return this.f24686c;
    }

    public final Bundle c() {
        return this.f24685b;
    }

    public final String d() {
        return this.f24684a;
    }

    public final boolean e() {
        return this.f24687d;
    }
}
