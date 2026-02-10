package g2;

import android.os.Bundle;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l {

    /* renamed from: h  reason: collision with root package name */
    public static final a f23382h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f23383a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f23384b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f23385c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f23386d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23387e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f23388f;

    /* renamed from: g  reason: collision with root package name */
    private final int f23389g;

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
        this.f23383a = type;
        this.f23384b = requestData;
        this.f23385c = candidateQueryData;
        this.f23386d = z10;
        this.f23387e = z11;
        this.f23388f = allowedProviders;
        this.f23389g = i10;
        requestData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        candidateQueryData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        requestData.putInt("androidx.credentials.BUNDLE_KEY_TYPE_PRIORITY_VALUE", i10);
        candidateQueryData.putInt("androidx.credentials.BUNDLE_KEY_TYPE_PRIORITY_VALUE", i10);
    }

    public final Set a() {
        return this.f23388f;
    }

    public final Bundle b() {
        return this.f23385c;
    }

    public final Bundle c() {
        return this.f23384b;
    }

    public final String d() {
        return this.f23383a;
    }

    public final boolean e() {
        return this.f23386d;
    }
}
