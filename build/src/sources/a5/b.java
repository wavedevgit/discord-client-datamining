package a5;

import a5.h;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import g5.m;
import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Bitmap f386a;

    /* renamed from: b  reason: collision with root package name */
    private final m f387b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements h.a {
        @Override // a5.h.a
        /* renamed from: b */
        public h a(Bitmap bitmap, m mVar, v4.h hVar) {
            return new b(bitmap, mVar);
        }
    }

    public b(Bitmap bitmap, m mVar) {
        this.f386a = bitmap;
        this.f387b = mVar;
    }

    @Override // a5.h
    public Object a(Continuation continuation) {
        return new f(new BitmapDrawable(this.f387b.g().getResources(), this.f386a), false, x4.h.f53167e);
    }
}
