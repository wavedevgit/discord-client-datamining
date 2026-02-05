package yg;

import android.net.Uri;
import g2.a0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends a0 {

    /* renamed from: k  reason: collision with root package name */
    public static final b f54768k = new b(null);

    /* renamed from: d  reason: collision with root package name */
    private final String f54769d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54770e;

    /* renamed from: f  reason: collision with root package name */
    private final String f54771f;

    /* renamed from: g  reason: collision with root package name */
    private final String f54772g;

    /* renamed from: h  reason: collision with root package name */
    private final String f54773h;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f54774i;

    /* renamed from: j  reason: collision with root package name */
    private final String f54775j;

    /* renamed from: yg.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0765a {

        /* renamed from: a  reason: collision with root package name */
        private String f54776a = "";

        /* renamed from: b  reason: collision with root package name */
        private String f54777b = "";

        /* renamed from: c  reason: collision with root package name */
        private String f54778c;

        /* renamed from: d  reason: collision with root package name */
        private String f54779d;

        /* renamed from: e  reason: collision with root package name */
        private String f54780e;

        /* renamed from: f  reason: collision with root package name */
        private Uri f54781f;

        /* renamed from: g  reason: collision with root package name */
        private String f54782g;

        public final a a() {
            return new a(this.f54776a, this.f54777b, this.f54778c, this.f54779d, this.f54780e, this.f54781f, this.f54782g);
        }

        public final C0765a b(String str) {
            this.f54778c = str;
            return this;
        }

        public final C0765a c(String str) {
            this.f54779d = str;
            return this;
        }

        public final C0765a d(String str) {
            this.f54780e = str;
            return this;
        }

        public final C0765a e(String id2) {
            Intrinsics.checkNotNullParameter(id2, "id");
            this.f54776a = id2;
            return this;
        }

        public final C0765a f(String idToken) {
            Intrinsics.checkNotNullParameter(idToken, "idToken");
            this.f54777b = idToken;
            return this;
        }

        public final C0765a g(String str) {
            this.f54782g = str;
            return this;
        }

        public final C0765a h(Uri uri) {
            this.f54781f = uri;
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
            r2.f54769d = r3
            r2.f54770e = r4
            r2.f54771f = r5
            r2.f54772g = r6
            r2.f54773h = r7
            r2.f54774i = r8
            r2.f54775j = r9
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
        throw new UnsupportedOperationException("Method not decompiled: yg.a.<init>(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, android.net.Uri, java.lang.String):void");
    }
}
