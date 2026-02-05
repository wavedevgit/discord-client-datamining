package g2;

import android.content.ComponentName;
import android.os.Bundle;
import java.util.Collection;
import java.util.List;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c0 {

    /* renamed from: f  reason: collision with root package name */
    public static final a f23573f = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final List f23574a;

    /* renamed from: b  reason: collision with root package name */
    private final String f23575b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f23576c;

    /* renamed from: d  reason: collision with root package name */
    private final ComponentName f23577d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23578e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Bundle a(c0 request) {
            Intrinsics.checkNotNullParameter(request, "request");
            Bundle bundle = new Bundle();
            bundle.putBoolean("androidx.credentials.BUNDLE_KEY_PREFER_IDENTITY_DOC_UI", request.c());
            bundle.putBoolean("androidx.credentials.BUNDLE_KEY_PREFER_IMMEDIATELY_AVAILABLE_CREDENTIALS", request.e());
            bundle.putParcelable("androidx.credentials.BUNDLE_KEY_PREFER_UI_BRANDING_COMPONENT_NAME", request.d());
            return bundle;
        }

        private a() {
        }
    }

    public c0(List credentialOptions, String str, boolean z10, ComponentName componentName, boolean z11) {
        Intrinsics.checkNotNullParameter(credentialOptions, "credentialOptions");
        this.f23574a = credentialOptions;
        this.f23575b = str;
        this.f23576c = z10;
        this.f23577d = componentName;
        this.f23578e = z11;
        if (!credentialOptions.isEmpty()) {
            if (credentialOptions.size() > 1) {
                List<l> list = credentialOptions;
                if (!(list instanceof Collection) || !list.isEmpty()) {
                    for (l lVar : list) {
                    }
                }
                for (l lVar2 : this.f23574a) {
                }
                return;
            }
            return;
        }
        throw new IllegalArgumentException("credentialOptions should not be empty");
    }

    public final List a() {
        return this.f23574a;
    }

    public final String b() {
        return this.f23575b;
    }

    public final boolean c() {
        return this.f23576c;
    }

    public final ComponentName d() {
        return this.f23577d;
    }

    public final boolean e() {
        return this.f23578e;
    }

    public /* synthetic */ c0(List list, String str, boolean z10, ComponentName componentName, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(list, (i10 & 2) != 0 ? null : str, (i10 & 4) != 0 ? false : z10, (i10 & 8) != 0 ? null : componentName, (i10 & 16) != 0 ? false : z11);
    }
}
