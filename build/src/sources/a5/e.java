package a5;

import a5.h;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import g5.m;
import k5.n;
import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f392a;

    /* renamed from: b  reason: collision with root package name */
    private final m f393b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements h.a {
        @Override // a5.h.a
        /* renamed from: b */
        public h a(Drawable drawable, m mVar, v4.h hVar) {
            return new e(drawable, mVar);
        }
    }

    public e(Drawable drawable, m mVar) {
        this.f392a = drawable;
        this.f393b = mVar;
    }

    @Override // a5.h
    public Object a(Continuation continuation) {
        Drawable drawable;
        boolean u10 = k5.k.u(this.f392a);
        if (u10) {
            drawable = new BitmapDrawable(this.f393b.g().getResources(), n.f32186a.a(this.f392a, this.f393b.f(), this.f393b.o(), this.f393b.n(), this.f393b.c()));
        } else {
            drawable = this.f392a;
        }
        return new f(drawable, u10, x4.h.f53109e);
    }
}
