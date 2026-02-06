package ck;

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
import pg.ca;
import pg.e4;
import pg.g6;
import pg.i8;
import pg.ka;
import pg.lb;
import pg.ne;
import pg.qd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class n implements c {

    /* renamed from: a  reason: collision with root package name */
    private boolean f7497a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f7498b;

    /* renamed from: c  reason: collision with root package name */
    private final bk.e f7499c;

    /* renamed from: d  reason: collision with root package name */
    private final int f7500d;

    /* renamed from: e  reason: collision with root package name */
    private final qd f7501e;

    /* renamed from: f  reason: collision with root package name */
    private i8 f7502f;

    /* renamed from: g  reason: collision with root package name */
    private i8 f7503g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(Context context, bk.e eVar, qd qdVar) {
        this.f7498b = context;
        this.f7499c = eVar;
        this.f7500d = com.google.android.gms.common.g.f().a(context);
        this.f7501e = qdVar;
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

    private final List f(i8 i8Var, zj.a aVar) {
        e4[] X0;
        try {
            ne neVar = new ne(aVar.l(), aVar.h(), 0, SystemClock.elapsedRealtime(), ak.b.a(aVar.k()));
            if (aVar.g() == 35 && this.f7500d >= 201500000) {
                Image.Plane[] planeArr = (Image.Plane[]) q.l(aVar.j());
                X0 = i8Var.Y0(sf.b.W0(planeArr[0].getBuffer()), sf.b.W0(planeArr[1].getBuffer()), sf.b.W0(planeArr[2].getBuffer()), planeArr[0].getPixelStride(), planeArr[1].getPixelStride(), planeArr[2].getPixelStride(), planeArr[0].getRowStride(), planeArr[1].getRowStride(), planeArr[2].getRowStride(), neVar);
            } else {
                X0 = i8Var.X0(sf.b.W0(ak.c.f().d(aVar, false)), neVar);
            }
            ArrayList arrayList = new ArrayList();
            for (e4 e4Var : X0) {
                arrayList.add(new bk.a(e4Var, aVar.f()));
            }
            return arrayList;
        } catch (RemoteException e10) {
            throw new pj.a("Failed to detect with legacy face detector", 13, e10);
        }
    }

    @Override // ck.c
    public final boolean b() {
        if (this.f7502f != null || this.f7503g != null) {
            return false;
        }
        try {
            lb e10 = ka.e(DynamiteModule.e(this.f7498b, DynamiteModule.f13823b, "com.google.android.gms.vision.dynamite").d("com.google.android.gms.vision.face.ChimeraNativeFaceDetectorCreator"));
            sf.a W0 = sf.b.W0(this.f7498b);
            if (this.f7499c.c() == 2) {
                if (this.f7503g == null) {
                    this.f7503g = e10.M(W0, new g6(2, 2, 0, true, false, this.f7499c.a()));
                }
                if ((this.f7499c.d() == 2 || this.f7499c.b() == 2 || this.f7499c.e() == 2) && this.f7502f == null) {
                    this.f7502f = e10.M(W0, new g6(e(this.f7499c.e()), d(this.f7499c.d()), a(this.f7499c.b()), false, this.f7499c.g(), this.f7499c.a()));
                }
            } else if (this.f7502f == null) {
                this.f7502f = e10.M(W0, new g6(e(this.f7499c.e()), d(this.f7499c.d()), a(this.f7499c.b()), false, this.f7499c.g(), this.f7499c.a()));
            }
            if (this.f7502f == null && this.f7503g == null && !this.f7497a) {
                Log.d("LegacyFaceDelegate", "Request face optional module download.");
                tj.l.c(this.f7498b, "barcode");
                this.f7497a = true;
            }
            k.c(this.f7501e, false, ca.NO_ERROR);
            return false;
        } catch (RemoteException e11) {
            throw new pj.a("Failed to create legacy face detector.", 13, e11);
        } catch (DynamiteModule.a e12) {
            throw new pj.a("Failed to load deprecated vision dynamite module.", 13, e12);
        }
    }

    @Override // ck.c
    public final Pair c(zj.a aVar) {
        List list;
        if (this.f7502f == null && this.f7503g == null) {
            b();
        }
        i8 i8Var = this.f7502f;
        if (i8Var == null && this.f7503g == null) {
            throw new pj.a("Waiting for the face detection module to be downloaded. Please wait.", 14);
        }
        List list2 = null;
        if (i8Var != null) {
            list = f(i8Var, aVar);
            if (!this.f7499c.g()) {
                i.m(list);
            }
        } else {
            list = null;
        }
        i8 i8Var2 = this.f7503g;
        if (i8Var2 != null) {
            list2 = f(i8Var2, aVar);
            i.m(list2);
        }
        return new Pair(list, list2);
    }

    @Override // ck.c
    public final void zzb() {
        i8 i8Var = this.f7502f;
        if (i8Var != null) {
            try {
                i8Var.W0();
            } catch (RemoteException e10) {
                Log.e("LegacyFaceDelegate", "Failed to release legacy face detector.", e10);
            }
            this.f7502f = null;
        }
        i8 i8Var2 = this.f7503g;
        if (i8Var2 != null) {
            try {
                i8Var2.W0();
            } catch (RemoteException e11) {
                Log.e("LegacyFaceDelegate", "Failed to release legacy face detector.", e11);
            }
            this.f7503g = null;
        }
    }
}
