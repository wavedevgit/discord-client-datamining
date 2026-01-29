package e2;

import android.content.ClipDescription;
import android.net.Uri;
import android.os.Build;
import android.view.inputmethod.InputContentInfo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final c f22538a;

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
            this.f22538a = new a(uri, clipDescription, uri2);
        } else {
            this.f22538a = new b(uri, clipDescription, uri2);
        }
    }

    public static f f(Object obj) {
        if (obj == null || Build.VERSION.SDK_INT < 25) {
            return null;
        }
        return new f(new a(obj));
    }

    public Uri a() {
        return this.f22538a.c();
    }

    public ClipDescription b() {
        return this.f22538a.getDescription();
    }

    public Uri c() {
        return this.f22538a.a();
    }

    public void d() {
        this.f22538a.d();
    }

    public Object e() {
        return this.f22538a.b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a implements c {

        /* renamed from: a  reason: collision with root package name */
        final InputContentInfo f22539a;

        a(Object obj) {
            this.f22539a = (InputContentInfo) obj;
        }

        @Override // e2.f.c
        public Uri a() {
            return this.f22539a.getLinkUri();
        }

        @Override // e2.f.c
        public Object b() {
            return this.f22539a;
        }

        @Override // e2.f.c
        public Uri c() {
            return this.f22539a.getContentUri();
        }

        @Override // e2.f.c
        public void d() {
            this.f22539a.requestPermission();
        }

        @Override // e2.f.c
        public ClipDescription getDescription() {
            return this.f22539a.getDescription();
        }

        a(Uri uri, ClipDescription clipDescription, Uri uri2) {
            this.f22539a = new InputContentInfo(uri, clipDescription, uri2);
        }
    }

    private f(c cVar) {
        this.f22538a = cVar;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final Uri f22540a;

        /* renamed from: b  reason: collision with root package name */
        private final ClipDescription f22541b;

        /* renamed from: c  reason: collision with root package name */
        private final Uri f22542c;

        b(Uri uri, ClipDescription clipDescription, Uri uri2) {
            this.f22540a = uri;
            this.f22541b = clipDescription;
            this.f22542c = uri2;
        }

        @Override // e2.f.c
        public Uri a() {
            return this.f22542c;
        }

        @Override // e2.f.c
        public Object b() {
            return null;
        }

        @Override // e2.f.c
        public Uri c() {
            return this.f22540a;
        }

        @Override // e2.f.c
        public ClipDescription getDescription() {
            return this.f22541b;
        }

        @Override // e2.f.c
        public void d() {
        }
    }
}
