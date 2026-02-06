package fr.greweb.reactnativeviewshot;

import android.app.Activity;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Point;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.util.Base64;
import android.util.Log;
import android.view.PixelCopy;
import android.view.SurfaceView;
import android.view.TextureView;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ScrollView;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.NativeViewHierarchyManager;
import com.facebook.react.uimanager.UIBlock;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.WeakHashMap;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;
import java.util.zip.Deflater;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements UIBlock {

    /* renamed from: o  reason: collision with root package name */
    private static final String f23703o = "a";

    /* renamed from: p  reason: collision with root package name */
    private static byte[] f23704p = new byte[65536];

    /* renamed from: q  reason: collision with root package name */
    private static final Object f23705q = new Object();

    /* renamed from: r  reason: collision with root package name */
    private static final Set f23706r = Collections.newSetFromMap(new WeakHashMap());

    /* renamed from: a  reason: collision with root package name */
    private final int f23707a;

    /* renamed from: b  reason: collision with root package name */
    private final String f23708b;

    /* renamed from: c  reason: collision with root package name */
    private final int f23709c;

    /* renamed from: d  reason: collision with root package name */
    private final double f23710d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f23711e;

    /* renamed from: f  reason: collision with root package name */
    private final Integer f23712f;

    /* renamed from: g  reason: collision with root package name */
    private final File f23713g;

    /* renamed from: h  reason: collision with root package name */
    private final String f23714h;

    /* renamed from: i  reason: collision with root package name */
    private final Promise f23715i;

    /* renamed from: j  reason: collision with root package name */
    private final Boolean f23716j;

    /* renamed from: k  reason: collision with root package name */
    private final ReactApplicationContext f23717k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f23718l;

    /* renamed from: m  reason: collision with root package name */
    private final Activity f23719m;

    /* renamed from: n  reason: collision with root package name */
    private final Executor f23720n;

    /* renamed from: fr.greweb.reactnativeviewshot.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class RunnableC0328a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ NativeViewHierarchyManager f23721d;

        RunnableC0328a(NativeViewHierarchyManager nativeViewHierarchyManager) {
            this.f23721d = nativeViewHierarchyManager;
        }

        @Override // java.lang.Runnable
        public void run() {
            View resolveView;
            try {
                if (a.this.f23707a == -1) {
                    resolveView = a.this.f23719m.getWindow().getDecorView().findViewById(16908290);
                } else {
                    resolveView = this.f23721d.resolveView(a.this.f23707a);
                }
                if (resolveView == null) {
                    String str = a.f23703o;
                    Log.e(str, "No view found with reactTag: " + a.this.f23707a, new AssertionError());
                    Promise promise = a.this.f23715i;
                    promise.reject("E_UNABLE_TO_SNAPSHOT", "No view found with reactTag: " + a.this.f23707a);
                    return;
                }
                d dVar = new d(a.f23704p);
                dVar.n(a.w(resolveView));
                a.f23704p = dVar.m();
                if ("tmpfile".equals(a.this.f23714h) && -1 == a.this.f23709c) {
                    a.this.A(resolveView);
                } else if ("tmpfile".equals(a.this.f23714h) && -1 != a.this.f23709c) {
                    a.this.B(resolveView);
                } else {
                    if (!"base64".equals(a.this.f23714h) && !"zip-base64".equals(a.this.f23714h)) {
                        if ("data-uri".equals(a.this.f23714h)) {
                            a.this.z(resolveView);
                            return;
                        }
                        return;
                    }
                    a.this.y(resolveView);
                }
            } catch (Throwable th2) {
                Log.e(a.f23703o, "Failed to capture view snapshot", th2);
                a.this.f23715i.reject("E_UNABLE_TO_SNAPSHOT", "Failed to capture view snapshot");
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements PixelCopy.OnPixelCopyFinishedListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Canvas f23723a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ View f23724b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ View f23725c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Bitmap f23726d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Paint f23727e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ CountDownLatch f23728f;

        b(Canvas canvas, View view, View view2, Bitmap bitmap, Paint paint, CountDownLatch countDownLatch) {
            this.f23723a = canvas;
            this.f23724b = view;
            this.f23725c = view2;
            this.f23726d = bitmap;
            this.f23727e = paint;
            this.f23728f = countDownLatch;
        }

        @Override // android.view.PixelCopy.OnPixelCopyFinishedListener
        public void onPixelCopyFinished(int i10) {
            int save = this.f23723a.save();
            a.this.p(this.f23723a, this.f23724b, this.f23725c);
            this.f23723a.drawBitmap(this.f23726d, 0.0f, 0.0f, this.f23727e);
            this.f23723a.restoreToCount(save);
            a.x(this.f23726d);
            this.f23728f.countDown();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public @interface c {

        /* renamed from: a  reason: collision with root package name */
        public static final Bitmap.CompressFormat[] f23730a = {Bitmap.CompressFormat.JPEG, Bitmap.CompressFormat.PNG, Bitmap.CompressFormat.WEBP};
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d extends ByteArrayOutputStream {
        public d(byte[] bArr) {
            super(0);
            ((ByteArrayOutputStream) this).buf = bArr;
        }

        protected static int k(int i10) {
            if (i10 >= 0) {
                if (i10 <= 2147483639) {
                    return 2147483639;
                }
                return Integer.MAX_VALUE;
            }
            throw new OutOfMemoryError();
        }

        public ByteBuffer a(int i10) {
            if (((ByteArrayOutputStream) this).buf.length < i10) {
                g(i10);
            }
            return ByteBuffer.wrap(((ByteArrayOutputStream) this).buf);
        }

        protected void g(int i10) {
            int length = ((ByteArrayOutputStream) this).buf.length << 1;
            if (length - i10 < 0) {
                length = i10;
            }
            if (length - 2147483639 > 0) {
                length = k(i10);
            }
            ((ByteArrayOutputStream) this).buf = Arrays.copyOf(((ByteArrayOutputStream) this).buf, length);
        }

        public byte[] m() {
            return ((ByteArrayOutputStream) this).buf;
        }

        public void n(int i10) {
            ((ByteArrayOutputStream) this).count = i10;
        }
    }

    public a(int i10, String str, int i11, double d10, Integer num, Integer num2, File file, String str2, Boolean bool, ReactApplicationContext reactApplicationContext, Activity activity, boolean z10, Promise promise, Executor executor) {
        this.f23707a = i10;
        this.f23708b = str;
        this.f23709c = i11;
        this.f23710d = d10;
        this.f23711e = num;
        this.f23712f = num2;
        this.f23713g = file;
        this.f23714h = str2;
        this.f23716j = bool;
        this.f23717k = reactApplicationContext;
        this.f23719m = activity;
        this.f23718l = z10;
        this.f23715i = promise;
        this.f23720n = executor;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void A(View view) {
        String uri = Uri.fromFile(this.f23713g).toString();
        FileOutputStream fileOutputStream = new FileOutputStream(this.f23713g);
        d dVar = new d(f23704p);
        Point q10 = q(view, dVar);
        f23704p = dVar.m();
        int size = dVar.size();
        fileOutputStream.write(String.format(Locale.US, "%d:%d|", Integer.valueOf(q10.x), Integer.valueOf(q10.y)).getBytes(Charset.forName("US-ASCII")));
        fileOutputStream.write(f23704p, 0, size);
        fileOutputStream.close();
        this.f23715i.resolve(uri);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void B(View view) {
        q(view, new FileOutputStream(this.f23713g));
        this.f23715i.resolve(Uri.fromFile(this.f23713g).toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public Matrix p(Canvas canvas, View view, View view2) {
        int i10;
        Matrix matrix = new Matrix();
        LinkedList linkedList = new LinkedList();
        View view3 = view2;
        do {
            linkedList.add(view3);
            view3 = (View) view3.getParent();
        } while (view3 != view);
        Collections.reverse(linkedList);
        Iterator it = linkedList.iterator();
        while (it.hasNext()) {
            View view4 = (View) it.next();
            canvas.save();
            int left = view4.getLeft();
            int i11 = 0;
            if (view4 != view2) {
                i10 = view4.getPaddingLeft();
            } else {
                i10 = 0;
            }
            float translationX = left + i10 + view4.getTranslationX();
            int top = view4.getTop();
            if (view4 != view2) {
                i11 = view4.getPaddingTop();
            }
            float translationY = top + i11 + view4.getTranslationY();
            canvas.translate(translationX, translationY);
            canvas.rotate(view4.getRotation(), view4.getPivotX(), view4.getPivotY());
            canvas.scale(view4.getScaleX(), view4.getScaleY());
            matrix.postTranslate(translationX, translationY);
            matrix.postRotate(view4.getRotation(), view4.getPivotX(), view4.getPivotY());
            matrix.postScale(view4.getScaleX(), view4.getScaleY());
        }
        return matrix;
    }

    private Point q(View view, OutputStream outputStream) {
        try {
            return r(view, outputStream);
        } finally {
            outputStream.close();
        }
    }

    private Point r(View view, OutputStream outputStream) {
        int i10;
        View view2 = view;
        int width = view2.getWidth();
        int height = view2.getHeight();
        if (width > 0 && height > 0) {
            boolean z10 = false;
            if (this.f23716j.booleanValue()) {
                ScrollView scrollView = (ScrollView) view2;
                int i11 = 0;
                for (int i12 = 0; i12 < scrollView.getChildCount(); i12++) {
                    i11 += scrollView.getChildAt(i12).getHeight();
                }
                i10 = i11;
            } else {
                i10 = height;
            }
            Point point = new Point(width, i10);
            Bitmap u10 = u(width, i10);
            Paint paint = new Paint();
            paint.setAntiAlias(true);
            paint.setFilterBitmap(true);
            paint.setDither(true);
            Canvas canvas = new Canvas(u10);
            view2.draw(canvas);
            for (View view3 : t(view)) {
                if (view3 instanceof TextureView) {
                    if (view3.getVisibility() == 0) {
                        TextureView textureView = (TextureView) view3;
                        textureView.setOpaque(z10);
                        Bitmap bitmap = textureView.getBitmap(v(view3.getWidth(), view3.getHeight()));
                        int save = canvas.save();
                        p(canvas, view2, view3);
                        canvas.drawBitmap(bitmap, 0.0f, 0.0f, paint);
                        canvas.restoreToCount(save);
                        x(bitmap);
                    }
                } else if ((view3 instanceof SurfaceView) && this.f23718l) {
                    SurfaceView surfaceView = (SurfaceView) view3;
                    CountDownLatch countDownLatch = new CountDownLatch(1);
                    Bitmap v10 = v(view3.getWidth(), view3.getHeight());
                    try {
                        PixelCopy.request(surfaceView, v10, new b(canvas, view2, view3, v10, paint, countDownLatch), new Handler(Looper.getMainLooper()));
                        countDownLatch.await(5L, TimeUnit.SECONDS);
                    } catch (Exception e10) {
                        Log.e(f23703o, "Cannot PixelCopy for " + surfaceView, e10);
                    }
                }
                view2 = view;
                z10 = false;
            }
            Integer num = this.f23711e;
            if (num != null && this.f23712f != null && (num.intValue() != width || this.f23712f.intValue() != i10)) {
                Bitmap createScaledBitmap = Bitmap.createScaledBitmap(u10, this.f23711e.intValue(), this.f23712f.intValue(), true);
                x(u10);
                u10 = createScaledBitmap;
            }
            int i13 = this.f23709c;
            if (-1 == i13 && (outputStream instanceof d)) {
                int i14 = width * i10 * 4;
                d dVar = (d) s(outputStream);
                u10.copyPixelsToBuffer(dVar.a(i14));
                dVar.n(i14);
            } else {
                u10.compress(c.f23730a[i13], (int) (this.f23710d * 100.0d), outputStream);
            }
            x(u10);
            return point;
        }
        throw new RuntimeException("Impossible to snapshot the view: view is invalid");
    }

    private static Object s(Object obj) {
        return obj;
    }

    private List t(View view) {
        if (!(view instanceof ViewGroup)) {
            ArrayList arrayList = new ArrayList();
            arrayList.add(view);
            return arrayList;
        }
        ArrayList arrayList2 = new ArrayList();
        ViewGroup viewGroup = (ViewGroup) view;
        for (int i10 = 0; i10 < viewGroup.getChildCount(); i10++) {
            arrayList2.addAll(t(viewGroup.getChildAt(i10)));
        }
        return arrayList2;
    }

    private static Bitmap u(int i10, int i11) {
        synchronized (f23705q) {
            try {
                for (Bitmap bitmap : f23706r) {
                    if (bitmap.getWidth() == i10 && bitmap.getHeight() == i11) {
                        f23706r.remove(bitmap);
                        bitmap.eraseColor(0);
                        return bitmap;
                    }
                }
                return Bitmap.createBitmap(i10, i11, Bitmap.Config.ARGB_8888);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private static Bitmap v(int i10, int i11) {
        synchronized (f23705q) {
            try {
                for (Bitmap bitmap : f23706r) {
                    if (bitmap.getWidth() == i10 && bitmap.getHeight() == i11) {
                        f23706r.remove(bitmap);
                        bitmap.eraseColor(0);
                        return bitmap;
                    }
                }
                return Bitmap.createBitmap(i10, i11, Bitmap.Config.ARGB_8888);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int w(View view) {
        return Math.min(view.getWidth() * view.getHeight() * 4, 32);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void x(Bitmap bitmap) {
        synchronized (f23705q) {
            f23706r.add(bitmap);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void y(View view) {
        boolean z10;
        String str;
        if (-1 == this.f23709c) {
            z10 = true;
        } else {
            z10 = false;
        }
        boolean equals = "zip-base64".equals(this.f23714h);
        d dVar = new d(f23704p);
        Point q10 = q(view, dVar);
        f23704p = dVar.m();
        int size = dVar.size();
        String format = String.format(Locale.US, "%d:%d|", Integer.valueOf(q10.x), Integer.valueOf(q10.y));
        if (!z10) {
            format = "";
        }
        if (equals) {
            Deflater deflater = new Deflater();
            deflater.setInput(f23704p, 0, size);
            deflater.finish();
            d dVar2 = new d(new byte[32]);
            byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
            while (!deflater.finished()) {
                dVar2.write(bArr, 0, deflater.deflate(bArr));
            }
            str = format + Base64.encodeToString(dVar2.m(), 0, dVar2.size(), 2);
        } else {
            str = format + Base64.encodeToString(f23704p, 0, size, 2);
        }
        this.f23715i.resolve(str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void z(View view) {
        String str;
        d dVar = new d(f23704p);
        q(view, dVar);
        f23704p = dVar.m();
        String encodeToString = Base64.encodeToString(f23704p, 0, dVar.size(), 2);
        if ("jpg".equals(this.f23708b)) {
            str = "jpeg";
        } else {
            str = this.f23708b;
        }
        Promise promise = this.f23715i;
        promise.resolve("data:image/" + str + ";base64," + encodeToString);
    }

    @Override // com.facebook.react.uimanager.UIBlock
    public void execute(NativeViewHierarchyManager nativeViewHierarchyManager) {
        this.f23720n.execute(new RunnableC0328a(nativeViewHierarchyManager));
    }
}
