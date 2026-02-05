package bk;

import android.content.Context;
import android.os.RemoteException;
import android.os.SystemClock;
import android.util.Log;
import android.util.Pair;
import com.google.android.gms.dynamite.DynamiteModule;
import java.util.ArrayList;
import java.util.List;
import og.ca;
import og.de;
import og.he;
import og.je;
import og.le;
import og.oe;
import og.qd;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final Context f6463a;

    /* renamed from: b  reason: collision with root package name */
    private final ak.e f6464b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f6465c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f6466d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f6467e;

    /* renamed from: f  reason: collision with root package name */
    private final qd f6468f;

    /* renamed from: g  reason: collision with root package name */
    private le f6469g;

    /* renamed from: h  reason: collision with root package name */
    private le f6470h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context, ak.e eVar, qd qdVar) {
        this.f6463a = context;
        this.f6464b = eVar;
        this.f6468f = qdVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean a(Context context) {
        if (DynamiteModule.a(context, "com.google.mlkit.dynamite.face") > 0) {
            return true;
        }
        return false;
    }

    private final void e() {
        if (this.f6464b.c() == 2) {
            if (this.f6469g == null) {
                this.f6469g = f(new he(this.f6464b.e(), 1, 1, 2, false, this.f6464b.a()));
            }
            if ((this.f6464b.d() == 2 || this.f6464b.b() == 2 || this.f6464b.e() == 2) && this.f6470h == null) {
                this.f6470h = f(new he(this.f6464b.e(), this.f6464b.d(), this.f6464b.b(), 1, this.f6464b.g(), this.f6464b.a()));
            }
        } else if (this.f6470h == null) {
            this.f6470h = f(new he(this.f6464b.e(), this.f6464b.d(), this.f6464b.b(), 1, this.f6464b.g(), this.f6464b.a()));
        }
    }

    private final le f(he heVar) {
        if (this.f6466d) {
            return d(DynamiteModule.f13861c, "com.google.mlkit.dynamite.face", "com.google.mlkit.vision.face.bundled.internal.ThickFaceDetectorCreator", heVar);
        }
        return d(DynamiteModule.f13860b, "com.google.android.gms.vision.face", "com.google.android.gms.vision.face.mlkit.FaceDetectorCreator", heVar);
    }

    private static List g(le leVar, yj.a aVar) {
        if (aVar.g() == -1) {
            aVar = yj.a.b(zj.c.f().d(aVar, false), aVar.l(), aVar.h(), aVar.k(), 17);
        }
        try {
            List<je> W0 = leVar.W0(zj.d.b().a(aVar), new de(aVar.g(), aVar.l(), aVar.h(), zj.b.a(aVar.k()), SystemClock.elapsedRealtime()));
            ArrayList arrayList = new ArrayList();
            for (je jeVar : W0) {
                arrayList.add(new ak.a(jeVar, aVar.f()));
            }
            return arrayList;
        } catch (RemoteException e10) {
            throw new oj.a("Failed to run face detector.", 13, e10);
        }
    }

    @Override // bk.c
    public final boolean b() {
        if (this.f6470h == null && this.f6469g == null) {
            if (DynamiteModule.a(this.f6463a, "com.google.mlkit.dynamite.face") > 0) {
                this.f6466d = true;
                try {
                    e();
                } catch (RemoteException e10) {
                    throw new oj.a("Failed to create thick face detector.", 13, e10);
                } catch (DynamiteModule.a e11) {
                    throw new oj.a("Failed to load the bundled face module.", 13, e11);
                }
            } else {
                this.f6466d = false;
                try {
                    e();
                } catch (RemoteException e12) {
                    k.c(this.f6468f, this.f6466d, ca.OPTIONAL_MODULE_INIT_ERROR);
                    throw new oj.a("Failed to create thin face detector.", 13, e12);
                } catch (DynamiteModule.a e13) {
                    if (!this.f6467e) {
                        sj.l.c(this.f6463a, "face");
                        this.f6467e = true;
                    }
                    k.c(this.f6468f, this.f6466d, ca.OPTIONAL_MODULE_NOT_AVAILABLE);
                    throw new oj.a("Waiting for the face module to be downloaded. Please wait.", 14, e13);
                }
            }
            k.c(this.f6468f, this.f6466d, ca.NO_ERROR);
            return this.f6466d;
        }
        return this.f6466d;
    }

    @Override // bk.c
    public final Pair c(yj.a aVar) {
        List list;
        if (this.f6470h == null && this.f6469g == null) {
            b();
        }
        if (!this.f6465c) {
            try {
                le leVar = this.f6470h;
                if (leVar != null) {
                    leVar.X0();
                }
                le leVar2 = this.f6469g;
                if (leVar2 != null) {
                    leVar2.X0();
                }
                this.f6465c = true;
            } catch (RemoteException e10) {
                throw new oj.a("Failed to init face detector.", 13, e10);
            }
        }
        le leVar3 = this.f6470h;
        List list2 = null;
        if (leVar3 != null) {
            list = g(leVar3, aVar);
            if (!this.f6464b.g()) {
                i.m(list);
            }
        } else {
            list = null;
        }
        le leVar4 = this.f6469g;
        if (leVar4 != null) {
            list2 = g(leVar4, aVar);
            i.m(list2);
        }
        return new Pair(list, list2);
    }

    final le d(DynamiteModule.b bVar, String str, String str2, he heVar) {
        return oe.e(DynamiteModule.d(this.f6463a, bVar, str).c(str2)).d0(sf.b.W0(this.f6463a), heVar);
    }

    @Override // bk.c
    public final void zzb() {
        try {
            le leVar = this.f6470h;
            if (leVar != null) {
                leVar.Y0();
                this.f6470h = null;
            }
            le leVar2 = this.f6469g;
            if (leVar2 != null) {
                leVar2.Y0();
                this.f6469g = null;
            }
        } catch (RemoteException e10) {
            Log.e("DecoupledFaceDelegate", "Failed to release face detector.", e10);
        }
        this.f6465c = false;
    }
}
