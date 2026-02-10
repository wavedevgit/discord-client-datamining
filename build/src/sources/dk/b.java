package dk;

import android.content.Context;
import android.os.RemoteException;
import android.os.SystemClock;
import android.util.Log;
import android.util.Pair;
import com.google.android.gms.dynamite.DynamiteModule;
import java.util.ArrayList;
import java.util.List;
import qg.ca;
import qg.de;
import qg.he;
import qg.je;
import qg.le;
import qg.oe;
import qg.qd;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final Context f20745a;

    /* renamed from: b  reason: collision with root package name */
    private final ck.e f20746b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f20747c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f20748d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f20749e;

    /* renamed from: f  reason: collision with root package name */
    private final qd f20750f;

    /* renamed from: g  reason: collision with root package name */
    private le f20751g;

    /* renamed from: h  reason: collision with root package name */
    private le f20752h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context, ck.e eVar, qd qdVar) {
        this.f20745a = context;
        this.f20746b = eVar;
        this.f20750f = qdVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean a(Context context) {
        if (DynamiteModule.a(context, "com.google.mlkit.dynamite.face") > 0) {
            return true;
        }
        return false;
    }

    private final void e() {
        if (this.f20746b.c() == 2) {
            if (this.f20751g == null) {
                this.f20751g = f(new he(this.f20746b.e(), 1, 1, 2, false, this.f20746b.a()));
            }
            if ((this.f20746b.d() == 2 || this.f20746b.b() == 2 || this.f20746b.e() == 2) && this.f20752h == null) {
                this.f20752h = f(new he(this.f20746b.e(), this.f20746b.d(), this.f20746b.b(), 1, this.f20746b.g(), this.f20746b.a()));
            }
        } else if (this.f20752h == null) {
            this.f20752h = f(new he(this.f20746b.e(), this.f20746b.d(), this.f20746b.b(), 1, this.f20746b.g(), this.f20746b.a()));
        }
    }

    private final le f(he heVar) {
        if (this.f20748d) {
            return d(DynamiteModule.f13964c, "com.google.mlkit.dynamite.face", "com.google.mlkit.vision.face.bundled.internal.ThickFaceDetectorCreator", heVar);
        }
        return d(DynamiteModule.f13963b, "com.google.android.gms.vision.face", "com.google.android.gms.vision.face.mlkit.FaceDetectorCreator", heVar);
    }

    private static List g(le leVar, ak.a aVar) {
        if (aVar.g() == -1) {
            aVar = ak.a.b(bk.c.f().d(aVar, false), aVar.l(), aVar.h(), aVar.k(), 17);
        }
        try {
            List<je> W0 = leVar.W0(bk.d.b().a(aVar), new de(aVar.g(), aVar.l(), aVar.h(), bk.b.a(aVar.k()), SystemClock.elapsedRealtime()));
            ArrayList arrayList = new ArrayList();
            for (je jeVar : W0) {
                arrayList.add(new ck.a(jeVar, aVar.f()));
            }
            return arrayList;
        } catch (RemoteException e10) {
            throw new qj.a("Failed to run face detector.", 13, e10);
        }
    }

    @Override // dk.c
    public final boolean b() {
        if (this.f20752h == null && this.f20751g == null) {
            if (DynamiteModule.a(this.f20745a, "com.google.mlkit.dynamite.face") > 0) {
                this.f20748d = true;
                try {
                    e();
                } catch (RemoteException e10) {
                    throw new qj.a("Failed to create thick face detector.", 13, e10);
                } catch (DynamiteModule.a e11) {
                    throw new qj.a("Failed to load the bundled face module.", 13, e11);
                }
            } else {
                this.f20748d = false;
                try {
                    e();
                } catch (RemoteException e12) {
                    k.c(this.f20750f, this.f20748d, ca.OPTIONAL_MODULE_INIT_ERROR);
                    throw new qj.a("Failed to create thin face detector.", 13, e12);
                } catch (DynamiteModule.a e13) {
                    if (!this.f20749e) {
                        uj.l.c(this.f20745a, "face");
                        this.f20749e = true;
                    }
                    k.c(this.f20750f, this.f20748d, ca.OPTIONAL_MODULE_NOT_AVAILABLE);
                    throw new qj.a("Waiting for the face module to be downloaded. Please wait.", 14, e13);
                }
            }
            k.c(this.f20750f, this.f20748d, ca.NO_ERROR);
            return this.f20748d;
        }
        return this.f20748d;
    }

    @Override // dk.c
    public final Pair c(ak.a aVar) {
        List list;
        if (this.f20752h == null && this.f20751g == null) {
            b();
        }
        if (!this.f20747c) {
            try {
                le leVar = this.f20752h;
                if (leVar != null) {
                    leVar.X0();
                }
                le leVar2 = this.f20751g;
                if (leVar2 != null) {
                    leVar2.X0();
                }
                this.f20747c = true;
            } catch (RemoteException e10) {
                throw new qj.a("Failed to init face detector.", 13, e10);
            }
        }
        le leVar3 = this.f20752h;
        List list2 = null;
        if (leVar3 != null) {
            list = g(leVar3, aVar);
            if (!this.f20746b.g()) {
                i.m(list);
            }
        } else {
            list = null;
        }
        le leVar4 = this.f20751g;
        if (leVar4 != null) {
            list2 = g(leVar4, aVar);
            i.m(list2);
        }
        return new Pair(list, list2);
    }

    final le d(DynamiteModule.b bVar, String str, String str2, he heVar) {
        return oe.e(DynamiteModule.e(this.f20745a, bVar, str).d(str2)).C(tf.b.W0(this.f20745a), heVar);
    }

    @Override // dk.c
    public final void zzb() {
        try {
            le leVar = this.f20752h;
            if (leVar != null) {
                leVar.Y0();
                this.f20752h = null;
            }
            le leVar2 = this.f20751g;
            if (leVar2 != null) {
                leVar2.Y0();
                this.f20751g = null;
            }
        } catch (RemoteException e10) {
            Log.e("DecoupledFaceDelegate", "Failed to release face detector.", e10);
        }
        this.f20747c = false;
    }
}
