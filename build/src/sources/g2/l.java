package g2;

import android.os.Bundle;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l {

    /* renamed from: h  reason: collision with root package name */
    public static final a f24682h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f24683a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f24684b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f24685c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f24686d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f24687e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f24688f;

    /* renamed from: g  reason: collision with root package name */
    private final int f24689g;

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
        this.f24683a = type;
        this.f24684b = requestData;
        this.f24685c = candidateQueryData;
        this.f24686d = z10;
        this.f24687e = z11;
        this.f24688f = allowedProviders;
        this.f24689g = i10;
        requestData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        candidateQueryData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        requestData.putInt("androidx.credentials.BUNDLE_KEY_TYPE_PRIORITY_VALUE", i10);
        candidateQueryData.putInt("androidx.credentials.BUNDLE_KEY_TYPE_PRIORITY_VALUE", i10);
    }

    public final Set a() {
        return this.f24688f;
    }

    public final Bundle b() {
        return this.f24685c;
    }

    public final Bundle c() {
        return this.f24684b;
    }

    public final String d() {
        return this.f24683a;
    }

    public final boolean e() {
        return this.f24686d;
    }
}
