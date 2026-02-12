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
    private final Context f23762a;

    /* renamed from: b  reason: collision with root package name */
    private final ek.e f23763b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f23764c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f23765d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f23766e;

    /* renamed from: f  reason: collision with root package name */
    private final qd f23767f;

    /* renamed from: g  reason: collision with root package name */
    private le f23768g;

    /* renamed from: h  reason: collision with root package name */
    private le f23769h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context, ek.e eVar, qd qdVar) {
        this.f23762a = context;
        this.f23763b = eVar;
        this.f23767f = qdVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean a(Context context) {
        if (DynamiteModule.a(context, "com.google.mlkit.dynamite.face") > 0) {
            return true;
        }
        return false;
    }

    private final void e() {
        if (this.f23763b.c() == 2) {
            if (this.f23768g == null) {
                this.f23768g = f(new he(this.f23763b.e(), 1, 1, 2, false, this.f23763b.a()));
            }
            if ((this.f23763b.d() == 2 || this.f23763b.b() == 2 || this.f23763b.e() == 2) && this.f23769h == null) {
                this.f23769h = f(new he(this.f23763b.e(), this.f23763b.d(), this.f23763b.b(), 1, this.f23763b.g(), this.f23763b.a()));
            }
        } else if (this.f23769h == null) {
            this.f23769h = f(new he(this.f23763b.e(), this.f23763b.d(), this.f23763b.b(), 1, this.f23763b.g(), this.f23763b.a()));
        }
    }

    private final le f(he heVar) {
        if (this.f23765d) {
            return d(DynamiteModule.f14542c, "com.google.mlkit.dynamite.face", "com.google.mlkit.vision.face.bundled.internal.ThickFaceDetectorCreator", heVar);
        }
        return d(DynamiteModule.f14541b, "com.google.android.gms.vision.face", "com.google.android.gms.vision.face.mlkit.FaceDetectorCreator", heVar);
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
        if (this.f23769h == null && this.f23768g == null) {
            if (DynamiteModule.a(this.f23762a, "com.google.mlkit.dynamite.face") > 0) {
                this.f23765d = true;
                try {
                    e();
                } catch (RemoteException e10) {
                    throw new sj.a("Failed to create thick face detector.", 13, e10);
                } catch (DynamiteModule.a e11) {
                    throw new sj.a("Failed to load the bundled face module.", 13, e11);
                }
            } else {
                this.f23765d = false;
                try {
                    e();
                } catch (RemoteException e12) {
                    k.c(this.f23767f, this.f23765d, ca.OPTIONAL_MODULE_INIT_ERROR);
                    throw new sj.a("Failed to create thin face detector.", 13, e12);
                } catch (DynamiteModule.a e13) {
                    if (!this.f23766e) {
                        wj.l.c(this.f23762a, "face");
                        this.f23766e = true;
                    }
                    k.c(this.f23767f, this.f23765d, ca.OPTIONAL_MODULE_NOT_AVAILABLE);
                    throw new sj.a("Waiting for the face module to be downloaded. Please wait.", 14, e13);
                }
            }
            k.c(this.f23767f, this.f23765d, ca.NO_ERROR);
            return this.f23765d;
        }
        return this.f23765d;
    }

    @Override // fk.c
    public final Pair c(ck.a aVar) {
        List list;
        if (this.f23769h == null && this.f23768g == null) {
            b();
        }
        if (!this.f23764c) {
            try {
                le leVar = this.f23769h;
                if (leVar != null) {
                    leVar.X0();
                }
                le leVar2 = this.f23768g;
                if (leVar2 != null) {
                    leVar2.X0();
                }
                this.f23764c = true;
            } catch (RemoteException e10) {
                throw new sj.a("Failed to init face detector.", 13, e10);
            }
        }
        le leVar3 = this.f23769h;
        List list2 = null;
        if (leVar3 != null) {
            list = g(leVar3, aVar);
            if (!this.f23763b.g()) {
                i.m(list);
            }
        } else {
            list = null;
        }
        le leVar4 = this.f23768g;
        if (leVar4 != null) {
            list2 = g(leVar4, aVar);
            i.m(list2);
        }
        return new Pair(list, list2);
    }

    final le d(DynamiteModule.b bVar, String str, String str2, he heVar) {
        return oe.e(DynamiteModule.e(this.f23762a, bVar, str).d(str2)).C(tf.b.W0(this.f23762a), heVar);
    }

    @Override // fk.c
    public final void zzb() {
        try {
            le leVar = this.f23769h;
            if (leVar != null) {
                leVar.Y0();
                this.f23769h = null;
            }
            le leVar2 = this.f23768g;
            if (leVar2 != null) {
                leVar2.Y0();
                this.f23768g = null;
            }
        } catch (RemoteException e10) {
            Log.e("DecoupledFaceDelegate", "Failed to release face detector.", e10);
        }
        this.f23764c = false;
    }
}
