package a5;

import a5.h;
import android.net.Uri;
import android.webkit.MimeTypeMap;
import g5.m;
import iu.x;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import x4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Uri f384a;

    /* renamed from: b  reason: collision with root package name */
    private final m f385b;

    /* renamed from: a5.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0003a implements h.a {
        @Override // a5.h.a
        /* renamed from: b */
        public h a(Uri uri, m mVar, v4.h hVar) {
            if (!k5.k.q(uri)) {
                return null;
            }
            return new a(uri, mVar);
        }
    }

    public a(Uri uri, m mVar) {
        this.f384a = uri;
        this.f385b = mVar;
    }

    @Override // a5.h
    public Object a(Continuation continuation) {
        String x02 = CollectionsKt.x0(CollectionsKt.f0(this.f384a.getPathSegments(), 1), "/", null, null, 0, null, null, 62, null);
        return new l(u.g(x.d(x.k(this.f385b.g().getAssets().open(x02))), this.f385b.g(), new x4.a(x02)), k5.k.j(MimeTypeMap.getSingleton(), x02), x4.h.f53168i);
    }
}
