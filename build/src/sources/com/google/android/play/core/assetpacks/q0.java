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
final class q0 extends wh.o {

    /* renamed from: d  reason: collision with root package name */
    private final File f15967d;

    /* renamed from: e  reason: collision with root package name */
    private final File f15968e;

    /* renamed from: i  reason: collision with root package name */
    private final NavigableMap f15969i = new TreeMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    public q0(File file, File file2) {
        this.f15967d = file;
        this.f15968e = file2;
        List<File> a10 = d4.a(file, file2);
        if (!a10.isEmpty()) {
            long j10 = 0;
            for (File file3 : a10) {
                this.f15969i.put(Long.valueOf(j10), file3);
                j10 += file3.length();
            }
            return;
        }
        throw new w1(String.format("Virtualized slice archive empty for %s, %s", file, file2));
    }

    private final InputStream m(long j10, Long l10) {
        FileInputStream fileInputStream = new FileInputStream((File) this.f15969i.get(l10));
        if (fileInputStream.skip(j10 - l10.longValue()) == j10 - l10.longValue()) {
            return fileInputStream;
        }
        throw new w1(String.format("Virtualized slice archive corrupt, could not skip in file with key %s", l10));
    }

    @Override // wh.o
    public final long a() {
        Map.Entry lastEntry = this.f15969i.lastEntry();
        return ((Long) lastEntry.getKey()).longValue() + ((File) lastEntry.getValue()).length();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // wh.o
    public final InputStream h(long j10, long j11) {
        if (j10 >= 0 && j11 >= 0) {
            long j12 = j10 + j11;
            if (j12 <= a()) {
                Long l10 = (Long) this.f15969i.floorKey(Long.valueOf(j10));
                Long l11 = (Long) this.f15969i.floorKey(Long.valueOf(j12));
                if (l10.equals(l11)) {
                    return new p0(m(j10, l10), j11);
                }
                ArrayList arrayList = new ArrayList();
                arrayList.add(m(j10, l10));
                Collection values = this.f15969i.subMap(l10, false, l11, false).values();
                if (!values.isEmpty()) {
                    arrayList.add(new vh.d(Collections.enumeration(values)));
                }
                arrayList.add(new p0(new FileInputStream((File) this.f15969i.get(l11)), j11 - (l11.longValue() - j10)));
                return new SequenceInputStream(Collections.enumeration(arrayList));
            }
            throw new w1(String.format("Trying to access archive out of bounds. Archive ends at: %s. Tried accessing: %s", Long.valueOf(a()), Long.valueOf(j12)));
        }
        throw new w1(String.format("Invalid input parameters %s, %s", Long.valueOf(j10), Long.valueOf(j11)));
    }
}
