package g2;

import android.graphics.drawable.Icon;
import android.os.Bundle;
import android.text.TextUtils;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: i  reason: collision with root package name */
    public static final a f25563i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f25564a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f25565b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f25566c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f25567d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f25568e;

    /* renamed from: f  reason: collision with root package name */
    private final C0336b f25569f;

    /* renamed from: g  reason: collision with root package name */
    private final String f25570g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f25571h;

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
        public static final a f25572e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        private final CharSequence f25573a;

        /* renamed from: b  reason: collision with root package name */
        private final CharSequence f25574b;

        /* renamed from: c  reason: collision with root package name */
        private final Icon f25575c;

        /* renamed from: d  reason: collision with root package name */
        private final String f25576d;

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
            this.f25573a = userId;
            this.f25574b = charSequence;
            this.f25575c = icon;
            this.f25576d = str;
            if (userId.length() > 0) {
                return;
            }
            throw new IllegalArgumentException("userId should not be empty");
        }

        public final Bundle a() {
            Bundle bundle = new Bundle();
            bundle.putCharSequence("androidx.credentials.BUNDLE_KEY_USER_ID", this.f25573a);
            if (!TextUtils.isEmpty(this.f25574b)) {
                bundle.putCharSequence("androidx.credentials.BUNDLE_KEY_USER_DISPLAY_NAME", this.f25574b);
            }
            if (!TextUtils.isEmpty(this.f25576d)) {
                bundle.putString("androidx.credentials.BUNDLE_KEY_DEFAULT_PROVIDER", this.f25576d);
            }
            return bundle;
        }
    }

    public b(String type, Bundle credentialData, Bundle candidateQueryData, boolean z10, boolean z11, C0336b displayInfo, String str, boolean z12) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(credentialData, "credentialData");
        Intrinsics.checkNotNullParameter(candidateQueryData, "candidateQueryData");
        Intrinsics.checkNotNullParameter(displayInfo, "displayInfo");
        this.f25564a = type;
        this.f25565b = credentialData;
        this.f25566c = candidateQueryData;
        this.f25567d = z10;
        this.f25568e = z11;
        this.f25569f = displayInfo;
        this.f25570g = str;
        this.f25571h = z12;
        credentialData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        credentialData.putBoolean("androidx.credentials.BUNDLE_KEY_PREFER_IMMEDIATELY_AVAILABLE_CREDENTIALS", z12);
        candidateQueryData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
    }

    public final Bundle a() {
        return this.f25566c;
    }

    public final Bundle b() {
        return this.f25565b;
    }

    public final C0336b c() {
        return this.f25569f;
    }

    public final String d() {
        return this.f25570g;
    }

    public final String e() {
        return this.f25564a;
    }

    public final boolean f() {
        return this.f25567d;
    }
}
