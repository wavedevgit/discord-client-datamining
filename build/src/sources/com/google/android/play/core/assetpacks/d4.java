package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.FileInputStream;
import java.io.FilenameFilter;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class d4 {

    /* renamed from: a  reason: collision with root package name */
    private static final Pattern f15731a = Pattern.compile("[0-9]+-(NAM|LFH)\\.dat");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List a(File file, File file2) {
        File[] fileArr;
        ArrayList arrayList = new ArrayList();
        File[] listFiles = file2.listFiles(new FilenameFilter() { // from class: com.google.android.play.core.assetpacks.c4
            @Override // java.io.FilenameFilter
            public final boolean accept(File file3, String str) {
                boolean matches;
                matches = d4.f15731a.matcher(str).matches();
                return matches;
            }
        });
        if (listFiles == null) {
            fileArr = new File[0];
        } else {
            File[] fileArr2 = new File[listFiles.length];
            int i10 = 0;
            while (true) {
                int length = listFiles.length;
                if (i10 < length) {
                    File file3 = listFiles[i10];
                    int parseInt = Integer.parseInt(file3.getName().split("-")[0]);
                    if (parseInt > length || fileArr2[parseInt] != null) {
                        break;
                    }
                    fileArr2[parseInt] = file3;
                    i10++;
                } else {
                    fileArr = fileArr2;
                    break;
                }
            }
            throw new w1("Metadata folder ordering corrupt.");
        }
        for (File file4 : fileArr) {
            arrayList.add(file4);
            if (file4.getName().contains("LFH")) {
                FileInputStream fileInputStream = new FileInputStream(file4);
                try {
                    h4 h10 = new f1(fileInputStream).h();
                    if (h10.c() != null) {
                        File file5 = new File(file, h10.c());
                        if (file5.exists()) {
                            arrayList.add(file5);
                            fileInputStream.close();
                        } else {
                            throw new w1(String.format("Missing asset file %s during slice reconstruction.", file5.getCanonicalPath()));
                        }
                    } else {
                        throw new w1("Metadata files corrupt. Could not read local file header.");
                    }
                } catch (Throwable th2) {
                    try {
                        fileInputStream.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                    throw th2;
                }
            }
        }
        return arrayList;
    }
}
