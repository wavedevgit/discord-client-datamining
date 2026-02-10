package dk;

import android.content.Context;
import android.media.Image;
import android.os.RemoteException;
import android.os.SystemClock;
import android.util.Log;
import android.util.Pair;
import com.google.android.gms.dynamite.DynamiteModule;
import hf.q;
import java.util.ArrayList;
import java.util.List;
import qg.ca;
import qg.e4;
import qg.g6;
import qg.i8;
import qg.ka;
import qg.lb;
import qg.ne;
import qg.qd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class n implements c {

    /* renamed from: a  reason: collision with root package name */
    private boolean f20776a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f20777b;

    /* renamed from: c  reason: collision with root package name */
    private final ck.e f20778c;

    /* renamed from: d  reason: collision with root package name */
    private final int f20779d;

    /* renamed from: e  reason: collision with root package name */
    private final qd f20780e;

    /* renamed from: f  reason: collision with root package name */
    private i8 f20781f;

    /* renamed from: g  reason: collision with root package name */
    private i8 f20782g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(Context context, ck.e eVar, qd qdVar) {
        this.f20777b = context;
        this.f20778c = eVar;
        this.f20779d = com.google.android.gms.common.g.f().a(context);
        this.f20780e = qdVar;
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

    private final List f(i8 i8Var, ak.a aVar) {
        e4[] X0;
        try {
            ne neVar = new ne(aVar.l(), aVar.h(), 0, SystemClock.elapsedRealtime(), bk.b.a(aVar.k()));
            if (aVar.g() == 35 && this.f20779d >= 201500000) {
                Image.Plane[] planeArr = (Image.Plane[]) q.l(aVar.j());
                X0 = i8Var.Y0(tf.b.W0(planeArr[0].getBuffer()), tf.b.W0(planeArr[1].getBuffer()), tf.b.W0(planeArr[2].getBuffer()), planeArr[0].getPixelStride(), planeArr[1].getPixelStride(), planeArr[2].getPixelStride(), planeArr[0].getRowStride(), planeArr[1].getRowStride(), planeArr[2].getRowStride(), neVar);
            } else {
                X0 = i8Var.X0(tf.b.W0(bk.c.f().d(aVar, false)), neVar);
            }
            ArrayList arrayList = new ArrayList();
            for (e4 e4Var : X0) {
                arrayList.add(new ck.a(e4Var, aVar.f()));
            }
            return arrayList;
        } catch (RemoteException e10) {
            throw new qj.a("Failed to detect with legacy face detector", 13, e10);
        }
    }

    @Override // dk.c
    public final boolean b() {
        if (this.f20781f != null || this.f20782g != null) {
            return false;
        }
        try {
            lb e10 = ka.e(DynamiteModule.e(this.f20777b, DynamiteModule.f13963b, "com.google.android.gms.vision.dynamite").d("com.google.android.gms.vision.face.ChimeraNativeFaceDetectorCreator"));
            tf.a W0 = tf.b.W0(this.f20777b);
            if (this.f20778c.c() == 2) {
                if (this.f20782g == null) {
                    this.f20782g = e10.n0(W0, new g6(2, 2, 0, true, false, this.f20778c.a()));
                }
                if ((this.f20778c.d() == 2 || this.f20778c.b() == 2 || this.f20778c.e() == 2) && this.f20781f == null) {
                    this.f20781f = e10.n0(W0, new g6(e(this.f20778c.e()), d(this.f20778c.d()), a(this.f20778c.b()), false, this.f20778c.g(), this.f20778c.a()));
                }
            } else if (this.f20781f == null) {
                this.f20781f = e10.n0(W0, new g6(e(this.f20778c.e()), d(this.f20778c.d()), a(this.f20778c.b()), false, this.f20778c.g(), this.f20778c.a()));
            }
            if (this.f20781f == null && this.f20782g == null && !this.f20776a) {
                Log.d("LegacyFaceDelegate", "Request face optional module download.");
                uj.l.c(this.f20777b, "barcode");
                this.f20776a = true;
            }
            k.c(this.f20780e, false, ca.NO_ERROR);
            return false;
        } catch (RemoteException e11) {
            throw new qj.a("Failed to create legacy face detector.", 13, e11);
        } catch (DynamiteModule.a e12) {
            throw new qj.a("Failed to load deprecated vision dynamite module.", 13, e12);
        }
    }

    @Override // dk.c
    public final Pair c(ak.a aVar) {
        List list;
        if (this.f20781f == null && this.f20782g == null) {
            b();
        }
        i8 i8Var = this.f20781f;
        if (i8Var == null && this.f20782g == null) {
            throw new qj.a("Waiting for the face detection module to be downloaded. Please wait.", 14);
        }
        List list2 = null;
        if (i8Var != null) {
            list = f(i8Var, aVar);
            if (!this.f20778c.g()) {
                i.m(list);
            }
        } else {
            list = null;
        }
        i8 i8Var2 = this.f20782g;
        if (i8Var2 != null) {
            list2 = f(i8Var2, aVar);
            i.m(list2);
        }
        return new Pair(list, list2);
    }

    @Override // dk.c
    public final void zzb() {
        i8 i8Var = this.f20781f;
        if (i8Var != null) {
            try {
                i8Var.W0();
            } catch (RemoteException e10) {
                Log.e("LegacyFaceDelegate", "Failed to release legacy face detector.", e10);
            }
            this.f20781f = null;
        }
        i8 i8Var2 = this.f20782g;
        if (i8Var2 != null) {
            try {
                i8Var2.W0();
            } catch (RemoteException e11) {
                Log.e("LegacyFaceDelegate", "Failed to release legacy face detector.", e11);
            }
            this.f20782g = null;
        }
    }
}
