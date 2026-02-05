package g2;

import android.graphics.drawable.Icon;
import android.os.Bundle;
import android.text.TextUtils;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: i  reason: collision with root package name */
    public static final a f23554i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f23555a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f23556b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f23557c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f23558d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23559e;

    /* renamed from: f  reason: collision with root package name */
    private final C0336b f23560f;

    /* renamed from: g  reason: collision with root package name */
    private final String f23561g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f23562h;

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
    public static final class C0336b {

        /* renamed from: e  reason: collision with root package name */
        public static final a f23563e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        private final CharSequence f23564a;

        /* renamed from: b  reason: collision with root package name */
        private final CharSequence f23565b;

        /* renamed from: c  reason: collision with root package name */
        private final Icon f23566c;

        /* renamed from: d  reason: collision with root package name */
        private final String f23567d;

        /* renamed from: g2.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private a() {
            }
        }

        public C0336b(CharSequence userId, CharSequence charSequence, Icon icon, String str) {
            Intrinsics.checkNotNullParameter(userId, "userId");
            this.f23564a = userId;
            this.f23565b = charSequence;
            this.f23566c = icon;
            this.f23567d = str;
            if (userId.length() > 0) {
                return;
            }
            throw new IllegalArgumentException("userId should not be empty");
        }

        public final Bundle a() {
            Bundle bundle = new Bundle();
            bundle.putCharSequence("androidx.credentials.BUNDLE_KEY_USER_ID", this.f23564a);
            if (!TextUtils.isEmpty(this.f23565b)) {
                bundle.putCharSequence("androidx.credentials.BUNDLE_KEY_USER_DISPLAY_NAME", this.f23565b);
            }
            if (!TextUtils.isEmpty(this.f23567d)) {
                bundle.putString("androidx.credentials.BUNDLE_KEY_DEFAULT_PROVIDER", this.f23567d);
            }
            return bundle;
        }
    }

    public b(String type, Bundle credentialData, Bundle candidateQueryData, boolean z10, boolean z11, C0336b displayInfo, String str, boolean z12) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(credentialData, "credentialData");
        Intrinsics.checkNotNullParameter(candidateQueryData, "candidateQueryData");
        Intrinsics.checkNotNullParameter(displayInfo, "displayInfo");
        this.f23555a = type;
        this.f23556b = credentialData;
        this.f23557c = candidateQueryData;
        this.f23558d = z10;
        this.f23559e = z11;
        this.f23560f = displayInfo;
        this.f23561g = str;
        this.f23562h = z12;
        credentialData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        credentialData.putBoolean("androidx.credentials.BUNDLE_KEY_PREFER_IMMEDIATELY_AVAILABLE_CREDENTIALS", z12);
        candidateQueryData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
    }

    public final Bundle a() {
        return this.f23557c;
    }

    public final Bundle b() {
        return this.f23556b;
    }

    public final C0336b c() {
        return this.f23560f;
    }

    public final String d() {
        return this.f23561g;
    }

    public final String e() {
        return this.f23555a;
    }

    public final boolean f() {
        return this.f23558d;
    }
}
