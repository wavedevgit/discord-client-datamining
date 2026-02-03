package android.support.v4.media;

import android.annotation.SuppressLint;
import android.graphics.Bitmap;
import android.media.MediaDescription;
import android.net.Uri;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
@SuppressLint({"BanParcelableUsage"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MediaDescriptionCompat implements Parcelable {
    public static final Parcelable.Creator<MediaDescriptionCompat> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f734d;

    /* renamed from: e  reason: collision with root package name */
    private final CharSequence f735e;

    /* renamed from: i  reason: collision with root package name */
    private final CharSequence f736i;

    /* renamed from: o  reason: collision with root package name */
    private final CharSequence f737o;

    /* renamed from: p  reason: collision with root package name */
    private final Bitmap f738p;

    /* renamed from: q  reason: collision with root package name */
    private final Uri f739q;

    /* renamed from: r  reason: collision with root package name */
    private final Bundle f740r;

    /* renamed from: s  reason: collision with root package name */
    private final Uri f741s;

    /* renamed from: t  reason: collision with root package name */
    private MediaDescription f742t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public MediaDescriptionCompat createFromParcel(Parcel parcel) {
            return MediaDescriptionCompat.a(MediaDescription.CREATOR.createFromParcel(parcel));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public MediaDescriptionCompat[] newArray(int i10) {
            return new MediaDescriptionCompat[i10];
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {
        static MediaDescription a(MediaDescription.Builder builder) {
            return builder.build();
        }

        static MediaDescription.Builder b() {
            return new MediaDescription.Builder();
        }

        static CharSequence c(MediaDescription mediaDescription) {
            return mediaDescription.getDescription();
        }

        static Bundle d(MediaDescription mediaDescription) {
            return mediaDescription.getExtras();
        }

        static Bitmap e(MediaDescription mediaDescription) {
            return mediaDescription.getIconBitmap();
        }

        static Uri f(MediaDescription mediaDescription) {
            return mediaDescription.getIconUri();
        }

        static String g(MediaDescription mediaDescription) {
            return mediaDescription.getMediaId();
        }

        static CharSequence h(MediaDescription mediaDescription) {
            return mediaDescription.getSubtitle();
        }

        static CharSequence i(MediaDescription mediaDescription) {
            return mediaDescription.getTitle();
        }

        static void j(MediaDescription.Builder builder, CharSequence charSequence) {
            builder.setDescription(charSequence);
        }

        static void k(MediaDescription.Builder builder, Bundle bundle) {
            builder.setExtras(bundle);
        }

        static void l(MediaDescription.Builder builder, Bitmap bitmap) {
            builder.setIconBitmap(bitmap);
        }

        static void m(MediaDescription.Builder builder, Uri uri) {
            builder.setIconUri(uri);
        }

        static void n(MediaDescription.Builder builder, String str) {
            builder.setMediaId(str);
        }

        static void o(MediaDescription.Builder builder, CharSequence charSequence) {
            builder.setSubtitle(charSequence);
        }

        static void p(MediaDescription.Builder builder, CharSequence charSequence) {
            builder.setTitle(charSequence);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {
        static Uri a(MediaDescription mediaDescription) {
            return mediaDescription.getMediaUri();
        }

        static void b(MediaDescription.Builder builder, Uri uri) {
            builder.setMediaUri(uri);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private String f743a;

        /* renamed from: b  reason: collision with root package name */
        private CharSequence f744b;

        /* renamed from: c  reason: collision with root package name */
        private CharSequence f745c;

        /* renamed from: d  reason: collision with root package name */
        private CharSequence f746d;

        /* renamed from: e  reason: collision with root package name */
        private Bitmap f747e;

        /* renamed from: f  reason: collision with root package name */
        private Uri f748f;

        /* renamed from: g  reason: collision with root package name */
        private Bundle f749g;

        /* renamed from: h  reason: collision with root package name */
        private Uri f750h;

        public MediaDescriptionCompat a() {
            return new MediaDescriptionCompat(this.f743a, this.f744b, this.f745c, this.f746d, this.f747e, this.f748f, this.f749g, this.f750h);
        }

        public d b(CharSequence charSequence) {
            this.f746d = charSequence;
            return this;
        }

        public d c(Bundle bundle) {
            this.f749g = bundle;
            return this;
        }

        public d d(Bitmap bitmap) {
            this.f747e = bitmap;
            return this;
        }

        public d e(Uri uri) {
            this.f748f = uri;
            return this;
        }

        public d f(String str) {
            this.f743a = str;
            return this;
        }

        public d g(Uri uri) {
            this.f750h = uri;
            return this;
        }

        public d h(CharSequence charSequence) {
            this.f745c = charSequence;
            return this;
        }

        public d i(CharSequence charSequence) {
            this.f744b = charSequence;
            return this;
        }
    }

    MediaDescriptionCompat(String str, CharSequence charSequence, CharSequence charSequence2, CharSequence charSequence3, Bitmap bitmap, Uri uri, Bundle bundle, Uri uri2) {
        this.f734d = str;
        this.f735e = charSequence;
        this.f736i = charSequence2;
        this.f737o = charSequence3;
        this.f738p = bitmap;
        this.f739q = uri;
        this.f740r = bundle;
        this.f741s = uri2;
    }

    /* JADX WARN: Removed duplicated region for block: B:21:0x0068  */
    /* JADX WARN: Removed duplicated region for block: B:22:0x006c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static android.support.v4.media.MediaDescriptionCompat a(java.lang.Object r8) {
        /*
            r0 = 0
            if (r8 == 0) goto L79
            android.support.v4.media.MediaDescriptionCompat$d r1 = new android.support.v4.media.MediaDescriptionCompat$d
            r1.<init>()
            android.media.MediaDescription r8 = (android.media.MediaDescription) r8
            java.lang.String r2 = android.support.v4.media.MediaDescriptionCompat.b.g(r8)
            r1.f(r2)
            java.lang.CharSequence r2 = android.support.v4.media.MediaDescriptionCompat.b.i(r8)
            r1.i(r2)
            java.lang.CharSequence r2 = android.support.v4.media.MediaDescriptionCompat.b.h(r8)
            r1.h(r2)
            java.lang.CharSequence r2 = android.support.v4.media.MediaDescriptionCompat.b.c(r8)
            r1.b(r2)
            android.graphics.Bitmap r2 = android.support.v4.media.MediaDescriptionCompat.b.e(r8)
            r1.d(r2)
            android.net.Uri r2 = android.support.v4.media.MediaDescriptionCompat.b.f(r8)
            r1.e(r2)
            android.os.Bundle r2 = android.support.v4.media.MediaDescriptionCompat.b.d(r8)
            if (r2 == 0) goto L3e
            android.os.Bundle r2 = android.support.v4.media.session.MediaSessionCompat.b(r2)
        L3e:
            java.lang.String r3 = "android.support.v4.media.description.MEDIA_URI"
            if (r2 == 0) goto L49
            android.os.Parcelable r4 = r2.getParcelable(r3)
            android.net.Uri r4 = (android.net.Uri) r4
            goto L4a
        L49:
            r4 = r0
        L4a:
            if (r4 == 0) goto L62
            java.lang.String r5 = "android.support.v4.media.description.NULL_BUNDLE_FLAG"
            boolean r6 = r2.containsKey(r5)
            if (r6 == 0) goto L5c
            int r6 = r2.size()
            r7 = 2
            if (r6 != r7) goto L5c
            goto L63
        L5c:
            r2.remove(r3)
            r2.remove(r5)
        L62:
            r0 = r2
        L63:
            r1.c(r0)
            if (r4 == 0) goto L6c
            r1.g(r4)
            goto L73
        L6c:
            android.net.Uri r0 = android.support.v4.media.MediaDescriptionCompat.c.a(r8)
            r1.g(r0)
        L73:
            android.support.v4.media.MediaDescriptionCompat r0 = r1.a()
            r0.f742t = r8
        L79:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: android.support.v4.media.MediaDescriptionCompat.a(java.lang.Object):android.support.v4.media.MediaDescriptionCompat");
    }

    public Object b() {
        MediaDescription mediaDescription = this.f742t;
        if (mediaDescription == null) {
            MediaDescription.Builder b10 = b.b();
            b.n(b10, this.f734d);
            b.p(b10, this.f735e);
            b.o(b10, this.f736i);
            b.j(b10, this.f737o);
            b.l(b10, this.f738p);
            b.m(b10, this.f739q);
            b.k(b10, this.f740r);
            c.b(b10, this.f741s);
            MediaDescription a10 = b.a(b10);
            this.f742t = a10;
            return a10;
        }
        return mediaDescription;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        return ((Object) this.f735e) + ", " + ((Object) this.f736i) + ", " + ((Object) this.f737o);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        ((MediaDescription) b()).writeToParcel(parcel, i10);
    }
}
