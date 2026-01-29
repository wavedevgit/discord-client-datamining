package tr;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n extends m {
    public static final File p(File file, File target, boolean z10, int i10) {
        Intrinsics.checkNotNullParameter(file, "<this>");
        Intrinsics.checkNotNullParameter(target, "target");
        if (file.exists()) {
            if (target.exists()) {
                if (z10) {
                    if (!target.delete()) {
                        throw new f(file, target, "Tried to overwrite the destination, but failed to delete it.");
                    }
                } else {
                    throw new f(file, target, "The destination file already exists.");
                }
            }
            if (file.isDirectory()) {
                if (target.mkdirs()) {
                    return target;
                }
                throw new h(file, target, "Failed to create target directory.");
            }
            File parentFile = target.getParentFile();
            if (parentFile != null) {
                parentFile.mkdirs();
            }
            FileInputStream fileInputStream = new FileInputStream(file);
            try {
                FileOutputStream fileOutputStream = new FileOutputStream(target);
                b.a(fileInputStream, fileOutputStream, i10);
                c.a(fileOutputStream, null);
                c.a(fileInputStream, null);
                return target;
            } finally {
            }
        } else {
            throw new p(file, null, "The source file doesn't exist.", 2, null);
        }
    }

    public static /* synthetic */ File q(File file, File file2, boolean z10, int i10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            z10 = false;
        }
        if ((i11 & 4) != 0) {
            i10 = 8192;
        }
        return p(file, file2, z10, i10);
    }

    public static boolean r(File file) {
        Intrinsics.checkNotNullParameter(file, "<this>");
        while (true) {
            boolean z10 = true;
            for (File file2 : m.o(file)) {
                if (file2.delete() || !file2.exists()) {
                    if (z10) {
                        break;
                    }
                }
                z10 = false;
            }
            return z10;
        }
    }

    public static String s(File file) {
        Intrinsics.checkNotNullParameter(file, "<this>");
        String name = file.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        return StringsKt.X0(name, '.', "");
    }

    public static String t(File file) {
        Intrinsics.checkNotNullParameter(file, "<this>");
        String name = file.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        return StringsKt.i1(name, ".", null, 2, null);
    }

    private static final List u(List list) {
        ArrayList arrayList = new ArrayList(list.size());
        Iterator it = list.iterator();
        while (it.hasNext()) {
            File file = (File) it.next();
            String name = file.getName();
            if (!Intrinsics.areEqual(name, ".")) {
                if (Intrinsics.areEqual(name, "..")) {
                    if (!arrayList.isEmpty() && !Intrinsics.areEqual(((File) CollectionsKt.z0(arrayList)).getName(), "..")) {
                        arrayList.remove(arrayList.size() - 1);
                    } else {
                        arrayList.add(file);
                    }
                } else {
                    arrayList.add(file);
                }
            }
        }
        return arrayList;
    }

    private static final g v(g gVar) {
        return new g(gVar.a(), u(gVar.b()));
    }

    public static final File w(File file, File relative) {
        Intrinsics.checkNotNullParameter(file, "<this>");
        Intrinsics.checkNotNullParameter(relative, "relative");
        if (k.b(relative)) {
            return relative;
        }
        String file2 = file.toString();
        Intrinsics.checkNotNullExpressionValue(file2, "toString(...)");
        if (file2.length() != 0) {
            char c10 = File.separatorChar;
            if (!StringsKt.Y(file2, c10, false, 2, null)) {
                return new File(file2 + c10 + relative);
            }
        }
        return new File(file2 + relative);
    }

    public static File x(File file, String relative) {
        Intrinsics.checkNotNullParameter(file, "<this>");
        Intrinsics.checkNotNullParameter(relative, "relative");
        return w(file, new File(relative));
    }

    public static String y(File file, File base) {
        Intrinsics.checkNotNullParameter(file, "<this>");
        Intrinsics.checkNotNullParameter(base, "base");
        String z10 = z(file, base);
        if (z10 != null) {
            return z10;
        }
        throw new IllegalArgumentException("this and base files have different roots: " + file + " and " + base + '.');
    }

    private static final String z(File file, File file2) {
        g v10 = v(k.c(file));
        g v11 = v(k.c(file2));
        if (!Intrinsics.areEqual(v10.a(), v11.a())) {
            return null;
        }
        int c10 = v11.c();
        int c11 = v10.c();
        int min = Math.min(c11, c10);
        int i10 = 0;
        while (i10 < min && Intrinsics.areEqual(v10.b().get(i10), v11.b().get(i10))) {
            i10++;
        }
        StringBuilder sb2 = new StringBuilder();
        int i11 = c10 - 1;
        if (i10 <= i11) {
            while (!Intrinsics.areEqual(((File) v11.b().get(i11)).getName(), "..")) {
                sb2.append("..");
                if (i11 != i10) {
                    sb2.append(File.separatorChar);
                }
                if (i11 != i10) {
                    i11--;
                }
            }
            return null;
        }
        if (i10 < c11) {
            if (i10 < c10) {
                sb2.append(File.separatorChar);
            }
            String separator = File.separator;
            Intrinsics.checkNotNullExpressionValue(separator, "separator");
            CollectionsKt.v0(CollectionsKt.f0(v10.b(), i10), sb2, separator, null, null, 0, null, null, 124, null);
        }
        return sb2.toString();
    }
}
