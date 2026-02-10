package g2;

import android.graphics.drawable.Icon;
import android.os.Bundle;
import android.text.TextUtils;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: i  reason: collision with root package name */
    public static final a f24632i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f24633a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f24634b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f24635c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f24636d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f24637e;

    /* renamed from: f  reason: collision with root package name */
    private final C0338b f24638f;

    /* renamed from: g  reason: collision with root package name */
    private final String f24639g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f24640h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* renamed from: g2.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0338b {

        /* renamed from: e  reason: collision with root package name */
        public static final a f24641e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        private final CharSequence f24642a;

        /* renamed from: b  reason: collision with root package name */
        private final CharSequence f24643b;

        /* renamed from: c  reason: collision with root package name */
        private final Icon f24644c;

        /* renamed from: d  reason: collision with root package name */
        private final String f24645d;

        /* renamed from: g2.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private a() {
            }
        }

        public C0338b(CharSequence userId, CharSequence charSequence, Icon icon, String str) {
            Intrinsics.checkNotNullParameter(userId, "userId");
            this.f24642a = userId;
            this.f24643b = charSequence;
            this.f24644c = icon;
            this.f24645d = str;
            if (userId.length() > 0) {
                return;
            }
            throw new IllegalArgumentException("userId should not be empty");
        }

        public final Bundle a() {
            Bundle bundle = new Bundle();
            bundle.putCharSequence("androidx.credentials.BUNDLE_KEY_USER_ID", this.f24642a);
            if (!TextUtils.isEmpty(this.f24643b)) {
                bundle.putCharSequence("androidx.credentials.BUNDLE_KEY_USER_DISPLAY_NAME", this.f24643b);
            }
            if (!TextUtils.isEmpty(this.f24645d)) {
                bundle.putString("androidx.credentials.BUNDLE_KEY_DEFAULT_PROVIDER", this.f24645d);
            }
            return bundle;
        }
    }

    public b(String type, Bundle credentialData, Bundle candidateQueryData, boolean z10, boolean z11, C0338b displayInfo, String str, boolean z12) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(credentialData, "credentialData");
        Intrinsics.checkNotNullParameter(candidateQueryData, "candidateQueryData");
        Intrinsics.checkNotNullParameter(displayInfo, "displayInfo");
        this.f24633a = type;
        this.f24634b = credentialData;
        this.f24635c = candidateQueryData;
        this.f24636d = z10;
        this.f24637e = z11;
        this.f24638f = displayInfo;
        this.f24639g = str;
        this.f24640h = z12;
        credentialData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        credentialData.putBoolean("androidx.credentials.BUNDLE_KEY_PREFER_IMMEDIATELY_AVAILABLE_CREDENTIALS", z12);
        candidateQueryData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
    }

    public final Bundle a() {
        return this.f24635c;
    }

    public final Bundle b() {
        return this.f24634b;
    }

    public final C0338b c() {
        return this.f24638f;
    }

    public final String d() {
        return this.f24639g;
    }

    public final String e() {
        return this.f24633a;
    }

    public final boolean f() {
        return this.f24636d;
    }
}
