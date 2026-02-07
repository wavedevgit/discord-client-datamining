package com.discord.minibsdiff;

import bs.c;
import com.discord.minibsdiff.BSDiff;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.RandomAccessFile;
import java.util.Arrays;
import java.util.Iterator;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
import kotlin.sequences.Sequence;
import kotlin.sequences.k;
import kotlin.text.Charsets;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0012\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\bÆ\u0002\u0018\u00002\u00020\u0001:\u0001\u001cB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0016\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t2\u0006\u0010\u000b\u001a\u00020\u0007H\u0002J\u001e\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u0011\u001a\u00020\u000fJ8\u0010\u0012\u001a\u00020\r2\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00162\u0006\u0010\u0018\u001a\u00020\u00162\u0006\u0010\u0019\u001a\u00020\u00162\u0006\u0010\u001a\u001a\u00020\u001bH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u001d"}, d2 = {"Lcom/discord/minibsdiff/BSDiff;", "", "<init>", "()V", "BSDIFF_CONFIG_MAGIC", "", "BUFFER_SIZE_BYTES", "", "chunkRange", "Lkotlin/sequences/Sequence;", "", "total", "bspatchStreaming", "", "oldPath", "Ljava/io/File;", "patchPath", "newPath", "bspatchStreamingInner", "oldRandomAccessFile", "Ljava/io/RandomAccessFile;", "oldInputStream", "Ljava/io/InputStream;", "ctrlInputStream", "diffInputStream", "extraInputStream", "newOutputStream", "Ljava/io/OutputStream;", "BsPatchError", "minibsdiff_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BSDiff {
    @NotNull
    private static final byte[] BSDIFF_CONFIG_MAGIC;
    private static final long BUFFER_SIZE_BYTES = 1000000;
    @NotNull
    public static final BSDiff INSTANCE = new BSDiff();

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\u0018\u00002\u00060\u0001j\u0002`\u0002B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006¨\u0006\u0007"}, d2 = {"Lcom/discord/minibsdiff/BSDiff$BsPatchError;", "Ljava/lang/Exception;", "Lkotlin/Exception;", "message", "", "<init>", "(Ljava/lang/String;)V", "minibsdiff_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class BsPatchError extends Exception {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public BsPatchError(@NotNull String message) {
            super(message);
            Intrinsics.checkNotNullParameter(message, "message");
        }
    }

    static {
        byte[] bytes = "MBSDIF43".getBytes(Charsets.UTF_8);
        Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
        BSDIFF_CONFIG_MAGIC = bytes;
    }

    private BSDiff() {
    }

    private final void bspatchStreamingInner(RandomAccessFile randomAccessFile, InputStream inputStream, InputStream inputStream2, InputStream inputStream3, InputStream inputStream4, OutputStream outputStream) {
        byte[] bArr = new byte[1000000];
        byte[] bArr2 = new byte[1000000];
        InputStream inputStream5 = inputStream2;
        if (Arrays.equals(InputStreamUtilsKt.readNBytesCompat(inputStream5, 8), BSDIFF_CONFIG_MAGIC)) {
            long readOffset = InputStreamUtilsKt.readOffset(inputStream5);
            long readOffset2 = InputStreamUtilsKt.readOffset(inputStream5);
            long readOffset3 = InputStreamUtilsKt.readOffset(inputStream5);
            long j10 = 32 + readOffset;
            InputStreamUtilsKt.skipNBytesCompat(inputStream3, j10);
            InputStreamUtilsKt.skipNBytesCompat(inputStream4, j10 + readOffset2);
            long j11 = 0;
            while (j11 < readOffset3) {
                long readOffset4 = InputStreamUtilsKt.readOffset(inputStream5);
                long readOffset5 = InputStreamUtilsKt.readOffset(inputStream5);
                long readOffset6 = InputStreamUtilsKt.readOffset(inputStream5);
                if (j11 + readOffset4 + readOffset5 <= readOffset3) {
                    Iterator it = chunkRange(readOffset4).iterator();
                    while (true) {
                        boolean hasNext = it.hasNext();
                        Iterator it2 = it;
                        int i10 = 0;
                        if (!hasNext) {
                            break;
                        }
                        int intValue = ((Number) it2.next()).intValue();
                        long j12 = j11;
                        InputStreamUtilsKt.readNBytesCompat(inputStream, bArr, 0, intValue);
                        InputStreamUtilsKt.readNBytesCompat(inputStream3, bArr2, 0, intValue);
                        int i11 = 0;
                        while (i11 < intValue) {
                            bArr[i11] = (byte) (bArr[i11] + bArr2[i11]);
                            i11++;
                            i10 = 0;
                        }
                        outputStream.write(bArr, i10, intValue);
                        it = it2;
                        j11 = j12;
                    }
                    long j13 = j11;
                    for (Number number : chunkRange(readOffset5)) {
                        int intValue2 = number.intValue();
                        InputStreamUtilsKt.readNBytesCompat(inputStream4, bArr, 0, intValue2);
                        outputStream.write(bArr, 0, intValue2);
                    }
                    randomAccessFile.seek(randomAccessFile.getFilePointer() + readOffset6);
                    j11 = j13 + readOffset4 + readOffset5;
                    inputStream5 = inputStream2;
                } else {
                    throw new BsPatchError("Corrupted patch, attempting to make new file that's too big");
                }
            }
            outputStream.close();
            return;
        }
        throw new BsPatchError("Bad magic config header for patch file!");
    }

    private final Sequence<Integer> chunkRange(final long j10) {
        return k.R(CollectionsKt.b0(d.t(d.v(0, j10), BUFFER_SIZE_BYTES)), new Function1() { // from class: n7.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                int chunkRange$lambda$0;
                chunkRange$lambda$0 = BSDiff.chunkRange$lambda$0(j10, ((Long) obj).longValue());
                return Integer.valueOf(chunkRange$lambda$0);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int chunkRange$lambda$0(long j10, long j11) {
        return (int) Math.min(j10 - j11, (long) BUFFER_SIZE_BYTES);
    }

    public final void bspatchStreaming(@NotNull File oldPath, @NotNull File patchPath, @NotNull File newPath) {
        Intrinsics.checkNotNullParameter(oldPath, "oldPath");
        Intrinsics.checkNotNullParameter(patchPath, "patchPath");
        Intrinsics.checkNotNullParameter(newPath, "newPath");
        RandomAccessFile randomAccessFile = new RandomAccessFile(oldPath, "r");
        InputStream inputStream = RandomFileAccessInputStreamKt.inputStream(randomAccessFile);
        BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream(patchPath), 8192);
        BufferedInputStream bufferedInputStream2 = new BufferedInputStream(new FileInputStream(patchPath), 8192);
        BufferedInputStream bufferedInputStream3 = new BufferedInputStream(new FileInputStream(patchPath), 8192);
        BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(new FileOutputStream(newPath), 8192);
        try {
            try {
                INSTANCE.bspatchStreamingInner(randomAccessFile, inputStream, bufferedInputStream, bufferedInputStream2, bufferedInputStream3, bufferedOutputStream);
                Unit unit = Unit.f32056a;
                try {
                    c.a(bufferedOutputStream, null);
                    c.a(bufferedInputStream3, null);
                    c.a(bufferedInputStream2, null);
                    c.a(bufferedInputStream, null);
                    c.a(inputStream, null);
                } finally {
                }
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    c.a(bufferedInputStream2, th2);
                    throw th3;
                }
            }
        } catch (Throwable th4) {
            try {
                throw th4;
            } catch (Throwable th5) {
                c.a(bufferedOutputStream, th4);
                throw th5;
            }
        }
    }
}
