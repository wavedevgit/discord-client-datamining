package ck;

import android.content.Context;
import android.os.RemoteException;
import android.os.SystemClock;
import android.util.Log;
import android.util.Pair;
import com.google.android.gms.dynamite.DynamiteModule;
import java.util.ArrayList;
import java.util.List;
import pg.ca;
import pg.de;
import pg.he;
import pg.je;
import pg.le;
import pg.oe;
import pg.qd;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final Context f7466a;

    /* renamed from: b  reason: collision with root package name */
    private final bk.e f7467b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f7468c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f7469d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f7470e;

    /* renamed from: f  reason: collision with root package name */
    private final qd f7471f;

    /* renamed from: g  reason: collision with root package name */
    private le f7472g;

    /* renamed from: h  reason: collision with root package name */
    private le f7473h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context, bk.e eVar, qd qdVar) {
        this.f7466a = context;
        this.f7467b = eVar;
        this.f7471f = qdVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean a(Context context) {
        if (DynamiteModule.a(context, "com.google.mlkit.dynamite.face") > 0) {
            return true;
        }
        return false;
    }

    private final void e() {
        if (this.f7467b.c() == 2) {
            if (this.f7472g == null) {
                this.f7472g = f(new he(this.f7467b.e(), 1, 1, 2, false, this.f7467b.a()));
            }
            if ((this.f7467b.d() == 2 || this.f7467b.b() == 2 || this.f7467b.e() == 2) && this.f7473h == null) {
                this.f7473h = f(new he(this.f7467b.e(), this.f7467b.d(), this.f7467b.b(), 1, this.f7467b.g(), this.f7467b.a()));
            }
        } else if (this.f7473h == null) {
            this.f7473h = f(new he(this.f7467b.e(), this.f7467b.d(), this.f7467b.b(), 1, this.f7467b.g(), this.f7467b.a()));
        }
    }

    private final le f(he heVar) {
        if (this.f7469d) {
            return d(DynamiteModule.f13824c, "com.google.mlkit.dynamite.face", "com.google.mlkit.vision.face.bundled.internal.ThickFaceDetectorCreator", heVar);
        }
        return d(DynamiteModule.f13823b, "com.google.android.gms.vision.face", "com.google.android.gms.vision.face.mlkit.FaceDetectorCreator", heVar);
    }

    private static List g(le leVar, zj.a aVar) {
        if (aVar.g() == -1) {
            aVar = zj.a.b(ak.c.f().d(aVar, false), aVar.l(), aVar.h(), aVar.k(), 17);
        }
        try {
            List<je> W0 = leVar.W0(ak.d.b().a(aVar), new de(aVar.g(), aVar.l(), aVar.h(), ak.b.a(aVar.k()), SystemClock.elapsedRealtime()));
            ArrayList arrayList = new ArrayList();
            for (je jeVar : W0) {
                arrayList.add(new bk.a(jeVar, aVar.f()));
            }
            return arrayList;
        } catch (RemoteException e10) {
            throw new pj.a("Failed to run face detector.", 13, e10);
        }
    }

    @Override // ck.c
    public final boolean b() {
        if (this.f7473h == null && this.f7472g == null) {
            if (DynamiteModule.a(this.f7466a, "com.google.mlkit.dynamite.face") > 0) {
                this.f7469d = true;
                try {
                    e();
                } catch (RemoteException e10) {
                    throw new pj.a("Failed to create thick face detector.", 13, e10);
                } catch (DynamiteModule.a e11) {
                    throw new pj.a("Failed to load the bundled face module.", 13, e11);
                }
            } else {
                this.f7469d = false;
                try {
                    e();
                } catch (RemoteException e12) {
                    k.c(this.f7471f, this.f7469d, ca.OPTIONAL_MODULE_INIT_ERROR);
                    throw new pj.a("Failed to create thin face detector.", 13, e12);
                } catch (DynamiteModule.a e13) {
                    if (!this.f7470e) {
                        tj.l.c(this.f7466a, "face");
                        this.f7470e = true;
                    }
                    k.c(this.f7471f, this.f7469d, ca.OPTIONAL_MODULE_NOT_AVAILABLE);
                    throw new pj.a("Waiting for the face module to be downloaded. Please wait.", 14, e13);
                }
            }
            k.c(this.f7471f, this.f7469d, ca.NO_ERROR);
            return this.f7469d;
        }
        return this.f7469d;
    }

    @Override // ck.c
    public final Pair c(zj.a aVar) {
        List list;
        if (this.f7473h == null && this.f7472g == null) {
            b();
        }
        if (!this.f7468c) {
            try {
                le leVar = this.f7473h;
                if (leVar != null) {
                    leVar.X0();
                }
                le leVar2 = this.f7472g;
                if (leVar2 != null) {
                    leVar2.X0();
                }
                this.f7468c = true;
            } catch (RemoteException e10) {
                throw new pj.a("Failed to init face detector.", 13, e10);
            }
        }
        le leVar3 = this.f7473h;
        List list2 = null;
        if (leVar3 != null) {
            list = g(leVar3, aVar);
            if (!this.f7467b.g()) {
                i.m(list);
            }
        } else {
            list = null;
        }
        le leVar4 = this.f7472g;
        if (leVar4 != null) {
            list2 = g(leVar4, aVar);
            i.m(list2);
        }
        return new Pair(list, list2);
    }

    final le d(DynamiteModule.b bVar, String str, String str2, he heVar) {
        return oe.e(DynamiteModule.e(this.f7466a, bVar, str).d(str2)).z(sf.b.W0(this.f7466a), heVar);
    }

    @Override // ck.c
    public final void zzb() {
        try {
            le leVar = this.f7473h;
            if (leVar != null) {
                leVar.Y0();
                this.f7473h = null;
            }
            le leVar2 = this.f7472g;
            if (leVar2 != null) {
                leVar2.Y0();
                this.f7472g = null;
            }
        } catch (RemoteException e10) {
            Log.e("DecoupledFaceDelegate", "Failed to release face detector.", e10);
        }
        this.f7468c = false;
    }
}
