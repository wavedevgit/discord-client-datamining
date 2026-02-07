package a5;

import a5.h;
import android.content.Context;
import android.content.res.Resources;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.util.TypedValue;
import android.webkit.MimeTypeMap;
import g5.m;
import k5.n;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import qu.x;
import x4.u;
import x4.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class k implements h {

    /* renamed from: c  reason: collision with root package name */
    public static final a f418c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Uri f419a;

    /* renamed from: b  reason: collision with root package name */
    private final m f420b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements h.a {
        private final boolean c(Uri uri) {
            return Intrinsics.areEqual(uri.getScheme(), "android.resource");
        }

        @Override // a5.h.a
        /* renamed from: b */
        public h a(Uri uri, m mVar, v4.h hVar) {
            if (!c(uri)) {
                return null;
            }
            return new k(uri, mVar);
        }
    }

    public k(Uri uri, m mVar) {
        this.f419a = uri;
        this.f420b = mVar;
    }

    private final Void b(Uri uri) {
        throw new IllegalStateException("Invalid android.resource URI: " + uri);
    }

    @Override // a5.h
    public Object a(Continuation continuation) {
        Integer intOrNull;
        Resources resourcesForApplication;
        Drawable d10;
        String authority = this.f419a.getAuthority();
        if (authority != null) {
            if (StringsKt.k0(authority)) {
                authority = null;
            }
            if (authority != null) {
                String str = (String) CollectionsKt.B0(this.f419a.getPathSegments());
                if (str != null && (intOrNull = StringsKt.toIntOrNull(str)) != null) {
                    int intValue = intOrNull.intValue();
                    Context g10 = this.f420b.g();
                    if (Intrinsics.areEqual(authority, g10.getPackageName())) {
                        resourcesForApplication = g10.getResources();
                    } else {
                        resourcesForApplication = g10.getPackageManager().getResourcesForApplication(authority);
                    }
                    TypedValue typedValue = new TypedValue();
                    resourcesForApplication.getValue(intValue, typedValue, true);
                    CharSequence charSequence = typedValue.string;
                    String j10 = k5.k.j(MimeTypeMap.getSingleton(), charSequence.subSequence(StringsKt.n0(charSequence, '/', 0, false, 6, null), charSequence.length()).toString());
                    if (Intrinsics.areEqual(j10, "text/xml")) {
                        if (Intrinsics.areEqual(authority, g10.getPackageName())) {
                            d10 = k5.d.a(g10, intValue);
                        } else {
                            d10 = k5.d.d(g10, resourcesForApplication, intValue);
                        }
                        Drawable drawable = d10;
                        boolean u10 = k5.k.u(drawable);
                        if (u10) {
                            drawable = new BitmapDrawable(g10.getResources(), n.f31541a.a(drawable, this.f420b.f(), this.f420b.o(), this.f420b.n(), this.f420b.c()));
                        }
                        return new f(drawable, u10, x4.h.f54521i);
                    }
                    TypedValue typedValue2 = new TypedValue();
                    return new l(u.f(x.d(x.k(resourcesForApplication.openRawResource(intValue, typedValue2))), g10, new v(authority, intValue, typedValue2.density)), j10, x4.h.f54521i);
                }
                b(this.f419a);
                throw new qr.h();
            }
        }
        b(this.f419a);
        throw new qr.h();
    }
}
