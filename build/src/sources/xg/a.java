package xg;

import android.net.Uri;
import g2.a0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends a0 {

    /* renamed from: k  reason: collision with root package name */
    public static final b f53264k = new b(null);

    /* renamed from: d  reason: collision with root package name */
    private final String f53265d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53266e;

    /* renamed from: f  reason: collision with root package name */
    private final String f53267f;

    /* renamed from: g  reason: collision with root package name */
    private final String f53268g;

    /* renamed from: h  reason: collision with root package name */
    private final String f53269h;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f53270i;

    /* renamed from: j  reason: collision with root package name */
    private final String f53271j;

    /* renamed from: xg.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0722a {

        /* renamed from: a  reason: collision with root package name */
        private String f53272a = "";

        /* renamed from: b  reason: collision with root package name */
        private String f53273b = "";

        /* renamed from: c  reason: collision with root package name */
        private String f53274c;

        /* renamed from: d  reason: collision with root package name */
        private String f53275d;

        /* renamed from: e  reason: collision with root package name */
        private String f53276e;

        /* renamed from: f  reason: collision with root package name */
        private Uri f53277f;

        /* renamed from: g  reason: collision with root package name */
        private String f53278g;

        public final a a() {
            return new a(this.f53272a, this.f53273b, this.f53274c, this.f53275d, this.f53276e, this.f53277f, this.f53278g);
        }

        public final C0722a b(String str) {
            this.f53274c = str;
            return this;
        }

        public final C0722a c(String str) {
            this.f53275d = str;
            return this;
        }

        public final C0722a d(String str) {
            this.f53276e = str;
            return this;
        }

        public final C0722a e(String id2) {
            Intrinsics.checkNotNullParameter(id2, "id");
            this.f53272a = id2;
            return this;
        }

        public final C0722a f(String idToken) {
            Intrinsics.checkNotNullParameter(idToken, "idToken");
            this.f53273b = idToken;
            return this;
        }

        public final C0722a g(String str) {
            this.f53278g = str;
            return this;
        }

        public final C0722a h(Uri uri) {
            this.f53277f = uri;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
        }
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public a(java.lang.String r3, java.lang.String r4, java.lang.String r5, java.lang.String r6, java.lang.String r7, android.net.Uri r8, java.lang.String r9) {
        /*
            r2 = this;
            java.lang.String r0 = "id"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            java.lang.String r1 = "idToken"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r1)
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r1)
            android.os.Bundle r0 = new android.os.Bundle
            r0.<init>()
            java.lang.String r1 = "com.google.android.libraries.identity.googleid.BUNDLE_KEY_ID"
            r0.putString(r1, r3)
            java.lang.String r1 = "com.google.android.libraries.identity.googleid.BUNDLE_KEY_ID_TOKEN"
            r0.putString(r1, r4)
            java.lang.String r1 = "com.google.android.libraries.identity.googleid.BUNDLE_KEY_DISPLAY_NAME"
            r0.putString(r1, r5)
            java.lang.String r1 = "com.google.android.libraries.identity.googleid.BUNDLE_KEY_FAMILY_NAME"
            r0.putString(r1, r6)
            java.lang.String r1 = "com.google.android.libraries.identity.googleid.BUNDLE_KEY_GIVEN_NAME"
            r0.putString(r1, r7)
            java.lang.String r1 = "com.google.android.libraries.identity.googleid.BUNDLE_KEY_PHONE_NUMBER"
            r0.putString(r1, r9)
            java.lang.String r1 = "com.google.android.libraries.identity.googleid.BUNDLE_KEY_PROFILE_PICTURE_URI"
            r0.putParcelable(r1, r8)
            java.lang.String r1 = "com.google.android.libraries.identity.googleid.TYPE_GOOGLE_ID_TOKEN_CREDENTIAL"
            r2.<init>(r1, r0)
            r2.f53265d = r3
            r2.f53266e = r4
            r2.f53267f = r5
            r2.f53268g = r6
            r2.f53269h = r7
            r2.f53270i = r8
            r2.f53271j = r9
            int r3 = r3.length()
            if (r3 <= 0) goto L60
            int r3 = r4.length()
            if (r3 <= 0) goto L58
            return
        L58:
            java.lang.IllegalArgumentException r3 = new java.lang.IllegalArgumentException
            java.lang.String r4 = "idToken should not be empty"
            r3.<init>(r4)
            throw r3
        L60:
            java.lang.IllegalArgumentException r3 = new java.lang.IllegalArgumentException
            java.lang.String r4 = "id should not be empty"
            r3.<init>(r4)
            throw r3
        */
        throw new UnsupportedOperationException("Method not decompiled: xg.a.<init>(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, android.net.Uri, java.lang.String):void");
    }
}
