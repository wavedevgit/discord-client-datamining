package q5;

import android.app.Application;
import android.content.Context;
import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.Drawable;
import android.text.TextUtils;
import android.util.Base64;
import android.view.View;
import java.io.IOException;
import java.util.Map;
import l5.c;
import l5.x;
import y5.d;
import y5.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: d  reason: collision with root package name */
    private static final Object f43984d = new Object();

    /* renamed from: a  reason: collision with root package name */
    private final Context f43985a;

    /* renamed from: b  reason: collision with root package name */
    private final String f43986b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f43987c;

    public b(Drawable.Callback callback, String str, c cVar, Map map) {
        if (!TextUtils.isEmpty(str) && str.charAt(str.length() - 1) != '/') {
            this.f43986b = str + '/';
        } else {
            this.f43986b = str;
        }
        this.f43987c = map;
        d(cVar);
        if (!(callback instanceof View)) {
            this.f43985a = null;
        } else {
            this.f43985a = ((View) callback).getContext().getApplicationContext();
        }
    }

    private Bitmap c(String str, Bitmap bitmap) {
        synchronized (f43984d) {
            ((x) this.f43987c.get(str)).g(bitmap);
        }
        return bitmap;
    }

    public Bitmap a(String str) {
        x xVar = (x) this.f43987c.get(str);
        if (xVar == null) {
            return null;
        }
        Bitmap b10 = xVar.b();
        if (b10 != null) {
            return b10;
        }
        Context context = this.f43985a;
        if (context == null) {
            return null;
        }
        String c10 = xVar.c();
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inScaled = true;
        options.inDensity = 160;
        if (c10.startsWith("data:") && c10.indexOf("base64,") > 0) {
            try {
                byte[] decode = Base64.decode(c10.substring(c10.indexOf(44) + 1), 0);
                return c(str, j.m(BitmapFactory.decodeByteArray(decode, 0, decode.length, options), xVar.f(), xVar.d()));
            } catch (IllegalArgumentException e10) {
                d.d("data URL did not have correct base64 format.", e10);
                return null;
            }
        }
        try {
            if (!TextUtils.isEmpty(this.f43986b)) {
                AssetManager assets = context.getAssets();
                try {
                    Bitmap decodeStream = BitmapFactory.decodeStream(assets.open(this.f43986b + c10), null, options);
                    if (decodeStream == null) {
                        d.c("Decoded image `" + str + "` is null.");
                        return null;
                    }
                    return c(str, j.m(decodeStream, xVar.f(), xVar.d()));
                } catch (IllegalArgumentException e11) {
                    d.d("Unable to decode image `" + str + "`.", e11);
                    return null;
                }
            }
            throw new IllegalStateException("You must set an images folder before loading an image. Set it with LottieComposition#setImagesFolder or LottieDrawable#setImagesFolder");
        } catch (IOException e12) {
            d.d("Unable to open asset.", e12);
            return null;
        }
    }

    public boolean b(Context context) {
        if (context == null) {
            if (this.f43985a != null) {
                return false;
            }
            return true;
        }
        if (this.f43985a instanceof Application) {
            context = context.getApplicationContext();
        }
        if (context != this.f43985a) {
            return false;
        }
        return true;
    }

    public void d(c cVar) {
    }
}
