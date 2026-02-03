package g2;

import android.os.Bundle;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l {

    /* renamed from: h  reason: collision with root package name */
    public static final a f24905h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f24906a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f24907b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f24908c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f24909d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f24910e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f24911f;

    /* renamed from: g  reason: collision with root package name */
    private final int f24912g;

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
        this.f24906a = type;
        this.f24907b = requestData;
        this.f24908c = candidateQueryData;
        this.f24909d = z10;
        this.f24910e = z11;
        this.f24911f = allowedProviders;
        this.f24912g = i10;
        requestData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        candidateQueryData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        requestData.putInt("androidx.credentials.BUNDLE_KEY_TYPE_PRIORITY_VALUE", i10);
        candidateQueryData.putInt("androidx.credentials.BUNDLE_KEY_TYPE_PRIORITY_VALUE", i10);
    }

    public final Set a() {
        return this.f24911f;
    }

    public final Bundle b() {
        return this.f24908c;
    }

    public final Bundle c() {
        return this.f24907b;
    }

    public final String d() {
        return this.f24906a;
    }

    public final boolean e() {
        return this.f24909d;
    }
}
