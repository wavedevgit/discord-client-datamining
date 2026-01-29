package g2;

import android.os.Bundle;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l {

    /* renamed from: h  reason: collision with root package name */
    public static final a f25613h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f25614a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f25615b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f25616c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f25617d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f25618e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f25619f;

    /* renamed from: g  reason: collision with root package name */
    private final int f25620g;

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
        this.f25614a = type;
        this.f25615b = requestData;
        this.f25616c = candidateQueryData;
        this.f25617d = z10;
        this.f25618e = z11;
        this.f25619f = allowedProviders;
        this.f25620g = i10;
        requestData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        candidateQueryData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        requestData.putInt("androidx.credentials.BUNDLE_KEY_TYPE_PRIORITY_VALUE", i10);
        candidateQueryData.putInt("androidx.credentials.BUNDLE_KEY_TYPE_PRIORITY_VALUE", i10);
    }

    public final Set a() {
        return this.f25619f;
    }

    public final Bundle b() {
        return this.f25616c;
    }

    public final Bundle c() {
        return this.f25615b;
    }

    public final String d() {
        return this.f25614a;
    }

    public final boolean e() {
        return this.f25617d;
    }
}
