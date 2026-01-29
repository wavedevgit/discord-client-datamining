package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import android.util.Size;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.views.text.ReactFontManager;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ExcludedSupportedSizesQuirk implements y1 {
    private List d(String str, int i10, Class cls) {
        ArrayList arrayList = new ArrayList();
        if (str.equals("0") && (i10 == 34 || i10 == 35 || cls != null)) {
            arrayList.add(new Size(720, 720));
            arrayList.add(new Size(ReactFontManager.TypefaceStyle.NORMAL, ReactFontManager.TypefaceStyle.NORMAL));
        }
        return arrayList;
    }

    private List e(String str, int i10) {
        ArrayList arrayList = new ArrayList();
        if (str.equals("0") && i10 == 256) {
            arrayList.add(new Size(4160, 3120));
            arrayList.add(new Size(4000, 3000));
        }
        return arrayList;
    }

    private List f(String str, int i10) {
        ArrayList arrayList = new ArrayList();
        if (str.equals("0") && i10 == 256) {
            arrayList.add(new Size(4160, 3120));
            arrayList.add(new Size(4000, 3000));
        }
        return arrayList;
    }

    private List g(String str, int i10) {
        ArrayList arrayList = new ArrayList();
        if (str.equals("0") && i10 == 256) {
            arrayList.add(new Size(9280, 6944));
        }
        return arrayList;
    }

    private List h(String str, int i10, Class cls) {
        ArrayList arrayList = new ArrayList();
        if (str.equals("0")) {
            if (i10 != 34 && cls == null) {
                if (i10 == 35) {
                    arrayList.add(new Size(RecyclerView.ItemAnimator.FLAG_MOVED, 1536));
                    arrayList.add(new Size(RecyclerView.ItemAnimator.FLAG_MOVED, 1152));
                    arrayList.add(new Size(1920, 1080));
                    return arrayList;
                }
            } else {
                arrayList.add(new Size(4128, 3096));
                arrayList.add(new Size(4128, 2322));
                arrayList.add(new Size(3088, 3088));
                arrayList.add(new Size(3264, 2448));
                arrayList.add(new Size(3264, 1836));
                arrayList.add(new Size(RecyclerView.ItemAnimator.FLAG_MOVED, 1536));
                arrayList.add(new Size(RecyclerView.ItemAnimator.FLAG_MOVED, 1152));
                arrayList.add(new Size(1920, 1080));
                return arrayList;
            }
        } else if (str.equals("1") && (i10 == 34 || i10 == 35 || cls != null)) {
            arrayList.add(new Size(2576, 1932));
            arrayList.add(new Size(2560, 1440));
            arrayList.add(new Size(1920, 1920));
            arrayList.add(new Size(RecyclerView.ItemAnimator.FLAG_MOVED, 1536));
            arrayList.add(new Size(RecyclerView.ItemAnimator.FLAG_MOVED, 1152));
            arrayList.add(new Size(1920, 1080));
        }
        return arrayList;
    }

    private List i(String str, int i10, Class cls) {
        ArrayList arrayList = new ArrayList();
        if (str.equals("0")) {
            if (i10 != 34 && cls == null) {
                if (i10 == 35) {
                    arrayList.add(new Size(4128, 2322));
                    arrayList.add(new Size(3088, 3088));
                    arrayList.add(new Size(3264, 2448));
                    arrayList.add(new Size(3264, 1836));
                    arrayList.add(new Size(RecyclerView.ItemAnimator.FLAG_MOVED, 1536));
                    arrayList.add(new Size(RecyclerView.ItemAnimator.FLAG_MOVED, 1152));
                    arrayList.add(new Size(1920, 1080));
                    return arrayList;
                }
            } else {
                arrayList.add(new Size(4128, 3096));
                arrayList.add(new Size(4128, 2322));
                arrayList.add(new Size(3088, 3088));
                arrayList.add(new Size(3264, 2448));
                arrayList.add(new Size(3264, 1836));
                arrayList.add(new Size(RecyclerView.ItemAnimator.FLAG_MOVED, 1536));
                arrayList.add(new Size(RecyclerView.ItemAnimator.FLAG_MOVED, 1152));
                arrayList.add(new Size(1920, 1080));
                return arrayList;
            }
        } else if (str.equals("1") && (i10 == 34 || i10 == 35 || cls != null)) {
            arrayList.add(new Size(3264, 2448));
            arrayList.add(new Size(3264, 1836));
            arrayList.add(new Size(2448, 2448));
            arrayList.add(new Size(1920, 1920));
            arrayList.add(new Size(RecyclerView.ItemAnimator.FLAG_MOVED, 1536));
            arrayList.add(new Size(RecyclerView.ItemAnimator.FLAG_MOVED, 1152));
            arrayList.add(new Size(1920, 1080));
        }
        return arrayList;
    }

    private static boolean j() {
        if ("HUAWEI".equalsIgnoreCase(Build.BRAND) && "HWANE".equalsIgnoreCase(Build.DEVICE)) {
            return true;
        }
        return false;
    }

    private static boolean k() {
        if ("OnePlus".equalsIgnoreCase(Build.BRAND) && "OnePlus6".equalsIgnoreCase(Build.DEVICE)) {
            return true;
        }
        return false;
    }

    private static boolean l() {
        if ("OnePlus".equalsIgnoreCase(Build.BRAND) && "OnePlus6T".equalsIgnoreCase(Build.DEVICE)) {
            return true;
        }
        return false;
    }

    private static boolean m() {
        if ("REDMI".equalsIgnoreCase(Build.BRAND) && "joyeuse".equalsIgnoreCase(Build.DEVICE)) {
            return true;
        }
        return false;
    }

    private static boolean n() {
        if ("SAMSUNG".equalsIgnoreCase(Build.BRAND) && "J7XELTE".equalsIgnoreCase(Build.DEVICE) && Build.VERSION.SDK_INT >= 27) {
            return true;
        }
        return false;
    }

    private static boolean o() {
        if ("SAMSUNG".equalsIgnoreCase(Build.BRAND) && "ON7XELTE".equalsIgnoreCase(Build.DEVICE) && Build.VERSION.SDK_INT >= 27) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean p() {
        if (!k() && !l() && !j() && !o() && !n() && !m()) {
            return false;
        }
        return true;
    }

    public List c(String str, int i10) {
        if (k()) {
            return e(str, i10);
        }
        if (l()) {
            return f(str, i10);
        }
        if (j()) {
            return d(str, i10, null);
        }
        if (o()) {
            return i(str, i10, null);
        }
        if (n()) {
            return h(str, i10, null);
        }
        if (m()) {
            return g(str, i10);
        }
        y0.l("ExcludedSupportedSizesQuirk", "Cannot retrieve list of supported sizes to exclude on this device.");
        return Collections.EMPTY_LIST;
    }
}
