package k5;

import android.app.ActivityManager;
import android.content.Context;
import android.content.res.Configuration;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.VectorDrawable;
import android.net.Uri;
import android.os.Build;
import android.os.Looper;
import android.view.View;
import android.webkit.MimeTypeMap;
import android.widget.ImageView;
import b5.b;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import h5.c;
import java.io.Closeable;
import java.io.File;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import okhttp3.Headers;
import okhttp3.Response;
import okhttp3.ResponseBody;
import y4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    private static final Bitmap.Config[] f31484a;

    /* renamed from: b  reason: collision with root package name */
    private static final Bitmap.Config f31485b;

    /* renamed from: c  reason: collision with root package name */
    private static final Headers f31486c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f31487a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f31488b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f31489c;

        static {
            int[] iArr = new int[x4.h.values().length];
            try {
                iArr[x4.h.f54471d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[x4.h.f54472e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[x4.h.f54473i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[x4.h.f54474o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f31487a = iArr;
            int[] iArr2 = new int[ImageView.ScaleType.values().length];
            try {
                iArr2[ImageView.ScaleType.FIT_START.ordinal()] = 1;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[ImageView.ScaleType.FIT_CENTER.ordinal()] = 2;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[ImageView.ScaleType.FIT_END.ordinal()] = 3;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[ImageView.ScaleType.CENTER_INSIDE.ordinal()] = 4;
            } catch (NoSuchFieldError unused8) {
            }
            f31488b = iArr2;
            int[] iArr3 = new int[h5.h.values().length];
            try {
                iArr3[h5.h.f25796d.ordinal()] = 1;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[h5.h.f25797e.ordinal()] = 2;
            } catch (NoSuchFieldError unused10) {
            }
            f31489c = iArr3;
        }
    }

    static {
        Bitmap.Config[] configArr;
        Bitmap.Config config;
        Bitmap.Config config2;
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 26) {
            config2 = Bitmap.Config.RGBA_F16;
            configArr = new Bitmap.Config[]{Bitmap.Config.ARGB_8888, config2};
        } else {
            configArr = new Bitmap.Config[]{Bitmap.Config.ARGB_8888};
        }
        f31484a = configArr;
        if (i10 >= 26) {
            config = Bitmap.Config.HARDWARE;
        } else {
            config = Bitmap.Config.ARGB_8888;
        }
        f31485b = config;
        f31486c = new Headers.a().f();
    }

    public static final int A(h5.c cVar, h5.h hVar) {
        if (cVar instanceof c.a) {
            return ((c.a) cVar).f25785a;
        }
        int i10 = a.f31489c[hVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return Integer.MAX_VALUE;
            }
            throw new qr.p();
        }
        return Integer.MIN_VALUE;
    }

    public static final void a(a.b bVar) {
        try {
            bVar.a();
        } catch (Exception unused) {
        }
    }

    public static final Headers.a b(Headers.a aVar, String str) {
        int h02 = StringsKt.h0(str, ':', 0, false, 6, null);
        if (h02 != -1) {
            String substring = str.substring(0, h02);
            Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            String obj = StringsKt.k1(substring).toString();
            String substring2 = str.substring(h02 + 1);
            Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
            aVar.e(obj, substring2);
            return aVar;
        }
        throw new IllegalArgumentException(("Unexpected header: " + str).toString());
    }

    public static final int c(Context context, double d10) {
        int i10;
        try {
            Object j10 = androidx.core.content.a.j(context, ActivityManager.class);
            Intrinsics.checkNotNull(j10);
            ActivityManager activityManager = (ActivityManager) j10;
            if ((context.getApplicationInfo().flags & 1048576) != 0) {
                i10 = activityManager.getLargeMemoryClass();
            } else {
                i10 = activityManager.getMemoryClass();
            }
        } catch (Exception unused) {
            i10 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
        }
        double d11 = d10 * i10;
        double d12 = (double) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
        return (int) (d11 * d12 * d12);
    }

    public static final void d(Closeable closeable) {
        try {
            closeable.close();
        } catch (RuntimeException e10) {
            throw e10;
        } catch (Exception unused) {
        }
    }

    public static final double e(Context context) {
        try {
            Object j10 = androidx.core.content.a.j(context, ActivityManager.class);
            Intrinsics.checkNotNull(j10);
            if (!((ActivityManager) j10).isLowRamDevice()) {
                return 0.2d;
            }
            return 0.15d;
        } catch (Exception unused) {
            return 0.2d;
        }
    }

    public static final Bitmap.Config f() {
        return f31485b;
    }

    public static final v4.c g(b.a aVar) {
        if (aVar instanceof b5.c) {
            return ((b5.c) aVar).e();
        }
        return v4.c.f52128b;
    }

    public static final String h(Uri uri) {
        return (String) CollectionsKt.firstOrNull(uri.getPathSegments());
    }

    public static final int i(Drawable drawable) {
        BitmapDrawable bitmapDrawable;
        Bitmap bitmap;
        if (drawable instanceof BitmapDrawable) {
            bitmapDrawable = (BitmapDrawable) drawable;
        } else {
            bitmapDrawable = null;
        }
        if (bitmapDrawable != null && (bitmap = bitmapDrawable.getBitmap()) != null) {
            return bitmap.getHeight();
        }
        return drawable.getIntrinsicHeight();
    }

    public static final String j(MimeTypeMap mimeTypeMap, String str) {
        if (str == null || StringsKt.k0(str)) {
            return null;
        }
        return mimeTypeMap.getMimeTypeFromExtension(StringsKt.X0(StringsKt.Z0(StringsKt.h1(StringsKt.h1(str, '#', null, 2, null), '?', null, 2, null), '/', null, 2, null), '.', ""));
    }

    public static final int k(Configuration configuration) {
        return configuration.uiMode & 48;
    }

    public static final g5.v l(View view) {
        g5.v vVar;
        Object tag = view.getTag(w4.a.f53449a);
        g5.v vVar2 = null;
        if (tag instanceof g5.v) {
            vVar = (g5.v) tag;
        } else {
            vVar = null;
        }
        if (vVar == null) {
            synchronized (view) {
                try {
                    Object tag2 = view.getTag(w4.a.f53449a);
                    if (tag2 instanceof g5.v) {
                        vVar2 = (g5.v) tag2;
                    }
                    if (vVar2 == null) {
                        vVar2 = new g5.v(view);
                        view.addOnAttachStateChangeListener(vVar2);
                        view.setTag(w4.a.f53449a, vVar2);
                    }
                } finally {
                }
            }
            return vVar2;
        }
        return vVar;
    }

    public static final File m(Context context) {
        File cacheDir = context.getCacheDir();
        if (cacheDir != null) {
            cacheDir.mkdirs();
            return cacheDir;
        }
        throw new IllegalStateException("cacheDir == null");
    }

    public static final h5.h n(ImageView imageView) {
        int i10;
        ImageView.ScaleType scaleType = imageView.getScaleType();
        if (scaleType == null) {
            i10 = -1;
        } else {
            i10 = a.f31488b[scaleType.ordinal()];
        }
        if (i10 != 1 && i10 != 2 && i10 != 3 && i10 != 4) {
            return h5.h.f25796d;
        }
        return h5.h.f25797e;
    }

    public static final Bitmap.Config[] o() {
        return f31484a;
    }

    public static final int p(Drawable drawable) {
        BitmapDrawable bitmapDrawable;
        Bitmap bitmap;
        if (drawable instanceof BitmapDrawable) {
            bitmapDrawable = (BitmapDrawable) drawable;
        } else {
            bitmapDrawable = null;
        }
        if (bitmapDrawable != null && (bitmap = bitmapDrawable.getBitmap()) != null) {
            return bitmap.getWidth();
        }
        return drawable.getIntrinsicWidth();
    }

    public static final boolean q(Uri uri) {
        if (Intrinsics.areEqual(uri.getScheme(), "file") && Intrinsics.areEqual(h(uri), "android_asset")) {
            return true;
        }
        return false;
    }

    public static final boolean r() {
        return Intrinsics.areEqual(Looper.myLooper(), Looper.getMainLooper());
    }

    public static final boolean s(int i10) {
        if (i10 != Integer.MIN_VALUE && i10 != Integer.MAX_VALUE) {
            return false;
        }
        return true;
    }

    public static final boolean t(b.a aVar) {
        if ((aVar instanceof b5.c) && ((b5.c) aVar).f()) {
            return true;
        }
        return false;
    }

    public static final boolean u(Drawable drawable) {
        if (!(drawable instanceof VectorDrawable) && !(drawable instanceof androidx.vectordrawable.graphics.drawable.f)) {
            return false;
        }
        return true;
    }

    public static final g5.n v(g5.n nVar) {
        if (nVar == null) {
            return g5.n.f24052i;
        }
        return nVar;
    }

    public static final g5.s w(g5.s sVar) {
        if (sVar == null) {
            return g5.s.f24066c;
        }
        return sVar;
    }

    public static final Headers x(Headers headers) {
        if (headers == null) {
            return f31486c;
        }
        return headers;
    }

    public static final ResponseBody y(Response response) {
        ResponseBody n10 = response.n();
        if (n10 != null) {
            return n10;
        }
        throw new IllegalStateException("response body == null");
    }

    public static final int z(String str, int i10) {
        Long t10 = StringsKt.t(str);
        if (t10 != null) {
            long longValue = t10.longValue();
            if (longValue > 2147483647L) {
                return Integer.MAX_VALUE;
            }
            if (longValue < 0) {
                return 0;
            }
            return (int) longValue;
        }
        return i10;
    }
}
