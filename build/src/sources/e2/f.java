package e2;

import android.content.ClipDescription;
import android.net.Uri;
import android.os.Build;
import android.view.inputmethod.InputContentInfo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final c f21333a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private interface c {
        Uri a();

        Object b();

        Uri c();

        void d();

        ClipDescription getDescription();
    }

    public f(Uri uri, ClipDescription clipDescription, Uri uri2) {
        if (Build.VERSION.SDK_INT >= 25) {
            this.f21333a = new a(uri, clipDescription, uri2);
        } else {
            this.f21333a = new b(uri, clipDescription, uri2);
        }
    }

    public static f f(Object obj) {
        if (obj == null || Build.VERSION.SDK_INT < 25) {
            return null;
        }
        return new f(new a(obj));
    }

    public Uri a() {
        return this.f21333a.c();
    }

    public ClipDescription b() {
        return this.f21333a.getDescription();
    }

    public Uri c() {
        return this.f21333a.a();
    }

    public void d() {
        this.f21333a.d();
    }

    public Object e() {
        return this.f21333a.b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a implements c {

        /* renamed from: a  reason: collision with root package name */
        final InputContentInfo f21334a;

        a(Object obj) {
            this.f21334a = (InputContentInfo) obj;
        }

        @Override // e2.f.c
        public Uri a() {
            return this.f21334a.getLinkUri();
        }

        @Override // e2.f.c
        public Object b() {
            return this.f21334a;
        }

        @Override // e2.f.c
        public Uri c() {
            return this.f21334a.getContentUri();
        }

        @Override // e2.f.c
        public void d() {
            this.f21334a.requestPermission();
        }

        @Override // e2.f.c
        public ClipDescription getDescription() {
            return this.f21334a.getDescription();
        }

        a(Uri uri, ClipDescription clipDescription, Uri uri2) {
            this.f21334a = new InputContentInfo(uri, clipDescription, uri2);
        }
    }

    private f(c cVar) {
        this.f21333a = cVar;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final Uri f21335a;

        /* renamed from: b  reason: collision with root package name */
        private final ClipDescription f21336b;

        /* renamed from: c  reason: collision with root package name */
        private final Uri f21337c;

        b(Uri uri, ClipDescription clipDescription, Uri uri2) {
            this.f21335a = uri;
            this.f21336b = clipDescription;
            this.f21337c = uri2;
        }

        @Override // e2.f.c
        public Uri a() {
            return this.f21337c;
        }

        @Override // e2.f.c
        public Object b() {
            return null;
        }

        @Override // e2.f.c
        public Uri c() {
            return this.f21335a;
        }

        @Override // e2.f.c
        public ClipDescription getDescription() {
            return this.f21336b;
        }

        @Override // e2.f.c
        public void d() {
        }
    }
}
