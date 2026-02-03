package yj;

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
    private boolean f54552a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f54553b;

    /* renamed from: c  reason: collision with root package name */
    private final xj.e f54554c;

    /* renamed from: d  reason: collision with root package name */
    private final int f54555d;

    /* renamed from: e  reason: collision with root package name */
    private final qd f54556e;

    /* renamed from: f  reason: collision with root package name */
    private i8 f54557f;

    /* renamed from: g  reason: collision with root package name */
    private i8 f54558g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(Context context, xj.e eVar, qd qdVar) {
        this.f54553b = context;
        this.f54554c = eVar;
        this.f54555d = com.google.android.gms.common.g.f().a(context);
        this.f54556e = qdVar;
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

    private final List f(i8 i8Var, vj.a aVar) {
        e4[] T0;
        try {
            ne neVar = new ne(aVar.l(), aVar.h(), 0, SystemClock.elapsedRealtime(), wj.b.a(aVar.k()));
            if (aVar.g() == 35 && this.f54555d >= 201500000) {
                Image.Plane[] planeArr = (Image.Plane[]) q.l(aVar.j());
                T0 = i8Var.U0(sf.b.S0(planeArr[0].getBuffer()), sf.b.S0(planeArr[1].getBuffer()), sf.b.S0(planeArr[2].getBuffer()), planeArr[0].getPixelStride(), planeArr[1].getPixelStride(), planeArr[2].getPixelStride(), planeArr[0].getRowStride(), planeArr[1].getRowStride(), planeArr[2].getRowStride(), neVar);
            } else {
                T0 = i8Var.T0(sf.b.S0(wj.c.f().d(aVar, false)), neVar);
            }
            ArrayList arrayList = new ArrayList();
            for (e4 e4Var : T0) {
                arrayList.add(new xj.a(e4Var, aVar.f()));
            }
            return arrayList;
        } catch (RemoteException e10) {
            throw new lj.a("Failed to detect with legacy face detector", 13, e10);
        }
    }

    @Override // yj.c
    public final boolean b() {
        if (this.f54557f != null || this.f54558g != null) {
            return false;
        }
        try {
            lb e10 = ka.e(DynamiteModule.d(this.f54553b, DynamiteModule.f13467b, "com.google.android.gms.vision.dynamite").c("com.google.android.gms.vision.face.ChimeraNativeFaceDetectorCreator"));
            sf.a S0 = sf.b.S0(this.f54553b);
            if (this.f54554c.c() == 2) {
                if (this.f54558g == null) {
                    this.f54558g = e10.Q0(S0, new g6(2, 2, 0, true, false, this.f54554c.a()));
                }
                if ((this.f54554c.d() == 2 || this.f54554c.b() == 2 || this.f54554c.e() == 2) && this.f54557f == null) {
                    this.f54557f = e10.Q0(S0, new g6(e(this.f54554c.e()), d(this.f54554c.d()), a(this.f54554c.b()), false, this.f54554c.g(), this.f54554c.a()));
                }
            } else if (this.f54557f == null) {
                this.f54557f = e10.Q0(S0, new g6(e(this.f54554c.e()), d(this.f54554c.d()), a(this.f54554c.b()), false, this.f54554c.g(), this.f54554c.a()));
            }
            if (this.f54557f == null && this.f54558g == null && !this.f54552a) {
                Log.d("LegacyFaceDelegate", "Request face optional module download.");
                pj.l.c(this.f54553b, "barcode");
                this.f54552a = true;
            }
            k.c(this.f54556e, false, ca.NO_ERROR);
            return false;
        } catch (RemoteException e11) {
            throw new lj.a("Failed to create legacy face detector.", 13, e11);
        } catch (DynamiteModule.a e12) {
            throw new lj.a("Failed to load deprecated vision dynamite module.", 13, e12);
        }
    }

    @Override // yj.c
    public final Pair c(vj.a aVar) {
        List list;
        if (this.f54557f == null && this.f54558g == null) {
            b();
        }
        i8 i8Var = this.f54557f;
        if (i8Var == null && this.f54558g == null) {
            throw new lj.a("Waiting for the face detection module to be downloaded. Please wait.", 14);
        }
        List list2 = null;
        if (i8Var != null) {
            list = f(i8Var, aVar);
            if (!this.f54554c.g()) {
                i.m(list);
            }
        } else {
            list = null;
        }
        i8 i8Var2 = this.f54558g;
        if (i8Var2 != null) {
            list2 = f(i8Var2, aVar);
            i.m(list2);
        }
        return new Pair(list, list2);
    }

    @Override // yj.c
    public final void zzb() {
        i8 i8Var = this.f54557f;
        if (i8Var != null) {
            try {
                i8Var.S0();
            } catch (RemoteException e10) {
                Log.e("LegacyFaceDelegate", "Failed to release legacy face detector.", e10);
            }
            this.f54557f = null;
        }
        i8 i8Var2 = this.f54558g;
        if (i8Var2 != null) {
            try {
                i8Var2.S0();
            } catch (RemoteException e11) {
                Log.e("LegacyFaceDelegate", "Failed to release legacy face detector.", e11);
            }
            this.f54558g = null;
        }
    }
}
