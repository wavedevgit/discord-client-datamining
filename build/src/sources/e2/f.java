package e2;

import android.content.ClipDescription;
import android.net.Uri;
import android.os.Build;
import android.view.inputmethod.InputContentInfo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final c f22229a;

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
            this.f22229a = new a(uri, clipDescription, uri2);
        } else {
            this.f22229a = new b(uri, clipDescription, uri2);
        }
    }

    public static f f(Object obj) {
        if (obj == null || Build.VERSION.SDK_INT < 25) {
            return null;
        }
        return new f(new a(obj));
    }

    public Uri a() {
        return this.f22229a.c();
    }

    public ClipDescription b() {
        return this.f22229a.getDescription();
    }

    public Uri c() {
        return this.f22229a.a();
    }

    public void d() {
        this.f22229a.d();
    }

    public Object e() {
        return this.f22229a.b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a implements c {

        /* renamed from: a  reason: collision with root package name */
        final InputContentInfo f22230a;

        a(Object obj) {
            this.f22230a = (InputContentInfo) obj;
        }

        @Override // e2.f.c
        public Uri a() {
            return this.f22230a.getLinkUri();
        }

        @Override // e2.f.c
        public Object b() {
            return this.f22230a;
        }

        @Override // e2.f.c
        public Uri c() {
            return this.f22230a.getContentUri();
        }

        @Override // e2.f.c
        public void d() {
            this.f22230a.requestPermission();
        }

        @Override // e2.f.c
        public ClipDescription getDescription() {
            return this.f22230a.getDescription();
        }

        a(Uri uri, ClipDescription clipDescription, Uri uri2) {
            this.f22230a = new InputContentInfo(uri, clipDescription, uri2);
        }
    }

    private f(c cVar) {
        this.f22229a = cVar;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final Uri f22231a;

        /* renamed from: b  reason: collision with root package name */
        private final ClipDescription f22232b;

        /* renamed from: c  reason: collision with root package name */
        private final Uri f22233c;

        b(Uri uri, ClipDescription clipDescription, Uri uri2) {
            this.f22231a = uri;
            this.f22232b = clipDescription;
            this.f22233c = uri2;
        }

        @Override // e2.f.c
        public Uri a() {
            return this.f22233c;
        }

        @Override // e2.f.c
        public Object b() {
            return null;
        }

        @Override // e2.f.c
        public Uri c() {
            return this.f22231a;
        }

        @Override // e2.f.c
        public ClipDescription getDescription() {
            return this.f22232b;
        }

        @Override // e2.f.c
        public void d() {
        }
    }
}
