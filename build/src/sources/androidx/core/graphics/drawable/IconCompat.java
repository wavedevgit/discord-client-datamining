package androidx.core.graphics.drawable;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.BitmapShader;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.Shader;
import android.graphics.drawable.Icon;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Parcelable;
import android.text.TextUtils;
import android.util.Log;
import androidx.versionedparcelable.CustomVersionedParcelable;
import b2.e;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;
import java.nio.charset.Charset;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class IconCompat extends CustomVersionedParcelable {

    /* renamed from: k  reason: collision with root package name */
    static final PorterDuff.Mode f3308k = PorterDuff.Mode.SRC_IN;

    /* renamed from: a  reason: collision with root package name */
    public int f3309a;

    /* renamed from: b  reason: collision with root package name */
    Object f3310b;

    /* renamed from: c  reason: collision with root package name */
    public byte[] f3311c;

    /* renamed from: d  reason: collision with root package name */
    public Parcelable f3312d;

    /* renamed from: e  reason: collision with root package name */
    public int f3313e;

    /* renamed from: f  reason: collision with root package name */
    public int f3314f;

    /* renamed from: g  reason: collision with root package name */
    public ColorStateList f3315g;

    /* renamed from: h  reason: collision with root package name */
    PorterDuff.Mode f3316h;

    /* renamed from: i  reason: collision with root package name */
    public String f3317i;

    /* renamed from: j  reason: collision with root package name */
    public String f3318j;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        static IconCompat a(Object obj) {
            e.g(obj);
            int d10 = d(obj);
            if (d10 != 2) {
                if (d10 != 4) {
                    if (d10 != 6) {
                        IconCompat iconCompat = new IconCompat(-1);
                        iconCompat.f3310b = obj;
                        return iconCompat;
                    }
                    return IconCompat.f(e(obj));
                }
                return IconCompat.i(e(obj));
            }
            return IconCompat.l(null, c(obj), b(obj));
        }

        static int b(Object obj) {
            if (Build.VERSION.SDK_INT >= 28) {
                return c.a(obj);
            }
            try {
                return ((Integer) obj.getClass().getMethod("getResId", null).invoke(obj, null)).intValue();
            } catch (IllegalAccessException e10) {
                Log.e("IconCompat", "Unable to get icon resource", e10);
                return 0;
            } catch (NoSuchMethodException e11) {
                Log.e("IconCompat", "Unable to get icon resource", e11);
                return 0;
            } catch (InvocationTargetException e12) {
                Log.e("IconCompat", "Unable to get icon resource", e12);
                return 0;
            }
        }

        static String c(Object obj) {
            if (Build.VERSION.SDK_INT >= 28) {
                return c.b(obj);
            }
            try {
                return (String) obj.getClass().getMethod("getResPackage", null).invoke(obj, null);
            } catch (IllegalAccessException e10) {
                Log.e("IconCompat", "Unable to get icon package", e10);
                return null;
            } catch (NoSuchMethodException e11) {
                Log.e("IconCompat", "Unable to get icon package", e11);
                return null;
            } catch (InvocationTargetException e12) {
                Log.e("IconCompat", "Unable to get icon package", e12);
                return null;
            }
        }

        static int d(Object obj) {
            if (Build.VERSION.SDK_INT >= 28) {
                return c.c(obj);
            }
            try {
                return ((Integer) obj.getClass().getMethod("getType", null).invoke(obj, null)).intValue();
            } catch (IllegalAccessException e10) {
                Log.e("IconCompat", "Unable to get icon type " + obj, e10);
                return -1;
            } catch (NoSuchMethodException e11) {
                Log.e("IconCompat", "Unable to get icon type " + obj, e11);
                return -1;
            } catch (InvocationTargetException e12) {
                Log.e("IconCompat", "Unable to get icon type " + obj, e12);
                return -1;
            }
        }

        static Uri e(Object obj) {
            if (Build.VERSION.SDK_INT >= 28) {
                return c.d(obj);
            }
            try {
                return (Uri) obj.getClass().getMethod("getUri", null).invoke(obj, null);
            } catch (IllegalAccessException e10) {
                Log.e("IconCompat", "Unable to get icon uri", e10);
                return null;
            } catch (NoSuchMethodException e11) {
                Log.e("IconCompat", "Unable to get icon uri", e11);
                return null;
            } catch (InvocationTargetException e12) {
                Log.e("IconCompat", "Unable to get icon uri", e12);
                return null;
            }
        }

        static Icon f(IconCompat iconCompat, Context context) {
            Icon createWithBitmap;
            switch (iconCompat.f3309a) {
                case -1:
                    return (Icon) iconCompat.f3310b;
                case 0:
                default:
                    throw new IllegalArgumentException("Unknown type");
                case 1:
                    createWithBitmap = Icon.createWithBitmap((Bitmap) iconCompat.f3310b);
                    break;
                case 2:
                    createWithBitmap = Icon.createWithResource(iconCompat.o(), iconCompat.f3313e);
                    break;
                case 3:
                    createWithBitmap = Icon.createWithData((byte[]) iconCompat.f3310b, iconCompat.f3313e, iconCompat.f3314f);
                    break;
                case 4:
                    createWithBitmap = Icon.createWithContentUri((String) iconCompat.f3310b);
                    break;
                case 5:
                    if (Build.VERSION.SDK_INT >= 26) {
                        createWithBitmap = b.a((Bitmap) iconCompat.f3310b);
                        break;
                    } else {
                        createWithBitmap = Icon.createWithBitmap(IconCompat.d((Bitmap) iconCompat.f3310b, false));
                        break;
                    }
                case 6:
                    int i10 = Build.VERSION.SDK_INT;
                    if (i10 >= 30) {
                        createWithBitmap = d.a(iconCompat.q());
                        break;
                    } else if (context != null) {
                        InputStream r10 = iconCompat.r(context);
                        if (r10 != null) {
                            if (i10 >= 26) {
                                createWithBitmap = b.a(BitmapFactory.decodeStream(r10));
                                break;
                            } else {
                                createWithBitmap = Icon.createWithBitmap(IconCompat.d(BitmapFactory.decodeStream(r10), false));
                                break;
                            }
                        } else {
                            throw new IllegalStateException("Cannot load adaptive icon from uri: " + iconCompat.q());
                        }
                    } else {
                        throw new IllegalArgumentException("Context is required to resolve the file uri of the icon: " + iconCompat.q());
                    }
            }
            ColorStateList colorStateList = iconCompat.f3315g;
            if (colorStateList != null) {
                createWithBitmap.setTintList(colorStateList);
            }
            PorterDuff.Mode mode = iconCompat.f3316h;
            if (mode != IconCompat.f3308k) {
                createWithBitmap.setTintMode(mode);
            }
            return createWithBitmap;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {
        static Icon a(Bitmap bitmap) {
            return Icon.createWithAdaptiveBitmap(bitmap);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {
        static int a(Object obj) {
            return ((Icon) obj).getResId();
        }

        static String b(Object obj) {
            return ((Icon) obj).getResPackage();
        }

        static int c(Object obj) {
            return ((Icon) obj).getType();
        }

        static Uri d(Object obj) {
            return ((Icon) obj).getUri();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {
        static Icon a(Uri uri) {
            return Icon.createWithAdaptiveBitmapContentUri(uri);
        }
    }

    public IconCompat() {
        this.f3309a = -1;
        this.f3311c = null;
        this.f3312d = null;
        this.f3313e = 0;
        this.f3314f = 0;
        this.f3315g = null;
        this.f3316h = f3308k;
        this.f3317i = null;
    }

    public static IconCompat a(Bundle bundle) {
        int i10 = bundle.getInt("type");
        IconCompat iconCompat = new IconCompat(i10);
        iconCompat.f3313e = bundle.getInt("int1");
        iconCompat.f3314f = bundle.getInt("int2");
        iconCompat.f3318j = bundle.getString("string1");
        if (bundle.containsKey("tint_list")) {
            iconCompat.f3315g = (ColorStateList) bundle.getParcelable("tint_list");
        }
        if (bundle.containsKey("tint_mode")) {
            iconCompat.f3316h = PorterDuff.Mode.valueOf(bundle.getString("tint_mode"));
        }
        switch (i10) {
            case -1:
            case 1:
            case 5:
                iconCompat.f3310b = bundle.getParcelable("obj");
                return iconCompat;
            case 0:
            default:
                Log.w("IconCompat", "Unknown type " + i10);
                return null;
            case 2:
            case 4:
            case 6:
                iconCompat.f3310b = bundle.getString("obj");
                return iconCompat;
            case 3:
                iconCompat.f3310b = bundle.getByteArray("obj");
                return iconCompat;
        }
    }

    public static IconCompat b(Icon icon) {
        return a.a(icon);
    }

    public static IconCompat c(Icon icon) {
        if (a.d(icon) == 2 && a.b(icon) == 0) {
            return null;
        }
        return a.a(icon);
    }

    static Bitmap d(Bitmap bitmap, boolean z10) {
        int min = (int) (Math.min(bitmap.getWidth(), bitmap.getHeight()) * 0.6666667f);
        Bitmap createBitmap = Bitmap.createBitmap(min, min, Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(createBitmap);
        Paint paint = new Paint(3);
        float f10 = min;
        float f11 = 0.5f * f10;
        float f12 = 0.9166667f * f11;
        if (z10) {
            float f13 = 0.010416667f * f10;
            paint.setColor(0);
            paint.setShadowLayer(f13, 0.0f, f10 * 0.020833334f, 1023410176);
            canvas.drawCircle(f11, f11, f12, paint);
            paint.setShadowLayer(f13, 0.0f, 0.0f, 503316480);
            canvas.drawCircle(f11, f11, f12, paint);
            paint.clearShadowLayer();
        }
        paint.setColor(-16777216);
        Shader.TileMode tileMode = Shader.TileMode.CLAMP;
        BitmapShader bitmapShader = new BitmapShader(bitmap, tileMode, tileMode);
        Matrix matrix = new Matrix();
        matrix.setTranslate((-(bitmap.getWidth() - min)) / 2.0f, (-(bitmap.getHeight() - min)) / 2.0f);
        bitmapShader.setLocalMatrix(matrix);
        paint.setShader(bitmapShader);
        canvas.drawCircle(f11, f11, f12, paint);
        canvas.setBitmap(null);
        return createBitmap;
    }

    public static IconCompat e(Bitmap bitmap) {
        b2.b.c(bitmap);
        IconCompat iconCompat = new IconCompat(5);
        iconCompat.f3310b = bitmap;
        return iconCompat;
    }

    public static IconCompat f(Uri uri) {
        b2.b.c(uri);
        return g(uri.toString());
    }

    public static IconCompat g(String str) {
        b2.b.c(str);
        IconCompat iconCompat = new IconCompat(6);
        iconCompat.f3310b = str;
        return iconCompat;
    }

    public static IconCompat h(Bitmap bitmap) {
        b2.b.c(bitmap);
        IconCompat iconCompat = new IconCompat(1);
        iconCompat.f3310b = bitmap;
        return iconCompat;
    }

    public static IconCompat i(Uri uri) {
        b2.b.c(uri);
        return j(uri.toString());
    }

    public static IconCompat j(String str) {
        b2.b.c(str);
        IconCompat iconCompat = new IconCompat(4);
        iconCompat.f3310b = str;
        return iconCompat;
    }

    public static IconCompat k(Context context, int i10) {
        b2.b.c(context);
        return l(context.getResources(), context.getPackageName(), i10);
    }

    public static IconCompat l(Resources resources, String str, int i10) {
        b2.b.c(str);
        if (i10 != 0) {
            IconCompat iconCompat = new IconCompat(2);
            iconCompat.f3313e = i10;
            if (resources != null) {
                try {
                    iconCompat.f3310b = resources.getResourceName(i10);
                } catch (Resources.NotFoundException unused) {
                    throw new IllegalArgumentException("Icon resource cannot be found");
                }
            } else {
                iconCompat.f3310b = str;
            }
            iconCompat.f3318j = str;
            return iconCompat;
        }
        throw new IllegalArgumentException("Drawable resource ID must not be 0");
    }

    private static String x(int i10) {
        switch (i10) {
            case 1:
                return "BITMAP";
            case 2:
                return "RESOURCE";
            case 3:
                return "DATA";
            case 4:
                return "URI";
            case 5:
                return "BITMAP_MASKABLE";
            case 6:
                return "URI_MASKABLE";
            default:
                return "UNKNOWN";
        }
    }

    public Bitmap m() {
        int i10 = this.f3309a;
        if (i10 == -1) {
            Object obj = this.f3310b;
            if (obj instanceof Bitmap) {
                return (Bitmap) obj;
            }
            return null;
        } else if (i10 == 1) {
            return (Bitmap) this.f3310b;
        } else {
            if (i10 == 5) {
                return d((Bitmap) this.f3310b, true);
            }
            throw new IllegalStateException("called getBitmap() on " + this);
        }
    }

    public int n() {
        int i10 = this.f3309a;
        if (i10 == -1) {
            return a.b(this.f3310b);
        }
        if (i10 == 2) {
            return this.f3313e;
        }
        throw new IllegalStateException("called getResId() on " + this);
    }

    public String o() {
        int i10 = this.f3309a;
        if (i10 == -1) {
            return a.c(this.f3310b);
        }
        if (i10 == 2) {
            String str = this.f3318j;
            if (str != null && !TextUtils.isEmpty(str)) {
                return this.f3318j;
            }
            return ((String) this.f3310b).split(":", -1)[0];
        }
        throw new IllegalStateException("called getResPackage() on " + this);
    }

    public int p() {
        int i10 = this.f3309a;
        if (i10 == -1) {
            return a.d(this.f3310b);
        }
        return i10;
    }

    public Uri q() {
        int i10 = this.f3309a;
        if (i10 == -1) {
            return a.e(this.f3310b);
        }
        if (i10 != 4 && i10 != 6) {
            throw new IllegalStateException("called getUri() on " + this);
        }
        return Uri.parse((String) this.f3310b);
    }

    public InputStream r(Context context) {
        Uri q10 = q();
        String scheme = q10.getScheme();
        if (!"content".equals(scheme) && !"file".equals(scheme)) {
            try {
                return new FileInputStream(new File((String) this.f3310b));
            } catch (FileNotFoundException e10) {
                Log.w("IconCompat", "Unable to load image from path: " + q10, e10);
                return null;
            }
        }
        try {
            return context.getContentResolver().openInputStream(q10);
        } catch (Exception e11) {
            Log.w("IconCompat", "Unable to load image from URI: " + q10, e11);
            return null;
        }
    }

    public void s() {
        this.f3316h = PorterDuff.Mode.valueOf(this.f3317i);
        switch (this.f3309a) {
            case -1:
                Parcelable parcelable = this.f3312d;
                if (parcelable != null) {
                    this.f3310b = parcelable;
                    return;
                }
                throw new IllegalArgumentException("Invalid icon");
            case 0:
            default:
                return;
            case 1:
            case 5:
                Parcelable parcelable2 = this.f3312d;
                if (parcelable2 != null) {
                    this.f3310b = parcelable2;
                    return;
                }
                byte[] bArr = this.f3311c;
                this.f3310b = bArr;
                this.f3309a = 3;
                this.f3313e = 0;
                this.f3314f = bArr.length;
                return;
            case 2:
            case 4:
            case 6:
                String str = new String(this.f3311c, Charset.forName("UTF-16"));
                this.f3310b = str;
                if (this.f3309a == 2 && this.f3318j == null) {
                    this.f3318j = str.split(":", -1)[0];
                    return;
                }
                return;
            case 3:
                this.f3310b = this.f3311c;
                return;
        }
    }

    public void t(boolean z10) {
        this.f3317i = this.f3316h.name();
        switch (this.f3309a) {
            case -1:
                if (!z10) {
                    this.f3312d = (Parcelable) this.f3310b;
                    return;
                }
                throw new IllegalArgumentException("Can't serialize Icon created with IconCompat#createFromIcon");
            case 0:
            default:
                return;
            case 1:
            case 5:
                if (z10) {
                    ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                    ((Bitmap) this.f3310b).compress(Bitmap.CompressFormat.PNG, 90, byteArrayOutputStream);
                    this.f3311c = byteArrayOutputStream.toByteArray();
                    return;
                }
                this.f3312d = (Parcelable) this.f3310b;
                return;
            case 2:
                this.f3311c = ((String) this.f3310b).getBytes(Charset.forName("UTF-16"));
                return;
            case 3:
                this.f3311c = (byte[]) this.f3310b;
                return;
            case 4:
            case 6:
                this.f3311c = this.f3310b.toString().getBytes(Charset.forName("UTF-16"));
                return;
        }
    }

    public String toString() {
        if (this.f3309a == -1) {
            return String.valueOf(this.f3310b);
        }
        StringBuilder sb2 = new StringBuilder("Icon(typ=");
        sb2.append(x(this.f3309a));
        switch (this.f3309a) {
            case 1:
            case 5:
                sb2.append(" size=");
                sb2.append(((Bitmap) this.f3310b).getWidth());
                sb2.append("x");
                sb2.append(((Bitmap) this.f3310b).getHeight());
                break;
            case 2:
                sb2.append(" pkg=");
                sb2.append(this.f3318j);
                sb2.append(" id=");
                sb2.append(String.format("0x%08x", Integer.valueOf(n())));
                break;
            case 3:
                sb2.append(" len=");
                sb2.append(this.f3313e);
                if (this.f3314f != 0) {
                    sb2.append(" off=");
                    sb2.append(this.f3314f);
                    break;
                }
                break;
            case 4:
            case 6:
                sb2.append(" uri=");
                sb2.append(this.f3310b);
                break;
        }
        if (this.f3315g != null) {
            sb2.append(" tint=");
            sb2.append(this.f3315g);
        }
        if (this.f3316h != f3308k) {
            sb2.append(" mode=");
            sb2.append(this.f3316h);
        }
        sb2.append(")");
        return sb2.toString();
    }

    public Bundle u() {
        Bundle bundle = new Bundle();
        switch (this.f3309a) {
            case -1:
                bundle.putParcelable("obj", (Parcelable) this.f3310b);
                break;
            case 0:
            default:
                throw new IllegalArgumentException("Invalid icon");
            case 1:
            case 5:
                bundle.putParcelable("obj", (Bitmap) this.f3310b);
                break;
            case 2:
            case 4:
            case 6:
                bundle.putString("obj", (String) this.f3310b);
                break;
            case 3:
                bundle.putByteArray("obj", (byte[]) this.f3310b);
                break;
        }
        bundle.putInt("type", this.f3309a);
        bundle.putInt("int1", this.f3313e);
        bundle.putInt("int2", this.f3314f);
        bundle.putString("string1", this.f3318j);
        ColorStateList colorStateList = this.f3315g;
        if (colorStateList != null) {
            bundle.putParcelable("tint_list", colorStateList);
        }
        PorterDuff.Mode mode = this.f3316h;
        if (mode != f3308k) {
            bundle.putString("tint_mode", mode.name());
        }
        return bundle;
    }

    public Icon v() {
        return w(null);
    }

    public Icon w(Context context) {
        return a.f(this, context);
    }

    IconCompat(int i10) {
        this.f3311c = null;
        this.f3312d = null;
        this.f3313e = 0;
        this.f3314f = 0;
        this.f3315g = null;
        this.f3316h = f3308k;
        this.f3317i = null;
        this.f3309a = i10;
    }
}
