package bk;

import android.content.Context;
import android.media.Image;
import android.os.RemoteException;
import android.os.SystemClock;
import android.util.Log;
import android.util.Pair;
import com.google.android.gms.dynamite.DynamiteModule;
import gf.q;
import java.util.ArrayList;
import java.util.List;
import og.ca;
import og.e4;
import og.g6;
import og.i8;
import og.ka;
import og.lb;
import og.ne;
import og.qd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class n implements c {

    /* renamed from: a  reason: collision with root package name */
    private boolean f6494a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f6495b;

    /* renamed from: c  reason: collision with root package name */
    private final ak.e f6496c;

    /* renamed from: d  reason: collision with root package name */
    private final int f6497d;

    /* renamed from: e  reason: collision with root package name */
    private final qd f6498e;

    /* renamed from: f  reason: collision with root package name */
    private i8 f6499f;

    /* renamed from: g  reason: collision with root package name */
    private i8 f6500g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(Context context, ak.e eVar, qd qdVar) {
        this.f6495b = context;
        this.f6496c = eVar;
        this.f6497d = com.google.android.gms.common.g.f().a(context);
        this.f6498e = qdVar;
    }

    static int a(int i10) {
        if (i10 != 1) {
            if (i10 == 2) {
                return 1;
            }
            throw new IllegalArgumentException("Invalid classification type: " + i10);
        }
        return 0;
    }

    static int d(int i10) {
        if (i10 != 1) {
            if (i10 == 2) {
                return 1;
            }
            throw new IllegalArgumentException("Invalid landmark type: " + i10);
        }
        return 0;
    }

    private static int e(int i10) {
        if (i10 != 1) {
            if (i10 == 2) {
                return 1;
            }
            throw new IllegalArgumentException("Invalid mode type: " + i10);
        }
        return 0;
    }

    private final List f(i8 i8Var, yj.a aVar) {
        e4[] X0;
        try {
            ne neVar = new ne(aVar.l(), aVar.h(), 0, SystemClock.elapsedRealtime(), zj.b.a(aVar.k()));
            if (aVar.g() == 35 && this.f6497d >= 201500000) {
                Image.Plane[] planeArr = (Image.Plane[]) q.l(aVar.j());
                X0 = i8Var.Y0(sf.b.W0(planeArr[0].getBuffer()), sf.b.W0(planeArr[1].getBuffer()), sf.b.W0(planeArr[2].getBuffer()), planeArr[0].getPixelStride(), planeArr[1].getPixelStride(), planeArr[2].getPixelStride(), planeArr[0].getRowStride(), planeArr[1].getRowStride(), planeArr[2].getRowStride(), neVar);
            } else {
                X0 = i8Var.X0(sf.b.W0(zj.c.f().d(aVar, false)), neVar);
            }
            ArrayList arrayList = new ArrayList();
            for (e4 e4Var : X0) {
                arrayList.add(new ak.a(e4Var, aVar.f()));
            }
            return arrayList;
        } catch (RemoteException e10) {
            throw new oj.a("Failed to detect with legacy face detector", 13, e10);
        }
    }

    @Override // bk.c
    public final boolean b() {
        if (this.f6499f != null || this.f6500g != null) {
            return false;
        }
        try {
            lb e10 = ka.e(DynamiteModule.d(this.f6495b, DynamiteModule.f13860b, "com.google.android.gms.vision.dynamite").c("com.google.android.gms.vision.face.ChimeraNativeFaceDetectorCreator"));
            sf.a W0 = sf.b.W0(this.f6495b);
            if (this.f6496c.c() == 2) {
                if (this.f6500g == null) {
                    this.f6500g = e10.S0(W0, new g6(2, 2, 0, true, false, this.f6496c.a()));
                }
                if ((this.f6496c.d() == 2 || this.f6496c.b() == 2 || this.f6496c.e() == 2) && this.f6499f == null) {
                    this.f6499f = e10.S0(W0, new g6(e(this.f6496c.e()), d(this.f6496c.d()), a(this.f6496c.b()), false, this.f6496c.g(), this.f6496c.a()));
                }
            } else if (this.f6499f == null) {
                this.f6499f = e10.S0(W0, new g6(e(this.f6496c.e()), d(this.f6496c.d()), a(this.f6496c.b()), false, this.f6496c.g(), this.f6496c.a()));
            }
            if (this.f6499f == null && this.f6500g == null && !this.f6494a) {
                Log.d("LegacyFaceDelegate", "Request face optional module download.");
                sj.l.c(this.f6495b, "barcode");
                this.f6494a = true;
            }
            k.c(this.f6498e, false, ca.NO_ERROR);
            return false;
        } catch (RemoteException e11) {
            throw new oj.a("Failed to create legacy face detector.", 13, e11);
        } catch (DynamiteModule.a e12) {
            throw new oj.a("Failed to load deprecated vision dynamite module.", 13, e12);
        }
    }

    @Override // bk.c
    public final Pair c(yj.a aVar) {
        List list;
        if (this.f6499f == null && this.f6500g == null) {
            b();
        }
        i8 i8Var = this.f6499f;
        if (i8Var == null && this.f6500g == null) {
            throw new oj.a("Waiting for the face detection module to be downloaded. Please wait.", 14);
        }
        List list2 = null;
        if (i8Var != null) {
            list = f(i8Var, aVar);
            if (!this.f6496c.g()) {
                i.m(list);
            }
        } else {
            list = null;
        }
        i8 i8Var2 = this.f6500g;
        if (i8Var2 != null) {
            list2 = f(i8Var2, aVar);
            i.m(list2);
        }
        return new Pair(list, list2);
    }

    @Override // bk.c
    public final void zzb() {
        i8 i8Var = this.f6499f;
        if (i8Var != null) {
            try {
                i8Var.W0();
            } catch (RemoteException e10) {
                Log.e("LegacyFaceDelegate", "Failed to release legacy face detector.", e10);
            }
            this.f6499f = null;
        }
        i8 i8Var2 = this.f6500g;
        if (i8Var2 != null) {
            try {
                i8Var2.W0();
            } catch (RemoteException e11) {
                Log.e("LegacyFaceDelegate", "Failed to release legacy face detector.", e11);
            }
            this.f6500g = null;
        }
    }
}
