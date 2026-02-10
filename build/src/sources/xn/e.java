package xn;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import com.facebook.common.references.CloseableReference;
import com.facebook.datasource.DataSource;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import ta.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends z8.b {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Context f54943a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Function1 f54944b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Uri f54945c;

        a(Context context, Function1 function1, Uri uri) {
            this.f54943a = context;
            this.f54944b = function1;
            this.f54945c = uri;
        }

        @Override // z8.b
        protected void onFailureImpl(DataSource dataSource) {
            Intrinsics.checkNotNullParameter(dataSource, "dataSource");
            Uri uri = this.f54945c;
            Log.e("[RNScreens]", "Error loading image: " + uri, dataSource.b());
        }

        @Override // z8.b
        protected void onNewResultImpl(DataSource dataSource) {
            CloseableReference closeableReference;
            Intrinsics.checkNotNullParameter(dataSource, "dataSource");
            if (!dataSource.isFinished() || (closeableReference = (CloseableReference) dataSource.getResult()) == null) {
                return;
            }
            Object J = closeableReference.J();
            Intrinsics.checkNotNullExpressionValue(J, "get(...)");
            ta.e eVar = (ta.e) J;
            if (eVar instanceof f) {
                Bitmap Q1 = ((f) eVar).Q1();
                Intrinsics.checkNotNullExpressionValue(Q1, "getUnderlyingBitmap(...)");
                Resources resources = this.f54943a.getResources();
                Intrinsics.checkNotNullExpressionValue(resources, "getResources(...)");
                this.f54944b.invoke(new BitmapDrawable(resources, Q1));
            }
            closeableReference.close();
        }
    }

    public static final void c(Context context, String uri, final com.swmansion.rnscreens.gamma.tabs.a view) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(view, "view");
        Uri c10 = new xn.a(context, uri).c(context);
        if (c10 == null) {
            return;
        }
        f(context, c10, new Function1() { // from class: xn.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d10;
                d10 = e.d(com.swmansion.rnscreens.gamma.tabs.a.this, (Drawable) obj);
                return d10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d(final com.swmansion.rnscreens.gamma.tabs.a aVar, final Drawable drawable) {
        Intrinsics.checkNotNullParameter(drawable, "drawable");
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: xn.d
            @Override // java.lang.Runnable
            public final void run() {
                e.e(com.swmansion.rnscreens.gamma.tabs.a.this, drawable);
            }
        });
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(com.swmansion.rnscreens.gamma.tabs.a aVar, Drawable drawable) {
        aVar.setIcon(drawable);
    }

    private static final void f(Context context, Uri uri, Function1 function1) {
        f9.d.a().k(ImageRequestBuilder.x(uri).a(), context).c(new a(context, function1, uri), n8.a.a());
    }
}
