package pb;

import android.content.Context;
import com.facebook.soloader.c0;
import com.facebook.soloader.e0;
import com.facebook.soloader.g0;
import com.facebook.soloader.p;
import java.io.File;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Context f45057a;

    public c(Context context) {
        this.f45057a = context;
    }

    @Override // pb.h
    public boolean a(UnsatisfiedLinkError unsatisfiedLinkError, e0[] e0VarArr) {
        g0.c[] o10;
        if (!(unsatisfiedLinkError instanceof c0)) {
            return false;
        }
        p.b("SoLoader", "Checking /data/app missing libraries.");
        File file = new File(this.f45057a.getApplicationInfo().nativeLibraryDir);
        if (!file.exists()) {
            p.b("SoLoader", "Native library directory " + file + " does not exist, exiting /data/app recovery.");
            return false;
        }
        ArrayList arrayList = new ArrayList();
        int length = e0VarArr.length;
        int i10 = 0;
        while (true) {
            if (i10 >= length) {
                break;
            }
            e0 e0Var = e0VarArr[i10];
            if (!(e0Var instanceof com.facebook.soloader.c)) {
                i10++;
            } else {
                com.facebook.soloader.c cVar = (com.facebook.soloader.c) e0Var;
                try {
                    for (g0.c cVar2 : cVar.o()) {
                        if (!new File(file, cVar2.f11051d).exists()) {
                            arrayList.add(cVar2.f11051d);
                        }
                    }
                    if (arrayList.isEmpty()) {
                        p.b("SoLoader", "No libraries missing from " + file);
                        return false;
                    }
                    p.b("SoLoader", "Missing libraries from " + file + ": " + arrayList.toString() + ", will run prepare on tbe backup so source");
                    cVar.e(0);
                } catch (Exception e10) {
                    p.c("SoLoader", "Encountered an exception while recovering from /data/app failure ", e10);
                    return false;
                }
            }
        }
        for (e0 e0Var2 : e0VarArr) {
            if ((e0Var2 instanceof com.facebook.soloader.f) && !(e0Var2 instanceof com.facebook.soloader.c)) {
                ((com.facebook.soloader.f) e0Var2).h();
            }
        }
        p.b("SoLoader", "Successfully recovered from /data/app disk failure.");
        return true;
    }
}
