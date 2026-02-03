package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g3 {

    /* renamed from: b  reason: collision with root package name */
    private static final th.k0 f16417b = new th.k0("MergeSliceTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16418a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g3(n0 n0Var) {
        this.f16418a = n0Var;
    }

    private static void b(File file, File file2) {
        File[] listFiles;
        if (file.isDirectory()) {
            file2.mkdirs();
            for (File file3 : file.listFiles()) {
                b(file3, new File(file2, file3.getName()));
            }
            if (!file.delete()) {
                throw new w1("Unable to delete directory: ".concat(String.valueOf(file)));
            }
        } else if (!file2.exists()) {
            if (file.renameTo(file2)) {
                return;
            }
            throw new w1("Unable to move file: ".concat(String.valueOf(file)));
        } else {
            throw new w1("File clashing with existing file from other slice: ".concat(file2.toString()));
        }
    }

    public final void a(f3 f3Var) {
        File D = this.f16418a.D(f3Var.f16672b, f3Var.f16405c, f3Var.f16406d, f3Var.f16407e);
        if (D.exists()) {
            File w10 = this.f16418a.w(f3Var.f16672b, f3Var.f16405c, f3Var.f16406d);
            if (!w10.exists()) {
                w10.mkdirs();
            }
            b(D, w10);
            try {
                this.f16418a.a(f3Var.f16672b, f3Var.f16405c, f3Var.f16406d, this.f16418a.q(f3Var.f16672b, f3Var.f16405c, f3Var.f16406d) + 1);
                return;
            } catch (IOException e10) {
                f16417b.b("Writing merge checkpoint failed with %s.", e10.getMessage());
                throw new w1("Writing merge checkpoint failed.", e10, f3Var.f16671a);
            }
        }
        throw new w1(String.format("Cannot find verified files for slice %s.", f3Var.f16407e), f3Var.f16671a);
    }
}
