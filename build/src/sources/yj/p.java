package yj;

import android.content.Context;
import android.media.Image;
import android.os.RemoteException;
import android.util.Log;
import com.google.android.gms.dynamite.DynamiteModule;
import gf.q;
import java.util.ArrayList;
import java.util.List;
import ng.nk;
import ng.xe;
import ng.zh;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p implements l {

    /* renamed from: a  reason: collision with root package name */
    private boolean f55423a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f55424b;

    /* renamed from: c  reason: collision with root package name */
    private final ng.i f55425c;

    /* renamed from: d  reason: collision with root package name */
    private final nk f55426d;

    /* renamed from: e  reason: collision with root package name */
    private ng.k f55427e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Context context, vj.b bVar, nk nkVar) {
        ng.i iVar = new ng.i();
        this.f55425c = iVar;
        this.f55424b = context;
        iVar.f39873d = bVar.a();
        this.f55426d = nkVar;
    }

    @Override // yj.l
    public final boolean a() {
        if (this.f55427e == null) {
            try {
                ng.k R = ng.m.e(DynamiteModule.e(this.f55424b, DynamiteModule.f13823b, "com.google.android.gms.vision.dynamite").d("com.google.android.gms.vision.barcode.ChimeraNativeBarcodeDetectorCreator")).R(sf.b.W0(this.f55424b), this.f55425c);
                this.f55427e = R;
                if (R == null && !this.f55423a) {
                    Log.d("LegacyBarcodeScanner", "Request optional module download.");
                    tj.l.c(this.f55424b, "barcode");
                    this.f55423a = true;
                    b.e(this.f55426d, xe.OPTIONAL_MODULE_NOT_AVAILABLE);
                    throw new pj.a("Waiting for the barcode module to be downloaded. Please wait.", 14);
                }
                b.e(this.f55426d, xe.NO_ERROR);
                return false;
            } catch (RemoteException e10) {
                throw new pj.a("Failed to create legacy barcode detector.", 13, e10);
            } catch (DynamiteModule.a e11) {
                throw new pj.a("Failed to load deprecated vision dynamite module.", 13, e11);
            }
        }
        return false;
    }

    @Override // yj.l
    public final List c(zj.a aVar) {
        zh[] Y0;
        if (this.f55427e == null) {
            a();
        }
        ng.k kVar = this.f55427e;
        if (kVar != null) {
            ng.k kVar2 = (ng.k) q.l(kVar);
            ng.o oVar = new ng.o(aVar.l(), aVar.h(), 0, 0L, ak.b.a(aVar.k()));
            try {
                int g10 = aVar.g();
                if (g10 != -1) {
                    if (g10 != 17) {
                        if (g10 != 35) {
                            if (g10 == 842094169) {
                                Y0 = kVar2.X0(sf.b.W0(ak.c.f().d(aVar, false)), oVar);
                            } else {
                                throw new pj.a("Unsupported image format: " + aVar.g(), 3);
                            }
                        } else {
                            Image.Plane[] planeArr = (Image.Plane[]) q.l(aVar.j());
                            oVar.f40131d = planeArr[0].getRowStride();
                            Y0 = kVar2.X0(sf.b.W0(planeArr[0].getBuffer()), oVar);
                        }
                    } else {
                        Y0 = kVar2.X0(sf.b.W0(aVar.e()), oVar);
                    }
                } else {
                    Y0 = kVar2.Y0(sf.b.W0(aVar.d()), oVar);
                }
                ArrayList arrayList = new ArrayList();
                for (zh zhVar : Y0) {
                    arrayList.add(new wj.a(new o(zhVar), aVar.f()));
                }
                return arrayList;
            } catch (RemoteException e10) {
                throw new pj.a("Failed to detect with legacy barcode detector", 13, e10);
            }
        }
        throw new pj.a("Error initializing the legacy barcode scanner.", 14);
    }

    @Override // yj.l
    public final void zzb() {
        ng.k kVar = this.f55427e;
        if (kVar != null) {
            try {
                kVar.W0();
            } catch (RemoteException e10) {
                Log.e("LegacyBarcodeScanner", "Failed to release legacy barcode detector.", e10);
            }
            this.f55427e = null;
        }
    }
}
