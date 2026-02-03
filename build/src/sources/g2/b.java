package g2;

import android.graphics.drawable.Icon;
import android.os.Bundle;
import android.text.TextUtils;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: i  reason: collision with root package name */
    public static final a f25658i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f25659a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f25660b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f25661c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f25662d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f25663e;

    /* renamed from: f  reason: collision with root package name */
    private final C0348b f25664f;

    /* renamed from: g  reason: collision with root package name */
    private final String f25665g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f25666h;

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
    public static final class C0348b {

        /* renamed from: e  reason: collision with root package name */
        public static final a f25667e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        private final CharSequence f25668a;

        /* renamed from: b  reason: collision with root package name */
        private final CharSequence f25669b;

        /* renamed from: c  reason: collision with root package name */
        private final Icon f25670c;

        /* renamed from: d  reason: collision with root package name */
        private final String f25671d;

        /* renamed from: g2.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private a() {
            }
        }

        public C0348b(CharSequence userId, CharSequence charSequence, Icon icon, String str) {
            Intrinsics.checkNotNullParameter(userId, "userId");
            this.f25668a = userId;
            this.f25669b = charSequence;
            this.f25670c = icon;
            this.f25671d = str;
            if (userId.length() > 0) {
                return;
            }
            throw new IllegalArgumentException("userId should not be empty");
        }

        public final Bundle a() {
            Bundle bundle = new Bundle();
            bundle.putCharSequence("androidx.credentials.BUNDLE_KEY_USER_ID", this.f25668a);
            if (!TextUtils.isEmpty(this.f25669b)) {
                bundle.putCharSequence("androidx.credentials.BUNDLE_KEY_USER_DISPLAY_NAME", this.f25669b);
            }
            if (!TextUtils.isEmpty(this.f25671d)) {
                bundle.putString("androidx.credentials.BUNDLE_KEY_DEFAULT_PROVIDER", this.f25671d);
            }
            return bundle;
        }
    }

    public b(String type, Bundle credentialData, Bundle candidateQueryData, boolean z10, boolean z11, C0348b displayInfo, String str, boolean z12) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(credentialData, "credentialData");
        Intrinsics.checkNotNullParameter(candidateQueryData, "candidateQueryData");
        Intrinsics.checkNotNullParameter(displayInfo, "displayInfo");
        this.f25659a = type;
        this.f25660b = credentialData;
        this.f25661c = candidateQueryData;
        this.f25662d = z10;
        this.f25663e = z11;
        this.f25664f = displayInfo;
        this.f25665g = str;
        this.f25666h = z12;
        credentialData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        credentialData.putBoolean("androidx.credentials.BUNDLE_KEY_PREFER_IMMEDIATELY_AVAILABLE_CREDENTIALS", z12);
        candidateQueryData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
    }

    public final Bundle a() {
        return this.f25661c;
    }

    public final Bundle b() {
        return this.f25660b;
    }

    public final C0348b c() {
        return this.f25664f;
    }

    public final String d() {
        return this.f25665g;
    }

    public final String e() {
        return this.f25659a;
    }

    public final boolean f() {
        return this.f25662d;
    }
}
