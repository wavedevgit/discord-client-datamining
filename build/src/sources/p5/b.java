package p5;

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
import l5.w;
import x5.d;
import x5.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: d  reason: collision with root package name */
    private static final Object f43753d = new Object();

    /* renamed from: a  reason: collision with root package name */
    private final Context f43754a;

    /* renamed from: b  reason: collision with root package name */
    private final String f43755b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f43756c;

    public b(Drawable.Callback callback, String str, c cVar, Map map) {
        if (!TextUtils.isEmpty(str) && str.charAt(str.length() - 1) != '/') {
            this.f43755b = str + '/';
        } else {
            this.f43755b = str;
        }
        this.f43756c = map;
        d(cVar);
        if (!(callback instanceof View)) {
            this.f43754a = null;
        } else {
            this.f43754a = ((View) callback).getContext().getApplicationContext();
        }
    }

    private Bitmap c(String str, Bitmap bitmap) {
        synchronized (f43753d) {
            ((w) this.f43756c.get(str)).g(bitmap);
        }
        return bitmap;
    }

    public Bitmap a(String str) {
        w wVar = (w) this.f43756c.get(str);
        if (wVar == null) {
            return null;
        }
        Bitmap b10 = wVar.b();
        if (b10 != null) {
            return b10;
        }
        Context context = this.f43754a;
        if (context == null) {
            return null;
        }
        String c10 = wVar.c();
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inScaled = true;
        options.inDensity = 160;
        if (c10.startsWith("data:") && c10.indexOf("base64,") > 0) {
            try {
                byte[] decode = Base64.decode(c10.substring(c10.indexOf(44) + 1), 0);
                return c(str, BitmapFactory.decodeByteArray(decode, 0, decode.length, options));
            } catch (IllegalArgumentException e10) {
                d.d("data URL did not have correct base64 format.", e10);
                return null;
            }
        }
        try {
            if (!TextUtils.isEmpty(this.f43755b)) {
                AssetManager assets = context.getAssets();
                try {
                    Bitmap decodeStream = BitmapFactory.decodeStream(assets.open(this.f43755b + c10), null, options);
                    if (decodeStream == null) {
                        d.c("Decoded image `" + str + "` is null.");
                        return null;
                    }
                    return c(str, j.l(decodeStream, wVar.f(), wVar.d()));
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
        if (this.f43754a instanceof Application) {
            context = context.getApplicationContext();
        }
        if (context == this.f43754a) {
            return true;
        }
        return false;
    }

    public void d(c cVar) {
    }
}
