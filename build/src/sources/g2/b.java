package g2;

import android.graphics.drawable.Icon;
import android.os.Bundle;
import android.text.TextUtils;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: i  reason: collision with root package name */
    public static final a f24855i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f24856a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f24857b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f24858c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f24859d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f24860e;

    /* renamed from: f  reason: collision with root package name */
    private final C0334b f24861f;

    /* renamed from: g  reason: collision with root package name */
    private final String f24862g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f24863h;

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
    public static final class C0334b {

        /* renamed from: e  reason: collision with root package name */
        public static final a f24864e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        private final CharSequence f24865a;

        /* renamed from: b  reason: collision with root package name */
        private final CharSequence f24866b;

        /* renamed from: c  reason: collision with root package name */
        private final Icon f24867c;

        /* renamed from: d  reason: collision with root package name */
        private final String f24868d;

        /* renamed from: g2.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private a() {
            }
        }

        public C0334b(CharSequence userId, CharSequence charSequence, Icon icon, String str) {
            Intrinsics.checkNotNullParameter(userId, "userId");
            this.f24865a = userId;
            this.f24866b = charSequence;
            this.f24867c = icon;
            this.f24868d = str;
            if (userId.length() > 0) {
                return;
            }
            throw new IllegalArgumentException("userId should not be empty");
        }

        public final Bundle a() {
            Bundle bundle = new Bundle();
            bundle.putCharSequence("androidx.credentials.BUNDLE_KEY_USER_ID", this.f24865a);
            if (!TextUtils.isEmpty(this.f24866b)) {
                bundle.putCharSequence("androidx.credentials.BUNDLE_KEY_USER_DISPLAY_NAME", this.f24866b);
            }
            if (!TextUtils.isEmpty(this.f24868d)) {
                bundle.putString("androidx.credentials.BUNDLE_KEY_DEFAULT_PROVIDER", this.f24868d);
            }
            return bundle;
        }
    }

    public b(String type, Bundle credentialData, Bundle candidateQueryData, boolean z10, boolean z11, C0334b displayInfo, String str, boolean z12) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(credentialData, "credentialData");
        Intrinsics.checkNotNullParameter(candidateQueryData, "candidateQueryData");
        Intrinsics.checkNotNullParameter(displayInfo, "displayInfo");
        this.f24856a = type;
        this.f24857b = credentialData;
        this.f24858c = candidateQueryData;
        this.f24859d = z10;
        this.f24860e = z11;
        this.f24861f = displayInfo;
        this.f24862g = str;
        this.f24863h = z12;
        credentialData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        credentialData.putBoolean("androidx.credentials.BUNDLE_KEY_PREFER_IMMEDIATELY_AVAILABLE_CREDENTIALS", z12);
        candidateQueryData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
    }

    public final Bundle a() {
        return this.f24858c;
    }

    public final Bundle b() {
        return this.f24857b;
    }

    public final C0334b c() {
        return this.f24861f;
    }

    public final String d() {
        return this.f24862g;
    }

    public final String e() {
        return this.f24856a;
    }

    public final boolean f() {
        return this.f24859d;
    }
}
