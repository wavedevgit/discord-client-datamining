package g2;

import android.graphics.drawable.Icon;
import android.os.Bundle;
import android.text.TextUtils;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: i  reason: collision with root package name */
    public static final a f23807i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f23808a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f23809b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f23810c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f23811d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23812e;

    /* renamed from: f  reason: collision with root package name */
    private final C0333b f23813f;

    /* renamed from: g  reason: collision with root package name */
    private final String f23814g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f23815h;

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
    public static final class C0333b {

        /* renamed from: e  reason: collision with root package name */
        public static final a f23816e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        private final CharSequence f23817a;

        /* renamed from: b  reason: collision with root package name */
        private final CharSequence f23818b;

        /* renamed from: c  reason: collision with root package name */
        private final Icon f23819c;

        /* renamed from: d  reason: collision with root package name */
        private final String f23820d;

        /* renamed from: g2.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private a() {
            }
        }

        public C0333b(CharSequence userId, CharSequence charSequence, Icon icon, String str) {
            Intrinsics.checkNotNullParameter(userId, "userId");
            this.f23817a = userId;
            this.f23818b = charSequence;
            this.f23819c = icon;
            this.f23820d = str;
            if (userId.length() > 0) {
                return;
            }
            throw new IllegalArgumentException("userId should not be empty");
        }

        public final Bundle a() {
            Bundle bundle = new Bundle();
            bundle.putCharSequence("androidx.credentials.BUNDLE_KEY_USER_ID", this.f23817a);
            if (!TextUtils.isEmpty(this.f23818b)) {
                bundle.putCharSequence("androidx.credentials.BUNDLE_KEY_USER_DISPLAY_NAME", this.f23818b);
            }
            if (!TextUtils.isEmpty(this.f23820d)) {
                bundle.putString("androidx.credentials.BUNDLE_KEY_DEFAULT_PROVIDER", this.f23820d);
            }
            return bundle;
        }
    }

    public b(String type, Bundle credentialData, Bundle candidateQueryData, boolean z10, boolean z11, C0333b displayInfo, String str, boolean z12) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(credentialData, "credentialData");
        Intrinsics.checkNotNullParameter(candidateQueryData, "candidateQueryData");
        Intrinsics.checkNotNullParameter(displayInfo, "displayInfo");
        this.f23808a = type;
        this.f23809b = credentialData;
        this.f23810c = candidateQueryData;
        this.f23811d = z10;
        this.f23812e = z11;
        this.f23813f = displayInfo;
        this.f23814g = str;
        this.f23815h = z12;
        credentialData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
        credentialData.putBoolean("androidx.credentials.BUNDLE_KEY_PREFER_IMMEDIATELY_AVAILABLE_CREDENTIALS", z12);
        candidateQueryData.putBoolean("androidx.credentials.BUNDLE_KEY_IS_AUTO_SELECT_ALLOWED", z11);
    }

    public final Bundle a() {
        return this.f23810c;
    }

    public final Bundle b() {
        return this.f23809b;
    }

    public final C0333b c() {
        return this.f23813f;
    }

    public final String d() {
        return this.f23814g;
    }

    public final String e() {
        return this.f23808a;
    }

    public final boolean f() {
        return this.f23811d;
    }
}
