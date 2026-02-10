package dh;

import android.content.Context;
import android.graphics.Rect;
import android.util.SparseArray;
import android.view.View;
import android.widget.FrameLayout;
import com.google.android.material.internal.g;
import dh.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static void a(a aVar, View view) {
        b(aVar, view, null);
    }

    public static void b(a aVar, View view, FrameLayout frameLayout) {
        f(aVar, view, frameLayout);
        if (aVar.m() != null) {
            aVar.m().setForeground(aVar);
        } else {
            view.getOverlay().add(aVar);
        }
    }

    public static SparseArray c(Context context, g gVar) {
        a aVar;
        SparseArray sparseArray = new SparseArray(gVar.size());
        for (int i10 = 0; i10 < gVar.size(); i10++) {
            int keyAt = gVar.keyAt(i10);
            b.a aVar2 = (b.a) gVar.valueAt(i10);
            if (aVar2 != null) {
                aVar = a.h(context, aVar2);
            } else {
                aVar = null;
            }
            sparseArray.put(keyAt, aVar);
        }
        return sparseArray;
    }

    public static g d(SparseArray sparseArray) {
        b.a aVar;
        g gVar = new g();
        for (int i10 = 0; i10 < sparseArray.size(); i10++) {
            int keyAt = sparseArray.keyAt(i10);
            a aVar2 = (a) sparseArray.valueAt(i10);
            if (aVar2 != null) {
                aVar = aVar2.w();
            } else {
                aVar = null;
            }
            gVar.put(keyAt, aVar);
        }
        return gVar;
    }

    public static void e(a aVar, View view) {
        if (aVar == null) {
            return;
        }
        if (aVar.m() != null) {
            aVar.m().setForeground(null);
        } else {
            view.getOverlay().remove(aVar);
        }
    }

    public static void f(a aVar, View view, FrameLayout frameLayout) {
        Rect rect = new Rect();
        view.getDrawingRect(rect);
        aVar.setBounds(rect);
        aVar.Z(view, frameLayout);
    }

    public static void g(Rect rect, float f10, float f11, float f12, float f13) {
        rect.set((int) (f10 - f12), (int) (f11 - f13), (int) (f10 + f12), (int) (f11 + f13));
    }
}
