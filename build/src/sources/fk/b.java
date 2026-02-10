package fk;

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
    private final Context f23761a;

    /* renamed from: b  reason: collision with root package name */
    private final ek.e f23762b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f23763c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f23764d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f23765e;

    /* renamed from: f  reason: collision with root package name */
    private final qd f23766f;

    /* renamed from: g  reason: collision with root package name */
    private le f23767g;

    /* renamed from: h  reason: collision with root package name */
    private le f23768h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context, ek.e eVar, qd qdVar) {
        this.f23761a = context;
        this.f23762b = eVar;
        this.f23766f = qdVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean a(Context context) {
        if (DynamiteModule.a(context, "com.google.mlkit.dynamite.face") > 0) {
            return true;
        }
        return false;
    }

    private final void e() {
        if (this.f23762b.c() == 2) {
            if (this.f23767g == null) {
                this.f23767g = f(new he(this.f23762b.e(), 1, 1, 2, false, this.f23762b.a()));
            }
            if ((this.f23762b.d() == 2 || this.f23762b.b() == 2 || this.f23762b.e() == 2) && this.f23768h == null) {
                this.f23768h = f(new he(this.f23762b.e(), this.f23762b.d(), this.f23762b.b(), 1, this.f23762b.g(), this.f23762b.a()));
            }
        } else if (this.f23768h == null) {
            this.f23768h = f(new he(this.f23762b.e(), this.f23762b.d(), this.f23762b.b(), 1, this.f23762b.g(), this.f23762b.a()));
        }
    }

    private final le f(he heVar) {
        if (this.f23764d) {
            return d(DynamiteModule.f14541c, "com.google.mlkit.dynamite.face", "com.google.mlkit.vision.face.bundled.internal.ThickFaceDetectorCreator", heVar);
        }
        return d(DynamiteModule.f14540b, "com.google.android.gms.vision.face", "com.google.android.gms.vision.face.mlkit.FaceDetectorCreator", heVar);
    }

    private static List g(le leVar, ck.a aVar) {
        if (aVar.g() == -1) {
            aVar = ck.a.b(dk.c.f().d(aVar, false), aVar.l(), aVar.h(), aVar.k(), 17);
        }
        try {
            List<je> W0 = leVar.W0(dk.d.b().a(aVar), new de(aVar.g(), aVar.l(), aVar.h(), dk.b.a(aVar.k()), SystemClock.elapsedRealtime()));
            ArrayList arrayList = new ArrayList();
            for (je jeVar : W0) {
                arrayList.add(new ek.a(jeVar, aVar.f()));
            }
            return arrayList;
        } catch (RemoteException e10) {
            throw new sj.a("Failed to run face detector.", 13, e10);
        }
    }

    @Override // fk.c
    public final boolean b() {
        if (this.f23768h == null && this.f23767g == null) {
            if (DynamiteModule.a(this.f23761a, "com.google.mlkit.dynamite.face") > 0) {
                this.f23764d = true;
                try {
                    e();
                } catch (RemoteException e10) {
                    throw new sj.a("Failed to create thick face detector.", 13, e10);
                } catch (DynamiteModule.a e11) {
                    throw new sj.a("Failed to load the bundled face module.", 13, e11);
                }
            } else {
                this.f23764d = false;
                try {
                    e();
                } catch (RemoteException e12) {
                    k.c(this.f23766f, this.f23764d, ca.OPTIONAL_MODULE_INIT_ERROR);
                    throw new sj.a("Failed to create thin face detector.", 13, e12);
                } catch (DynamiteModule.a e13) {
                    if (!this.f23765e) {
                        wj.l.c(this.f23761a, "face");
                        this.f23765e = true;
                    }
                    k.c(this.f23766f, this.f23764d, ca.OPTIONAL_MODULE_NOT_AVAILABLE);
                    throw new sj.a("Waiting for the face module to be downloaded. Please wait.", 14, e13);
                }
            }
            k.c(this.f23766f, this.f23764d, ca.NO_ERROR);
            return this.f23764d;
        }
        return this.f23764d;
    }

    @Override // fk.c
    public final Pair c(ck.a aVar) {
        List list;
        if (this.f23768h == null && this.f23767g == null) {
            b();
        }
        if (!this.f23763c) {
            try {
                le leVar = this.f23768h;
                if (leVar != null) {
                    leVar.X0();
                }
                le leVar2 = this.f23767g;
                if (leVar2 != null) {
                    leVar2.X0();
                }
                this.f23763c = true;
            } catch (RemoteException e10) {
                throw new sj.a("Failed to init face detector.", 13, e10);
            }
        }
        le leVar3 = this.f23768h;
        List list2 = null;
        if (leVar3 != null) {
            list = g(leVar3, aVar);
            if (!this.f23762b.g()) {
                i.m(list);
            }
        } else {
            list = null;
        }
        le leVar4 = this.f23767g;
        if (leVar4 != null) {
            list2 = g(leVar4, aVar);
            i.m(list2);
        }
        return new Pair(list, list2);
    }

    final le d(DynamiteModule.b bVar, String str, String str2, he heVar) {
        return oe.e(DynamiteModule.e(this.f23761a, bVar, str).d(str2)).C(tf.b.W0(this.f23761a), heVar);
    }

    @Override // fk.c
    public final void zzb() {
        try {
            le leVar = this.f23768h;
            if (leVar != null) {
                leVar.Y0();
                this.f23768h = null;
            }
            le leVar2 = this.f23767g;
            if (leVar2 != null) {
                leVar2.Y0();
                this.f23767g = null;
            }
        } catch (RemoteException e10) {
            Log.e("DecoupledFaceDelegate", "Failed to release face detector.", e10);
        }
        this.f23763c = false;
    }
}
