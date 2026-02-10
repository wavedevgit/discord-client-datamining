package g2;

import android.graphics.drawable.Icon;
import android.os.Bundle;
import android.text.TextUtils;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: i  reason: collision with root package name */
    public static final a f23332i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f23333a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f23334b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f23335c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f23336d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23337e;

    /* renamed from: f  reason: collision with root package name */
    private final C0367b f23338f;

    /* renamed from: g  reason: collision with root package name */
    private final String f23339g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f23340h;

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
    public static final class C0367b {

        /* renamed from: e  reason: collision with root package name */
        public static final a f23341e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        private final CharSequence f23342a;

        /* renamed from: b  reason: collision with root package name */
        private final CharSequence f23343b;

        /* renamed from: c  reason: collision with root package name */
        private final Icon f23344c;

        /* renamed from: d  reason: collision with root package name */
        private final String f23345d;

        /* renamed from: g2.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private a() {
            }
        }

        public C0367b(CharSequence userId, CharSequence charSequence, Icon icon, String str) {
            Intrinsics.checkNotNullParameter(userId, "userId");
            this.f23342a = userId;
            this.f23343b = charSequence;
            this.f23344c = icon;
            this.f23345d = str;
            if (userId.length() > 0) {
                return;
            }
            throw new IllegalArgumentException("userId should not be empty");
        }

        public final Bundle a() {
            Bundle bundle = new Bundle();
            bundle.putCharSequence("androidx.credentials.BUNDLE_KEY_USER_ID", this.f23342a);
            if (!TextUtils.isEmpty(this.f23343b)) {
                bundle.putCharSequence("androidx.credentials.BUNDLE_KEY_USER_DISPLAY_NAME", this.f23343b);
            }
            if (!TextUtils.isEmpty(this.f23345d)) {
                bundle.putString("androidx.credentials.BUNDLE_KEY_DEFAULT_PROVIDER", this.f23345d);
            }
            return bundle;
        }
    }

    public b(String type, Bundle credentialData, Bundle candidateQueryData, boolean z10, boolean z11, C0367b displayInfo, String str, boolean z12) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(credentialData, "credentialData");
        Intrinsics.checkNotNullParameter(candidateQueryData, "candidateQueryData");
        Intrinsics.checkNotNullParameter(displayInfo, "displayInfo");
        this.f23333a = type;
        this.f23334b = credentialData;
        this.f23335c = candidateQueryData;
        this.f23336d = z10;
        this.f23337e = z11;
        this.f23338f = displayInfo;
        this.f23339g = str;
        this.f23340h = z12;
        credentialData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        credentialData.putBoolean("androidx.credentials.BUNDLE_KEY_PREFER_IMMEDIATELY_AVAILABLE_CREDENTIALS", z12);
        candidateQueryData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
    }

    public final Bundle a() {
        return this.f23335c;
    }

    public final Bundle b() {
        return this.f23334b;
    }

    public final C0367b c() {
        return this.f23338f;
    }

    public final String d() {
        return this.f23339g;
    }

    public final String e() {
        return this.f23333a;
    }

    public final boolean f() {
        return this.f23336d;
    }
}
