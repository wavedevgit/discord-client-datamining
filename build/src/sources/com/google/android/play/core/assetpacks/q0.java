package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.SequenceInputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.NavigableMap;
import java.util.TreeMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class q0 extends th.o {

    /* renamed from: d  reason: collision with root package name */
    private final File f16605d;

    /* renamed from: e  reason: collision with root package name */
    private final File f16606e;

    /* renamed from: i  reason: collision with root package name */
    private final NavigableMap f16607i = new TreeMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    public q0(File file, File file2) {
        this.f16605d = file;
        this.f16606e = file2;
        List<File> a10 = d4.a(file, file2);
        if (!a10.isEmpty()) {
            long j10 = 0;
            for (File file3 : a10) {
                this.f16607i.put(Long.valueOf(j10), file3);
                j10 += file3.length();
            }
            return;
        }
        throw new w1(String.format("Virtualized slice archive empty for %s, %s", file, file2));
    }

    private final InputStream n(long j10, Long l10) {
        FileInputStream fileInputStream = new FileInputStream((File) this.f16607i.get(l10));
        if (fileInputStream.skip(j10 - l10.longValue()) == j10 - l10.longValue()) {
            return fileInputStream;
        }
        throw new w1(String.format("Virtualized slice archive corrupt, could not skip in file with key %s", l10));
    }

    @Override // th.o
    public final long a() {
        Map.Entry lastEntry = this.f16607i.lastEntry();
        return ((Long) lastEntry.getKey()).longValue() + ((File) lastEntry.getValue()).length();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // th.o
    public final InputStream h(long j10, long j11) {
        if (j10 >= 0 && j11 >= 0) {
            long j12 = j10 + j11;
            if (j12 <= a()) {
                Long l10 = (Long) this.f16607i.floorKey(Long.valueOf(j10));
                Long l11 = (Long) this.f16607i.floorKey(Long.valueOf(j12));
                if (l10.equals(l11)) {
                    return new p0(n(j10, l10), j11);
                }
                ArrayList arrayList = new ArrayList();
                arrayList.add(n(j10, l10));
                Collection values = this.f16607i.subMap(l10, false, l11, false).values();
                if (!values.isEmpty()) {
                    arrayList.add(new sh.d(Collections.enumeration(values)));
                }
                arrayList.add(new p0(new FileInputStream((File) this.f16607i.get(l11)), j11 - (l11.longValue() - j10)));
                return new SequenceInputStream(Collections.enumeration(arrayList));
            }
            throw new w1(String.format("Trying to access archive out of bounds. Archive ends at: %s. Tried accessing: %s", Long.valueOf(a()), Long.valueOf(j12)));
        }
        throw new w1(String.format("Invalid input parameters %s, %s", Long.valueOf(j10), Long.valueOf(j11)));
    }
}
