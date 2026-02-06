package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g3 {

    /* renamed from: b  reason: collision with root package name */
    private static final xh.k0 f15759b = new xh.k0("MergeSliceTaskHandler");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15760a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g3(n0 n0Var) {
        this.f15760a = n0Var;
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
        File D = this.f15760a.D(f3Var.f16014b, f3Var.f15747c, f3Var.f15748d, f3Var.f15749e);
        if (D.exists()) {
            File w10 = this.f15760a.w(f3Var.f16014b, f3Var.f15747c, f3Var.f15748d);
            if (!w10.exists()) {
                w10.mkdirs();
            }
            b(D, w10);
            try {
                this.f15760a.a(f3Var.f16014b, f3Var.f15747c, f3Var.f15748d, this.f15760a.q(f3Var.f16014b, f3Var.f15747c, f3Var.f15748d) + 1);
                return;
            } catch (IOException e10) {
                f15759b.b("Writing merge checkpoint failed with %s.", e10.getMessage());
                throw new w1("Writing merge checkpoint failed.", e10, f3Var.f16013a);
            }
        }
        throw new w1(String.format("Cannot find verified files for slice %s.", f3Var.f15749e), f3Var.f16013a);
    }
}
