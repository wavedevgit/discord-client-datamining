package uj;

import android.content.Context;
import android.media.Image;
import android.os.RemoteException;
import android.util.Log;
import com.google.android.gms.dynamite.DynamiteModule;
import gf.q;
import java.util.ArrayList;
import java.util.List;
import mg.nk;
import mg.xe;
import mg.zh;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p implements l {

    /* renamed from: a  reason: collision with root package name */
    private boolean f50683a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f50684b;

    /* renamed from: c  reason: collision with root package name */
    private final mg.i f50685c;

    /* renamed from: d  reason: collision with root package name */
    private final nk f50686d;

    /* renamed from: e  reason: collision with root package name */
    private mg.k f50687e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Context context, rj.b bVar, nk nkVar) {
        mg.i iVar = new mg.i();
        this.f50685c = iVar;
        this.f50684b = context;
        iVar.f38048d = bVar.a();
        this.f50686d = nkVar;
    }

    @Override // uj.l
    public final boolean a() {
        if (this.f50687e == null) {
            try {
                mg.k d02 = mg.m.e(DynamiteModule.d(this.f50684b, DynamiteModule.f13467b, "com.google.android.gms.vision.dynamite").c("com.google.android.gms.vision.barcode.ChimeraNativeBarcodeDetectorCreator")).d0(sf.b.S0(this.f50684b), this.f50685c);
                this.f50687e = d02;
                if (d02 == null && !this.f50683a) {
                    Log.d("LegacyBarcodeScanner", "Request optional module download.");
                    pj.l.c(this.f50684b, "barcode");
                    this.f50683a = true;
                    b.e(this.f50686d, xe.OPTIONAL_MODULE_NOT_AVAILABLE);
                    throw new lj.a("Waiting for the barcode module to be downloaded. Please wait.", 14);
                }
                b.e(this.f50686d, xe.NO_ERROR);
                return false;
            } catch (RemoteException e10) {
                throw new lj.a("Failed to create legacy barcode detector.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new lj.a("Failed to load deprecated vision dynamite module.", 13, e11);
            }
        }
        return false;
    }

    @Override // uj.l
    public final List c(vj.a aVar) {
        zh[] U0;
        if (this.f50687e == null) {
            a();
        }
        mg.k kVar = this.f50687e;
        if (kVar != null) {
            mg.k kVar2 = (mg.k) q.l(kVar);
            mg.o oVar = new mg.o(aVar.l(), aVar.h(), 0, 0L, wj.b.a(aVar.k()));
            try {
                int g10 = aVar.g();
                if (g10 != -1) {
                    if (g10 != 17) {
                        if (g10 != 35) {
                            if (g10 == 842094169) {
                                U0 = kVar2.T0(sf.b.S0(wj.c.f().d(aVar, false)), oVar);
                            } else {
                                throw new lj.a("Unsupported image format: " + aVar.g(), 3);
                            }
                        } else {
                            Image.Plane[] planeArr = (Image.Plane[]) q.l(aVar.j());
                            oVar.f38306d = planeArr[0].getRowStride();
                            U0 = kVar2.T0(sf.b.S0(planeArr[0].getBuffer()), oVar);
                        }
                    } else {
                        U0 = kVar2.T0(sf.b.S0(aVar.e()), oVar);
                    }
                } else {
                    U0 = kVar2.U0(sf.b.S0(aVar.d()), oVar);
                }
                ArrayList arrayList = new ArrayList();
                for (zh zhVar : U0) {
                    arrayList.add(new sj.a(new o(zhVar), aVar.f()));
                }
                return arrayList;
            } catch (RemoteException e10) {
                throw new lj.a("Failed to detect with legacy barcode detector", 13, e10);
            }
        }
        throw new lj.a("Error initializing the legacy barcode scanner.", 14);
    }

    @Override // uj.l
    public final void zzb() {
        mg.k kVar = this.f50687e;
        if (kVar != null) {
            try {
                kVar.S0();
            } catch (RemoteException e10) {
                Log.e("LegacyBarcodeScanner", "Failed to release legacy barcode detector.", e10);
            }
            this.f50687e = null;
        }
    }
}
