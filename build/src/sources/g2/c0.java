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
    public static final a f23351f = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final List f23352a;

    /* renamed from: b  reason: collision with root package name */
    private final String f23353b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f23354c;

    /* renamed from: d  reason: collision with root package name */
    private final ComponentName f23355d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23356e;

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
        this.f23352a = credentialOptions;
        this.f23353b = str;
        this.f23354c = z10;
        this.f23355d = componentName;
        this.f23356e = z11;
        if (!credentialOptions.isEmpty()) {
            if (credentialOptions.size() > 1) {
                List<l> list = credentialOptions;
                if (!(list instanceof Collection) || !list.isEmpty()) {
                    for (l lVar : list) {
                    }
                }
                for (l lVar2 : this.f23352a) {
                }
                return;
            }
            return;
        }
        throw new IllegalArgumentException("credentialOptions should not be empty");
    }

    public final List a() {
        return this.f23352a;
    }

    public final String b() {
        return this.f23353b;
    }

    public final boolean c() {
        return this.f23354c;
    }

    public final ComponentName d() {
        return this.f23355d;
    }

    public final boolean e() {
        return this.f23356e;
    }

    public /* synthetic */ c0(List list, String str, boolean z10, ComponentName componentName, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(list, (i10 & 2) != 0 ? null : str, (i10 & 4) != 0 ? false : z10, (i10 & 8) != 0 ? null : componentName, (i10 & 16) != 0 ? false : z11);
    }
}
