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
    private final Context f54521a;

    /* renamed from: b  reason: collision with root package name */
    private final xj.e f54522b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f54523c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f54524d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f54525e;

    /* renamed from: f  reason: collision with root package name */
    private final qd f54526f;

    /* renamed from: g  reason: collision with root package name */
    private le f54527g;

    /* renamed from: h  reason: collision with root package name */
    private le f54528h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context, xj.e eVar, qd qdVar) {
        this.f54521a = context;
        this.f54522b = eVar;
        this.f54526f = qdVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean a(Context context) {
        if (DynamiteModule.a(context, "com.google.mlkit.dynamite.face") > 0) {
            return true;
        }
        return false;
    }

    private final void e() {
        if (this.f54522b.c() == 2) {
            if (this.f54527g == null) {
                this.f54527g = f(new he(this.f54522b.e(), 1, 1, 2, false, this.f54522b.a()));
            }
            if ((this.f54522b.d() == 2 || this.f54522b.b() == 2 || this.f54522b.e() == 2) && this.f54528h == null) {
                this.f54528h = f(new he(this.f54522b.e(), this.f54522b.d(), this.f54522b.b(), 1, this.f54522b.g(), this.f54522b.a()));
            }
        } else if (this.f54528h == null) {
            this.f54528h = f(new he(this.f54522b.e(), this.f54522b.d(), this.f54522b.b(), 1, this.f54522b.g(), this.f54522b.a()));
        }
    }

    private final le f(he heVar) {
        if (this.f54524d) {
            return d(DynamiteModule.f13468c, "com.google.mlkit.dynamite.face", "com.google.mlkit.vision.face.bundled.internal.ThickFaceDetectorCreator", heVar);
        }
        return d(DynamiteModule.f13467b, "com.google.android.gms.vision.face", "com.google.android.gms.vision.face.mlkit.FaceDetectorCreator", heVar);
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
        if (this.f54528h == null && this.f54527g == null) {
            if (DynamiteModule.a(this.f54521a, "com.google.mlkit.dynamite.face") > 0) {
                this.f54524d = true;
                try {
                    e();
                } catch (RemoteException e10) {
                    throw new lj.a("Failed to create thick face detector.", 13, e10);
                } catch (DynamiteModule.a e11) {
                    throw new lj.a("Failed to load the bundled face module.", 13, e11);
                }
            } else {
                this.f54524d = false;
                try {
                    e();
                } catch (RemoteException e12) {
                    k.c(this.f54526f, this.f54524d, ca.OPTIONAL_MODULE_INIT_ERROR);
                    throw new lj.a("Failed to create thin face detector.", 13, e12);
                } catch (DynamiteModule.a e13) {
                    if (!this.f54525e) {
                        pj.l.c(this.f54521a, "face");
                        this.f54525e = true;
                    }
                    k.c(this.f54526f, this.f54524d, ca.OPTIONAL_MODULE_NOT_AVAILABLE);
                    throw new lj.a("Waiting for the face module to be downloaded. Please wait.", 14, e13);
                }
            }
            k.c(this.f54526f, this.f54524d, ca.NO_ERROR);
            return this.f54524d;
        }
        return this.f54524d;
    }

    @Override // yj.c
    public final Pair c(vj.a aVar) {
        List list;
        if (this.f54528h == null && this.f54527g == null) {
            b();
        }
        if (!this.f54523c) {
            try {
                le leVar = this.f54528h;
                if (leVar != null) {
                    leVar.T0();
                }
                le leVar2 = this.f54527g;
                if (leVar2 != null) {
                    leVar2.T0();
                }
                this.f54523c = true;
            } catch (RemoteException e10) {
                throw new lj.a("Failed to init face detector.", 13, e10);
            }
        }
        le leVar3 = this.f54528h;
        List list2 = null;
        if (leVar3 != null) {
            list = g(leVar3, aVar);
            if (!this.f54522b.g()) {
                i.m(list);
            }
        } else {
            list = null;
        }
        le leVar4 = this.f54527g;
        if (leVar4 != null) {
            list2 = g(leVar4, aVar);
            i.m(list2);
        }
        return new Pair(list, list2);
    }

    final le d(DynamiteModule.b bVar, String str, String str2, he heVar) {
        return oe.e(DynamiteModule.d(this.f54521a, bVar, str).c(str2)).V(sf.b.S0(this.f54521a), heVar);
    }

    @Override // yj.c
    public final void zzb() {
        try {
            le leVar = this.f54528h;
            if (leVar != null) {
                leVar.U0();
                this.f54528h = null;
            }
            le leVar2 = this.f54527g;
            if (leVar2 != null) {
                leVar2.U0();
                this.f54527g = null;
            }
        } catch (RemoteException e10) {
            Log.e("DecoupledFaceDelegate", "Failed to release face detector.", e10);
        }
        this.f54523c = false;
    }
}
