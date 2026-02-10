package e2;

import android.content.ClipDescription;
import android.net.Uri;
import android.os.Build;
import android.view.inputmethod.InputContentInfo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final c f21061a;

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
            this.f21061a = new a(uri, clipDescription, uri2);
        } else {
            this.f21061a = new b(uri, clipDescription, uri2);
        }
    }

    public static f f(Object obj) {
        if (obj == null || Build.VERSION.SDK_INT < 25) {
            return null;
        }
        return new f(new a(obj));
    }

    public Uri a() {
        return this.f21061a.c();
    }

    public ClipDescription b() {
        return this.f21061a.getDescription();
    }

    public Uri c() {
        return this.f21061a.a();
    }

    public void d() {
        this.f21061a.d();
    }

    public Object e() {
        return this.f21061a.b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a implements c {

        /* renamed from: a  reason: collision with root package name */
        final InputContentInfo f21062a;

        a(Object obj) {
            this.f21062a = (InputContentInfo) obj;
        }

        @Override // e2.f.c
        public Uri a() {
            return this.f21062a.getLinkUri();
        }

        @Override // e2.f.c
        public Object b() {
            return this.f21062a;
        }

        @Override // e2.f.c
        public Uri c() {
            return this.f21062a.getContentUri();
        }

        @Override // e2.f.c
        public void d() {
            this.f21062a.requestPermission();
        }

        @Override // e2.f.c
        public ClipDescription getDescription() {
            return this.f21062a.getDescription();
        }

        a(Uri uri, ClipDescription clipDescription, Uri uri2) {
            this.f21062a = new InputContentInfo(uri, clipDescription, uri2);
        }
    }

    private f(c cVar) {
        this.f21061a = cVar;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final Uri f21063a;

        /* renamed from: b  reason: collision with root package name */
        private final ClipDescription f21064b;

        /* renamed from: c  reason: collision with root package name */
        private final Uri f21065c;

        b(Uri uri, ClipDescription clipDescription, Uri uri2) {
            this.f21063a = uri;
            this.f21064b = clipDescription;
            this.f21065c = uri2;
        }

        @Override // e2.f.c
        public Uri a() {
            return this.f21065c;
        }

        @Override // e2.f.c
        public Object b() {
            return null;
        }

        @Override // e2.f.c
        public Uri c() {
            return this.f21063a;
        }

        @Override // e2.f.c
        public ClipDescription getDescription() {
            return this.f21064b;
        }

        @Override // e2.f.c
        public void d() {
        }
    }
}
