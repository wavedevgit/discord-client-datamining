package yj;

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
    private final Context f54763a;

    /* renamed from: b  reason: collision with root package name */
    private final xj.e f54764b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f54765c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f54766d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f54767e;

    /* renamed from: f  reason: collision with root package name */
    private final qd f54768f;

    /* renamed from: g  reason: collision with root package name */
    private le f54769g;

    /* renamed from: h  reason: collision with root package name */
    private le f54770h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context, xj.e eVar, qd qdVar) {
        this.f54763a = context;
        this.f54764b = eVar;
        this.f54768f = qdVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean a(Context context) {
        if (DynamiteModule.a(context, "com.google.mlkit.dynamite.face") > 0) {
            return true;
        }
        return false;
    }

    private final void e() {
        if (this.f54764b.c() == 2) {
            if (this.f54769g == null) {
                this.f54769g = f(new he(this.f54764b.e(), 1, 1, 2, false, this.f54764b.a()));
            }
            if ((this.f54764b.d() == 2 || this.f54764b.b() == 2 || this.f54764b.e() == 2) && this.f54770h == null) {
                this.f54770h = f(new he(this.f54764b.e(), this.f54764b.d(), this.f54764b.b(), 1, this.f54764b.g(), this.f54764b.a()));
            }
        } else if (this.f54770h == null) {
            this.f54770h = f(new he(this.f54764b.e(), this.f54764b.d(), this.f54764b.b(), 1, this.f54764b.g(), this.f54764b.a()));
        }
    }

    private final le f(he heVar) {
        if (this.f54766d) {
            return d(DynamiteModule.f14500c, "com.google.mlkit.dynamite.face", "com.google.mlkit.vision.face.bundled.internal.ThickFaceDetectorCreator", heVar);
        }
        return d(DynamiteModule.f14499b, "com.google.android.gms.vision.face", "com.google.android.gms.vision.face.mlkit.FaceDetectorCreator", heVar);
    }

    private static List g(le leVar, vj.a aVar) {
        if (aVar.g() == -1) {
            aVar = vj.a.b(wj.c.f().d(aVar, false), aVar.l(), aVar.h(), aVar.k(), 17);
        }
        try {
            List<je> S0 = leVar.S0(wj.d.b().a(aVar), new de(aVar.g(), aVar.l(), aVar.h(), wj.b.a(aVar.k()), SystemClock.elapsedRealtime()));
            ArrayList arrayList = new ArrayList();
            for (je jeVar : S0) {
                arrayList.add(new xj.a(jeVar, aVar.f()));
            }
            return arrayList;
        } catch (RemoteException e10) {
            throw new lj.a("Failed to run face detector.", 13, e10);
        }
    }

    @Override // yj.c
    public final boolean b() {
        if (this.f54770h == null && this.f54769g == null) {
            if (DynamiteModule.a(this.f54763a, "com.google.mlkit.dynamite.face") > 0) {
                this.f54766d = true;
                try {
                    e();
                } catch (RemoteException e10) {
                    throw new lj.a("Failed to create thick face detector.", 13, e10);
                } catch (DynamiteModule.a e11) {
                    throw new lj.a("Failed to load the bundled face module.", 13, e11);
                }
            } else {
                this.f54766d = false;
                try {
                    e();
                } catch (RemoteException e12) {
                    k.c(this.f54768f, this.f54766d, ca.OPTIONAL_MODULE_INIT_ERROR);
                    throw new lj.a("Failed to create thin face detector.", 13, e12);
                } catch (DynamiteModule.a e13) {
                    if (!this.f54767e) {
                        pj.l.c(this.f54763a, "face");
                        this.f54767e = true;
                    }
                    k.c(this.f54768f, this.f54766d, ca.OPTIONAL_MODULE_NOT_AVAILABLE);
                    throw new lj.a("Waiting for the face module to be downloaded. Please wait.", 14, e13);
                }
            }
            k.c(this.f54768f, this.f54766d, ca.NO_ERROR);
            return this.f54766d;
        }
        return this.f54766d;
    }

    @Override // yj.c
    public final Pair c(vj.a aVar) {
        List list;
        if (this.f54770h == null && this.f54769g == null) {
            b();
        }
        if (!this.f54765c) {
            try {
                le leVar = this.f54770h;
                if (leVar != null) {
                    leVar.T0();
                }
                le leVar2 = this.f54769g;
                if (leVar2 != null) {
                    leVar2.T0();
                }
                this.f54765c = true;
            } catch (RemoteException e10) {
                throw new lj.a("Failed to init face detector.", 13, e10);
            }
        }
        le leVar3 = this.f54770h;
        List list2 = null;
        if (leVar3 != null) {
            list = g(leVar3, aVar);
            if (!this.f54764b.g()) {
                i.m(list);
            }
        } else {
            list = null;
        }
        le leVar4 = this.f54769g;
        if (leVar4 != null) {
            list2 = g(leVar4, aVar);
            i.m(list2);
        }
        return new Pair(list, list2);
    }

    final le d(DynamiteModule.b bVar, String str, String str2, he heVar) {
        return oe.e(DynamiteModule.d(this.f54763a, bVar, str).c(str2)).V(sf.b.S0(this.f54763a), heVar);
    }

    @Override // yj.c
    public final void zzb() {
        try {
            le leVar = this.f54770h;
            if (leVar != null) {
                leVar.U0();
                this.f54770h = null;
            }
            le leVar2 = this.f54769g;
            if (leVar2 != null) {
                leVar2.U0();
                this.f54769g = null;
            }
        } catch (RemoteException e10) {
            Log.e("DecoupledFaceDelegate", "Failed to release face detector.", e10);
        }
        this.f54765c = false;
    }
}
